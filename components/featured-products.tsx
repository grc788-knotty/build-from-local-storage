"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    id: 1,
    name: "Cloud Soft Blanket",
    category: "Blanket",
    price: 75,
    color: "#B5D6D6",
    image: "/products/baby-blanket.jpg",
  },
  {
    id: 2,
    name: "Chunky Winter Scarf",
    category: "Scarf",
    price: 38,
    color: "#E8D5C4",
    image: "/products/winter-scarf.jpg",
  },
  {
    id: 3,
    name: "Cozy Cable Toque",
    category: "Toque",
    price: 32,
    color: "#C9A0A0",
    image: "/products/cozy-beanie.jpg",
  },
  {
    id: 4,
    name: "Braided Headband",
    category: "Headband",
    price: 22,
    color: "#D4A84B",
    image: "/products/headband.jpg",
  },
  {
    id: 5,
    name: "Kitchen Hot Pads Set",
    category: "Hot Pads",
    price: 18,
    color: "#E6A57E",
    image: "/products/hot-pads.jpg",
  },
  {
    id: 6,
    name: "Eco Scrubbing Pads",
    category: "Scrubbing Pads",
    price: 12,
    color: "#9CAF88",
    image: "/products/scrubbing-pads.jpg",
  },
  {
    id: 7,
    name: "Cotton Dishcloths Set",
    category: "Dishcloths",
    price: 15,
    color: "#A5C4D4",
    image: "/products/dishcloths.jpg",
  },
]

export function FeaturedProducts() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Collection
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Featured Creations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Browse our handpicked selection of ready-made pieces, or head to the customizer to create your own unique design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="p-0">
                <div 
                  className="aspect-square relative overflow-hidden"
                  style={{ backgroundColor: product.color }}
                >
                  {!imgErrors[product.id] ? (
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      onError={() => setImgErrors(prev => ({ ...prev, [product.id]: true }))}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-4xl">🧶</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-semibold">{product.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/customize">Or Design Your Own</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
