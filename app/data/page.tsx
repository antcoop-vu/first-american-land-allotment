import NavBar from "@/components/NavigationContainer";
import MapDashboard from "@/components/data-dashboard/MapDashboard";

import PageHeader from "@/components/panels/PageHeader";
import SectionHeader from "@/components/panels/SectionHeader";
import SplitPanel from "@/components/panels/SplitPanel";
// If InfoCard is a separate component, import it here:
import InfoCard from "@/components/ui/info-card";

export default function DataPage() {
  return (
    <>
      <main className="flex-grow">
        <PageHeader
          title="Land Allotment Data"
          description="Explore land allotment data and resources."
        />
        <SectionHeader
          title="Interactive Data Explorer"
          description="Use the interactive map to explore land allotment data. Filter by tribe, time period, or land type. You can also annotate the map and download data for your research."
        >
          <InfoCard
            title="Need Help?"
            description="Our tutorials provide step-by-step guidance on using all our research tools and resources."
            cta="View Tutorials"
            url="/tutorials"
          />
        </SectionHeader>
        <MapDashboard />
        <SplitPanel
          title="Data Resources"
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        />
      </main>
    </>
  );
}

function LeftContent() {
  return (
    <>
      <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Understanding the Data</h3>
      <p className="mb-6">
        The data presented in this dashboard represents historical records of
        land allotments, treaties, and territorial changes affecting First
        American nations from 1830 to 1930.
      </p>
      <div className="mt-4">
        <h4 className="font-medium mb-3">Filter Categories Explained</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              <strong>Tribe:</strong> Filter by specific tribal nations
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              <strong>Land Type:</strong> Filter by categories such as treaty
              territories, reservations, allotments, or ceded lands
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              <strong>Time Period:</strong> Filter by year range to see changes
              over time
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

function RightContent() {
  return (
    <>
      <div className="bg-copper/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-copper"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Research Applications</h3>
      <p className="mb-6">
        This data can be used for various research purposes, including
        historical analysis, legal research, genealogy, and educational
        initiatives.
      </p>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Citation Guidelines</h4>
          <p className="bg-white p-4 rounded-lg border border-copper/10">
            When using this data in your research, please cite the First
            American Land Allotment Project and relevant primary sources.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Data Limitations</h4>
          <p className="bg-white p-4 rounded-lg border border-copper/10">
            This data represents our best understanding based on available
            historical records, which may be incomplete or contain inaccuracies.
          </p>
        </div>
      </div>
    </>
  );
}
