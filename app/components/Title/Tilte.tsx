import React, { ReactNode } from "react";
import styled from './style.module.css';
interface TitleProps {
  children: ReactNode;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title: React.FC<TitleProps> = ({
  children,
  className,
  element = "h1",
}) => {
  const Element = element || "h1";
  return <Element data-element='title' className={`${className} ${styled.title}`}>{children}</Element>;
};

export default Title;
