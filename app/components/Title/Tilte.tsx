import React, { ReactNode } from "react";

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
  return <Element className={className}>{children}</Element>;
};

export default Title;
