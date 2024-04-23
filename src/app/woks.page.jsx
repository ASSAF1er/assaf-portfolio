const Works = () => {
  return (
    <section className="bg-gray">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px] font-ojuju font-bold">
        <div>
          <h1 className="relative">
            My works
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[200px] bg-primary"></div>
        </div>
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
