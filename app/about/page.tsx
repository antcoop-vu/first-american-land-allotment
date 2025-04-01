"use client"

import React from "react"
import Image from "next/image"
import NavBar from "@/components/nav-bar"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-slate-700">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">About the Project</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">
            Learn about Professor Emily Ritter and her vision for the First American Land Allotment Project
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Project Director */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Meet the Project Director</h2>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-1/3 relative h-64 mb-4 md:mb-0 overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/tutorials/drtitta.png"
                    alt="Professor Emily Ritter"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Professor Emily Ritter</h3>
                  <p className="text-sm text-slate-500 mb-4">PhD, Department of Political Science, Vanderbilt University</p>
                  <p className="text-slate-700 mb-4">
                    Professor Ritter's academic journey has been dedicated to exploring the intersection of human rights, 
                    political institutions, and historical justice. With a focus on how power dynamics shape policy outcomes, 
                    her research has provided important insights into the complex relationship between government actions 
                    and their impacts on marginalized communities.
                  </p>
                  <p className="text-slate-700">
                    At Vanderbilt University, she leads interdisciplinary research that bridges historical analysis with 
                    contemporary digital methodologies. Her work combines rigorous scholarship with accessible 
                    digital tools that make complex historical patterns visible to both academic and public audiences.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Origin Story */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Origin of the Project</h2>
              <p className="text-slate-700 mb-4">
                The First American Land Allotment Project began in Professor Ritter's seminar on political rights and 
                historical justice. While examining case studies of land policy impacts, she and her students 
                discovered significant gaps in accessible resources that visualized the dramatic transformation of 
                indigenous lands through federal policies.
              </p>
              <p className="text-slate-700 mb-4">
                "We kept encountering the same challenge," Professor Ritter explains. "The data existed in various 
                archives and databases, but there was no comprehensive way for communities, researchers, or students 
                to see and understand these land changes over time. The stories were there, but they needed to be made 
                visible."
              </p>
              <p className="text-slate-700">
                This realization led to an initial pilot project that mapped allotment patterns in one tribal nation. 
                The positive response from both community members and fellow researchers convinced Professor Ritter 
                of the need to expand the work into what has become the First American Land Allotment Project.
              </p>
            </section>
            
            {/* Vision and Approach */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Vision and Approach</h2>
              <p className="text-slate-700 mb-4">
                Professor Ritter's vision for the project emerged from her commitment to making historical justice 
                visible and accessible. "Understanding land history is essential for addressing contemporary inequities," 
                she notes. "But that understanding requires tools that help us see patterns and changes that occurred 
                over decades or even centuries."
              </p>
              <p className="text-slate-700 mb-4">
                Her approach combines several key elements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Collaborative partnerships with tribal communities to ensure project work respects and incorporates indigenous perspectives</li>
                <li>Integration of historical research with modern digital mapping technologies</li>
                <li>Development of interactive tools that allow users to explore complex historical data in intuitive ways</li>
                <li>Creation of educational resources that make this history accessible to diverse audiences</li>
              </ul>
              <p className="text-slate-700">
                "This isn't just about documenting what happened," Professor Ritter emphasizes. "It's about creating 
                tools that help us understand why it happened, how it impacted communities, and what it means for ongoing 
                questions of land rights and tribal sovereignty today."
              </p>
            </section>
            
            {/* Impact and Future Direction */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Impact and Future Direction</h2>
              <p className="text-slate-700 mb-4">
                Under Professor Ritter's leadership, the project has grown from a classroom initiative to a comprehensive 
                digital platform. To date, the project has mapped allotment histories across multiple tribal nations, 
                developed interactive story maps that have been used in educational settings from high schools to 
                graduate programs, and created open datasets that support ongoing research.
              </p>
              <p className="text-slate-700 mb-4">
                Looking ahead, Professor Ritter envisions expanding the project to include more tribal territories, 
                integrating oral histories and community knowledge into the digital resources, and developing new 
                tools for visualizing the connections between historical land policies and contemporary issues.
              </p>
              <p className="text-slate-700">
                "This is ongoing work," she explains. "We continue to learn from community partners, refine our 
                approaches, and develop new ways to make this history accessible and meaningful. The ultimate goal 
                is to create resources that serve both communities with direct connections to these histories and 
                broader audiences who need to understand this critical aspect of American history."
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}