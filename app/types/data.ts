export type data = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: currencies[];
  languages: languages[];
  translations: translations[];
  flags: flags;
  regionalBlocs: regionalBlocs[];
  cioc: string;
  independent: boolean;
};

type currencies = {
  code: string;
  name: string;
  symbol: string;
};

type flags = {
  svg: string;
  png: string;
};

type languages = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type translations = {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
};

type regionalBlocs = {
  acr: string;
  name: string;
  logo: string;
  url: string;
};
