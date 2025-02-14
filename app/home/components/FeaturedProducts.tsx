"use client";
import { getRandomProductList } from "@/actions/product/getRandomProductList";
import ProductCard from "@/app/products/components/ProductCard";

// import Swiper core and required modules
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { TSingleProduct } from "@/types/product";
import { useEffect, useState } from "react";
import Loading from "@/app/products/loading";

export default function FeaturedProducts() {
  const [data, setData] = useState<TSingleProduct[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  useEffect(() => {
    getRandomProductList()
      .then((d) => {
        setData(d);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);
  if (isLoading)
    return (
      <section className="flex justify-center">
        <Loading className="my- 12 lg:my-24" cardsNumber={4} />
      </section>
    );
  return (
    <>
      <section className="my-12 lg:my-24">
        <h2 className="text-2xl font-bold mt-8 mb-2">Featured Products</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y, Autoplay, FreeMode]}
          spaceBetween={25}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
            1854: {
              slidesPerView: 6,
            },
          }}
          autoplay={{
            delay: 1800,
          }}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="h-auto flex items-center py-10"
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
      </section>
    </>
  );
}
