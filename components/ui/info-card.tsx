import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function InfoCard({ title, description, cta, url }: { title: string; description?: string; cta?: string; url?: string }) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl shadow-md mb-8 border-l-4 border-accent">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-earth mb-3">
            {title}
          </h3>
          <p className="text-earth/80">
            {description}
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          <Link href={url} className="inline-flex">
            <Button size="lg" className="px-4 py-2 bg-teal text-white rounded-md hover:bg-teal/80 transition-colors focus:outline-none focus:ring-2 focus:ring-teal">
              {cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;