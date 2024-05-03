function Message() {
  return (
    <section className="flex w-full  justify-end">
      <div className="flex flex-col w-[60%]">
        <div className="pt-20 pb-10  text-primary text-[60px] font-ojuju font-bold">
          <h1 className="relative">
            Leave a message
            <div className="absolute top-0 text-cover w-full bg-gray "></div>
          </h1>
          <div className="min-h-2 title-underline w-[70%] bg-primary"></div>
        </div>
        <form action="" className="flex flex-col gap-3 ">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-[22px] ">
              Name / Pseudo *
            </label>
            <input
              type="text"
              placeholder="assaf"
              className="px-3 py-2 bg-gray border border-gray-400 rounded-md text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-[22px] ">
              E-mail *
            </label>
            <input
              type="email"
              placeholder="beral.assaf@gmail.com"
              className="px-3 py-2 bg-gray border border-gray-400 rounded-md text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-[22px] ">
              Message *
            </label>
            <textarea
              type="text"
              placeholder="Hello, ..."
              className="px-3 py-2 bg-gray border border-gray-400 rounded-md text-[18px] font-medium focus:outline-none focus:border-primary"
            />
          </div>
          <button className="py-3 bg-primary hover:bg-gray-400 text-[18px] text-gray-100 font-bold rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Message;
