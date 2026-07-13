"use client";
import { FiPlus, FiSearch, FiFilter, FiMoreHorizontal, FiUser, FiCalendar } from "react-icons/fi";

export default function BoardPage() {
  // Pano için örnek (mock) veriler
  const columns = [
    {
      id: "todo",
      title: "To Do",
      count: 3,
      tasks: [
        { id: "AYPRO-12", title: "API entegrasyonu için auth token yapısını kur", priority: "High", priorityColor: "text-orange-500" },
        { id: "AYPRO-14", title: "Veritabanı şemasını güncelle", priority: "Medium", priorityColor: "text-yellow-500" },
        { id: "AYPRO-15", title: "Kullanıcı profil resimleri için AWS S3 bucket ayarla", priority: "Low", priorityColor: "text-blue-500" }
      ]
    },
    {
      id: "inprogress",
      title: "In Progress",
      count: 2,
      tasks: [
        { id: "AYPRO-9", title: "Kanban panosu arayüzünü (UI) tasarla", priority: "High", priorityColor: "text-orange-500" },
        { id: "AYPRO-11", title: "Ödeme sayfası (Checkout) hatalarını gider", priority: "Urgent", priorityColor: "text-red-500" }
      ]
    },
    {
      id: "done",
      title: "Done",
      count: 4,
      tasks: [
        { id: "AYPRO-5", title: "Proje iskeletini oluştur (Next.js)", priority: "Medium", priorityColor: "text-yellow-500" },
        { id: "AYPRO-7", title: "Karanlık tema (Dark mode) renk paletini belirle", priority: "Low", priorityColor: "text-blue-500" }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full font-sans">
      
      {/* Üst Bar (Filtreler ve Araçlar) */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-[#1e232d] shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-[20px] font-bold">Main Board</h1>
          <div className="h-5 w-[1px] bg-[#1e232d]"></div>
          
          {/* Arama ve Filtre Butonları */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#11141b] border border-[#1e232d] rounded-md px-3 py-1.5 focus-within:border-[#5c9dff] transition-colors">
              <FiSearch className="text-[#848d9c] text-[14px] mr-2" />
              <input 
                type="text" 
                placeholder="Search issues..." 
                className="bg-transparent border-none outline-none text-[13px] text-white w-[150px] placeholder-[#64748b]"
              />
            </div>
            <button className="flex items-center gap-2 bg-[#11141b] border border-[#1e232d] text-[#848d9c] hover:text-white px-3 py-1.5 rounded-md text-[13px] transition-colors">
              <FiFilter className="text-[14px]" /> Filter
            </button>
          </div>
        </div>

        {/* Yeni Görev Butonu */}
        <button className="flex items-center gap-2 bg-[#5c9dff] text-[#0b0d12] hover:bg-[#4a8bee] px-4 py-1.5 rounded-md text-[13px] font-bold transition-colors">
          <FiPlus className="text-[16px]" /> New Issue
        </button>
      </div>

      {/* Kanban Sütunları Alanı */}
      <div className="flex-1 overflow-x-auto p-8">
        <div className="flex items-start gap-6 h-full min-w-max">
          
          {columns.map((col) => (
            <div key={col.id} className="w-[320px] flex flex-col max-h-full">
              
              {/* Sütun Başlığı */}
              <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#e2e8f0] text-[14px] font-bold">{col.title}</h3>
                  <span className="bg-[#1e232d] text-[#848d9c] text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {col.count}
                  </span>
                </div>
                <button className="text-[#848d9c] hover:text-white transition-colors">
                  <FiPlus className="text-[16px]" />
                </button>
              </div>

              {/* Görev Kartları (Sürüklenebilir alan simülasyonu) */}
              <div className="flex flex-col gap-3 overflow-y-auto pb-4 custom-scrollbar">
                {col.tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="bg-[#11141b] border border-[#1e232d] hover:border-[#2a3140] rounded-xl p-4 cursor-pointer group transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[#848d9c] text-[12px] font-mono">{task.id}</span>
                      <button className="text-[#848d9c] opacity-0 group-hover:opacity-100 hover:text-white transition-all">
                        <FiMoreHorizontal />
                      </button>
                    </div>
                    
                    <p className="text-[#e2e8f0] text-[14px] font-medium leading-relaxed mb-4">
                      {task.title}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Öncelik İkonu */}
                        <div className={`flex items-center gap-1 ${task.priorityColor} bg-[#1e232d] px-2 py-1 rounded text-[11px] font-bold`}>
                          <span className="w-2 h-2 rounded-full currentColor bg-current"></span>
                          {task.priority}
                        </div>
                      </div>
                      
                      {/* Atanan Kişi (Avatar simülasyonu) */}
                      <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-[#11141b]">
                        V
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Yeni Sütun Ekleme Butonu */}
          <button className="w-[320px] shrink-0 flex items-center justify-center gap-2 bg-transparent border border-dashed border-[#1e232d] hover:border-[#2a3140] hover:bg-[#11141b]/50 text-[#848d9c] hover:text-white rounded-xl py-4 text-[13px] font-bold transition-all h-[90px]">
            <FiPlus className="text-[16px]" /> Add Column
          </button>

        </div>
      </div>
      
    </div>
  );
}