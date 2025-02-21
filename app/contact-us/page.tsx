import { Metadata } from "next";
import ContactUsBanner from "./components/ContactUsBanner";
import ContactUsForm from "./components/ContactUsForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us for any feedback",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsBanner />
      <ContactUsForm />
    </>
  );
}
