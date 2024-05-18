import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Container from "./../../../components/Container/Container";
import Title from "@/app/components/Title/Tilte";

const Hi = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Image
          src="/me.png"
          width={920}
          height={537}
          alt="web dev"
          className={styles.profileImage}
        />
        <div className={styles.textContent}>
          <Title data-element="title">Hello, I'm Elshod 🧑‍💻</Title>
          <h2 className={styles.subTitle}>
            Frontend Developer & UI/UX Enthusiast
          </h2>
          <p>
            Welcome to my portfolio! I specialize in creating engaging and
            intuitive user interfaces using cutting-edge frontend technologies.
            <br />
            <br />
            With a passion for design and a keen eye for detail, I strive to
            deliver pixel-perfect solutions that exceed client expectations.
            Let's build something amazing together!
          </p>
        </div>
        <div className={styles.box}></div>
      </div>
    </Container>
  );
};

export default Hi;
