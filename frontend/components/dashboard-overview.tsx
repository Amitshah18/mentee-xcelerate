import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function DashboardOverview() {
  // Mock upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      mentor: {
        name: "Rajiv Kumar",
        avatar: "RK",
        role: "CTO at TechGlobal",
      },
      date: "Today",
      time: "4:00 PM - 5:00 PM",
      topic: "Tech Leadership Strategies",
    },
    {
      id: 2,
      mentor: {
        name: "Ananya Patel",
        avatar: "AP",
        role: "Product Manager at Amazon",
      },
      date: "Tomorrow",
      time: "11:00 AM - 12:00 PM",
      topic: "Product Management Fundamentals",
    },
    {
      id: 3,
      mentor: {
        name: "Vikram Singh",
        avatar: "VS",
        role: "Data Science Director at Microsoft",
      },
      date: "Oct 15, 2023",
      time: "2:30 PM - 3:30 PM",
      topic: "Introduction to Machine Learning",
    },
  ]

  // Mock recommended mentors
  const recommendedMentors = [
    {
      id: 1,
      name: "Priya Mehta",
      avatar: "PM",
      role: "Marketing Director at Unilever",
      skills: ["Digital Marketing", "Brand Strategy"],
      price: 1500,
    },
    {
      id: 2,
      name: "Arjun Reddy",
      avatar: "AR",
      role: "Investment Banker at Goldman Sachs",
      skills: ["Financial Analysis", "Career Advice"],
      price: 2500,
    },
    {
      id: 3,
      name: "Neha Sharma",
      avatar: "NS",
      role: "HR Director at Infosys",
      skills: ["Talent Management", "Leadership Development"],
      price: 1700,
    },
  ]

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      type: "session",
      title: "Completed session with Rajiv Kumar",
      date: "Oct 5, 2023",
    },
    {
      id: 2,
      type: "resource",
      title: "Downloaded 'Tech Leadership Guide'",
      date: "Oct 3, 2023",
    },
    {
      id: 3,
      type: "message",
      title: "Sent message to Ananya Patel",
      date: "Oct 2, 2023",
    },
    {
      id: 4,
      type: "booking",
      title: "Booked session with Vikram Singh",
      date: "Oct 1, 2023",
    },
  ]

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="sessions">Sessions</TabsTrigger>
        <TabsTrigger value="mentors">Mentors</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Sessions</CardTitle>
                <Link href="/dashboard/sessions">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <CardDescription>Your scheduled mentoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-start gap-4 p-3 rounded-lg border">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${session.mentor.avatar}`}
                        alt={session.mentor.name}
                      />
                      <AvatarFallback>{session.mentor.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{session.mentor.name}</p>
                        <Badge variant="outline">{session.date}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.mentor.role}</p>
                      <p className="text-sm">{session.topic}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {session.time}
                      </div>
                    </div>
                    <Link href={`/video-call/${session.id}`}>
                      <Button size="sm">
                        <Video className="h-3 w-3 mr-1" />
                        Join
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended Mentors */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Recommended Mentors</CardTitle>
                <Link href="/find-mentors">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <CardDescription>Mentors that match your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedMentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-start gap-4 p-3 rounded-lg border">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${mentor.avatar}`}
                        alt={mentor.name}
                      />
                      <AvatarFallback>{mentor.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{mentor.name}</p>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">₹{mentor.price}/hr</p>
                      <Link href={`/book/${mentor.id}`}>
                        <Button size="sm" className="mt-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          Book
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sessions">
        <Card>
          <CardHeader>
            <CardTitle>Your Sessions</CardTitle>
            <CardDescription>Manage your upcoming and past mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Sessions content will go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="mentors">
        <Card>
          <CardHeader>
            <CardTitle>Your Mentors</CardTitle>
            <CardDescription>View and manage your mentor connections</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Mentors content will go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="resources">
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Access materials shared by your mentors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Resources content will go here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
