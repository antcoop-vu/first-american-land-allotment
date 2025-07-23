import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">
          First American Land Allotment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-3">
            <p className="text-slate-300">
              Preserving and documenting indigenous land history through
              interactive resources.
            </p>
          </div>
          <div className="col-span-2">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>
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
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for updates on new resources and
              research.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-slate-800/50 text-white rounded-l-md focus:outline-none"
              />
              <button className="px-4 me-2 py-2 border bg-white border-teal hover:bg-accent text-teal hover:text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-slate-50">
          <p>
            © {new Date().getFullYear()} First American Land Allotment Project.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
