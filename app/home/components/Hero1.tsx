import Image from "next/image";

export default function Hero1() {
  return (
    <>
      <section className="md:flex gap-4">
        <Image
          className="w-full md:w-1/2 p-4"
          src={"/images/banner/banner_1.jpg"}
          width={1920}
          height={1444}
          alt="Nice Vegetable Photos"
        />
        <article className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="space-y-4">
            <h2 className="font-bold text-2xl">Freshness Delivered Daily</h2>
            <p>
              Discover the freshest produce, dairy, and more at unbeatable
              prices. Shop now and taste the difference!
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
