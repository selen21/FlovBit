"use client";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: April 28, 2026</p>
        
        <p className="text-[16px] text-gray-600 mb-10 leading-relaxed">
          This privacy policy explains how your personal information is collected, used, and shared when you use our services through FlowBit ("we", "us", or "our").
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">1. Information We Collect</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          When you use our services, we may collect data such as registration information, account settings, in-app communication data, and usage statistics. In-app project and workspace content (files, tasks) belongs to you and is not shared with third parties for advertising purposes.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">2. Use of Data</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          We use the information we collect to ensure our services work properly, fix errors, improve security, and enhance your user experience.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">3. Cookies</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          We use mandatory cookies for session management (authentication) and security. In addition, limited analytics cookies may be used to analyze platform performance.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">4. Data Sharing</h2>
        <p className="text-[16px] text-gray-600 mb-10 leading-relaxed">
          We do not sell your personal data. It may only be shared with approved sub-processors (such as hosting providers) within the framework of legal obligations.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-[14px] text-gray-600">
            <strong>Note:</strong> This text is an informational draft and is subject to legally binding usage terms.
          </p>
        </div>
      </div>
    </div>
  );
}