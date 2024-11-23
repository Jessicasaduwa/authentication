import React from "react";

const Home = () => {
  return (
    <div>
      <body className="bg-[#202227] text-gray-200 font-sans">
        <nav className="flex items-center h-20 mx-12">
          <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 sm:px-16">
            <div className="my-6  relative">
              <div className="bg-[#2d68ff] h-[14px] w-[14px] rounded-full absolute left-8 top-1 ring ring-black"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="rgba(255,255,255,1)"
              >
                <path d="M15.936 2.50098L21.501 8.06595V15.936L15.936 21.501H8.06595L2.50098 15.936V8.06595L8.06595 2.50098H15.936Z"></path>
              </svg>
            </div>

            <div>
              <ul className="hidden sm:flex ml-24 space-x-4 sm:space-x-10 gap-6">
                <li className="flex items-center hover:text-neutral-500 cursor-pointer">
                  Home
                </li>
                <li className="flex items-center hover:text-neutral-500 cursor-pointer">
                  About
                </li>
                <li className="flex items-center hover:text-neutral-500 cursor-pointer">
                  Services
                </li>
                <li className="flex items-center hover:text-neutral-500 cursor-pointer">
                  FAQs
                </li>
              </ul>
            </div>

            <button className="bg-[#2d68ff] text-white w-32 p-2 text-sm rounded-full">
              Get Started
            </button>
          </div>
        </nav>

        <section className="my-20 mx-auto">
          <div className="flex-row">
            <h1 className="text-center text-4xl font-medium p-4">
              Manage your Development Tasks with Ease
            </h1>
            <p className="text-center">
              Unlock the full potential of your startup with our tailored
              services designed to guide you through with every stage of growth.
            </p>
          </div>
          <div className="flex justify-center items-center my-12 gap-8">
            <button className="bg-[#161010] w-24 p-2 rounded-full">
              <a href="/login">Log In </a>{" "}
            </button>
            <button className="bg-[#9f9d9e] w-24 p-2 rounded-full text-black">
              <a href="/signup">Sign In </a>{" "}
            </button>
          </div>

          <div className="flex justify-center">
            <img
              className=""
              src="/original-db52871927fcfd3034f14e3e1041f366.png"
              alt=""
            />
          </div>
        </section>
      </body>
    </div>
  );
};

export default Home;
