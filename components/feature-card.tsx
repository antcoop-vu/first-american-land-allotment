import { Button } from "@/components/ui/button"
import { MapIcon, DatabaseIcon, BookOpenIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-slate-200 relative flex items-center justify-center">
        {/* Gray placeholder with icons */}
        {title === "Story Maps" && (
          <MapIcon className="h-16 w-16 text-slate-400" />
        )}
        {title === "Data" && (
          <DatabaseIcon className="h-16 w-16 text-slate-400" />
        )}
        {title === "Research" && (
          <BookOpenIcon className="h-16 w-16 text-slate-400" />
        )}
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

