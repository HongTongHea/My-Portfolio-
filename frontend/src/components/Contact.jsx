import React from "react";
import { FaGithub, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

export function Contact({ darkMode }) {
  return (
    <div
      id="contact"
      className={`py-24 ${darkMode ? "bg-gray-900/95" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text3xl font-bold  text-center md:text-left mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Contact Me
        </h2>
        <div className="text-center mb-16">
          <h2
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get in touch to start your next project
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
