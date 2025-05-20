import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-5 w-[500px]" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-[100px] mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-6 w-[100px] mt-6 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3">
          <div className="space-y-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Skeleton className="h-16 w-16 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-[200px]" />
                        <Skeleton className="h-4 w-[150px]" />
                        <div className="flex gap-2">
                          <Skeleton className="h-6 w-20 rounded-full" />
                          <Skeleton className="h-6 w-20 rounded-full" />
                          <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-full mt-2" />
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex items-center justify-between border-t mt-4">
                    <Skeleton className="h-5 w-[100px]" />
                    <div className="flex gap-2">
                      <Skeleton className="h-9 w-[100px]" />
                      <Skeleton className="h-9 w-[100px]" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
