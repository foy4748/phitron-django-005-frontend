import { PhoneCall, PhoneForwarded } from "lucide-react";
import Image from "next/image";

export default function ContactUsBanner() {
  return (
    <>
      <section>
        <figure className="w-full h-[200px] relative">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={"/images/contact-us/contact-us-banner.jpg"}
            width={1920}
            height={1080}
            alt={"Contact Us Banner"}
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-slate-100/10 to-gray-800/90 text-white flex justify-center items-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="w-full text-xl flex justify-center items-center gap-x-2">
                <PhoneForwarded />
                <a className="block" href="#">
                  {" "}
                  Call Us
                </a>
                <PhoneCall />
              </p>
            </div>
          </div>
        </figure>
      </section>
    </>
  );
}
