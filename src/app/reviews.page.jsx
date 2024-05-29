import { Link } from "rasengan";
import Image from "@rasenganjs/image";
import Hero from "@/components/Hero";
import classNames from "classnames";
import { useEffect, useState } from "react";
import axios from "axios";
import Toast from "@/components/Toast";
const Reviews = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastSubtitle1, setToastSubtitle1] = useState("");
  const [toastSubtitle2, setToastSubtitle2] = useState("");
  const displayToast = (type, title, subtitle1, subtitle2) => {
    setShowToast(true);
    setToastType(type);
    setToastTitle(title);
    setToastSubtitle1(subtitle1);
    setToastSubtitle2(subtitle2);

    // setTimeout(() => {
    //   setShowToast(false);
    // }, 6000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setClicked(true);
    if (name && isEmailValid(email) && message && !isLoading) {
      setIsLoading(true);
      axios
        .post(import.meta.env.RASENGAN_MY_EMAIL_API_URL, {
          from: email,
          subject: `Review from Portfolio. Name: ${name} Profile: ${profile}`,
          message: `email: ${email}  ${message}`,
        })
        .then(() => {
          setIsLoading(false);
          displayToast(
            "succes",
            "Thanks!",
            "Thanks for your review!",
            "It will soon appear in the list below.",
          );
          setName("");
          setEmail("");
          setProfile("");
          setMessage("");
          setClicked(false);
          console.log("message succesfully sent");
        })
        .catch(() => {
          setIsLoading(false);
          displayToast(
            "error",
            "Uh Oh!",
            "Sorry error occured!",
            "Please try again",
          );
          console.log("message not sent! An error occcured!");
        });
    }
  };
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="z-10 bg-gray px-[5%] md:px-[10%]  ">
      <div className=" w-full flex flex-col items-center justify-center text-primary ">
        <div className="pt-40 pb-20 text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
          <h1 className="relative">
            Leave me a review
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="relative flex flex-col gap-5 w-full md:w-1/2"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              Name / Pseudo *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="assaf"
              className={classNames(
                !name && clicked && "!border-danger",
                "px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary",
              )}
            />
            {!name && clicked && (
              <p className="text-danger text-normal font-medium">
                Enter your name or pseudo
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              E-mail *
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="beral.assaf@gmail.com"
              className={classNames(
                !isEmailValid(email) && clicked && "!border-danger",
                "px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary",
              )}
            />{" "}
            {!isEmailValid(email) && clicked && (
              <p className="text-danger text-normal font-medium">
                Enter a valid email
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px] "
            >
              Profile Description
            </label>
            <input
              type="text"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder="Front-end Developer"
              className={classNames(
                "px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary",
              )}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-bold text-[18px] md:text-[22px]"
            >
              Review *
            </label>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Hello, ..."
              className={classNames(
                !message && clicked && "!border-danger",
                "px-3 py-2  bg-gray border border-gray-400 rounded-md text-[17px] md:text-[18px] font-medium focus:outline-none focus:border-primary",
              )}
            />{" "}
            {!message && clicked && (
              <p className="text-danger text-normal font-medium">
                Enter your message
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 mt-2 bg-primary hover:bg-gray-400 text-[18px] text-gray-100 font-bold rounded-md shadow-md hover:shadow-sm"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
        {
          <Toast
            show={showToast}
            type={toastType}
            title={toastTitle}
            subtitle1={toastSubtitle1}
            subtitle2={toastSubtitle2}
            setShow={setShowToast}
          />
        }

        <div className=" mt-32 md:mt-40 my-10 md:my-20 text-primary  text-[30px] md:text-[50px] font-ojuju font-bold">
          <h1 className="relative">
            What they Say about me
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <div className="animate-pulse pt-14 pb-40 text-[#04000022] text-[40px] md:text-[60px] font-ojuju font-bold">
          Be the first to leave a review...
        </div>
      </div>
    </section>
  );
};

Reviews.path = "/reviews";
Reviews.metadata = {
  title: "Reviews | Beral ASSONFACK",
  description: "Home page",
};

export default Reviews;
