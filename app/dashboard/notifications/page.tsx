"use client";
import { useState } from "react";
import { FiBell } from "react-icons/fi";

export default function NotificationsPage() {
  // Hangi sekmenin aktif olduğunu tutan state
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full animate-in fade-in duration-300 pb-24">
      
      {/* Üst Kısım: Başlık ve Toggle Butonu */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-white text-[26px] font-bold tracking-tight">Notifications</h1>
        
        <div className="flex items-center p-1 bg-transparent border border-[#2a2f3a] rounded-full">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-5 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
              activeTab === "all" ? "bg-[#26282b] text-white shadow-sm" : "text-[#848d9c] hover:text-white"
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab("unread")}
            className={`px-5 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
              activeTab === "unread" ? "bg-[#26282b] text-white shadow-sm" : "text-[#848d9c] hover:text-white"
            }`}
          >
            Unread
          </button>
        </div>
      </div>

      {/* Empty State (Boş Durum) Kartı */}
      <div className="bg-[#11141b] border border-[#1e232d] rounded-2xl flex flex-col items-center justify-center h-[340px]">
        <div className="w-[52px] h-[52px] bg-[#1c2436] rounded-[16px] flex items-center justify-center mb-5">
          <FiBell className="text-[#848d9c] text-[22px]" />
        </div>
        
        {/* Yazılar seçili sekmeye göre değişiyor */}
        <h3 className="text-white text-[15px] font-bold tracking-wide mb-1.5">
          {activeTab === "all" ? "No notifications yet" : "No unread notifications"}
        </h3>
        <p className="text-[#848d9c] text-[13px]">
          {activeTab === "all" 
            ? "You'll see notifications here when something happens." 
            : "You're all caught up!"}
        </p>
      </div>
    </div>
  );
}