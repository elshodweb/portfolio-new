import Title from "@/app/components/Title/Tilte";
import React from "react";
import style from "./style.module.css";
import Container from "@/app/components/Container/Container";
const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Title className={style.title}>Contacts 📞</Title>
      </Container>
    </div>
  );
};

export default Contacts;
