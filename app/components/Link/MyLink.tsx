import { MouseEventHandler, ReactNode } from "react";
import module from "./style.module.css";
import Link from "next/link";

interface MyLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?:MouseEventHandler<HTMLAnchorElement> | undefined // Allow className to be optionally passed
}

const MyLink: React.FC<MyLinkProps> = ({ children, href, className ,onClick}) => {
  // Join the provided className with module classes
  const combinedClassName = `${module.link} ${className || ""}`;
  

  return (
    <Link onClick={onClick} data-element="link" href={href} className={combinedClassName.trim()}>
      {children}
    </Link>
  );
};

export default MyLink;
