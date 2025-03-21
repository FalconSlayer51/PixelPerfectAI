"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ImageComparisonProps {
  originalImage: string
  enhancedImage: string
}

export function ImageComparison({ originalImage, enhancedImage }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = enhancedImage
    link.download = "enhanced-image.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Interactive Comparison</h3>

        <div ref={containerRef} className="relative w-full h-[400px] overflow-hidden rounded-xl border">
          {/* Enhanced Image (Background) */}
          <div className="absolute inset-0">
            <img src={enhancedImage || "/placeholder.svg"} alt="Enhanced" className="w-full h-full object-cover" />
          </div>

          {/* Original Image (Foreground with clip) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <img
              src={originalImage || "/placeholder.svg"}
              alt="Original"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* Slider */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-foreground"></div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">Original</div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            Enhanced
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Original</span>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number.parseInt(e.target.value))}
            className="w-full max-w-md mx-4"
          />
          <span className="text-sm text-muted-foreground">Enhanced</span>
        </div>
      </div>

      <div className="space-y-6 mt-4">
        <h3 className="text-xl font-medium">Side-by-Side Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-center mb-2">
              <span className="text-sm font-medium">Original Image</span>
            </div>
            <div className="border rounded-xl overflow-hidden">
              <img src={originalImage || "/placeholder.svg"} alt="Original" className="w-full h-auto" />
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Low resolution</li>
              <li>• Blurry details</li>
              <li>• Pixelated edges</li>
              <li>• Limited texture detail</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-center mb-2">
              <span className="text-sm font-medium">Enhanced Image</span>
            </div>
            <div className="border rounded-xl overflow-hidden">
              <img src={enhancedImage || "/placeholder.svg"} alt="Enhanced" className="w-full h-auto" />
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 4x higher resolution</li>
              <li>• Sharper details</li>
              <li>• Cleaner edges</li>
              <li>• Enhanced texture fidelity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button size="lg" className="gap-2 rounded-full px-8" onClick={handleDownload}>
          <Download className="h-5 w-5" />
          Download Enhanced Image
        </Button>
      </div>
    </div>
  )
}

