import Link from "next/link";
import { apiUrlBuilder } from "@/lib/utils";

async function fetchFooterData() {
  try {
    const footerAPI = apiUrlBuilder("globals/footer");

    const response = await fetch(footerAPI, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error('Failed to fetch footer data');
    }

    const { data } = await response.json();

    return data || null;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
} 

export default async function Footer() {
  const footerData = await fetchFooterData();

  if (!footerData) {
    return null;
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">
          {footerData?.['title'] || 'First American Land Allotment'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-3">
            <p className="text-slate-300">
              {footerData?.['description'] || 'Preserving and documenting indigenous land history through interactive resources.'}
            </p>
          </div>
          <div className="col-span-2">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              {footerData?.['navigation_links']?.[0]?.['links']?.map((link: { url: string; text: string }, index: number) => (
                <li key={link + '-' + index}>
                  <Link
                    href={link.url}
                    className="text-slate-300 hover:text-white underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="text-slate-300 hover:text-white underline"
                >
                  Data
                </Link>
              </li>
              <li>
                <Link
                  href="/story-maps"
                  className="text-slate-300 hover:text-white underline"
                >
                  Story Maps
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-slate-300 hover:text-white underline"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-slate-300 hover:text-white underline"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white underline"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="col-span-3">
            <p className="text-slate-300 mb-4">
              {footerData?.['newsletter_title'] || 'Subscribe to our newsletter for the latest updates and resources.'}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-slate-800/50 text-white rounded-l-md focus:outline-none"
              />
              <button className="px-4 me-2 py-2 border bg-white border-teal hover:bg-accent text-teal hover:text-white rounded-r-md">
                {footerData?.['newsletter_cta'] || 'Subscribe'}
              </button>
            </div>
          </div> */}
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-slate-50">
          <p>
            © {new Date().getFullYear()} {footerData?.['copyright'] || 'First American Land Allotment. All rights reserved.'} 
          </p>
        </div>
      </div>
    </footer>
  );
}
