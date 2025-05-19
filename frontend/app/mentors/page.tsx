import { MentorList } from "@/components/mentor-list"
import { MentorFilters } from "@/components/mentor-filters"

export default function MentorsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Find Your Perfect Mentor</h1>
        <p className="text-muted-foreground">
          Browse our network of industry experts ready to help you achieve your career goals.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <MentorFilters />
        </div>
        <div className="md:col-span-3">
          <MentorList />
        </div>
      </div>
    </div>
  )
}
