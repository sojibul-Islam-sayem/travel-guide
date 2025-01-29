import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Section/Categories/Categories";
import Customers from "@/components/Section/Coustomers/Coustomers";
import Experience from "@/components/Section/Experience/Experience";
import Newsletter from "@/components/Section/Newsletter/Newsletter";
import Package from "@/components/Section/Package/Package";
import Reviews from "@/components/Section/Reviews/Reviews";
import TopDestination from "@/components/Section/TopDestination/TopDestination";
import WithUs from "@/components/Section/WithUs/WithUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <TopDestination />
      <Experience />
      <Customers />
      <Package />
      <WithUs />
      <Reviews />
      <Newsletter />
    </div>
  );
}
