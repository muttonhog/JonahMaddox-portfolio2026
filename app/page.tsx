import { FeaturedProjects } from "@/components/featured-projects"
import { MoreProjects } from "@/components/more-projects"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
   
<hr className="mb-8 border-border" />

      {/* Case studies label */}
      <section>
        <h2 className="mb-5 text-xs font-medium tracking-widest text-muted-foreground">
          CASE STUDIES
        </h2>

        {/* Featured Projects */}
        <FeaturedProjects />
      </section>

      {/* Divider */}
      <hr className="my-12 border-border md:my-14" />

     {/* Quote section */}
<section className="py-2">
  <figure className="mx-auto max-w-3xl">
    <blockquote className="text-balance text-lg font-normal italic leading-snug text-foreground md:text-xl">
      “Good storytelling starts with the audience.
      <br />
      What&apos;s said matters, but how it&apos;s received matters most.”
    </blockquote>
  </figure>
</section>



      {/* Divider */}
      <hr className="my-12 border-border md:my-14" />

      {/* More Work */}
      <MoreProjects />
    </div>
  )
}
