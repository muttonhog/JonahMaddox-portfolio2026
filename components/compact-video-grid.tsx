"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

function cleanYouTubeId(id: string) {
  // Handles accidental full URLs or "v=XXXX"
  // Examples:
  // - "v=VEeH7mPWvUI" -> "VEeH7mPWvUI"
  // - "https://www.youtube.com/watch?v=VEeH7mPWvUI" -> "VEeH7mPWvUI"
  try {
    if (id.includes("youtube.com") || id.includes("youtu.be")) {
      const url = new URL(id)
      const v = url.searchParams.get("v")
      if (v) return v
      // youtu.be/<id>
      const parts = url.pathname.split("/").filter(Boolean)
      return parts[parts.length - 1] ?? id
    }
  } catch {
    // ignore URL parse errors
  }

  if (id.startsWith("v=")) return id.slice(2)
  return id
}

type Props = {
  youtubeIds: string[]
  title?: string
}

export function CompactVideoGrid({ youtubeIds, title = "Video" }: Props) {
  const ids = useMemo(
    () => youtubeIds.map(cleanYouTubeId).filter(Boolean),
    [youtubeIds]
  )

  const [openId, setOpenId] = useState<string | null>(null)

  if (!ids.length) return null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ids.map((id) => {
          const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

          return (
            <button
              key={id}
              type="button"
              onClick={() => setOpenId(id)}
              className="group relative overflow-hidden rounded-xl bg-muted text-left"
              aria-label={`Play ${title}`}
            >
              <div className="relative aspect-video">
                <Image
                  src={thumb}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                />
              </div>

              {/* subtle play indicator */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                  Play
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Modal */}
      {openId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenId(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-sm text-muted-foreground">{title}</p>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="text-sm text-muted-foreground hover:text-foreground"
                aria-label="Close video"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${openId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
