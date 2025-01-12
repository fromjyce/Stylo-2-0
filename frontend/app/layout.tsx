import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Separator } from "@/components/ui/separator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fashion Intelligence Platform",
  description: "Discover fashion inspiration with AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <MainNav />
              </div>
            </header>
            <div className="flex-1">{children}</div>
            <footer className="mt-auto py-6 text-center">
              <Separator className="mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Developed by <strong>Team Simpsons</strong> for <strong>Stylumia NXT hackathon 2024</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                This is a demo without connected to backend
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

