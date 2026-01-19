import Link from "next/link";
import { CountryAll } from "../types/data";
import Card from "./Card";

const CountryCards = ({ countries }: { countries: CountryAll[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-14 py-8 px-10 sm:px-12">
      {countries.map((country) => (
        <Link key={country.cca3} href={`/${country.cca3.toLowerCase()}`}>
          <Card country={country} />
        </Link>
      ))}
    </div>
  );
};

export default CountryCards;
