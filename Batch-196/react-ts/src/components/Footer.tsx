import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">ShopName</h3>
            <p className="text-sm text-slate-300">
              Premium products. Fast shipping. Easy returns.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-slate-800 rounded hover:bg-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.92c-.64.28-1.33.47-2.05.56a3.6 3.6 0 0 0 1.58-1.99 7.2 7.2 0 0 1-2.28.87 3.6 3.6 0 0 0-6.14 3.28A10.24 10.24 0 0 1 3.16 4.6a3.6 3.6 0 0 0 1.12 4.8 3.53 3.53 0 0 1-1.63-.45v.05a3.6 3.6 0 0 0 2.88 3.53 3.6 3.6 0 0 1-1.62.06 3.6 3.6 0 0 0 3.36 2.5A7.22 7.22 0 0 1 2 19.54a10.2 10.2 0 0 0 5.52 1.62c6.62 0 10.24-5.48 10.24-10.24v-.47A7.3 7.3 0 0 0 22 5.92z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-slate-800 rounded hover:bg-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.73l-.44 2.9h-2.3v7.03C18.34 21.24 22 17.09 22 12.07z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-slate-800 rounded hover:bg-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18.5 6.1a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Shop</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} ShopName. All rights reserved.
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="h-6 w-10 bg-white/10 rounded-sm flex items-center justify-center text-[10px] text-slate-200">
                VISA
              </div>
              <div className="h-6 w-10 bg-white/10 rounded-sm flex items-center justify-center text-[10px] text-slate-200">
                MC
              </div>
              <div className="h-6 w-10 bg-white/10 rounded-sm flex items-center justify-center text-[10px] text-slate-200">
                PP
              </div>
            </div>

            <div className="text-sm text-slate-400">
              Made with ♥ · Free shipping over $75
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
