import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import StoryMapCard from "@/components/story-map-card"

// Sample story map data - in a real app, this would come from a database or API
const storyMaps = [
  {
    id: "dawes-act",
    title: "The Dawes Act and Its Impact",
    description: "Explore how the 1887 Dawes Act transformed indigenous land ownership across America.",
    image: "https://images.unsplash.com/photo-1501724326152-7a82bf5eae72?q=80&w=3187&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 2023"
  },
  {
    id: "oklahoma-allotments",
    title: "Oklahoma Land Allotments",
    description: "A detailed look at the allotment of tribal lands in Oklahoma Territory.",
    image: "https://images.unsplash.com/photo-1605377347958-e8bd4c00ba1d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "November 2022"
  },
  {
    id: "reservation-boundaries",
    title: "Changing Reservation Boundaries",
    description: "Visualizing how reservation boundaries have changed over the past century.",
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "August 2022"
  },
  {
    id: "allotment-legacy",
    title: "The Legacy of Allotment",
    description: "Understanding the long-term consequences of allotment policies on tribal communities today.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "May 2022"
  },
  {
    id: "tribal-sovereignty",
    title: "Tribal Sovereignty and Land",
    description: "Examining the relationship between land ownership and tribal sovereignty.",
    image: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "January 2022"
  },
  {
    id: "urban-indigenous",
    title: "Urban Indigenous Communities",
    description: "How allotment policies contributed to urban migration of indigenous peoples.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=3244&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 2021"
  }
]

export default function StoryMapsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=3035&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Story Maps background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Story Maps</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">
            Explore interactive narratives that combine maps, images, and text to tell the stories of First American land allotments.
          </p>
        </div>
      </section>

      {/* Story Maps Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storyMaps.map((storyMap) => (
              <StoryMapCard 
                key={storyMap.id}
                id={storyMap.id}
                title={storyMap.title}
                description={storyMap.description}
                image={storyMap.image}
                date={storyMap.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Create Your Own Story Map</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Are you a researcher or community member with a story to tell about First American land allotments?
            We provide tools and resources to help you create your own interactive story maps.
          </p>
          <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">First American Land Allotment</h3>
              <p className="text-slate-300">
                Preserving and documenting indigenous land history through interactive resources.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/story-maps" className="text-slate-300 hover:text-white">
                    Story Maps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Data Downloads
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-slate-300 hover:text-white">
                    Research Papers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <p className="text-slate-300 mb-4">
                Subscribe to our newsletter for updates on new resources and research.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-slate-800 text-white rounded-l focus:outline-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} First American Land Allotment Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 