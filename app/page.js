import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Section/Categories/Categories";
import Customers from "@/components/Section/Coustomers/Coustomers";
import Experience from "@/components/Section/Experience/Experience";
import TopDestination from "@/components/Section/TopDestination/TopDestination";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <TopDestination />
      <Experience />
      <Customers />
    </div>
  );
}
