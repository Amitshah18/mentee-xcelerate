import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Connect, Learn, and Earn with SkillTrade
            </h1>
            <p className="text-xl text-muted-foreground">
              A platform where college alumni mentor juniors through skill trading and token-based rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/mentors">Find Mentors</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform -rotate-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium">Connect</h3>
                  <p className="text-sm text-muted-foreground">Find the perfect mentor match</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform rotate-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium">Learn</h3>
                  <p className="text-sm text-muted-foreground">Gain valuable skills and knowledge</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform rotate-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="font-medium">Grow</h3>
                  <p className="text-sm text-muted-foreground">Develop personally and professionally</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform -rotate-2 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
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
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" x2="12" y1="8" y2="16"></line>
                      <line x1="8" x2="16" y1="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="font-medium">Earn</h3>
                  <p className="text-sm text-muted-foreground">Get rewarded with tokens for sharing knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
