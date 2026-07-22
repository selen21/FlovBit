"use client";
import { useState, useEffect } from "react";
import { FiPlus, FiSearch, FiFilter, FiMoreHorizontal, FiX } from "react-icons/fi";

export default function BoardPage() {
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [issues, setIssues] = useState<any[]>([]);
  const [columns, setColumns] = useState(["To Do", "In Progress", "Done"]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [draggedIssueId, setDraggedIssueId] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    workspaceId: "",
    status: "To Do",
    priority: "Low"
  });

  useEffect(() => {
    const fetchAllData = async () => {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      if (!token || !email) return;

      try {
        const wsRes = await fetch(`http://localhost:8081/api/v1/workspaces/user/${email}`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        if (wsRes.ok) {
          const wsData = await wsRes.json();
          setWorkspaces(wsData);

          let allIssues: any[] = [];
          
          for (const ws of wsData) {
            const issueRes = await fetch(`http://localhost:8081/api/v1/issues/workspace/${ws.id}`, {
              headers: { "Authorization": `Bearer ${token}` }
            });
            
            if (issueRes.ok) {
              const issuesData = await issueRes.json();
              const issuesWithWs = issuesData.map((iss: any) => ({
                ...iss, 
                workspaceId: ws.id, 
                workspaceName: ws.name
              }));
              allIssues = [...allIssues, ...issuesWithWs];
            }
          }
          setIssues(allIssues);
        }
      } catch (err) {
        console.error("Veriler çekilemedi:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAllData();
  }, []);

  const handleDragStart = (e: React.DragEvent, issueId: number) => {
    setDraggedIssueId(issueId);
    e.dataTransfer.setData("text/plain", issueId.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    if (!draggedIssueId) return;

    const originalIssues = [...issues];
    setIssues(prev => prev.map(iss => iss.id === draggedIssueId ? { ...iss, status: newStatus } : iss));

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8081/api/v1/issues/${draggedIssueId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        setIssues(originalIssues);
        alert("Durum güncellenirken hata oluştu.");
      }
    } catch (error) {
      setIssues(originalIssues);
      console.error(error);
    } finally {
      setDraggedIssueId(null);
    }
  };

  const openIssueModal = (defaultStatus = "To Do") => {
    if (workspaces.length === 0) {
      alert("Lütfen önce bir Çalışma Alanı (Workspace) oluşturun.");
      return;
    }
    setFormData({
      title: "",
      workspaceId: workspaces[0].id.toString(),
      status: defaultStatus,
      priority: "Low"
    });
    setIsModalOpen(true);
  };

  const handleSubmitIssue = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8081/api/v1/issues/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newIssue = await response.json();
        const selectedWs = workspaces.find(w => w.id.toString() === formData.workspaceId);
        newIssue.workspaceId = selectedWs.id;
        newIssue.workspaceName = selectedWs.name;
        
        setIssues([...issues, newIssue]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Görev eklenemedi:", error);
    }
  };

  const handleAddColumn = () => {
    const newColName = window.prompt("Yeni Kolon Adını Girin (Örn: In Review):");
    if (newColName && newColName.trim() !== "" && !columns.includes(newColName)) {
      setColumns([...columns, newColName]);
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = priorityFilter === "All" || issue.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case "high": return "text-orange-500";
      case "urgent": return "text-red-500";
      case "medium": return "text-yellow-500";
      default: return "text-blue-500";
    }
  };

  return (
    <div className="flex flex-col h-full font-sans animate-in fade-in duration-300 relative transition-colors duration-200">
      
      {/* --- ÜST BAR (Araçlar ve Filtreler) --- */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 dark:border-[#1e232d] shrink-0 bg-white dark:bg-[#0b0d12]">
        <div className="flex items-center gap-4">
          <h1 className="text-slate-900 dark:text-white text-[20px] font-bold">Main Board</h1>
          <div className="h-5 w-[1px] bg-gray-200 dark:bg-[#1e232d]"></div>
          
          <div className="flex items-center gap-3">
            {/* Arama Kutusu */}
            <div className="flex items-center bg-gray-100 dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] rounded-md px-3 py-1.5 focus-within:border-blue-500 dark:focus-within:border-[#5c9dff] transition-colors">
              <FiSearch className="text-gray-400 dark:text-[#848d9c] text-[14px] mr-2" />
              <input 
                type="text" 
                placeholder="Search issues..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-[13px] text-slate-900 dark:text-white w-[150px] placeholder-gray-400 dark:placeholder-[#64748b]"
              />
            </div>
            
            {/* Öncelik Filtresi */}
            <div className="flex items-center bg-gray-100 dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] rounded-md px-2 py-1.5 transition-colors">
              <FiFilter className="text-gray-400 dark:text-[#848d9c] text-[14px] mr-2" />
              <select 
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="bg-transparent border-none outline-none text-[13px] text-gray-600 dark:text-[#848d9c] cursor-pointer"
              >
                <option value="All" className="dark:bg-[#11141b]">All Priorities</option>
                <option value="Low" className="dark:bg-[#11141b]">Low</option>
                <option value="Medium" className="dark:bg-[#11141b]">Medium</option>
                <option value="High" className="dark:bg-[#11141b]">High</option>
                <option value="Urgent" className="dark:bg-[#11141b]">Urgent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ana Yeni Görev Butonu */}
        <button 
          onClick={() => openIssueModal()}
          className="flex items-center gap-2 bg-blue-600 dark:bg-[#5c9dff] text-white dark:text-[#0b0d12] hover:bg-blue-700 dark:hover:bg-[#4a8bee] px-4 py-1.5 rounded-md text-[13px] font-bold transition-colors cursor-pointer"
        >
          <FiPlus className="text-[16px]" /> New Issue
        </button>
      </div>

      {/* --- KANBAN SÜTUNLARI (BOARD) --- */}
      <div className="flex-1 overflow-x-auto p-8 custom-scrollbar">
        {isLoading ? (
          <div className="text-gray-500 dark:text-[#848d9c] flex justify-center mt-10">Board Yükleniyor...</div>
        ) : (
          <div className="flex items-start gap-6 h-full min-w-max">
            
            {columns.map((colStatus) => {
              const colIssues = filteredIssues.filter(iss => iss.status === colStatus);

              return (
                <div 
                  key={colStatus} 
                  className="w-[320px] flex flex-col max-h-full"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, colStatus)}
                >
                  {/* Sütun Başlığı */}
                  <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-800 dark:text-[#e2e8f0] text-[14px] font-bold">{colStatus}</h3>
                      <span className="bg-gray-200 dark:bg-[#1e232d] text-gray-600 dark:text-[#848d9c] text-[11px] font-bold px-2 py-0.5 rounded-full">
                        {colIssues.length}
                      </span>
                    </div>
                    <button 
                      onClick={() => openIssueModal(colStatus)}
                      className="text-gray-400 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <FiPlus className="text-[16px]" />
                    </button>
                  </div>

                  {/* Görev Kartları */}
                  <div className="flex flex-col gap-3 overflow-y-auto pb-4 custom-scrollbar min-h-[150px] rounded-xl">
                    {colIssues.map((task) => (
                      <div 
                        key={task.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id)}
                        className={`bg-white dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] hover:border-blue-300 dark:hover:border-[#2a3140] rounded-xl p-4 cursor-grab active:cursor-grabbing group transition-all shadow-sm dark:shadow-none ${draggedIssueId === task.id ? 'opacity-50' : 'opacity-100'}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-gray-400 dark:text-[#848d9c] text-[11px] font-mono tracking-wider">{task.workspaceName?.toUpperCase()}</span>
                          <button className="text-gray-400 dark:text-[#848d9c] opacity-0 group-hover:opacity-100 hover:text-slate-900 dark:hover:text-white transition-all">
                            <FiMoreHorizontal />
                          </button>
                        </div>
                        
                        <p className="text-slate-900 dark:text-[#e2e8f0] text-[14px] font-medium leading-relaxed mb-4">
                          {task.title}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`flex items-center gap-1 ${getPriorityColor(task.priority)} bg-gray-100 dark:bg-[#1e232d] px-2 py-1 rounded text-[11px] font-bold`}>
                              <span className="w-2 h-2 rounded-full currentColor bg-current"></span>
                              {task.priority || "Low"}
                            </div>
                          </div>
                          <div className="w-6 h-6 bg-blue-50 dark:bg-[#1c2436] border border-blue-100 dark:border-[#2a3140] rounded-full flex items-center justify-center text-blue-600 dark:text-white text-[10px] font-bold">
                            U
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {colIssues.length === 0 && (
                      <div className="h-[80px] border-2 border-dashed border-gray-200 dark:border-[#1e232d] rounded-xl flex items-center justify-center text-gray-400 dark:text-[#848d9c] text-[12px]">
                        Sürükle veya Ekle
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Yeni Kolon Ekleme Butonu */}
            <button 
              onClick={handleAddColumn}
              className="w-[320px] shrink-0 flex items-center justify-center gap-2 bg-transparent border border-dashed border-gray-300 dark:border-[#1e232d] hover:border-gray-400 dark:hover:border-[#2a3140] hover:bg-gray-100 dark:hover:bg-[#11141b]/50 text-gray-500 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white rounded-xl py-4 text-[13px] font-bold transition-all h-[90px] cursor-pointer"
            >
              <FiPlus className="text-[16px]" /> Add Column
            </button>

          </div>
        )}
      </div>

      {/* --- ISSUE OLUŞTURMA MODALI (POPUP) --- */}
      {isModalOpen && (
        <div className="absolute inset-0 z-50 bg-black/40 dark:bg-[#0b0d12]/80 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] w-[450px] rounded-2xl p-6 shadow-2xl transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-900 dark:text-white text-[18px] font-bold">Create New Issue</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                <FiX className="text-[20px]" />
              </button>
            </div>

            <form onSubmit={handleSubmitIssue} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label className="text-slate-800 dark:text-[#e2e8f0] text-[13px] font-medium">Issue Title</label>
                <input 
                  type="text" 
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="What needs to be done?"
                  className="bg-gray-50 dark:bg-[#0b0d12] border border-gray-200 dark:border-[#2a3140] rounded-lg px-4 py-2.5 text-slate-900 dark:text-[#e2e8f0] text-[14px] outline-none focus:border-blue-500 dark:focus:border-[#5c9dff]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-800 dark:text-[#e2e8f0] text-[13px] font-medium">Workspace</label>
                <select 
                  value={formData.workspaceId}
                  onChange={(e) => setFormData({...formData, workspaceId: e.target.value})}
                  className="bg-gray-50 dark:bg-[#0b0d12] border border-gray-200 dark:border-[#2a3140] rounded-lg px-4 py-2.5 text-slate-900 dark:text-[#e2e8f0] text-[14px] outline-none focus:border-blue-500 dark:focus:border-[#5c9dff] cursor-pointer"
                >
                  {workspaces.map(w => (
                    <option key={w.id} value={w.id} className="dark:bg-[#11141b]">{w.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 dark:text-[#e2e8f0] text-[13px] font-medium">Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="bg-gray-50 dark:bg-[#0b0d12] border border-gray-200 dark:border-[#2a3140] rounded-lg px-4 py-2.5 text-slate-900 dark:text-[#e2e8f0] text-[14px] outline-none focus:border-blue-500 dark:focus:border-[#5c9dff] cursor-pointer"
                  >
                    {columns.map(c => (
                      <option key={c} value={c} className="dark:bg-[#11141b]">{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 dark:text-[#e2e8f0] text-[13px] font-medium">Priority</label>
                  <select 
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="bg-gray-50 dark:bg-[#0b0d12] border border-gray-200 dark:border-[#2a3140] rounded-lg px-4 py-2.5 text-slate-900 dark:text-[#e2e8f0] text-[14px] outline-none focus:border-blue-500 dark:focus:border-[#5c9dff] cursor-pointer"
                  >
                    <option value="Low" className="dark:bg-[#11141b]">Low</option>
                    <option value="Medium" className="dark:bg-[#11141b]">Medium</option>
                    <option value="High" className="dark:bg-[#11141b]">High</option>
                    <option value="Urgent" className="dark:bg-[#11141b]">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-500 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white text-[13px] font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-blue-600 dark:bg-[#5c9dff] text-white dark:text-[#0b0d12] px-6 py-2 rounded-lg font-bold text-[13px] hover:bg-blue-700 dark:hover:bg-[#4a8bee] transition-colors cursor-pointer"
                >
                  Create Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}