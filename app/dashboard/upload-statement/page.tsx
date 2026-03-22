import UploadCard from "@/components/dashboard/uploadstatement/UploadCard";
import Instructions from "@/components/dashboard/uploadstatement/Instructions";

export default function UploadStatementPage() {
  return (
    
      <div className="flex-1 flex flex-col">
        <main className="space-y-6">
          <UploadCard />
          <Instructions />
        </main>
      </div>
    
  );
}
