"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const hasImages = images && images.length > 0

  const current = useMemo(() => {
    return images[index]
  }, [images, index])

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  function close() {
    setOpen(false)
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!hasImages) return null

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openAt(i)}
            className="group text-left"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {img.caption && (
              <p className="mt-2 text-xs text-muted-foreground">{img.caption}</p>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {index + 1} / {images.length}
                </p>

                <button
                  type="button"
                  onClick={close}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                  aria-label="Close gallery"
                >
                  Close
                </button>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-muted">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Caption + controls */}
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {current.caption ?? current.alt}
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                Tip: use ← → keys, Esc to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
