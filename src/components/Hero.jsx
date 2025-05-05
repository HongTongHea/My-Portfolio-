import React from "react";
import { ArrowRight } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";
import { FaGithub, FaFacebook, FaEnvelope, FaTelegram } from "react-icons/fa";

export function Hero({ darkMode }) {
  return (
    <div className="relative overflow-hidden" id="hero">
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } z-0`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        {/* Image Section - Now on top */}
        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-white-500 shadow-lg">
            <img
              src="src/assets/image/my-image.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
            {darkMode && (
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
            )}
          </div>
        </div>
        <h5
          className={`text-center mb-5 ${
            darkMode ? "text-white" : "text-gray-900"
          } text-1xl font-semibold`}
        >
          Hi, It's{" "}
          <span className="font-semibold text-indigo-600 ">Hong Tong Hea</span>
        </h5>

        {/* Text Content - Below image */}
        <div className="text-center">
          <h1
            className={`text-4xl sm:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            I'm a <TypingAnimation />
          </h1>
          <p
            className={`text-lg sm:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Junior web developer & Graphic, UX/UI designer creating beautiful,
            functional digital solutions that make user experiences more
            professional.
            <br />
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              Contact Me <ArrowRight size={20} />
            </button>
            <button
              className={`border-2 ${
                darkMode
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              } px-6 py-3 rounded-full font-medium transition-all`}
            >
              My Resume
            </button>
          </div>
          <div className="flex justify-center mt-8 mb-4">
            <div className="flex gap-6">
              <a
                href="https://github.com/HongTongHea"
                className={`flex items-center gap-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors`}
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.facebook.com/share/1Fghx7gEcY/"
                className={`flex items-center gap-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors`}
              >
                <FaFacebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="https://t.me/Tonghear"
                className={`flex items-center gap-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors`}
              >
                <FaTelegram size={24} />
                <span>Telegarm</span>
              </a>
              <a
                href="mailto:hongtonghea@gmail.com"
                className={`flex items-center gap-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors`}
              >
                <FaEnvelope size={24} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
