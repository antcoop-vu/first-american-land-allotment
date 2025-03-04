import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface StoryMapCardProps {
  id: string
  title: string
  description: string
  image: string
  date: string
}

export default function StoryMapCard({ id, title, description, image, date }: StoryMapCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600 mb-4 flex-grow">{description}</p>
        <Link href={`/story-maps/${id}`} className="mt-auto">
          <Button variant="default" className="w-full">
            Explore Story Map
          </Button>
        </Link>
      </div>
    </div>
  )
} 