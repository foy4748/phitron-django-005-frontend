import { getRandomProductList } from "@/actions/product/getRandomProductList";
import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedProducts2() {
  const randomProducts = await getRandomProductList();
  return (
    <>
      <GridSystem className="my-12 lg:my-24">
        <Col className="h-full md:col-span-12 lg:col-span-4 flex justify-center">
          <figure className="relative">
            <Image
              src={"/images/hero/side-hero.webp"}
              width={380}
              height={570}
              alt={"Side Hero Image"}
            />
            <article className="absolute top-0 w-full p-4 space-y-2">
              <h2 className=" font-bold text-2xl">Spices {"&"} Sauces</h2>
              <p className="text-primary flex items-center justify-center gap-3 text-2xl">
                Starting from <span className="block text-4xl">{"$"}29</span>
              </p>
              <Link href={"/products"}>
                <Button className="mt-4" size={"lg"}>
                  Shop Now
                </Button>
              </Link>
            </article>
          </figure>
        </Col>
        <Col className="md:col-span-12 lg:col-span-8">
          <GridSystem>
            {randomProducts.map((prod, idx) => {
              return (
                <>
                  <Col
                    className="w-full col-span-4 md:col-span-4 lg:col-span-4 flex justify-center items-center border relative small-card-btn-container overflow-hidden"
                    key={`${prod.id} ${idx} ${JSON.stringify(new Date())}`}
                  >
                    <div className="absolute w-full h-full z-10 top-0 transition-opacity duration-300 hover:bg-gradient-to-b from-slate-50/10 to-slate-800/90 hover:bg-opacity-10">
                      <Link href={`/products/${prod.id}`}>
                        <Button className="absolute z-20 small-card-btn bottom-0 left-0">
                          {prod.product_name} {"->"}
                        </Button>
                      </Link>
                    </div>
                    <Link href={`/products/${prod.id}`}>
                      <Image
                        className="w-full"
                        src={prod.image_url}
                        width={120}
                        height={120}
                        alt={prod.product_name}
                      />
                    </Link>
                  </Col>
                </>
              );
            })}
          </GridSystem>
        </Col>
      </GridSystem>
    </>
  );
}
