"use client";
import React from "react";

export default function ProjectSettingsPage() {
  return (
    <div className="w-full h-full p-6 md:p-8 max-w-4xl mx-auto">
      
      {/* Breadcrumb */}
      <div className="text-[13px] font-medium text-gray-500 dark:text-[#848d9c] mb-2">
        Dashboard / Ayşe Nur / Default Project / Settings
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          Project Settings
        </h1>
      </div>

      {/* General Card */}
      <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-2xl p-6 shadow-sm dark:shadow-none mb-8">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#1e232d] pb-4 mb-6">
          <span className="text-[15px] font-bold text-gray-900 dark:text-white">General</span>
          <button className="text-[13px] font-medium text-blue-600 dark:text-[#5c9dff] hover:underline">
            Edit
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-[12px] font-semibold text-gray-400 dark:text-[#848d9c] uppercase mb-1">Name</label>
            <div className="text-[15px] font-medium text-gray-800 dark:text-[#e2e8f0]">Default Project</div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-gray-400 dark:text-[#848d9c] uppercase mb-1">Key</label>
            <div className="text-[15px] font-medium text-gray-800 dark:text-[#e2e8f0]">AY</div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-gray-400 dark:text-[#848d9c] uppercase mb-1">Description</label>
            <div className="text-[15px] text-gray-500 dark:text-[#848d9c]">No description</div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-[#1e232d]">
            <div>
              <span className="text-[12px] text-gray-400 dark:text-[#848d9c] block mb-0.5">Created</span>
              <span className="text-[13px] font-medium text-gray-700 dark:text-[#e2e8f0]">22.07.2026</span>
            </div>
            <div>
              <span className="text-[12px] text-gray-400 dark:text-[#848d9c] block mb-0.5">Updated</span>
              <span className="text-[13px] font-medium text-gray-700 dark:text-[#e2e8f0]">22.07.2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Workspace Card */}
      <div className="bg-white dark:bg-[#0b0d12] border border-gray-200 dark:border-[#1e232d] rounded-2xl p-6 shadow-sm dark:shadow-none mb-8">
        <div className="border-b border-gray-100 dark:border-[#1e232d] pb-4 mb-6">
          <span className="text-[15px] font-bold text-gray-900 dark:text-white">Workspace</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-semibold text-gray-800 dark:text-[#e2e8f0] mb-0.5">Ayşe Nur</div>
            <div className="text-[13px] text-gray-500 dark:text-[#848d9c]">Owner</div>
          </div>
          <button className="px-4 py-2 border border-gray-200 dark:border-[#1e232d] rounded-xl text-[13px] font-medium text-gray-700 dark:text-[#e2e8f0] hover:bg-gray-50 dark:hover:bg-[#11141b] transition-colors">
            View Workspace
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-[#0b0d12] border border-red-200 dark:border-red-900/40 rounded-2xl p-6 shadow-sm dark:shadow-none">
        <div className="border-b border-red-100 dark:border-red-900/20 pb-4 mb-6">
          <span className="text-[15px] font-bold text-red-600 dark:text-red-400">Danger Zone</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[13px] text-gray-500 dark:text-[#848d9c] max-w-md">
            Permanently delete all project, boards, issues, cycles, and comments will be permanently removed.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2.5 rounded-xl text-[13px] transition-colors shadow-sm w-max">
            Delete Project
          </button>
        </div>
      </div>

    </div>
  );
}