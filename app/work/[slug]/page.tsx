import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProjectBySlug, getAllProjectSlugs } from "@/app/content/projects"
import { YouTubeEmbed, VimeoEmbed, SpotifyEmbed } from "@/components/embeds"
import { GalleryLightbox } from "@/components/gallery-lightbox"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Jonah`,
    description: project.description,
  }
}

type MediaBlock = {
  youtubeIds?: string[]
  vimeoIds?: string[]
  spotifyEmbed?: boolean
}

function hasMedia(block?: MediaBlock) {
  return Boolean(
    (block?.youtubeIds && block.youtubeIds.length > 0) ||
      (block?.vimeoIds && block.vimeoIds.length > 0) ||
      block?.spotifyEmbed
  )
}

function RenderMedia({ block, title }: { block?: MediaBlock; title: string }) {
  if (!hasMedia(block)) return null

  return (
    <div className="space-y-6">
      {block?.youtubeIds?.map((id) => (
        <YouTubeEmbed key={id} id={id} title={title} />
      ))}
      {block?.vimeoIds?.map((id) => (
        <VimeoEmbed key={id} id={id} title={title} />
      ))}
      {block?.spotifyEmbed && <SpotifyEmbed />}
    </div>
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const isFeatured = project.featured === true
  const primary = project.embeds?.primary
  const secondary = project.embeds?.secondary

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.org} · {project.year} · {project.role}
        </p>
      </header>

      <hr className="mb-12 border-border" />

      <div className="space-y-12">
        {isFeatured ? (
          <>
            {/* Context */}
            {project.sections.context && (
              <section>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Context
                </h2>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.context}
                </p>
              </section>
            )}

            {/* Challenge */}
            {project.sections.challenge && (
              <section>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Challenge
                </h2>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.challenge}
                </p>
              </section>
            )}

            {/* Approach */}
            {project.sections.approach && (
              <section>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Approach
                </h2>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.approach}
                </p>
              </section>
            )}

            {/* Inline primary media */}
            {hasMedia(primary) && (
              <section>
                <RenderMedia block={primary} title={project.title} />
              </section>
            )}

            {/* Outcome */}
            {project.sections.outcome && (
              <section>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Outcome
                </h2>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.outcome}
                </p>
              </section>
            )}
          </>
        ) : (
          <>
            {/* Non-featured projects: clean paragraphs */}
            {project.sections.context && (
              <section>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.context}
                </p>
              </section>
            )}

            {project.sections.challenge && (
              <section>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.challenge}
                </p>
              </section>
            )}

            {project.sections.approach && (
              <section>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.approach}
                </p>
              </section>
            )}

            {project.sections.outcome && (
              <section>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.outcome}
                </p>
              </section>
            )}

            {project.sections.learnings && (
              <section>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {project.sections.learnings}
                </p>
              </section>
            )}
          </>
        )}

        {/* External links (e.g. App Store) */}
        {project.links && project.links.length > 0 && (
          <section>
            <ul className="space-y-2">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Image gallery with lightbox */}
        {project.gallery && project.gallery.length > 0 && (
          <section>
            <GalleryLightbox images={project.gallery} />
          </section>
        )}

        {/* Secondary / supporting media */}
        {hasMedia(secondary) && (
          <section>
            <RenderMedia block={secondary} title={project.title} />
          </section>
        )}
      </div>

      {/* Back Link */}
      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/work"
          className="text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-70"
        >
          &larr; Back to work
        </Link>
      </div>
    </div>
  )
}
