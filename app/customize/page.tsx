import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCustomizer } from "@/components/product-customizer"

export default function CustomizePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-accent/30 px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Design Your Own
              </span>
              <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Create Your Perfect Piece
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Choose your product, select premium yarn, and pick your favorite colors. 
                We&apos;ll handcraft your unique creation with love.
              </p>
            </div>

            <ProductCustomizer />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
