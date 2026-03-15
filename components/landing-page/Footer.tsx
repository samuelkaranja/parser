export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded">
              M
            </div>
            M-Pesa Insights
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Transform your M-Pesa statements into powerful financial insights.
            Make smarter money decisions with AI-powered analytics.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="bg-slate-800 w-9 h-9 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">
              X
            </div>

            <div className="bg-slate-800 w-9 h-9 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">
              in
            </div>

            <div className="bg-slate-800 w-9 h-9 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">
              f
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Roadmap</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 M-Pesa Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
