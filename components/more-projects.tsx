import Link from "next/link"
import Image from "next/image"
import { projects } from "@/app/content/projects"

export function MoreProjects() {
  const more = projects
    .filter((project) => project.featured === false)
    .slice(0, 4)

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

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {more.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block text-center"
            aria-label={project.title}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
              />
            </div>

            <p className="mt-2 text-xs font-normal text-muted-foreground group-hover:text-foreground">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
