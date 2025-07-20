'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import HomePage from "./components/Home"
import Drive from "./components/Drive"
import Trash from "./components/Trash"
export default function Dashboard() {
    useEffect(() => {
        const onPageLoad = () => {
            const list: HTMLElement | null = document?.getElementById('list')
            const openlist: HTMLElement | null = document?.getElementById('listbtn')
            const closelist: HTMLElement | null = document?.getElementById('listbtn2')

            openlist?.addEventListener("click", function () {
                list?.classList.remove('right-[150%]')
            })
            closelist?.addEventListener("click", function () {
                list?.classList.add('right-[150%]')
            })
        };

        onPageLoad();
    }, []);
    useEffect(() => {
        const onPageLoad = () => {
            const list: HTMLElement | null = document?.getElementById('searchbox')
            const closelist: HTMLElement | null = document?.getElementById('searchbtn2')

            list?.addEventListener("click", function () {
                list?.classList.add('w-full')
            })
            closelist?.addEventListener("click", function () {
                list?.classList.add('right-[150%]')
            })
        };

        onPageLoad();
    }, []);
    const [pageState, setPageState] = useState(1)
    return (
        <main className="text-[#06213D] h-[100vh] flex flex-col bg-[#EBEBEB]">
            <div id="list" className=" fixed xl:hidden flex flex-row z-50 w-full h-full right-[150%]">
                <div id="listbtn2" className="w-full h-full flex flex-row">
                    <div className="w-1/2 px-3 md:px-8 py-4 shadow-2xl relative text-sm 2xl:text-lg bg-[#EBEBEB] h-full flex flex-col gap-10">
                        <button className="h-6 flex flex-col w-6 justify-between items-center">
                            <div className="bg-black w-full h-1"></div>
                            <div className="bg-black w-full h-1"></div>
                            <div className="bg-black w-full h-1"></div>
                        </button>
                        <button className="bg-white w-2/3 md:w-1/2 flex flex-row rounded-full gap-2 md:gap-4 p-2 ">
                            <div className="bg-black rounded-full h-full aspect-square text-white"><p>+</p></div>
                            <p>Add file</p>
                        </button>
                        <div className="flex flex-col w-full gap-5 pr-8">
                            <button className="rounded-full hover:border-[1px] py-2 px-1 md:px-4 text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(1)}>
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z" fill="#1C274C"></path> </g></svg>
                                <p>Home</p>
                            </button>
                            <button className="rounded-full hover:border-[1px] py-2 px-1 md:px-4  text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(2)}>
                                <svg fill="#1C274C" viewBox="0 0 24 24" className="h-6 w-6"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20 13H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 5h-2v-2h2v2zm4 0h-2v-2h2v2zm.775-7H21l-1.652-7.434A2 2 0 0 0 17.396 2H6.604a2 2 0 0 0-1.952 1.566L3 11H20.775z"></path></g></svg>
                                <p>My drives</p>
                            </button>
                            <button className="rounded-full hover:border-[1px] py-2 px-1 md:px-4  text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(3)}>
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#1C274C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" fill="#1C274C"></path> </g></svg>
                                <p>Deleted files</p></button>
                        </div>
                        <div className="absolute w-full bottom-0 gap-3 pr-6 md:pr-16 flex flex-col">
                            <div className="flex flex-row gap-2 items-center">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426" stroke="#1C274C"></path> </g></svg>
                                <p >
                                    Available storage
                                </p>
                            </div>
                            <div className="h-2 rounded-full border-2 border-[#06213D] bg-[#06213D] w-full" >
                                <div className="border-[#06213D] bg-white h-full rounded-full w-2/10"></div>
                            </div>
                            <p>1200 MB / ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3 pt-3 md:px-7.5 md:pt-11 gap-6 xl:gap-0  h-1/12 items-center flex  flex-row">
                <button id="listbtn" className="h-6 flex xl:hidden flex-col aspect-square justify-between items-center">
                    <div className="bg-black w-full h-1"></div>
                    <div className="bg-black w-full h-1"></div>
                    <div className="bg-black w-full h-1"></div>
                </button>
                <Link href={'/Dashboard'} className="w-3/6 md:w-1/3 xl:w-1/6 pr-0 md:pr-8  justify-start">
                    <Image width={1000} height={1000} alt="" src={'/logo.png'}></Image>
                </Link>
                <div className=" w-2/6 md:w-2/3 xl:w-5/6">
                    <div id="" className="bg-[#D9D9D9] w-full xl:w-1/5 rounded-full px-1 md:px-3 flex items-center flex-row">
                        <svg viewBox="0 0 1024 1024" className="hidden md:flex h-6 w-6" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></g></svg>
                        <input type="search" className=" flex rounded-full px-1 py-3 md:p-3 w-full text-xs md:text-lg outline-0" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="w-full h-11/12 p-0 md:p-7.5  items-center flex flex-row">
                <div className="w-1/6 relative text-sm 2xl:text-lg  h-full hidden xl:flex flex-col gap-10">
                    <button className="bg-white w-1/2 flex flex-row rounded-full gap-4 p-2 ">
                        <div className="bg-black rounded-full h-full aspect-square text-white"><p>+</p></div>
                        <p>Add file</p>
                    </button>
                    <div className="flex flex-col w-full gap-5 pr-8">
                        <button className="rounded-full hover:border-[1px] py-2 px-4 text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(1)}>
                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z" fill="#1C274C"></path> </g></svg>
                            <p>Home</p>
                        </button>
                        <button className="rounded-full hover:border-[1px] py-2 px-4  text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(2)}>
                            <svg fill="#1C274C" viewBox="0 0 24 24" className="h-6 w-6"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20 13H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 5h-2v-2h2v2zm4 0h-2v-2h2v2zm.775-7H21l-1.652-7.434A2 2 0 0 0 17.396 2H6.604a2 2 0 0 0-1.952 1.566L3 11H20.775z"></path></g></svg>
                            <p>My drives</p>
                        </button>
                        <button className="rounded-full hover:border-[1px] py-2 px-4  text-start hover:shadow-lg flex flex-row gap-2" onClick={() => setPageState(3)}>
                            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#1C274C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" fill="#1C274C"></path> </g></svg>
                            <p>Deleted files</p></button>
                    </div>
                    <div className="absolute w-full bottom-0 gap-3 pr-16 flex flex-col">
                        <div className="flex flex-row gap-2 items-center">
                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426" stroke="#1C274C"></path> </g></svg>
                            <p >
                                Available storage
                            </p>
                        </div>
                        <div className="h-2 rounded-full border-2 border-[#06213D] bg-[#06213D] w-full" >
                            <div className="border-[#06213D] bg-white h-full rounded-full w-2/10"></div>
                        </div>
                        <p>1200 MB / ...</p>
                    </div>
                </div>
                <div className=" w-full xl:w-5/6 h-full bg-white rounded-4xl px-3 py-11 md:px-9">
                    {pageState == 1 && <HomePage setPageState={setPageState} />}
                    {pageState == 2 && <Drive setPageState={setPageState} />}
                    {pageState == 3 && <Trash setPageState={setPageState} />}
                </div>
            </div>
        </main>
    )
}
