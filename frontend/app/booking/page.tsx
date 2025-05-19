"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Session booked successfully",
        description: "Your mentorship session has been scheduled.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Book a Mentorship Session</h1>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Mentor Details</CardTitle>
              <CardDescription>You are booking a session with this mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Alex Johnson" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Alex Johnson</h3>
                  <p className="text-muted-foreground">Senior Software Engineer at Google</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">50 tokens per hour</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Your Token Balance</CardTitle>
              <CardDescription>Tokens available for booking sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">120</p>
                  <p className="text-sm text-muted-foreground">Available tokens</p>
                </div>
                <Button variant="outline">Add Tokens</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
              <CardDescription>Fill in the details for your mentorship session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-type">Session Type</Label>
                <select
                  id="session-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="one-on-one">One-on-One Session</option>
                  <option value="group">Group Session (up to 3 mentees)</option>
                  <option value="workshop">Workshop (4+ mentees)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-topic">Session Topic</Label>
                <Input id="session-topic" placeholder="e.g., Career Guidance, Technical Interview Prep" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-slot">Time Slot</Label>
                  <select
                    id="time-slot"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a time slot</option>
                    <option value="9:00">9:00 AM - 10:00 AM</option>
                    <option value="10:00">10:00 AM - 11:00 AM</option>
                    <option value="11:00">11:00 AM - 12:00 PM</option>
                    <option value="13:00">1:00 PM - 2:00 PM</option>
                    <option value="14:00">2:00 PM - 3:00 PM</option>
                    <option value="15:00">3:00 PM - 4:00 PM</option>
                    <option value="16:00">4:00 PM - 5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (hours)</Label>
                <select
                  id="duration"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="1">1 hour (50 tokens)</option>
                  <option value="1.5">1.5 hours (75 tokens)</option>
                  <option value="2">2 hours (100 tokens)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Session Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you'd like to discuss or learn in this session"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="font-medium">Total: 50 tokens</p>
                <p className="text-sm text-muted-foreground">For 1 hour session</p>
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Book Session"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
