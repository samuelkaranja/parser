import { Bell, Upload, User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black">Financial Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Overview of your M-Pesa transactions
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-green-600 flex items-center text-white px-6 py-2 rounded-lg text-[16px] cursor-pointer">
          <Upload size={18} className="mr-3" />
          Upload Statement
        </button>

        <Bell size={20} className="cursor-pointer" color="black" />

        <User size={20} className="cursor-pointer" color="black" />
      </div>
    </div>
  );
}
