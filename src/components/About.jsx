import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export function About({ darkMode }) {
  return (
    <div className="relative overflow-hidden" id="about">
      {/* Background overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } z-0`}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* About Me Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1
              className={`text-3xl sm:text3xl font-bold  ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-6`}
            >
              About Me
            </h1>

            <p
              className={`text-lg sm:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } mb-6`}
            >
              Passionate junior web developer and designer with expertise in
              modern web technologies. I specialize in creating responsive,
              user-friendly interfaces with clean, efficient code.
            </p>

            <p
              className={`text-lg sm:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } mb-8`}
            >
              When I'm not coding, I explore new design trends, contribute to
              open-source projects, or recharge by hiking in nature.
            </p>

            {/* Education & Training Timeline */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <h2
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Education & Training
                </h2>
              </div>

              <div className="space-y-4 mt-6 text-left">
                {[
                  {
                    year: "2022 (Diploma)",
                    detail: "Graduated from Wat Svay High School, Siem Reap.",
                    color: "bg-blue-500",
                  },
                  {
                    year: "2023",
                    detail: "Completed Computer Training Course at Baktouk IT.",
                    color: "bg-purple-500",
                  },
                  {
                    year: "2024",
                    detail:
                      "Graduated from Build Bright Short Course (Junior Web Developer).",
                    color: "bg-pink-500",
                  },
                  {
                    year: "2025",
                    detail: "3-Month Training at EOT (Graphic Design).",
                    color: "bg-green-500",
                  },
                  {
                    year: "2022–Present",
                    detail:
                      "Third-year student at Build Bright University, pursuing a Bachelor's degree in IT.",
                    color: "bg-amber-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative pl-8 ${
                      index < 4 ? "pb-5" : ""
                    } border-l border-gray-200 dark:border-gray-700`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-3 h-3 -ml-1.5 rounded-full ${item.color}`}
                    ></div>
                    <p
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Timeline */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <h2
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Work Experience
                </h2>
              </div>

              <div className="space-y-4 mt-6 text-left">
                {[
                  {
                    year: "2025 (Graphic Designer)",
                    detail: "6-Month Work as a Graphic Designer at EOT.",
                    color: "bg-teal-500",
                    responsibilities: [
                      "Designed Poster Products for Company.",
                      "Designed Poster Artwork for Social Media.",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative pl-8 ${
                      index < 2 ? "pb-5" : ""
                    } border-l border-gray-200 dark:border-gray-700`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-3 h-3 -ml-1.5 rounded-full ${item.color}`}
                    ></div>
                    <p
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.detail}
                    </p>
                    <ul className="mt-2 ml-4 list-disc">
                      {item.responsibilities.map((responsibility, i) => (
                        <li
                          key={i}
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
