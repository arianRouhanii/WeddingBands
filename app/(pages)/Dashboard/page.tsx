'use client'
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HomePage from "./components/Home";
import Drive from "./components/Drive";
import Trash from "./components/Trash";

const navItems = [
  {
    label: "Home",
    page: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth={1.5} >
        <path d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM12.7502 18.0016C12.7502 18.4116 12.4102 18.7516 12.0002 18.7516C11.5902 18.7516 11.2502 18.4116 11.2502 18.0016V15.0016C11.2502 14.5916 11.5902 14.2516 12.0002 14.2516C12.4102 14.2516 12.7502 14.5916 12.7502 15.0016V18.0016Z" />
      </svg>
    ),
  },
  {
    label: "My Drives",
    page: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth={1.2}>
        <path d="M19.32 2H4.68C3.21 2 2 3.21 2 4.68V7.31C2 8.79 3.21 10 4.68 10H19.31C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7C6.75 7.41 6.41 7.75 6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7ZM10.75 7C10.75 7.41 10.41 7.75 10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7ZM18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z" />
        <path d="M19.32 14H4.68C3.21 14 2 15.21 2 16.68V19.31C2 20.79 3.21 22 4.68 22H19.31C20.79 22 21.99 20.79 21.99 19.32V16.69C22 15.21 20.79 14 19.32 14ZM6.75 19C6.75 19.41 6.41 19.75 6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19ZM10.75 19C10.75 19.41 10.41 19.75 10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19ZM18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" />
      </svg>

    ),
  },
  {
    label: "Deleted Files",
    page: 3,
    icon: (
      <svg width="24" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth={1.1}>
        <path d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z" />
        <path d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z" />
      </svg>

    ),
  },
];

export default function Dashboard() {
  const [pageState, setPageState] = useState(1);

  useEffect(() => {
    const list = document.getElementById("list");
    const openlist = document.getElementById("listbtn");
    const closelist = document.getElementById("listbtn2");

    openlist?.addEventListener("click", () => list?.classList.remove("right-[150%]"));
    closelist?.addEventListener("click", () => list?.classList.add("right-[150%]"));
  }, []);

  return (
    <main className="text-[#06213D] h-screen flex flex-col bg-[#EBEBEB] select-none">
      <div className="w-full px-3 pt-3 md:px-3 md:py-11 gap-6 xl:gap-0 h-1/12 items-center flex flex-row">
        <button id="listbtn" className="h-6 flex xl:hidden flex-col aspect-square justify-between items-center">
          <div className="bg-black w-full h-1"></div>
          <div className="bg-black w-full h-1"></div>
          <div className="bg-black w-full h-1"></div>
        </button>
        <Link href="/Dashboard" className="w-3/6 md:w-1/3 xl:w-1/6 pr-0 md:pr-8 justify-start">
          <Image width={1000} height={1000} alt="" src="/logo.png" />
        </Link>
        <div className="w-2/6 md:w-2/3 xl:w-5/6">
          <div className="bg-[#D9D9D9] focus-within:bg-white hover:bg-white w-full xl:w-1/5 rounded-full px-1 md:px-3 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#06213D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 22L20 20" stroke="#06213D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <input type="search" className="flex px-1 py-3 md:p-3 w-full text-xs outline-0" placeholder="Search" />
          </div>
        </div>
        <Link href={'/Dashboard'} className="bg-red-400 rounded-full w-8 h-8 aspect-square text-white justify-center flex items-center">KO</Link>
      </div>
      <div className="w-full h-11/12 flex flex-row">
        <div className="w-1/6 text-sm hidden xl:flex flex-col p-5 justify-between">
          <div className="w-full flex flex-col gap-10 ">
            <input type="file" id="addfile" className="hidden" />
            <label htmlFor="addfile" className="bg-white cursor-pointer w-2/3 md:w-1/2 flex flex-row rounded-full gap-2 p-2">
              <div className="bg-black rounded-full h-full aspect-square text-white flex items-center justify-center">+</div>
              <p>Add file</p>
            </label>

            <div className="flex flex-col w-full gap-5 pr-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPageState(item.page)}
                  className={`rounded-full py-2 px-4 text-start border border-black/0 flex flex-row items-center gap-2 transition-all duration-200
                    ${pageState === item.page
                      ? 'shadow-lg border border-blue-950 text-blue-950'
                      : 'hover:shadow-lg hover:border hover:border-black text-[#192840]'
                    }`}
                >
                  {React.cloneElement(item.icon, {
                    fill: pageState === item.page ? 'currentColor' : 'none',
                    stroke: pageState === item.page ? 'none' : 'currentColor',
                    strokeWidth: item.icon.props.strokeWidth || 1.5,
                  })}
                  <p>{item.label}</p>
                </button>
              ))}
            </div>
          </div>
          <div className=" gap-3 flex flex-col ">
            <div className="flex flex-row gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.26906 13.0088C6.73906 12.7388 6.14906 12.5988 5.54906 12.5988C0.869062 12.9288 0.869062 19.7388 5.54906 20.0688H16.6391C17.9891 20.0788 19.2891 19.5788 20.2791 18.6688C23.5691 15.7988 21.8091 10.0288 17.4791 9.47878C15.9191 0.10878 2.38906 3.66878 5.59906 12.5988" stroke="#192840" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8496 9.92172C16.3696 9.66172 16.9396 9.52172 17.5196 9.51172" stroke="#192840" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>
                Available storage
              </p>
            </div>
            <div className="h-2 rounded-full border-2 border-[#06213D] bg-[#06213D] w-full" >
              <div className="border-[#06213D] bg-white h-full rounded-full w-2/10"></div>
            </div>
            <p>1200 MB / ...</p>
          </div>
        </div>
        <div className="w-full xl:w-5/6 h-full bg-white rounded-4xl md:mr-3 px-3 py-11 md:px-9">
          {pageState === 1 && <HomePage setPageState={setPageState} />}
          {pageState === 2 && <Drive setPageState={setPageState} />}
          {pageState === 3 && <Trash setPageState={setPageState} />}
        </div>
      </div>
      <div
        id="list"
        className="fixed top-0 right-[150%] transition-all duration-300 h-full w-2/3 bg-white shadow-lg z-50 p-5 flex flex-col gap-5"
      >
        <button
          id="listbtn2"
          className="self-end text-xl font-bold"
        >
          ✕
        </button>

        <input type="file" id="addfile-mobile" className="hidden" />
        <label htmlFor="addfile-mobile" className="bg-white cursor-pointer w-2/3 flex flex-row rounded-full gap-2 p-2">
          <div className="bg-black rounded-full h-full aspect-square text-white flex items-center justify-center">+</div>
          <p>Add file</p>
        </label>
        <hr />
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setPageState(item.page)}
            className={`rounded-full py-2 px-4 text-start border border-black/0 flex flex-row items-center gap-2 transition-all duration-200
                    ${pageState === item.page
                ? 'shadow-lg border border-blue-950 text-blue-950'
                : 'hover:shadow-lg hover:border hover:border-black text-[#192840]'
              }`}
          >
            {React.cloneElement(item.icon, {
              fill: pageState === item.page ? 'currentColor' : 'none',
              stroke: pageState === item.page ? 'none' : 'currentColor',
              strokeWidth: item.icon.props.strokeWidth || 1.5,
            })}
            <p>{item.label}</p>
          </button>
        ))}
      </div>
    </main>
  );
}
