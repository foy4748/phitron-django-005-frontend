import { getProductCategoryList } from "@/actions/category/getProductCategories";
import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function CategoryImageCard({ src }: { src: string }) {
  return (
    <>
      <Image
        className="w-full"
        src={src}
        width={268}
        height={268}
        alt="category 1"
      />
    </>
  );
}

export default async function CategoryGrid() {
  const categories = await getProductCategoryList();
  return (
    <>
      <GridSystem className="my-8">
        {categories.categoryList.map((cateogry, idx: number) => {
          return (
            <Col
              key={idx}
              className={cn(
                {
                  "lg:col-start-3": idx == 4,
                  "md:col-start-5": idx == 6,
                  "col-start-4": idx == 6,
                },
                "relative col-span-6 md:col-span-4 text-white transition hover:scale-[1.1] hover:font-bold flex justify-center w-full"
              )}
            >
              <Link
                href={`/products/?category=${cateogry.id}`}
                className="w-full"
              >
                <CategoryImageCard
                  src={`/images/category-cards/${idx + 1}.png`}
                />
                <article className="absolute bottom-4 w-full text-center">
                  <p>{cateogry.category}</p>
                </article>
              </Link>
            </Col>
          );
        })}
      </GridSystem>
    </>
  );
}
