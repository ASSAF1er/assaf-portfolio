import ProjectCard from "@/components/ProjectCard";
import agroreseau from "@assets/agroreseau.jpg";
import billit from "@assets/billit.png";
import digital_school_dashboard from "@assets/digital-school-dashboard.jpg";
import doctor from "@assets/doctor.jpg";
import flexing_academy from "@assets/flexing-academy.jpg";
import SimpleProjectCard from "@/components/SimpleProjectCard";
import cseAvocat from "@assets/cse-avocat.png"
import flipCard from "@assets/flip-card.png"
import { useEffect } from "react";
const Works = () => {
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
      name: "Lawyers Website",
      description: " An example of website for a lawyer",

      skills: ["ReactJS", "Typescript"],
      url: "https://cse-avocat.vercel.app/",
      photo: cseAvocat,
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
    {
      name: "Flexing Academy",
      skills: ["ReactJS", "TailwindCSS"],
      description: "A website for a home classes agency",
      url: "https://flexingacademy.com",
      photo: flexing_academy,
    },

    {
      name: "Doctor ",
      skills: ["ReactJS", "TailwindCSS"],
      description: "A landing page for a doctor",
      url: "https://figma-to-code-challenge-week1-assaf.vercel.app/",
      photo: doctor,
    },
    {
      name: "Flip Card animation ",
      skills: ["ReactJS", "TailwindCSS"],
      description: "A flip card component that can be added to any website to make it stunning",
      url: "https://flip-card-animation-coral.vercel.app/",
      photo: flipCard,
    },
  ];
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className=" z-10 bg-gray px-[5%] md:px-[10%] ">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px] font-ojuju font-bold">
        <div>
          <h1 className="relative">
            My works
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
      </div>
      {/*for large screens*/}
      <div className="hidden md:flex flex-col w-full gap-10">
        {projects?.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            skills={item.skills}
            description={item.description}
            url={item.url}
            photo={item.photo}
          />
        ))}
      </div>
      {/*for small screens */}
      <div className=" md:hidden flex flex-col items-center w-full gap-10">
        {projects.map((item, index) => (
          <SimpleProjectCard
            key={index}
            photo={item.photo}
            name={item.name}
            skills={item.skills}
            url={item.url}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

Works.path = "/works";
Works.metadata = {
  title: "Works | Beral ASSONFACK",
  description: "my works",
};
export default Works;
