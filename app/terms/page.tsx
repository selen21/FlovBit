"use client";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: April 28, 2026</p>
        
        <p className="text-[16px] text-gray-600 mb-10 leading-relaxed">
          By using FlowBit services, you accept the following terms and conditions. Please read these terms carefully before using our services.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">1. Account Creation and Security</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          You are responsible for providing accurate information when creating an account and keeping your account password secure. You are fully responsible for all activities performed under your account.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">2. Acceptable Use</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          You may not use our services in illegal, harmful, or rights-violating ways (spam, malware distribution, cyberattacks, etc.). In case of violation, your account may be suspended without notice.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">3. Service Interruptions</h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          Although FlowBit strives for uninterrupted and error-free service, it accepts no direct legal liability for data loss or service interruptions caused by hardware or software failures.
        </p>

        <h2 className="text-xl font-bold text-blue-600 mb-3">4. Cancellation and Termination</h2>
        <p className="text-[16px] text-gray-600 mb-10 leading-relaxed">
          You may delete your account at any time. We also reserve the right to stop providing services to you if you violate the terms.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-[14px] text-gray-600">
            <strong>Note:</strong> This text is an informational draft and is not a real or legally binding agreement.
          </p>
        </div>
      </div>
    </div>
  );
}