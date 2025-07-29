'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HomePage from "./components/Home";
import Drive from "./components/Drive";
import Trash from "./components/Trash";

const navItems = [
  { label: "Home", page: 1 },
  { label: "My Drives", page: 2 },
  { label: "Deleted Files", page: 3 },
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
    <main className="text-[#06213D] h-screen flex flex-col bg-[#EBEBEB]">
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
          <div className="bg-[#D9D9D9] hover:bg-white w-full xl:w-1/5 rounded-full px-1 md:px-3 flex items-center">
            <svg viewBox="0 0 1024 1024" className="hidden md:flex h-6 w-6" fill="#000000">
              <path d="M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704z" />
            </svg>
            <input type="search" className="flex px-1 py-3 md:p-3 w-full text-xs outline-0" placeholder="Search" />
          </div>
        </div>
        <Link href={'/Dashboard'} className="bg-red-400 rounded-full w-8 aspect-square text-white justify-center flex items-center">KO</Link>
      </div>
      <div className="w-full h-11/12 flex flex-row">
        <div className="w-1/6 text-sm hidden xl:flex flex-col gap-10 p-5">
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
                className={`rounded-full py-2 px-4 text-start flex flex-row gap-2 transition-all duration-200
                  ${pageState === item.page ? ' shadow-lg border border-[#0074A8]' : 'hover:shadow-lg hover:border'}`}
              >
                <span className="w-5 h-5 bg-[#1C274C] rounded-full"></span>
                <p>{item.label}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full xl:w-5/6 h-full bg-white rounded-4xl mr-3 px-3 py-11 md:px-9">
          {pageState === 1 && <HomePage setPageState={setPageState} />}
          {pageState === 2 && <Drive setPageState={setPageState} />}
          {pageState === 3 && <Trash setPageState={setPageState} />}
        </div>
      </div>
    </main>
  );
}