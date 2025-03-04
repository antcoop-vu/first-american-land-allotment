"use client"

import React from "react"
import Link from "next/link"
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpenIcon, 
  FileTextIcon, 
  MapIcon, 
  UsersIcon, 
  DatabaseIcon, 
  SearchIcon, 
  BookmarkIcon,
  CalendarIcon,
  FileIcon,
  ClipboardIcon,
  ArrowRightIcon,
  LinkIcon
} from "lucide-react"

export default function ResearchPage() {
  // Colors from screenshot
  const colors = {
    cream: "#faf3d9",     // Light cream/beige
    teal: "#a7ccc7",      // Soft teal/aqua
    navy: "#1e3641",      // Dark navy blue
    amber: "#d9b46e"      // Golden amber
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.cream }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ backgroundColor: colors.navy }} className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Historical Research Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore primary documents, oral histories, and academic research to trace Native land allotments and understand the complex history of Indigenous land rights.
          </p>
        </div>
      </section>

      {/* Research Navigation */}
      <section style={{ backgroundColor: colors.teal }} className="py-8 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.navy }}>Research Collections</h2>
          <Tabs defaultValue="documents" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <TabsTrigger value="documents" style={{ color: colors.navy }}>
                <FileTextIcon className="w-4 h-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="maps" style={{ color: colors.navy }}>
                <MapIcon className="w-4 h-4 mr-2" />
                Maps
              </TabsTrigger>
              <TabsTrigger value="oral" style={{ color: colors.navy }}>
                <UsersIcon className="w-4 h-4 mr-2" />
                Oral Histories
              </TabsTrigger>
              <TabsTrigger value="academic" style={{ color: colors.navy }}>
                <BookOpenIcon className="w-4 h-4 mr-2" />
                Academic
              </TabsTrigger>
            </TabsList>
            <TabsContent value="documents" className="mt-6 p-4 rounded-md bg-white shadow">
              <p className="mb-3" style={{ color: colors.navy }}>
                Browse thousands of digitized historical documents including allotment certificates, 
                treaty texts, and government correspondence from the Dawes Act era through the Indian 
                Reorganization Act of 1934.
              </p>
              <div className="flex justify-end">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  View Document Archives
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="maps" className="mt-6 p-4 rounded-md bg-white shadow">
              <p className="mb-3" style={{ color: colors.navy }}>
                Access historical maps showing tribal territories, reservation boundaries, and 
                individual land allotments. Our collection includes government survey maps, 
                hand-drawn territorial maps, and modern GIS overlays.
              </p>
              <div className="flex justify-end">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  Explore Map Collection
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="oral" className="mt-6 p-4 rounded-md bg-white shadow">
              <p className="mb-3" style={{ color: colors.navy }}>
                Listen to and read transcripts of interviews with tribal elders, historians, and 
                community members discussing their family's land history and traditional knowledge 
                about specific locations and territories.
              </p>
              <div className="flex justify-end">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  Access Oral Histories
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="academic" className="mt-6 p-4 rounded-md bg-white shadow">
              <p className="mb-3" style={{ color: colors.navy }}>
                Review scholarly articles, books, and research papers on Native American land allotment, 
                federal Indian policy, and tribal history. Includes resources from historians, legal 
                scholars, anthropologists, and Indigenous studies researchers.
              </p>
              <div className="flex justify-end">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  Browse Academic Resources
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.navy }}>
            Featured Research Collections
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-md overflow-hidden" style={{ borderColor: colors.teal }}>
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/api/placeholder/400/200" alt="Dawes Rolls Collection" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  <span className="text-sm font-semibold">1887-1914</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.navy }}>Dawes Rolls Collection</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive digital archive of the Dawes Rolls, the official census of the Five Civilized Tribes 
                  used to allocate land during the allotment era. Includes original enrollment cards, applications, 
                  correspondence, and searchable indexes for Cherokee, Chickasaw, Choctaw, Creek, and Seminole citizens.
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <DatabaseIcon className="w-4 h-4 mr-1" />
                  <span>112,476 records</span>
                  <div className="mx-2">•</div>
                  <FileIcon className="w-4 h-4 mr-1" />
                  <span>24,325 documents</span>
                </div>
                <Button style={{ backgroundColor: colors.navy, color: 'white' }} className="w-full">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md overflow-hidden" style={{ borderColor: colors.teal }}>
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/api/placeholder/400/200" alt="Tribal Territory Maps" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: colors.amber, color: colors.navy }}>
                  <span className="text-sm font-semibold">1830-1920</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.navy }}>Tribal Territory Maps</h3>
                <p className="text-gray-700 mb-4">
                  Historical cartographic collection showing changing tribal territories over time, from pre-removal 
                  boundaries through reservation creation and allotment periods. Features rare government survey 
                  maps, General Land Office plats, and early hand-drawn territorial maps from tribal archives.
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapIcon className="w-4 h-4 mr-1" />
                  <span>4,872 maps</span>
                  <div className="mx-2">•</div>
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>90 year span</span>
                </div>
                <Button style={{ backgroundColor: colors.navy, color: 'white' }} className="w-full">
                  View Map Archive
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md" style={{ borderColor: colors.teal }}>
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                  <FileTextIcon className="w-6 h-6" style={{ color: colors.navy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Bureau of Indian Affairs Records</h3>
                <p className="text-gray-700 mb-4">
                  Digitized BIA administrative files, correspondence, and reports regarding land allotments, 
                  sales, and transfers from agency offices nationwide.
                </p>
                <Button variant="outline" style={{ color: colors.navy, borderColor: colors.teal }} className="w-full">
                  Access Records
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md" style={{ borderColor: colors.teal }}>
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                  <UsersIcon className="w-6 h-6" style={{ color: colors.navy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Tribal Elder Interviews</h3>
                <p className="text-gray-700 mb-4">
                  Audio recordings and transcripts of interviews with tribal elders discussing family land histories, 
                  allotment impacts, and traditional territorial knowledge.
                </p>
                <Button variant="outline" style={{ color: colors.navy, borderColor: colors.teal }} className="w-full">
                  Listen to Stories
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md" style={{ borderColor: colors.teal }}>
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                  <BookOpenIcon className="w-6 h-6" style={{ color: colors.navy }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Academic Research Papers</h3>
                <p className="text-gray-700 mb-4">
                  Scholarly articles and research papers examining the legal, social, and economic impacts of 
                  allotment policies on Native American communities.
                </p>
                <Button variant="outline" style={{ color: colors.navy, borderColor: colors.teal }} className="w-full">
                  Read Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Methods */}
      <section style={{ backgroundColor: colors.teal }} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.navy }}>Research Methodologies</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="mb-6 text-gray-700">
                Researching Indigenous land histories requires a multidisciplinary approach that respects both 
                Western academic methods and traditional Indigenous knowledge systems. Our project utilizes 
                the following research methodologies:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.amber }}>
                      <ClipboardIcon className="w-5 h-5" style={{ color: colors.navy }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1" style={{ color: colors.navy }}>Archival Research</h3>
                    <p className="text-gray-700">
                      Systematic examination of primary sources including government documents, land records, 
                      correspondence, and historical periodicals to trace land ownership and transfers. We partner 
                      with the National Archives, Library of Congress, and tribal archives to digitize and index 
                      relevant historical documents.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.amber }}>
                      <UsersIcon className="w-5 h-5" style={{ color: colors.navy }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1" style={{ color: colors.navy }}>Oral History Collection</h3>
                    <p className="text-gray-700">
                      Recording and documenting family and community narratives about land ownership, displacement, 
                      and traditional territories. Our oral history protocols are developed in partnership with 
                      tribal historic preservation offices and respect cultural protocols around sensitive information.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.amber }}>
                      <MapIcon className="w-5 h-5" style={{ color: colors.navy }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1" style={{ color: colors.navy }}>GIS Mapping & Spatial Analysis</h3>
                    <p className="text-gray-700">
                      Using geographic information systems to digitize historical maps, overlay multiple data sources, 
                      and visualize changes in land ownership over time. Our spatial database includes georeferenced 
                      historical maps, land survey data, and contemporary boundaries.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.amber }}>
                      <BookOpenIcon className="w-5 h-5" style={{ color: colors.navy }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1" style={{ color: colors.navy }}>Legal Research</h3>
                    <p className="text-gray-700">
                      Analysis of treaties, federal Indian law, congressional acts, and court cases that shaped 
                      land ownership patterns and tribal sovereignty. Our legal database includes full text of 
                      relevant legislation, court opinions, and solicitor's opinions related to Native American 
                      land rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tools */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.navy }}>Research Tools</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md" style={{ borderColor: colors.teal }}>
            <CardContent className="p-6">
              <SearchIcon className="w-10 h-10 mb-4" style={{ color: colors.navy }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Advanced Search Portal</h3>
              <p className="text-gray-700 mb-4">
                Multi-collection search tool with filters for document type, date range, 
                location, tribal affiliation, and individual names.
              </p>
              <div className="mt-auto">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }} className="w-full">
                  Search Collections
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md" style={{ borderColor: colors.teal }}>
            <CardContent className="p-6">
              <MapIcon className="w-10 h-10 mb-4" style={{ color: colors.navy }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Historical Map Viewer</h3>
              <p className="text-gray-700 mb-4">
                Interactive tool for viewing and comparing historical maps with modern 
                boundaries and satellite imagery.
              </p>
              <div className="mt-auto">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }} className="w-full">
                  Open Map Viewer
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md" style={{ borderColor: colors.teal }}>
            <CardContent className="p-6">
              <BookmarkIcon className="w-10 h-10 mb-4" style={{ color: colors.navy }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.navy }}>Citation Manager</h3>
              <p className="text-gray-700 mb-4">
                Save, organize, and export citations for archival documents and 
                research materials in multiple formats.
              </p>
              <div className="mt-auto">
                <Button style={{ backgroundColor: colors.amber, color: colors.navy }} className="w-full">
                  Manage Citations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Researcher Guidance */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.navy }}>Researcher Guidance</h2>
          
          <div className="bg-white border rounded-lg shadow-sm p-8" style={{ borderColor: colors.teal }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.navy }}>
                  How to Begin Your Research
                </h3>
                <p className="text-gray-700 mb-3">
                  Start by gathering any information you already have about your family's tribal affiliation, 
                  ancestral location, or specific allotment details. Even partial information can provide 
                  important starting points for your research.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Collect family stories, documents, and photographs related to land ownership</li>
                  <li>Identify tribal affiliations and geographic regions of interest</li>
                  <li>Determine the approximate time period you're researching</li>
                  <li>Review our "Getting Started Guide" for step-by-step instructions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.navy }}>
                  Key Records for Land Allotment Research
                </h3>
                <p className="text-gray-700 mb-3">
                  Several types of historical records are particularly valuable for tracing Native American 
                  land allotments and family connections to specific parcels of land:
                </p>
                <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-3">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">Tribal rolls and census records</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">Allotment certificates and patents</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">Land survey plats and field notes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">Probate and heirship records</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">BIA agency correspondence</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-4 h-4 mt-1 mr-2" style={{ color: colors.navy }} />
                    <span className="text-gray-700">County deed and tax records</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.navy }}>
                  Research Ethics and Cultural Considerations
                </h3>
                <p className="text-gray-700 mb-3">
                  When researching Indigenous land histories, it's important to approach the work with cultural 
                  sensitivity and respect for tribal sovereignty. Our research guidelines emphasize:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Respecting tribal data sovereignty and ownership of cultural information</li>
                  <li>Acknowledging traditional knowledge systems alongside written records</li>
                  <li>Understanding the historical context of colonization and land dispossession</li>
                  <li>Consulting with tribal historic preservation offices when appropriate</li>
                  <li>Sharing research findings with tribal communities</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.teal }}>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <p className="text-gray-700 mb-4 sm:mb-0">
                  Need personalized assistance with your research?
                </p>
                <Button style={{ backgroundColor: colors.navy, color: 'white' }}>
                  Schedule a Research Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Archives */}
      <section style={{ backgroundColor: colors.teal }} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.navy }}>Partner Archives & Institutions</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>National Archives and Records Administration</h3>
                <p className="text-sm text-gray-700">Bureau of Indian Affairs records, allotment registers, and federal census documents</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>Tribal Historic Preservation Offices</h3>
                <p className="text-sm text-gray-700">Community-based archives, oral histories, and traditional knowledge repositories</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>University Libraries & Special Collections</h3>
                <p className="text-sm text-gray-700">Archival materials, manuscripts, photographs, and scholarly resources</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>Library of Congress</h3>
                <p className="text-sm text-gray-700">Historical maps, manuscripts, photographs, and government publications</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>State Historical Societies</h3>
                <p className="text-sm text-gray-700">Local records, county histories, and regional collections</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow flex items-start">
              <LinkIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: colors.navy }} />
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.navy }}>Bureau of Land Management</h3>
                <p className="text-sm text-gray-700">Land patents, survey plats, and General Land Office records</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button style={{ backgroundColor: colors.amber, color: colors.navy }}>
              View All Research Partners
            </Button>
          </div>
        </div>
      </section>

 
    </div>
  )
}