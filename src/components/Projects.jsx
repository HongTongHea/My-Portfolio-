import React from "react";
import { Code2, Palette } from "lucide-react";
import { MdDesignServices } from "react-icons/md";

export function Projects({ darkMode }) {
  return (
    <div
      id="projects"
      className={`pt-8 ${darkMode ? "bg-gray-900/95" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text4xl font-bold text-left mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-700 to-gray-800"
                : "bg-gradient-to-br from-purple-50 to-indigo-50"
            }`}
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="text-white" size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Web Development
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Creating responsive, performant websites and applications using
              modern technologies and best practices.
            </p>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-700"
                : "bg-gradient-to-br from-indigo-50 to-purple-50"
            }`}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Palette className="text-white" size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Graphic Design
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Designing memorable brand identities, user interfaces, and visual
              experiences that connect with your audience.
            </p>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-700"
                : "bg-gradient-to-br from-indigo-50 to-purple-50"
            }`}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <MdDesignServices className="text-white" size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              UX/UI Design
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Crafting user-centered designs that enhance usability and improve
              the overall user experience across digital platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
