import { Image } from "@rasenganjs/image";
import profile from "@assets/beral-profil.png";

function Hero() {
  return (
    <section className=" text-primary bg-gray w-full h-screen  flex flex-col justify-center py-8 px-[20px] md:px-[50px] xl:px-[100px] font-ojuju">
      <div className="font-normal">
        {" "}
        <p className="text-[50px]">
          {" "}
          Hi, i'm <span className="font-bold">Beral ASSONFACK</span>
        </p>
        <p className="text-[50px]">
          You can call me <span className="font-bold">Assaf</span>
        </p>
        <p className="text-[25px] ">Web Developper / Frontend specialist</p>
      </div>
      <div>
        <Image src={profile} alt="" width={200} height={200} />
      </div>
    </section>
  );
}

export default Hero;
