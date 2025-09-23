"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavigationContainer";
import FeatureCard from "@/components/feature-card";
import StoryMapHighlight from "@/components/story-map-highlight";
import Image from "next/image";

export interface LandingPageContent {
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    cta: {
      text: string;
      href: string;
    };
  };
  about: {
    title: string;
    description: string; // rich text (HTML/Markdown)
    cta: {
      text: string;
      href: string;
    };
  };
  features: Array<{
    title: string;
    description: string;
    buttonText: string;
    href: string;
    image?: string;
  }>;
  storyMapHighlight: {
    title: string;
    label: string;
    description: string;
    image: string;
    cta: {
      text: string;
      href: string;
    };
  };
}

export default function LandingPageClient({
  data,
  error,
}: {
  data: LandingPageContent;
  error?: string;
}) {
  const t = useTranslations("HomePage");

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("LandingPageClient data:", data);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            // src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
            src={data?.["hero_background_image"]?.["permalink"]}
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
              {data?.["hero_title"]}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-cream/90 drop-shadow-md leading-relaxed">
              {data?.["hero_description"]}
            </p>
            <Link
              href={data?.["hero_cta"]?.["href"]}
              className="inline-block group"
            >
              <Button className="h-14 rounded-md text-muted text-lg bg-accent hover:bg-accent/90 px-8 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                {data?.["hero_cta"]?.["text"]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto items-center justify-center content-center flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-earth text-center">
              {data?.["about_title"]}
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>
            <div
              className="text-lg md:text-xl text-earth/90 leading-relaxed mb-6 grid gap-y-4"
              dangerouslySetInnerHTML={{
                __html: data?.["about_description"] || "",
              }}
            />
            <Link
              href={data?.["about_cta"]?.["href"]}
              className="inline-block group mt-6"
            >
              <Button className="h-14 rounded-md text-muted text-lg bg-accent hover:bg-accent/90 px-8 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                {data?.["about_cta"]?.["text"]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cream text-center">
            {data?.["features_title"] || "Our Resources"}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {data?.["features"]?.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature?.["title"]}
                description={feature?.["description"]}
                buttonText={feature?.["button_text"]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Map Highlight with Background */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-earth text-center">
            {data?.["story_map"]?.["title"] || "Featured Story Map"}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-16 rounded-full"></div>
          <StoryMapHighlight
            data={data?.["featured_story_map"]}
            label={data?.["story_map_label"]}
          />
        </div>
      </section>
    </>
  );
}
