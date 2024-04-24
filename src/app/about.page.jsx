import SkillCard from "@/components/SkillCard";
const About = () => {
  const skillsFrontend = [
    { name: "RasenganJS", photo: "" },
    { name: "ReactJS", photo: "" },
    { name: "TypeScript", photo: "" },
    { name: "Redux", photo: "" },
    { name: "TailwindCSS", photo: "" },
    { name: "Javascript", photo: "" },
  ];
  const skillsBackend = [
    { name: "NodeJS", photo: "" },
    { name: "Express", photo: "" },
    { name: "MongoDB", photo: "" },
  ];
  const skillsDeployment = [
    { name: "Git & GitHub", photo: "" },
    { name: "Vercel", photo: "" },
    { name: "", photo: "" },
  ];
  return (
    <section className="bg-gray font-ojuju">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px]  font-bold">
        <div>
          <h1 className="relative">
            About me
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[200px] bg-primary"></div>
        </div>
      </div>
      <section className=" w-full flex flex-col gap-5 px-[10%]  text-primary text-[20px]  font-bold">
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
        <div className="h-screen w-full flex items-center justify-end">
          <div className=" w-[70%]">
            {" "}
            <h1 className="relative text-[45px] ">
              Experiences
              <div className="absolute top-0 text-cover w-full bg-gray "></div>
            </h1>
            <div className="min-h-2 title-underline w-[200px] bg-primary"></div>
            <div className="mt-10 flex flex-col w-full ">
              <h2 className="text-[30px]  ">Frontend Developper - Intern</h2>
              <div className="flex justify-between font-medium text-[20px] ">
                <h3>FreemoPay, Yaoundé Cameroon</h3>{" "}
                <h3 className="text-[17px] ">April 2024 - Present</h3>
              </div>
              <h3 className="font-medium text-[15px] mt-5">
                ReactJS - TypeScript - Redux - TailwindCSS{" "}
              </h3>
              <div className="flex justify-center">
                <span className="w-full show-border mt-5 h-0.5 bg-gradient-to-r from-gray via-primary to-gray "></span>
              </div>
            </div>
            <div className="mt-10 flex flex-col w-full ">
              <h2 className="text-[30px]  ">Web Developper - Intern</h2>
              <div className="flex justify-between font-medium text-[20px] ">
                <h3>SEED Soft Engine, Yaoundé Cameroon</h3>{" "}
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
  title: "About Page",
  description: "About me",
};
export default About;
