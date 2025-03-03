"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-8 bg-slate-300">
              {/* Replace with actual logo */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-semibold">
                FALA Project
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="flex items-center">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    History
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/story-maps" className="text-slate-700 hover:text-slate-900">
              Story Maps
            </Link>

            <Link href="/research" className="text-slate-700 hover:text-slate-900">
              Research
            </Link>

            <Link href="/tutorials" className="text-slate-700 hover:text-slate-900">
              Tutorials
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="flex items-center">
                  Data <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Downloads
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    API
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Documentation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-slate-700 hover:text-slate-900">
              Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center">
            <button className="p-2 text-slate-700 hover:text-slate-900">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="ml-4 p-2 text-slate-700 hover:text-slate-900 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block py-2 text-slate-700 hover:text-slate-900 border-b border-slate-100"
            >
              About
            </Link>
            <Link
              href="/story-maps"
              className="block py-2 text-slate-700 hover:text-slate-900 border-b border-slate-100"
            >
              Story Maps
            </Link>
            <Link
              href="/research"
              className="block py-2 text-slate-700 hover:text-slate-900 border-b border-slate-100"
            >
              Research
            </Link>
            <Link
              href="/tutorials"
              className="block py-2 text-slate-700 hover:text-slate-900 border-b border-slate-100"
            >
              Tutorials
            </Link>
            <Link
              href="#"
              className="block py-2 text-slate-700 hover:text-slate-900 border-b border-slate-100"
            >
              Data
            </Link>
            <Link href="/contact" className="block py-2 text-slate-700 hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
