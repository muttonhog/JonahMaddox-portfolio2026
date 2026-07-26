import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Jonah",
  description:
    "Jonah is a senior content creative working across video, audio and digital content.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
      <div className="grid gap-12 md:grid-cols-[180px_1fr] md:gap-16 lg:gap-20">
        {/* Portrait */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-muted shadow-sm ring-1 ring-border md:h-44 md:w-44">
            <Image
              src="/images/about/jonah.jpg"
              alt="Portrait of Jonah Maddox"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 176px"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6 text-base leading-relaxed text-foreground">
          <p className="text-lg font-medium">Hello.</p>

          <p>
            I'm Jonah, a senior content creative with twenty years of experience
            across broadcast, the third sector, music, games and TV. I'm a
            curious and committed storyteller, and I want to make work that
            enriches people rather than asks something of them. My career began
            as an editor, and I never really stopped thinking like one:
            whatever the project, I keep the audience in mind from the first
            conversation to the final cut.
          </p>

          <p>
            I'm currently Group Content Production Manager at Nesta, the
            research and innovation foundation, leading on The Policy Fix and
            building an in-house workflow for content production and strategy.
            Before this I was at The Alan Turing Institute, the national
            institute for data science and AI, where I led all video and audio
            content. My work spans public-facing films and podcasts, social
            content, live event production and documentary storytelling for
            public, industry and policy audiences. I conceived and produced Too
            Long Didn't Read, a public engagement podcast on AI and technology,
            writing and presenting more than twenty episodes in close
            collaboration with researchers.
          </p>

          <p>
            Before that I spent over a decade freelancing across broadcast,
            documentary and digital content, working with the BBC, Netflix,
            Disney, Greenpeace and a range of independent production companies.
            I was often brought in to shape story and structure out of complex
            material and take projects through to delivery under pressure. The
            work ranged from a live Royal Wedding edit that became the BBC's
            most-viewed social clip of the year, to a Canal+ feature documentary
            released in cinemas, to environmental films screened at
            Glastonbury.
          </p>

          <p>
            I'm drawn to work rooted in public good: science communication,
            research, environmental storytelling and social change. I think
            about how content builds trust and understanding as much as how it
            looks and sounds. I recently completed a course in Creative Science
            Communication and Public Engagement at the University of the West
            of England, and one in Strategic Brand Identity and Brand Experience
            at the University of the Arts London.
          </p>

          <p>
            Mostly, I like to learn and build. I follow ideas into areas next to
            my main work, and I make things: apps, AI workflows, and better ways
            of producing and running content. Building something is usually how
            I understand it. When I'm not at my desk you'll find me making
            music, woodturning, running spoon-carving workshops, volunteering
            as a Befriender for Age UK or making content for my local food bank.
          </p>

          <p>
            If you're working on something and want to communicate it with care,
            clarity and enthusiasm, I'm always happy to talk.
          </p>
        </div>
      </div>
    </div>
  )
}