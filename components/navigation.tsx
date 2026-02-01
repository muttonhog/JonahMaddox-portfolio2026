"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="w-full py-6 md:py-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-opacity duration-150 hover:opacity-70"
        >
          Jonah Maddox
        </Link>
        <ul className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/work" && pathname.startsWith("/work"))

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-opacity duration-150 hover:opacity-70",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
