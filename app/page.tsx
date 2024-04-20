import React from "react";
import Hi from "./home/sections/HiSection/Hi";
import About from "./home/sections/About/About";
import Portfolio from "./home/sections/Portfolio/Portfolio";
import Skills from "./home/sections/Skills/Skills";
import Contacts from "./home/sections/Contacts/Contacts";

const Page = () => {
  return (
    <div>
      <Hi />
      <About />
      <Portfolio />
      <Skills />
      <Contacts />
    </div>
  );
};

export default Page;
