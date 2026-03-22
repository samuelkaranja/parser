import {Upload} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready to Take Control of Your Finances?
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto">
          Join thousands of users who are already making smarter financial
          decisions with M-Pesa Insights
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-[#333] text-[16px] font-bold px-6 py-3 rounded-lg hover:cursor-pointer transition">
          <Upload size={17} color="#333" />
            Upload Your First Statement
          </button>
        </div>
      </div>
    </section>
  );
}
