"use client";
import Image from "next/image";
import styled from "./style.module.css";
import MyLink from "../Link/MyLink";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className={styled.wrapper}>
      <div className={styled.row}>
        <Link href="/" className={styled.logo}>
          <Image
            data-element="img"
            src="/logo.png"
            width={150}
            height={40}
            alt="logo"
          />
        </Link>
        <div
          data-element="btn"
          className={`${styled.open} ${isOpen ? styled.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
        <nav className={`${styled.navbar} ${isOpen ? styled.active : ""}`}>
          <MyLink onClick={closeMenu} className={styled.link} href={"#home"}>
            Home
          </MyLink>
          <MyLink onClick={closeMenu} className={styled.link} href={"#about"}>
            About
          </MyLink>
          <MyLink
            onClick={closeMenu}
            className={styled.link}
            href={"#portfolio"}
          >
            Portfolio
          </MyLink>
          <MyLink onClick={closeMenu} className={styled.link} href={"#contact"}>
            Contact
          </MyLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
