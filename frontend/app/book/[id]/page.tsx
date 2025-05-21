"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, CalendarIcon, Video, MessageSquare } from "lucide-react"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)

  // Mock mentor data - in a real app, you would fetch this based on the ID
  const mentor = {
    id: params.id,
    name: "Rajiv Kumar",
    avatar: "RK",
    role: "CTO at TechGlobal",
    industry: "Technology",
    expertise: ["Tech Leadership", "Software Architecture", "Career Growth"],
    rating: 4.9,
    reviews: 124,
    price: 2000,
    bio: "15+ years of experience in tech leadership roles. I help professionals navigate their tech careers and develop leadership skills.",
  }

  // Mock time slots
  const timeSlots = [
    { id: "1", time: "09:00 AM - 10:00 AM", available: true },
    { id: "2", time: "10:30 AM - 11:30 AM", available: false },
    { id: "3", time: "12:00 PM - 01:00 PM", available: true },
    { id: "4", time: "02:30 PM - 03:30 PM", available: true },
    { id: "5", time: "04:00 PM - 05:00 PM", available: false },
    { id: "6", time: "05:30 PM - 06:30 PM", available: true },
    { id: "7", time: "07:00 PM - 08:00 PM", available: true },
  ]

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Book a Session</h1>
            <p className="text-muted-foreground">Schedule a mentoring session with {mentor.name}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Mentor Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage
                        src={`/placeholder.svg?height=96&width=96&text=${mentor.avatar}`}
                        alt={mentor.name}
                      />
                      <AvatarFallback>{mentor.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{mentor.role}</p>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>₹{mentor.price}/hour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Session</CardTitle>
                  <CardDescription>Select a date and time that works for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="calendar" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                      <TabsTrigger value="list">List View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="calendar" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-4">Select a Date</h3>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            disabled={{ before: new Date() }}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium mb-4">Available Time Slots</h3>
                          <div className="space-y-3">
                            {timeSlots.map((slot) => (
                              <div
                                key={slot.id}
                                className={`flex items-center justify-between p-3 rounded-md border ${
                                  slot.available
                                    ? selectedTimeSlot === slot.id
                                      ? "border-primary bg-primary/10"
                                      : "hover:border-primary cursor-pointer"
                                    : "opacity-50"
                                }`}
                                onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                              >
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{slot.time}</span>
                                </div>
                                <Badge variant={slot.available ? "outline" : "secondary"}>
                                  {slot.available ? "Available" : "Booked"}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="list">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          View all available slots for the next 7 days in a list format.
                        </p>
                        {/* List view content would go here */}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Session Details</h3>
                      <Select defaultValue="60">
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes - ₹{mentor.price / 2}</SelectItem>
                          <SelectItem value="60">60 minutes - ₹{mentor.price}</SelectItem>
                          <SelectItem value="90">90 minutes - ₹{(mentor.price * 1.5).toFixed(0)}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Session Type</h3>
                      <Select defaultValue="video">
                        <SelectTrigger>
                          <SelectValue placeholder="Select session type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">
                            <div className="flex items-center">
                              <Video className="h-4 w-4 mr-2" />
                              <span>Video Call</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="chat">
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              <span>Chat Session</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">What would you like to discuss?</h3>
                      <Textarea
                        placeholder="Share your goals for this session and any specific topics you'd like to cover..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div>
                    <p className="font-medium">Total: ₹{mentor.price}</p>
                    <p className="text-sm text-muted-foreground">60 minute session</p>
                  </div>
                  <Button disabled={!selectedTimeSlot}>
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
