const About = () => {
  const skillsFrontend = [
    { name: "RasenganJS", photo: "" },
    { name: "ReactJS", photo: "" },
    { name: "Redux", photo: "" },
    { name: "TailwindCSS", photo: "Javascript" },
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
            <div
              key={index}
              className="size-[200px] flex items-center  justify-center rounded-md bg-primary hover:bg-gray-100 hover:text-primary hover:border-2 border-primary transition ease-in-out text-white hover:shadow-md cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="text-[25px] underline mt-5">Backend</div>
        <div className="flex gap-2 flex-wrap ">
          {skillsBackend?.map((item, index) => (
            <div
              key={index}
              className="size-[200px] flex items-center  justify-center rounded-md bg-primary hover:bg-gray-100 hover:text-primary hover:border-2 border-primary transition ease-in-out text-white hover:shadow-md cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className=" text-[25px] underline mt-5">
          Deployment & Version Control
        </div>
        <div className="flex gap-2 flex-wrap ">
          {skillsDeployment?.map((item, index) => (
            <div
              key={index}
              className="size-[200px] flex items-center  justify-center rounded-md bg-primary hover:bg-gray-100 hover:text-primary hover:border-2 border-primary transition ease-in-out text-white hover:shadow-md cursor-pointer"
            >
              {item.name}
            </div>
          ))}
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
