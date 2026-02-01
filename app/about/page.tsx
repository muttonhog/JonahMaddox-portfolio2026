import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Jonah",
  description:
    "Jonah is a Public Engagement and Digital Content Manager working across video, motion and audio.",
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
            I'm Jonah, a Public Engagement and Digital Content Manager working
            across video, motion and audio, with a background spanning
            broadcast, music, documentary and digital storytelling. I'm
            particularly drawn to work that's thoughtful, engaging and capable
            of driving positive change.
          </p>

          <p>
            Probably because I started out as an editor, I've always seen it as
            my role, whether I'm hands-on or not, to keep the audience in mind
            throughout the process. Whatever the aims of the project, and
            whether the subject is technical, moving or entertaining, I focus on
            making work that feels clear, human and worth spending time with.
          </p>

          <p>
            I currently work at The Alan Turing Institute, where I lead video
            and audio content for public, industry and policy audiences across
            multiple platforms. This includes films, social-first video, and
            event coverage and live productions designed for different audiences
            and contexts. Alongside this, I conceived and produced a public
            engagement podcast from scratch, writing and producing over twenty
            episodes in close collaboration with researchers on topics ranging
            from digital death and AI in politics to misinformation and
            communicating with animals using AI.
          </p>

          <p>
            Before this, I spent over a decade freelancing across broadcast,
            documentary and digital content, working with organisations
            including the BBC, Netflix, Disney, Greenpeace and a range of
            independent production companies. I was often brought in to help
            shape story and structure from complex, real-world material, and to
            take projects through to delivery under pressure.
          </p>

          <p>
            When I'm not glued to my desk, you'll probably find me making music,
            woodturning, running spoon-carving workshops or, occasionally, back
            at my desk following various digital passion projects.
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
