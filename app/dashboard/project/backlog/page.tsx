"use client";
import React from "react";

export default function BacklogPage() {
  return (
    <div className="w-full h-full p-6 md:p-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb (Üst Bilgi Navigasyonu) */}
      <div className="text-[13px] font-medium text-gray-500 dark:text-[#848d9c] mb-2">
        Dashboard / Default Project / Backlog
      </div>

      {/* Header Bölümü */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
            Backlog
          </h1>
          <p className="text-[14px] text-gray-500 dark:text-[#848d9c]">
            0 issues in backlog
          </p>
        </div>

        {/* Filtre Butonu */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-[#1e232d] rounded-lg text-[13px] font-medium text-gray-700 dark:text-[#e2e8f0] hover:bg-gray-50 dark:hover:bg-[#11141b] transition-colors shadow-sm dark:shadow-none bg-white dark:bg-[#0b0d12]">
          All Priorities
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Tablo Alanı */}
      <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl shadow-sm dark:shadow-none overflow-hidden flex flex-col">
        
        {/* Tablo Başlıkları */}
        <div className="grid grid-cols-12 gap-4 p-4 text-[12px] font-semibold text-gray-500 dark:text-[#848d9c] uppercase tracking-wider border-b border-gray-200 dark:border-[#1e232d] bg-gray-50/50 dark:bg-[#11141b]/50">
          <div className="col-span-1">ID</div>
          <div className="col-span-7">TITLE</div>
          <div className="col-span-2">PRIORITY</div>
          <div className="col-span-2">ASSIGNEE</div>
        </div>
        
        {/* Boş Durum (Empty State) */}
        <div className="flex flex-col items-center justify-center py-28 text-center">
          <div className="w-16 h-16 bg-gray-50 dark:bg-[#11141b] rounded-full flex items-center justify-center mb-5 border border-gray-100 dark:border-[#1e232d]">
            <svg className="w-7 h-7 text-gray-400 dark:text-[#5e5f64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-1.5">
            No issues in backlog
          </h3>
          <p className="text-[14px] text-gray-500 dark:text-[#848d9c]">
            Issues you add will appear here.
          </p>
        </div>
      </div>
      
      {/* Alt Bilgi */}
      <div className="mt-4 text-[13px] text-gray-500 dark:text-[#848d9c] font-medium pl-1">
        Showing 0 of 0 issues
      </div>
      
    </div>
  );
}