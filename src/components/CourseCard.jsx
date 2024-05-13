import js_icon from "@/assets/javascript.svg";
function CourseCard() {
  return (
    <div className="group flex flex-col w-[200px] rounded-md overflow-hidden">
      <img
        src={js_icon}
        alt=""
        className="w-full h-[100px] object-cover rounded-md group-hover:scale-[1.05] duration-300 ease-in-out "
      />
      <div>
        description
      </div>
    </div>
  );
}

export default CourseCard;
