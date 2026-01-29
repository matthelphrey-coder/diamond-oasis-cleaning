import locations from "@/data/locations.json";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading text-primary mb-4">
          Diamond Oasis Cleaning
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          Professional house cleaning services in Las Vegas Valley
        </p>

        {/* Color test section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-primary text-white rounded">Primary</div>
          <div className="p-4 bg-primary-light text-white rounded">Primary Light</div>
          <div className="p-4 bg-secondary text-white rounded">Secondary</div>
          <div className="p-4 bg-secondary-light text-white rounded">Secondary Light</div>
          <div className="p-4 bg-accent text-white rounded">Accent</div>
          <div className="p-4 bg-background-alt border rounded">Background Alt</div>
          <div className="p-4 bg-success text-white rounded">Success</div>
          <div className="p-4 border text-text-secondary rounded">Text Secondary</div>
        </div>

        {/* Data verification section */}
        <div className="bg-background-alt p-6 rounded-lg">
          <h2 className="text-2xl font-heading text-primary mb-4">
            Data Files Loaded Successfully
          </h2>
          <p className="text-text-secondary">
            Locations loaded: {locations.locations.length} locations
          </p>
        </div>
      </div>
    </main>
  );
}
