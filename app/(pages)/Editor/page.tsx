'use client'
import Image from "next/image"
import React, { useState, useEffect, ChangeEvent } from "react"
import Link from "next/link"
export default function Editor() {
    const [selectedOption, setSelectedOption] = useState<'Enviroment' | 'GemEnv' | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses' | 'Export' | 'Branding' | 'Advanced'>('Enviroment')

    const [selectedImage, setSelectedImage] = useState(null)
    function ImageChange(e: any) {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
        }
    }
    function deleteImg() {
        const logo = document.getElementById('logochoose') as HTMLInputElement;
        logo.value = "";
        setSelectedImage(null)
    }
    useEffect(() => {
        selectedImage === null ? document.getElementById("removeBtn1")?.classList.add('hidden') : document.getElementById('removeBtn1')?.classList.remove('hidden')
        selectedImage === null ? document.getElementById("logochoose")?.classList.remove('hidden') : document.getElementById('logochoose')?.classList.add('hidden')
    }, [selectedImage])
    const [selectedImage2, setSelectedImage2] = useState(null)
    function ImageChange2(e: any) {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage2(e.target.files[0])
        }
    }
    function deleteImg2() {
        const logo2 = document.getElementById('logochoose2') as HTMLInputElement;
        logo2.value = "";
        setSelectedImage2(null)
    }
    useEffect(() => {
        selectedImage2 === null ? document.getElementById("removeBtn2")?.classList.add('hidden') : document.getElementById('removeBtn2')?.classList.remove('hidden')
        selectedImage2 === null ? document.getElementById("logochoose2")?.classList.remove('hidden') : document.getElementById('logochoose2')?.classList.add('hidden')
    }, [selectedImage2])
    const [selectedImage3, setSelectedImage3] = useState(null)
    function ImageChange3(e: any) {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage3(e.target.files[0])
        }
    }
    function deleteImg3() {
        const logo3 = document.getElementById('logochoose3') as HTMLInputElement;
        logo3.value = "";
        setSelectedImage3(null)
    }
    useEffect(() => {
        selectedImage3 === null ? document.getElementById("removeBtn3")?.classList.add('hidden') : document.getElementById('removeBtn3')?.classList.remove('hidden')
        selectedImage3 === null ? document.getElementById("logochoose3")?.classList.remove('hidden') : document.getElementById('logochoose3')?.classList.add('hidden')
    }, [selectedImage3])

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [SSLChecked, setSSLChecked] = useState<boolean>(false);

    const [range1Value, setRange1Value] = useState<number>(0);
    const handleRange1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange1Value(Number(e.target.value))
    }

    const CategoriesArray = ['Rings', 'Eaarrings', 'Necklaces', 'Bracelets', 'Watches', 'Other']
    const FitOptionsArray = ['Contain', 'Cover', 'Fill', 'Scale down']
    return (
        <main className="text-[#06213D] h-[100vh] text-xs flex flex-col bg-[#EBEBEB]">
            <div className="w-full justify-between p-2.5 md:pt-11 gap-6 xl:gap-0  h-1/12 items-center flex  flex-row">
                <Link href={'/Dashboard'} className="w-1/8 pr-8  justify-start">
                    <Image width={1000} height={1000} alt="" src={'/logo.png'}></Image>
                </Link>
                <div className="w-1/8 pl-8 flex flex-row gap-2" dir="rtl">
                    <button className="bg-red-400 rounded-full w-8 aspect-square text-white justify-center flex items-center">KO</button>
                    <div className="flex text-sm font-bold flex-row gap-0.5">
                        <button className="bg-blue-400 rounded-r-xl h-8 px-4 text-white">+</button>
                        <button className="bg-blue-400 rounded-l-xl h-8 px-5 text-white">Save</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-11/12 py-7.5 pr-7.5 pl-2.5  items-center flex flex-row">
                <div className="w-1/8 relative text-sm pr-2.5 h-full hidden xl:flex flex-col gap-10">
                    <div className="flex flex-row gap-2"><button className="bg-black" >__</button><p className="font-bold">Project settings</p></div>
                    <div className="w-full flex flex-col gap-3">
                        <Image className="rounded-lg" alt="" src={'/FilePic.png'} width={1000} height={1000}></Image>
                        <button className="bg-blue-400 rounded-full w-full py-1.5 font-bold text-white">Update Poster</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <textarea className="w-full outline-0 border-[1px] border-gray-300 bg-white p-2 text-sm resize-none h-[100px] rounded-sm" placeholder="Description"></textarea>
                        <select className="bg-white outline-0 border-[1px] border-gray-300 w-full p-2 text-sm rounded-sm">
                            {CategoriesArray.map((item, index) => (
                                <option key={index} value={item.toLocaleLowerCase()}>{item}</option>
                            ))}
                        </select>
                        <input type="text" placeholder="Add tags" className="bg-white outline-0 border-[1px] border-gray-300 w-full p-2 text-sm rounded-lg"></input>
                    </div>
                </div>
                <div className="w-6/8 h-full bg-blue-200 rounded-lg cursor-grab">
                </div>
                <div className="w-1/8 relative text-sm  h-full flex flex-row ">
                    <div className="w-9/10 select-none  bg-[#EBEBEB] overflow-y-scroll">
                        <div id="Enviroment" className={` ${selectedOption !== "Enviroment" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5 `}>
                            <p className="font-bold text-sm text-center">Enviroment</p>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                            </div>
                        </div>
                        <div id="GemEnv" className={` ${selectedOption !== "GemEnv" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5`}>
                            <p className="font-bold text-sm text-center">Gem Env</p>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                            </div>
                        </div>
                        <div id="Background" className={` ${selectedOption !== "Background" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5`}>
                            <p className="font-bold text-sm text-center">Background</p>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                                <div className="bg-gray-400 rounded-full w-10 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                                <div className="bg-blue-400 rounded-full w-10 aspect-square"></div>
                            </div>
                        </div>
                        <div id="Scene" className={` ${selectedOption !== "Scene" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5`}>
                            <p className="font-bold text-sm text-center">Scene</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-400 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                                <div className="bg-gray-400 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                            </div>
                        </div>
                        <div id="ModelStage" className={`  ${selectedOption !== "ModelStage" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5`}>
                            <p className="font-bold text-sm text-center">ModelStage</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-400 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                                <div className="bg-gray-400 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                            </div>
                        </div>
                        <div id="Ground" className={`  ${selectedOption !== "Ground" ? 'hidden' : ''} flex w-full p-2 items-center flex-col gap-5 `}>
                            <p className="font-bold text-sm text-center">Ground</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-400 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                                <div className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
                            </div>
                        </div>
                        <div id="Poses" className={`  ${selectedOption !== "Poses" ? 'hidden' : ''} flex w-full p-2 flex-col gap-3 `}>
                            <p className="font-bold text-sm text-center">Poses</p>
                            <button className=" px-2 py-1 rounded-full outline-0 bg-blue-400 text-white">Download</button>
                        </div>
                        <div id="Export" className={`  ${selectedOption !== "Export" ? 'hidden' : ''} flex w-full p-2 flex-col gap-3 `}>
                            <p className="font-bold text-sm text-center">Export</p>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-center text-blue-400">Snapshot</p>
                                <p>Size</p>
                                <div className="flex flex-row gap-2">
                                    <input type="number" className="outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2" />
                                    <input type="number" className="outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2" />
                                </div>
                                <select className="bg-white border-[1px] border-gray-300 px-2 py-1 rounded-sm outline-0">
                                    <option value="">png</option>
                                    <option value="">jpeg</option>
                                    <option value="">webp</option>
                                </select>
                                <button className=" px-2 py-1 rounded-full outline-0 bg-blue-400 text-white">Download</button>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-center text-blue-400">3D file</p>
                                <div className="flex flex-row gap-1">
                                    <label className="relative gap-2 inline-flex items-center cursor-pointer" >
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-5 h-5 p-1 bg-white border-[1px] border-gray-300 rounded-full peer peer-checked:bg-blue-400 ">
                                            <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" ></path> </g></svg>
                                        </div>
                                        <p>Compress</p>
                                    </label>
                                </div>
                                <button className=" px-2 py-1 rounded-full outline-0 bg-blue-400 text-white">Download</button>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-center text-blue-400">Scene Settings</p>
                                <p className="text-xs">Export your setup, including all scene settings — HDRs, background, ground, and configurators.</p>
                                <button className=" px-2 py-1 rounded-full outline-0 bg-blue-400 text-white">Download</button>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-center text-blue-400">Turntable video</p>
                                <p>Size</p>
                                <div className="flex flex-row gap-2">
                                    <input type="number" className="outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2" />
                                    <input type="number" className="outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="FPS">FPS</label>
                                        <input type="number" id="FPS" className="outline-0 border-[1px] border-gray-300 bg-white rounded-sm px-2" />
                                    </div>
                                    <div className="flex flex-col w-1/2 gap-2">
                                        <label htmlFor="AA">AA quality</label>
                                        <input type="number" id="AA" className="outline-0 border-[1px] border-gray-300 bg-white rounded-sm mr-2 px-2" />
                                    </div>
                                </div>
                                <p>Duration</p>
                                <input type="number" className="outline-0 border-[1px] border-gray-300 w-full bg-white rounded-sm px-2" />
                                <button className=" px-2 py-1 rounded-full outline-0 bg-blue-400 text-white">Download</button>
                            </div>
                        </div>
                        <div id="Branding" className={`  ${selectedOption !== "Branding" ? 'hidden' : ''} flex w-full p-2 flex-col gap-5`}>
                            <p className="font-bold text-sm text-center">Branding</p>
                            <div className="flex flex-col gap-2">
                                <p>Branding Logo</p>
                                <div className="flex flex-row gap-2 relative">
                                    <div className="absolute flex flex-row gap-2 top-0.5">
                                        <label htmlFor="logochoose" className=" text-center w-12 text-5xl text-white" >+</label>
                                        <label htmlFor="logochoose2" className=" text-center w-12 text-5xl text-white" >+</label>
                                        <label htmlFor="logochoose3" className=" text-center w-12 text-5xl text-white" >+</label>
                                    </div>
                                    <div>
                                        <input type="file" id="logochoose" accept=".png , .jpg , .svg" onChange={ImageChange} className="outline-0 border-[1px] border-gray-400 w-12 aspect-square text-gray-300 bg-gray-300 rounded-full px-2" />
                                        <div onClick={() => deleteImg()} className="relative group">
                                            <div className="aspect-square bg-[#EBEBEB] rounded-full w-12 justify-center flex items-center">{selectedImage && <Image src={URL.createObjectURL(selectedImage)} alt="logo1" width={50} height={50} className="bg-black/10 group-hover:bg-black/30 rounded-full" />}</div>
                                            <button className=" opacity-0 group-hover:opacity-100 absolute rotate-45 left-[9px] -bottom-[1px] text-5xl text-white" id="removeBtn1">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="file" id="logochoose2" accept=".png , .jpg , .svg" onChange={ImageChange2} className="outline-0 border-[1px] border-gray-400 w-12 aspect-square text-gray-300 bg-gray-300 rounded-full px-2" />
                                        <div onClick={() => deleteImg2()} className="relative group">
                                            <div className="aspect-square bg-[#EBEBEB] rounded-full  w-12 justify-center flex items-center">{selectedImage2 && <Image src={URL.createObjectURL(selectedImage2)} alt="logo1" width={50} height={50} className="bg-black/10 group-hover:bg-black/30 rounded-full" />}</div>
                                            <button className=" opacity-0 group-hover:opacity-100 absolute rotate-45 left-[9px] -bottom-[1px] text-5xl text-white" id="removeBtn2">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="file" id="logochoose3" accept=".png , .jpg , .svg" onChange={ImageChange3} className="outline-0 border-[1px] border-gray-400 w-12 aspect-square text-gray-300 bg-gray-300 rounded-full px-2" />
                                        <div onClick={() => deleteImg3()} className="relative group">
                                            <div className="aspect-square bg-[#EBEBEB] rounded-full  w-12 justify-center flex items-center">{selectedImage3 && <Image src={URL.createObjectURL(selectedImage3)} alt="logo1" width={50} height={50} className="bg-black/10 group-hover:bg-black/30 rounded-full" />}</div>
                                            <button className=" opacity-0 group-hover:opacity-100 absolute rotate-45 left-[9px] -bottom-[1px] text-5xl text-white" id="removeBtn3">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <label className="relative justify-between inline-flex items-center cursor-pointer" >
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400 "></div>
                                        <p>show logo</p>
                                    </label>
                                    <label className="relative justify-between inline-flex items-center cursor-pointer" >
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400 "></div>
                                        <p>loading screen logo</p>
                                    </label>
                                </div>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-center text-blue-400">Logo Layout</p>
                                <label className="relative justify-between inline-flex items-center cursor-pointer" >
                                    <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} className="sr-only peer" />
                                    <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400 "></div>
                                    <p>Preview</p>
                                </label>
                                <p>fit</p>
                                <select disabled={!isChecked} className={` ${isChecked ? 'opacity-100' : ' opacity-50'} bg-white border-[1px] border-gray-300 outline-0 w-full p-2 text-sm rounded-sm `}>
                                    {FitOptionsArray.map((item, index) => (
                                        <option key={index} value={item.toLocaleLowerCase()}>{item}</option>
                                    ))}
                                </select>
                                <p>Size</p>
                                <div className="flex flex-row gap-2">
                                    <input type="number" disabled={!isChecked} className={` ${isChecked ? 'opacity-100' : ' opacity-50'} outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2 `} />
                                    <input type="number" disabled={!isChecked} className={` ${isChecked ? 'opacity-100' : ' opacity-50'} outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2 `} />
                                </div>
                                <p>Position</p>
                                <div className="flex flex-row gap-2">
                                    <input type="number" disabled={!isChecked} className={` ${isChecked ? 'opacity-100' : ' opacity-50'} outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2 `} />
                                    <input type="number" disabled={!isChecked} className={` ${isChecked ? 'opacity-100' : ' opacity-50'} outline-0 border-[1px] border-gray-300 w-1/2 bg-white rounded-sm px-2 `} />
                                </div>
                            </div>
                        </div>
                        <div id="Advanced" className={`  ${selectedOption !== "Advanced" ? 'hidden' : ''} flex w-full p-2 flex-col gap-5 `}>
                            <p className="font-bold text-sm text-center">Advanced</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between">
                                    <p>Env Rotation</p>
                                    <p>{range1Value}</p>
                                </div>
                                <input type="range" min='0' max='6.283' step='0.001' value='range1Value' onChange={handleRange1Change} className="w-full accent-blue-400 h-1" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between">
                                    <p>Env Rotation</p>
                                    <p>0</p>
                                </div>
                                <input type="range" className="w-full accent-blue-400 h-1" />
                            </div>
                            <label className="relative gap-2 inline-flex items-center cursor-pointer" >
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 p-1 bg-white border-[1px] border-gray-300 rounded-full peer peer-checked:bg-blue-400 ">
                                    <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" ></path> </g></svg>
                                </div>
                                <p>Fixed Env Diraction</p>
                            </label>
                            <label className="relative gap-2 inline-flex items-center cursor-pointer" >
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 p-1 bg-white border-[1px] border-gray-300 rounded-full peer peer-checked:bg-blue-400 ">
                                    <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" ></path> </g></svg>
                                </div>
                                <p>Tonemap Background</p>
                            </label>
                            <label className="relative gap-2 inline-flex items-center cursor-pointer" >
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-5 h-5 p-1 bg-white border-[1px] border-gray-300 rounded-full peer peer-checked:bg-blue-400 ">
                                    <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" ></path> </g></svg>
                                </div>
                                <p>Enable Cache</p>
                            </label>
                            <p className="font-bold text-sm text-center">Plugins</p>
                            <div className="flex flex-row gap-1">
                                <label className="relative gap-2 inline-flex items-center cursor-pointer" >
                                    <input type="checkbox" onChange={(e) => setSSLChecked(e.target.checked)} checked={SSLChecked} className="sr-only peer" />
                                    <div className="w-5 h-5 p-1 bg-white border-[1px] border-gray-300 rounded-full peer peer-checked:bg-blue-400 ">
                                        <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" ></path> </g></svg>
                                    </div>
                                    <p>SSBevel</p>
                                </label>
                            </div>
                            <p className={`${SSLChecked ? 'opacity-100' : 'opacity-0'} bg-yellow-50 border border-yellow-200 p-3 text-xs rounded-lg `}>Enabling SSBevel may slow down the performance.</p>
                            <input type="range" disabled={!SSLChecked} className={` ${SSLChecked ? 'opacity-100' : ' opacity-0'} accent-blue-400 h-1`} />
                        </div>
                    </div>
                    <div className="w-1/10 flex flex-col p-1 gap-5">
                        <button onClick={() => setSelectedOption('Enviroment')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Enviroment' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Enviroments</span>
                        </button>
                        <button onClick={() => setSelectedOption('GemEnv')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'GemEnv' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Gem Enviroments</span>
                        </button>
                        <button onClick={() => setSelectedOption('Background')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Background' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Backgrounds</span>
                        </button>
                        <button onClick={() => setSelectedOption('Scene')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Scene' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Scene Presets</span>
                        </button>
                        <button onClick={() => setSelectedOption('ModelStage')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'ModelStage' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Stages</span>
                        </button>
                        <button onClick={() => setSelectedOption('Ground')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Ground' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Grounds</span>
                        </button>
                        <button onClick={() => setSelectedOption('Poses')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Poses' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Poses</span>
                        </button>
                        <button onClick={() => setSelectedOption('Export')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Export' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Export</span>
                        </button>
                        <button onClick={() => setSelectedOption('Branding')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Branding' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Branding Settings</span>
                        </button>
                        <button onClick={() => setSelectedOption('Advanced')} className="group flex flex-row-reverse rounded-full p-1 aspect-square w-8 ml-2">
                            <svg viewBox="0 -2 20 20" className={` ${selectedOption !== 'Advanced' ? 'fill-black' : 'fill-blue-500'} `}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g id="Page-1"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4801.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.223912,4654.18486 L366.493912,4647.27399 C366.197912,4646.94519 366.156912,4646.46333 366.393912,4646.09108 L368.635912,4643.39447 C368.818912,4643.10812 369.138912,4642.97482 369.482912,4642.97482 L378.512912,4642.97482 C378.849912,4642.97482 379.163912,4643.10022 379.348912,4643.37867 L381.558912,4645.93112 C381.805912,4646.3014 381.771912,4646.77831 381.476912,4647.11206 L374.723912,4654.18289 C374.327912,4654.63019 373.623912,4654.6292 373.223912,4654.18486 M379.099912,4641 L368.929912,4641 C368.241912,4641 367.601912,4641.30807 367.235912,4641.88373 L364.305912,4645.69019 C363.832912,4646.4347 363.914912,4647.38754 364.506912,4648.04417 L372.496912,4656.34038 C373.297912,4657.22707 374.703912,4657.21818 375.495912,4656.32359 L383.505912,4647.8378 C384.094912,4647.17229 384.164912,4646.20068 383.675912,4645.46012 L380.776912,4641.85608 C380.407912,4641.29622 379.776912,4641 379.099912,4641" > </path> </g> </g> </g> </g></svg>
                            <span className="text-xs absolute right-5 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">Advanced Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
