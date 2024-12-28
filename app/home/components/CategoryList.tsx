"use client";
import useCategory from "@/hooks/useCategory";
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

const CategoryList = () => {
  const { categories } = useCategory();
  if (typeof window != undefined)
    return (
      <>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mt-8 mb-2">What do you need ?</h2>
          <p className="text-slate-500 italic">We Got you covered</p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Scrollbar, Navigation, A11y, Autoplay, FreeMode]}
          speed={5000}
          spaceBetween={25}
          autoplay={{
            delay: 10,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchSlidesProgress
          freeMode={{ enabled: true, sticky: false }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 6,
            },
          }}
          pagination={{ clickable: true }}
          loop
          className="h-auto flex items-center"
        >
          {categories.map((c) => (
            <SwiperSlide key={c.id}>
              <Link href={`/products?category=${c.id}`}>
                <p className="text-center bg-green-500 rounded-md text-white">
                  {c.category}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};

export default CategoryList;
