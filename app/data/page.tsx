import NavBar from "@/components/nav-bar"
import MapDashboard from "@/components/data-dashboard/map-dashboard"

export default function DataPage() {
  return (
    <div className="min-h-screen bg-cream/30">
      <NavBar />
      <header className="bg-teal text-cream py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Land Allotment Data</h1>
          <p className="mt-2">
            Explore historical data on First American land allotments, treaties, and territorial changes.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-2">Interactive Data Explorer</h2>
          <p className="text-teal/80 mb-4">
            Use the interactive map to explore land allotment data. Filter by tribe, time period, or land type. You can
            also annotate the map and download data for your research.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border-l-4 border-teal">
            <h3 className="text-md font-semibold text-teal">Filtering Data</h3>
            <p className="text-sm text-teal/80">
              Use the filter controls above the map to narrow down data by tribe, land type, or time period. 
              You can combine multiple filters to find specific information.
            </p>
          </div>
        </div>

        <MapDashboard />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-teal mb-4">Understanding the Data</h3>
            <p className="text-teal/80 mb-4">
              The data presented in this dashboard represents historical records of land allotments, treaties, and
              territorial changes affecting First American nations from 1830 to 1930.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-teal mb-2">Filter Categories Explained</h4>
              <ul className="text-sm text-teal/70 space-y-2">
                <li><strong>Tribe:</strong> Filter by specific tribal nations</li>
                <li><strong>Land Type:</strong> Filter by categories such as treaty territories, reservations, allotments, or ceded lands</li>
                <li><strong>Time Period:</strong> Filter by year range to see changes over time</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-teal mb-4">Research Applications</h3>
            <p className="text-teal/80 mb-4">
              This data can be used for various research purposes, including historical analysis, legal research,
              genealogy, and educational initiatives.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-teal">Citation Guidelines</h4>
                <p className="text-sm text-teal/70">
                  When using this data in your research, please cite the First American Land Allotment Project and
                  relevant primary sources.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-teal">Data Limitations</h4>
                <p className="text-sm text-teal/70">
                  This data represents our best understanding based on available historical records, which may be
                  incomplete or contain inaccuracies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}