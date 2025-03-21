import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Low-Resolution Images with SRGAN
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our state-of-the-art Super Resolution GAN technology enhances image quality, restores details, and
                upscales resolution with incredible accuracy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl border bg-muted/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                    <div className="p-2 text-center text-xs font-medium">Original</div>
                    <div className="aspect-square bg-muted/80 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Low resolution example"
                        className="w-full h-auto filter blur-[1px]"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                    <div className="p-2 text-center text-xs font-medium">Enhanced</div>
                    <div className="aspect-square bg-muted/80 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="High resolution example"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

