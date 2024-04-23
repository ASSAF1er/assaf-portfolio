const Works = () => {
  return (
    <section className="bg-gray">
      <div className="h-screen w-full flex items-center justify-center text-primary text-[60px] font-ojuju font-bold">
        <div>
          <h1>My works</h1>
          <div className="min-h-2 w-[200px] bg-primary"></div>
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
