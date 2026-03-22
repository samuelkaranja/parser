"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export default function UploadBox() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ["application/pdf", "text/csv"];

  const handleFile = (selectedFile: File) => {
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      alert("Only PDF and CSV files are allowed");
      return;
    }

    if (selectedFile.size > MAX_SIZE) {
      alert("File size must be less than 10MB");
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition cursor-pointer ${
          dragging ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);

          const droppedFile = e.dataTransfer.files[0];
          if (droppedFile) handleFile(droppedFile);
        }}
      >
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          accept=".pdf,.csv"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) handleFile(selectedFile);
          }}
        />

        <div className="flex flex-col items-center gap-3">
          <UploadCloud className="text-gray-400" size={40} />

          <p className="font-medium text-gray-700">
            {file ? file.name : "Drop your M-Pesa statement here"}
          </p>

          {!file && (
            <p className="text-sm text-gray-500">
              or{" "}
              <span className="text-green-600 underline">
                click to browse files
              </span>
            </p>
          )}

          <p className="text-xs text-gray-400">
            Supported formats: PDF, CSV (Max 10MB)
          </p>
        </div>
      </div>

      {/* File Preview */}
      {file && (
        <div className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2">
          <div className="text-sm text-gray-700 truncate">
            {file.name}
          </div>

          <button
            onClick={() => setFile(null)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
