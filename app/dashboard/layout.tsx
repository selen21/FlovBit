"use client";
import { 
  FiBell, FiSearch, FiCode, FiCreditCard, FiSettings, FiLogOut, 
  FiSun, FiMoon, FiPlus, FiLayout, FiColumns, FiList, FiRefreshCw, FiBarChart2 
} from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 
  
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setMounted(true);
    const email = localStorage.getItem("email");
    if (email) {
        setUserEmail(email);
        setUserName(email.split('@')[0]); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/"; 
  };

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    // ANA ARKAPLAN: Açık temada çok açık gri/beyaz, koyu temada siyah
    <div className="flex h-screen w-full bg-[#f4f7fc] dark:bg-[#0b0d12] text-[14px] font-sans antialiased text-slate-800 dark:text-[#e2e8f0] relative overflow-hidden transition-colors duration-200">
      
      {/* --- SIDEBAR --- */}
      {/* SIDEBAR ARKAPLAN: Açık temada beyaz, koyu temada koyu mavi */}
      <aside className="w-[240px] flex-shrink-0 bg-white dark:bg-[#11141b] border-r border-gray-200 dark:border-[#1e232d] flex flex-col justify-between z-10 transition-colors duration-200">
        <div>
          <div className="flex items-center h-[72px] px-6">
            <div className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center mr-3 shadow-md border border-gray-100 dark:border-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-[13px] italic">F</span>
            </div>
            <span className="font-semibold text-[18px] tracking-wide text-slate-900 dark:text-white">Flovbit</span>
          </div>
          <div className="px-3 flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 dark:text-[#6b7280] tracking-wider uppercase mb-2 px-3">Main</span>
            <div className="flex flex-col gap-1">
              
              <Link href="/dashboard" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard" ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <TbLayoutDashboard className="text-[20px]" />
                  <span>Dashboard</span>
                </div>
              </Link>

              <Link href="/dashboard/notifications" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/notifications" ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/notifications" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiBell className="text-[18px]" />
                  <span>Notifications</span>
                </div>
              </Link>

              <Link href="/dashboard/search" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/search" ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/search" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiSearch className="text-[18px]" />
                  <span>Search</span>
                </div>
              </Link>

              <Link href="/dashboard/api-reference" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/api-reference" ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/api-reference" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiCode className="text-[18px]" />
                  <span>API Reference</span>
                </div>
              </Link>

              <Link href="/dashboard/billing" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/billing" || pathname.startsWith("/dashboard/billing/") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {(pathname === "/dashboard/billing" || pathname.startsWith("/dashboard/billing/")) && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiCreditCard className="text-[18px]" />
                  <span>Billing</span>
                </div>
              </Link>
              
              <Link href="/dashboard/settings" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname === "/dashboard/settings" ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname === "/dashboard/settings" && (
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>
                )}
                <div className="flex items-center gap-3 w-full pl-3 pr-3 py-2 font-medium">
                  <FiSettings className="text-[18px]" />
                  <span>Settings</span>
                </div>
              </Link>

            </div>
          </div>

          {/* --- RECENT PROJECT MENU --- */}
          <div className="px-3 flex flex-col mt-8">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[10px] font-bold text-gray-500 dark:text-[#6b7280] tracking-wider uppercase">Recent Project</span>
              <span className="text-[10px] font-semibold text-gray-400 dark:text-[#848d9c]">My Project</span>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/dashboard/project/overview" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/overview") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/overview") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiLayout className="text-[18px]" /> <span>Overview</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/board" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/board") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/board") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiColumns className="text-[18px]" /> <span>Board</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/backlog" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/backlog") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/backlog") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiList className="text-[18px]" /> <span>Backlog</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/cycles" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/cycles") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/cycles") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiRefreshCw className="text-[18px]" /> <span>Cycles</span>
                </div>
              </Link>
              
              <Link href="/dashboard/project/reports" className={`relative flex items-center w-full rounded-lg transition-colors ${pathname.includes("/project/reports") ? "bg-blue-50 text-blue-600 dark:bg-[#1c2436] dark:text-[#5c9dff]" : "text-gray-600 dark:text-[#949eaf] hover:text-slate-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-[#1a1e27]"}`}>
                {pathname.includes("/project/reports") && <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-blue-600 dark:bg-[#5c9dff] rounded-r-md"></div>}
                <div className="flex items-center gap-3 w-full px-3 py-2 font-medium">
                  <FiBarChart2 className="text-[18px]" /> <span>Reports</span>
                </div>
              </Link>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-[#1e232d] p-5 flex flex-col gap-5">
          <div className="flex flex-col px-1 w-full overflow-hidden">
            <span className="font-semibold text-slate-900 dark:text-white text-[14px] truncate">{userName || "Loading..."}</span>
            <span className="text-gray-500 dark:text-[#848d9c] text-[13px] truncate">{userEmail || "Loading..."}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-1 text-gray-500 dark:text-[#949eaf] hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
          >
            <FiLogOut className="text-[18px]" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- ANA EKRAN İÇERİĞİ --- */}
      <main className="flex-1 bg-transparent flex flex-col h-screen overflow-y-auto relative">
        
        {/* Üst Bar */}
        <header className="h-[72px] flex items-center justify-between px-8 border-b border-gray-200 dark:border-[#1e232d] shrink-0 sticky top-0 bg-white/90 dark:bg-[#0b0d12]/90 backdrop-blur-sm z-10 transition-colors duration-200">
          <div className="flex items-center bg-gray-50 dark:bg-[#151921] rounded-full px-4 py-2 w-[480px] border border-gray-200 dark:border-[#2a2f3a] focus-within:border-blue-500 dark:focus-within:border-[#5c9dff] transition-colors">
            <FiSearch className="text-gray-400 dark:text-[#6b7280] text-[16px] mr-3" />
            <input 
              type="text" 
              placeholder="Search... (Enter for full results)" 
              className="bg-transparent border-none outline-none text-[13px] text-slate-900 dark:text-white w-full placeholder-gray-400 dark:placeholder-[#6b7280]"
            />
          </div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-[#848d9c]">
            
            {/* TEMA BUTONU */}
            <button 
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1e232d] transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {mounted ? (
                currentTheme === "dark" ? <FiSun className="text-[18px]" /> : <FiMoon className="text-[18px]" />
              ) : (
                <div className="w-[18px] h-[18px]"></div>
              )}
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-[#1e232d] transition-colors flex items-center justify-center">
              <FiBell className="text-[18px]" />
            </button>
          </div>
        </header>

        {children}

        {/* FLOATING ACTION BUTTON */}
        <button className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 dark:bg-[#5c9dff] text-white dark:text-[#0b0d12] rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-[#4a8bee] transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50">
          <FiPlus className="text-[26px]" />
        </button>
      </main>
    </div>
  );
}