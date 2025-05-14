import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                What can I help you{" "}
                <span className="gradient-text">enhance?</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Transform low-resolution images into stunning high-quality
                visuals with our SRGAN technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/demo">
                    Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto max-w-5xl mt-16 rounded-3xl border bg-muted/40 p-4 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium mb-2">Original</div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                    <img
                      src="/img2.png?height=400&width=400"
                      alt="Low resolution example"
                      className="w-full h-full object-cover filter blur-[1px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium mb-2">Enhanced</div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                    <img
                      src="/img2.png?height=400&width=400"
                      alt="High resolution example"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Key Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our SRGAN technology offers numerous advantages for image
                enhancement
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">4x Resolution</h3>
                <p className="text-muted-foreground">
                  Upscale images up to 4x their original size while maintaining
                  clarity and sharpness.
                </p>
              </div>
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">Detail Recovery</h3>
                <p className="text-muted-foreground">
                  Recover fine details and textures that are lost in
                  low-resolution images.
                </p>
              </div>
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">Fast Processing</h3>
                <p className="text-muted-foreground">
                  Our optimized model delivers high-quality results in seconds,
                  not minutes.
                </p>
              </div>
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">Medical Imaging</h3>
                <p className="text-muted-foreground">
                  Improve the clarity of medical scans for more accurate
                  diagnoses.
                </p>
              </div>
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">Satellite Imagery</h3>
                <p className="text-muted-foreground">
                  Enhance remote sensing data for better environmental
                  monitoring and analysis.
                </p>
              </div>
              <div className="v0-card">
                <h3 className="text-xl font-bold mb-2">Security Footage</h3>
                <p className="text-muted-foreground">
                  Clarify surveillance video to identify important details in
                  security situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground">
                The brilliant minds behind our SRGAN technology
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              {[
                {
                  name: "Kuntigorla Ramesh",
                  role: "Team lead",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Bera Krishna Chaitanya",
                  role: "Senior ML Engineer",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Sabhanam Abhinay",
                  role: "Computer Vision Specialist",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <div key={index} className="v0-card group">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Ready to enhance your images?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Experience the power of our SRGAN model and transform your
              low-resolution images into stunning high-resolution masterpieces.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/demo">
                Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
