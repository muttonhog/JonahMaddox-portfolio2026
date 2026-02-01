export function SpotifyEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/show/3dj0qppvPaGDDnVvvoZCuv?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify podcast"
      />
    </div>
  )
}
