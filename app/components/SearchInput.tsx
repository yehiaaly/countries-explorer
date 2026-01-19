"use client";

import { Search } from "lucide-react";
import type { SearchPropsType } from "../types/definitions";

const SearchInput = ({ searchTerm, setSearchTerm }: SearchPropsType) => {
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 my-2 ">
      <Search className="absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        aria-label="Search for a country"
        placeholder="Search..."
        className="w-full rounded-lg bg-element py-4 pl-20 pr-10 shadow-lg outline-none focus:ring-2 focus:ring-foreground/30 transition-all placeholder:text-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
