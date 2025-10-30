"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navigation({ navigationData }: { navigationData: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(navigationData);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-50 py-6 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href={navigationData?.['home_url'] || "/"} className="text-2xl font-bold text-slate-900">
            {navigationData?.['site_title'] || "First American Land Allotment"}
          </Link>
          
          <div className="hidden lg:flex space-x-6">
            {navigationData?.['main_menu']?.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-slate-600 text-xl hover:text-accent transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-2">
            <div className="flex flex-col space-y-4">
              {navigationData?.['main_menu']?.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-slate-600 text-xl hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;