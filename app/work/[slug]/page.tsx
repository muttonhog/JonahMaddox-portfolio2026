import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProjectBySlug, getAllProjectSlugs } from "@/app/content/projects"
import { YouTubeEmbed, VimeoEmbed, SpotifyEmbed } from "@/components/embeds"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { CompactVideoGrid } from "@/components/compact-video-grid"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

type InlineAfter = "context" | "challenge" | "approach" | "outcome"

type InlineEmbedBlock = MediaBlock & {
  after: InlineAfter
}

type ContentBlock =
  | { type: "text"; value: string }
  | { type: "youtube"; ids: string[] }
  | { type: "vimeo"; ids: string[] }
  | { type: "spotify" }
  | { type: "gallery"; images: any[] }
  | { type: "links"; links: any[] }

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

/**
 * Special-case renderer:
 * - commercials → CompactVideoGrid
 * - everything else → normal embeds
 */
function RenderSecondaryMedia({
  projectSlug,
  block,
  title,
}: {
  projectSlug: string
  block?: MediaBlock
  title: string
}) {
  if (!hasMedia(block)) return null

  if (projectSlug === "commercials" && block?.youtubeIds?.length) {
    return <CompactVideoGrid youtubeIds={block.youtubeIds} title={title} />
  }

  return <RenderMedia block={block} title={title} />
}

function getInlineEmbeds(project: any, after: InlineAfter): MediaBlock | null {
  const list: InlineEmbedBlock[] | undefined = project.inlineEmbeds
  if (!list?.length) return null

  const blocks = list.filter((b) => b.after === after)
  if (!blocks.length) return null

  const merged: MediaBlock = {
    youtubeIds: blocks.flatMap((b) => b.youtubeIds ?? []),
    vimeoIds: blocks.flatMap((b) => b.vimeoIds ?? []),
    spotifyEmbed: blocks.some((b) => b.spotifyEmbed),
  }

  return hasMedia(merged) ? merged : null
}

function RenderBlocks({
  blocks,
  title,
}: {
  blocks: ContentBlock[]
  title: string
}) {
  return (
    <div className="space-y-12">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "text":
            return (
              <section key={idx}>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {block.value}
                </p>
              </section>
            )

          case "youtube":
            return (
              <section key={idx} className="space-y-6">
                {block.ids.map((id) => (
                  <YouTubeEmbed key={id} id={id} title={title} />
                ))}
              </section>
            )

          case "vimeo":
            return (
              <section key={idx} className="space-y-6">
                {block.ids.map((id) => (
                  <VimeoEmbed key={id} id={id} title={title} />
                ))}
              </section>
            )

          case "spotify":
            return (
              <section key={idx}>
                <SpotifyEmbed />
              </section>
            )

          case "gallery":
            return (
              <section key={idx}>
                <GalleryLightbox images={block.images} />
              </section>
            )

          case "links":
            return (
              <section key={idx}>
                <ul className="space-y-2">
                  {block.links.map((link) => (
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
            )

          default:
            return null
        }
      })}
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

  const inlineAfterContext = getInlineEmbeds(project, "context")
  const inlineAfterChallenge = getInlineEmbeds(project, "challenge")
  const inlineAfterApproach = getInlineEmbeds(project, "approach")
  const inlineAfterOutcome = getInlineEmbeds(project, "outcome")

  const hasBlocks = Boolean(project.content?.length)

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.org} · {project.year} · {project.role}
        </p>
      </header>

      <hr className="mb-12 border-border" />

      {hasBlocks ? (
        <RenderBlocks blocks={project.content} title={project.title} />
      ) : (
        <div className="space-y-12">
          {project.sections.context && (
            <section>
              {isFeatured && (
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Context
                </h2>
              )}
              <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                {project.sections.context}
              </p>
            </section>
          )}

          {inlineAfterContext && (
            <RenderMedia block={inlineAfterContext} title={project.title} />
          )}

          {project.sections.challenge && (
            <section>
              {isFeatured && (
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Challenge
                </h2>
              )}
              <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                {project.sections.challenge}
              </p>
            </section>
          )}

          {inlineAfterChallenge && (
            <RenderMedia block={inlineAfterChallenge} title={project.title} />
          )}

          {project.sections.approach && (
            <section>
              {isFeatured && (
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Approach
                </h2>
              )}
              <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                {project.sections.approach}
              </p>
            </section>
          )}

          {inlineAfterApproach && (
            <RenderMedia block={inlineAfterApproach} title={project.title} />
          )}

          {hasMedia(primary) && (
            <RenderMedia block={primary} title={project.title} />
          )}

          {project.sections.outcome && (
            <section>
              {isFeatured && (
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Outcome
                </h2>
              )}
              <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                {project.sections.outcome}
              </p>
            </section>
          )}

          {inlineAfterOutcome && (
            <RenderMedia block={inlineAfterOutcome} title={project.title} />
          )}
        </div>
      )}

      {project.links?.length > 0 && (
        <section className="mt-12">
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

      {project.gallery?.length > 0 && (
        <section className="mt-12">
          <GalleryLightbox images={project.gallery} />
        </section>
      )}

      {hasMedia(secondary) && (
        <section className="mt-12">
          <RenderSecondaryMedia
            projectSlug={project.slug}
            block={secondary}
            title={project.title}
          />
        </section>
      )}

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/work"
          className="text-sm text-muted-foreground hover:opacity-70"
        >
          &larr; Back to work
        </Link>
      </div>
    </div>
  )
}
