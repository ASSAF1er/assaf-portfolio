import ProjectCard from "@/components/ProjectCard";
import agroreau_preview from "@assets/agroreseau_preview.png";
const Works = () => {
  const projects = [
    {
      name: "Billit",
      description:
        " A web app for generating invoices with real tim preview and possibility to download to pdf",
      url: "",
      photo: agroreau_preview,
    },
    {
      name: "AgroRéseau",
      description:
        "Une plateforme de mise en relation des producteurs agro-pastorauxavec des potentiels acheteurs",
      url: "",
      photo: agroreau_preview,
    },
    {
      name: "Digital School Dashboard",
      description: "A web app to help the director manage his training center",
      url: "",
      photo: agroreau_preview,
    },
    {
      name: "Flexing Academy",
      description: "A website for a home classes agency",
      url: "",
      photo: agroreau_preview,
    },

    {
      name: "Doctor ",
      description: "A landing page for a doctor",
      url: "",
      photo: agroreau_preview,
    },
  ];
  return (
    <section className="bg-gray px-[10%] ">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px] font-ojuju font-bold">
        <div>
          <h1 className="relative">
            My works
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-10">
        {projects?.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            description={item.description}
            url={item.url}
            photo={item.photo}
          />
        ))}
      </div>
    </section>
  );
};

Works.path = "/works";
Works.metadata = {
  title: "Works page",
  description: "my works",
};
export default Works;
