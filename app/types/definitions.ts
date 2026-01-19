import { Dispatch, SetStateAction } from "react";
import { CountryAll } from "./data";

export type SearchPropsType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
