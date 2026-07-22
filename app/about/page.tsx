"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">About Us</h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are building an intelligent, simple, and powerful project management platform for modern teams.
        </p>
        
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
          FlowBit is a next-generation project management platform designed to help modern teams manage their work processes more efficiently, simply, and intelligently.
        </p>

        <p className="text-[16px] text-gray-600 mb-12 leading-relaxed">
          Far from the complexity of traditional tools, we built a system focused on speed and concentration. FlowBit not only tracks work, but also adds a new assistant to your team with AI support.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Purpose</h2>
        <p className="text-[16px] text-gray-600 mb-12 leading-relaxed">
          Our purpose is to let teams spend less time planning and more time producing. Track your work with boards, sprints, and clear reports, and leave security and speed to FlowBit in the background.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-4">Who Is It Built For?</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          FlowBit is ideal for rapidly growing startups, agile software teams, creative agencies, and modern teams from every sector that want to digitize their business processes.
        </p>
      </div>
    </div>
  );
}