"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const colorPalettes = {
  brand: {
    name: "Brand UI",
    description: "Primary brand colors for CTAs, highlights, and key interactions",
    colors: [
      { shade: "50", hex: "#F5FEE4", name: "brand-50" },
      { shade: "100", hex: "#E6FCB8", name: "brand-100" },
      { shade: "200", hex: "#D2FAA8", name: "brand-200" },
      { shade: "300", hex: "#BEF789", name: "brand-300" },
      { shade: "400", hex: "#A2F42C", name: "brand-400" },
      { shade: "500", hex: "#9CE800", name: "brand-500" },
      { shade: "600", hex: "#80C63F", name: "brand-600" },
      { shade: "700", hex: "#76AC08", name: "brand-700" },
      { shade: "800", hex: "#588506", name: "brand-800" },
      { shade: "900", hex: "#0B5504", name: "brand-900" },
    ],
  },
  neutral: {
    name: "Neutral UI",
    description: "Grayscale colors for text, backgrounds, and borders",
    colors: [
      { shade: "50", hex: "#FFFFFF", name: "neutral-50" },
      { shade: "100", hex: "#F2F2F3", name: "neutral-100" },
      { shade: "200", hex: "#E4E6E7", name: "neutral-200" },
      { shade: "300", hex: "#CACBCE", name: "neutral-300" },
      { shade: "400", hex: "#AAAEB0", name: "neutral-400" },
      { shade: "500", hex: "#7A8185", name: "neutral-500" },
      { shade: "600", hex: "#484F52", name: "neutral-600" },
      { shade: "700", hex: "#2F3437", name: "neutral-700" },
      { shade: "800", hex: "#252A2D", name: "neutral-800" },
      { shade: "900", hex: "#171A1C", name: "neutral-900" },
    ],
  },
  orange: {
    name: "Orange",
    description: "Warning colors for hot tags, boosted odds, and alerts",
    colors: [
      { shade: "50", hex: "#FFF5E6", name: "orange-50" },
      { shade: "100", hex: "#FFE3BF", name: "orange-100" },
      { shade: "200", hex: "#FFCD94", name: "orange-200" },
      { shade: "300", hex: "#FFB368", name: "orange-300" },
      { shade: "400", hex: "#FF9940", name: "orange-400" },
      { shade: "500", hex: "#FF7A00", name: "orange-500" },
      { shade: "600", hex: "#CC6200", name: "orange-600" },
      { shade: "700", hex: "#994D00", name: "orange-700" },
      { shade: "800", hex: "#813D00", name: "orange-800" },
      { shade: "900", hex: "#633000", name: "orange-900" },
    ],
  },
  purple: {
    name: "Purple",
    description: "Accent colors for special features and promotions",
    colors: [
      { shade: "50", hex: "#F3E8FD", name: "purple-50" },
      { shade: "100", hex: "#E0D1FB", name: "purple-100" },
      { shade: "200", hex: "#CDA3F8", name: "purple-200" },
      { shade: "300", hex: "#B576F4", name: "purple-300" },
      { shade: "400", hex: "#9C48F1", name: "purple-400" },
      { shade: "500", hex: "#831AED", name: "purple-500" },
      { shade: "600", hex: "#6915BE", name: "purple-600" },
      { shade: "700", hex: "#4F108E", name: "purple-700" },
      { shade: "800", hex: "#430B7A", name: "purple-800" },
      { shade: "900", hex: "#340A5F", name: "purple-900" },
    ],
  },
  teal: {
    name: "Teal",
    description: "Info colors for links, information banners, and success states",
    colors: [
      { shade: "50", hex: "#E9F8FB", name: "teal-50" },
      { shade: "100", hex: "#D3F2F8", name: "teal-100" },
      { shade: "200", hex: "#A6E6F1", name: "teal-200" },
      { shade: "300", hex: "#7AD9EA", name: "teal-300" },
      { shade: "400", hex: "#4DCDE3", name: "teal-400" },
      { shade: "500", hex: "#22BFDB", name: "teal-500" },
      { shade: "600", hex: "#1CA4BA", name: "teal-600" },
      { shade: "700", hex: "#158599", name: "teal-700" },
      { shade: "800", hex: "#0F6578", name: "teal-800" },
      { shade: "900", hex: "#0A4B5A", name: "teal-900" },
    ],
  },
  yellow: {
    name: "Yellow",
    description: "Attention colors for highlights and important information",
    colors: [
      { shade: "50", hex: "#FFF9E6", name: "yellow-50" },
      { shade: "100", hex: "#FFEEC2", name: "yellow-100" },
      { shade: "200", hex: "#FFE192", name: "yellow-200" },
      { shade: "300", hex: "#FFD161", name: "yellow-300" },
      { shade: "400", hex: "#FFC133", name: "yellow-400" },
      { shade: "500", hex: "#FFBA0C", name: "yellow-500" },
      { shade: "600", hex: "#DB9C09", name: "yellow-600" },
      { shade: "700", hex: "#B57F05", name: "yellow-700" },
      { shade: "800", hex: "#8C6103", name: "yellow-800" },
      { shade: "900", hex: "#684902", name: "yellow-900" },
    ],
  },
  red: {
    name: "Red",
    description: "Error colors for danger states, loss indicators, and critical alerts",
    colors: [
      { shade: "50", hex: "#FFF1EE", name: "red-50" },
      { shade: "100", hex: "#FFDAD4", name: "red-100" },
      { shade: "200", hex: "#FFB7AA", name: "red-200" },
      { shade: "300", hex: "#FF8976", name: "red-300" },
      { shade: "400", hex: "#F86147", name: "red-400" },
      { shade: "500", hex: "#CC371B", name: "red-500" },
      { shade: "600", hex: "#B02F17", name: "red-600" },
      { shade: "700", hex: "#8E2613", name: "red-700" },
      { shade: "800", hex: "#6B1D0F", name: "red-800" },
      { shade: "900", hex: "#50160B", name: "red-900" },
    ],
  },
}

function ColorSwatch({
  color,
  onCopy,
}: { color: { shade: string; hex: string; name: string }; onCopy: (hex: string) => void }) {
  return (
    <div className="group relative cursor-pointer" onClick={() => onCopy(color.hex)}>
      <div
        className="h-16 w-full rounded-md border border-gray-200 flex items-center justify-center transition-transform group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
      >
        <Copy className="h-4 w-4 opacity-0 group-hover:opacity-70 transition-opacity text-black/70" />
      </div>
      <div className="mt-2 text-center">
        <p className="text-xs font-medium">{color.shade}</p>
        <p className="text-xs text-muted-foreground">{color.hex}</p>
      </div>
    </div>
  )
}

export default function FoundationPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopiedColor(hex)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error("Failed to copy color:", err)
    }
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Foundation</h1>
        <p className="text-muted-foreground">
          Core design tokens and principles that form the foundation of the pawabloX design system.
        </p>
      </div>

      <Tabs defaultValue="colors" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing & Layout</TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Defines the brand's core color palette, used to create consistency, hierarchy, and accessible
                experiences across all products.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(colorPalettes).map(([key, palette]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{palette.name}</h3>
                        <p className="text-sm text-muted-foreground">{palette.description}</p>
                      </div>
                      {copiedColor && (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <Check className="h-4 w-4" />
                          Copied!
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                      {palette.colors.map((color) => (
                        <ColorSwatch key={color.shade} color={color} onCopy={copyToClipboard} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Legacy Brand Colors */}
          <Card>
            <CardHeader>
              <CardTitle> Brand Colors</CardTitle>
              <CardDescription>
                Original brand colors with CSS variable names for backward compatibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#9CE800] flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#9CE800")}
                  >
                    <Copy className="h-4 w-4 text-black/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-primary-green</p>
                    <p className="text-sm text-muted-foreground">#9CE800</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#252A2D] flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#252A2D")}
                  >
                    <Copy className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-charcoal</p>
                    <p className="text-sm text-muted-foreground">#252A2D</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#FF7A00] flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#FF7A00")}
                  >
                    <Copy className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-warning-orange</p>
                    <p className="text-sm text-muted-foreground">#FF7A00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#CC371B] flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#CC371B")}
                  >
                    <Copy className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-danger-red</p>
                    <p className="text-sm text-muted-foreground">#CC371B</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#22BFDB] flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#22BFDB")}
                  >
                    <Copy className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-info-blue</p>
                    <p className="text-sm text-muted-foreground">#22BFDB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div
                    className="w-12 h-12 rounded-md bg-[#F2F4F7] border flex items-center justify-center cursor-pointer"
                    onClick={() => copyToClipboard("#F2F4F7")}
                  >
                    <Copy className="h-4 w-4 text-black/70" />
                  </div>
                  <div>
                    <p className="font-medium">--bp-light-grey</p>
                    <p className="text-sm text-muted-foreground">#F2F4F7</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Font styles used to ensure clarity, hierarchy, and consistency across all user interfaces.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Font Family */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Font Family</h3>
                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-medium">Roboto (fallback: Inter, Helvetica)</p>
                    <p className="text-sm text-muted-foreground mt-1">Primary font for all UI elements and content</p>
                  </div>
                </div>

                {/* Headings */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Headings</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h1 className="text-4xl font-semibold">Heading 1 (36px)</h1>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 600 | Line-height: 1.2</p>
                    </div>
                    <div className="border-b pb-4">
                      <h2 className="text-3xl font-semibold">Heading 2 (30px)</h2>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 600 | Line-height: 1.2</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-2xl font-semibold">Heading 3 (24px)</h3>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 600 | Line-height: 1.2</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="text-xl font-semibold">Heading 4 (20px)</h4>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 600 | Line-height: 1.2</p>
                    </div>
                    <div className="pb-4">
                      <h5 className="text-lg font-semibold">Heading 5 (16px)</h5>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 600 | Line-height: 1.2</p>
                    </div>
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Body Text</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <p className="text-base">
                        Regular body text (16px). The quick brown fox jumps over the lazy dog.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 400 | Line-height: 1.5</p>
                    </div>
                    <div className="border-b pb-4">
                      <p className="text-sm">Small text (14px). The quick brown fox jumps over the lazy dog.</p>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 400 | Line-height: 1.5</p>
                    </div>
                    <div className="pb-4">
                      <p className="text-xs">Extra small text (12px). The quick brown fox jumps over the lazy dog.</p>
                      <p className="text-sm text-muted-foreground mt-2">Font-weight: 300 | Line-height: 1.5</p>
                    </div>
                  </div>
                </div>

                {/* Font Weights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Font Weights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-md">
                      <p className="font-bold text-lg">700 (Bold)</p>
                      <p className="text-sm text-muted-foreground mt-1">Used for: odds, balances</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-md">
                      <p className="font-semibold text-lg">600 (Semibold)</p>
                      <p className="text-sm text-muted-foreground mt-1">Used for: headers</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-md">
                      <p className="font-normal text-lg">400 (Regular)</p>
                      <p className="text-sm text-muted-foreground mt-1">Used for: body text</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-md">
                      <p className="font-light text-lg">300 (Light)</p>
                      <p className="text-sm text-muted-foreground mt-1">Used for: fine print</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Spacing & Layout</CardTitle>
              <CardDescription>
                Consistent spacing and layout guidelines for creating harmonious interfaces.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Base Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Base Grid</h3>
                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-medium">4dp base grid, paddings ×8</p>
                    <p className="text-sm text-muted-foreground mt-1">All spacing values should be multiples of 4dp</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 bg-green-500 rounded"></div>
                      <p className="text-xs mt-2">4dp</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-8 bg-green-500 rounded"></div>
                      <p className="text-xs mt-2">8dp</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 bg-green-500 rounded"></div>
                      <p className="text-xs mt-2">16dp</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-24 bg-green-500 rounded"></div>
                      <p className="text-xs mt-2">24dp</p>
                    </div>
                  </div>
                </div>

                {/* Border Radius */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Border Radius</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-full bg-muted rounded-sm border"></div>
                      <p className="text-sm mt-2">4dp</p>
                      <p className="text-xs text-muted-foreground">Inputs, chips</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-full bg-muted rounded-md border"></div>
                      <p className="text-sm mt-2">8dp</p>
                      <p className="text-xs text-muted-foreground">Sheets, cards</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-full bg-muted rounded-xl border"></div>
                      <p className="text-sm mt-2">12dp</p>
                      <p className="text-xs text-muted-foreground">CTAs</p>
                    </div>
                  </div>
                </div>

                {/* Component Heights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Component Heights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-full bg-[#252A2D] rounded-md flex items-center justify-center">
                        <p className="text-xs text-white">App Bar</p>
                      </div>
                      <div className="w-20">
                        <p className="text-sm font-medium">48dp</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-full bg-[#252A2D] rounded-md flex items-center justify-center">
                        <p className="text-xs text-white">Bottom Nav</p>
                      </div>
                      <div className="w-20">
                        <p className="text-sm font-medium">56dp</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-9 w-16 bg-muted rounded-md flex items-center justify-center">
                        <p className="text-xs">Odds Chip</p>
                      </div>
                      <div className="w-20">
                        <p className="text-sm font-medium">64×36dp</p>
                        <p className="text-xs text-muted-foreground">(auto width)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
