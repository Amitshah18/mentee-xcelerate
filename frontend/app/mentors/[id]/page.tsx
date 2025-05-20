import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Star, Award, Briefcase, GraduationCap, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the mentor data based on the ID
  const mentor = {
    id: params.id,
    name: "Dr. Rajesh Kumar",
    avatar: "RK",
    role: "Senior Software Engineer at Google",
    location: "Bangalore, India",
    skills: ["Web Development", "Machine Learning", "System Design", "Career Guidance", "Interview Preparation"],
    rating: 4.9,
    reviews: 124,
    tokens: 50,
    experience: "10+ years",
    education: "Ph.D. in Computer Science, IIT Delhi",
    languages: ["English", "Hindi", "Tamil"],
    bio: "I'm a Senior Software Engineer at Google with over 10 years of experience in the tech industry. I've worked on large-scale distributed systems, web applications, and machine learning projects. I'm passionate about mentoring young engineers and helping them navigate their career paths. My mentoring approach focuses on practical, hands-on learning and real-world problem-solving. I believe in providing honest feedback and actionable advice to help my mentees grow professionally.",
    achievements: [
      "Led a team of 15 engineers at Google",
      "Published 5 research papers in top-tier conferences",
      "Contributed to open-source projects with over 1000+ stars on GitHub",
      "Mentored 50+ students who are now working at top tech companies",
    ],
    availability: [
      { day: "Monday", slots: ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM - 10:00 AM", "4:00 PM - 5:00 PM"] },
      { day: "Friday", slots: ["11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM"] },
    ],
    reviews: [
      {
        id: 1,
        name: "Aryan Patel",
        avatar: "AP",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Dr. Kumar is an exceptional mentor. His deep knowledge of system design and practical approach to problem-solving helped me ace my technical interviews. I landed a job at a top tech company thanks to his guidance!",
      },
      {
        id: 2,
        name: "Meera Singh",
        avatar: "MS",
        rating: 5,
        date: "1 month ago",
        comment:
          "I had several sessions with Dr. Kumar to prepare for my Google interview. His insights into the interview process and detailed feedback on my solutions were invaluable. Highly recommend!",
      },
      {
        id: 3,
        name: "Rohan Joshi",
        avatar: "RJ",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great mentor with practical industry knowledge. He helped me understand complex system design concepts and provided excellent resources for further learning.",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Mentor Profile Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`/placeholder.svg?height=96&width=96&text=${mentor.avatar}`} alt={mentor.name} />
                  <AvatarFallback alt={mentor.name} />
                  <AvatarFallback className="text-2xl">{mentor.avatar}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{mentor.name}</h2>
                <p className="text-muted-foreground mb-2">{mentor.role}</p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mentor.rating}</span>
                  <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 mr-1" />
                  {mentor.location}
                </div>
                <div className="w-full space-y-4">
                  <Link href={`/book/${mentor.id}`}>
                    <Button className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book a Session
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Experience: {mentor.experience}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Education: {mentor.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mentor.tokens} tokens/hour</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mentor Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {mentor.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Bio</h3>
                    <p className="text-muted-foreground">{mentor.bio}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Achievements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">What You Can Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Technical Skills</h4>
                            <p className="text-sm text-muted-foreground">
                              Web development, system design, and machine learning concepts
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Career Guidance</h4>
                            <p className="text-sm text-muted-foreground">
                              Resume building, interview preparation, and career planning
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Project Mentorship</h4>
                            <p className="text-sm text-muted-foreground">Guidance on personal and academic projects</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Industry Insights</h4>
                            <p className="text-sm text-muted-foreground">
                              Understanding the tech industry and current trends
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mentor.availability.map((day, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="font-medium mb-2">{day.day}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {day.slots.map((slot, slotIndex) => (
                            <div
                              key={slotIndex}
                              className="flex items-center justify-between p-2 rounded-md border hover:border-primary cursor-pointer"
                            >
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{slot}</span>
                              </div>
                              <Badge variant="outline">Available</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link href={`/book/${mentor.id}`}>
                      <Button>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book a Session
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold">{mentor.rating}</div>
                      <div>
                        <div className="flex mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.round(mentor.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on {mentor.reviews} reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {mentor.reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40&text=${review.avatar}`}
                              alt={review.name}
                            />
                            <AvatarFallback>{review.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
