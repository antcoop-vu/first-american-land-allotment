import LandingPageClient from "@/components/LandingPageClient";
import { apiUrlBuilder } from "@/lib/utils";


async function fetchFeaturedStoryMap(id: string) {
  const fetchURL = apiUrlBuilder(`collections/story_maps/entries/${id}`);

  try {
    const response = await fetch(fetchURL, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error('Failed to fetch featured story map');
    }

    const { data } = await response.json();

    return data ? { data } : { error: 'No featured story map found' };
  } catch (error) {
    console.error('Error fetching featured story map:', error);
    return { error: error.message };
  }
}

async function fetchData() {
  const fetchURL = apiUrlBuilder('collections/pages/entries', { 'filter[slug]': 'first-american-land-allotments', 'include': 'featured_story_map' });

  try {
    const response = await fetch(fetchURL, { next: { revalidate: 0 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const { data } = await response.json();

    if (data && data[0]?.featured_story_map) {
      const storyMapResult = await fetchFeaturedStoryMap(data[0].featured_story_map.id);

      if (storyMapResult.data) {
        data[0].featured_story_map = storyMapResult.data;
      } else {
        console.error('Error fetching featured story map details:', storyMapResult.error);
      }
    }

    return data ? { data: data[0] } : { error: 'No data found' };
  } catch(error) {
    console.error('Error fetching data:', error);
    return { error: error.message };
  }
}

export default async function LandingPage() {
  const { data } = await fetchData();
  return <LandingPageClient data={data} />;
}
