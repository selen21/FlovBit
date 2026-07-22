"use client";
import React from "react";

export default function ReportsPage() {
  return (
    <div className="w-full h-full p-6 md:p-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb */}
      <div className="text-[13px] font-medium text-gray-500 dark:text-[#848d9c] mb-2">
        Dashboard / Ayşe Nur / Default Project / Reports
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          Project Reports
        </h1>
      </div>

      {/* Üst 4'lü İstatistik Kutuları */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-5 rounded-2xl shadow-sm dark:shadow-none">
          <div className="text-[12px] font-medium text-gray-500 dark:text-[#848d9c] mb-1">TOTAL ISSUES</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
        </div>
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-5 rounded-2xl shadow-sm dark:shadow-none">
          <div className="text-[12px] font-medium text-gray-500 dark:text-[#848d9c] mb-1">OVERDUE</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
        </div>
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-5 rounded-2xl shadow-sm dark:shadow-none">
          <div className="text-[12px] font-medium text-gray-500 dark:text-[#848d9c] mb-1">STATUSES</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
        </div>
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-5 rounded-2xl shadow-sm dark:shadow-none">
          <div className="text-[12px] font-medium text-gray-500 dark:text-[#848d9c] mb-1">ASSIGNEES</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
        </div>
      </div>

      {/* Alt 2'li Analiz Kutuları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-6 rounded-2xl shadow-sm dark:shadow-none">
          <h3 className="text-[14px] font-bold text-gray-900 dark:text-white mb-2">VELOCITY OVERVIEW</h3>
          <p className="text-[13px] text-gray-500 dark:text-[#848d9c]">No cycle data yet</p>
        </div>
        <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] p-6 rounded-2xl shadow-sm dark:shadow-none">
          <h3 className="text-[14px] font-bold text-gray-900 dark:text-white mb-2">ASSIGNEE WORKLOAD</h3>
          <p className="text-[13px] text-gray-500 dark:text-[#848d9c]">No assigned issues</p>
        </div>
      </div>

    </div>
  );
}