import { Link } from "rasengan";
function SimpleProjectCard({ photo, name, skills, url, description }) {
  return (
    <div className="relative group size-[300px] overflow-hidden rounded-md shadow-md ">
      <img
        src={photo}
        alt=""
        className="w-full h-full rounded-md object-cover  hover:scale-[1.1] overflow-hidden duration-300"
      />
      <div className="absolute h-full top-[100%] group-hover:top-0  z-10   w-full flex items-center justify-center px-3 overflow-hidden backdrop-sepia  bg-white/80 duration-500">
        <div className="flex flex-col gap-3 items-center justify-center overflow-hidden group-even:translate-x-[100%] odd:-translate-x-[80%] opacity-0 scale-0   invisible group-hover:-translate-x-[0%] group-hover:visible group-hover:opacity-100 group-hover:scale-100 duration-700 ease-in-out">
          <h1 className="text-[30px] text-center font-bold">{name}</h1>

          <h1 className="text-[14px] w-full font-bold text-center">
            {skills?.map((item, index) => (
              <span>{`${item} ${index !== skills.length - 1 ? " - " : ""}`}</span>
            ))}
          </h1>

          <p className="text-center text-[18px] font-semibold">{description}</p>
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

export default SimpleProjectCard;
