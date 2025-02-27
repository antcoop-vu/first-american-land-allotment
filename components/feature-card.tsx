import Image from "next/image"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-slate-200 relative">
        {/* Placeholder for feature image */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          {title === "Story Maps" && (
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Story Maps"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
          {title === "Data" && (
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Data"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
          {title === "Research" && (
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Research"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Button variant="default" className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  )
}

