import { Link } from "rasengan";
import Image from "@rasenganjs/image";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import rasengan from "@assets/rasengan.svg";
import react from "@assets/react.svg";
import typescript from "@assets/typescript.svg";
import redux from "@assets/redux.svg";
import Message from "@/components/Message";
import nodejs from "@assets/nodejs.svg";

const Home = () => {
  const skills = [
    { name: "RasenganJS", photo: rasengan },
    { name: "ReactJS", photo: react },
    { name: "TypeScript", photo: typescript },
    { name: "Redux", photo: redux },
    { name: "NodeJS", photo: nodejs },
  ];
  return (
    <section className="">
      <Hero />
      <section className="px-[10%] ">
        <section className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold">
          <div className="pt-20 pb-20 w-auto text-primary text-[60px] font-ojuju font-bold">
            <h1 className="relative">
              Skills
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2  w-[100px] bg-primary"></div>
          </div>

          <div className="flex gap-2 flex-wrap ">
            {skills.map((item, index) => (
              <SkillCard key={index} logo={item.photo} name={item.name} />
            ))}
          </div>
        </section>
        <section className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold">
          <div className="pt-20 pb-20 w-auto text-primary text-[60px] font-ojuju font-bold">
            <h1 className="relative">
              Projects
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2  w-[150px] bg-primary"></div>
          </div>

          <div className="flex gap-2 flex-wrap ">
            {skills.map((item, index) => (
              <SkillCard key={index} logo={item.photo} name={item.name} />
            ))}
          </div>
        </section>
        <Message />
      </section>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home | Beral ASSONFACK",
  description: "Home page",
};

export default Home;
