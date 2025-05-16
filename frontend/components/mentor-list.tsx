import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"

export function MentorList() {
  const mentors = [
    {
      id: 1,
      name: "Rajiv Kumar",
      avatar: "RK",
      role: "CTO at TechGlobal",
      industry: "Technology",
      expertise: ["Tech Leadership", "Software Architecture", "Career Growth"],
      rating: 4.9,
      reviews: 124,
      price: 2000,
      bio: "15+ years of experience in tech leadership roles. I help professionals navigate their tech careers and develop leadership skills.",
    },
    {
      id: 2,
      name: "Ananya Patel",
      avatar: "AP",
      role: "Product Manager at Amazon",
      industry: "E-commerce",
      expertise: ["Product Strategy", "UX Design", "Leadership"],
      rating: 4.8,
      reviews: 98,
      price: 1800,
      bio: "Passionate about product development and user experience. I mentor aspiring product managers and help them build successful careers.",
    },
    {
      id: 3,
      name: "Vikram Singh",
      avatar: "VS",
      role: "Data Science Director at Microsoft",
      industry: "Technology",
      expertise: ["Data Science", "AI/ML", "Career Transition"],
      rating: 4.7,
      reviews: 87,
      price: 2200,
      bio: "Helping professionals transition into data science roles. I provide guidance on building the right skills and finding opportunities.",
    },
    {
      id: 4,
      name: "Priya Mehta",
      avatar: "PM",
      role: "Marketing Director at Unilever",
      industry: "FMCG",
      expertise: ["Digital Marketing", "Brand Strategy", "Team Management"],
      rating: 4.9,
      reviews: 76,
      price: 1500,
      bio: "Marketing professional with expertise in brand building and digital strategies. I help mentees develop marketing skills for the digital age.",
    },
    {
      id: 5,
      name: "Arjun Reddy",
      avatar: "AR",
      role: "Investment Banker at Goldman Sachs",
      industry: "Finance",
      expertise: ["Financial Analysis", "Investment Banking", "Career Advice"],
      rating: 4.6,
      reviews: 65,
      price: 2500,
      bio: "Experienced investment banker helping finance professionals navigate their careers and prepare for challenging roles in the industry.",
    },
    {
      id: 6,
      name: "Neha Sharma",
      avatar: "NS",
      role: "HR Director at Infosys",
      industry: "HR",
      expertise: ["Talent Management", "Leadership Development", "Career Coaching"],
      rating: 4.8,
      reviews: 92,
      price: 1700,
      bio: "HR professional passionate about helping people develop their careers. I provide guidance on career transitions and leadership development.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {mentors.length} mentors</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border rounded p-1">
            <option>Relevance</option>
            <option>Rating: High to Low</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${mentor.avatar}`} alt={mentor.name} />
                  <AvatarFallback>{mentor.avatar}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.role}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                    <span className="text-sm text-muted-foreground">({mentor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">{mentor.bio}</p>
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Expertise:</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between border-t mt-4">
              <div className="text-sm font-medium">₹{mentor.price}/hour</div>
              <div className="flex gap-2">
                <Link href={`/mentors/${mentor.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
                <Link href={`/book/${mentor.id}`}>
                  <Button size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <Button variant="outline" size="sm" className="mx-1">
          Previous
        </Button>
        <Button variant="outline" size="sm" className="mx-1 bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm" className="mx-1">
          2
        </Button>
        <Button variant="outline" size="sm" className="mx-1">
          3
        </Button>
        <Button variant="outline" size="sm" className="mx-1">
          Next
        </Button>
      </div>
    </div>
  )
}
