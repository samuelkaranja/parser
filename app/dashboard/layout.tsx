import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="p-4 lg:p-8 border-b bg-white">
          <Header />
        </div>

        <div className="flex-1 p-4 lg:p-8 space-y-6">{children}</div>
      </main>
    </div>
  );
}
