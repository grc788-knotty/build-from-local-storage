"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ImageOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const products = [
  { id: "blanket", name: "Blanket", description: "Soft and cozy, perfect for snuggling up", basePrice: 75, image: "/customizer/blanket.jpg", yarnType: "blanket" },
  { id: "scarf", name: "Scarf", description: "Warm and stylish, approximately 60 inches long", basePrice: 38, image: "/customizer/scarf.jpg", yarnType: "acrylic" },
  { id: "toque", name: "Toque", description: "Classic winter hat, fits most adults", basePrice: 32, image: "/customizer/toque.jpg", yarnType: "acrylic" },
  { id: "headband", name: "Headband", description: "Stylish ear warmer, adjustable fit", basePrice: 22, image: "/customizer/headband.jpg", yarnType: "acrylic" },
  { id: "hotpads", name: "Hot Pads", description: "Set of 2 heat-resistant kitchen helpers", basePrice: 18, image: "/customizer/hotpads.jpg", yarnType: "cotton" },
  { id: "scrubbingpads", name: "Scrubbing Pads", description: "Set of 3 eco-friendly kitchen scrubbers", basePrice: 12, image: "/customizer/scrubbingpads.jpg", yarnType: "nylon" },
  { id: "dishcloths", name: "Dishcloths", description: "Set of 3 absorbent cotton cloths", basePrice: 15, image: "/customizer/dishcloths.jpg", yarnType: "cotton" },
]

const yarnTypes: Record<string, { name: string; description: string }> = {
  cotton: { name: "Lily Sugar'n Cream (Cotton)", description: "100% cotton, absorbent and durable for kitchen use" },
  acrylic: { name: "Caron Simply Soft (Acrylic)", description: "Soft and warm, easy-care for wearable items" },
  blanket: { name: "Bernat Blanket (Chunky Chenille)", description: "Ultra-soft and plush, luxuriously cozy" },
  nylon: { name: "Red Heart Scrubby (Nylon)", description: "Textured nylon, perfect for scrubbing" },
}

interface YarnColor {
  id: string
  name: string
  hex: string
}

const yarnColors: YarnColor[] = [
  { id: "cream", name: "Soft Cream", hex: "#F5F0E6" },
  { id: "blush", name: "Blush Pink", hex: "#F2C4C4" },
  { id: "sage", name: "Sage Green", hex: "#9CAF88" },
  { id: "sky", name: "Sky Blue", hex: "#A5C4D4" },
  { id: "lavender", name: "Lavender", hex: "#C4B0D6" },
  { id: "peach", name: "Peach", hex: "#E6A57E" },
  { id: "teal", name: "Teal", hex: "#B5D6D6" },
  { id: "caramel", name: "Caramel", hex: "#D4A84B" },
  { id: "dusty-rose", name: "Dusty Rose", hex: "#C9A0A0" },
  { id: "warm-white", name: "Warm White", hex: "#FAF6F0" },
  { id: "charcoal", name: "Charcoal", hex: "#6B6B6B" },
  { id: "butter", name: "Butter Yellow", hex: "#F5E6A3" },
]

type Step = "product" | "color" | "confirm" | "submitted"

interface OrderForm {
  name: string
  email: string
  phone: string
  notes: string
}

export function ProductCustomizer() {
  const [step, setStep] = useState<Step>("product")
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [selectedColor, setSelectedColor] = useState<YarnColor | null>(null)
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})
  const [orderForm, setOrderForm] = useState<OrderForm>({ name: "", email: "", phone: "", notes: "" })
  const [dialogOpen, setDialogOpen] = useState(false)

  function handleProductSelect(product: typeof products[0]) {
    setSelectedProduct(product)
    setSelectedColor(null)
    setStep("color")
  }

  function handleColorSelect(color: YarnColor) {
    setSelectedColor(color)
    setStep("confirm")
  }

  function handleSubmit() {
    setDialogOpen(true)
  }

  function handleConfirmOrder() {
    setDialogOpen(false)
    setStep("submitted")
  }

  function handleReset() {
    setSelectedProduct(null)
    setSelectedColor(null)
    setOrderForm({ name: "", email: "", phone: "", notes: "" })
    setStep("product")
  }

  if (step === "submitted") {
    return (
      <div className="mx-auto max-w-lg text-center py-16">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-serif text-2xl font-bold">Order Request Sent!</h2>
        <p className="mt-4 text-muted-foreground">
          Thank you, {orderForm.name}! Your custom {selectedProduct?.name} request has been received.
          We&apos;ll reach out to {orderForm.email} to confirm details and arrange payment.
        </p>
        <div className="mt-6 rounded-lg bg-secondary/50 p-4 text-sm space-y-1 text-left">
          <p><span className="font-medium">Product:</span> {selectedProduct?.name}</p>
          <p><span className="font-medium">Color:</span> {selectedColor?.name}</p>
          <p><span className="font-medium">Yarn:</span> {selectedProduct ? yarnTypes[selectedProduct.yarnType]?.name : ""}</p>
          <p><span className="font-medium">Estimated Price:</span> ${selectedProduct?.basePrice}+</p>
        </div>
        <Button onClick={handleReset} className="mt-8">Design Another Piece</Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2">
        {(["product", "color", "confirm"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
              step === s
                ? "bg-primary text-primary-foreground"
                : (["product", "color", "confirm"].indexOf(step) > i)
                  ? "bg-primary/20 text-primary"
                  : "bg-secondary text-muted-foreground"
            }`}>
              {i + 1}
            </div>
            <span className={`hidden text-xs sm:inline ${step === s ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {s === "product" ? "Choose Product" : s === "color" ? "Pick Color" : "Confirm"}
            </span>
            {i < 2 && <div className="h-px w-6 bg-border sm:w-12" />}
          </div>
        ))}
      </div>

      {/* Step 1: Choose Product */}
      {step === "product" && (
        <div>
          <h2 className="text-center text-lg font-semibold mb-6">What would you like to create?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer overflow-hidden border transition-all hover:border-primary hover:shadow-md"
                onClick={() => handleProductSelect(product)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-secondary/50 relative">
                    {!imgErrors[product.id] ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        onError={() => setImgErrors(prev => ({ ...prev, [product.id]: true }))}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary/50">
                        <ImageOff className="h-10 w-10 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{product.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">From ${product.basePrice}</span>
                      <span className="text-xs text-muted-foreground">{yarnTypes[product.yarnType]?.name.split(" (")[0]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Choose Color */}
      {step === "color" && selectedProduct && (
        <div>
          <button
            onClick={() => setStep("product")}
            className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to products
          </button>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: product info + preview */}
            <div>
              <h2 className="text-lg font-semibold mb-1">{selectedProduct.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{selectedProduct.description}</p>
              <p className="text-sm mb-4">
                <span className="font-medium">Yarn:</span>{" "}
                <span className="text-muted-foreground">{yarnTypes[selectedProduct.yarnType]?.name}</span>
                <br />
                <span className="text-xs text-muted-foreground">{yarnTypes[selectedProduct.yarnType]?.description}</span>
              </p>
              <div className="aspect-square overflow-hidden rounded-xl bg-secondary/50 relative">
                {!imgErrors[`product-${selectedProduct.id}`] ? (
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    onError={() => setImgErrors(prev => ({ ...prev, [`product-${selectedProduct.id}`]: true }))}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageOff className="h-10 w-10 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            </div>

            {/* Right: color grid */}
            <div>
              <h3 className="font-semibold mb-4">Choose your color</h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {yarnColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorSelect(color)}
                    className={`group flex flex-col items-center gap-2 rounded-lg border p-3 transition-all hover:border-primary hover:shadow-sm ${
                      selectedColor?.id === color.id ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <div
                      className="h-10 w-10 rounded-full border border-border/50 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-center text-xs leading-tight">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Confirm + order form */}
      {step === "confirm" && selectedProduct && selectedColor && (
        <div>
          <button
            onClick={() => setStep("color")}
            className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to colors
          </button>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 space-y-4">
              <h2 className="font-serif text-xl font-bold">Your Custom Order</h2>

              {/* Color preview */}
              <div className="flex items-center gap-4">
                <div
                  className="h-16 w-16 flex-shrink-0 rounded-full border border-border/50 shadow"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div>
                  <p className="font-semibold">{selectedProduct.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedColor.name}</p>
                  <p className="text-sm text-muted-foreground">{yarnTypes[selectedProduct.yarnType]?.name}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">Estimated starting price</p>
                <p className="text-2xl font-bold text-primary">${selectedProduct.basePrice}+</p>
                <p className="mt-1 text-xs text-muted-foreground">Final price confirmed after order review</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Your Contact Info</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={orderForm.name}
                    onChange={e => setOrderForm(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={orderForm.email}
                    onChange={e => setOrderForm(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={orderForm.phone}
                    onChange={e => setOrderForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Special requests (optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests, sizing notes, or gift messages..."
                    value={orderForm.notes}
                    onChange={e => setOrderForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={!orderForm.name || !orderForm.email}
              >
                Submit Order Request
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Order Request</DialogTitle>
            <DialogDescription>
              We&apos;ll reach out to confirm details and arrange payment before starting your piece.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg bg-secondary/50 p-4 text-sm space-y-1">
            <p><span className="font-medium">Product:</span> {selectedProduct?.name}</p>
            <p><span className="font-medium">Color:</span> {selectedColor?.name}</p>
            <p><span className="font-medium">Contact:</span> {orderForm.name} - {orderForm.email}</p>
            <p><span className="font-medium">Est. Price:</span> ${selectedProduct?.basePrice}+</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Go Back</Button>
            <Button onClick={handleConfirmOrder}>Confirm Order</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
