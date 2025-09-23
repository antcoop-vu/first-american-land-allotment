"use client";

import { useState, useMemo } from "react";
import StoryMapCard from "@/components/story-map-card";
import StoryMapsPagination from "@/components/story-maps-pagination";
import { formatDate } from "@/lib/utils";

interface StoryMap {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface StoryMapsClientProps {
  storyMaps: StoryMap[];
  itemsPerPage: number;
}

export default function StoryMapsClient({
  storyMaps,
  itemsPerPage,
}: StoryMapsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { paginatedStoryMaps, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginated = storyMaps.slice(startIndex, endIndex);
    const total = Math.ceil(storyMaps.length / itemsPerPage);

    return {
      paginatedStoryMaps: paginated,
      totalPages: total,
    };
  }, [currentPage, storyMaps, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      {/* Results Info */}
      <div className="mb-8">
        <p className="text-slate-600 text-sm">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, storyMaps.length)} of{" "}
          {storyMaps.length} story maps
        </p>
      </div>

      {/* Grid with transition */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
          isTransitioning ? "opacity-40" : "opacity-100"
        }`}
      >
        {paginatedStoryMaps.map((storyMap) => (
          <StoryMapCard
            key={storyMap.id}
            id={storyMap.id}
            title={storyMap.title}
            description={storyMap.description}
            image={storyMap.image}
            date={formatDate(storyMap.date)}
          />
        ))}
      </div>

      {/* Pagination */}
      <StoryMapsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}