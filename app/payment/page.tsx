"use client";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiLock, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("kart");
  const [selectedProvider, setSelectedProvider] = useState("bkm");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [language, setLanguage] = useState("TR");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Kart Formu State'leri
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  // Hata mesajları state'leri
  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryError, setExpiryError] = useState("");

  const handleLangChange = (lang: string) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    if (provider === "juzdan") {
      setShowWarningModal(true);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!cardName.trim()) {
      setCardNameError("Kart üzerindeki ad ve soyadı girin");
      isValid = false;
    } else {
      setCardNameError("");
    }

    if (!cardNumber.trim()) {
      setCardNumberError("Kart numarası girin");
      isValid = false;
    } else {
      setCardNumberError("");
    }

    if (!expiryDate.trim()) {
      setExpiryError("Bu alan zorunludur");
      isValid = false;
    } else {
      setExpiryError("");
    }

    return isValid;
  };

  const handlePayment = () => {
    if (activeTab === "kart" && !validateForm()) return;
    alert("Ödeme Başarılı! Dashboard'a yönlendiriliyorsunuz.");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0d12] text-slate-900 dark:text-[#e2e8f0] font-sans flex flex-col transition-colors duration-200">
      
      {/* --- HEADER --- */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-[#1e232d] bg-white dark:bg-[#11141b] transition-colors duration-200">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 font-bold text-[18px] text-slate-900 dark:text-white cursor-pointer" onClick={() => router.push("/dashboard")}>
            <div className="w-[24px] h-[24px] bg-[#2563eb] rounded-md flex items-center justify-center text-white text-[14px]">F</div>
            FlowBit
          </div>
          <nav className="hidden md:flex gap-6 text-[14px] font-semibold text-gray-500 dark:text-[#848d9c]">
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Features</span>
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Board</span>
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Cycles</span>
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Automation</span>
          </nav>
        </div>
        <button 
          onClick={() => router.push("/dashboard")}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2 rounded-lg font-semibold text-[13px] transition-colors"
        >
          Dashboard
        </button>
      </header>

      {/* --- ANA ÖDEME ALANI --- */}
      <main className="flex-1 max-w-[700px] mx-auto w-full pt-12 pb-24 px-4">
        
        <div className="text-center mb-8">
          <h1 className="text-[26px] font-bold text-[#2563eb] tracking-tight mb-2">Payment Page</h1>
          <p className="text-gray-500 dark:text-[#848d9c] text-[14px]">Fill out the form below to complete your payment.</p>
        </div>

        {/* Dil Seçimi Dropdown */}
        <div className="flex justify-end mb-4 relative z-20">
          <button 
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1.5 border border-gray-200 dark:border-[#2a2f3a] px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e232d] text-[12px] font-bold text-gray-600 dark:text-[#949eaf] uppercase transition-colors"
          >
            {language === "TR" ? "TÜRKÇE" : "ENGLISH"} <FiChevronDown />
          </button>
          {isLangDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-[110px] bg-white dark:bg-[#11141b] border border-gray-200 dark:border-[#1e232d] rounded-lg shadow-lg overflow-hidden">
              <div onClick={() => handleLangChange("TR")} className="px-3 py-2 text-[12px] font-semibold hover:bg-gray-50 dark:hover:bg-[#1e232d] cursor-pointer text-slate-900 dark:text-white">TÜRKÇE</div>
              <div onClick={() => handleLangChange("EN")} className="px-3 py-2 text-[12px] font-semibold hover:bg-gray-50 dark:hover:bg-[#1e232d] cursor-pointer text-slate-900 dark:text-white">ENGLISH</div>
            </div>
          )}
        </div>

        {/* PayTR Formu */}
        <div className="border border-gray-200 dark:border-[#1e232d] rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-[#11141b] transition-colors duration-200">
          <div className="flex border-b border-gray-200 dark:border-[#1e232d] bg-gray-50 dark:bg-[#0b0d12] p-1">
            <button 
              onClick={() => setActiveTab("kart")}
              className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition-all ${activeTab === "kart" ? "bg-white dark:bg-[#11141b] text-slate-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#1e232d]" : "text-gray-500 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white"}`}
            >
              Kart ile Ödeme
            </button>
            <button 
              onClick={() => setActiveTab("diger")}
              className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition-all ${activeTab === "diger" ? "bg-white dark:bg-[#11141b] text-slate-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#1e232d]" : "text-gray-500 dark:text-[#848d9c] hover:text-slate-900 dark:hover:text-white"}`}
            >
              Diğer Ödeme Yöntemleri
            </button>
          </div>

          <div className="p-6 md:p-8">
            {activeTab === "kart" && (
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" value={cardName} onChange={(e) => setCardName(e.target.value)}
                    placeholder="Kart Üzerindeki Ad, Soyad" 
                    className={`w-full border rounded-xl px-4 py-3 text-[14px] bg-transparent dark:text-white focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] placeholder-gray-400 dark:placeholder-gray-500 ${cardNameError ? 'border-red-500 bg-red-50/10' : 'border-gray-200 dark:border-[#2a2f3a]'}`}
                  />
                  {cardNameError && <p className="text-red-500 text-[12px] mt-1 font-medium">{cardNameError}</p>}
                </div>
                <div>
                  <input 
                    type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Kart Numarası" maxLength={19}
                    className={`w-full border rounded-xl px-4 py-3 text-[14px] bg-transparent dark:text-white focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] placeholder-gray-400 dark:placeholder-gray-500 ${cardNumberError ? 'border-red-500 bg-red-50/10' : 'border-gray-200 dark:border-[#2a2f3a]'}`}
                  />
                  {cardNumberError && <p className="text-red-500 text-[12px] mt-1 font-medium">{cardNumberError}</p>}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input 
                      type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="Son Kullanma Tarihi" maxLength={5}
                      className={`w-full border rounded-xl px-4 py-3 text-[14px] bg-transparent dark:text-white focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] placeholder-gray-400 dark:placeholder-gray-500 ${expiryError ? 'border-red-500 bg-red-50/10' : 'border-gray-200 dark:border-[#2a2f3a]'}`}
                    />
                    {expiryError && <p className="text-red-500 text-[12px] mt-1 font-medium">{expiryError}</p>}
                  </div>
                  <div className="flex-1 relative">
                    <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" maxLength={3} className="w-full border border-gray-200 dark:border-[#2a2f3a] bg-transparent dark:text-white rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] placeholder-gray-400 dark:placeholder-gray-500" />
                    <FiHelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#94a3b8] text-[18px] cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="saveCard" checked={saveCard} onChange={(e) => setSaveCard(e.target.checked)} className="w-4 h-4 rounded border-gray-200 dark:border-[#2a2f3a] text-[#2563eb] bg-transparent" />
                  <label htmlFor="saveCard" className="text-gray-600 dark:text-[#848d9c] text-[13px] font-medium cursor-pointer">Kolay ödeme için kartımı hatırla</label>
                </div>
              </div>
            )}

            {activeTab === "diger" && (
              <div className="space-y-3">
                <p className="text-gray-500 dark:text-[#848d9c] text-[12px] font-semibold mb-3 flex items-center gap-1"><FiHelpCircle /> Diğer Ödeme Yöntemleri ile kolay ödeme yapın</p>
                {/* BKM Express */}
                <label className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition-all ${selectedProvider === "bkm" ? "border-[#2563eb] bg-blue-50 dark:bg-[#1c2436]" : "border-gray-200 dark:border-[#2a2f3a] hover:bg-gray-50 dark:hover:bg-[#1e232d]"}`}>
                  <div className="flex items-center gap-3"><input type="radio" checked={selectedProvider === "bkm"} onChange={() => handleProviderChange("bkm")} className="text-[#2563eb]" /><span className="text-[14px] font-bold text-slate-900 dark:text-white">BKM Express</span></div>
                  <span className="text-[11px] font-extrabold bg-gray-200 dark:bg-[#e2e8f0] text-gray-600 dark:text-[#475569] px-2 py-0.5 rounded uppercase">BKM</span>
                </label>
                {/* Juzdan */}
                <label className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition-all ${selectedProvider === "juzdan" ? "border-[#2563eb] bg-blue-50 dark:bg-[#1c2436]" : "border-gray-200 dark:border-[#2a2f3a] hover:bg-gray-50 dark:hover:bg-[#1e232d]"}`}>
                  <div className="flex items-center gap-3"><input type="radio" checked={selectedProvider === "juzdan"} onChange={() => handleProviderChange("juzdan")} className="text-[#2563eb]" /><span className="text-[14px] font-bold text-slate-900 dark:text-white">Juzdan ile Öde</span></div>
                  <span className="text-[11px] font-extrabold bg-orange-100 text-orange-700 px-2 py-0.5 rounded uppercase">JUZDAN</span>
                </label>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#1e232d]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-[#848d9c] text-[13px] font-medium">Ödemeniz Gereken Tutar</span>
                <span className="text-slate-900 dark:text-white text-[22px] font-extrabold">499,00 TL</span>
              </div>
              <button onClick={handlePayment} className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3.5 rounded-xl font-bold text-[15px] transition-colors shadow-sm">Ödeme Yap</button>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8 opacity-40 grayscale flex-wrap border-t border-gray-200 dark:border-[#1e232d] pt-6">
              <span className="text-[10px] font-black tracking-widest border px-1.5 py-0.5 rounded border-gray-400 dark:border-gray-600 dark:text-white">troy</span>
              <span className="text-[10px] font-black tracking-widest border px-1.5 py-0.5 rounded border-gray-400 dark:border-gray-600 dark:text-white">AMEX</span>
              <span className="text-[10px] font-black tracking-widest border px-1.5 py-0.5 rounded border-gray-400 dark:border-gray-600 dark:text-white">VISA</span>
              <span className="text-[10px] font-black tracking-widest border px-1.5 py-0.5 rounded border-gray-400 dark:border-gray-600 dark:text-white">mastercard</span>
            </div>
            <div className="text-center mt-4 text-gray-500 dark:text-[#848d9c] text-[11px] font-semibold"><span className="hover:underline cursor-pointer">Gizlilik</span> &nbsp;|&nbsp; <span className="hover:underline cursor-pointer">Aydınlatma Metni</span></div>
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-1.5 text-[#22c55e] text-[12px] font-semibold"><FiLock className="text-[14px]" /> Secure payment protected by 256-bit SSL encryption.</div>
      </main>

      {/* JUZDAN UYARI MODALI */}
      {showWarningModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#11141b] rounded-2xl w-full max-w-[440px] shadow-2xl p-6 relative transition-colors duration-200">
            <button onClick={() => setShowWarningModal(false)} className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><FiX className="text-[20px]" /></button>
            <div className="flex flex-col items-center text-center mt-2">
              <div className="w-12 h-12 bg-blue-50 dark:bg-[#1c2436] rounded-full flex items-center justify-center text-[#2563eb] text-[22px] font-bold mb-4">i</div>
              <h3 className="text-[18px] font-bold text-slate-900 dark:text-white mb-2">Ödeme Uyarısı</h3>
              <p className="text-gray-600 dark:text-[#848d9c] text-[13px] leading-relaxed mb-6">Yalnızca <span className="font-bold text-slate-900 dark:text-white">Juzdan</span> mobil uygulamasını cep telefonunuza yüklediyseniz bu seçenekten ödeme yapabilirsiniz. <br/><br/> Devam etmek istiyor musunuz?</p>
              <div className="flex w-full gap-3">
                <button onClick={() => { setShowWarningModal(false); setSelectedProvider("bkm"); }} className="flex-1 border border-gray-200 dark:border-[#2a2f3a] hover:bg-gray-50 dark:hover:bg-[#1e232d] text-gray-600 dark:text-[#e2e8f0] font-bold py-2.5 rounded-xl text-[13px] transition-colors">Vazgeç</button>
                <button onClick={() => setShowWarningModal(false)} className="flex-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-2.5 rounded-xl text-[13px] transition-colors">Devam Et</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}