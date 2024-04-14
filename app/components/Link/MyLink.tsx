import { ReactNode } from "react";
import module from "./style.module.css";
import Link from "next/link";

interface MyLinkProps {
  children: ReactNode;
  href: string;
  className?: string; // Allow className to be optionally passed
}

const MyLink: React.FC<MyLinkProps> = ({ children, href, className }) => {
  // Join the provided className with module classes
  const combinedClassName = `${module.link} ${className || ""}`;
  console.log(combinedClassName);

  return (
    <Link data-element="link" href={href} className={combinedClassName.trim()}>
      {children}
    </Link>
  );
};

export default MyLink;
