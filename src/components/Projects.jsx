import React, { useState } from "react";
import { Code2, Palette, X } from "lucide-react";
import { MdDesignServices } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import poster1 from "../assets/image/King Sihamoni's Birthday 1.jpg";
import poster2 from "../assets/image/King Birthright 1.jpg";
import poster3 from "../assets/image/Queen Mother's Birthday 2.jpg";
import poster4 from "../assets/image/Queen Mother's Birthday Hotel Link.jpg";
import poster5 from "../assets/image/International Labor Day.jpg";
import poster6 from "../assets/image/វិសាខបូជា (2).jpg";
import poster7 from "../assets/image/Royal Ploughing Ceremony.jpg";
import poster8 from "../assets/image/E-Menu Poster.jpg";
import poster9 from "../assets/image/Pchum Ben Day 1.jpg";
import Image1 from "../assets/image/image.png";
import Image2 from "../assets/image/image 2.png";
import Image3 from "../assets/image/imge3.png";

const webProjects = [
  {
    id: 1,
    title: "TOUR & TRAVEl",
    description:
      "A travel agency website showcasing various tours and travel packages.",
    image: Image1,
    viewUrl: "https://tour-travel-kohl.vercel.app/",
  },
  {
    id: 2,
    title: "CAR DEALER WEBSITE",
    description:
      "A car dealer website featuring a wide range of vehicles for sale.",
    image: Image2,
    viewUrl: "https://car-dealer-website-ten.vercel.app/",
  },
  {
    id: 3,
    title: "TUTORIAL WEBSITE",
    description:
      "A comprehensive tutorial website offering courses on various subjects.",
    image: Image3,
    viewUrl: "https://website-tutor-rho.vercel.app/",
  },
];

const posterProjects = [
  {
    id: 1,
    image: poster1,
    title: "King Sihamoni's Birthday",
    category:
      "ព្រះ​រាជ​ពិធី​បុណ្យ​ចម្រើន​ព្រះ​ជន្ម ព្រះ​ករុណា​ព្រះ​បាទ​សម្តេច​ព្រះ​បរម​នាថ នរោត្តម សីហមុនី ព្រះ​មហាក្សត្រ​នៃ​ព្រះរាជាណាចក្រ​កម្ពុជា",
  },
  {
    id: 2,
    image: poster2,
    title: "King Sihamoni's Birthday",
    category:
      "ព្រះ​រាជ​ពិធី​បុណ្យ​ចម្រើន​ព្រះ​ជន្ម ព្រះ​ករុណា​ព្រះ​បាទ​សម្តេច​ព្រះ​បរម​នាថ នរោត្តម សីហមុនី ព្រះ​មហាក្សត្រ​នៃ​ព្រះរាជាណាចក្រ​កម្ពុជា",
  },
  {
    id: 3,
    image: poster3,
    title: "Queen Mother's Birthday",
    category:
      "ព្រះ​រាជ​ពិធី​បុណ្យ​ចម្រើន​ព្រះ​ជន្ម សម្តេច​ព្រះ​មហាក្សត្រី នរោត្តម មុនិនាថ សីហនុ ព្រះ​វររាជ​មាតា​ជាតិ​ខ្មែរ",
  },

  {
    id: 4,
    image: poster4,
    title: "Queen Mother's Birthday",
    category:
      "ព្រះ​រាជ​ពិធី​បុណ្យ​ចម្រើន​ព្រះ​ជន្ម សម្តេច​ព្រះ​មហាក្សត្រី នរោត្តម មុនិនាថ សីហនុ ព្រះ​វររាជ​មាតា​ជាតិ​ខ្មែរ",
  },
  {
    id: 5,
    image: poster5,
    title: "International Labor Day",
    category: "ទិវា​ពលកម្ម​អន្តរជាតិ ខួបលើកទី១៣៩",
  },

  {
    id: 6,
    image: poster6,
    title: "Vesak Bochea",
    category: "ពិធី​បុណ្យ​វិសាខ​បូជា ​នៃ​បុណ្យព្រះ​រាជាណាចក្រ​កម្ពុជា",
  },

  {
    id: 7,
    image: poster7,
    title: "Royal Ploughing Ceremony",
    category: "ព្រះ​រាជ​ពិធី​ច្រត់​ព្រះ​នង្គ័ល នៃព្រះ​រាជាណាចក្រ​កម្ពុជា",
  },
  {
    id: 8,
    image: poster8,
    title: "E-Menu Poster",
    category: "E-Menu Poster for Hotel",
  },
  {
    id: 9,
    image: poster9,
    title: "Pchom Ben Day",
    category: "ពិធី​បុណ្យ​ភ្ជុំ​បិណ្ឌប្រពៃណីជាតិខ្មែរ",
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
          className={`text-3xl sm:text-3xl font-bold text-center md:text-left mb-10 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Web Development Card */}
          <div
            className={`p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-700 to-gray-800"
                : "bg-gradient-to-br from-purple-50 to-indigo-50"
            }`}
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="text-white" size={24} />
            </div>
            <h3
              className={`text-3xl sm:text-3xl font-bold mb-4 ${
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
            className={`p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-700"
                : "bg-gradient-to-br from-indigo-50 to-purple-50"
            }`}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Palette className="text-white" size={24} />
            </div>
            <h3
              className={`text-3xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Graphic Designer
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Designing memorable brand identities, user interfaces, and visual
              experiences that connect with your audience.
            </p>
          </div>

          {/* UX/UI Design Card */}
          <div
            className={`p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-700"
                : "bg-gradient-to-br from-indigo-50 to-purple-50"
            }`}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <MdDesignServices className="text-white" size={24} />
            </div>
            <h3
              className={`text-3xl sm:text-3xl font-bold mb-4 ${
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
            className={`text-3xl sm:text-3xl font-bold text-center md:text-left mb-10 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Web Development Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <div
                key={project.id}
                className={`group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />

                {/* Project Content */}
                <div className="p-5">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Hover Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm font-semibold rounded-lg me ${
                      darkMode
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-white text-indigo-700 hover:bg-indigo-100"
                    }`}
                  >
                    <FaExternalLinkAlt
                      className="inline-block mr-2"
                      size={16}
                      color={darkMode ? "white" : "black"}
                      style={{ verticalAlign: "middle" }}
                    />
                    <span
                      className={`inline-block${
                        darkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      View Demo
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphic Projects Section */}
        <div className="mb-16">
          <h2
            className={`text-3xl sm:text-3xl font-bold text-center md:text-left mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Graphic Design Artwork
          </h2>

          {posterProjects.length > 0 ? (
            <div
              className={`rounded-xl ${
                darkMode ? "" : ""
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
                className="w-full object-contain object-cover max-h-[80vh]"
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
