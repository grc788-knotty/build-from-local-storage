import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeaturedProducts } from "@/components/featured-products"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <span className="inline-block rounded-full bg-accent/30 px-4 py-1.5 text-sm font-medium text-accent-foreground">
                  Handmade with Love
                </span>
                <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  Cozy creations,{" "}
                  <span className="text-primary">one stitch</span> at a time
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Discover handcrafted crochet pieces made with premium yarns and endless love. 
                  From adorable amigurumi to cozy beanies, find your perfect handmade treasure.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/customize">
                      Design Your Own
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#products">Browse Inventory</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Image Area */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-secondary/50 p-8">
                  <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="aspect-square rounded-2xl bg-[#E8D5C4] flex items-center justify-center shadow-lg">
                        <span className="text-6xl" role="img" aria-label="Teddy bear">🧸</span>
                      </div>
                      <div className="aspect-square rounded-2xl bg-[#B5D6D6] flex items-center justify-center shadow-lg">
                        <span className="text-6xl" role="img" aria-label="Yarn">🧶</span>
                      </div>
                      <div className="aspect-square rounded-2xl bg-[#F5E6D3] flex items-center justify-center shadow-lg">
                        <span className="text-6xl" role="img" aria-label="Ribbon">🎀</span>
                      </div>
                      <div className="aspect-square rounded-2xl bg-[#D4B8A0] flex items-center justify-center shadow-lg">
                        <span className="text-6xl" role="img" aria-label="Thread">🧵</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-card border-y">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                  <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-4">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-10 w-10 text-primary"
                        >
                          <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground">Every piece is crafted by hand</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Story
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                  Crafted with care, made for comfort
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Welcome to Knotty Hookers, where every stitch is a labor of love. What started as a 
                  passion project has grown into a small business dedicated to creating beautiful, 
                  handmade crochet pieces that bring warmth and joy to homes everywhere.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We use only premium yarns - from soft cotton blends perfect for baby items to 
                  chunky chenille that makes the coziest blankets. Each piece is made to order, 
                  ensuring you receive something truly special and unique.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="mt-1 text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="mt-1 text-sm text-muted-foreground">Handmade</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div className="mt-1 text-sm text-muted-foreground">Premium Yarns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts />

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Ready to create something special?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed">
                Use our interactive customizer to design your perfect crochet piece. 
                Choose your product, yarn type, and colors - we&apos;ll bring it to life.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/customize">
                    Start Customizing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
