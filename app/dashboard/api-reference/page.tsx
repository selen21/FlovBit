"use client";
import { useState } from "react";
import { FiCopy, FiChevronDown } from "react-icons/fi";

export default function ApiReferencePage() {
  const [activeTab, setActiveTab] = useState("rest");
  const [keyExpiration, setKeyExpiration] = useState("Never");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // --- MOCK DATA: ENVIRONMENT ---
  const envData = [
    { label: "Base URL", value: "https://flovbit.codifya.com" },
    { label: "userId", value: "JvO38RYhUQg2WQPATF96" },
    { label: "workspaceId", value: "{workspaceId} Open a workspace", isLink: true },
    { label: "projectId", value: "RWhItYv_3bAKClT4n4Ug" },
  ];

  // --- MOCK DATA: REST API ---
  const restEndpoints = [
    {
      category: "Auth",
      items: [
        { method: "POST", path: "/api/auth/login", desc: "Login with email/password" },
        { method: "POST", path: "/api/auth/register", desc: "Register new user" },
        { method: "GET", path: "/api/auth/me", desc: "Get current user info" },
      ]
    },
    {
      category: "Workspaces",
      items: [
        { method: "GET", path: "/api/workspaces", desc: "List user workspaces" },
        { method: "POST", path: "/api/workspaces", desc: "Create workspace" },
        { method: "GET", path: "/api/workspaces/{id}", desc: "Get workspace" },
        { method: "GET", path: "/api/workspaces/{id}/members", desc: "List members" },
        { method: "POST", path: "/api/workspaces/{id}/members", desc: "Invite member" },
      ]
    },
    {
      category: "Projects",
      items: [
        { method: "GET", path: "/api/workspaces/{id}/projects", desc: "List projects" },
        { method: "POST", path: "/api/workspaces/{id}/projects", desc: "Create project" },
        { method: "GET", path: "/api/projects/{id}", desc: "Get project" },
        { method: "PATCH", path: "/api/projects/{id}", desc: "Update project" },
        { method: "DELETE", path: "/api/projects/{id}", desc: "Delete project" },
        { method: "GET", path: "/api/projects/{id}/boards", desc: "List boards" },
      ]
    },
    {
      category: "Issues",
      items: [
        { method: "POST", path: "/api/boards/{id}/issues", desc: "Create issue" },
        { method: "GET", path: "/api/issues/{id}", desc: "Get issue" },
        { method: "PATCH", path: "/api/issues/{id}", desc: "Update issue" },
        { method: "DELETE", path: "/api/issues/{id}", desc: "Delete issue" },
        { method: "GET", path: "/api/users/me/issues", desc: "My assigned issues" },
      ]
    },
    {
      category: "Cycles",
      items: [
        { method: "GET", path: "/api/projects/{id}/cycles", desc: "List cycles" },
        { method: "POST", path: "/api/projects/{id}/cycles", desc: "Create cycle" },
        { method: "POST", path: "/api/cycles/{id}/activate", desc: "Start cycle" },
        { method: "POST", path: "/api/cycles/{id}/close", desc: "Close cycle" },
        { method: "POST", path: "/api/cycles/{id}/issues/{issueId}", desc: "Add issue to cycle" },
      ]
    },
    {
      category: "Activity & Dashboard",
      items: [
        { method: "GET", path: "/api/activity?workspaceId={workspaceId}", desc: "Activity log" },
        { method: "GET", path: "/api/dashboard/stats?projectId={projectId}", desc: "Dashboard stats" },
        { method: "GET", path: "/api/dashboard/activity?workspaceId={workspaceId}", desc: "Dashboard activity" },
      ]
    }
  ];

  // --- MOCK DATA: MCP TOOLS ---
  const mcpTools = [
    { name: "create_issue", desc: "Create a new issue in a project", params: ["userId", "projectId", "title", "columnId", "description?", "assigneeId?", "priority?", "dueDate?", "labelIds?"], example: 'Example: "Create a HIGH priority issue for the login bug"' },
    { name: "create_issues", desc: "Bulk-create many issues in one call (preferred for backlogs)", params: ["userId", "projectId", "columnId", "priority?", "issues[] (1-100)"], example: 'Example: "Create issues from this PRD all at once"' },
    { name: "update_issue", desc: "Update an existing issue", params: ["userId", "issueId", "title?", "description?", "columnId?", "assigneeId?", "priority?", "dueDate?"], example: 'Example: "Set this issue\'s priority to MEDIUM"' },
    { name: "move_issue", desc: "Move issue to a different column", params: ["userId", "issueId", "columnId"], example: 'Example: "Move this issue to the \'In Progress\' column"' },
    { name: "add_comment", desc: "Add a comment to an issue", params: ["userId", "issueId", "content"], example: 'Example: "Add the comment \'tested after deploy\' to this issue"' },
    { name: "create_project", desc: "Create a new project in a workspace", params: ["userId", "workspaceId", "name", "description?"], example: 'Example: "Create a project named \'Mobile App\' in the workspace"' },
    { name: "create_board", desc: "Create a new board in a project", params: ["userId", "projectId", "name"], example: 'Example: "Create a board named \'Sprint Board\' in this project"' },
    { name: "invite_member", desc: "Invite a user to workspace by email", params: ["userId", "workspaceId", "email", "role"], example: 'Example: "Invite ali@company.com to the workspace as a member"' },
    { name: "create_cycle", desc: "Create a sprint/cycle in a project", params: ["userId", "projectId", "name", "startDate", "endDate", "goal?"], example: 'Example: "Create a 2-week \'Sprint 3\' cycle"' },
    { name: "start_cycle", desc: "Activate a planned cycle", params: ["userId", "cycleId"], example: 'Example: "Start planned Sprint 3"' },
    { name: "close_cycle", desc: "Close an active cycle", params: ["userId", "cycleId"], example: 'Example: "Close the active cycle"' },
    { name: "assign_issue_to_cycle", desc: "Add an issue to a cycle", params: ["userId", "cycleId", "issueId"], example: 'Example: "Add this issue to the current sprint"' },
    { name: "search_issues", desc: "Search issues by text", params: ["userId", "query", "projectId?", "assigneeId?", "priority?"], example: 'Example: "Find all issues that mention \'payment\'"' },
    { name: "get_notifications", desc: "Get recent notifications", params: ["userId"], example: 'Example: "Show my recent notifications"' },
  ];

  const mcpPrompts = [
    { name: "break_prd_into_issues", desc: "Break down a PRD into actionable issues", params: ["prd", "projectId?"] },
    { name: "summarize_cycle_risk", desc: "Analyze cycle risks and recommendations", params: ["cycleSummary", "issueList"] },
    { name: "summarize_project_status", desc: "Generate project status summary", params: ["projectSummary"] },
    { name: "daily_standup", desc: "Generate daily standup update", params: ["userId", "projectSummary"] },
    { name: "sprint_retrospective", desc: "Generate retrospective talking points", params: ["cycleReport"] },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-[#22c55e]/10 text-[#22c55e]";
      case "POST": return "bg-[#3b82f6]/10 text-[#3b82f6]";
      case "PATCH": return "bg-[#eab308]/10 text-[#eab308]";
      case "DELETE": return "bg-[#ef4444]/10 text-[#ef4444]";
      default: return "bg-gray-500/10 text-gray-400";
    }
  };

  return (
    <div className="p-8 max-w-[1100px] mx-auto w-full pb-24 font-sans">
      
      {/* BAŞLIK ALANI */}
      <h1 className="text-white text-[28px] font-bold tracking-tight mb-2">API & MCP Guide</h1>
      <p className="text-[#848d9c] text-[15px] mb-8">Programmatic integration with FlovBit - step by step, filled with your environment.</p>

      {/* YOUR ENVIRONMENT BÖLÜMÜ */}
      <div className="mb-12">
        <h3 className="text-white text-[14px] font-semibold mb-4">Your Environment <span className="text-[#848d9c] font-normal">— auto-filled - used in commands</span></h3>
        <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden flex flex-wrap">
          {envData.map((item, idx) => (
            <div key={idx} className={`flex-1 min-w-[200px] p-4 ${idx !== envData.length - 1 ? 'border-r border-[#1e232d]' : ''}`}>
              <div className="text-[#848d9c] text-[12px] mb-2">{item.label}</div>
              <div className="flex items-center justify-between gap-2 bg-[#0b0d12] border border-[#1e232d] rounded-md px-3 py-1.5 hover:border-[#5c9dff]/30 transition-colors cursor-pointer group">
                <span className={`text-[13px] truncate font-mono ${item.isLink ? 'text-[#848d9c]' : 'text-[#e2e8f0]'}`}>
                  {item.value}
                </span>
                {!item.isLink && (
                  <button className="text-[#848d9c] group-hover:text-white transition-colors flex-shrink-0 flex items-center gap-1 text-[12px]">
                    <FiCopy /> Copy
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK START BÖLÜMÜ */}
      <div className="mb-16">
        <h2 className="text-white text-[22px] font-bold mb-2">Quick Start</h2>
        <p className="text-[#848d9c] text-[14px] mb-8">First integration in four steps — commands are filled with your environment.</p>

        <div className="space-y-10">
          {/* Adım 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#5c9dff]/10 text-[#5c9dff] flex items-center justify-center font-bold text-[14px]">1</div>
            <h3 className="text-white text-[16px] font-bold mb-2">Get token</h3>
            <p className="text-[#848d9c] text-[14px] mb-4">Take the data.accessToken value from the login response and use it as $TOKEN.</p>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                <span className="text-[#848d9c] text-[13px]">Get token</span>
                <span className="text-[#848d9c] text-[12px] font-mono border border-[#1e232d] px-2 py-0.5 rounded">curl</span>
              </div>
              <div className="p-4 relative group">
                <button className="absolute top-4 right-4 text-[#848d9c] group-hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors">
                  <FiCopy /> Copy
                </button>
                <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap leading-relaxed">
<span className="text-[#c678dd]">curl</span> -X POST https://flovbit.codifya.com/api/auth/login \
  -H <span className="text-[#98c379]">"Content-Type: application/json"</span> \
  -d <span className="text-[#98c379]">'{`{
    "email": "test@example.com",
    "password": "password123"
  }`}'</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Adım 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#5c9dff]/10 text-[#5c9dff] flex items-center justify-center font-bold text-[14px]">2</div>
            <h3 className="text-white text-[16px] font-bold mb-2">Make your first request</h3>
            <p className="text-[#848d9c] text-[14px] mb-4">Fetch issues assigned to you with a Bearer token.</p>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                <span className="text-[#848d9c] text-[13px]">Make your first request</span>
                <span className="text-[#848d9c] text-[12px] font-mono border border-[#1e232d] px-2 py-0.5 rounded">curl</span>
              </div>
              <div className="p-4 relative group">
                <button className="absolute top-4 right-4 text-[#848d9c] group-hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors">
                  <FiCopy /> Copy
                </button>
                <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap leading-relaxed">
<span className="text-[#c678dd]">curl</span> "https://flovbit.codifya.com/api/users/me/issues" \
  -H <span className="text-[#98c379]">"Authorization: Bearer $TOKEN"</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Adım 3 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#5c9dff]/10 text-[#5c9dff] flex items-center justify-center font-bold text-[14px]">3</div>
            <h3 className="text-white text-[16px] font-bold mb-2">Create an issue</h3>
            <p className="text-[#848d9c] text-[14px] mb-4">Get boardId from GET /api/projects/{"{id}"}/boards and columnId from GET /api/boards/{"{id}"}.</p>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                <span className="text-[#848d9c] text-[13px]">Create an issue</span>
                <span className="text-[#848d9c] text-[12px] font-mono border border-[#1e232d] px-2 py-0.5 rounded">curl</span>
              </div>
              <div className="p-4 relative group">
                <button className="absolute top-4 right-4 text-[#848d9c] group-hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors">
                  <FiCopy /> Copy
                </button>
                <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap leading-relaxed">
<span className="text-[#c678dd]">curl</span> -X POST https://flovbit.codifya.com/api/boards/{"{boardId}"}/issues \
  -H <span className="text-[#98c379]">"Authorization: Bearer $TOKEN"</span> \
  -H <span className="text-[#98c379]">"Content-Type: application/json"</span> \
  -d <span className="text-[#98c379]">'{`{
    "title": "My first issue",
    "columnId": "{columnId}",
    "priority": "MEDIUM"
  }`}'</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Adım 4 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#5c9dff]/10 text-[#5c9dff] flex items-center justify-center font-bold text-[14px]">4</div>
            <h3 className="text-white text-[16px] font-bold mb-2">Connect MCP</h3>
            <p className="text-[#848d9c] text-[14px] mb-4">Add this block to your Claude Desktop / Cursor MCP settings.</p>
            <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                <span className="text-[#848d9c] text-[13px]">Connect MCP</span>
                <span className="text-[#848d9c] text-[12px] font-mono border border-[#1e232d] px-2 py-0.5 rounded">config</span>
              </div>
              <div className="p-4 relative group">
                <button className="absolute top-4 right-4 text-[#848d9c] group-hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors">
                  <FiCopy /> Copy
                </button>
                <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap leading-relaxed">
{`{
  "mcpServers": {
    "flovbit": {
      "command": "npx",
      "args": [
        "tsx",
        "src/mcp/server.ts"
      ],
      "env": {
        "MCP_STUDIO_TOKEN": "<API_KEY veya JWT>"
      }
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL REFERENCE BÖLÜMÜ & TABS */}
      <div>
        <h2 className="text-white text-[22px] font-bold mb-6">Full Reference</h2>
        
        {/* Tab Menü */}
        <div className="flex gap-6 border-b border-[#1e232d] mb-8">
          <button 
            onClick={() => setActiveTab("rest")}
            className={`pb-3 text-[14px] font-medium border-b-2 transition-colors ${activeTab === "rest" ? "border-[#5c9dff] text-white" : "border-transparent text-[#848d9c] hover:text-white"}`}
          >
            REST API
          </button>
          <button 
            onClick={() => setActiveTab("mcp-tools")}
            className={`pb-3 text-[14px] font-medium border-b-2 transition-colors ${activeTab === "mcp-tools" ? "border-[#5c9dff] text-white" : "border-transparent text-[#848d9c] hover:text-white"}`}
          >
            MCP Tools
          </button>
          <button 
            onClick={() => setActiveTab("mcp-setup")}
            className={`pb-3 text-[14px] font-medium border-b-2 transition-colors ${activeTab === "mcp-setup" ? "border-[#5c9dff] text-white" : "border-transparent text-[#848d9c] hover:text-white"}`}
          >
            MCP Setup
          </button>
        </div>

        {/* --- TAB 1: REST API --- */}
        {activeTab === "rest" && (
          <div className="space-y-12">
            {restEndpoints.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-white text-[18px] font-bold mb-4">{category.category}</h3>
                <div className="flex flex-col gap-2">
                  {category.items.map((endpoint, eIdx) => (
                    <div key={eIdx} className="bg-[#0b0d12] border border-[#1e232d] hover:border-[#2a3140] transition-colors rounded-lg p-3 flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className={`text-[11px] font-bold px-2 py-1 rounded w-[60px] text-center ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-[#e2e8f0] font-mono text-[13px]">{endpoint.path}</code>
                        <span className="text-[#848d9c] text-[13px] ml-4 hidden md:block">{endpoint.desc}</span>
                      </div>
                      <span className="text-[#848d9c] text-[11px] font-mono border border-[#1e232d] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">curl</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* TypeScript Client Example Block */}
            <div className="mt-12">
              <h3 className="text-white text-[18px] font-bold mb-4">TypeScript client example</h3>
              <p className="text-[#848d9c] text-[14px] mb-4">In-browser calls use the session cookie; external clients add a Bearer token.</p>
              <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                  <span className="text-[#848d9c] text-[13px]">api-client.ts</span>
                  <button className="text-[#848d9c] hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors">
                    <FiCopy /> Copy
                  </button>
                </div>
                <div className="p-4">
                  <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap leading-relaxed">
{`// From the browser: session cookie is sent automatically, no token needed.
// External (Node/CLI): add Authorization: Bearer <accessToken>
const api = {
  get: async <T>(path: string) => {
    const res = await fetch(path, { credentials: 'include' });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json() as Promise<T>;
  },
  post: async <T>(path: string, body: unknown) => {
    const res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json() as Promise<T>;
  }
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: MCP TOOLS --- */}
        {activeTab === "mcp-tools" && (
          <div>
            <p className="text-[#848d9c] text-[14px] mb-6">All tools expect userId as their first parameter for identity. You can call them in natural language from an AI client.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {mcpTools.map((tool, idx) => (
                <div key={idx} className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5">
                  <h4 className="text-[#5c9dff] text-[15px] font-mono font-bold mb-2">{tool.name}</h4>
                  <p className="text-[#e2e8f0] text-[13px] mb-4">{tool.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.params.map((param, pIdx) => (
                      <span key={pIdx} className="bg-[#1e232d] text-[#848d9c] text-[11px] font-mono px-2 py-0.5 rounded">
                        {param}
                      </span>
                    ))}
                  </div>
                  <div className="bg-[#0b0d12] border border-[#1e232d] rounded p-2 text-[#848d9c] text-[12px]">
                    {tool.example}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-white text-[18px] font-bold mb-4 border-t border-[#1e232d] pt-8">MCP Prompts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mcpPrompts.map((prompt, idx) => (
                <div key={idx} className="bg-[#11141b] border border-[#1e232d] rounded-xl p-5">
                  <h4 className="text-[#c678dd] text-[15px] font-mono font-bold mb-2">{prompt.name}</h4>
                  <p className="text-[#e2e8f0] text-[13px] mb-4">{prompt.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#848d9c] text-[12px]">args:</span>
                    <span className="text-[#848d9c] text-[11px] font-mono">{prompt.params.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* --- TAB 3: MCP SETUP --- */}
        {activeTab === "mcp-setup" && (
          <div className="space-y-12">
            
            {/* API Keys Section */}
            <div>
              <h3 className="text-white text-[18px] font-bold mb-2">API Keys</h3>
              <p className="text-[#848d9c] text-[14px] mb-4">Create Bearer tokens for MCP HTTP and REST API requests.</p>
              <div className="flex items-center gap-3 bg-[#11141b] p-4 rounded-xl border border-[#1e232d]">
                <input 
                  type="text" 
                  placeholder="Key name (e.g. Cursor, personal laptop)" 
                  className="flex-1 bg-[#0b0d12] border border-[#1e232d] rounded-md px-3 py-2 text-[14px] text-white focus:outline-none focus:border-[#5c9dff]"
                />
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 bg-[#0b0d12] border border-[#1e232d] px-3 py-2 rounded-md text-[14px] text-white w-[110px] justify-between"
                  >
                    {keyExpiration} <FiChevronDown />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 w-full bg-[#11141b] border border-[#1e232d] rounded-md overflow-hidden z-10">
                      {["30 days", "90 days", "1 year", "Never"].map(opt => (
                        <div key={opt} onClick={() => {setKeyExpiration(opt); setIsDropdownOpen(false);}} className="px-3 py-2 text-[13px] text-white hover:bg-[#1e232d] cursor-pointer">
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button className="bg-[#5c9dff] text-[#0b0d12] px-4 py-2 rounded-md font-semibold text-[14px] hover:bg-[#4a8bee] transition-colors">
                  Create
                </button>
              </div>
              <p className="text-[#848d9c] text-[13px] mt-4 ml-1">No API keys yet.</p>
            </div>

            {/* Connect Remotely */}
            <div>
              <h3 className="text-white text-[18px] font-bold mb-2 flex items-center gap-2">
                Connect remotely <span className="bg-[#1e232d] text-[#848d9c] text-[11px] px-2 py-0.5 rounded font-normal">(recommended)</span>
              </h3>
              <p className="text-[#848d9c] text-[14px] mb-4">
                MCP endpoint: <code className="text-[#e2e8f0]">https://mcp.flovbit.codifya.com/mcp</code><br/>
                Send the API key you create below in the <code className="text-[#e2e8f0]">Authorization: Bearer &lt;API_KEY&gt;</code> header.
              </p>

              <div className="space-y-4">
                <div className="bg-[#11141b] border border-[#1e232d] rounded-xl overflow-hidden">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#1e232d] bg-[#0b0d12]">
                    <span className="text-[#848d9c] text-[13px]">Claude Code</span>
                    <button className="text-[#848d9c] hover:text-white flex items-center gap-1 text-[12px] bg-[#1e232d] px-2 py-1 rounded transition-colors"><FiCopy /> Copy</button>
                  </div>
                  <div className="p-4">
                    <pre className="text-[#e2e8f0] text-[13px] font-mono whitespace-pre-wrap">
claude mcp add --transport http flovbit https://mcp.flovbit.codifya.com/mcp \
  --header "Authorization: Bearer &lt;API_KEY&gt;"
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* MCP Resources */}
            <div>
              <h3 className="text-white text-[18px] font-bold mb-4">MCP Resources</h3>
              <div className="space-y-2">
                <div className="bg-[#11141b] border border-[#1e232d] rounded-lg p-3 flex items-center gap-4">
                  <code className="text-[#5c9dff] text-[13px] font-mono w-[200px]">board/{"{boardId}"}</code>
                  <span className="text-[#848d9c] text-[13px]">Board snapshot with columns and status mappings</span>
                </div>
                <div className="bg-[#11141b] border border-[#1e232d] rounded-lg p-3 flex items-center gap-4">
                  <code className="text-[#5c9dff] text-[13px] font-mono w-[200px]">project/{"{projectId}"}/summary</code>
                  <span className="text-[#848d9c] text-[13px]">Project summary with issue counts and workload</span>
                </div>
                <div className="bg-[#11141b] border border-[#1e232d] rounded-lg p-3 flex items-center gap-4">
                  <code className="text-[#5c9dff] text-[13px] font-mono w-[200px]">cycle/{"{cycleId}"}/summary</code>
                  <span className="text-[#848d9c] text-[13px]">Cycle summary with issue count and days remaining</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}