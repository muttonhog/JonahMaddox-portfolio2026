export const metadata = {
  title: "Contact | Jonah Maddox",
  description: "Get in touch with Jonah Maddox.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-12 md:py-16 lg:py-20">
      <h1 className="text-2xl font-normal tracking-tight text-foreground md:text-3xl">
        Contact
      </h1>

      <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
        If you’d like to get in touch about a project or collaboration, feel free
        to use the form below.
      </p>
<p className="mb-4 rounded-md border border-border bg-muted px-3 py-2 text-xs text-foreground">
  DEBUG CONTACT PAGE — action should be mjgoeloz
</p>
      <form
        action="https://formspree.io/f/mjgoeloz"
        method="POST"
        className="mt-8 space-y-4"
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://jonahmaddox.co.uk/contact/thanks"
        />

        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        <textarea
          name="message"
          rows={5}
          required
          placeholder="Message"
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        <button
          type="submit"
          className="mt-2 inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-normal text-background hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </div>
  )
}
