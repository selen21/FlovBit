"use client";
import { useState } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
=======
import { motion } from "framer-motion";
import Link from "next/link";
>>>>>>> 6d053ed49cab3e8ddc0050069ae73ba08abed23d

export default function AuthPage() {
  // Hangi sayfada olduğumuzu tutan State (false = Kayıt Ol, true = Giriş Yap)
  // Eğer varsayılan olarak "Sign In" açılsın istersen bunu true yapabilirsin.
  const [isLogin, setIsLogin] = useState(false);

  // Form State'leri
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Backend'e Kayıt İsteği Gönderen Fonksiyon (Senin yazdığın)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

<<<<<<< HEAD
    if (isLogin) {
      // GİRİŞ YAP (LOGIN) İŞLEMİ BURAYA GELECEK
      console.log("Login deneniyor...", { email, password });
      setTimeout(() => {
        alert("Giriş yapma isteği gönderildi (Backend entegrasyonu beklendiği için simüle edildi).");
        setIsLoading(false);
      }, 1000);
    } else {
      // KAYIT OL (REGISTER) İŞLEMİ (Senin Java backend entegrasyonun)
      try {
        const response = await fetch("http://localhost:8080/api/v1/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: fullName, // Full name'i username olarak gönderiyoruz
            email: email,
            password: password,
          }),
        });
=======
    try {
      
      const response = await fetch("http://localhost:8081/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Artık statik metinler değil, state'ten gelen gerçek verileri gönderiyoruz
          username: username,
          email: email,
          password: password,
        }),
      });
>>>>>>> 6d053ed49cab3e8ddc0050069ae73ba08abed23d

        if (response.ok) {
          const data = await response.json();
          alert("Harika! Kayıt başarıyla tamamlandı.");
          console.log("Backend'den Gelen Veri:", data);
          // Kayıt başarılıysa Giriş sayfasına yönlendir
          setIsLogin(true);
        } else {
          const errorText = await response.text();
          alert("Hata: " + errorText);
        }
      } catch (error) {
        console.error("Sunucuya ulaşılamadı:", error);
        alert("Sunucuya ulaşılamadı. Arkadaşının Java projesi çalışıyor mu?");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans text-gray-900">
      
      {/* --- SOL PANEL (Bilgi & Özellikler) --- */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 border-r border-gray-100 p-14 bg-[#fafbfc]">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-lg italic">F</span>
          </div>
          <span className="font-semibold text-xl tracking-wide text-gray-900">FlowBit</span>
        </div>

        {/* Dinamik Metin Alanı (Framer Motion ile geçişli) */}
        <div className="max-w-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login-text" : "register-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isLogin ? (
                <>
                  <h1 className="text-[40px] leading-[1.1] font-bold text-gray-900 mb-4 tracking-tight">
                    Your signal, <span className="text-blue-600">amplified</span>.
                  </h1>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                    Plan sprints, triage issues, and keep your team moving — all in one fast, focused workspace built for signal over noise.
                  </p>
                  <ul className="flex flex-col gap-4 text-[15px] text-gray-600">
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      Real-time notifications and activity
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      AI-assisted triage and planning
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      Boards, cycles, and reporting in one place
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h1 className="text-[40px] leading-[1.1] font-bold text-gray-900 mb-4 tracking-tight">
                    Ship faster, <span className="text-blue-600">together</span>.
                  </h1>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                    Create your workspace in seconds and bring planning, issues, and reporting into one focused signal OS for your whole team.
                  </p>
                  <ul className="flex flex-col gap-4 text-[15px] text-gray-600">
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      Free to get started, no card required
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      AI-assisted triage and sprint planning
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-blue-600 text-lg shrink-0" />
                      Boards, cycles, and reporting in one place
                    </li>
                  </ul>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Linkleri */}
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
        </div>
      </div>

      {/* --- SAĞ PANEL (Form Alanı) --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 bg-white">
        <div className="w-full max-w-[400px]">
          
          {/* Form Başlığı */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login-title" : "register-title"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-[28px] font-bold text-gray-900 mb-2">
                {isLogin ? "Welcome back" : "Create account"}
              </h2>
              <p className="text-gray-500 text-[15px]">
                {isLogin ? "Sign in to continue to your workspace" : "Start shipping faster with your team"}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Sosyal Giriş Butonları */}
          <div className="flex flex-col gap-3 mb-6">
            <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-xl py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <FcGoogle className="text-[20px]" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-xl py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <FaGithub className="text-[19px]" />
              Continue with GitHub
            </button>
          </div>

          {/* Ayırıcı (Divider) */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="text-gray-400 text-[13px] font-medium">
              {isLogin ? "or sign in with email" : "or create account with email"}
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Kayıt Modunda İsim Alanı Görünür */}
            {!isLogin && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full name</label>
                <input 
                  type="text" 
                  required={!isLogin}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px]"
                  placeholder="John Doe"
                />
              </motion.div>
            )}

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px]"
                placeholder={isLogin ? "chfdh@gmail.com" : "you@company.com"}
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px]"
                  placeholder={isLogin ? "••••••••" : "At least 8 characters"}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {!isLogin && (
                <p className="text-[12px] text-gray-500 mt-2">At least 8 characters</p>
              )}
            </div>

            {/* Gönder Butonu */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium py-2.5 rounded-xl transition-colors mt-2 disabled:opacity-70"
            >
              {isLoading ? "Lütfen bekleyin..." : (isLogin ? "Sign in" : "Create account")}
            </button>
          </form>

          {/* Form Altı Linkler (Toggling) */}
          <div className="mt-6 text-center">
            <p className="text-[14px] text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#1d4ed8] hover:underline font-medium"
              >
                {isLogin ? "Create one" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Gizlilik Metni (Sadece Kayıt Ol ekranında) */}
          {!isLogin && (
            <p className="text-[12px] text-gray-500 text-center mt-6 leading-relaxed px-4">
              By creating an account, you agree to our <a href="#" className="text-[#1d4ed8] hover:underline">Terms of Service</a> and <a href="#" className="text-[#1d4ed8] hover:underline">Privacy Policy</a>
            </p>
          )}

        </div>
      </div>

    </div>
  );
}