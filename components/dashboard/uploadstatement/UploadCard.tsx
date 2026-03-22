import UploadBox from "./UploadBox";
import {Upload} from "lucide-react";

export default function UploadCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Upload M-Pesa Statement
        </h2>
        <p className="text-sm text-gray-500">
          Upload your M-Pesa statement in PDF or CSV format to automatically
          parse your transactions
        </p>
      </div>

      <UploadBox />

      <button className="w-full bg-green-800 hover:bg-green-600 hover:cursor-pointer text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
      	<Upload size={19} />
        Parse Statement
      </button>
    </div>
  );
}
