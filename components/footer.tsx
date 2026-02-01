import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          <a
            href="mailto:hello@jonah.com"
            className="transition-opacity duration-150 hover:opacity-70"
          >
            hello@jonah.com
          </a>
        </p>
        <Link
          href="https://www.linkedin.com/in/jonahmaddox/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-70"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}
