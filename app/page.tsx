import FeaturedProducts from "./home/components/FeaturedProducts";
import CategoryList from "./home/components/CategoryList";
import Hero1 from "./home/components/Hero1";
import Hero2 from "./home/components/Hero2";
import CategoryGrid from "./home/components/CategoryGrid";

export default async function Home() {
  return (
    <section>
      <CategoryList />
      <CategoryGrid />
      <FeaturedProducts />
      <div className="space-y-8">
        <Hero1 />
        <Hero2 />
      </div>
    </section>
  );
}
