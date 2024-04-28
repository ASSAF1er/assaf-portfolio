import { Link } from "rasengan";
import Image from "@rasenganjs/image";
import Hero from "@/components/Hero";

const Home = () => {
  return <Hero />;
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
