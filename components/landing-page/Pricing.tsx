export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold">Free</h3>

            <p className="text-3xl font-bold mt-4">KSh 0</p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Upload up to 3 statements</li>
              <li>Basic analytics</li>
              <li>Automatic categorization</li>
            </ul>

            <button className="mt-6 border w-full py-3 rounded-lg">
              Get Started
            </button>
          </div>

          <div className="border-2 border-green-500 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold">Pro</h3>

            <p className="text-3xl font-bold mt-4">KSh 999</p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Unlimited statements</li>
              <li>Advanced analytics</li>
              <li>Export reports</li>
              <li>API access</li>
            </ul>

            <button className="mt-6 bg-green-500 text-white w-full py-3 rounded-lg">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
