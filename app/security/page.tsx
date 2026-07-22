"use client";
import Link from "next/link";

export default function Security() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">Security & Privacy</h1>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The security of your data is our top priority. We apply modern web security standards to isolate and protect your data.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Multi-tenant Data Isolation</h3>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Each workspace keeps its own data separated by strict authorization rules. Data never leaks to other customers under any conditions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Secure Authentication</h3>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            User sessions are protected via httpOnly and secure cookies. Direct API-based CSRF (Origin/Referer check) protections are active.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Role-Based Access Control (RBAC)</h3>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            In-app actions are strictly controlled according to user roles and project access levels. Only authorized users can make changes.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Audit Logs & Webhook Security</h3>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Important actions are logged (Audit Log). Outgoing webhooks go through validation stages to prevent misuse.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
        <p className="text-[15px] text-gray-600">
          If you want to report a vulnerability, please contact us through our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>. Our team reviews reports as quickly as possible.
        </p>
      </div>
    </div>
  );
}