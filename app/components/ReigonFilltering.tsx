import { ChevronDown } from "lucide-react";

interface type {
  setSelectedRegion: React.Dispatch<string>;
  selectedRegion: string;
}

const ReigonFilltering = ({ setSelectedRegion, selectedRegion }: type) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative w-fit">
      <select
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="bg-element p-4 pr-24 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-foreground/30 appearance-none cursor-pointer text-sm font-semibold transition-all"
        value={selectedRegion}
        aria-label="Filter by Region"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none h-5 w-5 text-foreground" />
    </div>
  );
};

export default ReigonFilltering;
