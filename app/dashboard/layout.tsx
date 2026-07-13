"use client";
import { 
  FiBell, FiSearch, FiCode, FiCreditCard, FiSettings, FiLogOut, 
  FiSun, FiPlus, FiLayout, FiColumns, FiList, FiRefreshCw, FiBarChart2 
} from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Şu an hangi URL'de olduğumuzu bulur

  return (
    <div className="flex h-screen w-full bg-[#0b0d12] text-[14px] font-sans antialiased text-[#e2e8f0] relative overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-[240px] flex-shrink-0 bg-[#11141b] border-r border-[#1e232d] flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center h-[72px] px-6">
            <div className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-[13px] italic">F</span>
            </div>
            <span className="font-semibold text-[18px] tracking-wide text-white">Flovbit</span>
          </div>
          <div className="px-3 flex flex-col">
            <span className="text-[10px] font-bold text-[#6b7280] tracking-wider uppercase mb-2 px-3">Main</span>
            <div className="flex flex-col gap-1">
              
              {/* Dashboard Linki */}
              <Link href="/dashboard" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard" ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <TbLayoutDashboard className="text-[20px]" />
                  <span>Dashboard</span>
                </div>
              </Link>

              {/* Notifications Linki */}
              <Link href="/dashboard/notifications" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/notifications" ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/notifications" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiBell className="text-[18px]" />
                  <span>Notifications</span>
                </div>
              </Link>

              {/* Search Linki */}
              <Link href="/dashboard/search" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/search" ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/search" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiSearch className="text-[18px]" />
                  <span>Search</span>
                </div>
              </Link>

              {/* Api-reference Linki */}
              <Link href="/dashboard/api-reference" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/api-reference" ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/api-reference" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiCode className="text-[18px]" />
                  <span>API Reference</span>
                </div>
              </Link>

              {/* Billing Linki */}
              <Link href="/dashboard/billing" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/billing" || pathname.startsWith("/dashboard/billing/") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {(pathname === "/dashboard/billing" || pathname.startsWith("/dashboard/billing/")) && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiCreditCard className="text-[18px]" />
                  <span>Billing</span>
                </div>
              </Link>
              
              {/* Settings Linki */}
              <Link href="/dashboard/settings" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/settings" ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/settings" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiSettings className="text-[18px]" />
                  <span>Settings</span>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {/* --- RECENT PROJECT MENU --- */}
          <div className="px-3 flex flex-col mt-8">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[10px] font-bold text-[#6b7280] tracking-wider uppercase">Recent Project</span>
              <span className="text-[10px] font-semibold text-[#848d9c]">My Project</span>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/dashboard/project/overview" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/overview") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/overview") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiLayout className="text-[18px]" /> <span>Overview</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/board" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/board") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/board") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiColumns className="text-[18px]" /> <span>Board</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/backlog" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/backlog") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/backlog") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiList className="text-[18px]" /> <span>Backlog</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/cycles" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/cycles") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/cycles") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiRefreshCw className="text-[18px]" /> <span>Cycles</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/reports" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/reports") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/reports") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiBarChart2 className="text-[18px]" /> <span>Reports</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/settings" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/settings") ? "bg-[#1c2436] text-[#5c9dff]" : "text-[#949eaf] hover:text-white hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/settings") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiSettings className="text-[18px]" /> <span>Settings</span>
                </div>
              </Link>
            </div>
          </div>
          
        <div className="border-t border-[#1e232d] p-5 flex flex-col gap-5">
          <div className="flex flex-col px-1">
            <span className="font-semibold text-white text-[14px]">vhhkg</span>
            <span className="text-[#848d9c] text-[13px]">chfdh@gmail.com</span>
          </div>
          <button className="flex items-center gap-3 w-full px-1 text-[#949eaf] hover:text-white transition-colors font-medium">
            <FiLogOut className="text-[18px]" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- ANA EKRAN İÇERİĞİ --- */}
      <main className="flex-1 bg-[#0b0d12] flex flex-col h-screen overflow-y-auto relative">
        
        {/* Üst Bar */}
        <header className="h-[72px] flex items-center justify-between px-8 border-b border-[#1e232d] shrink-0 sticky top-0 bg-[#0b0d12]/90 backdrop-blur-sm z-10">
          <div className="flex items-center bg-[#151921] rounded-full px-4 py-2 w-[480px] border border-[#2a2f3a] focus-within:border-[#5c9dff] transition-colors">
            <FiSearch className="text-[#6b7280] text-[16px] mr-3" />
            <input 
              type="text" 
              placeholder="Search... (Enter for full results)" 
              className="bg-transparent border-none outline-none text-[13px] text-white w-full placeholder-[#6b7280]"
            />
          </div>
          <div className="flex items-center gap-5 text-[#848d9c]">
            <button className="hover:text-white transition-colors">
              <FiSun className="text-[18px]" />
            </button>
            <button className="hover:text-white transition-colors">
              <FiBell className="text-[18px]" />
            </button>
          </div>
        </header>

        {/* İşte Sihir Burada: 
          Tıklanan sayfanın içeriği (page.tsx) bu {children} etiketinin olduğu yere otomatik gelir! 
        */}
        {children}

        {/* FLOATING ACTION BUTTON (FAB) */}
        <button className="fixed bottom-10 right-10 w-14 h-14 bg-[#5c9dff] text-[#0b0d12] rounded-full flex items-center justify-center hover:bg-[#4a8bee] transition-colors shadow-lg z-50">
          <FiPlus className="text-[26px]" />
        </button>

      </main>
    </div>
  );
}