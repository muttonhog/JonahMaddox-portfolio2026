interface VimeoEmbedProps {
  id: string
  title?: string
}

export function VimeoEmbed({ id, title = "Vimeo video" }: VimeoEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        loading="lazy"
      />
    </div>
  )
}
