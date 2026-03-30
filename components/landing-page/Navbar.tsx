"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-black text-lg">
          <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded">
            P
          </div>
          PesaLens Parser
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-gray-600 text-[16px] font-normal">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        <Link
          href={"/dashboard"}
          className="bg-emerald-700 px-5 py-1 rounded-2xl text-white font-medium text-[13px] hover:cursor-pointer"
        >
          Dashboard
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div>
          <div className="md:hidden px-6 pb-4 space-y-3 text-[14px]">
            <a className="block">Features</a>
            <a className="block">Pricing</a>
            <a className="block">About</a>
          </div>

          <Link
            href={"/dashboard"}
            className="bg-emerald-500 px-5 py-1 rounded text-white font-medium text-[14px] hover:cursor-pointer"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
