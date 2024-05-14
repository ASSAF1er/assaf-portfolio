import classNames from "classnames";
import { Link } from "rasengan";
import { useLocation } from "rasengan";
import { useState } from "react";
import profile from "@assets/profile.png";
function Tabbar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const handleNavbarStyle = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleNavbarStyle);
  }

  return (
    <section
      className={classNames(
        scroll ? "backdrop-sepia-0 bg-white/30 backdrop-blur-md" : "",
        "fixed top-0 z-[100] bg-transparent  py-4  flex justify-center w-full duration-500",
      )}
    >
      <div
        className={classNames(
          openMobileNav && " !h-[200px] ",
          "flex flex-col md:hidden  w-full mx-[5%] bg-primary gap-2  px-4  h-16 overflow-hidden rounded-md text-white font-ojuju font-medium text-normal duration-300 ease-in-out",
        )}
      >
        <div className="flex py-3  justify-between my-auto items-center w-full">
          <span onClick={() => setOpenMobileNav((prev) => !prev)}>
            {openMobileNav ? "close" : "menu"}
          </span>
          <img
            src={profile}
            alt=""
            className="size-10 rounded-full object-cover grayscale "
          />
        </div>

        <div className="flex gap-3 pt-3 pb-6 flex-wrap justify-center ">
          {routes?.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpenMobileNav((prev) => !prev)}
              className={classNames(
                location.pathname === item.path && "!border-gray-100 font-bold",
                "rounded-md py-2 px-4 border border-gray-400 hover:border-gray-100  transition duration-400 ease-in-out cursor-pointer ",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/reviews"
            onClick={() => setOpenMobileNav((prev) => !prev)}
            className={classNames(
              location.pathname === "/reviews"
                ? "!border-gray-100 font-bold"
                : "",
              "relative group rounded-md py-2 px-4 border border-gray-400 hover:border-gray-100  transition duration-400 ease-in-out cursor-pointer ",
            )}
          >
            Reviews
            <div
              className={classNames(
                location.pathname === "/reviews" ? "hidden" : "",
                "absolute group-hover:hidden top-0 right-0 translate-x-1 -translate-y-1",
              )}
            >
              <span class="relative  flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-400"></span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className=" hidden sm:flex bg-primary gap-2 py-2 sm:py-4  px-2 sm:px-6 rounded-md text-white font-ojuju font-medium text-[14px] sm:text-[17px]">
        {routes?.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={classNames(
              location.pathname === item.path && "!border-gray-100 font-bold",
              "rounded-md py-2 px-4 border border-gray-400 hover:border-gray-100  transition duration-400 ease-in-out cursor-pointer ",
            )}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/reviews"
          className={classNames(
            location.pathname === "/reviews"
              ? "!border-gray-100 font-bold"
              : "",
            "relative group rounded-md py-2 px-4 border border-gray-400 hover:border-gray-100  transition duration-400 ease-in-out cursor-pointer ",
          )}
        >
          Reviews
          <div
            className={classNames(
              location.pathname === "/reviews" ? "hidden" : "",
              "absolute group-hover:hidden top-0 right-0 translate-x-1 -translate-y-1",
            )}
          >
            <span class="relative  flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-400"></span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Tabbar;
