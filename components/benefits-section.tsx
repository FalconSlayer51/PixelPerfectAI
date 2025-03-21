import { ImageIcon, Maximize2, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Maximize2 className="h-10 w-10 text-primary" />,
      title: "Enhanced Resolution",
      description: "Upscale images up to 4x their original size while maintaining clarity and sharpness.",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      title: "Detail Restoration",
      description: "Recover fine details and textures that are lost in low-resolution images.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Processing",
      description: "Our optimized model delivers high-quality results in seconds, not minutes.",
    },
  ]

  const useCases = [
    {
      title: "Photography",
      description: "Enhance old photos, restore family memories, and improve digital camera shots.",
    },
    {
      title: "Medical Imaging",
      description: "Improve the clarity of medical scans for more accurate diagnoses.",
    },
    {
      title: "Satellite Imagery",
      description: "Enhance remote sensing data for better environmental monitoring and analysis.",
    },
    {
      title: "Security Footage",
      description: "Clarify surveillance video to identify important details in security situations.",
    },
    {
      title: "Digital Art",
      description: "Upscale digital artwork for printing or display at larger sizes.",
    },
    {
      title: "E-commerce",
      description: "Improve product images for better customer experience and higher conversion rates.",
    },
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Benefits & Use Cases</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our SRGAN technology offers numerous advantages and can be applied across various domains.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardHeader>
                <div className="mb-2">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tight mb-2">Applications</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SRGAN technology can be applied to a wide range of industries and use cases.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-muted/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

