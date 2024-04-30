import { Link } from "rasengan";
import Image from "@rasenganjs/image";
import Hero from "@/components/Hero";

const Home = () => {
  return <Hero />;
};

Home.path = "/";
Home.metadata = {
  title: "Home | Beral ASSONFACK",
  description: "Home page",
};

export default Home;
