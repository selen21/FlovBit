"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
  // Kullanıcının inputlara gireceği verileri tuttuğumuz state'ler
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Arkadaşının gönderdiği ve dinamik hale getirdiğimiz fonksiyon
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    setIsLoading(true);

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

      if (response.ok) {
        const data = await response.json();
        alert("Harika! Kayıt başarıyla tamamlandı.");
        console.log("Backend'den Gelen Veri:", data);
        // İleride buraya login sayfasına yönlendirme (router.push) eklenecek
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
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white text-lg font-bold">F</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Hesap Oluştur</h2>
          <p className="text-gray-500 text-sm mt-2">FlovBit'e katılın ve ekibinizi hızlandırın.</p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kullanıcı Adı</label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Kullanıcı Adınız"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ornek@sirket.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold py-2.5 rounded-lg transition-colors mt-4 disabled:bg-blue-300"
          >
            {isLoading ? "Kaydediliyor..." : "Kayıt Ol"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}