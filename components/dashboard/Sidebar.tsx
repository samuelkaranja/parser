"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Upload,
  ArrowDown,
  ArrowUp,
  PieChart,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 left-0 z-50
    h-screen w-64
    bg-white border-r p-6
    flex flex-col overflow-y-auto
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
`}
      >
        {/* Close button mobile */}
        <div className="flex items-center justify-between md:block">
          <h2 className="text-xl font-bold mb-10 text-green-600">
            M-Pesa Insights
          </h2>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X size={22} />
          </button>
        </div>

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
    </>
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
