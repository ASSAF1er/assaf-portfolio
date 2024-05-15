import { Link } from "rasengan";
function ViewMoreBtn({ url }) {
  return (
    <Link
      to={url}
      className="  px-4 py-3 w-[80%] text-center md:w-auto hover:-translate-y-4 duration-300  rounded-md bg-primary text-white shadow-md hover:shadow-sm "
    >
      View more
    </Link>
  );
}

export default ViewMoreBtn;
