"use client";
import { motion } from "framer-motion";
import { SiGithub, SiFigma, SiNotion, SiLinear, SiJira, SiDiscord } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc"; 
import Link from "next/link"; // Yönlendirmeler için Link bileşenini ekledik

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 relative overflow-hidden flex flex-col items-center">
      {/* Çok Hafif Arka Plan Işığı */}
      <div className="absolute top-[-20%] left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,#f5f3ff_0%,transparent_70%)] -z-10" />

      {/* Navbar - Daha kompakt boyutlar */}
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-between py-5 px-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-800">
           <img src="/flowbit_logo.png" alt="FlovBit" className="w-7 h-7" />
           FlovBit
        </div>
        <div className="flex gap-7 text-[14px] text-gray-600 font-medium">
          <Link href="#" className="hover:text-black transition-colors">Features</Link>
          <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black transition-colors">About</Link>
          <Link href="#" className="hover:text-black transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/register" className="text-[14px] font-medium text-gray-600 cursor-pointer hover:text-black">Sign in</Link>
          <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Alanı - Küçültülmüş, derli toplu yapı */}
      <section className="flex flex-col items-center justify-center mt-16 px-4 text-center w-full max-w-3xl">
        
        {/* Üst Rozet */}
        <div className="border border-gray-200 rounded-full px-3 py-1 text-[12px] text-gray-500 mb-6 flex items-center gap-2 bg-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span> Agent-native project platform
        </div>

        {/* Ana Başlık - Renk akışı kusursuzlaştırıldı */}
        <h1 className="text-[48px] sm:text-[56px] font-bold tracking-tight leading-[1.1] mb-5">
          <span className="text-blue-600">Plan less.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400">
            Execute more.
          </span>
        </h1>

        {/* Alt Açıklama - Daha küçük puntolar */}
        <p className="text-[16px] text-gray-500 max-w-xl mb-8 leading-relaxed">
          FlovBit turns ideas into shipped work with AI agents that understand your context, automate the mundane, and surface what matters.
        </p>

        {/* Butonlar - Küçültüldü */}
        <div className="flex items-center gap-3">
          <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-[15px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
            Get Started <span className="text-sm">→</span>
          </Link>
          
          <button className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8l6 4-6 4V8z"></path>
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Alt Sosyal Kanıt Alanı - Boyutlar küçültüldü */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-[13px] text-gray-500">
            <div className="flex -space-x-2">
              {['A','B','C','D','E'].map((letter, i) => (
                <div key={letter} className={`w-7 h-7 rounded-full text-white flex items-center justify-center text-[10px] font-bold border-2 border-white ${
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
          <div className="flex items-center gap-3 text-[13px] text-gray-500">
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              4.9/5 rating
            </span>
            <span className="w-[1px] h-3 bg-gray-200"></span>
            <span>No credit card required</span>
          </div>
        </div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜM: Yüzen İkon ve Work is broken --- */}
      <section className="w-full max-w-5xl mx-auto mt-24 px-6 mb-24">
        
        {/* Yüzen Scroll İkonu (Floating Mouse) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mx-auto mb-16 w-5 h-8 border-[1.5px] border-gray-300 rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>

        {/* Bölüm Başlığı (Plan less. ile aynı mavi tona getirildi) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[36px] sm:text-[42px] font-bold text-blue-600 tracking-tight">
            Work is broken.
          </h2>
        </motion.div>

        {/* Kartların Grid Yapısı (Tarayıcı daralsa bile yan yana durması için "grid-cols-3" zorlandı) */}
        <div className="grid grid-cols-3 gap-6 w-full">
          
          {/* Kart 1: Too many tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-5 border border-blue-100/50">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 mb-2.5 tracking-tight">Too many tools</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed">
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
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-5 border border-purple-100/50">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 mb-2.5 tracking-tight">Slow execution</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed">
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
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mb-5 border border-teal-100/50">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 15c1-1.5 5-1.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8.5" cy="10" r="1" fill="currentColor" />
                <circle cx="15.5" cy="10" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-slate-800 mb-2.5 tracking-tight">No real visibility</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed">
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
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 tracking-tight">
            One system. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full control.</span>
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
              <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center mb-4 border border-blue-100 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 mb-2">Projects</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed">Organize everything by project. One source of truth.</p>
            </motion.div>

            {/* 2. Cycles */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50/50 flex items-center justify-center mb-4 border border-purple-100 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 mb-2">Cycles</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed">Time-boxed sprints that keep teams focused and shipping.</p>
            </motion.div>

            {/* 3. Automation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50/50 flex items-center justify-center mb-4 border border-teal-100 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 mb-2">Automation</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed">Set it once. Let FlovBit handle the repetitive work.</p>
            </motion.div>

            {/* 4. AI Agents */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50/50 flex items-center justify-center mb-4 border border-indigo-100 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-[16px] font-bold text-slate-800 mb-2">AI agents</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed">Intelligent agents that execute, suggest, and optimize.</p>
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
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
              
              {/* Pencere Üst Çubuğu (Mac Style) */}
              <div className="bg-gray-50/80 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span className="mx-auto text-[11px] font-medium text-gray-400 font-mono tracking-wide">FlovBit Dashboard</span>
              </div>
              
              {/* Pencere İçi İçerik */}
              <div className="p-6 bg-[#f8fafc]">
                
                {/* 4'lü İstatistik Kartları */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] text-gray-500 mb-1 font-medium">Active issues</div>
                    <div className="text-2xl font-bold text-blue-600">24</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] text-gray-500 mb-1 font-medium">This Sprint</div>
                    <div className="text-2xl font-bold text-purple-600">18</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] text-gray-500 mb-1 font-medium">Completed</div>
                    <div className="text-2xl font-bold text-teal-500">42</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] text-gray-500 mb-1 font-medium">Team Velocity</div>
                    <div className="text-2xl font-bold text-indigo-500">87</div>
                  </div>
                </div>

                {/* Son Aktiviteler Listesi */}
                <div>
                  <div className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Recent Activity</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-lg border border-gray-50 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">A</div>
                        <span className="text-gray-500">completed <span className="font-medium text-gray-800">API integration</span></span>
                      </div>
                      <span className="text-gray-400 text-[11px]">2m ago</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-lg border border-gray-50 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">M</div>
                        <span className="text-gray-500">created <span className="font-medium text-gray-800">Login issue</span></span>
                      </div>
                      <span className="text-gray-400 text-[11px]">15m ago</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px] bg-white p-3 rounded-lg border border-gray-50 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-bold">S</div>
                        <span className="text-gray-500">moved <span className="font-medium text-gray-800">Dashboard redesign</span></span>
                      </div>
                      <span className="text-gray-400 text-[11px]">1h ago</span>
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
      <section className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24">
        
        {/* Başlık ve Alt Metin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 tracking-tight mb-4">
            Move work at the speed of thought
          </h2>
          <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
            Visualize work the way your team thinks. Drag, drop, done.
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
            className="flex flex-col bg-white border border-gray-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] p-5 rounded-[2rem]"
          >
            <div className="flex justify-center mb-6 mt-2">
              <span className="text-[16px] font-bold text-slate-800">To Do</span>
            </div>
            
            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all mb-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-800 mb-2.5 leading-tight">Update onboarding flow</h4>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md">Design</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-800 mb-2.5 leading-tight">Fix auth redirect</h4>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">Engineering</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolon 2: In Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex flex-col bg-white border border-gray-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] p-5 rounded-[2rem]"
          >
            <div className="flex justify-center mb-6 mt-2">
              <span className="text-[16px] font-bold text-slate-800">In Progress</span>
            </div>
            
            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all mb-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-800 mb-2.5 leading-tight">Add user preferences</h4>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">Engineering</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-800 mb-2.5 leading-tight">Improve mobile layout</h4>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md">Design</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolon 3: Done */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="flex flex-col bg-white border border-gray-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] p-5 rounded-[2rem]"
          >
            <div className="flex justify-center mb-6 mt-2">
              <span className="text-[16px] font-bold text-slate-800">Done</span>
            </div>
            
            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all mb-4">
              <div className="flex items-start gap-3 opacity-70">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-500 mb-2.5 leading-tight line-through decoration-gray-300">Write documentation</h4>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">Engineering</span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4, scale: 1.01 }} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all">
              <div className="flex items-start gap-3 opacity-70">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-slate-500 mb-2.5 leading-tight line-through decoration-gray-300">Update API docs</h4>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">Engineering</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMÜN SONU --- */}
      {/* --- YENİ EKLENEN BÖLÜM: Cycles that actually work --- */}
      <section className="w-full max-w-4xl mx-auto mt-32 px-6 mb-24 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 tracking-tight mb-4">
            Cycles that actually work
          </h2>
          <p className="text-[16px] text-gray-500 max-w-xl mx-auto">
            Plan in cycles, track in real-time, ship on schedule.
          </p>
        </motion.div>

        {/* Cycles Interactive Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-xl bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center"
        >
          {/* Oynatma Butonları / İkonlar */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-transform pl-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>

          {/* İlerleme Aşamaları */}
          <div className="flex items-center gap-4 text-[13px] font-semibold mb-8">
            <span className="text-gray-400 cursor-pointer hover:text-gray-600">Planning</span>
            <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">Active</span>
            <span className="text-gray-400 cursor-pointer hover:text-gray-600">Review</span>
            <span className="text-gray-400 cursor-pointer hover:text-gray-600">Completed</span>
          </div>

          {/* İstatistik Çubuğu */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-gray-500 bg-gray-50/80 px-6 py-3 rounded-full border border-gray-100 w-full">
            <span className="text-blue-700 font-semibold bg-blue-100/80 px-2.5 py-1 rounded-md">6 issues</span>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-600 font-medium">3 completed</span>
            <span className="text-gray-300">•</span>
            <span className="text-blue-500 font-medium">2 in progress</span>
            <span className="text-gray-300">•</span>
            <span className="text-red-500 font-medium">1 remaining</span>
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
          <div className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-100 text-purple-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM15.657 4.343a.75.75 0 010 1.061l-1.06 1.06a.75.75 0 11-1.061-1.06l1.06-1.06a.75.75 0 011.06 0zM6.464 13.536a.75.75 0 010 1.061l-1.06 1.06a.75.75 0 01-1.061-1.06l1.06-1.06a.75.75 0 011.06 0zM17.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM15.657 15.657a.75.75 0 01-1.061 0l-1.06-1.061a.75.75 0 111.061-1.06l1.06 1.061a.75.75 0 010 1.06zM6.464 6.464a.75.75 0 01-1.061 0l-1.06-1.061a.75.75 0 111.061-1.06l1.06 1.061a.75.75 0 010 1.06z" /></svg>
            AI-Powered
          </div>

          <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-800 tracking-tight mb-5">
            Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400">agents, not just tools</span>
          </h2>
          <p className="text-[16px] text-gray-500 max-w-2xl mx-auto">
            FlovBit's AI agents connect via MCP to automate execution, surface insights, and keep your team moving forward.
          </p>
        </motion.div>

        {/* Terminal / Konsol Arayüzü */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-3xl bg-white border border-gray-200/80 rounded-[1.5rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden mb-10"
        >
          {/* Terminal Üst Bar */}
          <div className="bg-gray-50/80 border-b border-gray-100 px-5 py-3.5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-mono text-gray-500 font-medium">
              flovbit.ai
            </div>
            <div className="text-[10px] font-bold text-purple-700 bg-purple-100/80 px-2 py-1 rounded border border-purple-200 uppercase tracking-wider">
              MCP Connected
            </div>
          </div>
          
          {/* Terminal İçeriği */}
          <div className="p-6 sm:p-8 font-mono text-[13.5px] leading-relaxed text-slate-700 bg-[#f8fafc]">
            
            <div className="mb-5 flex items-center">
              <span className="text-purple-600 font-bold mr-3">{">"}</span> 
              <span>/flovbit analyze sprint health</span>
              <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-2"></span>
            </div>
            
            <div className="space-y-3 opacity-90 ml-5 border-l-2 border-gray-200 pl-4 py-1">
              <div className="flex gap-3 text-gray-500">
                <span className="text-gray-400">*</span> 
                Analyzing 24 issues across 3 cycles...
              </div>
              <div className="flex gap-3 text-amber-600">
                <span className="font-bold">⚠</span> 
                Found 2 blockers: API-142, AUTH-89
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-emerald-700">
                <div className="flex items-center gap-3">
                  <span className="font-bold">✓</span> 
                  <span className="text-slate-700">Suggestion: Re-prioritize AUTH-89 to current sprint</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded sm:ml-auto border border-emerald-200 w-max">94% confidence</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-200/60 text-gray-400 flex items-center">
              <span className="text-purple-600 font-bold mr-3">{">"}</span> 
              Type a command or ask <span className="font-semibold text-blue-600 ml-1.5 cursor-text">FlovBit</span>
            </div>

          </div>
        </motion.div>

        {/* Terminal Altındaki 3 Özellik Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="text-amber-500 mb-3 text-xl">⚡</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 mb-1.5">Instant Analysis</h4>
            <p className="text-[12.5px] text-gray-500">Surface blockers and patterns in seconds</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="text-red-500 mb-3 text-xl">🎯</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 mb-1.5">Smart Suggestions</h4>
            <p className="text-[12.5px] text-gray-500">AI recommendations with confidence scores</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="text-blue-500 mb-3 text-xl">🔄</div>
            <h4 className="text-[14.5px] font-bold text-slate-800 mb-1.5">Automated Workflows</h4>
            <p className="text-[12.5px] text-gray-500">Connect actions to your development cycle</p>
          </motion.div>

        </div>
      </section>
      {/* --- YENİ BÖLÜMLERİN SONU --- */}
      {/* --- YENİ EKLENEN BÖLÜM: Automate the boring parts --- */}
      <section className="w-full max-w-5xl mx-auto mt-32 px-6 mb-24">
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[42px] font-bold text-blue-600 tracking-tight mb-4">Automate the boring parts</h2>
          <p className="text-[16px] text-gray-500">Set triggers, define actions, let FlovBit handle the rest.</p>
        </motion.div>

        {/* Otomasyon Akış Hattı */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
          
          {/* Akış Adımları */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {[
              { icon: '⚡', title: 'When issue is moved...', desc: 'Trigger event', bg: 'bg-amber-50', text: 'text-amber-600' },
              { icon: '⚙️', title: 'Update cycle progress', desc: 'Action to perform', bg: 'bg-purple-50', text: 'text-purple-600' },
              { icon: '🔔', title: 'Notify team in Slack', desc: 'Result notification', bg: 'bg-blue-50', text: 'text-blue-600' }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 w-full">
                <div className={`${step.bg} p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center`}>
                  <div className={`text-2xl mb-3 ${step.text}`}>{step.icon}</div>
                  <h4 className="text-[14px] font-bold text-slate-800 mb-1">{step.title}</h4>
                  <p className="text-[12px] text-gray-500">{step.desc}</p>
                </div>
                {idx < 2 && <div className="hidden md:block w-full h-px bg-gray-200 mt-[-50px] z-[-1] ml-[50%]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜM: Works with your stack --- */}
      <section className="w-full max-w-5xl mx-auto mt-20 px-6 mb-32 text-center">
        <h2 className="text-[36px] font-bold text-blue-600 tracking-tight mb-4">Works with your stack</h2>
        <p className="text-[16px] text-gray-500 mb-12">Connect the tools you already use. Zero friction.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 justify-center">
          {[
            { name: 'GitHub', icon: <SiGithub className="w-6 h-6 text-[#181717]" /> },
            { name: 'Slack', icon: <FaSlack className="w-6 h-6 text-[#4A154B]" /> },
            { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
            { name: 'Notion', icon: <SiNotion className="w-6 h-6 text-black" /> },
            { name: 'Linear', icon: <SiLinear className="w-6 h-6 text-[#5E6AD2]" /> },
            { name: 'Jira', icon: <SiJira className="w-6 h-6 text-[#0052CC]" /> },
            { name: 'VS Code', icon: <VscVscode className="w-6 h-6 text-[#007ACC]" /> }, 
            { name: 'Discord', icon: <SiDiscord className="w-6 h-6 text-[#5865F2]" /> }
          ].map((tool) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={tool.name} 
              className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex flex-col items-center gap-3 cursor-default hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center">
                {tool.icon}
              </div>
              <span className="text-[13px] font-semibold text-slate-700">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS & CTA BÖLÜMÜ --- */}
      <section className="w-full bg-gradient-to-br from-[#e2e8f0] via-[#ede9fe] to-[#e0f2fe] py-24 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Üst Başlık ve Şirketler */}
          <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-8">
            Built for modern teams
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 font-medium text-lg mb-16">
            <span>Acme Corp</span>
            <span>Nebula</span>
            <span>Vertex</span>
            <span>Orbit</span>
            <span>Prism</span>
          </div>

          {/* Yorum Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
            {/* Kart 1 */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-3xl shadow-sm">
              <p className="text-blue-600 text-[17px] font-medium leading-relaxed mb-6">
                "Flowbit cut our sprint planning from 2 hours to 15 minutes."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800">Sarah Chen</h4>
                <p className="text-sm text-gray-500">Engineering Lead at Vertex</p>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-3xl shadow-sm">
              <p className="text-blue-600 text-[17px] font-medium leading-relaxed mb-6">
                "Finally, a project tool that works the way engineers think."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800">Marcus Webb</h4>
                <p className="text-sm text-gray-500">CTO at Orbit</p>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-3xl shadow-sm">
              <p className="text-blue-600 text-[17px] font-medium leading-relaxed mb-6">
                "The AI suggestions alone save us 10+ hours per week."
              </p>
              <div>
                <h4 className="font-semibold text-blue-800">Aisha Patel</h4>
                <p className="text-sm text-gray-500">PM at Prism</p>
              </div>
            </div>
          </div>

          {/* Alt CTA (Call to Action) Bölümü */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight">
              Start building faster today
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-600 text-lg">
                Join teams shipping 2x faster with Flowbit.
              </p>
              <Link href="/register" className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md text-center inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FOOTER BÖLÜMÜ --- */}
      <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Logo ve Açıklama (2 Kolon Kaplar) */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">FlovBit</span>
            </div>
            <p className="text-gray-500 text-[15px] w-3/4 leading-relaxed">
              The issue tracking tool you'll actually enjoy using. Built for modern engineering teams.
            </p>
          </div>

          {/* Product Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 text-sm">Product</h4>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Integrations</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Changelog</Link>
          </div>

          {/* Company Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 text-sm">Company</h4>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Careers</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Legal Kolonu */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h4 className="font-semibold text-gray-900 text-sm">Legal</h4>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Alt Çizgi ve Telif Hakkı */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 text-sm text-gray-400">
          <p>© 2026 FlovBit Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-600 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">Discord</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}