import { getFeaturedProjects } from "@/app/content/projects"
import { ProjectCard } from "./project-card"

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section>
      <h2 className="sr-only">Featured Work</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="featured" />
        ))}
      </div>
    </section>
  )
}
