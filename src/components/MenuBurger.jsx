import classNames from "classnames";

function MenuBurger({ open, setOpen }) {
  return (
    <div onClick={() => setOpen((prev) => !prev)} className=" w-auto">
      <div
        className={classNames(
          open ? "rotate-[35deg] " : "rotate-0",
          "h-0.5 w-7 rounded-md bg-gray-100 origin-top-left duration-500 ",
        )}
      ></div>
      <div
        className={classNames(
          open && "invisible",
          "visible h-0.5 w-7 rounded-md bg-gray-100 mt-1.5 ",
        )}
      ></div>
      <div
        className={classNames(
          open ? "rotate-[-35deg] " : "rotate-0",
          "h-0.5 w-7 rounded-md bg-gray-100 mt-1.5 origin-bottom-left duration-500",
        )}
      ></div>
    </div>
  );
}

export default MenuBurger;
