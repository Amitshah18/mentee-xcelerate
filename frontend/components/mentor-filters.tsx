"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

export function MentorFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])

  const industries = [
    { id: "tech", label: "Technology" },
    { id: "finance", label: "Finance" },
    { id: "healthcare", label: "Healthcare" },
    { id: "marketing", label: "Marketing" },
    { id: "education", label: "Education" },
    { id: "consulting", label: "Consulting" },
  ]

  const expertise = [
    { id: "career-guidance", label: "Career Guidance" },
    { id: "leadership", label: "Leadership" },
    { id: "technical-skills", label: "Technical Skills" },
    { id: "interview-prep", label: "Interview Preparation" },
    { id: "resume-review", label: "Resume Review" },
    { id: "networking", label: "Networking" },
  ]

  const availability = [
    { id: "weekdays", label: "Weekdays" },
    { id: "weekends", label: "Weekends" },
    { id: "mornings", label: "Mornings" },
    { id: "evenings", label: "Evenings" },
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-4 md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <X size={16} /> : <Filter size={16} />}
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className={`${showFilters ? "block" : "hidden"} md:block space-y-6`}>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search mentors..." className="pl-8" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Industry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {industries.map((industry) => (
                <div key={industry.id} className="flex items-center space-x-2">
                  <Checkbox id={industry.id} />
                  <Label htmlFor={industry.id} className="text-sm font-normal">
                    {industry.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {expertise.map((skill) => (
                <div key={skill.id} className="flex items-center space-x-2">
                  <Checkbox id={skill.id} />
                  <Label htmlFor={skill.id} className="text-sm font-normal">
                    {skill.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Price Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{priceRange[0]}/hr</span>
                <span className="text-sm">₹{priceRange[1]}/hr</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {availability.map((time) => (
                <div key={time.id} className="flex items-center space-x-2">
                  <Checkbox id={time.id} />
                  <Label htmlFor={time.id} className="text-sm font-normal">
                    {time.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button className="w-full">Apply Filters</Button>
      </div>
    </>
  )
}
