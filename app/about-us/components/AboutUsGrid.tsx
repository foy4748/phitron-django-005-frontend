import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Image from "next/image";

const data = [
  {
    src: "/images/about-us/icons/icon-1.svg",
    title: "Best Prices & Offers",
  },
  {
    src: "/images/about-us/icons/icon-2.svg",
    title: "Wide Assortment",
  },
  {
    src: "/images/about-us/icons/icon-3.svg",
    title: "Free Delivery",
  },
  {
    src: "/images/about-us/icons/icon-4.svg",
    title: "Easy Returns",
  },
  {
    src: "/images/about-us/icons/icon-5.svg",
    title: "100% Satisfaction",
  },
  {
    src: "/images/about-us/icons/icon-6.svg",
    title: "Great Daily Deal",
  },
];

export default function AboutUsGrid() {
  return (
    <>
      <h1 className="text-center font-bold text-3xl my-12 lg:my-24">
        What We Provide ?
      </h1>
      <GridSystem className="gap-4 px-8">
        {data.map(({ src, title }, idx) => {
          return (
            <>
              <Col
                className="py-12 px-10 lg:col-span-4 flex flex-col justify-center items-center border hover:shadow-md space-y-8"
                key={idx}
              >
                <figure className="flex justify-center items-center">
                  <Image
                    src={src}
                    width={100}
                    height={100}
                    alt={`icon-${idx}`}
                  />
                </figure>
                <article className="space-y-8">
                  <h3 className="text-center text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                  <p className=" text-center">
                    <a href="#" className="text-primary">
                      {" "}
                      Read More{" "}
                    </a>
                  </p>
                </article>
              </Col>
            </>
          );
        })}
      </GridSystem>
    </>
  );
}
