import github from "@assets/github.png";
import email from "@assets/email.png";
import linkedin from "@assets/linkedin.png";
import call from "@assets/call.png";
import Image from "@rasenganjs/image";
import ContactCard from "@/components/ContactCard";
import { Link } from "rasengan";
import Message from "@/components/Message";
const Contact = () => {
  const contacts = [
    {
      photo: github,
      title: "GitHub",
      subTitle: "ASSAF1er",
      url: "https://github.com/ASSAF1er/",
    },
    { photo: call, title: "Book a call", subTitle: "calendly.com", url: "" },
    {
      photo: linkedin,
      title: "Linkedin",
      subTitle: "Beral ASSONFACK",
      url: "https://www.linkedin.com/in/beral-assonfack-5a462727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  if (typeof document !== "undefined") document.documentElement.scrollTop = 0;
  return (
    <section className="z-10 bg-gray px-[5%] md:px-[10%] ">
      <div className=" w-full h-screen flex flex-col items-center justify-center mb-32 md:mb-0 ">
        <div className=" mt-60 md:mt-0 mb-20 md:mb-20 text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
          <h1 className="relative">
            Let's get in touch
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center gap-5">
          <Link
            to="mailto:beral.assaf@gmail.com"
            className="z-10 flex gap-3 px-4 h-[100px] w-[280px]  bg-primary rounded-md shadow-xl hover:shadow-sm"
          >
            <div className="flex items-center justify-center rounded-full">
              <Image
                src={email}
                alt="email"
                height={50}
                width={50}
                className="bg-gray rounded-full border border-gray "
              />
            </div>
            <div className="flex flex-col justify-center  text-white  ">
              <h3 className="text-[22px] font-bold"> Send an email</h3>{" "}
              <span className="text-[18px] font-medium ">
                beral.assaf@gmail.com
              </span>{" "}
            </div>
          </Link>
          {contacts?.map((item, index) => (
            <ContactCard
              key={index}
              photo={item.photo}
              title={item.title}
              subTitle={item.subTitle}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <Message />
    </section>
  );
};

Contact.path = "/contact";
Contact.metadata = {
  title: "Contact | Beral ASSONFACK",
  description: "my contacts",
};
export default Contact;
