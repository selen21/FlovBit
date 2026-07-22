"use client";
import React, { useState } from "react";

export default function CyclesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full p-6 md:p-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb */}
      <div className="text-[13px] font-medium text-gray-500 dark:text-[#848d9c] mb-2">
        Dashboard / Default Project / Cycles
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
            Cycles
          </h1>
          <p className="text-[14px] text-gray-500 dark:text-[#848d9c]">
            0 cycles
          </p>
        </div>

        {/* New Cycle Butonu */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors shadow-sm flex items-center gap-2 w-max"
        >
          New Cycle
        </button>
      </div>

      {/* Empty State Alanı */}
      <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-2xl shadow-sm dark:shadow-none p-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gray-50 dark:bg-[#11141b] rounded-full flex items-center justify-center mb-5 border border-gray-100 dark:border-[#1e232d]">
          <svg className="w-7 h-7 text-gray-400 dark:text-[#5e5f64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">
          No Cycles Yet
        </h3>
        <p className="text-[14px] text-gray-500 dark:text-[#848d9c] max-w-sm">
          Create your first cycle to start tracking progress.
        </p>
      </div>

      {/* New Cycle Modal (Açılır Pencere) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Create Cycle</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-sm font-semibold"
              >
                Cancel
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 dark:text-[#e2e8f0] mb-1.5">
                  Cycle Name <span className="text-blue-600">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Sprint 24" 
                  className="w-full bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl px-4 py-2.5 text-[14px] text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-700 dark:text-[#e2e8f0] mb-1.5">
                  Goal <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input 
                  type="text" 
                  placeholder="What will this cycle achieve?" 
                  className="w-full bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl px-4 py-2.5 text-[14px] text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 dark:text-[#e2e8f0] mb-1.5">
                    Start Date <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="date" 
                    className="w-full bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl px-4 py-2.5 text-[14px] text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 dark:text-[#e2e8f0] mb-1.5">
                    End Date <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="date" 
                    className="w-full bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-xl px-4 py-2.5 text-[14px] text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-sm"
                >
                  Create Cycle
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}