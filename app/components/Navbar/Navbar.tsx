import Image from "next/image";
import styled from "./style.module.css";
import MyLink from "../Link/MyLink";

function Navbar() {
  return (
    <div className={styled.row}>
      <div className={styled.logo}>
        <Image
          data-element="img"
          src="/logo.png"
          width={150}
          height={40}
          alt="logo"
        />
      </div>
      <nav className={styled.navbar}>
        <MyLink className={styled.link} href={"/"}>
          Home
        </MyLink>
        <MyLink className={styled.link} href={"/about"}>
          About
        </MyLink>
        <MyLink className={styled.link} href={"/portfolio"}>
          Portfolio
        </MyLink>
        <MyLink className={styled.link} href={"/contact"}>
          Contact
        </MyLink>
      </nav>
    </div>
  );
}

export default Navbar;
