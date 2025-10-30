import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const apiUrlBuilder = (path: string, queryParams?: Record<string, string>) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://allotment-cms.test/api'
  const url = new URL(`${baseUrl}/${path}`)

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }

  return url.toString()
}

// Utility function to format dates
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}