import React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // light, regular, medium
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jonah Maddox | Digital Content & Public Engagement",
  description:
    "Jonah Maddox is a content creative making films, podcasts and stories that turn complex work into things people connect with, and leading the teams behind them.",
  generator: "v0.app",
  icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
