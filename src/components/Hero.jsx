import Image from "@rasenganjs/image";
import profile from "@assets/profile.png";
import { Link } from "rasengan";

function Hero() {
  return (
    <section className=" text-primary bg-gray w-full  md:h-screen  flex flex-col-reverse  sm:flex-row gap-8 md:justify-between  items-center pt-32 pb-14 md:py-8  px-[5%] md:px-[50px] xl:px-[100px] font-ojuju">
      <div className="font-normal">
        <p className="relative text-[30px] md:text-[50px] leading-[40px] md:leading-[60px] ">
          Hi, i'm <span className="font-bold">Beral ASSONFACK</span>
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <p className="relative text-[30px] md:text-[50px] leading-[40px] md:leading-[60px] ">
          You can call me <span className="font-bold">Assaf</span>
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <p className=" relative text-[20px] md:text-[25px] leading-[25px] md:leading-[30px]  mt-3 ">
          Web Developer / Frontend passionate
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <div className="flex mt-8 md:mt-5">
          <Link
            target="_blank"
            to="https://calendly.com/beral-assaf/30min"
            className="group relative w-[200px]  h-[52px] bg-primary rounded-md  text-white font-medium cursor-pointer overflow-hidden"
          >
            <ul className="absolute w-full left-1/2 top-0 group-hover:top-[-52px] ease-in duration-[300ms] -translate-x-1/2 text-[20px] leadings-[20px] ">
              <li className="relative flex items-center justify-center text-center h-[52px]">
                Let's have a talk
                <div className="absolute top-0 text-cover w-full bg-primary "></div>
              </li>
              <li className=" flex items-center justify-center text-center h-[52px]">
                Let's go !
              </li>
            </ul>
            <div className="absolute light group-hover:hidden size-[300px] top-[-50px] left-[-50px] rounded-[50%] "></div>
          </Link>
        </div>
      </div>
      <div
        id="hero-image"
        className="hero-img-container border-4 border-primary overflow-hidden "
      >
        <Image
          src={profile}
          alt="profile picture"
          className="object-cover !size-[290px] md:!size-[350px] grayscale hover:grayscale-0 "
        />
      </div>
    </section>
  );
}

export default Hero;
