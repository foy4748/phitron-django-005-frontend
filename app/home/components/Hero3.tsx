import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero3() {
  return (
    <>
      <GridSystem className="my-12 md:my-24 bg-green-100">
        <Col className="md:col-span-6 lg:col-span-6">
          <div className="pt-24 px-8 md:pt-0 lg:px-0 flex items-center justify-center h-full">
            <article className="space-y-4">
              <p className="font-semibold text-xl">Starting from $2.99</p>
              <h2 className="font-bold text-3xl">
                Sensational season discounts
              </h2>
              <Link href={`/products`}>
                <Button className="mt-4" size={"lg"}>
                  Shop Now
                </Button>
              </Link>
            </article>
          </div>
        </Col>
        <Col className="md:col-span-6 lg:col-span-6">
          <Image
            src={"/images/hero/hero-vegetables.png"}
            width={1031}
            height={838}
            alt={"Hero Image of Vegetables"}
          />
        </Col>
      </GridSystem>
    </>
  );
}
