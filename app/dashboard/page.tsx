"use client";
import { 
  FiBell, FiSearch, FiCode, FiCreditCard, FiSettings, FiLogOut, 
  FiSun, FiClipboard, FiLayers, FiRefreshCcw, FiZap,
  FiClock, FiAlertTriangle, FiCheckCircle, FiInbox, FiEye, FiPlus
} from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [workspaces, setWorkspaces] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // Kullanıcının e-posta adresini arayüzde (sol altta) göstermek için state
    const [userEmail, setUserEmail] = useState(""); 

   // 1. Sayfa yüklendiğinde Verileri (Workspaces) Çek
  useEffect(() => {
    const fetchData = async () => {
      // --- YENİ EKLENEN KISIM: URL'den Google/GitHub biletini yakalama ---
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");
      const urlEmail = urlParams.get("email");

      if (urlToken && urlEmail) {
        localStorage.setItem("token", urlToken);
        localStorage.setItem("email", urlEmail);
        // Parametreleri URL'den silerek temiz ve güvenli bir görünüm sağlıyoruz
        window.history.replaceState({}, document.title, "/dashboard");
      }
      // -------------------------------------------------------------------

      // SENİN ESKİ VE ÇALIŞAN KODUN BURADAN İTİBAREN AYNEN DEVAM EDİYOR:
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      // Token veya email yoksa giriş yapılmamış demektir, ana sayfaya at
      if (!token || !email) {
          window.location.href = "/";
          return;
      }
      
      setUserEmail(email);

      try {
        const res = await fetch(`http://localhost:8081/api/v1/workspaces/user/${email}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` // Güvenlik biletini ekledik
          }
        });
        
        if (res.ok) {
            const data = await res.json();
            setWorkspaces(data);
        }
      } catch (err) {
        console.error("Veriler çekilemedi:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

    // 2. Yeni Çalışma Alanı (Workspace) Oluşturma Fonksiyonu
    const handleCreateWorkspace = async () => {
        // Tasarımı bozmamak için şimdilik tarayıcının prompt penceresini kullanıyoruz
        const workspaceName = window.prompt("Yeni Çalışma Alanı (Workspace) adını girin:");
        if (!workspaceName) return; // İptal edilirse veya boş girilirse çık

        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        try {
            const response = await fetch("http://localhost:8081/api/v1/workspaces/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: workspaceName,
                    email: email
                })
            });

            if (response.ok) {
                const newWorkspace = await response.json();
                alert("Çalışma alanı başarıyla oluşturuldu!");
                // Sayfayı yenilemeden yeni çalışma alanını listeye ekliyoruz
                setWorkspaces([...workspaces, newWorkspace]); 
            } else {
                alert("Oluşturulurken bir hata oluştu.");
            }
        } catch (error) {
            console.error("Workspace oluşturma hatası:", error);
        }
    };

    // 3. Yeni Görev (Issue) Ekleme Fonksiyonu
    const handleCreateIssue = async () => {
        if (workspaces.length === 0) {
            alert("Lütfen önce bir Çalışma Alanı (Workspace) oluşturun!");
            return;
        }

        const issueTitle = window.prompt("Yeni Görev (Issue) adını girin:");
        if (!issueTitle) return;

        const token = localStorage.getItem("token");
        // Şimdilik varsayılan olarak kullanıcının ilk çalışma alanına ekliyoruz
        const defaultWorkspaceId = workspaces[0].id; 

        try {
            const response = await fetch("http://localhost:8081/api/v1/issues/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: issueTitle,
                    status: "To Do",
                    priority: "High",
                    workspaceId: defaultWorkspaceId
                })
            });

            if (response.ok) {
                alert("Görev başarıyla eklendi!");
            }
        } catch (error) {
            console.error("Görev ekleme hatası:", error);
        }
    };

    // 4. Çıkış Yapma (Logout) Fonksiyonu
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        window.location.href = "/"; // Çıkış yapınca kayıt ekranına yönlendir
    };

  // --- DİNAMİK HESAPLAMALAR ---
  
  // 1. Projedeki Toplam Görevleri (Total Issues) Hesapla
  const totalIssuesCount = workspaces.reduce((total, workspace) => {
    // Eğer workspace'in içinde issues listesi varsa uzunluğunu al, yoksa 0 ekle
    return total + (workspace.issues ? workspace.issues.length : 0);
  }, 0);

  // 2. Sana Ait / Aktif Görevleri (My Issues) Hesapla
  // Örneğin: "Done" (Tamamlandı) olmayan görevleri sayalım
  const activeIssuesCount = workspaces.reduce((total, workspace) => {
    if (!workspace.issues) return total;
    
    const activeInWorkspace = workspace.issues.filter((issue: any) => issue.status !== "Done").length;
    return total + activeInWorkspace;
  }, 0);

  // -----------------------------
  
  return (
    <div className="flex h-screen w-full bg-[#0b0d12] text-[14px] font-sans antialiased text-[#e2e8f0] relative overflow-hidden">

      {/* --- 2. PARÇA: ANA EKRAN --- */}
      <main className="flex-1 bg-[#0b0d12] flex flex-col h-screen overflow-y-auto pb-24 relative">
        
        {/* İçerik Alanı */}
        {activeTab === "dashboard" && (
        <div className="p-8 max-w-[1200px] w-full">
          
          <div className="mb-8">
            <span className="text-[#848d9c] text-[13px] mb-4 block">Dashboard</span>
            <span className="text-[11px] font-bold text-[#e2e8f0] tracking-wider uppercase block mb-1">Welcome Back</span>
            <h1 className="text-white text-[28px] font-bold tracking-tight">Dashboard</h1>
          </div>

          {/* 4'lü Özet Kartları */}
          <div className="grid grid-cols-4 gap-5 mb-10">
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5 flex flex-col justify-between h-[116px]">
              <div className="flex justify-between items-start">
                <span className="text-[#848d9c] text-[11px] font-bold tracking-wider uppercase">My Issues</span>
                <div className="w-7 h-7 rounded bg-[#1c2436] text-[#5c9dff] flex items-center justify-center">
                  <FiClipboard className="text-[14px]" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                {/* DİNAMİK VERİ EKLENDİ */}
                <span className="text-white text-[28px] font-bold leading-none">{activeIssuesCount}</span>
                <span className="text-[#848d9c] text-[13px] mb-[3px]">Assigned to you</span>
              </div>
            </div>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5 flex flex-col justify-between h-[116px]">
              <div className="flex justify-between items-start">
                <span className="text-[#848d9c] text-[11px] font-bold tracking-wider uppercase">Total Issues</span>
                <div className="w-7 h-7 rounded bg-[#1c2436] text-[#5c9dff] flex items-center justify-center">
                  <FiLayers className="text-[14px]" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                {/* DİNAMİK VERİ EKLENDİ */}
                <span className="text-white text-[28px] font-bold leading-none">{totalIssuesCount}</span>
                <span className="text-[#848d9c] text-[13px] mb-[3px]">In this project</span>
              </div>
            </div>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5 flex flex-col justify-between h-[116px]">
              <div className="flex justify-between items-start">
                <span className="text-[#848d9c] text-[11px] font-bold tracking-wider uppercase">Active Cycles</span>
                <div className="w-7 h-7 rounded bg-[#2c1d3b] text-[#a855f7] flex items-center justify-center">
                  <FiRefreshCcw className="text-[14px]" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-white text-[28px] font-bold leading-none">0</span>
                <span className="text-[#848d9c] text-[13px] mb-[3px]">Sprints</span>
              </div>
            </div>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5 flex flex-col justify-between h-[116px]">
              <div className="flex justify-between items-start">
                <span className="text-[#848d9c] text-[11px] font-bold tracking-wider uppercase">Live Feed</span>
                <div className="w-7 h-7 rounded bg-[#1a2e25] text-[#22c55e] flex items-center justify-center">
                  <FiZap className="text-[14px]" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                <span className="text-[#848d9c] text-[13px]">Real-time updates</span>
              </div>
            </div>
          </div>

          {/* MY WORK */}
          <div>
            <h2 className="text-white text-[18px] font-bold tracking-wide mb-4">My Work</h2>
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-[#0b0d12] border border-[#1e232d] rounded-xl flex flex-col h-[220px]">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                  <FiClock className="text-[#e2e8f0] text-[15px]" />
                  <span className="text-[#e2e8f0] text-[13px] font-semibold">Today Focus</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <FiCheckCircle className="text-[#848d9c] text-[22px] mb-4" />
                  <span className="text-white text-[14px] font-semibold mb-1">Nothing due soon</span>
                  <span className="text-[#848d9c] text-[13px]">No high-priority or due-soon issues</span>
                </div>
              </div>
              <div className="bg-[#0b0d12] border border-[#1e232d] rounded-xl flex flex-col h-[220px]">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                  <FiZap className="text-[#e2e8f0] text-[15px]" />
                  <span className="text-[#e2e8f0] text-[13px] font-semibold">My Active Work</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <FiInbox className="text-[#848d9c] text-[22px] mb-4" />
                  <span className="text-white text-[14px] font-semibold mb-1">No active issues</span>
                  <span className="text-[#848d9c] text-[13px]">Your assigned issues will appear here</span>
                </div>
              </div>
              <div className="bg-[#0b0d12] border border-[#1e232d] rounded-xl flex flex-col h-[220px]">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                  <FiAlertTriangle className="text-[#e2e8f0] text-[15px]" />
                  <span className="text-[#e2e8f0] text-[13px] font-semibold">Risk & Alerts</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <FiCheckCircle className="text-[#848d9c] text-[22px] mb-4" />
                  <span className="text-white text-[14px] font-semibold mb-1">All clear</span>
                  <span className="text-[#848d9c] text-[13px]">No overdue, blocked, or review-queue issues</span>
                </div>
              </div>
            </div>
          </div>

          {/* FOCUS MODE */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-[#5c9dff]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-white text-[16px] font-bold tracking-wide leading-tight">Focus Mode</h2>
                <span className="text-[#848d9c] text-[12px]">Monday, July 6, 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-red-500/40 via-[#1e232d] to-[#1e232d] h-[220px]">
                <div className="bg-[#0b0d12] rounded-[11px] h-full w-full flex flex-col">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                    <FiAlertTriangle className="text-red-400 text-[15px]" />
                    <span className="text-[#e2e8f0] text-[13px] font-semibold">Overdue Today</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <FiAlertTriangle className="text-[#22c55e] text-[22px] mb-4" />
                    <span className="text-white text-[14px] font-semibold mb-1">No overdue issues 🎉</span>
                    <span className="text-[#848d9c] text-[13px]">You're all caught up!</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-amber-500/40 via-[#1e232d] to-[#1e232d] h-[220px]">
                <div className="bg-[#0b0d12] rounded-[11px] h-full w-full flex flex-col">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                    <FiEye className="text-amber-400 text-[15px]" />
                    <span className="text-[#e2e8f0] text-[13px] font-semibold">Review Pending</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <FiEye className="text-[#22c55e] text-[22px] mb-4" />
                    <span className="text-white text-[14px] font-semibold mb-1">No items awaiting review</span>
                    <span className="text-[#848d9c] text-[13px]">Nothing needs your attention</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-emerald-500/40 via-[#1e232d] to-[#1e232d] h-[220px]">
                <div className="bg-[#0b0d12] rounded-[11px] h-full w-full flex flex-col">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e232d]">
                    <FiZap className="text-emerald-400 text-[15px]" />
                    <span className="text-[#e2e8f0] text-[13px] font-semibold">Active Work</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <FiZap className="text-[#848d9c] text-[22px] mb-4" />
                    <span className="text-white text-[14px] font-semibold mb-1">No active work</span>
                    <span className="text-[#848d9c] text-[13px]">Start working on an issue to see it here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MY ISSUES & TEAM ACTIVITY */}
          <div className="grid grid-cols-2 gap-5 mt-12 mb-12">
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl flex flex-col h-[340px]">
              <div className="p-5 border-b border-[#1e232d]">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-white text-[16px] font-bold tracking-wide">My Issues</h2>
                  {/* DİNAMİK VERİ EKLENDİ */}
                  <span className="text-[#5c9dff] text-[13px] font-semibold">{activeIssuesCount}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-[13px]">
                    <button className="bg-[#1c2436] text-[#5c9dff] px-2 py-0.5 rounded font-medium">All</button>
                    <button className="text-[#848d9c] hover:text-white transition-colors">To Do</button>
                    <button className="text-[#848d9c] hover:text-white transition-colors">In Progress</button>
                    <button className="text-[#848d9c] hover:text-white transition-colors">Done</button>
                  </div>
                  <div className="flex items-center gap-4 text-[13px]">
                    <button className="bg-[#1e232d] text-white px-2 py-0.5 rounded font-medium">All</button>
                    <button className="flex items-center gap-1.5 text-[#848d9c] hover:text-white transition-colors">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#5c9dff]"></span> Low
                    </button>
                    <button className="flex items-center gap-1.5 text-[#848d9c] hover:text-white transition-colors">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#a855f7]"></span> Med
                    </button>
                    <button className="flex items-center gap-1.5 text-[#848d9c] hover:text-white transition-colors">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#eab308]"></span> High
                    </button>
                    <button className="flex items-center gap-1.5 text-[#848d9c] hover:text-white transition-colors">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ef4444]"></span> Crit
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <FiInbox className="text-[#5c9dff] text-[26px] mb-4 opacity-80" />
                <span className="text-[#848d9c] text-[14px]">No issues assigned to you</span>
              </div>
            </div>

            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl flex flex-col h-[340px]">
              <div className="flex justify-between items-center p-5 border-b border-[#1e232d]">
                <h2 className="text-white text-[16px] font-bold tracking-wide">Team Activity</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                  <span className="text-[#22c55e] text-[12px] font-semibold">Live</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-start gap-4 p-5 border-b border-[#1e232d]">
                  <div className="font-bold text-[#5c9dff] text-[14px] mt-0.5">v</div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[14px] text-[#848d9c]">
                      <span className="text-white font-semibold mr-1">vhhkg</span> 
                      created "Issue title"
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1c2436] text-[#5c9dff] text-[11px] px-2 py-0.5 rounded font-medium">issue</span>
                      <span className="text-[#5e5f64] text-[12px]">4d ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 border-b border-[#1e232d]">
                  <div className="font-bold text-[#5c9dff] text-[14px] mt-0.5">v</div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[14px] text-[#848d9c]">
                      <span className="text-white font-semibold mr-1">vhhkg</span> 
                      column_created column
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1e232d] text-[#848d9c] text-[11px] px-2 py-0.5 rounded font-medium">column</span>
                      <span className="text-[#5e5f64] text-[12px]">4d ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5">
                  <div className="font-bold text-[#5c9dff] text-[14px] mt-0.5">v</div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[14px] text-[#848d9c]">
                      <span className="text-white font-semibold mr-1">vhhkg</span> 
                      created project
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#2c1d3b] text-[#a855f7] text-[11px] px-2 py-0.5 rounded font-medium">project</span>
                      <span className="text-[#5e5f64] text-[12px]">4d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- YOUR WORKSPACES --- */}
          <div className="mb-10">
            
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-white text-[18px] font-bold tracking-wide">Your Workspaces</h2>
              {/* Workspace Oluşturma Butonunu Bağladık */}
              <button 
                onClick={handleCreateWorkspace}
                className="bg-[#5c9dff] text-[#0b0d12] px-4 py-2 rounded-lg font-semibold text-[13px] hover:bg-[#4a8bee] transition-colors"
              >
                Create Workspace
              </button>
            </div>

            <div className="flex gap-4">
              {isLoading ? (
                  <p className="text-[#848d9c]">Yükleniyor...</p>
              ) : workspaces.length > 0 ? (
                workspaces.map((w: any) => (
                  <div key={w.id} className="bg-[#0b0d12] border border-[#1e232d] rounded-xl p-5 w-[340px] flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="text-[#5c9dff] font-bold text-[16px] w-6 text-center bg-[#1c2436] rounded uppercase">
                        {w.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-[15px] font-bold">{w.name}</span>
                        <span className="text-[#848d9c] text-[12px] mt-0.5">Admin</span>
                      </div>
                    </div>
                    <button className="text-[#5c9dff] text-[13px] font-medium text-left hover:underline w-max flex items-center gap-1">
                      View projects <span>→</span>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-[#848d9c]">Henüz bir workspace yok. Oluşturmaya ne dersin?</p>
              )}
            </div>
          </div>
        </div>
        )}
        
        {/* --- NOTIFICATIONS SEKMESİ --- */}
        {activeTab === "notifications" && (
          <div className="p-8 max-w-[1000px] mx-auto w-full animate-in fade-in duration-300">
            
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-white text-[26px] font-bold tracking-tight">Notifications</h1>
              
              <div className="flex items-center p-1 bg-transparent border border-[#2a2f3a] rounded-full">
                <button className="px-5 py-1.5 bg-[#26282b] text-white text-[13px] font-medium rounded-full transition-colors">All</button>
                <button className="px-5 py-1.5 text-[#848d9c] hover:text-white text-[13px] font-medium rounded-full transition-colors">Unread</button>
              </div>
            </div>

            <div className="bg-[#11141b] border border-[#1e232d] rounded-2xl flex flex-col items-center justify-center h-[340px]">
              <div className="w-[52px] h-[52px] bg-[#1c2436] rounded-[16px] flex items-center justify-center mb-5">
                <FiBell className="text-[#848d9c] text-[22px]" />
              </div>
              <h3 className="text-white text-[15px] font-bold tracking-wide mb-1.5">No notifications yet</h3>
              <p className="text-[#848d9c] text-[13px]">You'll see notifications here when something happens.</p>
            </div>

          </div>
        )}
        
        {/* --- FLOATING ACTION BUTTON (FAB) - GÖREV EKLEME BUTONU --- */}
        <button 
          onClick={handleCreateIssue}
          className="fixed bottom-10 right-10 w-14 h-14 bg-[#5c9dff] text-[#0b0d12] rounded-full flex items-center justify-center hover:bg-[#4a8bee] transition-colors shadow-lg z-50"
        >
          <FiPlus className="text-[26px]" />
        </button>

      </main>
    </div>
  );
}