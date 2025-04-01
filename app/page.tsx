import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import FeatureCard from "@/components/feature-card";
import StoryMapHighlight from "@/components/story-map-highlight";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Landscape background"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-cream drop-shadow-lg leading-tight">
              First American Land Allotments
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-cream/90 drop-shadow-md leading-relaxed">
              Explore the history and geography of First American land
              allotments through interactive maps, research, and comprehensive
              data resources.
            </p>
            <Link href="/data">
              <Button className="h-14 rounded-md text-muted text-lg bg-accent hover:bg-accent/90 px-8 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Explore the Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-earth text-center">
              About Our Project
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>
            <p className="text-lg md:text-xl text-earth/90 leading-relaxed mb-6">
              The First American Land Allotment project documents the historical
              distribution and changes of indigenous lands across North America.
              Our resources provide researchers, educators, and community
              members with tools to understand the complex history of land
              ownership, treaties, and federal policies that have shaped tribal
              territories over time.
            </p>
            <p className="text-lg md:text-xl text-earth/90 leading-relaxed">
              Through interactive maps, comprehensive data sets, and in-depth
              research, we aim to preserve this critical history and support
              indigenous communities in documenting their land rights.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cream text-center">
            Our Resources
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <FeatureCard
              title="Story Maps"
              description="Explore interactive narratives that combine maps, images, and text to tell the stories of First American land allotments."
              buttonText="Explore story maps"
            />

            <FeatureCard
              title="Data"
              description="Access comprehensive datasets on historical land allotments, including boundaries, dates, and ownership records."
              buttonText="Explore the dashboard"
            />

            <FeatureCard
              title="Research"
              description="Discover scholarly articles, primary sources, and analysis on the history and impact of land allotment policies."
              buttonText="Explore the research"
            />
          </div>
        </div>
      </section>

      {/* Story Map Highlight with Background */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-earth text-center">
            Featured Story Map
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-16 rounded-full"></div>
          <StoryMapHighlight />
        </div>
      </section>
    </div>
  );
}
