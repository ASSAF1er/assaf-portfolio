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
import agroreseau from "@assets/agroreseau.jpg";
import billit from "@assets/billit.png";
import digital_school_dashboard from "@assets/digital-school-dashboard.jpg";
import doctor from "@assets/doctor.jpg";
import flexing_academy from "@assets/flexing-academy.jpg";
import SimpleProjectCard from "@/components/SimpleProjectCard";
import ViewMoreBtn from "@/components/ViewMoreBtn";
import { useEffect } from "react";
const Home = () => {
  const skills = [
    { name: "RasenganJS", photo: rasengan },
    { name: "ReactJS", photo: react },
    { name: "TypeScript", photo: typescript },

    { name: "NodeJS", photo: nodejs },
  ];
  const projects = [
    {
      name: "Billit",
      description:
        " A web app for generating invoices with real time preview and possibility to download to pdf",

      skills: ["ReactJS", "Typescript"],
      url: "https://billit-six.vercel.app",
      photo: billit,
    },
    {
      name: "AgroRéseau",
      skills: ["ReactJS", "TailwindCSS", "NodeJS", "Express"],
      description:
        "A platform connecting agro-pastoral producers with potential buyers",
      url: "",
      photo: agroreseau,
    },
    {
      name: "Digital School Dashboard",
      skills: ["ReactJS", "TailwindCSS", "NodeJS", "Express"],
      description: "A web app to help the director manage his training center",
      url: "",
      photo: digital_school_dashboard,
    },
    // {
    //   name: "Flexing Academy",
    //   skills: ["ReactJS", "TailwindCSS"],
    //   description: "A website for a home classes agency",
    //   url: "https://flexingacademy.com",
    //   photo: flexing_academy,
    // },

    // {
    //   name: "Doctor ",
    //   skills: ["ReactJS", "TailwindCSS"],
    //   description: "A landing page for a doctor",
    //   url: "https://figma-to-code-challenge-week1-assaf.vercel.app/",
    //   photo: doctor,
    // },
  ];
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="z-10 mb-5">
      <Hero />
      <section className=" px-[5%] md:px-[10%] ">
        <section className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold">
          <div className="py-10 md:py-20 w-auto text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
            <h1 className="relative">
              Skills
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2  w-[100px] bg-primary"></div>
          </div>

          <div className="flex justify-center  gap-2 flex-wrap ">
            {skills.map((item, index) => (
              <SkillCard key={index} logo={item.photo} name={item.name} />
            ))}
          </div>
          <div className=" flex justify-center items-center py-2 md:pl-10 ">
            <ViewMoreBtn url={"/about/#skills"} />
          </div>
        </section>
        <section className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold">
          <div className="pt-24 pb-14 md:py-20 w-auto text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
            <h1 className="relative">
              Projects
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2  w-[150px] bg-primary"></div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center ">
            {projects.map((item, index) => (
              <SimpleProjectCard
                key={index}
                photo={item.photo}
                name={item.name}
                skills={item.skills}
                url={item.url}
                description={item.description}
              />
            ))}{" "}
          </div>
          <div className=" flex justify-center  py-2 ">
            <ViewMoreBtn url={"/works"} />
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
