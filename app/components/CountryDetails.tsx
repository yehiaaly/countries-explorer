import Image from "next/image";
import { Country } from "../types/data";
import Link from "next/link";

const CountryDetails = ({ country }: { country: Country }) => {
  if (!country) return null;

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div className="my-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
      {/* Flag Container */}
      <div className="relative w-full aspect-4/3 max-w-140 shadow-md border border-gray-100 dark:border-none">
        <Image
          src={flags.svg || flags.png}
          alt={flags.alt || `Flag of ${name.common}`}
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>

      {/* Details Container */}
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-3xl font-extrabold">{name.common}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-semibold">Native Name: </span>
              {Object.values(name.nativeName)[0]?.common || name.common}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {subregion || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {capital?.join(", ") || "N/A"}
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {tld?.join(", ") || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {Object.values(currencies)
                .map((c) => c.name)
                .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Object.values(languages).join(", ")}
            </p>
          </div>
        </div>

        {/* Borders */}
        {borders && borders.length > 0 && (
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <h3 className="font-semibold whitespace-nowrap">
              Border Countries:
            </h3>
            <div className="flex flex-wrap gap-2">
              {borders.map(
                (border) =>
                  border !== "ISR" && (
                    <Link key={border} href={`/${border.toLowerCase()}`}>
                      <button
                        key={border}
                        className="px-4 cursor-pointer py-1 bg-element shadow-sm rounded-sm text-sm border hover:bg-hover hover:scale-105 transition-all duration-300 border-gray-100 dark:border-none"
                      >
                        {border}
                      </button>
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
