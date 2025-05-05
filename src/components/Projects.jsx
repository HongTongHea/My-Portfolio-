import React, { useState } from "react";
import { Code2, Palette, X } from "lucide-react";
import { MdDesignServices } from "react-icons/md";
import poster1 from "../assets/image/King Sihamoni's Birthday 1.jpg";
import poster2 from "../assets/image/King Birthright 1.jpg";
import poster3 from "../assets/image/Vesak Bochea.jpg";
import poster4 from "../assets/image/Royal Ploughing Ceremony.jpg";
import poster5 from "../assets/image/International Labor Day.jpg";
import poster6 from "../assets/image/វិសាខបូជា (2).jpg";
const posterProjects = [
  {
    id: 1,
    image: poster1,
    title: "King Sihamoni's Birthday",
    category: "Holiday Poster",
  },
  {
    id: 2,
    image: poster2,
    title: "King Sihamoni's Birthday",
    category: "Holiday Poster",
  },
  {
    id: 3,
    image: poster3,
    title: "Vesak Bochea",
    category: "Holiday Poster",
  },
  {
    id: 4,
    image: poster4,
    title: "Royal Ploughing Ceremony",
    category: "Holiday Poster",
  },
  {
    id: 5,
    image: poster5,
    title: "International Labor Day",
    category: "Holiday Poster",
  },

  {
    id: 6,
    image: poster6,
    title: "Vesak Bochea",
    category: "Holiday Poster",
  },
  // Add more projects here as needed
];

export function Projects({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the selected image
  const openModal = (project) => {
    setSelectedImage(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="projects"
      className={`pt-8 ${darkMode ? "bg-gray-900/95" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects Section */}
        <h2
          className={`text-4xl sm:text-4xl font-bold text-center md:text-left mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Web Development Card */}
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

          {/* Graphic Design Card */}
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

          {/* UX/UI Design Card */}
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

        {/* Web Dev Projects Section */}
        <div className="mb-16">
          <h2
            className={`text-4xl sm:text-4xl font-bold text-center md:text-left mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Web Dev Projects
          </h2>
          <p
            className={`text-2xl text-center mt-10 mb-10 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Coming Soon - Exciting projects in development!
          </p>
        </div>

        {/* Graphic Projects Section */}
        <div className="mb-16">
          <h2
            className={`text-4xl sm:text-4xl font-bold text-center md:text-left mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Graphic Projects
          </h2>

          {posterProjects.length > 0 ? (
            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posterProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    } cursor-pointer`}
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        darkMode
                          ? "from-gray-900/80 to-transparent"
                          : "from-black/60 to-transparent"
                      } flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <div>
                        <h3
                          className={`text-lg font-bold ${
                            darkMode ? "text-white" : "text-white"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-200"
                          }`}
                        >
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <div className="p-3">
                      <p
                        className={`text-sm truncate ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p
              className={`text-center py-10 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              No graphic projects to display yet.
            </p>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div
            className={`relative max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Image container */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={`${selectedImage.title} - ${selectedImage.category}`}
                className="w-full object-contain max-h-[80vh]"
              />
            </div>

            {/* Image details */}
            <div className={`p-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
