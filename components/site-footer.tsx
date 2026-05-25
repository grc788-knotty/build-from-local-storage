import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold">Knotty Hookers</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Handcrafted crochet creations made with love. Every stitch tells a story, every piece is unique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/customize" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Customize
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Get in Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                knottyhookers4017@yahoo.com
              </li>
              <li className="text-sm text-muted-foreground">
                @knottyhookers
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Knotty Hookers Crochet. All rights reserved. Made with yarn and love.
          </p>
        </div>
      </div>
    </footer>
  )
}
