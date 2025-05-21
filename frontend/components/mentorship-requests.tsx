import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const mentorshipRequests = [
  {
    id: 1,
    menteeName: "Emily Wilson",
    menteeAvatar: "/placeholder.svg?height=40&width=40",
    topic: "Career Guidance in Tech",
    skills: ["Career Planning", "Interview Prep"],
    message: "I'm looking for guidance on transitioning from a junior to senior developer role.",
  },
  {
    id: 2,
    menteeName: "Ryan Garcia",
    menteeAvatar: "/placeholder.svg?height=40&width=40",
    topic: "Web Development Fundamentals",
    skills: ["HTML/CSS", "JavaScript"],
    message: "I'm a beginner looking to build my first portfolio website and would appreciate your guidance.",
  },
]

export default function MentorshipRequests() {
  return (
    <div className="space-y-4">
      {mentorshipRequests.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You have no pending mentorship requests</p>
        </div>
      ) : (
        mentorshipRequests.map((request) => (
          <div key={request.id} className="p-4 border rounded-lg">
            <div className="flex items-start gap-4 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={request.menteeAvatar || "/placeholder.svg"} alt={request.menteeName} />
                <AvatarFallback>{request.menteeName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium">{request.menteeName}</h4>
                <p className="text-sm font-medium">{request.topic}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {request.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">"{request.message}"</p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm">
                Decline
              </Button>
              <Button size="sm">Accept</Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
