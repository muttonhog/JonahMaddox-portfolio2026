import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Jonah",
  description:
    "Jonah is a content production leader and storyteller working across video, audio and digital content.",
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
          <header className="space-y-2">
            <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              
            </h1>
            <p className="text-sm text-muted-foreground">
              
            </p>
          </header>

          <p className="text-lg font-medium">Hello.</p>

          <p>
            I'm Jonah, a content production leader and storyteller with twenty
            years of experience making work that is clear, human and worth
            people's time. I started out as an editor, and I have never really
            stopped thinking like one. Whatever the project, I keep the audience
            in mind from the first conversation to the final cut.
          </p>

          <p>
            I currently lead video, audio and digital content at The Alan
            Turing Institute, the UK's national institute for data science and
            AI. My work spans public-facing films and podcasts, social content,
            live event production and documentary storytelling for public,
            industry and policy audiences. I conceived and produce Too Long
            Didn't Read, a public engagement podcast on AI and technology,
            writing and presenting more than twenty episodes in close
            collaboration with researchers.
          </p>

          <p>
            Before this I spent over a decade freelancing across broadcast,
            documentary and digital content. I worked with the BBC, Netflix,
            Disney, Greenpeace and a range of independent production companies,
            often brought in to shape story and structure from complex material
            and take projects through to delivery under pressure. The work has
            ranged from a live Royal Wedding edit that became the BBC's most
            viewed social clip of the year, to a Canal+ feature documentary
            released in cinemas, and environmental films screened at
            Glastonbury.
          </p>

          <p>
            I am particularly drawn to work rooted in public good: science
            communication, research, environmental storytelling and social
            change. I am currently completing a Creative Science Communication
            and Public Engagement course at the University of the West of
            England, and I think about how content builds trust and
            understanding as much as how it looks and sounds.
          </p>

          <p>
            When I'm not at my desk you'll find me making music, woodturning,
            running spoon-carving workshops or working on various digital
            projects.
          </p>

          <p>
            If you're working on something and want to communicate it with care
            and clarity, I'm always happy to talk.
          </p>
        </div>
      </div>
    </div>
  )
}