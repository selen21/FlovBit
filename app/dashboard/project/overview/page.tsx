"use client";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export default function ProjectOverviewPage() {
  return (
    <div className="p-8 max-w-[1100px] mx-auto w-full pb-24 font-sans">
      
      {/* Üst Kısım: Breadcrumb (Dashboard > Workspace > My Project) */}
      <div className="flex items-center gap-2 text-[13px] font-medium text-[#64748b] mb-6">
        <span>Dashboard</span>
        <span>/</span>
        <span>Workspace Name</span>
        <span>/</span>
        <span className="text-[#e2e8f0]">My Project</span>
      </div>

      {/* Başlık ve Etiket */}
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-white text-[28px] font-bold tracking-tight">My Project</h1>
        <span className="text-[#5c9dff] bg-[#5c9dff]/10 text-[12px] font-mono font-bold px-2.5 py-0.5 rounded border border-[#5c9dff]/20">
          AYPRO-MESS9R5
        </span>
      </div>
      
      {/* Alt Başlık */}
      <div className="text-[#848d9c] text-[12px] font-bold tracking-widest uppercase mb-10">
        ADMIN
      </div>

      {/* Proje Açıklaması */}
      <div className="mb-10">
        <h2 className="text-white text-[16px] font-bold mb-2">Project description</h2>
      </div>

      {/* Sekmeler (Tabs) - Videodaki gibi */}
      <div className="flex items-center gap-4 mb-10 border-b border-[#1e232d] pb-8">
        <Link 
          href="/dashboard/project/cycles" 
          className="bg-[#2563eb] text-white px-6 py-2 rounded-full text-[13px] font-bold hover:bg-[#1d4ed8] transition-colors"
        >
          Cycles
        </Link>
        <Link 
          href="/dashboard/project/backlog" 
          className="bg-transparent text-[#e2e8f0] border border-[#2a3140] px-6 py-2 rounded-full text-[13px] font-bold hover:bg-[#1e232d] transition-colors"
        >
          Backlog
        </Link>
        <Link 
          href="/dashboard/project/reports" 
          className="bg-transparent text-[#e2e8f0] border border-[#2a3140] px-6 py-2 rounded-full text-[13px] font-bold hover:bg-[#1e232d] transition-colors"
        >
          Reports
        </Link>
        <Link 
          href="/dashboard/project/settings" 
          className="bg-transparent text-[#e2e8f0] border border-[#2a3140] px-6 py-2 rounded-full text-[13px] font-bold hover:bg-[#1e232d] transition-colors"
        >
          Settings
        </Link>
      </div>

      {/* Boards Bölümü */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white text-[18px] font-bold">Boards</h2>
          <button className="text-[#5c9dff] text-[13px] font-bold hover:text-[#4a8bee] transition-colors flex items-center gap-1.5">
            <FiPlus className="text-[16px]" /> New Board
          </button>
        </div>
        
        {/* Main Board Kartı */}
        <Link href="/dashboard/project/board" className="block w-[300px]">
          <div className="bg-[#11141b] border border-[#1e232d] hover:border-[#2a3140] transition-colors rounded-xl p-5 cursor-pointer h-[90px] flex flex-col justify-center">
            <h3 className="text-white text-[15px] font-bold">Main Board</h3>
          </div>
        </Link>
      </div>

    </div>
  );
}