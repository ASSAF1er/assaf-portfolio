import classNames from "classnames";
import { useState } from "react";
import axios from "axios";

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
  const handleSubmit = (e) => {
    e.preventDefault();

    setClicked(true);
    if (name && isEmailValid(email) && message) {
      setIsLoading(true);
      axios
        .post(import.meta.env.RASENGAN_MY_EMAIL_API_URL, {
          from: email,
          subject: `Message from Portfolio. Name: ${name}`,
          message,
        })
        .then(() => {
          setIsLoading(false);
          console.log("message succesfully sent");
        })
        .catch(() => {
          setIsLoading(false);
          console.log("message not sent! An error occcured!");
        });
    }
  };
  return (
    <section className="flex w-full  justify-center md:justify-end">
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
            className="py-3 mt-2 bg-primary hover:bg-gray-400 text-[18px] text-gray-100 font-bold rounded-md shadow-md hover:shadow-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Message;
