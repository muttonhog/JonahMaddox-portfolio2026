import Image from "next/image"
import Link from "next/link"
import { projects } from "@/app/content/projects"

export const metadata = {
  title: "Work | Jonah Maddox",
  description: "Selected work by Jonah Maddox.",
}

function getLatestYear(year: string): number {
  // Extract all 4-digit years and use the latest one
  const matches = year.match(/\d{4}/g)
  if (!matches) return 0
  return Math.max(...matches.map((y) => Number(y)))
}

export default function WorkPage() {
  const all = [...projects].sort(
    (a, b) => getLatestYear(b.year) - getLatestYear(a.year)
  )

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
      <header className="mb-10 md:mb-12">
        <h1 className="text-2xl font-normal tracking-tight text-foreground md:text-3xl">
          Work
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
          A selection of projects across video, live production, and audio.
        </p>
      </header>

      {/* Grid wrapper to keep 3-up feeling centred and intentional */}
      <section className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
          {all.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
              aria-label={project.title}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02] group-hover:opacity-90"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                />
              </div>

              <h2 className="mt-3 text-sm font-normal text-foreground">
                {project.title}
              </h2>

              <p className="mt-1 text-xs font-light text-muted-foreground">
                {project.org} · {project.year}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
