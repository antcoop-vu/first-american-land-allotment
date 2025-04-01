import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function StoryMapHighlight() {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-[300px] lg:h-auto overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1583504387146-cb7d78e6dfe3?q=80&w=3196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Story Map Preview" fill className="object-cover" />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-primary font-semibold mb-2">FEATURED</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Dawes Act and Its Impact</h3>
          <p className="text-slate-600 mb-6">
            Explore how the 1887 Dawes Act fundamentally changed land ownership patterns for Native American tribes,
            leading to the loss of more than 90 million acres of tribal land by 1934.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Historical</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Interactive</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Educational</span>
          </div>
          <Link href="/story-maps/dawes-act" className="mt-auto">
            <Button className="group">
              View Story Map
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

