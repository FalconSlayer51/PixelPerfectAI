"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageUploader } from "@/components/image-uploader"
import { ImageComparison } from "@/components/image-comparison"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export default function DemoPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")

  const handleImageUpload = (imageDataUrl: string) => {
    setOriginalImage(imageDataUrl)
    setEnhancedImage(null)
    setActiveTab("process")
  }

  const processImage = () => {
    if (!originalImage) return

    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      // In a real application, you would send the image to your SRGAN API
      // For demo purposes, we're just using the same image with a filter applied
      setEnhancedImage(originalImage)
      setIsProcessing(false)
      setActiveTab("results")
    }, 2000)
  }

  const resetDemo = () => {
    setOriginalImage(null)
    setEnhancedImage(null)
    setActiveTab("upload")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">SRGAN Demo</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload an image and see how our SRGAN model enhances its resolution and quality.
            </p>
          </div>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertTitle>How it works</AlertTitle>
            <AlertDescription>
              Our SRGAN model uses deep learning to upscale images while adding realistic details. The process preserves
              the original content while enhancing edges, textures, and overall clarity.
            </AlertDescription>
          </Alert>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mx-auto">
            <TabsList className="grid w-full grid-cols-3 rounded-full p-1">
              <TabsTrigger value="upload" className="rounded-full">
                Upload
              </TabsTrigger>
              <TabsTrigger value="process" disabled={!originalImage} className="rounded-full">
                Process
              </TabsTrigger>
              <TabsTrigger value="results" disabled={!enhancedImage} className="rounded-full">
                Results
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="mt-8">
              <Card className="border-2 border-dashed">
                <CardHeader>
                  <CardTitle>Upload Your Image</CardTitle>
                  <CardDescription>Select or drag and drop an image to enhance with our SRGAN model.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUploader onImageUpload={handleImageUpload} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="process" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Process Your Image</CardTitle>
                  <CardDescription>Review your image and start the enhancement process.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-8">
                    {originalImage && (
                      <div className="rounded-xl overflow-hidden max-w-md mx-auto border">
                        <img src={originalImage || "/placeholder.svg"} alt="Original image" className="w-full h-auto" />
                      </div>
                    )}
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={resetDemo} className="rounded-full">
                        Upload Different Image
                      </Button>
                      <Button onClick={processImage} disabled={isProcessing} className="rounded-full">
                        {isProcessing ? "Processing..." : "Enhance Image"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="results" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Results</CardTitle>
                  <CardDescription>Compare your original image with the SRGAN-enhanced version.</CardDescription>
                </CardHeader>
                <CardContent>
                  {originalImage && enhancedImage && (
                    <div className="flex flex-col gap-8">
                      <ImageComparison originalImage={originalImage} enhancedImage={enhancedImage} />
                      <div className="flex justify-center gap-4">
                        <Button variant="outline" onClick={resetDemo} className="rounded-full">
                          Try Another Image
                        </Button>
                        <Button className="gap-2 rounded-full">
                          <Download className="h-5 w-5" />
                          Download Enhanced Image
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}

