"use client";
import { useState } from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Arama butonuna veya Enter'a basıldığında çalışacak fonksiyon
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    // Gerçek bir API'ye bağlanana kadar 1 saniyelik bekleme simülasyonu
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 800);
  };

  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full pb-24 transition-colors duration-200">
      
      {/* Sayfa Başlığı */}
      <h1 className="text-slate-900 dark:text-white text-[26px] font-bold tracking-tight mb-8">Search</h1>

      {/* Arama Çubuğu ve Buton */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#848d9c] text-[18px]" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search issues by title or description..." 
            className="w-full bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-full py-3 pl-12 pr-6 text-slate-900 dark:text-white text-[14px] focus:outline-none focus:border-blue-500 dark:focus:border-[#5c9dff] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#5c9dff] transition-all placeholder-gray-400 dark:placeholder-[#848d9c]"
          />
        </div>
        <button 
          onClick={handleSearch}
          className="bg-blue-600 dark:bg-[#5c9dff] text-white dark:text-[#0b0d12] px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-blue-700 dark:hover:bg-[#4a8bee] transition-colors"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Filtreleme Kısmı */}
      <div className="flex justify-between items-center mb-10 border-b border-gray-200 dark:border-[#1e232d] pb-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 dark:text-[#848d9c] text-[13px] font-medium">Filter:</span>
          <select className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] text-slate-900 dark:text-white text-[13px] font-medium rounded-lg px-3 py-1.5 focus:outline-none cursor-pointer">
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        
        {/* Arama yapıldıysa sonuç sayısını göster */}
        {hasSearched && !isSearching && (
          <span className="text-gray-500 dark:text-[#848d9c] text-[13px] font-medium">1 result found</span>
        )}
      </div>

      {/* İÇERİK ALANI (Boş Durum veya Sonuçlar) */}
      {!hasSearched ? (
        // Hiç arama yapılmamış ilk durum
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="w-16 h-16 bg-gray-100 dark:bg-[#11141b] rounded-full flex items-center justify-center mb-5 transition-colors">
            <FiSearch className="text-gray-400 dark:text-[#848d9c] text-[24px]" />
          </div>
          <h3 className="text-slate-900 dark:text-white text-[16px] font-bold mb-2">Search for issues</h3>
          <p className="text-gray-500 dark:text-[#848d9c] text-[14px]">Enter a search term to find issues across all your projects.</p>
        </div>
      ) : (
        // Arama yapıldıktan sonra çıkan örnek sonuç (Mock Data)
        <div className="flex flex-col gap-3">
          <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#11141b] transition-colors cursor-pointer group shadow-sm dark:shadow-none">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="w-4 h-4 border border-blue-400 dark:border-[#5c9dff] rounded-sm flex items-center justify-center bg-blue-50 dark:bg-[#5c9dff]/10">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-[#5c9dff] rounded-sm"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-gray-500 dark:text-[#848d9c] text-[12px] font-semibold">#1</span>
                  <span className="text-yellow-600 dark:text-[#eab308] text-[10px] font-bold bg-yellow-50 dark:bg-[#eab308]/10 px-2 py-0.5 rounded uppercase">HIGH</span>
                </div>
                <h4 className="text-slate-900 dark:text-white text-[15px] font-bold mb-0.5 group-hover:text-blue-600 dark:group-hover:text-[#5c9dff] transition-colors">Issue title</h4>
                <p className="text-gray-500 dark:text-[#848d9c] text-[13px]">Description</p>
              </div>
            </div>
            <FiChevronRight className="text-gray-400 dark:text-[#848d9c] text-[20px] group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </div>
        </div>
      )}

    </div>
  );
}