import { Link } from "rasengan";
function ViewMoreBtn({ url }) {
  return (
    <Link
      to={url}
      className="  px-4 py-3 hover:-translate-y-4 duration-300  rounded-md bg-primary text-white shadow-2xl hover:shadow-sm "
    >
      View more
    </Link>
  );
}

export default ViewMoreBtn;
