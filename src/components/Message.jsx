import classNames from "classnames";
import { useState } from "react";
import axios from "axios";
import Toast from "./Toast";

function Message() {
  const [name, setName] = useState("");
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
          subject: `Message from Portfolio. Name: ${name}`,
          message: `email: ${email}  ${message}`,
        })
        .then(() => {
          setIsLoading(false);
          displayToast(
            "succes",
            "Thanks!",
            "Message succesfully sent!",
            "I will soon reply to you.",
          );
          setName("");
          setEmail("");

          setMessage("");
          setClicked(false);
          console.log("message succesfully sent");
        })
        .catch(() => {
          setIsLoading(false);
          displayToast("error", "Uh Oh!", "An error occured!", "Try again");
          console.log("message not sent! An error occcured!");
        });
    }
  };
  return (
    <section className="relative flex w-full  justify-center md:justify-end">
      <div className="flex flex-col md:w-[60%]">
        <div className="pt-20 pb-10  text-primary text-[40px] md:text-[60px] font-ojuju font-bold">
          <h1 className="relative">
            Leave a message
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3 "
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
              className="font-bold text-[18px] md:text-[22px]"
            >
              Message *
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
            className={
              (isLoading && "!cursor-not-allowed ",
              "py-3 mt-2 bg-primary hover:bg-gray-400 text-[18px] text-gray-100 font-bold rounded-md shadow-md hover:shadow-sm")
            }
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
      </div>
    </section>
  );
}

export default Message;
