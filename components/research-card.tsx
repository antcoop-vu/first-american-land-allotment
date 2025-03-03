import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FeaturedResearchProps {
  id: number
  title: string
  summary: string
  image: string
  link: string
  author: string
  publishedDate: string
}

export default function FeaturedResearch({
  id,
  title,
  summary,
  image,
  link,
  author,
  publishedDate,
}: FeaturedResearchProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={600}
        className="object-cover w-full h-96"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">
          By {author} on {new Date(publishedDate).toLocaleDateString()}
        </p>
        <p className="text-lg text-white mb-6 max-w-xl">{summary}</p>
        <Link href={link}>
          <Button variant="default">Read Full Article</Button>
        </Link>
      </div>
    </div>
  )
}
