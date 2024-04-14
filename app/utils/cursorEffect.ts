export function cursorEffectOnElements(element: HTMLElement | null) {
  const cursor = document.querySelector(".cursor");
  element?.addEventListener("mouseenter", (e) => {
    cursor?.classList.add(".on-element");
  });

  element?.addEventListener("mouseleave", (e) => {
    cursor?.classList.remove(".on-element");
  });
}
