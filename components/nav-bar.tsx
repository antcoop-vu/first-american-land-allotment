import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-white py-6 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          First American Land Allotments
        </Link>
        <div className="space-x-6">
          <Link href="/story-maps" className="text-slate-600 text-xl hover:text-primary transition-colors">
            Story Maps
          </Link>
          <Link href="/data" className="text-slate-600 text-xl hover:text-primary transition-colors">
            Data
          </Link>
          <Link href="/research" className="text-slate-600 text-xl hover:text-primary transition-colors">
            Research
          </Link>
          <Link href="/about" className="text-slate-600 text-xl hover:text-primary transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

