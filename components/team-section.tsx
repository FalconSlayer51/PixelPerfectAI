import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Alex Chen",
      role: "Lead AI Researcher",
      bio: "Specializes in deep learning and computer vision with 10+ years of experience in image processing algorithms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Senior ML Engineer",
      bio: "Expert in GAN architectures and optimization techniques. Previously worked at leading AI research labs.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Computer Vision Specialist",
      bio: "Focuses on implementing cutting-edge vision algorithms and ensuring real-time performance.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Wong",
      role: "UI/UX Designer",
      bio: "Creates intuitive interfaces that make advanced AI technology accessible to everyone.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our SRGAN technology, combining expertise in AI, computer vision, and software
            engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

