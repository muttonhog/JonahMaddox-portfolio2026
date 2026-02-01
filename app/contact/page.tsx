import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Contact | Jonah",
  description: "Get in touch with Jonah about your project.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
      <p className="mb-12 max-w-xl text-lg text-muted-foreground">
        Have a project in mind or just want to say hello? I'd love to hear from
        you.
      </p>

      <div className="max-w-lg">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="bg-card"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className="bg-card"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="resize-none bg-card"
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
