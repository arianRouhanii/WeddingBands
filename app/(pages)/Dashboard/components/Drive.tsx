import Image from "next/image"
interface Stage2Props {
    setPageState: (page: number) => void;
}
export default function Drive({ setPageState }: Stage2Props) {
    return (
        <div className="w-full text-[#06213D] gap-5 md:gap-10 flex flex-col">
            <button onClick={() => setPageState(2)} className="hidden"></button>
            <div className="w-full flex flex-row justify-between">
                <h2 className="text-xl font-bold  text-[#0074A8]"> My files  </h2>
                <div className="flex flex-row gap-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Rows"> <g id="Vector"> <path d="M6.5 19H17.5C17.9647 19 18.197 18.9999 18.3902 18.9614C19.1836 18.8036 19.8036 18.1836 19.9614 17.3902C19.9999 17.197 19.9999 16.9647 19.9999 16.5C19.9999 16.0353 19.9999 15.8031 19.9614 15.6099C19.8036 14.8165 19.1836 14.1962 18.3902 14.0384C18.197 14 17.9647 14 17.5 14H6.5C6.03534 14 5.80306 14 5.60986 14.0384C4.81648 14.1962 4.19624 14.8165 4.03843 15.6099C4 15.8031 4 16.0354 4 16.5C4 16.9647 4 17.1969 4.03843 17.3901C4.19624 18.1835 4.81648 18.8036 5.60986 18.9614C5.80306 18.9999 6.03535 19 6.5 19Z" stroke="#000000" ></path> <path d="M6.5 10H17.5C17.9647 10 18.197 9.99986 18.3902 9.96143C19.1836 9.80361 19.8036 9.18356 19.9614 8.39018C19.9999 8.19698 19.9999 7.96465 19.9999 7.5C19.9999 7.03535 19.9999 6.80306 19.9614 6.60986C19.8036 5.81648 19.1836 5.19624 18.3902 5.03843C18.197 5 17.9647 5 17.5 5H6.5C6.03534 5 5.80306 5 5.60986 5.03843C4.81648 5.19624 4.19624 5.81648 4.03843 6.60986C4 6.80306 4 7.03539 4 7.50004C4 7.9647 4 8.19694 4.03843 8.39014C4.19624 9.18352 4.81648 9.80361 5.60986 9.96143C5.80306 9.99986 6.03535 10 6.5 10Z" stroke="#000000" ></path> </g> </g> </g></svg>
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM12.75 4.5L13.5 3.75H19.5L20.25 4.5V10.5L19.5 11.25H13.5L12.75 10.5V4.5ZM14.25 5.25V9.75H18.75V5.25H14.25ZM3.75 13.5L4.5 12.75H10.5L11.25 13.5V19.5L10.5 20.25H4.5L3.75 19.5V13.5ZM5.25 14.25V18.75H9.75V14.25H5.25ZM12.75 13.5L13.5 12.75H19.5L20.25 13.5V19.5L19.5 20.25H13.5L12.75 19.5V13.5ZM14.25 14.25V18.75H18.75V14.25H14.25Z" fill="#080341"></path> </g></svg>
                </div>
            </div>
            <hr className="text-[#EBEBEB] text-2xl " />
            <div className="flex flex-row gap-8">
                <button className="w-1/8 md:w-1/16 gap-3 flex flex-col">
                    <div className=" aspect-square w-full"><Image alt="folder" src={'/folder.png'} width={500} height={500}></Image></div>
                    <p className="text-center"> folder name </p> 
                </button>
                <button className="w-1/8 md:w-1/16 gap-3 flex flex-col">
                    <div className=" aspect-square w-full"><Image alt="folder" src={'/folder.png'} width={500} height={500}></Image></div>
                    <p className="text-center"> folder name </p>
                </button>
            </div>
        </div>
    )
}