import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Sidebar />

      <main className="md:ml-64 flex flex-col min-h-screen">

        <div className="p-4 border-b bg-white">
          <Header />
        </div>

        <div className="flex-1 p-4 lg:p-8 space-y-6">
          {children}
        </div>

      </main>

    </div>
  );
}
