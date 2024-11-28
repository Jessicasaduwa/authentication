import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">Dashboard page</h1>

      {!!user && <h1 className="text-3xl font-bold">Hello {user.name} 👋</h1>}
      {!!user && <h1 className="text-3xl font-bold">Hello {user.email} 👋</h1>}
      {!!user && <h1 className="text-3xl font-bold">Hello {user.iat} 👋</h1>}
      {!!user && <h1 className="text-3xl font-bold">Hello {user.id} 👋</h1>} */}

      <body className="font-mono bg-black">
        <div className="bg-[#181818] w-fit sm:w-full h-fit flex">
          <div className="hidden sm:flex md:max-w-56 lg:max-w-72 xl:max-w-xs lg:h-fit xl:h-screen flex-col justify-between py-2 bg-[#131313] ">
            <div className="text-white h-2/3">
              <div className="my-6 mx-9 relative">
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
              <ul className="flex flex-col space-y-1 sm:mx-7 md:mx-9 mb-2 text-[#3e3d3d]">
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
                  </svg>
                  Dashboard
                </li>
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5Z"></path>
                  </svg>
                  Products
                </li>
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z"></path>
                  </svg>
                  Campaigns
                </li>
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM5.00488 7.00281V12.0028H9.00488V7.00281H5.00488ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028ZM15.0049 12.0028V17.0028H19.0049V12.0028H15.0049Z"></path>
                  </svg>
                  Sales
                </li>
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M14.0049 2.00281C18.4232 2.00281 22.0049 5.58453 22.0049 10.0028C22.0049 13.2474 20.0733 16.0409 17.2973 17.296C16.0422 20.0718 13.249 22.0028 10.0049 22.0028C5.5866 22.0028 2.00488 18.4211 2.00488 14.0028C2.00488 10.7587 3.9359 7.96554 6.71122 6.71012C7.96681 3.93438 10.7603 2.00281 14.0049 2.00281ZM10.0049 8.00281C6.69117 8.00281 4.00488 10.6891 4.00488 14.0028C4.00488 17.3165 6.69117 20.0028 10.0049 20.0028C13.3186 20.0028 16.0049 17.3165 16.0049 14.0028C16.0049 10.6891 13.3186 8.00281 10.0049 8.00281ZM11.0049 9.00281V10.0028H13.0049V12.0028H9.00488C8.72874 12.0028 8.50488 12.2267 8.50488 12.5028C8.50488 12.7483 8.68176 12.9524 8.91501 12.9948L9.00488 13.0028H11.0049C12.3856 13.0028 13.5049 14.1221 13.5049 15.5028C13.5049 16.8835 12.3856 18.0028 11.0049 18.0028V19.0028H9.00488V18.0028H7.00488V16.0028H11.0049C11.281 16.0028 11.5049 15.7789 11.5049 15.5028C11.5049 15.2573 11.328 15.0532 11.0948 15.0109L11.0049 15.0028H9.00488C7.62417 15.0028 6.50488 13.8835 6.50488 12.5028C6.50488 11.1221 7.62417 10.0028 9.00488 10.0028V9.00281H11.0049ZM14.0049 4.00281C12.2214 4.00281 10.6196 4.78097 9.52064 6.01629C9.68133 6.00764 9.84254 6.00281 10.0049 6.00281C14.4232 6.00281 18.0049 9.58453 18.0049 14.0028C18.0049 14.1655 18 14.327 17.9905 14.4873C19.2265 13.3885 20.0049 11.7866 20.0049 10.0028C20.0049 6.6891 17.3186 4.00281 14.0049 4.00281Z"></path>
                  </svg>
                  Payouts
                </li>
                <li className="flex gap-2 hover:text-white hover:bg-[#181818] rounded-xl py-2 pl-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="26"
                    fill="currentColor"
                  >
                    <path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path>
                  </svg>
                  Settings
                </li>
              </ul>
            </div>

            <div className="h-1/2 flex flex-col sm:justify-end md:justify-around mt-4">
              <div className="bg-[#181818] rounded-xl mx-9 mb-3 p-2 h-60 hidden md:flex flex-col justify-between shadow-sm shadow-neutral-700">
                <div className="h-14 flex justify-between">
                  <div className="bg-[#00a555] rounded-full h-12 w-12 place-content-center m-3 p-2">
                    <svg
                      className="ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="text-black bg-[#555555] rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="mx-2 text-neutral-500 md:text-[12px] lg:text-sm">
                  Did you know you can set a Google Analytics code for your
                  products?
                </div>
                <button className="bg-[#181818] border border-neutral-500 mx-2 mb-3 rounded-lg p-2 text-white sm:text-sm lg:text-md">
                  Go Settings
                </button>
              </div>
              <button className="bg-[#2d68ff] mb-2 mx-5 md:mx-9 p-2 rounded-lg text-white flex justify-center items-center space-x-1">
                <span>New Product</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full py-2 space-y-12">
            <div className="flex flex-col m-8 gap-2 sm:gap:0">
              <div className="justify-between w-full h-12 sm:hidden flex">
                <img
                  src="/0048.png_1200.png"
                  alt=""
                  className="w-8 h-8 xl:w-10 xl:h-10 "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="42"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              </div>
              <div className="w-full">
                <p className="text-[#464646] font-extrabold flex justify-center sm:justify-normal">
                  Hi John, Welcome Back!
                </p>
                <div className="flex justify-center sm:justify-between">
                  <h1 className=" text-white text-4xl sm:3xl lg:text-4xl xl:text-5xl content-center">
                    Dashboard
                  </h1>
                  <img
                    src="/0048.png_1200.png"
                    alt=""
                    className="w-8 h-8 xl:w-10 xl:h-10 hidden sm:flex"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-8 gap-2">
              <div className="flex flex-col sm:flex-row gap-8 mb-10 sm:m-0 sm:gap-2 h-80 sm:h-52">
                <div className="bg-[#1d1c1e] w-full rounded-xl h-full">
                  <div className="flex space-x-4 mb-2 px-5 pt-5">
                    <h1 className="text-neutral-400 font-semibold text-sm lg:text-[16px]">
                      Outstanding owed
                    </h1>
                    <div className="hidden bg-zinc-800 md:flex h-5 xl:h-6 w-[76px] text-green-500 rounded-lg text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="23"
                        fill="rgba(0,177,0,1)"
                      >
                        <path d="M12 8L18 14H6L12 8Z"></path>
                      </svg>
                      <h1>+4.5%</h1>
                    </div>
                  </div>
                  <h1 className="md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-9 lg:mb-4 xl:mb-6 text-white px-4">
                    <span className="text-neutral-400">$</span>640
                    <span className="text-neutral-400">.80</span>
                  </h1>
                  <hr className="border-t border-neutral-800 w-full" />
                  <div className="flex mt-4 items-start gap-2 px-5">
                    <div className="hidden lg:flex place-content-center px-1 bg-[#fe9292] rounded-xl w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="30"
                        fill="currentColor"
                      >
                        <path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
                      </svg>
                    </div>
                    <div className="hidden lg:inline w-8/12 text-sm xl:text-[16px] xl:ml-2 xl:mr-4 text-neutral-600">
                      Payouts occur between the 1st and 3rd of each month
                    </div>
                    <button className="w-3/12 sm:w-5/12 lg:w-3/12 text-white text-[10px] lg:text-[14px] xl:text-md rounded-lg p-1 xl:p-2 border border-neutral-500">
                      View sale
                    </button>
                  </div>
                </div>
                <div className="bg-[#1d1c1e] w-full rounded-xl h-full">
                  <div className="flex space-x-4 mb-2 px-5 pt-5">
                    <h1 className="text-neutral-400 font-semibold text-sm lg:text-[16px]">
                      Total Payout
                    </h1>
                  </div>
                  <h1 className="md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-9 lg:mb-4 xl:mb-7 text-white px-4">
                    <span className="text-neutral-400">$</span>29,688
                    <span className="text-neutral-400">.00</span>
                  </h1>
                  <hr className="border-t border-neutral-800 w-full" />
                  <div className="flex mt-4 items-start gap-2 px-5">
                    <div className="hidden lg:flex place-content-center px-1 bg-[#f9c32f] rounded-xl w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="30"
                        fill="currentColor"
                      >
                        <path d="M2.00488 8.99979H21.0049C21.5572 8.99979 22.0049 9.4475 22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V8.99979ZM3.00488 2.99979H18.0049V6.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM15.0049 13.9998V15.9998H18.0049V13.9998H15.0049Z"></path>
                      </svg>
                    </div>
                    <div className="hidden lg:inline w-8/12 text-sm xl:text-[16px] xl:ml-2 xl:mr-4 text-neutral-600">
                      Update your payout method in {""}
                      <span className="text-white">Settings</span>
                    </div>
                    <button className="w-3/12 sm:w-5/12 lg:w-3/12 text-white text-[10px] lg:text-[14px] xl:text-md rounded-lg p-1 lg:p-2 border border-neutral-500">
                      View payouts
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#1d1c1e] h-80 rounded-lg text-white">
                <div className="flex justify-between px-5 py-6 text-xs lg:text-[16px]">
                  <span>Earnings history</span>
                  <div className="flex gap-2 xl:gap-0 xl:space-x-10">
                    <span>
                      <button className="text-neutral-600 hover:text-white hover:outline outline-offset-2 outline-3 outline-blue-600 rounded-full px-2">
                        Today
                      </button>
                    </span>
                    <span>
                      <button className="text-neutral-600 hover:text-white hover:outline outline-offset-2 outline-3 outline-blue-600 rounded-full px-2">
                        Last Week
                      </button>
                    </span>
                    <span>
                      <button className="text-neutral-600 hover:text-white hover:outline outline-offset-2 outline-3 outline-blue-600 rounded-full px-2">
                        Last Month
                      </button>
                    </span>
                    <span>
                      <button className="text-neutral-600 hover:text-white hover:outline outline-offset-2 outline-3 outline-blue-600 rounded-full px-2">
                        Last 6 months
                      </button>
                    </span>
                    <span>
                      <button className="text-neutral-600 hover:text-white hover:outline outline-offset-2 outline-3 outline-blue-600 rounded-full px-2">
                        All time
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Dashboard;
