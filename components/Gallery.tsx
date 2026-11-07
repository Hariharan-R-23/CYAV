import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

interface GalleryItem {
  url: string;
  fallbackUrl?: string;
  title: string;
  caption?: string;
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);
  const [activePreviewImage, setActivePreviewImage] = useState<string | null>(null);

  const images: GalleryItem[] = GALLERY_IMAGES;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 1.5s (1500ms) when modal is not open and user is not hovering
  useEffect(() => {
    if (isGridModalOpen || activePreviewImage || isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length, isGridModalOpen, activePreviewImage, isPaused]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsGridModalOpen(false);
        setActivePreviewImage(null);
      } else if (e.key === 'ArrowRight' && !isGridModalOpen) {
        nextSlide();
      } else if (e.key === 'ArrowLeft' && !isGridModalOpen) {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGridModalOpen]);

  const currentImage = images[currentIndex];

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
            Assembly Moments & Archives
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            SEASON V <span className="text-red-600 italic">GALLERY</span>
          </h2>
          <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">
            Visual highlights from Season V Phase I at IITM Research Park
          </p>
        </div>

        {/* View All Photos Button */}
        <button
          onClick={() => setIsGridModalOpen(true)}
          className="self-start sm:self-auto px-5 py-2.5 bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-600 font-black text-xs uppercase tracking-widest smooth-transition flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
        >
          <i className="fa-solid fa-table-cells text-xs"></i>
          <span>View All Photos ({images.length})</span>
        </button>
      </div>

      {/* Carousel Showcase Card */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 relative group"
      >
        
        {/* Main Display Area */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[560px] bg-black overflow-hidden flex items-center justify-center">
          <img
            key={currentIndex}
            src={currentImage.url}
            onError={(e) => {
              const target = e.currentTarget;
              if (currentImage.fallbackUrl && target.src !== currentImage.fallbackUrl) {
                target.src = currentImage.fallbackUrl;
              }
            }}
            alt={currentImage.title}
            className="w-full h-full object-cover object-center transition-all duration-700 animate-in fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none"></div>

          {/* Left Arrow (only if multiple images) */}
          {images.length > 1 && (
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-13 sm:w-13 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 hover:border-red-600 backdrop-blur-md flex items-center justify-center smooth-transition z-20 cursor-pointer shadow-xl active:scale-90"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
          )}

          {/* Right Arrow (only if multiple images) */}
          {images.length > 1 && (
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-13 sm:w-13 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 hover:border-red-600 backdrop-blur-md flex items-center justify-center smooth-transition z-20 cursor-pointer shadow-xl active:scale-90"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          )}

          {/* Bottom Title & Counter Ribbon */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 z-10 pointer-events-none">
            <div className="max-w-xl">
              <span className="px-2.5 py-0.5 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-sm mb-1.5 inline-block">
                {images.length > 1 ? `Photo ${currentIndex + 1} of ${images.length}` : 'Featured Photo'}
              </span>
              <h3 className="text-white text-base sm:text-2xl font-black uppercase tracking-wide drop-shadow-md">
                {currentImage.title}
              </h3>
              <p className="text-zinc-300 text-xs font-medium drop-shadow-sm mt-0.5 line-clamp-1">
                {currentImage.caption}
              </p>
            </div>

            <button
              onClick={() => setActivePreviewImage(currentImage.url)}
              className="pointer-events-auto px-4 py-2 bg-black/75 hover:bg-white hover:text-black text-white text-[10px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md rounded-sm smooth-transition flex items-center gap-1.5 cursor-pointer"
            >
              <i className="fa-solid fa-expand text-xs"></i>
              <span>Full View</span>
            </button>
          </div>
        </div>

        {/* Carousel Thumbnail Navigation Bar (only when multiple images) */}
        {images.length > 1 && (
          <div className="p-3 sm:p-4 bg-zinc-950 border-t border-zinc-900 flex items-center gap-3 overflow-x-auto">
            {images.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-14 sm:h-16 w-24 sm:w-28 rounded-md overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                  currentIndex === idx
                    ? 'border-red-600 scale-105 shadow-md shadow-red-950/40'
                    : 'border-zinc-800 opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={item.url}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                      target.src = item.fallbackUrl;
                    }
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Grid Modal: "View All Photos at Once" */}
      {isGridModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 overflow-y-auto animate-in fade-in duration-300">
          
          {/* Top Bar of Modal */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800 max-w-6xl w-full mx-auto">
            <div>
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] block">
                CYA Season V Photo Archive
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mt-0.5">
                All Gallery Photos ({images.length})
              </h3>
            </div>
            
            <button
              onClick={() => setIsGridModalOpen(false)}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-zinc-900 hover:bg-red-600 text-white flex items-center justify-center smooth-transition border border-zinc-800 cursor-pointer"
              aria-label="Close Gallery Grid"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Grid of All Photos */}
          <div className="max-w-6xl w-full mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsGridModalOpen(false);
                }}
                className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden group hover:border-red-600 transition-all cursor-pointer shadow-lg hover:shadow-red-950/30 flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={item.url}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                        target.src = item.fallbackUrl;
                      }
                    }}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase rounded border border-white/10">
                      #{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900/40">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Full Preview Lightbox */}
      {activePreviewImage && (
        <div
          onClick={() => setActivePreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setActivePreviewImage(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-zinc-900 hover:bg-red-600 text-white flex items-center justify-center border border-zinc-700 cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
          <img
            src={activePreviewImage}
            alt="Full Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

    </div>
  );
};

export default Gallery;
