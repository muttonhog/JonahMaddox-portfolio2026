import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
} from "@/app/content/projects"
import {
  YouTubeEmbed,
  VimeoEmbed,
  SpotifyEmbed,
} from "@/components/embeds"
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

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

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

type ContentMetric = {
  value: string
  label: string
}

type ContentLink = {
  label: string
  url: string
}

type ContentBlock =
  | {
      type: "heading"
      value: string
      level?: 2 | 3
    }
  | {
      type: "text"
      value: string
    }
  | {
      type: "metrics"
      items: ContentMetric[]
    }
  | {
      type: "youtube"
      ids: string[]
    }
  | {
      type: "youtubeWall"
      ids: string[]
      title?: string
    }
  | {
      type: "vimeo"
      ids: string[]
    }
  | {
      type: "spotify"
      url?: string
      title?: string
    }
  | {
      type: "gallery"
      images: any[]
    }
  | {
      type: "links"
      links: ContentLink[]
    }

function cleanIds(ids: string[] | undefined) {
  return (ids ?? []).map((id) => id.trim()).filter(Boolean)
}

function hasMedia(block?: MediaBlock) {
  const youtubeIds = cleanIds(block?.youtubeIds)
  const vimeoIds = cleanIds(block?.vimeoIds)

  return Boolean(
    youtubeIds.length > 0 ||
      vimeoIds.length > 0 ||
      block?.spotifyEmbed,
  )
}

function RenderMedia({
  block,
  title,
}: {
  block?: MediaBlock
  title: string
}) {
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

  if (layout === "videoWall" && youtubeIds.length > 0) {
    return (
      <CompactVideoGrid
        youtubeIds={youtubeIds}
        title={title}
      />
    )
  }

  return <RenderMedia block={block} title={title} />
}

function getInlineEmbeds(
  project: any,
  after: InlineAfter,
): MediaBlock | null {
  const list: InlineEmbedBlock[] | undefined = project.inlineEmbeds

  if (!list?.length) return null

  const matchingBlocks = list.filter(
    (block) => block.after === after,
  )

  if (!matchingBlocks.length) return null

  const merged: MediaBlock = {
    youtubeIds: matchingBlocks.flatMap(
      (block) => block.youtubeIds ?? [],
    ),
    vimeoIds: matchingBlocks.flatMap(
      (block) => block.vimeoIds ?? [],
    ),
    spotifyEmbed: matchingBlocks.some(
      (block) => block.spotifyEmbed,
    ),
  }

  merged.youtubeIds = cleanIds(merged.youtubeIds)
  merged.vimeoIds = cleanIds(merged.vimeoIds)

  return hasMedia(merged) ? merged : null
}

function SpotifyPlayer({
  url,
  title,
}: {
  url: string
  title?: string
}) {
  return (
    <iframe
      src={url}
      title={title ?? "Spotify podcast player"}
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl border-0"
    />
  )
}

function RenderContentLinks({
  links,
}: {
  links: ContentLink[]
}) {
  return (
    <ul className="space-y-2">
      {links.map((link) => {
        const isInternal = link.url.startsWith("/")

        return (
          <li key={link.url}>
            {isInternal ? (
              <Link
                href={link.url}
                className="text-sm text-muted-foreground underline underline-offset-4 transition-opacity hover:text-foreground"
              >
                {link.label} →
              </Link>
            ) : (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline underline-offset-4 transition-opacity hover:text-foreground"
              >
                {link.label} →
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
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
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="text-sm font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {block.value}
                </h3>
              )
            }

            return (
              <h2
                key={index}
                className="border-t border-border pt-12 text-2xl font-medium tracking-tight text-foreground md:text-3xl"
              >
                {block.value}
              </h2>
            )
          }

          case "text":
            return (
              <section key={index}>
                <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                  {block.value}
                </p>
              </section>
            )

          case "metrics":
            if (!block.items.length) return null

            return (
              <section
                key={index}
                className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2"
              >
                {block.items.map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="bg-background p-5 md:p-6"
                  >
                    <div className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                      {metric.value}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </section>
            )

          case "youtube": {
            const ids = cleanIds(block.ids)

            if (!ids.length) return null

            return (
              <section key={index} className="space-y-6">
                {ids.map((id) => (
                  <YouTubeEmbed
                    key={id}
                    id={id}
                    title={title}
                  />
                ))}
              </section>
            )
          }

          case "youtubeWall": {
            const ids = cleanIds(block.ids)

            if (!ids.length) return null

            return (
              <section key={index} className="space-y-6">
                <CompactVideoGrid
                  youtubeIds={ids}
                  title={block.title ?? title}
                />
              </section>
            )
          }

          case "vimeo": {
            const ids = cleanIds(block.ids)

            if (!ids.length) return null

            return (
              <section key={index} className="space-y-6">
                {ids.map((id) => (
                  <VimeoEmbed
                    key={id}
                    id={id}
                    title={title}
                  />
                ))}
              </section>
            )
          }

          case "spotify":
            return (
              <section key={index}>
                {block.url ? (
                  <SpotifyPlayer
                    url={block.url}
                    title={block.title}
                  />
                ) : (
                  <SpotifyEmbed />
                )}
              </section>
            )

          case "gallery":
            if (!block.images.length) return null

            return (
              <section key={index}>
                <GalleryLightbox images={block.images} />
              </section>
            )

          case "links":
            if (!block.links.length) return null

            return (
              <section key={index}>
                <RenderContentLinks links={block.links} />
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
  metrics?: ContentMetric[]
}) {
  if (!metrics?.length) return null

  return (
    <section>
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Impact
      </h2>

      <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className="bg-background p-5 md:p-6"
          >
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

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const isFeatured = project.featured === true

  const featuredProjects = projects.filter(
    (item) => item.featured,
  )

  const currentIndex = featuredProjects.findIndex(
    (item) => item.slug === slug,
  )

  const nextProject =
    currentIndex >= 0 && featuredProjects.length > 1
      ? featuredProjects[
          (currentIndex + 1) % featuredProjects.length
        ]
      : null

  const primary = project.embeds?.primary
  const secondary = project.embeds?.secondary

  const inlineAfterContext = getInlineEmbeds(
    project,
    "context",
  )

  const inlineAfterChallenge = getInlineEmbeds(
    project,
    "challenge",
  )

  const inlineAfterApproach = getInlineEmbeds(
    project,
    "approach",
  )

  const inlineAfterOutcome = getInlineEmbeds(
    project,
    "outcome",
  )

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
        <RenderBlocks
          blocks={project.content as ContentBlock[]}
          title={project.title}
        />
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
            <RenderMedia
              block={inlineAfterContext}
              title={project.title}
            />
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
            <RenderMedia
              block={inlineAfterChallenge}
              title={project.title}
            />
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
            <RenderMedia
              block={inlineAfterApproach}
              title={project.title}
            />
          )}

          {hasMedia(primary) && (
            <RenderMedia
              block={primary}
              title={project.title}
            />
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
            <RenderMedia
              block={inlineAfterOutcome}
              title={project.title}
            />
          )}

          <RenderImpactMetrics
            metrics={project.impactMetrics}
          />
        </div>
      )}

      {project.links?.length > 0 && (
        <section className="mt-12">
          <RenderContentLinks links={project.links} />
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
            layout={project.layout}
            block={secondary}
            title={project.title}
          />
        </section>
      )}

      <div className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8">
        <Link
          href="/work"
          className="text-sm text-muted-foreground transition-opacity hover:opacity-70"
        >
          ← Back to work
        </Link>

        {isFeatured && nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-right text-sm text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Next case study →
          </Link>
        )}
      </div>
    </div>
  )
}