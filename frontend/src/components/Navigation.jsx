import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function Navigation({
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav
      className={`px-6 md:px-12 lg:px-24 xl:px-40 py-6 flex items-center justify-between relative sticky top-0 z-50 ${darkMode ? "bg-gray-900" : "bg-white"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <span
          className={`font-bold text-2xl ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex items-center rounded-full px-2 py-2 gap-2 ${darkMode
          ? "bg-gray-800 border border-gray-700"
          : "bg-zinc-50 border border-zinc-200"
          }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`relative px-4 py-0 text-sm font-medium group ${darkMode
            ? "text-gray-300 hover:text-white"
            : "text-zinc-500 hover:text-zinc-900"
            }`}
        >
          Home
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-3/4 ${darkMode ? "bg-white" : "bg-indigo-600"
              }`}
          />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`relative px-4 py-0 text-sm font-medium group ${darkMode
            ? "text-gray-300 hover:text-white"
            : "text-zinc-500 hover:text-zinc-900"
            }`}
        >
          About
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-3/4 ${darkMode ? "bg-white" : "bg-indigo-600"
              }`}
          />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`relative px-4 py-0 text-sm font-medium group ${darkMode
            ? "text-gray-300 hover:text-white"
            : "text-zinc-500 hover:text-zinc-900"
            }`}
        >
          Projects
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-3/4 ${darkMode ? "bg-white" : "bg-indigo-600"
              }`}
          />
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`relative px-4 py-0 text-sm font-medium group ${darkMode
            ? "text-gray-300 hover:text-white"
            : "text-zinc-500 hover:text-zinc-900"
            }`}
        >
          Contact Me
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-3/4 ${darkMode ? "bg-white" : "bg-indigo-600"
              }`}
          />
        </a>
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-900"
            }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Hire Me Button */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:opacity-90 text-sm font-medium pl-5 pr-1 py-1 rounded-full"
        >
          Hire Me

          <span className="size-7 rounded-full bg-white flex items-center justify-center">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M.6 4.602h10m-4-4 4 4-4 4"
                stroke="#4F46E5"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span
          className={`block w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"
            } transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`block w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 ${darkMode ? "bg-white" : "bg-black"
            } transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col p-5 gap-2 md:hidden z-50 ${darkMode
            ? "bg-gray-900 border-t border-gray-700"
            : "bg-white border-t border-zinc-200"
            }`}
        >
          <a
            href="#hero"
            className={`px-4 py-2 rounded-lg ${darkMode
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-zinc-50"
              }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`px-4 py-2 rounded-lg ${darkMode
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-zinc-50"
              }`}
          >
            About
          </a>

          <a
            href="#projects"
            className={`px-4 py-2 rounded-lg ${darkMode
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-zinc-50"
              }`}
          >
            Projects
          </a>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2.5 bg-gradient-to-l from-indigo-600 to-purple-500 text-white hover:opacity-90 text-sm font-medium pl-5 pr-2 py-2 rounded-full w-40 "
          >
            Contact Me

            <span className="size-7 rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={16} className="text-indigo-600" />
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
