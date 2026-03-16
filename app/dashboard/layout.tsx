import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="md:ml-64 flex flex-col min-h-screen">
        <div className="flex-1 p-4 lg:px-4 lg:py-2 space-y-6">{children}</div>
      </main>
    </div>
  );
}
