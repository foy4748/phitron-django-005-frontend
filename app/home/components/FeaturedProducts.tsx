"use client";
import { getRandomProductList } from "@/actions/product/getRandomProductList";
import ProductCard from "@/app/products/components/ProductCard";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { TSingleProduct } from "@/types/product";
import { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const [data, setData] = useState<TSingleProduct[]>([]);
  useEffect(() => {
    getRandomProductList().then((d) => {
      setData(d);
    });
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold my-8">Featured Products</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 1800,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-auto flex items-center"
      >
        {data &&
          Array.isArray(data) &&
          data?.map((d) => {
            return (
              <SwiperSlide key={d.id}>
                <ProductCard data={d} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
