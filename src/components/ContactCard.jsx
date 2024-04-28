import { Link } from "rasengan";
import Image from "@rasenganjs/image";
function ContactCard({ photo, title, subTitle, url }) {
  return (
    <Link
      to={url}
      className="group flex gap-3 justify-center hover:justify-normal px-4 h-[100px] w-[100px] hover:w-[280px] overflow-hidden  bg-primary rounded-[50px] hover:rounded-[6px] shadow-xl hover:shadow-sm duration-500 ease-in-out"
    >
      <div className="flex items-center justify-center rounded-full">
        <Image
          src={photo}
          alt={title}
          height={50}
          width={50}
          className="bg-gray rounded-full border border-gray "
        />
      </div>
      <div className="group-hover:flex flex-col justify-center  text-white hidden text-nowrap duration-300 transition-[display] ">
        <h3 className="text-[20px] font-bold"> {title}</h3>
        <span className="text-[18px] ">{subTitle}</span>
      </div>
    </Link>
  );
}

export default ContactCard;
