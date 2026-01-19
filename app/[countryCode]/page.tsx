import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";
import { getCountryByCode } from "../lib/api";

type Props = {
  params: {
    countryCode: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { countryCode } = await params;
  const country = await getCountryByCode(countryCode);

  return {
    title: `${country.name.common} | Countries Explorer`,
    description: `Explore details about ${country.name.common}, including population, region, capital, and more.`,
    openGraph: {
      title: `${country.name.common} | Countries Explorer`,
      description: `Explore details about ${country.name.common}, including population, region, capital, and more.`,
      images: [
        {
          url: country.flags.png,
          width: 800,
          height: 600,
          alt: `Flag of ${country.name.common}`,
        },
      ],
    },
  };
}

const Page = async ({ params }: Props) => {
  const { countryCode } = await params;

  const country = await getCountryByCode(countryCode);
  return (
    <div className="w-full p-8 my-6">
      <BackButton />
      <CountryDetails country={country} />
    </div>
  );
};

export default Page;
