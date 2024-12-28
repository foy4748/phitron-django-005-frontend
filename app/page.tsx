import FeaturedProducts from "./home/components/FeaturedProducts";
import Banner from "./home/components/Banner";
import CategoryList from "./home/components/CategoryList";

export default async function Home() {
  return (
    <section>
      <Banner />
      <CategoryList />
      <FeaturedProducts />
    </section>
  );
}
