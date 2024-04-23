const About = () => {
  return (
    <section className="bg-gray">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px] font-ojuju font-bold">
        <div>
          <h1>About me</h1>
          <div className="min-h-2 w-[200px] bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

About.path = "/about";
About.metadata = {
  title: "About Page",
  description: "About me",
};
export default About;
