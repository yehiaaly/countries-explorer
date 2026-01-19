import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";
import { getCountryByCode } from "../lib/api";

type Props = {
  params: {
    countryCode: string;
  };
};

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
