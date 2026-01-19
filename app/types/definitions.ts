import { Dispatch, SetStateAction } from "react";

export type SearchPropsType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
