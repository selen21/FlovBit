"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Reach out to us for questions, feedback, or Enterprise plans.
        </p>
      </div>

      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-blue-600">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-blue-600">Email</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-600">Company (Optional)</label>
            <input 
              type="text" 
              placeholder="Company Inc." 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-600">Message</label>
            <textarea 
              rows={4}
              placeholder="How can we help?" 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button className="w-full bg-[#5b51d8] hover:bg-[#4b43b8] text-white font-medium py-3.5 rounded-xl transition-colors mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}