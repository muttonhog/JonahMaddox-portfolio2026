import Link from "next/link"
import Image from "next/image"
import { projects } from "@/app/content/projects"

export function MoreProjects() {
  const more = projects
    .filter((project) => project.featured === false)
    .slice(0, 8)

  return (
    <section className="pb-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground">
          MORE WORK
        </h2>

        <Link
          href="/work"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          View all work →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {more.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block"
            aria-label={project.title}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 12vw"
              />
            </div>

            <p className="mt-2 line-clamp-2 text-[11px] font-normal leading-snug text-muted-foreground group-hover:text-foreground">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
