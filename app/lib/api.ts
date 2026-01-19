import type { Country, CountryAll } from "../types/data";

export const getAllCountries = async (): Promise<CountryAll[]> => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cioc,cca2,cca3",
  );

  if (!res.ok) {
    throw new Error("Bad Request");
  }

  const data = await res.json();

  return data;
};

export const getCountryByCode = async (cca3: string): Promise<Country> => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,tld,cca2,cca3,currencies,capital,region,subregion,languages,borders,population,flags`,
  );

  if (!res.ok) {
    throw new Error("Bad Request");
  }

  const data = await res.json();

  // The API might return an array or a single object depending on version/endpoint
  return Array.isArray(data) ? data[0] : data;
};
