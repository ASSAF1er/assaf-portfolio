import { Link } from "rasengan";
import Image from "@rasenganjs/image";
import Hero from "@/components/Hero";

const Reviews = () => {
  if (typeof document !== "undefined") document.documentElement.scrollTop = 0;
  return (
    <section className="z-10 bg-gray px-[5%] md:px-[10%]  ">
      <div className=" w-full flex flex-col items-center justify-center text-primary ">
        <div className="pt-40 pb-20 text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
          <h1 className="relative">
            Leave me a review
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <form action="" className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              Name / Pseudo *
            </label>
            <input
              type="text"
              placeholder="assaf"
              className="px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              Profile description
            </label>
            <input
              type="text"
              placeholder="assaf"
              className="px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              Photo / avatar
            </label>
            <input
              type="file"
              className="px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px]"
            >
              Review *
            </label>
            <textarea
              type="text"
              rows={3}
              placeholder="Hello, ..."
              className="px-3 py-2 bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <button className="py-3 bg-primary hover:bg-gray-400 text-[18px] text-gray-100 font-bold rounded-md">
            Submit
          </button>
        </form>
        <div className=" mt-32 md:mt-40 my-10 md:my-20 text-primary  text-[30px] md:text-[50px] font-ojuju font-bold">
          <h1 className="relative">
            What they Say about me
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <div className="pt-14 pb-40 text-[#04000022] text-[40px] md:text-[60px] font-ojuju font-bold">
          Be the first to leave a review...
        </div>
      </div>
    </section>
  );
};

Reviews.path = "/reviews";
Reviews.metadata = {
  title: "Reviews | Beral ASSONFACK",
  description: "Home page",
};

export default Reviews;
