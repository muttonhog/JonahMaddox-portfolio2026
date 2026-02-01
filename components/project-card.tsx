import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/app/content/projects"

interface ProjectCardProps {
  project: Project
  variant?: "featured" | "grid"
}

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const isFeatured = variant === "featured"

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="flex flex-col">
        <div
          className={`relative overflow-hidden rounded-lg bg-muted ${
            isFeatured ? "aspect-video" : "aspect-square"
          }`}
        >
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-200 group-hover:scale-[1.02] group-hover:opacity-90"
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            }
          />
        </div>

        {isFeatured && (
          <div className="mt-4 text-center">
            <h3 className="text-sm font-normal text-muted-foreground md:text-base">
              {project.title}
            </h3>
          </div>
        )}
      </article>
    </Link>
  )
}
