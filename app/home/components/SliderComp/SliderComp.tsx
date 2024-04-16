"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { ProjectsData } from "./../ProjectsData";
import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <div className="slider-comp">
      <Swiper
        effect={"coverflow"}
        navigation={true}
        autoplay={{
          delay: 2000,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        {ProjectsData.map((el) => (
          <SwiperSlide key={el.i}>
            <Link data-element="link-p" target="_blank" href={el.link}>
              <Image
                src={el.img}
                width={800}
                height={400}
                alt={"img portfolio"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
