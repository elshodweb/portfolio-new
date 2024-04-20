"use client";
import React from "react";
import "./style.css";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/app/components/Title/Tilte";
import Container from "@/app/components/Container/Container";
import { SkillsData } from "./data";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="skill-section">
      <Container>
        <Title className="title">Skills 📝</Title>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 2200,
          }}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          {SkillsData.map((el) => (
            <SwiperSlide>
              <div className="img">
                <Image src={el.img} width={100} height={100} alt={el.name} />
              </div>
              <div className="name">{el.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Skills;
