import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          Stylo 2.0
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
                <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/dashboard")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/feature-extraction"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/feature-extraction")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Feature Extraction
        </Link>
        <Link
          href="/ontology-builder"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/ontology-builder")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Ontology Builder
        </Link>
        <Link
          href="/feedback"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/feedback")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Feedback
        </Link>
        <Link
          href="/recommendations"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/recommendations")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Recommendations
        </Link>
        <Link
          href="/trends"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/trends")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Trends
        </Link>
      </nav>
    </div>
  )
}

