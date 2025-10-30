import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StoryMapHighlight( { data, label }: { data?: { title: string; description: string; image: string; cta: { text: string; href: string; }; }, label: string } ) {
  return (
    <div className="bg-muted rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-[300px] lg:h-auto overflow-hidden">
          <Image
            src={data?.['featured_image']?.['permalink'] || null}
            alt="Story Map Preview"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-accent font-semibold mb-2 uppercase">{label || 'Featured'}</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-earth">
            {data?.['title'] || 'The Dawes Act and Its Impact'}
          </h3>
          <p className="text-earth-400 mb-6">
            {data?.['description'] || ''}
          </p>

          <Link href={data?.['cta']?.['href'] || '#'} className="mt-auto">
            <Button className="group text-md py-6 bg-accent hover:bg-accent/90">
              {data?.['cta']?.['text'] || 'Explore the Story Map'}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
