"use client";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      cursorRef.current?.classList.add("on-element");
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("on-element");
    };

    const elements = document.querySelectorAll("[data-element]");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = e.pageY + "px";
        cursorRef.current.style.left = e.pageX + "px";
      }
    });

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div>
      {children}
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
}
