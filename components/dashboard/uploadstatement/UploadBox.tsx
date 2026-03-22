"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function UploadBox() {
  const [dragging, setDragging] = useState(false);

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition ${
        dragging ? "border-green-500 bg-green-50" : "border-gray-300"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <UploadCloud className="text-gray-400" size={40} />

        <p className="font-medium text-gray-700">
          Drop your M-Pesa statement here
        </p>

        <p className="text-sm text-gray-500">
          or <span className="text-green-600 cursor-pointer">click to browse files</span>
        </p>

        <p className="text-xs text-gray-400">
          Supported formats: PDF, CSV (Max 10MB)
        </p>
      </div>
    </div>
  );
}
