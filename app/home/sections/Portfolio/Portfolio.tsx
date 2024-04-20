import React from "react";
import style from "./style.module.css";
import Container from "@/app/components/Container/Container";
import Title from "@/app/components/Title/Tilte";
import SliderComp from "../../components/SliderComp/SliderComp";

const Portfolio = () => {
  return (
    <div id="#portfolio" className={style.portfolio}>      
    <Container>
        <Title className={style.title}>Portfolio 💼</Title>
        <SliderComp />
      </Container>
    </div>
  );
};

export default Portfolio;
