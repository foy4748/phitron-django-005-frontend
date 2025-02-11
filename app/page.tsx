import FeaturedProducts from "./home/components/FeaturedProducts";
import CategoryList from "./home/components/CategoryList";
import Hero1 from "./home/components/Hero1";
import Hero2 from "./home/components/Hero2";
import CategoryGrid from "./home/components/CategoryGrid";
import Hero3 from "./home/components/Hero3";
import FeaturedProducts2 from "./home/components/FeaturedProducts2";

export default async function Home() {
  return (
    <section>
      <CategoryList />
      <CategoryGrid />
      <FeaturedProducts />
      <Hero3 />
      <FeaturedProducts2 />
      <div className="space-y-8">
        <Hero1 />
        <Hero2 />
      </div>
    </section>
  );
}
