import React, { useState, useRef, useEffect } from "react";
import { Code2, Palette, X, Upload, ImagePlus } from "lucide-react";
import { MdDesignServices } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image1 from "../assets/image/image.png";
import Image2 from "../assets/image/image 2.png";
import Image3 from "../assets/image/imge3.png";

// ─────────────────────────────────────────────────────────────────────────────
// 👇 Replace these two values with your own from cloudinary.com
// ─────────────────────────────────────────────────────────────────────────────
const CLOUDINARY_CLOUD_NAME    = "dduugsjbq";     // e.g. "dxyz123abc"
const CLOUDINARY_UPLOAD_PRESET = "my-poster-portfolio";  // e.g. "portfolio_unsigned"
// ─────────────────────────────────────────────────────────────────────────────

const CLOUDINARY_UPLOAD_URL =
  `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const STORAGE_KEY = "portfolio_posters"; // localStorage key for metadata

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

// ── localStorage helpers ──────────────────────────────────────────────────────
const loadPosters = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const savePosters = (posters) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posters));
  } catch (e) {
    console.warn("localStorage error:", e);
  }
};
// ─────────────────────────────────────────────────────────────────────────────

export function Projects({ darkMode }) {
  const [selectedImage, setSelectedImage]       = useState(null);
  const [uploadedPosters, setUploadedPosters]   = useState([]);

  const [showUploadModal, setShowUploadModal]   = useState(false);
  const [formName, setFormName]                 = useState("");
  const [formCategory, setFormCategory]         = useState("");
  const [formImageFile, setFormImageFile]       = useState(null);
  const [formImagePreview, setFormImagePreview] = useState(null);
  const [formError, setFormError]               = useState("");
  const [uploading, setUploading]               = useState(false);
  const [uploadProgress, setUploadProgress]     = useState(0);

  const formFileRef = useRef(null);

  // ── Load poster metadata from localStorage on mount ──
  useEffect(() => {
    setUploadedPosters(loadPosters());
  }, []);

  const openModal  = (project) => setSelectedImage(project);
  const closeModal = () => setSelectedImage(null);

  const openUploadModal = () => {
    setFormName("");
    setFormCategory("");
    setFormImageFile(null);
    setFormImagePreview(null);
    setFormError("");
    setUploadProgress(0);
    setShowUploadModal(true);
  };

  const closeUploadModal = () => {
    if (uploading) return;
    setShowUploadModal(false);
  };

  const handleFormImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormImageFile(file);
    setFormError("");
    const reader = new FileReader();
    reader.onload = (ev) => setFormImagePreview(ev.target.result);
    reader.readAsDataURL(file);
    if (!formName) {
      setFormName(file.name.replace(/\.[^/.]+$/, ""));
    }
  };

  // ── Upload image to Cloudinary → save URL + metadata to localStorage ──
  const handleFormSubmit = async () => {
    if (!formImageFile) { setFormError("Please select an image."); return; }
    if (!formName.trim()) { setFormError("Please enter a poster name."); return; }

    setUploading(true);
    setFormError("");
    setUploadProgress(0);

    try {
      const fd = new FormData();
      fd.append("file",          formImageFile);
      fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      fd.append("folder",        "portfolio_posters");

      // XMLHttpRequest lets us track upload progress
      const imageUrl = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", CLOUDINARY_UPLOAD_URL);

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            setUploadProgress(Math.round((e.loaded / e.total) * 100));
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).secure_url);
          } else {
            reject(new Error("Cloudinary upload failed. Check your cloud name and upload preset."));
          }
        };

        xhr.onerror = () => reject(new Error("Network error during upload."));
        xhr.send(fd);
      });

      // Store only the URL + metadata (very small) in localStorage
      const newPoster = {
        id:         Date.now().toString(),
        title:      formName.trim(),
        category:   formCategory.trim() || "Uploaded Artwork",
        image_url:  imageUrl,
        created_at: new Date().toISOString(),
      };

      const updated = [newPoster, ...uploadedPosters];
      savePosters(updated);
      setUploadedPosters(updated);
      setShowUploadModal(false);

    } catch (err) {
      console.error(err);
      setFormError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // ── Remove poster metadata from localStorage ──
  const removeUploadedPoster = (e, id) => {
    e.stopPropagation();
    const updated = uploadedPosters.filter((p) => p.id !== id);
    savePosters(updated);
    setUploadedPosters(updated);
  };

  return (
    <section
      id="projects"
      className={`pt-8 ${darkMode ? "bg-gray-900/95" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Featured Projects ── */}
        <h2 className={`text-3xl font-bold text-center md:text-left mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Code2 className="text-white" size={24} />, color: "bg-indigo-600", title: "Web Development", desc: "Creating responsive, performant websites and applications using modern technologies and best practices." },
            { icon: <Palette className="text-white" size={24} />, color: "bg-purple-600", title: "Graphic Designer", desc: "Designing memorable brand identities, user interfaces, and visual experiences that connect with your audience." },
            { icon: <MdDesignServices className="text-white" size={24} />, color: "bg-purple-600", title: "UX/UI Design", desc: "Crafting user-centered designs that enhance usability and improve the overall user experience across digital platforms." },
          ].map(({ icon, color, title, desc }) => (
            <div key={title} className={`p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ${darkMode ? "bg-gradient-to-br from-gray-700 to-gray-800" : "bg-gradient-to-br from-purple-50 to-indigo-50"}`}>
              <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-6`}>{icon}</div>
              <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>{title}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Web Dev Projects ── */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-center md:text-left mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Web Development Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <div key={project.id} className={`group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a href={project.viewUrl} target="_blank" rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm font-semibold rounded-lg ${darkMode ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-indigo-700 hover:bg-indigo-100"}`}>
                    <FaExternalLinkAlt className="inline-block mr-2" size={16} color={darkMode ? "white" : "black"} style={{ verticalAlign: "middle" }} />
                    <span>View Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Graphic Design Artwork ── */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className={`text-3xl font-bold text-center md:text-left ${darkMode ? "text-white" : "text-gray-900"}`}>
              Graphic Design Artwork
            </h2>
            <button onClick={openUploadModal}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${darkMode ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}>
              <Upload size={16} />
              Upload Image
            </button>
          </div>

          {uploadedPosters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedPosters.map((project) => (
                <div key={project.id}
                  className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer aspect-square ${darkMode ? "bg-gray-700" : "bg-white"}`}
                  onClick={() => openModal(project)}>
                  <img src={project.image_url} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-gray-900/80 to-transparent" : "from-black/60 to-transparent"} flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{project.category}</p>
                    </div>
                  </div>
                  <button onClick={(e) => removeUploadedPoster(e, project.id)}
                    className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100" title="Remove poster">
                    <X className="text-white" size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div onClick={openUploadModal}
              className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-20 cursor-pointer transition-colors duration-200
                ${darkMode ? "border-gray-600 hover:border-indigo-500 text-gray-400" : "border-gray-300 hover:border-indigo-400 text-gray-400"}`}>
              <ImagePlus size={40} className="mb-3 opacity-50" />
              <p className="font-medium text-sm">No artwork yet — click to upload your first poster</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Upload Form Modal ── */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={closeUploadModal}>
          <div className={`relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}
            onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Upload Poster</h3>
              <button onClick={closeUploadModal} disabled={uploading} className="p-1.5 rounded-full hover:bg-gray-200/20 transition-colors disabled:opacity-50">
                <X size={20} className={darkMode ? "text-gray-300" : "text-gray-600"} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-5">

              {/* Image picker */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Poster Image <span className="text-red-500">*</span>
                </label>
                <div onClick={() => !uploading && formFileRef.current?.click()}
                  className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 border-dashed cursor-pointer flex items-center justify-center transition-colors duration-200
                    ${formImagePreview ? "border-transparent" : darkMode ? "border-gray-600 hover:border-indigo-500 bg-gray-700/50" : "border-gray-300 hover:border-indigo-400 bg-gray-50"}
                    ${uploading ? "cursor-not-allowed" : ""}`}>
                  {formImagePreview ? (
                    <>
                      <img src={formImagePreview} alt="Preview" className="w-full h-full object-cover" />
                      {/* Progress overlay */}
                      {uploading && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 px-8">
                          <div className="w-full bg-gray-600 rounded-full h-2.5">
                            <div className="bg-indigo-400 h-2.5 rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
                          </div>
                          <p className="text-white text-sm font-semibold">Uploading to Cloudinary… {uploadProgress}%</p>
                        </div>
                      )}
                      {!uploading && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                          <p className="text-white text-sm font-semibold">Click to change</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2 p-6 text-center">
                      <ImagePlus size={36} className={darkMode ? "text-gray-500" : "text-gray-400"} />
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Click to select image</p>
                      <p className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>PNG, JPG, WEBP supported</p>
                    </div>
                  )}
                </div>
                <input ref={formFileRef} type="file" accept="image/*" className="hidden" onChange={handleFormImageChange} disabled={uploading} />
              </div>

              {/* Poster Name */}
              <div>
                <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Poster Name <span className="text-red-500">*</span>
                </label>
                <input type="text" value={formName}
                  onChange={(e) => { setFormName(e.target.value); setFormError(""); }}
                  placeholder="Enter poster name" disabled={uploading}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors duration-200 disabled:opacity-60
                    ${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500"}`} />
              </div>

              {/* Category */}
              <div>
                <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Category / Description
                </label>
                <input type="text" value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  placeholder="e.g. Brand Identity, Poster Design (optional)" disabled={uploading}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-colors duration-200 disabled:opacity-60
                    ${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500"}`} />
              </div>

              {formError && <p className="text-red-500 text-sm font-medium -mt-2">{formError}</p>}
            </div>

            {/* Footer */}
            <div className="flex gap-3 px-6 pb-6">
              <button onClick={closeUploadModal} disabled={uploading}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors duration-200 disabled:opacity-50
                  ${darkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}>
                Cancel
              </button>
              <button onClick={handleFormSubmit} disabled={uploading}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {uploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {uploadProgress}%
                  </>
                ) : "Upload Poster"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── View Modal ── */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={closeModal}>
          <div className="relative rounded-lg overflow-hidden shadow-2xl"
            style={{ width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
            onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all">
              <X className="text-white" size={22} />
            </button>
            <img src={selectedImage.image_url} alt={selectedImage.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <h3 className="text-white text-xl font-bold leading-tight">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm mt-1 line-clamp-2">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}