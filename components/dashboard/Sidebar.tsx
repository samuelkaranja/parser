"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard",
    },
    {
      label: "Upload Statement",
      icon: <Upload size={18} />,
      href: "/upload",
    },
    {
      label: "Paid In",
      icon: <ArrowDown size={18} />,
      href: "/dashboard/paid-in",
    },
    {
      label: "Paid Out",
      icon: <ArrowUp size={18} />,
      href: "/dashboard/paid-out",
    },
    {
      label: "Categories",
      icon: <PieChart size={18} />,
      href: "/categories",
    },
    {
      label: "Summary",
      icon: <FileText size={18} />,
      href: "/summary",
    },
  ];

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
        {/* Header */}
        <div className="flex items-center justify-between md:block">
          <h2 className="text-xl font-bold mb-10 text-green-600">
            M-Pesa Insights
          </h2>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 text-gray-600">
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
              closeSidebar={() => setOpen(false)}
            />
          ))}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto">
          <SidebarItem
            icon={<Settings size={18} />}
            label="Settings"
            href="/settings"
            active={pathname === "/settings"}
            closeSidebar={() => setOpen(false)}
          />
        </div>
      </aside>
    </>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  closeSidebar?: () => void;
};

function SidebarItem({
  icon,
  label,
  href,
  active = false,
  closeSidebar,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={closeSidebar}
      className={`flex items-center gap-3 p-2 rounded-lg transition-colors
        ${
          active
            ? "bg-green-100 text-green-600 font-medium"
            : "hover:bg-gray-100"
        }`}
    >
      {icon}
      {label}
    </Link>
  );
}
