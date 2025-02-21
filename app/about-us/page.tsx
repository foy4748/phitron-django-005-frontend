import { Metadata } from "next";
import AboutUsBanner from "./components/AboutUsBanner";
import AboutUsGrid from "./components/AboutUsGrid";
import AboutUsHero from "./components/AboutUsHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our Super Grocery Shop",
};

export default function AboutPage() {
  return (
    <>
      <AboutUsBanner />
      <AboutUsHero />
      <AboutUsGrid />
    </>
  );
}
