"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import Swiper core and required modules
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
export default function Banner() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, Navigation, A11y, Autoplay, FreeMode]}
        spaceBetween={25}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-auto flex items-center"
      >
        <SwiperSlide>
          <div className="relative">
            {/* Banner Image */}
            <Image
              className="w-full h-[calc(100vh-32px)] object-cover"
              src="/images/banner/banner_1.jpg"
              width={1920}
              height={1440}
              alt=""
            />
            {/* Banner Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-800/80 to-slate-100/20"></div>
            {/* Banner Content */}
            <div className="absolute  top-0 w-full h-full flex items-center p-4 lg:p-10">
              <div className=" max-w-[500px] space-y-8">
                <h1 className="text-white font-bold text-5xl md:text-6xl">
                  Freshness Delivered Daily
                </h1>
                <p className="italic text-white text-justify">
                  Discover the freshest produce, dairy, and more at unbeatable
                  prices. Shop now and taste the difference!
                </p>

                <div>
                  <Link href="/products">
                    <Button>Products</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Banner Image */}
            <Image
              className="w-full h-[calc(100vh-32px)] object-cover"
              src="/images/banner/banner_2.jpg"
              width={1920}
              height={1440}
              alt=""
            />
          </div>
          {/* Banner Overlay */}
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-800/80 to-slate-100/20"></div>
          {/* Banner Content */}
          <div className="absolute  top-0 w-full h-full flex items-center p-4 lg:p-10">
            <div className=" max-w-[500px] space-y-8">
              <h1 className="text-white font-bold text-5xl md:text-6xl">
                Your One-Stop Grocery Shop
              </h1>
              <p className="italic text-white text-justify">
                From farm-fresh fruits and vegetables to pantry staples, we{"'"}
                ve got everything you need. Start your shopping journey with us
                today!
              </p>

              <div>
                <Link href="/products">
                  <Button>Products</Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* Banner Image */}
            <Image
              className="w-full h-[calc(100vh-32px)] object-cover"
              src="/images/banner/banner_3.jpg"
              width={1920}
              height={1440}
              alt=""
            />
            {/* Banner Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-800/80 to-slate-100/20"></div>
            {/* Banner Content */}
            <div className="absolute  top-0 w-full h-full flex items-center p-4 lg:p-10">
              <div className=" max-w-[500px] space-y-8">
                <h1 className="text-white font-bold text-5xl md:text-6xl">
                  Farm to Table Goodness
                </h1>
                <p className="italic text-white text-justify">
                  Experience the best in quality and variety. Your favorite
                  groceries are just a click away!
                </p>

                <div>
                  <Link href="/products">
                    <Button>Products</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
