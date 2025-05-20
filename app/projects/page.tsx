"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { GoToTop } from "@/components/ui/go-to-top";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { getAllImages } from "@/lib/cloudinary";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

interface ImageData {
  url: string;
  public_id: string;
}

export default function Projects() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    async function loadImages() {
      try {
        setError(null);
        setErrorDetails(null);
        const imageData = await getAllImages();
        setImages(imageData.map((img: ImageData) => img.url));
      } catch (error) {
        console.error("Error loading images:", error);
        if (error instanceof Error) {
          setError(error.message);
          setErrorDetails(error.stack || null);
        } else {
          setError("Failed to load images");
        }
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  // Open modal with selected image
  const openModal = useCallback((idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // Navigate left/right
  const showPrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );
  const showNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, closeModal, showPrev, showNext]);

  if (loading) {
    return (
      <main className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Loading images...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl text-center max-w-2xl px-4">
          <p className="mb-4">Error loading images</p>
          <p className="text-red-400 text-sm mb-2">{error}</p>
          {errorDetails && (
            <p className="text-gray-400 text-xs whitespace-pre-wrap font-mono">
              {errorDetails}
            </p>
          )}
        </div>
      </main>
    );
  }

  if (images.length === 0) {
    return (
      <main className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">No images found</div>
      </main>
    );
  }

  return (
    <main className="bg-black relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto">
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <NavbarLogo />
              <div className="flex gap-6 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className={
                      "rounded-full transition-colors font-medium px-4 py-2 border " +
                      (item.link === pathname
                        ? "text-orange-400 border-orange-400 "
                        : "text-neutral-300 border-orange-400/0 hover:text-orange-400 hover:border-orange-400")
                    }
                  >
                    {item.name}
                  </a>
                ))}
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="https://drive.google.com/file/d/1qCLUSJ84Kp_oRuaNI51JJy8FD7pO3Unl/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 px-4 flex items-center"
                  aria-label="Download Resume"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </HoverBorderGradient>
              </div>
            </NavBody>
            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item) => (
                  <a
                    key={`mobile-link-${item.name}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      "rounded-full relative block px-4 py-2 font-medium border " +
                      (item.link === pathname
                        ? "text-orange-400 border-orange-400 "
                        : "text-neutral-300 dark:text-neutral-300 border-orange-400/0 hover:text-orange-400 hover:border-orange-400")
                    }
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="a"
                    href="https://drive.google.com/file/d/1qCLUSJ84Kp_oRuaNI51JJy8FD7pO3Unl/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white w-full text-center p-2 px-4 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Download Resume"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                  </HoverBorderGradient>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      </div>
      {/* Custom Responsive Image Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-12 pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((url, idx) => (
              <button
                key={idx}
                className="w-full h-80 relative rounded-lg overflow-hidden bg-neutral-900 focus:outline-none"
                onClick={() => openModal(idx)}
                tabIndex={0}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={url}
                  alt={`Project image ${idx + 1}`}
                  fill
                  className="object-cover object-center rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Image View Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full mx-4 rounded-lg overflow-hidden shadow-2xl bg-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {/* Right Arrow */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
              onClick={showNext}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            {/* Large Image */}
            <div className="w-full h-[60vw] max-h-[80vh] relative bg-black">
              <Image
                src={images[currentIdx]}
                alt={`Large project image ${currentIdx + 1}`}
                fill
                className="object-contain object-center"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
      <GoToTop />
    </main>
  );
}
