"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, VideoIcon, VideoOff, Phone, MessageSquare, Share, MoreVertical } from "lucide-react"

export default function VideoCallPage({ params }: { params: { id: string } }) {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    {
      sender: "Rajiv Kumar",
      text: "Hello! Welcome to our mentoring session. How are you doing today?",
      time: "10:01 AM",
    },
    {
      sender: "You",
      text: "Hi Rajiv! I'm doing well, thank you. I'm excited to discuss career growth in tech leadership.",
      time: "10:02 AM",
    },
    {
      sender: "Rajiv Kumar",
      text: "Great! Let's start by discussing your current role and where you'd like to be in the next few years.",
      time: "10:03 AM",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          sender: "You",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setNewMessage("")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-4">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-12rem)]">
            {/* Main Video Area */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="relative bg-muted rounded-lg overflow-hidden flex-1 min-h-[300px]">
                {isVideoOn ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=600&width=800&text=Mentor+Video"
                      alt="Mentor Video"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="/placeholder.svg?height=128&width=128&text=RK" alt="Rajiv Kumar" />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                  </div>
                )}

                {/* Self view */}
                <div className="absolute bottom-4 right-4 w-48 h-36 bg-background rounded-lg overflow-hidden border shadow-lg">
                  {isVideoOn ? (
                    <img
                      src="/placeholder.svg?height=144&width=192&text=You"
                      alt="Your Video"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Controls */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${!isMicOn ? "bg-red-100 text-red-500 dark:bg-red-900" : ""}`}
                  onClick={() => setIsMicOn(!isMicOn)}
                >
                  {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${!isVideoOn ? "bg-red-100 text-red-500 dark:bg-red-900" : ""}`}
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
                <Button variant="destructive" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat and Resources */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <Tabs defaultValue="chat" className="h-full flex flex-col">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="chat">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat
                    </TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chat" className="flex-1 flex flex-col">
                    <CardContent className="flex-1 overflow-hidden p-4">
                      <div
                        ref={chatContainerRef}
                        className="h-full overflow-y-auto space-y-4 pr-2"
                        style={{ maxHeight: "calc(100vh - 16rem)" }}
                      >
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.sender === "You"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-xs">{message.sender}</span>
                                <span className="text-xs opacity-70">{message.time}</span>
                              </div>
                              <p className="text-sm">{message.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-4 border-t">
                      <form onSubmit={sendMessage} className="flex gap-2">
                        <Input
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <Button type="submit">Send</Button>
                      </form>
                    </div>
                  </TabsContent>
                  <TabsContent value="resources" className="flex-1 overflow-auto">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-4">Shared Resources</h3>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
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
                              className="h-5 w-5 text-red-500"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <div>
                              <p className="font-medium text-sm">Tech Leadership Guide.pdf</p>
                              <p className="text-xs text-muted-foreground">Shared by Rajiv Kumar</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
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
                              className="h-5 w-5 text-blue-500"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <div>
                              <p className="font-medium text-sm">Career Growth Roadmap.docx</p>
                              <p className="text-xs text-muted-foreground">Shared by Rajiv Kumar</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
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
                              className="h-5 w-5 text-green-500"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <line x1="9" y1="3" x2="9" y2="21" />
                            </svg>
                            <div>
                              <p className="font-medium text-sm">Leadership Skills Assessment.xlsx</p>
                              <p className="text-xs text-muted-foreground">Shared by Rajiv Kumar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
