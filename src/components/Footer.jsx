import React from "react";
import { Monitor } from "lucide-react";

export function Footer({ darkMode }) {
  return (
    <footer
      className={`${
        darkMode ? "bg-white text-white" : "bg-gray-900 text-white"
      } py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span
              className={`text-2xl font-bold ${
                darkMode ? "text-gray-900" : "text-white"
              }`}
            >
              Portfolio
            </span>
          </div>
          <p
            className={`text-2xl font-bold ${
              darkMode ? "text-gray-900" : "text-white"
            }`}
          >
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
