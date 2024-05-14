import CourseCard from "@/components/CourseCard";
import { courses } from "./data";
function Courses() {
  return (
    <section className="flex gap-5 justify-center py-[10%] flex-wrap px-5">
      {courses?.map((item, index) => (
        <CourseCard
          title={item.title}
          category={item.categorie}
          image={item.image}
          duration={item.duration}
          chapters={item.chapters}
        />
      ))}
    </section>
  );
}
Courses.path = "/courses";
Courses.metadata = {
  title: "Home | Beral ASSONFACK",
  description: "Home page",
};

export default Courses;
