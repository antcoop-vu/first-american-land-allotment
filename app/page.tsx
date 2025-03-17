import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import FeatureCard from "@/components/feature-card"
import StoryMapHighlight from "@/components/story-map-highlight"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 lg:py-48 h-72">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Landscape background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-teal/40"></div>
          {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center my-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Welcome</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">
            Explore the history and geography of First American land allotments through interactive maps, research, and
            comprehensive data resources.
          </p>
          <Link href="/data">
            <Button variant="default">Explore the Dashboard</Button>
          </Link>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-16">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-slate-700 max-w-4xl">
            The First American Land Allotment project documents the historical distribution and changes of indigenous
            lands across North America. Our resources provide researchers, educators, and community members with tools
            to understand the complex history of land ownership, treaties, and federal policies that have shaped tribal
            territories over time. Through interactive maps, comprehensive data sets, and in-depth research, we aim to
            preserve this critical history and support indigenous communities in documenting their land rights.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Story Maps"
              description="Explore interactive narratives that combine maps, images, and text to tell the stories of First American land allotments."
            />

            <FeatureCard
              title="Data"
              description="Access comprehensive datasets on historical land allotments, including boundaries, dates, and ownership records."
            />

            <FeatureCard
              title="Research"
              description="Discover scholarly articles, primary sources, and analysis on the history and impact of land allotment policies."
            />
          </div>
        </div>
      </section>

      {/* Story Map Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-16">
          <StoryMapHighlight />
        </div>
      </section>

    </div>
  )
}

