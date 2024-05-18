import SkillCard from "@/components/SkillCard";
import rasengan from "@assets/rasengan.svg";
import react from "@assets/react.svg";
import typescript from "@assets/typescript.svg";
import redux from "@assets/redux.svg";
import tailwindcss from "@assets/tailwindcss.svg";
import javascript from "@assets/javascript.svg";
import nodejs from "@assets/nodejs.svg";
import express from "@assets/Express.js_dark.svg";
import mongodb from "@assets/mongodb.svg";
import vercel from "@assets/Vercel_dark.svg";
import github from "@assets/github.svg";
import profile1 from "@assets/profile1.jpeg";
import Image from "@rasenganjs/image";
import profile2 from "@assets/profile2.jpeg";
import profile3 from "@assets/profile3.jpeg";
import profile4 from "@assets/profile4.jpeg";
import { Link } from "rasengan";
const About = () => {
  const skillsFrontend = [
    { name: "RasenganJS", photo: rasengan },
    { name: "ReactJS", photo: react },
    { name: "TypeScript", photo: typescript },
    { name: "Redux", photo: redux },
    { name: "TailwindCSS", photo: tailwindcss },
    { name: "Javascript", photo: javascript },
  ];
  const skillsBackend = [
    { name: "NodeJS", photo: nodejs },
    { name: "Express", photo: express },
    { name: "MongoDB", photo: mongodb },
  ];
  const skillsDeployment = [
    { name: "Git & GitHub", photo: github },
    { name: "Vercel", photo: vercel },
  ];
  const galery = [profile1, profile2, profile3, profile4];

  const experiences = [
    {
      position: "Frontend Developer - Intern",
      date: "April 2024 - Present",
      enterpriseName: "FreemoPay",
      enterpriseUrl: "https://www.freemopay.com/",
      enterpriseLocation: "Yaoundé, Cameroon",
      stack: ["ReactJS", " TypeScript ", "Redux ", "TailwindCSS"],
    },
    {
      position: "Web Developer - Intern",
      enterpriseName: "SEED Soft Engine",
      date: "Jully 2023 - September 2023",
      enterpriseUrl: "https://softengine.seeds.cm/",
      enterpriseLocation: " Yaoundé Cameroon",
      stack: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    },
  ];

  // const items = document?.querySelectorAll(".about-image");

  // items.forEach((item) => {
  //   item.addEventListener("mouseover", () => {
  //     items.forEach((otherItem) => {
  //       otherItem.classList.remove("w-[300px]");
  //       otherItem.classList.remove(" w-10 ");
  //     });
  //     item.classList.add("w-[300px]");
  //   });
  // });
  if (typeof document !== "undefined") document.documentElement.scrollTop = 0;

  return (
    <section className=" bg-gray font-ojuju px-[5%] md:px-[10%]">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[40px] md:text-[60px]  font-bold">
        <div>
          <h1 className="relative">
            About me
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
      </div>
      {/*presentation */}
      <section className="flex flex-col py-10 md:py-32 w-full h-auto ">
        <div className="flex flex-col-reverse md:flex-row  gap-5 h-full">
          <div className="flex flex-col flex-1 font-medium text-[18px] md:text-[20px] ">
            <h3 className="font-bold text-[40px] md:text-[60px] ">I am,</h3>
            <p>
              Beral ASSONFACK, a web developer passionate about crafting
              beautiful and flawless websites. With a keen eye for detail and a
              commitment to precision, I specialize in creating designs that are
              not only visually stunning but also user-friendly. My passion for
              soft solutions began when I was still a kid. Bringing out abstract
              ideas to digital realities through lines of code has always been
              full of emotion.
            </p>

            <br />
            <p>
              From front-end development using HTML, CSS, JavaScript, React,
              Tailwind and recently RasenganJS to back-end development with
              frameworks like Node.js and databases like MongoDB, I thrive on
              the challenges of building robust and scalable web applications.
            </p>
          </div>
          <div className="group flex justify-center w-full md:w-auto h-[250px] md:h-[350px] md:mt-16 gap-2 ">
            {galery?.map((item, index) => (
              <img
                id="about-image"
                key={index}
                src={item}
                alt="profile"
                className="about-image h-full object-cover grayscale rounded-xl hover:w-[200px] md:hover:w-[300px] w-10   duration-500 ease-in-out"
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="skills"
        className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold"
      >
        <h1 className="font-bold text-[40px] text-left ">Skills</h1>
        <div className=" text-[30px] underline mt-5">Frontend</div>
        <div className="flex justify-center md:justify-normal gap-1 flex-wrap ">
          {skillsFrontend?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className="text-[25px] underline mt-5">Backend</div>
        <div className="flex justify-center md:justify-normal gap-2 flex-wrap ">
          {skillsBackend?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className=" text-[25px] underline mt-5">
          Deployment & Version Control
        </div>
        <div className="flex justify-center md:justify-normal gap-2 flex-wrap ">
          {skillsDeployment?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className="h-screen w-full flex items-center justify-center md:justify-end ">
          <div className="w-full md:w-[70%]">
            {" "}
            <h1 className="relative text-[35px] md:text-[45px] ">
              Experiences
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2 title-underline w-[200px] bg-primary"></div>
            {experiences.map((item, index) => (
              <div
                key={index}
                className="mt-10 group flex flex-col w-full cursor-pointer"
              >
                <h2 className="text-[24px] md:text-[30px]  ">
                  {item.position}
                </h2>
                <div className="flex flex-col md:flex-row gap-1 justify-between font-medium text-[18px] md:text-[20px] ">
                  <h3 className="">
                    <Link
                      to={item.enterpriseUrl}
                      className="z-10 underline font-medium hover:font-bold  duration-500"
                    >
                      {item.enterpriseName}
                    </Link>
                    , {item.enterpriseLocation}
                  </h3>{" "}
                  <h3 className="text-[15px] md:text-[17px] ">{item.date}</h3>
                </div>
                <h3 className="font-medium text-[15px] mt-5">
                  {item.stack?.map(
                    (stk, index) =>
                      `${stk} ${index === item.stack.length - 1 ? "" : " - "}`,
                  )}
                </h3>
                <div className="flex justify-center">
                  <span className="w-full show-border mt-5 h-0.5 bg-gradient-to-r from-gray via-primary to-gray "></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

About.path = "/about";
About.metadata = {
  title: "About | Beral ASSONFACK",
  description: "About me",
};
export default About;
