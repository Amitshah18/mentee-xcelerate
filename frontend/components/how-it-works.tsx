import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, MessageSquare, Wallet } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">How SkillTrade Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our platform makes it easy to connect with mentors, learn new skills, and earn tokens through knowledge
          sharing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-medium">
              1
            </div>
            <h3 className="text-lg font-medium mb-2">Create Your Profile</h3>
            <p className="text-muted-foreground">Sign up and create your profile, listing your skills and interests.</p>
          </CardContent>
        </Card>

        <div className="hidden lg:flex items-center justify-center text-muted-foreground">
          <ArrowRight className="h-6 w-6" />
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-medium">
              2
            </div>
            <h3 className="text-lg font-medium mb-2">Connect with Mentors</h3>
            <p className="text-muted-foreground">
              Browse and connect with alumni mentors who match your learning goals.
            </p>
          </CardContent>
        </Card>

        <div className="hidden lg:flex items-center justify-center text-muted-foreground">
          <ArrowRight className="h-6 w-6" />
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-medium">
              3
            </div>
            <h3 className="text-lg font-medium mb-2">Schedule Sessions</h3>
            <p className="text-muted-foreground">
              Book mentorship sessions using tokens as payment for the mentor's time.
            </p>
          </CardContent>
        </Card>

        <div className="hidden lg:flex items-center justify-center text-muted-foreground">
          <ArrowRight className="h-6 w-6" />
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-medium">
              4
            </div>
            <h3 className="text-lg font-medium mb-2">Earn & Spend Tokens</h3>
            <p className="text-muted-foreground">
              Earn tokens by sharing your knowledge and spend them to learn from others.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
