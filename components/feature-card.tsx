import Image from "next/image"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  description: string
  buttonText: string
}

export default function FeatureCard({ title, description, buttonText }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-slate-200 relative">
        {/* Placeholder for feature image */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          {title === "Story Maps" && (
            <Image
              src="https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Story Maps"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
          {title === "Data" && (
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Data"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
          {title === "Research" && (
            <Image
              src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=3062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <Button variant="default" className="w-full text-md py-6 transition-all duration-300 hover:translate-y-[-2px]">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

