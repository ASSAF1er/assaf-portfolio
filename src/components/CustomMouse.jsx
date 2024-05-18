import { Link, useLocation } from "rasengan";
import { useEffect } from "react";

function CustomMouse() {
  const location = useLocation();
  useEffect(() => {
    // gestion de la position du curseur personnalisé
    if (typeof document !== "undefined") {
      const mouse = document.querySelector("#mouse");
      const mouseCenter = document.querySelector("#mouseCenter");
    }
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        mouse.style.top = e.clientY + "px";
        mouse.style.left = e.clientX + "px";
        mouseCenter.style.top = e.clientY + "px";
        mouseCenter.style.left = e.clientX + "px";
      });
    }
    //changer l'apparence du cuseur personnalisé lorsqu'il passe sur certains éléments
    if (typeof document !== "undefined") {
      var links = document.querySelectorAll("a, button, #skill, #about-image");

      links.forEach((item) => {
        item.addEventListener("mouseover", () => {
          document.querySelector("#mouseCenter").classList.remove("bg-primary");
          document.querySelector("#mouseCenter").classList.add("bg-[#f59e0b]");
          //
          document.querySelector("#mouse").classList.remove("border-primary");
          document.querySelector("#mouse").classList.add("border-[#f59e0b]");
        });
        item.addEventListener("mouseout", () => {
          document
            .querySelector("#mouseCenter")
            .classList.remove("border-primary");
          document.querySelector("#mouseCenter").classList.add("bg-primary");
          //
          document.querySelector("#mouse").classList.remove("border-[#f59e0b]");
          document.querySelector("#mouse").classList.add("border-primary");
        });
      });
    }
  }, [location]);

  return (
    <>
      <div
        id="mouse"
        className="fixed z-[100] pointer-events-none hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 border border-primary rounded-full"
      ></div>
      <div
        id="mouseCenter"
        className="fixed z-[100] pointer-events-none hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4   bg-primary rounded-full duration-100 "
      ></div>
    </>
  );
}

export default CustomMouse;
