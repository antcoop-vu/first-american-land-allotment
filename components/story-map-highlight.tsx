import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function StoryMapHighlight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="bg-slate-200 rounded-lg overflow-hidden h-80 relative">
        {/* Placeholder for story map image */}
        <Image
          src="https://images.unsplash.com/photo-1501724326152-7a82bf5eae72?q=80&w=3187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured Story Map"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
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
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          Read More
        </Button>
      </div>
    </div>
  )
}

