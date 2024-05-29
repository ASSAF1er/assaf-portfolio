import classNames from "classnames";
import { useState, useEffect } from "react";
function Loader() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    let loadedResources = 0;
    let totalResources = 0;

    if (typeof document !== "undefined") {
      let images = document.querySelectorAll("img");
      totalResources += images.length;
      console.log(totalResources);

      images.forEach((img) => {
        img.addEventListener("load", () => {
          loadedResources++;
          console.log(loadedResources);
          setPercentage((loadedResources * 100) / totalResources);
        });
      });
    }
  }, []);
  return (
    <div
      className={classNames(
        percentage > 60 && "hidden",
        "fixed z-[95] bg-gray h-screen w-full flex items-center justify-center text-primary ",
      )}
    ><></>
      <div>
        <h1 className="relative animate-pulse text-[40px] md:text-[60px]  font-bold">
          Beral ASSONFACK
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </h1>
        <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
      </div>
    </div>
  );
}

export default Loader;
