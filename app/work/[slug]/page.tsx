import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProjectBySlug, getAllProjectSlugs } from "@/app/content/projects"
import { YouTubeEmbed, VimeoEmbed, SpotifyEmbed } from "@/components/embeds"

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

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Jonah`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

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

      {/* Divider */}
      <hr className="mb-12 border-border" />

      {/* Content Sections */}
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Challenge
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            {project.sections.challenge}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Key Decisions
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            {project.sections.decisions}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Outcome
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            {project.sections.outcome}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Learnings
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            {project.sections.learnings}
          </p>
        </section>

        {/* Embeds Section */}
        {(project.embeds.youtubeIds?.length ||
          project.embeds.vimeoIds?.length ||
          project.embeds.spotifyEmbed) && (
          <section>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Media
            </h2>
            <div className="space-y-6">
              {project.embeds.youtubeIds?.map((id) => (
                <YouTubeEmbed key={id} id={id} title={project.title} />
              ))}
              {project.embeds.vimeoIds?.map((id) => (
                <VimeoEmbed key={id} id={id} title={project.title} />
              ))}
              {project.embeds.spotifyEmbed && <SpotifyEmbed />}
            </div>
          </section>
        )}
      </div>

      {/* Back Link */}
      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-70"
        >
          &larr; Back to work
        </Link>
      </div>
    </div>
  )
}
