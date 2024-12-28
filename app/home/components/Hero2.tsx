import Image from "next/image";

export default function Hero2() {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4">
        <article className="w-full md:w-1/2 flex justify-center items-center md:text-right p-4">
          <div className="space-y-4">
            <h2 className="font-bold text-2xl">Your One-Stop Grocery Shop</h2>
            <p>
              From farm-fresh fruits and vegetables to pantry staples, we{"'"}ve
              got everything you need. Start your shopping journey with us
              today!
            </p>
          </div>
        </article>
        <Image
          className="w-full md:w-1/2 p-4 -order-1 md:order-none"
          src={"/images/banner/banner_2.jpg"}
          width={1920}
          height={1444}
          alt="Nice Vegetable Photos"
        />
      </section>
    </>
  );
}
