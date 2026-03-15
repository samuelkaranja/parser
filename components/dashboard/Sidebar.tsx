"use client";

import {
  LayoutDashboard,
  Upload,
  ArrowDown,
  ArrowUp,
  PieChart,
  FileText,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r p-6">
      <h2 className="text-xl font-bold mb-10 text-green-600">
        M-Pesa Insights
      </h2>

      <nav className="space-y-4 text-gray-600">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active
        />

        <SidebarItem icon={<Upload size={18} />} label="Upload Statement" />

        <SidebarItem icon={<ArrowDown size={18} />} label="Paid In" />

        <SidebarItem icon={<ArrowUp size={18} />} label="Paid Out" />

        <SidebarItem icon={<PieChart size={18} />} label="Categories" />

        <SidebarItem icon={<FileText size={18} />} label="Summary" />
      </nav>

      <div className="mt-auto">
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active = false }: any) {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
        active ? "bg-green-100 text-green-600" : "hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}
