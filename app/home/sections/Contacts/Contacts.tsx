import Title from "@/app/components/Title/Tilte";
import React from "react";
import style from "./style.module.css";
import Container from "@/app/components/Container/Container";
import Link from "next/link";
const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Title className={style.title}>Contacts 📞</Title>
        <div className={style.row}>
          <div className={style.content}>
            <Title className={style.question}>
              Do you want to <br /> offer me a job?
            </Title>
            <Title className={style.answer}>- just say hello</Title>
          </div>
          <div className={style.contancts}>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"tel:+998200034050"}
              >
                ☎️ +998(20)003-40-50
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"mailto:elshodweb@gmail.com"}
              >
                ✉️ elshodweb@gmail.com
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"https://github.com/elshodweb"}
              >
                🌐 GitHub
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"https://www.linkedin.com/in/elshodweb/"}
              >
                📝 Linkedin
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"https://t.me/elshodweb"}
              >
                ✈️ Telegram
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className={style.link}
                data-element="link"
                href={"https://www.instagram.com/elshodweb"}
              >
                📷 Instagram
              </Link>
            </div>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
