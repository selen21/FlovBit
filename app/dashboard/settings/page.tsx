"use client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SettingsPage() {
  // Profil State'leri
  const [name, setName] = useState("vhhkg");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Şifre State'leri
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Şifre Göster/Gizle State'leri
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Profil Kaydetme Simülasyonu
  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      // 3 saniye sonra 'Saved' yazısı kaybolsun
      setTimeout(() => setIsSaved(false), 3000);
    }, 1000);
  };

  // Şifre Değiştirme Simülasyonu
  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-8 max-w-[800px] mx-auto w-full pb-24 font-sans">
      
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
            
            {/* Avatar Upload (Videodaki gibi) */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-[72px] h-[72px] bg-[#1e232d] rounded-full flex items-center justify-center text-white text-[28px] font-bold border border-[#2a3140]">
                {name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <button className="bg-transparent border border-[#2a3140] text-white px-4 py-1.5 rounded-md text-[13px] font-medium hover:bg-[#1e232d] transition-colors">
                    Upload Image
                  </button>
                  <button className="text-[#ef4444] text-[13px] font-medium hover:text-[#dc2626] transition-colors">
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

            {/* Email Alanı (Kilitli - Videodaki gibi) */}
            <div className="mb-6">
              <label className="block text-[#e2e8f0] text-[14px] font-medium mb-2">Email</label>
              <div className="flex items-center justify-between w-full bg-[#0b0d12] border border-[#1e232d] rounded-lg px-4 py-2.5 opacity-70 cursor-not-allowed">
                <span className="text-[#e2e8f0] text-[14px]">chfdh@gmail.com</span>
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