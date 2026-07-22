"use client";
import { motion } from "framer-motion";
import { SiGithub, SiFigma, SiNotion, SiLinear, SiJira, SiDiscord } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc"; 
import Link from "next/link"; // Yönlendirmeler için Link bileşenini ekledik
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0d12] font-sans text-gray-900 dark:text-[#e2e8f0] relative overflow-hidden flex flex-col items-center transition-colors duration-200">
      {/* Çok Hafif Arka Plan Işığı */}
      <div className="absolute top-[-20%] left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,#f5f3ff_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,#1a1e27_0%,transparent_70%)] -z-10" />

      {/* Navbar - Daha kompakt boyutlar */}
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-between py-5 px-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-800 dark:text-white">
           <img src="/flowbit_logo.png" alt="FlovBit" className="w-7 h-7" />
           FlovBit
        </div>
        
        {/* --- GÜNCELLENEN MENÜ (Scroll Linkleri) --- */}
        <div className="flex gap-7 text-[14px] text-gray-600 dark:text-[#848d9c] font-medium">
          <Link href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</Link>
          <Link href="#board" className="hover:text-black dark:hover:text-white transition-colors">Board</Link>
          <Link href="#cycles" className="hover:text-black dark:hover:text-white transition-colors">Cycles</Link>
          <Link href="#automation" className="hover:text-black dark:hover:text-white transition-colors">Automation</Link>
        </div>
        
        <div className="flex items-center gap-5">
          {/* Tema Butonu */}
          <button 
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-500 dark:text-[#848d9c] hover:text-black dark:hover:text-white transition-colors"
          >
            {mounted ? (currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />) : <div className="w-5 h-5"></div>}
          </button>

          <Link href="/register" className="text-[14px] font-medium text-gray-600 dark:text-[#848d9c] cursor-pointer hover:text-black dark:hover:text-white transition-colors">Sign in</Link>
          <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:text-white px-5 py-2 rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Alanı - Küçültülmüş, derli toplu yapı */}
      <section className="flex flex-col items-center justify-center mt-16 px-4 text-center w-full max-w-3xl">
        
        {/* Üst Rozet */}
        <div className="border border-gray-200 dark:border-[#1e232d] rounded-full px-3 py-1 text-[12px] text-gray-500 dark:text-[#848d9c] mb-6 flex items-center gap-2 bg-white dark:bg-[#11141b] shadow-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#5c9dff]"></span> Agent-native project platform
        </div>

        {/* Ana Başlık - Renk akışı kusursuzlaştırıldı */}
        <h1 className="text-[48px] sm:text-[56px] font-bold tracking-tight leading-[1.1] mb-5 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-[#5c9dff]">Plan less.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 dark:from-[#5c9dff] dark:via-[#a855f7] dark:to-[#22c55e]">
            Execute more.
          </span>
        </h1>

        {/* Alt Açıklama - Daha küçük puntolar */}
        <p className="text-[16px] text-gray-500 dark:text-[#848d9c] max-w-xl mb-8 leading-relaxed">
          FlovBit turns ideas into shipped work with AI agents that understand your context, automate the mundane, and surface what matters.
        </p>

        {/* Butonlar - Küçültüldü */}
        <div className="flex items-center gap-3">
          <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-[15px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
            Get Started <span className="text-sm">→</span>
          </Link>
          
          <button className="bg-white dark:bg-[#11141b] text-gray-700 dark:text-[#e2e8f0] border border-gray-200 dark:border-[#1e232d] px-6 py-3 rounded-full text-[15px] font-medium hover:bg-gray-50 dark:hover:bg-[#1e232d] transition-colors flex items-center gap-2 shadow-sm dark:shadow-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-[#848d9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8l6 4-6 4V8z"></path>
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Alt Sosyal Kanıt Alanı - Boyutlar küçültüldü */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-[13px] text-gray-500 dark:text-[#848d9c]">
            <div className="flex -space-x-2">
              {['A','B','C','D','E'].map((letter, i) => (
                <div key={letter} className={`w-7 h-7 rounded-full text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-[#0b0d12] ${
                  i === 0 ? 'bg-[#6366f1]' : 
                  i === 1 ? 'bg-[#818cf8]' : 
                  i === 2 ? 'bg-[#4f46e5]' : 
                  i === 3 ? 'bg-[#4338ca]' : 'bg-[#a5b4fc]'
                }`}>
                  {letter}
                </div>
              ))}
            </div>
            <span>Join 2,000+ teams shipping faster</span>
          </div>
          <div className="flex items-center gap-3 text-[13px] text-gray-500 dark:text-[#848d9c]">
            <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-[#e2e8f0]">
              <svg className="w-3.5 h-3.5 text-blue-600 dark:text-[#5c9dff]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              4.9/5 rating
            </span>
            <span className="w-[1px] h-3 bg-gray-200 dark:bg-[#1e232d]"></span>
            <span>No credit card required</span>
          </div>
        </div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜM: Yüzen İkon ve Work is broken --- */}
      <section id="features" className="w-full max-w-5xl mx-auto mt-24 px-6 mb-24 pt-10">
        
        {/* Yüzen Scroll İkonu (Floating Mouse) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mx-auto mb-16 w-5 h-8 border-[1.5px] border-gray-300 dark:border-[#2a2f3a] rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-gray-400 dark:bg-[#848d9c] rounded-full"
          />
        </motion.div>

        {/* Bölüm Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[36px] sm:text-[42px] font-bold text-blue-600 dark:text-[#5c9dff] tracking-tight">
            Work is broken.
          </h2>
        </motion.div>

        {/* Kartların Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Kart 1: Too many tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#11141b] p-8 rounded-3xl border border-gray-100 dark:border-[#1e232d] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] dark:shadow-none transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-[#1c2436] flex items-center justify-center mb-5 border border-blue-100/50 dark:border-[#2a3140]">
              <svg className="w-5 h-5 text-blue-600 dark:text-[#5c9dff]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2.5 tracking-tight">Too many tools</h3>
            <p className="text-[15px] text-gray-500 dark:text-[#848d9c] leading-relaxed">
              Jumping between apps, tabs, and spreadsheets. Nothing connects.
            </p>
          </motion.div>

          {/* Kart 2: Slow execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#11141b] p-8 rounded-3xl border border-gray-100 dark:border-[#1e232d] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] dark:shadow-none transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-[#2c1d3b] flex items-center justify-center mb-5 border border-purple-100/50 dark:border-[#2a3140]">
              <svg className="w-5 h-5 text-purple-600 dark:text-[#a855f7]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2.5 tracking-tight">Slow execution</h3>
            <p className="text-[15px] text-gray-500 dark:text-[#848d9c] leading-relaxed">
              Manual updates, endless status meetings, work that gets lost in translation.
            </p>
          </motion.div>

          {/* Kart 3: No real visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-[#11141b] p-8 rounded-3xl border border-gray-100 dark:border-[#1e232d] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] dark:shadow-none transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-[#1a2e25] flex items-center justify-center mb-5 border border-teal-100/50 dark:border-[#2a3140]">
              <svg className="w-5 h-5 text-teal-600 dark:text-[#22c55e]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 15c1-1.5 5-1.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8.5" cy="10" r="1" fill="currentColor" />
                <circle cx="15.5" cy="10" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2.5 tracking-tight">No real visibility</h3>
            <p className="text-[15px] text-gray-500 dark:text-[#848d9c] leading-relaxed">
              Nobody knows what's actually happening. Leaders guess. Teams hope.
            </p>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMÜN SONU --- */}
      
      {/* --- YENİ EKLENEN BÖLÜM: One system. Full control. --- */}
      <section className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24">
        
        {/* Bölüm Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 dark:text-white tracking-tight">
            One system. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#5c9dff] dark:to-[#a855f7]">Full control.</span>
          </h2>
        </motion.div>

        {/* Ana İçerik: Sol (Özellikler) ve Sağ (Dashboard Mockup) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
          
          {/* SOL TARAF: 2x2 Özellik Grid'i */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
            
            {/* 1. Projects */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50/50 dark:bg-[#1c2436] flex items-center justify-center mb-4 border border-blue-100 dark:border-[#2a3140] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600 dark:text-[#5c9dff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2">Projects</h4>
              <p className="text-[14px] text-gray-500 dark:text-[#848d9c] leading-relaxed">Organize everything by project. One source of truth.</p>
            </motion.div>

            {/* 2. Cycles */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50/50 dark:bg-[#2c1d3b] flex items-center justify-center mb-4 border border-purple-100 dark:border-[#2a3140] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-purple-600 dark:text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2">Cycles</h4>
              <p className="text-[14px] text-gray-500 dark:text-[#848d9c] leading-relaxed">Time-boxed sprints that keep teams focused and shipping.</p>
            </motion.div>

            {/* 3. Automation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50/50 dark:bg-[#1a2e25] flex items-center justify-center mb-4 border border-teal-100 dark:border-[#2a3140] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-teal-600 dark:text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2">Automation</h4>
              <p className="text-[14px] text-gray-500 dark:text-[#848d9c] leading-relaxed">Set it once. Let FlovBit handle the repetitive work.</p>
            </motion.div>

            {/* 4. AI Agents */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50/50 dark:bg-[#1e1b4b] flex items-center justify-center mb-4 border border-indigo-100 dark:border-[#312e81] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-indigo-600 dark:text-[#818cf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-2">AI agents</h4>
              <p className="text-[14px] text-gray-500 dark:text-[#848d9c] leading-relaxed">Intelligent agents that execute, suggest, and optimize.</p>
            </motion.div>

          </div>

          {/* SAĞ TARAF: Dashboard UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white dark:bg-[#0b0d12] rounded-2xl border border-gray-200/80 dark:border-[#1e232d] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden transition-colors">
              
              {/* Pencere Üst Çubuğu (Mac Style) */}
              <div className="bg-gray-50/80 dark:bg-[#11141b] border-b border-gray-100 dark:border-[#1e232d] px-4 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span className="mx-auto text-[11px] font-medium text-gray-400 dark:text-[#848d9c] font-mono tracking-wide">FlovBit Dashboard</span>
              </div>
              
              {/* Pencere İçi İçerik */}
              <div className="p-6 bg-[#f8fafc] dark:bg-[#0b0d12]">
                
                {/* 4'lü İstatistik Kartları */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-[#11141b] p-4 rounded-xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                    <div className="text-[11px] text-gray-500 dark:text-[#848d9c] mb-1 font-medium">Active issues</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-[#5c9dff]">24</div>
                  </div>
                  <div className="bg-white dark:bg-[#11141b] p-4 rounded-xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                    <div className="text-[11px] text-gray-500 dark:text-[#848d9c] mb-1 font-medium">This Sprint</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-[#a855f7]">18</div>
                  </div>
                  <div className="bg-white dark:bg-[#11141b] p-4 rounded-xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                    <div className="text-[11px] text-gray-500 dark:text-[#848d9c] mb-1 font-medium">Completed</div>
                    <div className="text-2xl font-bold text-teal-500 dark:text-[#22c55e]">42</div>
                  </div>
                  <div className="bg-white dark:bg-[#11141b] p-4 rounded-xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                    <div className="text-[11px] text-gray-500 dark:text-[#848d9c] mb-1 font-medium">Team Velocity</div>
                    <div className="text-2xl font-bold text-indigo-500 dark:text-[#818cf8]">87</div>
                  </div>
                </div>

                {/* Son Aktiviteler Listesi */}
                <div>
                  <div className="text-[10px] font-bold text-gray-400 dark:text-[#6b7280] mb-3 uppercase tracking-wider">Recent Activity</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[13px] bg-white dark:bg-[#11141b] p-3 rounded-lg border border-gray-50 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-[#1c2436] text-blue-600 dark:text-[#5c9dff] flex items-center justify-center text-[10px] font-bold">A</div>
                        <span className="text-gray-500 dark:text-[#848d9c]">completed <span className="font-medium text-gray-800 dark:text-[#e2e8f0]">API integration</span></span>
                      </div>
                      <span className="text-gray-400 dark:text-[#5e5f64] text-[11px]">2m ago</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px] bg-white dark:bg-[#11141b] p-3 rounded-lg border border-gray-50 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-[#2c1d3b] text-purple-600 dark:text-[#a855f7] flex items-center justify-center text-[10px] font-bold">M</div>
                        <span className="text-gray-500 dark:text-[#848d9c]">created <span className="font-medium text-gray-800 dark:text-[#e2e8f0]">Login issue</span></span>
                      </div>
                      <span className="text-gray-400 dark:text-[#5e5f64] text-[11px]">15m ago</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px] bg-white dark:bg-[#11141b] p-3 rounded-lg border border-gray-50 dark:border-[#1e232d] shadow-sm dark:shadow-none">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-[#1a2e25] text-teal-600 dark:text-[#22c55e] flex items-center justify-center text-[10px] font-bold">S</div>
                        <span className="text-gray-500 dark:text-[#848d9c]">moved <span className="font-medium text-gray-800 dark:text-[#e2e8f0]">Dashboard redesign</span></span>
                      </div>
                      <span className="text-gray-400 dark:text-[#5e5f64] text-[11px]">1h ago</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMÜN SONU --- */}
      
      {/* --- YENİ EKLENEN BÖLÜM: Move work at the speed of thought (Kanban) --- */}
      <section id="board" className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24 pt-10">
        
        {/* Başlık ve Alt Metin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 dark:text-[#848d9c] text-[11px] font-bold tracking-wider uppercase mb-2 block">Visual Board</span>
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 dark:text-white tracking-tight mb-4">
            Move work at the speed of thought.
          </h2>
          <p className="text-[16px] text-gray-500 dark:text-[#848d9c] max-w-2xl mx-auto">
            Visualize work the way your team actually thinks. Real-time updates, clear task states, and instant drag-and-drop orchestration.
          </p>
        </motion.div>

        {/* Kanban Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Kolon 1: To Do */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="flex flex-col bg-gray-50 dark:bg-[#11141b] border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none p-5 rounded-[2rem]"
          >
            <div className="flex items-center gap-2 mb-6 mt-2 ml-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-[14px] font-bold text-slate-800 dark:text-white">To Do</span>
            </div>
            
            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none mb-4 cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-800 dark:text-[#e2e8f0] mb-2.5 leading-tight">Update onboarding flow</h4>
              <span className="text-[11px] font-bold text-blue-600 dark:text-[#5c9dff] bg-blue-50 dark:bg-[#1c2436] px-2.5 py-1 rounded-md">Design</span>
            </div>

            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-800 dark:text-[#e2e8f0] mb-2.5 leading-tight">Fix auth redirect</h4>
              <span className="text-[11px] font-bold text-gray-600 dark:text-[#848d9c] bg-gray-100 dark:bg-[#1e232d] px-2.5 py-1 rounded-md">Engineering</span>
            </div>
          </motion.div>

          {/* Kolon 2: In Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex flex-col bg-gray-50 dark:bg-[#11141b] border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none p-5 rounded-[2rem]"
          >
            <div className="flex items-center gap-2 mb-6 mt-2 ml-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="text-[14px] font-bold text-slate-800 dark:text-white">In Progress</span>
            </div>
            
            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none border-l-2 border-l-amber-500 mb-4 cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-800 dark:text-[#e2e8f0] mb-2.5 leading-tight">Add user preferences</h4>
              <span className="text-[11px] font-bold text-gray-600 dark:text-[#848d9c] bg-gray-100 dark:bg-[#1e232d] px-2.5 py-1 rounded-md">Engineering</span>
            </div>

            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-800 dark:text-[#e2e8f0] mb-2.5 leading-tight">Improve mobile layout</h4>
              <span className="text-[11px] font-bold text-blue-600 dark:text-[#5c9dff] bg-blue-50 dark:bg-[#1c2436] px-2.5 py-1 rounded-md">Design</span>
            </div>
          </motion.div>

          {/* Kolon 3: Done */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="flex flex-col bg-gray-50 dark:bg-[#11141b] border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none p-5 rounded-[2rem]"
          >
            <div className="flex items-center gap-2 mb-6 mt-2 ml-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[14px] font-bold text-slate-800 dark:text-white">Done</span>
            </div>
            
            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none opacity-70 mb-4 cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-500 dark:text-[#848d9c] mb-2.5 leading-tight line-through decoration-gray-300 dark:decoration-gray-600">Write documentation</h4>
              <span className="text-[11px] font-bold text-gray-600 dark:text-[#848d9c] bg-gray-100 dark:bg-[#1e232d] px-2.5 py-1 rounded-md">Engineering</span>
            </div>

            <div className="bg-white dark:bg-[#0b0d12] p-4 rounded-2xl border border-gray-100 dark:border-[#2a3140] shadow-sm dark:shadow-none opacity-70 cursor-grab">
              <h4 className="text-[14.5px] font-semibold text-slate-500 dark:text-[#848d9c] mb-2.5 leading-tight line-through decoration-gray-300 dark:decoration-gray-600">Update API docs</h4>
              <span className="text-[11px] font-bold text-gray-600 dark:text-[#848d9c] bg-gray-100 dark:bg-[#1e232d] px-2.5 py-1 rounded-md">Engineering</span>
            </div>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMÜN SONU --- */}
      
      {/* --- YENİ EKLENEN BÖLÜM: Cycles that actually work --- */}
      <section id="cycles" className="w-full max-w-4xl mx-auto mt-32 px-6 mb-24 flex flex-col items-center pt-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gray-400 dark:text-[#848d9c] text-[11px] font-bold tracking-wider uppercase mb-2 block">Cycles & Analysis</span>
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 dark:text-white tracking-tight mb-4">
            Cycles that actually work.
          </h2>
          <p className="text-[16px] text-gray-500 dark:text-[#848d9c] max-w-xl mx-auto">
            Plan in cycles, track progress in real-time, and ship reliably. Connected agents run deep health checks to surface blockers before they stall progress.
          </p>
        </motion.div>

        {/* Cycles Interactive Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-xl bg-white dark:bg-[#11141b] border border-gray-100 dark:border-[#1e232d] rounded-[2rem] p-8 shadow-sm dark:shadow-none flex flex-col items-center"
        >
          {/* Oynatma Butonları / İkonlar */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 dark:border-[#2a3140] flex items-center justify-center text-gray-400 dark:text-[#848d9c] hover:bg-gray-50 dark:hover:bg-[#1e232d] cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-[#5c9dff] flex items-center justify-center text-white dark:text-[#0b0d12] shadow-lg shadow-blue-200 dark:shadow-none cursor-pointer hover:scale-105 transition-transform pl-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 dark:border-[#2a3140] flex items-center justify-center text-gray-400 dark:text-[#848d9c] hover:bg-gray-50 dark:hover:bg-[#1e232d] cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>

          {/* İlerleme Aşamaları */}
          <div className="flex items-center gap-4 text-[13px] font-semibold mb-8">
            <span className="text-gray-400 dark:text-[#64748b] cursor-pointer">Planning</span>
            <span className="text-blue-600 dark:text-[#5c9dff] border-b-2 border-blue-600 dark:border-[#5c9dff] pb-1 cursor-pointer">Active</span>
            <span className="text-gray-400 dark:text-[#64748b] cursor-pointer">Review</span>
            <span className="text-gray-400 dark:text-[#64748b] cursor-pointer">Completed</span>
          </div>

          {/* İstatistik Çubuğu */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-gray-500 dark:text-[#848d9c] bg-gray-50 dark:bg-[#0b0d12] border border-gray-100 dark:border-[#1e232d] px-6 py-3 rounded-full w-full">
            <span className="text-blue-700 dark:text-[#5c9dff] font-semibold bg-blue-100 dark:bg-[#1c2436] px-2.5 py-1 rounded-md">6 issues</span>
            <span className="text-gray-300 dark:text-[#2a3140]">•</span>
            <span className="text-emerald-600 dark:text-[#22c55e] font-medium">3 completed</span>
            <span className="text-gray-300 dark:text-[#2a3140]">•</span>
            <span className="text-blue-500 dark:text-[#5c9dff] font-medium">2 in progress</span>
            <span className="text-gray-300 dark:text-[#2a3140]">•</span>
            <span className="text-red-500 dark:text-[#ef4444] font-medium">1 remaining</span>
          </div>
        </motion.div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜM: Work with agents, not just tools --- */}
      <section className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 w-full"
        >
          {/* AI Badge */}
          <div className="inline-flex items-center gap-1.5 bg-purple-50 dark:bg-[#a855f7]/10 border border-purple-100 dark:border-transparent text-purple-600 dark:text-[#a855f7] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM15.657 4.343a.75.75 0 010 1.061l-1.06 1.06a.75.75 0 11-1.061-1.06l1.06-1.06a.75.75 0 011.06 0zM6.464 13.536a.75.75 0 010 1.061l-1.06 1.06a.75.75 0 01-1.061-1.06l1.06-1.06a.75.75 0 011.06 0zM17.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM15.657 15.657a.75.75 0 01-1.061 0l-1.06-1.061a.75.75 0 111.061-1.06l1.06 1.061a.75.75 0 010 1.06zM6.464 6.464a.75.75 0 01-1.061 0l-1.06-1.061a.75.75 0 111.061-1.06l1.06 1.061a.75.75 0 010 1.06z" /></svg>
            AI-Powered
          </div>

          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 dark:text-white tracking-tight mb-5">
            Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 dark:from-[#5c9dff] dark:via-[#a855f7] dark:to-[#22c55e]">agents, not just tools</span>
          </h2>
          <p className="text-[16px] text-gray-500 dark:text-[#848d9c] max-w-2xl mx-auto">
            FlovBit's AI agents connect via MCP to automate execution, surface insights, and keep your team moving forward.
          </p>
        </motion.div>

        {/* Terminal / Konsol Arayüzü */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-3xl bg-white dark:bg-[#0b0d12] border border-gray-200/80 dark:border-[#1e232d] rounded-[1.5rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden mb-10 transition-colors"
        >
          {/* Terminal Üst Bar */}
          <div className="bg-gray-50/80 dark:bg-[#11141b] border-b border-gray-100 dark:border-[#1e232d] px-5 py-3.5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-mono text-gray-500 dark:text-[#848d9c] font-medium">
              flovbit.ai
            </div>
            <div className="text-[10px] font-bold text-purple-700 dark:text-[#a855f7] bg-purple-100/80 dark:bg-[#2c1d3b] px-2 py-1 rounded border border-purple-200 dark:border-transparent uppercase tracking-wider">
              MCP Connected
            </div>
          </div>
          
          {/* Terminal İçeriği */}
          <div className="p-6 sm:p-8 font-mono text-[13.5px] leading-relaxed text-slate-700 dark:text-[#e2e8f0] bg-white dark:bg-[#0b0d12]">
            
            <div className="mb-5 flex items-center">
              <span className="text-purple-600 dark:text-[#c678dd] font-bold mr-3">{">"}</span> 
              <span>/flovbit analyze sprint health</span>
              <span className="inline-block w-2 h-4 bg-blue-500 dark:bg-[#5c9dff] animate-pulse ml-2"></span>
            </div>
            
            <div className="space-y-3 opacity-90 ml-5 border-l-2 border-gray-200 dark:border-[#1e232d] pl-4 py-1">
              <div className="flex gap-3 text-gray-500 dark:text-[#848d9c]">
                <span className="text-gray-400 dark:text-[#5e5f64]">*</span> 
                Analyzing 24 issues across 3 cycles...
              </div>
              <div className="flex gap-3 text-amber-600 dark:text-[#eab308]">
                <span className="font-bold">⚠</span> 
                Found 2 blockers: API-142, AUTH-89
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-emerald-700 dark:text-[#22c55e]">
                <div className="flex items-center gap-3">
                  <span className="font-bold">✓</span> 
                  <span className="text-slate-700 dark:text-[#e2e8f0]">Suggestion: Re-prioritize AUTH-89 to current sprint</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 dark:text-[#0b0d12] bg-emerald-100 dark:bg-[#22c55e] px-2 py-0.5 rounded sm:ml-auto border border-emerald-200 dark:border-transparent w-max">94% confidence</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-200/60 dark:border-[#1e232d] text-gray-400 dark:text-[#6b7280] flex items-center">
              <span className="text-purple-600 dark:text-[#c678dd] font-bold mr-3">{">"}</span> 
              Type a command or ask <span className="font-semibold text-blue-600 dark:text-[#5c9dff] ml-1.5 cursor-text">FlovBit</span>
            </div>

          </div>
        </motion.div>

        {/* Terminal Altındaki 3 Özellik Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#11141b] p-5 rounded-2xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center hover:shadow-md dark:hover:border-[#2a3140] transition-all">
            <div className="text-amber-500 dark:text-[#eab308] mb-3 text-xl">⚡</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-1.5">Instant Analysis</h4>
            <p className="text-[12.5px] text-gray-500 dark:text-[#848d9c]">Surface blockers and patterns in seconds</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-[#11141b] p-5 rounded-2xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center hover:shadow-md dark:hover:border-[#2a3140] transition-all">
            <div className="text-red-500 dark:text-[#ef4444] mb-3 text-xl">🎯</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-1.5">Smart Suggestions</h4>
            <p className="text-[12.5px] text-gray-500 dark:text-[#848d9c]">AI recommendations with confidence scores</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-white dark:bg-[#11141b] p-5 rounded-2xl border border-gray-100 dark:border-[#1e232d] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center hover:shadow-md dark:hover:border-[#2a3140] transition-all">
            <div className="text-blue-500 dark:text-[#5c9dff] mb-3 text-xl">🔄</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-1.5">Automated Workflows</h4>
            <p className="text-[12.5px] text-gray-500 dark:text-[#848d9c]">Connect actions to your development cycle</p>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMLERİN SONU --- */}
      
      {/* --- YENİ EKLENEN BÖLÜM: Automate the boring parts --- */}
      <section id="automation" className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24 pt-10">
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-gray-400 dark:text-[#848d9c] text-[11px] font-bold tracking-wider uppercase mb-2 block">Workflow Automation</span>
          <h2 className="text-[36px] sm:text-[42px] font-bold text-blue-600 dark:text-[#5c9dff] tracking-tight mb-4">Automate the boring parts.</h2>
          <p className="text-[16px] text-gray-500 dark:text-[#848d9c]">Set custom triggers, define workflow actions, and let FlovBit handle the rest.</p>
        </motion.div>

        {/* Otomasyon Akış Hattı */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
          
          {/* Akış Adımları */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {[
              { icon: '⚡', title: 'When issue is moved...', desc: 'Trigger event', bg: 'bg-amber-50 dark:bg-[#eab308]/10', text: 'text-amber-600 dark:text-[#eab308]' },
              { icon: '⚙️', title: 'Update cycle progress', desc: 'Action to perform', bg: 'bg-purple-50 dark:bg-[#a855f7]/10', text: 'text-purple-600 dark:text-[#a855f7]' },
              { icon: '🔔', title: 'Notify team in Slack', desc: 'Result notification', bg: 'bg-blue-50 dark:bg-[#5c9dff]/10', text: 'text-blue-600 dark:text-[#5c9dff]' }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 w-full">
                <div className={`${step.bg} p-6 rounded-2xl border border-gray-100 dark:border-transparent flex flex-col items-center text-center`}>
                  <div className={`text-2xl mb-3 ${step.text}`}>{step.icon}</div>
                  <h4 className="text-[14px] font-bold text-slate-800 dark:text-[#e2e8f0] mb-1">{step.title}</h4>
                  <p className="text-[12px] text-gray-500 dark:text-[#848d9c]">{step.desc}</p>
                </div>
                {idx < 2 && <div className="hidden md:block w-full h-px bg-gray-200 dark:bg-[#2a3140] mt-[-50px] z-[-1] ml-[50%]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜM: Works with your stack --- */}
      <section className="w-full max-w-5xl mx-auto mt-20 px-6 mb-32 text-center">
        <span className="text-gray-400 dark:text-[#848d9c] text-[11px] font-bold tracking-wider uppercase mb-2 block">Integrations</span>
        <h2 className="text-[36px] font-bold text-blue-600 dark:text-[#5c9dff] tracking-tight mb-4">Works with your stack.</h2>
        <p className="text-[16px] text-gray-500 dark:text-[#848d9c] mb-12">Connect the tools you already use. Zero friction.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 justify-center">
          {[
            { name: 'GitHub', icon: <SiGithub className="w-6 h-6 text-[#181717] dark:text-white" /> },
            { name: 'Slack', icon: <FaSlack className="w-6 h-6 text-[#4A154B] dark:text-[#E01E5A]" /> },
            { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
            { name: 'Notion', icon: <SiNotion className="w-6 h-6 text-black dark:text-white" /> },
            { name: 'Linear', icon: <SiLinear className="w-6 h-6 text-[#5E6AD2]" /> },
            { name: 'Jira', icon: <SiJira className="w-6 h-6 text-[#0052CC]" /> },
            { name: 'VS Code', icon: <VscVscode className="w-6 h-6 text-[#007ACC]" /> }, 
            { name: 'Discord', icon: <SiDiscord className="w-6 h-6 text-[#5865F2]" /> }
          ].map((tool) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={tool.name} 
              className="bg-white dark:bg-[#11141b] border border-gray-100 dark:border-[#1e232d] p-4 rounded-2xl shadow-sm dark:shadow-none flex flex-col items-center gap-3 cursor-default hover:border-blue-200 dark:hover:border-[#2a3140] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50/80 dark:bg-[#0b0d12] border border-gray-100 dark:border-[#1e232d] flex items-center justify-center">
                {tool.icon}
              </div>
              <span className="text-[13px] font-semibold text-slate-700 dark:text-[#e2e8f0]">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS & CTA BÖLÜMÜ --- */}
      <section className="w-full bg-gradient-to-br from-[#e2e8f0] via-[#ede9fe] to-[#e0f2fe] dark:from-[#0b0d12] dark:via-[#11141b] dark:to-[#0b0d12] py-24 px-6 border-t border-gray-200 dark:border-[#1e232d] transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Üst Başlık ve Şirketler */}
          <h3 className="text-sm font-semibold text-blue-600 dark:text-[#5c9dff] tracking-wider uppercase mb-8">
            Built for modern teams
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 dark:text-[#848d9c] font-medium text-lg mb-16">
            <span>Acme Corp</span>
            <span>Nebula</span>
            <span>Vertex</span>
            <span>Orbit</span>
            <span>Prism</span>
          </div>

          {/* Yorum Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
            {/* Kart 1 */}
            <div className="bg-white/60 dark:bg-[#11141b]/60 backdrop-blur-sm border border-white/40 dark:border-[#1e232d]/40 p-8 rounded-3xl shadow-sm dark:shadow-none">
              <p className="text-blue-600 dark:text-[#5c9dff] text-[17px] font-medium leading-relaxed mb-6">
                "Flowbit cut our sprint planning from 2 hours to 15 minutes."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-white">Sarah Chen</h4>
                <p className="text-sm text-gray-500 dark:text-[#848d9c]">Engineering Lead at Vertex</p>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="bg-white/60 dark:bg-[#11141b]/60 backdrop-blur-sm border border-white/40 dark:border-[#1e232d]/40 p-8 rounded-3xl shadow-sm dark:shadow-none">
              <p className="text-blue-600 dark:text-[#5c9dff] text-[17px] font-medium leading-relaxed mb-6">
                "Finally, a project tool that works the way engineers think."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-white">Marcus Webb</h4>
                <p className="text-sm text-gray-500 dark:text-[#848d9c]">CTO at Orbit</p>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="bg-white/60 dark:bg-[#11141b]/60 backdrop-blur-sm border border-white/40 dark:border-[#1e232d]/40 p-8 rounded-3xl shadow-sm dark:shadow-none">
              <p className="text-blue-600 dark:text-[#5c9dff] text-[17px] font-medium leading-relaxed mb-6">
                "The AI suggestions alone save us 10+ hours per week."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-white">Aisha Patel</h4>
                <p className="text-sm text-gray-500 dark:text-[#848d9c]">PM at Prism</p>
              </div>
            </div>
          </div>

          {/* Alt CTA (Call to Action) Bölümü */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-white tracking-tight text-center md:text-left">
              Start building faster today.
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-600 dark:text-[#848d9c] text-lg text-center md:text-left max-w-sm">
                Unlock your team's shipping velocity with automated sprint health checks and autonomous agent routines. Free for small squads.
              </p>
              <Link href="/register" className="bg-[#4f46e5] dark:bg-[#5c9dff] hover:bg-[#4338ca] dark:hover:bg-[#4a8bee] text-white dark:text-[#0b0d12] font-semibold py-3 px-8 rounded-full transition-colors shadow-md dark:shadow-none text-center inline-block whitespace-nowrap">
                Get Started Free →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FOOTER BÖLÜMÜ --- */}
      <footer className="w-full border-t border-gray-200 dark:border-[#1e232d] bg-white dark:bg-[#11141b] pt-16 pb-8 px-6 transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Logo ve Açıklama (2 Kolon Kaplar) */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">FlovBit</span>
            </div>
            <p className="text-gray-500 dark:text-[#848d9c] text-[15px] w-3/4 leading-relaxed">
              The issue tracking tool you'll actually enjoy using. Built for modern engineering teams.
            </p>
          </div>

          {/* Product Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Product</h4>
            <Link href="#features" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Features</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Integrations</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Changelog</Link>
          </div>

          {/* Company Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Company</h4>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Blog</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Legal Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Legal</h4>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[14px] text-gray-500 dark:text-[#848d9c] hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Alt Çizgi ve Telif Hakkı */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 dark:border-[#1e232d] text-sm text-gray-400 dark:text-[#848d9c]">
          <p>© 2026 FlovBit Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-600 dark:hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-gray-600 dark:hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-gray-600 dark:hover:text-white transition-colors">Discord</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}