import Image from "@rasenganjs/image";
import { Link } from "rasengan";
import agroreau_preview from "@assets/agroreseau_preview.png";
function ProjectCard({ name, description, url, photo }) {
  return (
    <div className="z-30 project-card group flex gap-3 flex-row even:flex-row-reverse even:justify-end  grayscale hover:grayscale-0  ">
      <div className="z-20">
        <Image
          src={photo}
          alt="agroreseau"
          height={400}
          width={450}
          className="rounded-md object-cover bg-primary"
        />
      </div>
      <div className="z-10   w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-3 items-center justify-center overflow-hidden group-even:translate-x-[100%] odd:-translate-x-[80%] opacity-0 scale-0   invisible group-hover:-translate-x-[0%] group-hover:visible group-hover:opacity-100 group-hover:scale-100 duration-[1.5s] ease-in-out">
          <h1 className="text-[30px] font-bold">{name}</h1>
          <p className="text-center text-[20px] font-medium ">{description}</p>
          <Link
            to={url}
            className="relative  rounded-md border-2 border-gray px-4 py-3 text-[18px] font-bold bg-primary text-gray-100 overflow-hidden hover:border-gray-100  duration-200"
          >
            View project
            <span className="absolute -top-[250px] -left-[30px] brillance-effect w-[1px] h-[400px]   bg-gradient-to-r from-gray to-gray via-white "></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
