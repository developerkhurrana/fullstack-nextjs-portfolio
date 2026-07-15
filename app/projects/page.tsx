"use client";

import { GoToTop } from "@/components/ui/go-to-top";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { getAllImages } from "@/lib/cloudinary";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  url: string;
  public_id: string;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      {children}
    </div>
  );
}

export default function Projects() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    async function loadImages() {
      try {
        setError(null);
        const imageData = await getAllImages();
        setImages(imageData.map((img: ImageData) => img.url));
      } catch (error) {
        console.error("Error loading images:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load images"
        );
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  const openModal = useCallback((idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

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
      <Shell>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-amber-400" />
            Loading work…
          </div>
        </div>
      </Shell>
    );
  }

  if (error) {
    return (
      <Shell>
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-md text-center">
            <p className="text-lg text-white">Couldn&apos;t load the gallery</p>
            <p className="mt-2 text-sm text-neutral-500">{error}</p>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Selected work"
          title="Design & visual work"
          description="A gallery of design work, brand pieces, and interface explorations. Click any image to view it full-size."
        />

        {images.length === 0 ? (
          <p className="mt-16 text-center text-neutral-500">No images found.</p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((url, idx) => (
              <button
                key={idx}
                className="group relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                onClick={() => openModal(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={url}
                  alt={`Project image ${idx + 1}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        )}
      </main>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={closeModal}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={showPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={showNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            className="relative mx-4 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full">
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
      <SiteFooter />
    </Shell>
  );
}
