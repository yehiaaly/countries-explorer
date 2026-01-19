import CountriesManager from "./components/CountriesManager";
import { getAllCountries } from "./lib/api";

const Page = async () => {
  const countries = await getAllCountries();
  return (
    <>
      <CountriesManager countries={countries} />
    </>
  );
};

export default Page;
