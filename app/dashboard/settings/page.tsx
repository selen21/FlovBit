"use client";
import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eykakqrvaofqelodwkdu.supabase.co"; 
const supabaseKey = "sb_publishable_qNwFw4zBd2O_hpQTvqBmVQ_mkUE4y5N"; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SettingsPage() {
  // Profil State'leri
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Şifre State'leri
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Şifre Göster/Gizle State'leri
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan gerçek bilgileri al
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      setName(storedEmail.split('@')[0]); // Default isim
      
      const storedAvatar = localStorage.getItem("avatarUrl");
      if(storedAvatar) setAvatarUrl(storedAvatar);
    }
  }, []);

  // --- SUPABASE FOTOĞRAF YÜKLEME ---
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${email.split('@')[0]}-${Math.random()}.${fileExt}`;

    try {
      // Supabase 'avatars' bucket'ına dosyayı yükle
      const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, file);

      if (uploadError) {
        throw uploadError;
      }

      // Yüklenen dosyanın herkese açık (public) linkini al
      const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
      setAvatarUrl(data.publicUrl);
      
      // Avatar URL'sini veritabanına kaydetmek için profil kaydetme fonksiyonunu tetikliyoruz
      handleSaveProfileWithAvatar(data.publicUrl);

    } catch (error) {
      console.error("Yükleme hatası:", error);
      alert("Fotoğraf yüklenemedi! Supabase 'avatars' adında public bir bucket oluşturduğunuzdan emin olun.");
    } finally {
      setIsUploading(false);
    }
  };

  // --- GERÇEK API İLE PROFIL KAYDETME ---
  const handleSaveProfileWithAvatar = async (newAvatarUrl = avatarUrl) => {
    setIsSaving(true);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8081/api/v1/users/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email: email, 
          name: name,
          avatarUrl: newAvatarUrl // Yeni eklenen URL backend'e gidiyor
        })
      });

      if (response.ok) {
        setIsSaved(true);
        localStorage.setItem("avatarUrl", newAvatarUrl); // Hızlı yüklenmesi için locale de atıyoruz
        // 3 saniye sonra 'Saved' yazısı kaybolsun
        setTimeout(() => setIsSaved(false), 3000);
      } else {
        alert("Profil güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Profil güncelleme hatası:", error);
      alert("Sunucuya ulaşılamadı.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveProfile = () => {
    handleSaveProfileWithAvatar(avatarUrl);
  };

  // --- GERÇEK API İLE ŞİFRE DEĞİŞTİRME ---
  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8081/api/v1/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email: email, 
          currentPassword: currentPassword, 
          newPassword: newPassword 
        })
      });

      if (response.ok) {
        alert("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const errorMsg = await response.text();
        alert(errorMsg || "Şifre değiştirilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Şifre değiştirme hatası:", error);
      alert("Sunucuya ulaşılamadı.");
    }
  };

  // Profil Fotoğrafını Kaldırma Simülasyonu
  const handleRemoveImage = () => {
    setAvatarUrl("");
    localStorage.removeItem("avatarUrl");
    handleSaveProfileWithAvatar(""); // Veritabanında da sıfırla
  };

  return (
    <div className="p-8 max-w-[800px] mx-auto w-full pb-24 font-sans animate-in fade-in duration-300">
      
      {/* Üst Başlık */}
      <div className="mb-10">
        <h3 className="text-[#848d9c] text-[12px] font-bold tracking-wider uppercase mb-1">Account</h3>
        <h1 className="text-white text-[28px] font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-[#848d9c] text-[15px]">Manage your profile and account security.</p>
      </div>

      <div className="space-y-8">
        
        {/* --- PROFILE BÖLÜMÜ --- */}
        <div>
          <div className="mb-6">
            <h2 className="text-white text-[18px] font-bold mb-1">Profile</h2>
            <p className="text-[#848d9c] text-[14px]">Update your display name and avatar.</p>
          </div>

          <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-6 md:p-8">
            
            {/* Avatar Upload */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-[72px] h-[72px] bg-[#1e232d] rounded-full flex items-center justify-center text-white text-[28px] font-bold border border-[#2a3140] overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  name ? name.charAt(0).toUpperCase() : "U"
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <label className="bg-transparent border border-[#2a3140] text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-[#1e232d] transition-colors cursor-pointer">
                    {isUploading ? "Uploading..." : "Upload Image"}
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload} 
                      disabled={isUploading} 
                    />
                  </label>
                  <button 
                    onClick={handleRemoveImage}
                    className="text-[#ef4444] text-[13px] font-medium hover:text-[#dc2626] transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-[#848d9c] text-[12px]">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>

            {/* İsim Alanı */}
            <div className="mb-6">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0b0d12] border border-[#2a3140] rounded-lg px-4 py-2.5 text-[#e2e8f0] text-[14px] focus:outline-none focus:border-[#5c9dff] focus:ring-1 focus:ring-[#5c9dff] transition-all"
              />
            </div>

            {/* Email Alanı (Kilitli) */}
            <div className="mb-6">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">Email</label>
              <div className="flex items-center justify-between w-full bg-[#0b0d12] border border-[#1e232d] rounded-lg px-4 py-2.5 opacity-70 cursor-not-allowed">
                <span className="text-[#e2e8f0] text-[14px]">{email || "Loading..."}</span>
                <span className="text-[#848d9c] text-[12px] font-medium flex items-center gap-1">
                  Locked
                </span>
              </div>
              <p className="text-[#848d9c] text-[12px] mt-2">Email cannot be changed.</p>
            </div>

            {/* Save Butonu */}
            <div className="flex justify-end pt-2">
              <button 
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="bg-[#5c9dff] text-[#0b0d12] px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#4a8bee] transition-colors min-w-[140px] flex justify-center items-center gap-2"
              >
                {isSaving ? "Saving..." : isSaved ? "Saved!" : "Save changes"}
              </button>
            </div>

          </div>
        </div>

        {/* --- PASSWORD BÖLÜMÜ --- */}
        <div>
          <div className="mb-6">
            <h2 className="text-white text-[18px] font-bold mb-1">Password</h2>
            <p className="text-[#848d9c] text-[14px]">Change your account password.</p>
          </div>

          <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-6 md:p-8">
            
            {/* Current Password */}
            <div className="mb-5">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">Current Password</label>
              <div className="relative">
                <input 
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-[#0b0d12] border border-[#2a3140] rounded-lg pl-4 pr-10 py-2.5 text-[#e2e8f0] text-[14px] focus:outline-none focus:border-[#5c9dff] focus:ring-1 focus:ring-[#5c9dff] transition-all font-mono"
                />
                <button 
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#848d9c] hover:text-white transition-colors"
                >
                  {showCurrentPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-5">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">New Password</label>
              <div className="relative">
                <input 
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-[#0b0d12] border border-[#2a3140] rounded-lg pl-4 pr-10 py-2.5 text-[#e2e8f0] text-[14px] focus:outline-none focus:border-[#5c9dff] focus:ring-1 focus:ring-[#5c9dff] transition-all font-mono"
                />
                <button 
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#848d9c] hover:text-white transition-colors"
                >
                  {showNewPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="mb-8">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">Confirm New Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#0b0d12] border border-[#2a3140] rounded-lg pl-4 pr-10 py-2.5 text-[#e2e8f0] text-[14px] focus:outline-none focus:border-[#5c9dff] focus:ring-1 focus:ring-[#5c9dff] transition-all font-mono"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#848d9c] hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Change Password Butonu */}
            <div className="pt-2">
              <button 
                onClick={handleChangePassword}
                disabled={!currentPassword || !newPassword || !confirmPassword}
                className={`px-6 py-2.5 rounded-lg font-semibold text-[14px] transition-colors min-w-[160px] ${(!currentPassword || !newPassword || !confirmPassword) ? 'bg-[#1e232d] text-[#848d9c] cursor-not-allowed' : 'bg-transparent border border-[#5c9dff] text-[#5c9dff] hover:bg-[#5c9dff]/10'}`}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}