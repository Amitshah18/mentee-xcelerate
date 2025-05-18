import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Video } from "lucide-react"
import Link from "next/link"

const upcomingSessions = [
  {
    id: 1,
    mentorName: "Alex Johnson",
    mentorAvatar: "/placeholder.svg?height=40&width=40",
    topic: "React Performance Optimization",
    date: "May 15, 2023",
    time: "10:00 AM - 11:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    mentorName: "Samantha Lee",
    mentorAvatar: "/placeholder.svg?height=40&width=40",
    topic: "UI/UX Design Principles",
    date: "May 18, 2023",
    time: "2:00 PM - 3:00 PM",
    status: "confirmed",
  },
  {
    id: 3,
    mentorName: "Michael Chen",
    mentorAvatar: "/placeholder.svg?height=40&width=40",
    topic: "Introduction to Machine Learning",
    date: "May 20, 2023",
    time: "11:00 AM - 12:00 PM",
    status: "pending",
  },
]

export default function UpcomingSessions() {
  return (
    <div className="space-y-4">
      {upcomingSessions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">You have no upcoming sessions</p>
          <Button asChild>
            <Link href="/mentors">Find a Mentor</Link>
          </Button>
        </div>
      ) : (
        upcomingSessions.map((session) => (
          <div key={session.id} className="flex items-start gap-4 p-4 border rounded-lg">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session.mentorAvatar || "/placeholder.svg"} alt={session.mentorName} />
              <AvatarFallback>{session.mentorName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{session.topic}</h4>
              <p className="text-sm text-muted-foreground">with {session.mentorName}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                  <span>{session.time}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {session.status === "confirmed" ? (
                <Button size="sm" className="whitespace-nowrap">
                  <Video className="h-3.5 w-3.5 mr-1" /> Join
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="whitespace-nowrap">
                  Pending
                </Button>
              )}
              <Button size="sm" variant="ghost" className="whitespace-nowrap">
                Reschedule
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
