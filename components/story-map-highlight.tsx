import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapIcon } from "lucide-react"

export default function StoryMapHighlight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="bg-slate-200 rounded-lg overflow-hidden h-80 relative flex items-center justify-center">
        {/* Gray placeholder with map icon */}
        <MapIcon className="h-24 w-24 text-slate-400" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Story Map</h2>
        <p className="text-slate-700 mb-6">
          Explore our featured interactive story map that traces the history of the Dawes Act and its impact on tribal
          lands. This visual journey combines historical maps, photographs, and documents to illustrate how allotment
          policies transformed indigenous territories across generations.
        </p>
        <p className="text-slate-700 mb-6">
          Our interactive maps allow you to view land changes over time, understand the legal framework behind
          allotments, and see the lasting effects on contemporary tribal boundaries.
        </p>
        <Link href="/story-maps/dawes-act">
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}

