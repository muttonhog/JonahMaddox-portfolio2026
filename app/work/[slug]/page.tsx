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

type InlineAfter = "context" | "challenge" | "approach" | "outcome"

type InlineEmbedBlock = {
  after: InlineAfter
  youtubeIds?: string[]
  vimeoIds?: string[]
  spotifyEmbed?: boolean
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

function getInlineEmbeds(project: any, after: InlineAfter): MediaBlock | null {
  const list: InlineEmbedBlock[] | undefined = project.inlineEmbeds
  if (!list || list.length === 0) return null

  const blocks = list.filter((b) => b.after === after)
  if (!blocks.length) return null

  const youtubeIds = blocks.flatMap((b) => b.youtubeIds ?? [])
  const vimeoIds = blocks.flatMap((b) => b.vimeoIds ?? [])
  const spotifyEmbed = blocks.some((b) => b.spotifyEmbed)

  const merged: MediaBlock = {}
  if (youtubeIds.length) merged.youtubeIds = youtubeIds
  if (vimeoIds.length) merged.vimeoIds = vimeoIds
  if (spotifyEmbed) merged.spotifyEmbed = true

  return hasMedia(merged) ? merged : null
}

/**
 * OPTION B: Render ordered "content blocks" when project.content exists.
 * This enables: text -> video -> text -> gallery -> video, etc.
 */
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
        if (!block) return null

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
              <section key={idx}>
                <div className="space-y-6">
                  {(block.ids ?? []).map((id) => (
                    <YouTubeEmbed key={id} id={id} title={title} />
                  ))}
                </div>
              </section>
            )

          case "vimeo":
            return (
              <section key={idx}>
                <div className="space-y-6">
                  {(block.ids ?? []).map((id) => (
                    <VimeoEmbed key={id} id={id} title={title} />
                  ))}
                </div>
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
                <GalleryLightbox images={(block.images ?? []) as any} />
              </section>
            )

          case "links":
            return (
              <section key={idx}>
                <ul className="space-y-2">
                  {(block.links ?? []).map((link: any) => (
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

  // Inline blocks (Option A)
  const inlineAfterContext = getInlineEmbeds(project, "context")
  const inlineAfterChallenge = getInlineEmbeds(project, "challenge")
  const inlineAfterApproach = getInlineEmbeds(project, "approach")
  const inlineAfterOutcome = getInlineEmbeds(project, "outcome")

  // Option B (content blocks)
  const hasBlocks = Boolean(project.content && project.content.length > 0)

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

      {/* If content blocks exist, render them instead of the section layout */}
      {hasBlocks ? (
        <div className="space-y-12">
          <RenderBlocks blocks={project.content as ContentBlock[]} title={project.title} />

          {/* Still allow secondary media at the very end if you want */}
          {hasMedia(secondary) && (
            <section>
              <RenderMedia block={secondary} title={project.title} />
            </section>
          )}
        </div>
      ) : (
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

              {inlineAfterContext && (
                <section>
                  <RenderMedia block={inlineAfterContext} title={project.title} />
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

              {inlineAfterChallenge && (
                <section>
                  <RenderMedia
                    block={inlineAfterChallenge}
                    title={project.title}
                  />
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

              {inlineAfterApproach && (
                <section>
                  <RenderMedia
                    block={inlineAfterApproach}
                    title={project.title}
                  />
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

              {inlineAfterOutcome && (
                <section>
                  <RenderMedia block={inlineAfterOutcome} title={project.title} />
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

              {inlineAfterContext && (
                <section>
                  <RenderMedia block={inlineAfterContext} title={project.title} />
                </section>
              )}

              {project.sections.challenge && (
                <section>
                  <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                    {project.sections.challenge}
                  </p>
                </section>
              )}

              {inlineAfterChallenge && (
                <section>
                  <RenderMedia
                    block={inlineAfterChallenge}
                    title={project.title}
                  />
                </section>
              )}

              {project.sections.approach && (
                <section>
                  <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                    {project.sections.approach}
                  </p>
                </section>
              )}

              {inlineAfterApproach && (
                <section>
                  <RenderMedia
                    block={inlineAfterApproach}
                    title={project.title}
                  />
                </section>
              )}

              {project.sections.outcome && (
                <section>
                  <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                    {project.sections.outcome}
                  </p>
                </section>
              )}

              {inlineAfterOutcome && (
                <section>
                  <RenderMedia block={inlineAfterOutcome} title={project.title} />
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
                {project.links.map((link: any) => (
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
      )}

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
