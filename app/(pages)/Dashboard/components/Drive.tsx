import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Stage3Props {
    setPageState: (page: number) => void;
}

export default function Drive({ setPageState }: Stage3Props) {
    const [selectedDiv, setSelectedDiv] = useState<number | null>(null);
    const [divs, setDivs] = useState([1, 2]);
    const [showPreview, setShowPreview] = useState(false);
    const [previewData, setPreviewData] = useState<{ id: number; name: string } | null>(null);
    const [showOptions, setShowOptions] = useState(false);
    const [layoutMode, setLayoutMode] = useState<'tile' | 'list'>('tile');
    const optionsRef = useRef<HTMLDivElement | null>(null);

    const handleDoubleClick = (divNumber: number) => {
        const folderName = `Folder ${divNumber}`;
        setSelectedDiv(divNumber);
        setPreviewData({ id: divNumber, name: folderName });
        setShowPreview(true);
    };

    const handleClosePreview = () => {
        setShowPreview(false);
    };

    const handleDestroyClick = () => {
        if (selectedDiv !== null) {
            setDivs(divs.filter(num => num !== selectedDiv));
            setSelectedDiv(null);
            setShowPreview(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full text-[#06213D] gap-5 md:gap-10 flex flex-col">
            {showPreview && previewData && (
                <div
                    id="preview"
                    className="fixed z-50 animate-fade-in transition-opacity duration-300 flex backdrop-blur-sm justify-center items-center inset-0 bg-black/50"
                >
                    <div className="bg-white overflow-hidden rounded-xl w-[54%] h-[70%] shadow-2xl">
                        <div className="p-4 items-center flex flex-row justify-between">
                            <div className="flex gap-2">
                                <div className="aspect-square w-6">
                                    <Image src={'/smLogo.png'} alt="" width={1000} height={1000}></Image>
                                </div>
                                <p>{previewData.name.toLowerCase()}.glb</p>
                            </div>
                            <div className="flex gap-2 text-white">
                                <button className="bg-blue-400 hover:bg-blue-100 hover:text-black rounded-full py-1 w-[12vh]">Download</button>
                                <Link href={'/Editor'} target="_blank" className="bg-blue-400 hover:bg-blue-100 hover:text-black text-center rounded-full py-1 w-[12vh]">Editor</Link>
                                <button className="bg-blue-400 hover:bg-blue-100 hover:text-black rounded-full py-1 w-[12vh]">Share</button>
                                <button id="closepreview" onClick={handleClosePreview} className="hover:bg-blue-100 text-black rounded-xl py-1 px-3">x</button>
                            </div>
                        </div>
                        <hr className="text-gray-300" />
                        <div className="flex flex-row h-full">
                            <div className="h-full w-[72%] bg-blue-100 items-center justify-center flex">3D model for {previewData.name}</div>
                            <div className="border-l border-gray-300 h-full w-[28%] p-5 gap-5 flex flex-col">
                                <div className="flex flex-row justify-between">
                                    <p className="font-bold text-xl">{previewData.name.toLowerCase()}.glb</p>
                                    <button className="border border-gray-300 hover:bg-gray-200 rounded-full justify-center p-1 items-center flex w-1/5">
                                        <svg width="15" height="15" viewBox="0 0 24 24" stroke="#000000" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </button>
                                </div>
                                <div><p className="text-black/50">Type</p><p>GLB</p></div>
                                <div><p className="text-black/50">Uploader</p><p>Koorosh</p></div>
                                <div><p className="text-black/50">Created</p><p>26 Jul 25</p></div>
                                <div><p className="text-black/50">Size</p><p>0.5 MB</p></div>
                                <div><p className="font-bold">Tags</p><p className="text-black/50">No tags</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <button onClick={() => setPageState(3)} className="hidden"></button>

            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xl font-bold text-[#0074A8]">My files</h2>
                    <div className="gap-2 flex">
                        <button
                            onClick={() => setLayoutMode('tile')}
                            className={` rounded-lg aspect-square h-full p-1 ${layoutMode === 'tile' ? 'bg-blue-100' : ''}`}
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM12.75 4.5L13.5 3.75H19.5L20.25 4.5V10.5L19.5 11.25H13.5L12.75 10.5V4.5ZM14.25 5.25V9.75H18.75V5.25H14.25ZM3.75 13.5L4.5 12.75H10.5L11.25 13.5V19.5L10.5 20.25H4.5L3.75 19.5V13.5ZM5.25 14.25V18.75H9.75V14.25H5.25ZM12.75 13.5L13.5 12.75H19.5L20.25 13.5V19.5L19.5 20.25H13.5L12.75 19.5V13.5ZM14.25 14.25V18.75H18.75V14.25H14.25Z" fill="#080341"></path> </g></svg>
                        </button>
                        <button
                            onClick={() => setLayoutMode('list')}
                            className={` rounded-lg aspect-square h-full p-1 ${layoutMode === 'list' ? 'bg-blue-100' : ''}`}
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Rows"> <g id="Vector"> <path d="M6.5 19H17.5C17.9647 19 18.197 18.9999 18.3902 18.9614C19.1836 18.8036 19.8036 18.1836 19.9614 17.3902C19.9999 17.197 19.9999 16.9647 19.9999 16.5C19.9999 16.0353 19.9999 15.8031 19.9614 15.6099C19.8036 14.8165 19.1836 14.1962 18.3902 14.0384C18.197 14 17.9647 14 17.5 14H6.5C6.03534 14 5.80306 14 5.60986 14.0384C4.81648 14.1962 4.19624 14.8165 4.03843 15.6099C4 15.8031 4 16.0354 4 16.5C4 16.9647 4 17.1969 4.03843 17.3901C4.19624 18.1835 4.81648 18.8036 5.60986 18.9614C5.80306 18.9999 6.03535 19 6.5 19Z" stroke="#000000" ></path> <path d="M6.5 10H17.5C17.9647 10 18.197 9.99986 18.3902 9.96143C19.1836 9.80361 19.8036 9.18356 19.9614 8.39018C19.9999 8.19698 19.9999 7.96465 19.9999 7.5C19.9999 7.03535 19.9999 6.80306 19.9614 6.60986C19.8036 5.81648 19.1836 5.19624 18.3902 5.03843C18.197 5 17.9647 5 17.5 5H6.5C6.03534 5 5.80306 5 5.60986 5.03843C4.81648 5.19624 4.19624 5.81648 4.03843 6.60986C4 6.80306 4 7.03539 4 7.50004C4 7.9647 4 8.19694 4.03843 8.39014C4.19624 9.18352 4.81648 9.80361 5.60986 9.96143C5.80306 9.99986 6.03535 10 6.5 10Z" stroke="#000000" ></path> </g> </g> </g></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[20px]">
                {selectedDiv !== null && (
                    <div className="flex text-xs md:text-sm flex-row gap-2 md:gap-3 items-center">
                        <p className="font-bold">1 selected</p>
                        <button className="px-4 py-2 bg-blue-100 flex flex-row gap-1 rounded-full" onClick={handleDestroyClick}>
                            Delete
                        </button>

                        <div className="relative" ref={optionsRef}>
                            <button
                                className="px-4 py-2 bg-blue-100 rounded-full"
                                onClick={() => setShowOptions(prev => !prev)}
                            >
                                ...
                            </button>
                            {showOptions && (
                                <div
                                    id="listOptions"
                                    className="absolute top-full left-0 mt-1 w-[130px] select-none cursor-pointer bg-white border border-blue-100 text-start shadow-lg rounded-sm z-10"
                                >
                                    <div className="py-1 hover:bg-blue-100 px-3">Open selection</div>
                                    <div className="py-1 hover:bg-blue-100 px-3">Select all</div>
                                    <div className="py-1 hover:bg-blue-100 px-3">Clear selection</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-[#EBEBEB] text-2xl h-1"></div>

            <div className="flex flex-col w-full">
                <div className={`gap-3 select-none flex w-full ${layoutMode === 'tile' ? 'flex-row flex-wrap' : 'flex-col'}`}>
                    {divs.map(num => (
                        <div
                            key={num}
                            onClick={() => setSelectedDiv(num)}
                            onDoubleClick={() => handleDoubleClick(num)}
                            className={`cursor-pointer px-3  rounded-lg transition-none
                                ${selectedDiv === num ? 'bg-blue-100' : 'bg-white'}
                                ${layoutMode === 'tile' ? 'w-[110px] h-[110px] py-0' : ' py-3 flex items-center border border-gray-200 w-full'}
                            `}
                        >
                            <div className={layoutMode === 'tile' ? 'aspect-square w-full' : 'w-6'}>
                                <svg viewBox="0 0 65 65" fill="none">
                                    <path d="M2.66602 41.3867V11.6978C2.66602 10.032 4.02962 8.63281 5.6955 8.63281H21.6925C22.8715 8.63281 23.9425 9.34413 24.4342 10.4157L26.0476 13.9581C26.5393 15.0297 27.6103 15.7422 28.7893 15.7422H56.4258C58.0917 15.7422 59.4141 17.0658 59.4141 18.7318V46.1998C59.4141 47.8656 58.0917 49.2578 56.4258 49.2578H5.6955C5.61577 49.2578 5.53706 49.2121 5.45898 49.206V54.9707H5.41557C5.41557 55.7324 4.79642 56.321 4.04079 56.321C3.28517 56.321 2.66602 55.6904 2.66602 54.9348V41.3867Z" fill="#0074A8" />
                                    <path d="M4.04079 56.321C4.79642 56.321 5.41557 55.7324 5.41557 54.9707H5.45898V26.6831C5.45898 25.0171 6.77155 23.6133 8.43743 23.6133H59.1678C60.8337 23.6133 62.207 25.0171 62.207 26.6831V57.0489C62.207 58.7148 60.8337 60.0488 59.1678 60.0488H8.43743C8.2616 60.0488 8.08945 60.0412 7.92188 60.0123C7.7138 60.0411 7.50166 60.0611 7.28559 60.0611C4.74144 60.0611 2.69801 58.0008 2.69801 55.4567C2.69801 55.3889 2.70258 55.3224 2.70537 55.2553C2.85099 55.8604 3.39536 56.321 4.04079 56.321Z" fill="#59CAFC" />
                                </svg>

                            </div>
                            <p className={`text-center ${layoutMode === 'list' ? 'ml-4 text-sm' : ''}`}>
                                Folder {num}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
