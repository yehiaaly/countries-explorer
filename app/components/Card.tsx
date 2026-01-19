import Image from "next/image";
import { CountryAll } from "../types/data";

const Card = ({ country }: { country: CountryAll }) => {
  const { flags, name, capital, region, population } = country;
  return (
    <article className="cursor-pointer flex flex-col shadow-lg w-full rounded-lg bg-element overflow-hidden h-full transform transition-all duration-300 hover:scale-105">
      <figure className="relative h-48 w-full">
        <Image
          src={flags.png}
          alt={flags.alt ?? `Flag of ${name.common}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </figure>
      <div className="flex flex-col grow px-6 py-8">
        <h2 className="font-bold mb-4 text-lg line-clamp-1">{name.common}</h2>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {capital?.length > 0 ? capital.join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
