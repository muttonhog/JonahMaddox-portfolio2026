import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/app/content/projects"
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
  | { type: "youtubeWall"; ids: string[]; title?: string }
  | { type: "vimeo"; ids: string[] }
  | { type: "spotify" }
  | { type: "gallery"; images: any[] }
  | { type: "links"; links: any[] }

function cleanIds(ids: string[] | undefined) {
  return (ids ?? []).map((s) => s.trim()).filter(Boolean)
}

function hasMedia(block?: MediaBlock) {
  const yt = cleanIds(block?.youtubeIds)
  const vm = cleanIds(block?.vimeoIds)

  return Boolean(yt.length > 0 || vm.length > 0 || block?.spotifyEmbed)
}

function RenderMedia({ block, title }: { block?: MediaBlock; title: string }) {
  if (!hasMedia(block)) return null

  const youtubeIds = cleanIds(block?.youtubeIds)
  const vimeoIds = cleanIds(block?.vimeoIds)

  return (
    <div className="space-y-6">
      {youtubeIds.map((id) => (
        <YouTubeEmbed key={id} id={id} title={title} />
      ))}
      {vimeoIds.map((id) => (
        <VimeoEmbed key={id} id={id} title={title} />
      ))}
      {block?.spotifyEmbed && <SpotifyEmbed />}
    </div>
  )
}

function RenderSecondaryMedia({
  layout,
  block,
  title,
}: {
  layout?: string
  block?: MediaBlock
  title: string
}) {
  if (!hasMedia(block)) return null

  const youtubeIds = cleanIds(block?.youtubeIds)

  if (layout === "videoWall" && youtubeIds.length) {
    return <CompactVideoGrid youtubeIds={youtubeIds} title={title} />
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

  merged.youtubeIds = cleanIds(merged.youtubeIds)
  merged.vimeoIds = cleanIds(merged.vimeoIds)

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

          case "youtube": {
            const ids = cleanIds(block.ids)
            if (!ids.length) return null

            return (
              <section key={idx} className="space-y-6">
                {ids.map((id) => (
                  <YouTubeEmbed key={id} id={id} title={title} />
                ))}
              </section>
            )
          }

          case "youtubeWall": {
            const ids = cleanIds(block.ids)
            if (!ids.length) return null

            return (
              <section key={idx} className="space-y-6">
                <CompactVideoGrid youtubeIds={ids} title={block.title ?? title} />
              </section>
            )
          }

          case "vimeo": {
            const ids = cleanIds(block.ids)
            if (!ids.length) return null

            return (
              <section key={idx} className="space-y-6">
                {ids.map((id) => (
                  <VimeoEmbed key={id} id={id} title={title} />
                ))}
              </section>
            )
          }

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

function RenderImpactMetrics({
  metrics,
}: {
  metrics?: { value: string; label: string }[]
}) {
  if (!metrics?.length) return null

  return (
    <section>
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Impact
      </h2>
      <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`} className="bg-background p-5">
            <div className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {metric.value}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const isFeatured = project.featured === true

  const featuredProjects = projects.filter((p) => p.featured)
  const currentIndex = featuredProjects.findIndex((p) => p.slug === slug)
  const nextProject =
    currentIndex >= 0
      ? featuredProjects[(currentIndex + 1) % featuredProjects.length]
      : null

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
        <RenderBlocks blocks={project.content as any} title={project.title} />
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

          <RenderImpactMetrics metrics={project.impactMetrics} />
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
            layout={(project as any).layout}
            block={secondary}
            title={project.title}
          />
        </section>
      )}

      <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
        <Link href="/work" className="text-sm text-muted-foreground hover:opacity-70">
          ← Back to work
        </Link>

        {isFeatured && nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-sm text-foreground underline underline-offset-4 hover:opacity-70"
          >
            Next case study →
          </Link>
        )}
      </div>
    </div>
  )
}