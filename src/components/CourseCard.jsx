import js_icon from "@/assets/javascript.svg";
function CourseCard() {
  return (
    <div className="flex flex-col w-[200px]">
      <img src={js_icon} alt="" className="w-full h-[100px] " />
    </div>
  );
}

export default CourseCard;
