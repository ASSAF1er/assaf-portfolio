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
  if (typeof window !== "undefined") document.documentElement.scrollTop = 0;

  return (
    <section className="bg-gray font-ojuju px-[10%]">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px]  font-bold">
        <div>
          <h1 className="relative">
            About me
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
      </div>
      {/*presentation */}
      <section className="flex flex-col py-32 w-full h-auto ">
        <h3 className="font-bold text-[60px] ">I am,</h3>
        <div className="flex gap-5 h-full">
          <div className="flex flex-1 font-medium text-[20px] ">
            Beral ASSONFACK, a web developer passionate about crafting beautiful
            and flawless websites. With a keen eye for detail and a commitment
            to precision, I specialize in creating designs that are not only
            visually stunning but also user-friendly. My passion for soft
            solutions began when I was still a kid. Bringing out abstract ideas
            to digital realities through lines of code has always been full of
            emotion.
            <br />
            <br />
            From front-end development using HTML, CSS, JavaScript, React,
            Tailwind and recently RasenganJS to back-end development with
            frameworks like Node.js and databases like MongoDB, I thrive on the
            challenges of building robust and scalable web applications.
          </div>
          <div className="group flex  h-[350px] gap-2 ">
            <img
              src={profile1}
              alt="profile"
              className="about-image h-full object-cover grayscale rounded-xl hover:w-[300px] w-10   duration-500 ease-in-out"
            />
            <img
              src={profile2}
              alt="profile"
              className="about-image h-full object-cover grayscale rounded-xl hover:w-[300px] w-10  duration-500 ease-in-out"
            />
            <img
              src={profile3}
              alt="profile"
              className="about-image h-full object-cover grayscale rounded-xl hover:w-[300px] w-10  duration-500 ease-in-out"
            />
            <img
              src={profile4}
              alt="profile"
              className="about-image h-full object-cover grayscale rounded-xl hover:w-[300px] w-10  duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>
      <section
        id="skills"
        className=" w-full flex flex-col gap-5   text-primary text-[20px]  font-bold"
      >
        <h1 className="font-bold text-[40px] text-left ">Skills</h1>
        <div className=" text-[30px] underline mt-5">Frontend</div>
        <div className="flex gap-2 flex-wrap ">
          {skillsFrontend?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className="text-[25px] underline mt-5">Backend</div>
        <div className="flex gap-2 flex-wrap ">
          {skillsBackend?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className=" text-[25px] underline mt-5">
          Deployment & Version Control
        </div>
        <div className="flex gap-2 flex-wrap ">
          {skillsDeployment?.map((item, index) => (
            <SkillCard key={index} logo={item.photo} name={item.name} />
          ))}
        </div>
        <div className="h-screen w-full flex items-center justify-end ">
          <div className=" w-[70%]">
            {" "}
            <h1 className="relative text-[45px] ">
              Experiences
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2 title-underline w-[200px] bg-primary"></div>
            <div className="mt-10 group flex flex-col w-full cursor-pointer">
              <h2 className="text-[30px]  ">Frontend Developper - Intern</h2>
              <div className="flex justify-between font-medium text-[20px] ">
                <h3>
                  <span className=" no-underline group-hover:underline font-medium hover:font-bold  duration-500">
                    FreemoPay
                  </span>
                  , Yaoundé Cameroon
                </h3>{" "}
                <h3 className="text-[17px] ">April 2024 - Present</h3>
              </div>
              <h3 className="font-medium text-[15px] mt-5">
                ReactJS - TypeScript - Redux - TailwindCSS{" "}
              </h3>
              <div className="flex justify-center">
                <span className="w-full show-border mt-5 h-0.5 bg-gradient-to-r from-gray via-primary to-gray "></span>
              </div>
            </div>
            <div className="mt-10 group flex flex-col w-full cursor-pointer">
              <h2 className="text-[30px]  ">Web Developper - Intern</h2>
              <div className="flex justify-between font-medium text-[20px] ">
                <h3>
                  <span className=" no-underline u group-hover:underline font-medium hover:font-bold  duration-500">
                    SEED Soft Engine
                  </span>
                  , Yaoundé Cameroon
                </h3>{" "}
                <h3 className="text-[17px] ">Jully 2023 - September 2023</h3>
              </div>
              <h3 className="font-medium text-[15px] mt-5">
                ReactJS - NodeJS - Express - MongoDB
              </h3>
              <div className="flex justify-center">
                <span className="w-full show-border mt-5 h-0.5 bg-gradient-to-r from-gray via-primary to-gray "></span>
              </div>
            </div>
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
