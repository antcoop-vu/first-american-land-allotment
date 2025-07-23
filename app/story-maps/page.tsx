import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import StoryMapsClient from "@/components/story-maps-client";

// Sample story map data - in a real app, this would come from a database or API
const storyMaps = [
  {
    id: "dawes-act",
    title: "The Dawes Act and Its Impact",
    description:
      "Explore how the 1887 Dawes Act transformed indigenous land ownership across America.",
    image:
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 2023",
  },
  {
    id: "oklahoma-allotments",
    title: "Oklahoma Land Allotments",
    description:
      "A detailed look at the allotment of tribal lands in Oklahoma Territory.",
    image:
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "November 2022",
  },
  {
    id: "reservation-boundaries",
    title: "Changing Reservation Boundaries",
    description:
      "Visualizing how reservation boundaries have changed over the past century.",
    image:
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "August 2022",
  },
  {
    id: "allotment-legacy",
    title: "The Legacy of Allotment",
    description:
      "Understanding the long-term consequences of allotment policies on tribal communities today.",
    image:
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "May 2022",
  },
  {
    id: "tribal-sovereignty",
    title: "Tribal Sovereignty and Land",
    description:
      "Examining the relationship between land ownership and tribal sovereignty.",
    image:
      "https://images.unsplash.com/photo-1551142457-6d10b308d9c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "January 2022",
  },
  {
    id: "urban-indigenous",
    title: "Urban Indigenous Communities",
    description:
      "How allotment policies contributed to urban migration of indigenous peoples.",
    image:
      "https://images.unsplash.com/photo-1518985622188-c4316b4d9c6f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 2021",
  },
];

const ITEMS_PER_PAGE = 3;

export default function StoryMapsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <header className="relative py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-50">
              Story Maps
            </h1>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-50/90 max-w-2xl">
              Explore interactive narratives that combine maps, images, and text
              to tell the stories of First American land allotments.
            </p>
          </div>
        </div>
      </header>

      {/* Story Maps Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <StoryMapsClient storyMaps={storyMaps} itemsPerPage={ITEMS_PER_PAGE} />
        </div>
      </section>
    </div>
  );
}
