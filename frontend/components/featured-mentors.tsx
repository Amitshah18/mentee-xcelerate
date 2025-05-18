import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Link from "next/link"

const featuredMentors = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Software Engineer",
    company: "Google",
    skills: ["React", "Node.js", "Cloud Architecture"],
    rating: 4.9,
    reviews: 24,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UX Designer",
    company: "Microsoft",
    skills: ["UI/UX Design", "Figma", "User Research"],
    rating: 4.8,
    reviews: 18,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Amazon",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    rating: 4.7,
    reviews: 15,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function FeaturedMentors() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Mentors</h2>
          <p className="text-muted-foreground">Connect with our top-rated alumni mentors</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/mentors">View All Mentors</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredMentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                  <AvatarFallback>{mentor.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full text-xs font-medium text-primary h-fit">
                  <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                  {mentor.rating} ({mentor.reviews} reviews)
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {mentor.role} at {mentor.company}
                </p>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/mentors/${mentor.id}`}>View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
