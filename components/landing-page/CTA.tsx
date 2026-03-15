export default function CTA() {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Take Control of Your Finances?
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto">
          Join thousands of users who are already making smarter financial
          decisions with M-Pesa Insights
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:cursor-pointer transition">
            Upload Your First Statement
          </button>

          {/* <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Try Demo
          </button> */}
        </div>
      </div>
    </section>
  );
}
