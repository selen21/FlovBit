"use client";
import { useState } from "react";
import { FiCheck, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function BillingPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleUpgrade = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      router.push("/payment");
    }, 1200);
  };

  const plans = [
    {
      name: "Starter",
      desc: "Ideal starting point for small teams",
      price: "199",
      period: "/month",
      features: ["5 Projects", "10 Users", "Basic AI Assistant", "Email Support"],
      buttonText: "Current Plan",
      isActive: true,
      popular: false,
    },
    {
      name: "Pro",
      desc: "For growing professional teams",
      price: "499",
      period: "/user/month",
      features: [
        "Unlimited Projects",
        "Unlimited Users",
        "Advanced AI Assistant",
        "Priority Support",
        "Webhooks & Integrations",
      ],
      buttonText: isRedirecting ? "Redirecting..." : "Upgrade",
      isActive: false,
      popular: true,
      isButtonLoading: isRedirecting,
    },
    {
      name: "Enterprise",
      desc: "For enterprise needs",
      price: "billing.enterprisePrice",
      period: "",
      features: [
        "All Pro features",
        "SSO & Security",
        "Custom SLA",
        "Dedicated Support",
        "Self-host Option",
      ],
      buttonText: "Contact Sales",
      isActive: false,
      popular: false,
    },
  ];

  return (
    <div className="p-8 max-w-[1000px] mx-auto w-full pb-24 font-sans">
      {/* BAŞLIK ALANI */}
      <div className="mb-10">
        <h1 className="text-white text-[28px] font-bold tracking-tight mb-2">Billing</h1>
        <p className="text-[#848d9c] text-[15px]">Manage your plan and view payment information.</p>
      </div>

      {/* MEVCUT PLAN ÖZETİ */}
      <div className="bg-[#11141b] border border-[#1e232d] rounded-xl p-6 mb-12 flex justify-between items-center">
        <div>
          <p className="text-[#848d9c] text-[13px] mb-1">Current Plan</p>
          <div className="flex items-center gap-3">
            <h2 className="text-white text-[22px] font-bold">Starter</h2>
            <span className="bg-[#22c55e]/10 text-[#22c55e] text-[11px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
          </div>
        </div>
        <button className="bg-[#1e232d] text-white px-5 py-2.5 rounded-lg font-medium text-[13px] hover:bg-[#2a3140] transition-colors border border-[#2a3140]">
          Go to Dashboard
        </button>
      </div>

      {/* PLAN SEÇİMİ */}
      <div>
        <h2 className="text-white text-[18px] font-bold mb-6">Choose Plan</h2>

        {/* Fiyat Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-[#0b0d12] border rounded-2xl p-7 flex flex-col ${plan.popular ? 'border-[#4f39f6]/50 shadow-[0_0_30px_-10px_rgba(79,57,246,0.15)]' : 'border-[#1e232d]'}`}>
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4f39f6] text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-white text-[22px] font-bold mb-2">{plan.name}</h3>
              <p className="text-[#848d9c] text-[13px] mb-6 h-[40px] leading-relaxed">{plan.desc}</p>
              
              <div className="mb-8">
                {plan.price === "billing.enterprisePrice" ? (
                  <span className="text-white text-[22px] font-bold">{plan.price}</span>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-white text-[32px] font-bold">₺{plan.price}</span>
                    <span className="text-[#848d9c] text-[13px] ml-1">{plan.period}</span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <FiCheck className="text-[#22c55e] mt-0.5 shrink-0 text-[16px]" />
                      <span className="text-[#e2e8f0] text-[13px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.popular ? (
                <button 
                  onClick={handleUpgrade}
                  disabled={plan.isButtonLoading}
                  className={`w-full py-3 rounded-lg font-semibold text-[14px] transition-all flex items-center justify-center gap-2 ${plan.isButtonLoading ? 'bg-[#3730a3] text-white cursor-wait opacity-80' : 'bg-[#4f39f6] text-white hover:bg-[#4330d3]'}`}
                >
                  {plan.isButtonLoading && (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  )}
                  {plan.buttonText}
                </button>
              ) : (
                <button 
                  className={`w-full py-3 rounded-lg font-semibold text-[14px] transition-colors ${plan.isActive ? 'bg-transparent text-white cursor-default' : 'bg-transparent border border-[#2a3140] text-white hover:bg-[#1e232d]'}`}
                >
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* GÜVENLİK BİLGİSİ */}
      <div className="mt-12 pt-8 border-t border-[#1e232d]">
        <h4 className="text-white text-[15px] font-bold mb-2">Payment Information</h4>
        <p className="text-[#848d9c] text-[13px] mb-4">Your payments are secured with 256-bit SSL encryption. All payment transactions are processed via the PayTR infrastructure.</p>
        <div className="flex items-center gap-6 text-[#848d9c] text-[12px]">
          <div className="flex items-center gap-2">
            <FiLock className="text-[14px]" />
            <span>SSL Protected</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheck className="text-[14px]" />
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}