import Image from "next/image";
import {Upload} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="mt-6 text-3xl sm:text-4xl text-black lg:text-5xl font-bold leading-tight">
            Understand Your{" "}
            <span className="text-green-500">M-Pesa Spending</span> in Seconds
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Transform your M-Pesa statements into actionable insights.
            Automatically categorize transactions and visualize spending patterns and make smarter financial decisions.
          </p>

          <div className="mt-8">
            <button className="flex items-center gap-2 bg-green-700 text-white text-[16px] font-bold px-6 py-3 rounded-lg hover:cursor-pointer">
            	<Upload size={17} color="white" />
              Upload Statement
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/chart.png"
              alt="chart"
              width={550}
              height={450}
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
        {/*<div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
          <p className="text-gray-500">Total Balance</p>

          <p className="text-3xl font-bold text-green-600 mt-1">KSh 97,870</p>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Transport</span>
              <span>KSh 1,480</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Expenses</span>
              <span className="text-red-500">-25,630</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
