import classNames from "classnames";
import { useState } from "react";

function Toast({ show, type, title, subtitle1, subtitle2, setShow }) {
  return (
    <div
      className={classNames(
        show ? "left-5" : " -left-[100%] md:-left-[50%] ",
        type == "error"
          ? "border-danger text-danger"
          : "text-primary border-primary",
        "absolute  bottom-5  flex flex-col py-3 pl-7  w-72   rounded-xl outline-2 outline-primary  border  bg-white shadow-xl transition-[left] duration-500 ease-in-out",
      )}
    >
      <p className="font-bold text-[22px] ">{title}</p>
      <p className="text-[18px] ">{subtitle1}</p>
      <p className="text-[18px] ">{subtitle2}</p>
      <button
        onClick={() => setShow(false)}
        className="absolute z-10 px-2  right-3 top-3 border border-gray text-primary rounded-md  shadow-sm "
      >
        close
      </button>
    </div>
  );
}

export default Toast;
