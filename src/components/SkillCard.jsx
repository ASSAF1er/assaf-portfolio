import Image from "@rasenganjs/image";
function SkillCard({ logo, name }) {
  return (
    <div id="skill" className="flex flex-col items-center grayscale hover:grayscale-0 justify-center   relative skill-card group size-[150px] overflow-hidden rounded-md bg-primary    md:hover:-translate-y-[15px] transition duration-300 ease-in-out text-white hover:shadow-md cursor-pointer">
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="object-cover filter-invert"
      />{" "}
      {name}
      <span className="absolute -top-[250px] -left-1/2 brillance-effect w-[1px] h-[500px]   bg-gradient-to-r from-gray to-gray via-white "></span>
    </div>
  );
}

export default SkillCard;
