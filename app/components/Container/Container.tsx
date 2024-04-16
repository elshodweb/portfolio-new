import React, { ReactNode } from "react";
import style from "./style.module.css";
interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
