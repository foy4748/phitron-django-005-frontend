import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Image from "next/image";

export default function AboutUsHero() {
  return (
    <>
      <GridSystem className="my-12 md:my-24 px-8">
        <Col className="h-full md:col-span-12 lg:col-span-6">
          <Image
            className="h-full object-cover"
            src={"/images/about-us/about-1.png"}
            width={1292}
            height={1472}
            alt="About Us Image"
          />
        </Col>
        <Col className="h-full md:col-span-12 lg:col-span-6 space-y-8 flex flex-col justify-between">
          <h1 className="text-3xl font-bold">Welcome to Super Grocery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p>
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <GridSystem>
            <Col className="lg:col-span-4">
              <Image
                className="w-full h-full"
                src={"/images/about-us/about-2.png"}
                width={368}
                height={448}
                alt="About Us img 2"
              />
            </Col>
            <Col className="lg:col-span-4">
              <Image
                className="w-full h-full"
                src={"/images/about-us/about-3.png"}
                width={368}
                height={448}
                alt="About Us img 2"
              />
            </Col>
            <Col className="lg:col-span-4 last:md:col-start-4 last:lg:col-start-auto">
              <Image
                className="w-full h-full"
                src={"/images/about-us/about-4.png"}
                width={368}
                height={448}
                alt="About Us img 2"
              />
            </Col>
          </GridSystem>
        </Col>
      </GridSystem>
    </>
  );
}
