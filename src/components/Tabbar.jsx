import classNames from "classnames";
import { Link } from "rasengan";
import { useLocation } from "rasengan";
function Tabbar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  return (
    <section className="fixed top-0 py-4 flex justify-center w-full">
      <div className="flex bg-primary gap-2 py-4 px-6 rounded-md text-white font-ojuju font-medium text-[17px]">
        {routes?.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={classNames(
              location.pathname === item.path && "border-gray-100 font-bold",
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
