"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-black text-lg">
          <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded">
            P
          </div>
          PesaLens Parser
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-gray-600 text-[15px]">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-[14px]">
          <a className="block">Features</a>
          <a className="block">Pricing</a>
          <a className="block">About</a>
        </div>
      )}
    </nav>
  );
}
