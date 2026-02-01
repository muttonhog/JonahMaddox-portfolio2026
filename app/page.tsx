import { FeaturedProjects } from "@/components/featured-projects"
import { MoreProjects } from "@/components/more-projects"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="mb-14 md:mb-16">
        <h1 className="text-3xl font-normal tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Jonah Maddox
        </h1>

        <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
          Good storytelling starts with the audience.
          <br />
          What&apos;s said matters, but how it&apos;s received matters more.
        </p>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Divider */}
      <hr className="my-14 border-border md:my-16" />

      {/* More Work */}
      <MoreProjects />
    </div>
  )
}
