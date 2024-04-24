import classNames from "classnames";
import { Link } from "rasengan";
import { useLocation } from "rasengan";
import { useState } from "react";
function Tabbar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const handleNavbarStyle = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  if (window !== undefined)
    window.addEventListener("scroll", handleNavbarStyle);

  return (
    <section
      className={classNames(
        scroll ? "backdrop-sepia-0 bg-white/30" : "",
        "fixed top-0 z-[100]  py-4 flex justify-center w-full",
      )}
    >
      <div className="flex bg-primary gap-2 py-4 px-6 rounded-md text-white font-ojuju font-medium text-[17px]">
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
      </div>
    </section>
  );
}

export default Tabbar;
