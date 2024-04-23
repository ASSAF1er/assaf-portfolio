import Image from "@rasenganjs/image";
import profile from "@assets/profile.png";

function Hero() {
  return (
    <section className=" text-primary bg-gray w-full h-screen  flex justify-between  items-center py-8 px-[20px] md:px-[50px] xl:px-[100px] font-ojuju">
      <div className="font-normal">
        <p className="relative text-[50px] leading-[60px] ">
          Hi, i'm <span className="font-bold">Beral ASSONFACK</span>
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <p className="relative text-[50px] leading-[60px]">
          You can call me <span className="font-bold">Assaf</span>
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <p className=" relative text-[25px] mt-3 ">
          Web Developper / Frontend specialist
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <div className="flex mt-5">
          <div className="group relative w-[200px]  h-[52px] bg-primary rounded-md  text-white font-medium cursor-pointer overflow-hidden">
            <ul className="absolute w-full left-1/2 top-0 group-hover:top-[-52px] ease-in duration-[300ms] -translate-x-1/2 text-[20px] leadings-[20px] ">
              <li className="relative flex items-center justify-center text-center h-[52px]">
                Let's have a talk
                <div className="absolute top-0 text-cover w-full bg-primary "></div>
              </li>
              <li className=" flex items-center justify-center text-center h-[52px]">
                Let's go !
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-img-container border-4 border-primary overflow-hidden ">
        <Image
          src={profile}
          alt="profile picture"
          width={350}
          height={350}
          className="object-cover    "
        />
      </div>
    </section>
  );
}

export default Hero;
