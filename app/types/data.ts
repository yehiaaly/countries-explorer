export interface CountryAll {
  flags: Flags;
  name: Name;
  cca2: string;
  cca3: string;
  cioc: string;
  capital: string[];
  region: string;
  population: number;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  cca3: string;
  currencies: Record<string, Currency>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  population: number;
  flags: Flags;
}

// ---------------- Sub-Interfaces ----------------

export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: "right" | "left";
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng: [number, number];
}

export interface PostalCode {
  format: string;
  regex: string;
}
