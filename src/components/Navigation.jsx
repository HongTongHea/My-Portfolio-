import React from "react";
import { Monitor, Sun, Moon, Menu, X } from "lucide-react";
import logo1 from "../assets/image/Portfolio1.png";   // darkMode false
import logo2 from "../assets/image/Portfolio.png";  // darkMode true

export function Navigation({
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-900/95" : "bg-white/95"
      } backdrop-blur-sm shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          <div className="absolute left-0 flex items-center gap-2">
            <img
              src={darkMode ? logo2 : logo1}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("hero");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              HOME
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              ABOUT ME
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              PROJECTS
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              HIRE ME!
            </a>
          </div>

          {/* Dark Mode and Mobile Menu Buttons */}
          <div className="absolute right-0 flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors`}
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors`}
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={darkMode ? "text-white" : "text-gray-900"}
                />
              ) : (
                <Menu
                  size={24}
                  className={darkMode ? "text-white" : "text-gray-900"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden py-4 backdrop-blur-md ${
            darkMode ? "bg-gray-900/90" : "bg-white/90"
          }`}
        >
          <div className="flex flex-col gap-4 font-medium">
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("hero");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              HOME
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              ABOUT ME
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              PROJECTS
            </a>
            <a
              role="button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              HIRE ME!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
