import js_icon from "@/assets/javascript.svg";
import { Link } from "rasengan";
function CourseCard({ title, category, duration, chapters, image }) {
  return (
    <div
      id="skill"
      className="group flex flex-col gap-2 p-2 w-[250px] rounded-md bg-[#f5f5f4] border border-[#cbd5e1] overflow-hidden shadow-sm"
    >
      <div className=" h-[150px] w-full rounded-md overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md group-hover:scale-[1.06] duration-300 ease-in-out "
        />
      </div>
      <div className="px-2 flex flex-col justify-between text-ellipsis  ">
        <p className="text-sm">{category}</p>
        <h1 className="text-[18px] font-bold mb-2  line-clamp-2 ">{title}</h1>
        <div className="flex justify-between text-sm px-2">
          <span>{chapters} chapitres</span>
          <span>{duration}h</span>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-1 text-[15px] font-bold">
        <Link
          to="/"
          className="flex justify-center py-3 w-full   bg-[#0ea5e9] border border-[#cbd5e1] rounded-md"
        >
          Suivre
        </Link>
        <Link
          to="#"
          className="flex justify-center py-3 w-full   border border-[#cbd5e1] rounded-md"
        >
          Sauvegarder
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
