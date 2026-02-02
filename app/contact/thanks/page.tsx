import Link from "next/link"

export const metadata = {
  title: "Thanks | Jonah Maddox",
  description: "Message sent confirmation.",
}

export default function ContactThanksPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-2xl font-normal tracking-tight text-foreground md:text-3xl">
        Thanks
      </h1>

      <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
        Your message has been sent. I’ll get back to you as soon as I can.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
