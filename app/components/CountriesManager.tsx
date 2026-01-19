"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import { CountryAll } from "../types/data";
import CountryCards from "./CountryCards";
import ReigonFilltering from "./ReigonFilltering";

const CountriesManager = ({ countries }: { countries: CountryAll[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const fillteredArr = countries.filter((country) => {
    const { name, cca2, cioc, capital } = country;
    const search = searchTerm.trim().toLocaleLowerCase();

    const matchesName = name.common.toLowerCase().includes(search);
    const matchesOfficial = name.official.toLowerCase().includes(search);
    const isIsreal = name.common.toLowerCase().includes("israel");

    const matchesCapital = capital?.some((cap) =>
      cap.toLowerCase().includes(search),
    );

    const matchesCode =
      cca2.toLowerCase().includes(search) ||
      cioc?.toLowerCase().includes(search);

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return (
      matchesRegion &&
      (matchesName || matchesOfficial || matchesCapital || matchesCode) &&
      !isIsreal
    );
  });

  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ReigonFilltering
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <CountryCards countries={fillteredArr} />
    </div>
  );
};

export default CountriesManager;
