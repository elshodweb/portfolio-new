import React from "react";
import style from "./style.module.css";
import Container from "@/app/components/Container/Container";
import Title from "@/app/components/Title/Tilte";
import SliderComp from "../../components/SliderComp/SliderComp";

const Portfolio = () => {
  return (
    <Container>
      <Title className={style.title}>Portfolio 💼</Title>
      <SliderComp />
    </Container>
  );
};

export default Portfolio;
