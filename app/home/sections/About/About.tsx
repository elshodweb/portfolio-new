import Container from "@/app/components/Container/Container";
import Title from "../../../components/Title/Tilte";
import style from "./style.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className={style.about}>
      <Container>
        <Title className={style.title}>About me 🕵️</Title>
        <div   className={style.row}>
          <div className={style.img}>
            <Image  src={"/myImg.jpg"} width={300} height={300} alt="myImg" />
          </div>
          <div   className={style.text}>
            <p className={style.desc}>
              Hey there! 👋 I'm Elshod Tukhtamurodov, a third-year student
              studying Informational Technology at Tashkent University. I'm
              passionate about web development, particularly in the frontend
              realm.
            </p>
            <p className={style.desc}>
              As a frontend developer, I specialize in crafting dynamic and
              user-friendly web experiences. With a solid foundation in
              technologies like React, Next.js, JavaScript, TypeScript, HTML,
              CSS, and Redux, I'm well-equipped to bring your digital projects
              to life.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
