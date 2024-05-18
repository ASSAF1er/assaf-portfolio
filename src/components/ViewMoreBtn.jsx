import { Link } from "rasengan";
function ViewMoreBtn({ url }) {
  return (
    <Link
      to={url}
      className="  z-10 md:px-4 py-3  w-[80%] text-center md:w-auto hover:-translate-y-4 duration-300  rounded-md bg-primary text-white shadow-md hover:shadow-sm "
    >
      View more
    </Link>
  );
}

export default ViewMoreBtn;
