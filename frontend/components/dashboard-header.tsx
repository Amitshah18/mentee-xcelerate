import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Rahul!</h1>
          <p className="text-muted-foreground">Here's what's happening with your mentorship journey.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=RS" alt="Rahul Sharma" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Session</p>
              <p className="font-medium">Today, 4:00 PM with Rajiv Kumar</p>
            </div>
            <Button size="sm" className="ml-auto">
              Join
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
              <p className="font-medium">2 pre-session questionnaires</p>
            </div>
            <Button size="sm" variant="outline" className="ml-auto">
              View
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Unread Messages</p>
              <p className="font-medium">3 new messages from mentors</p>
            </div>
            <Button size="sm" variant="outline" className="ml-auto">
              Read
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
