import CourseCard from "@/components/CourseCard";
function Courses() {
  return (
    <section className="flex gap-5 justify-center p-5">
      <CourseCard />
    </section>
  );
}
Courses.path = "/courses";
Courses.metadata = {
  title: "Home | Beral ASSONFACK",
  description: "Home page",
};

export default Courses;
