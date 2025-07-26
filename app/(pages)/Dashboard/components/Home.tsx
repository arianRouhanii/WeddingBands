import Image from "next/image"
interface Stage1Props {
    setPageState: (page: number) => void;
}
export default function HomePage({ setPageState }: Stage1Props) {
    return (
        <div className="w-full text-[#06213D] gap-5 md:gap-6 flex flex-col">
            <button onClick={() => setPageState(1)} className="hidden"></button>
            <h2 className="text-xl font-bold md:pt-5  text-[#0074A8]"> Your plan </h2>
            <div className="rounded-2xl p-7.5 flex flex-col w-full md:w-1/2 xl:w-1/4 gap-5 bg-[#EBEBEB]">
                <div className="flex flex-row gap-2">
                    <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/smLogo.png'}></Image></div>
                    <p className="font-bold">Plan name</p>
                </div>
                <div className=" gap-3 flex flex-col">
                    <p>
                        Drive storage
                    </p>
                    <div className="h-2 rounded-full border-2 border-[#06213D] bg-[#06213D] w-full" >
                        <div className="border-[#06213D] bg-white h-full rounded-full w-2/10"></div>
                    </div>
                    <p>1200 MB / ...</p>
                </div>
            </div>
            <h2 className="text-xl font-bold md:pt-5  text-[#0074A8]"> Recent Files </h2>
            <div className="flex flex-row gap-2 md:gap-5">
                <div className="rounded-2xl relative group aspect-square flex overflow-hidden flex-col w-1/2 md:w-1/5 xl:w-1/9  bg-[#EBEBEB]">
                    <div className=" w-full overflow-hidden"><Image alt="" src={'/Example.png'} width={1000} height={1000}></Image></div>
                    <p className="font-bold p-2 absolute bottom-[-50] group-hover:bottom-0 right-0 left-0 text-white text-center bg-[#06213D]">file name</p>
                </div>
                <div className="rounded-2xl relative group aspect-square flex overflow-hidden flex-col w-1/2 md:w-1/5 xl:w-1/9  bg-[#EBEBEB]">
                    <div className=" w-full overflow-hidden"><Image alt="" src={'/Example.png'} width={1000} height={1000}></Image></div>
                    <p className="font-bold p-2 absolute bottom-[-50] group-hover:bottom-0 right-0 left-0 text-white text-center bg-[#06213D]">file name</p>
                </div>
            </div>
        </div>
    )
}