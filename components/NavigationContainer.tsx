import React from "react";
import Navigation from "./Navigation";
import { apiUrlBuilder } from "@/lib/utils";

async function fetchNavigationData() {
  try {
    const navigationAPI = apiUrlBuilder("globals/navigation");
    const response = await fetch(navigationAPI, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error('Failed to fetch navigation data');
    }

    const { data } = await response.json();

    return data || null;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
} 

export default async function NavBar() {
  const navigationData = await fetchNavigationData();

  if (!navigationData) {
    return null;
  }

  return (
    <>
      <Navigation navigationData={navigationData} />
    </>
  );
}

