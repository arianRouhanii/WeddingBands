'use client'
import Link from "next/link"
import Image from "next/image"
export default function login() {
    return (
        <main className="text-black h-[100vh] flex flex-col justify-center items-center gap-5 bg-[#EBEBEB]" >
            <div className="w-full md:w-[50vh] absolute md:static top-3 px-30"><Image alt="wedding bands and co" src={'/logo.png'} width={1000} height={1000}></Image></div>
            <div className="w-full md:w-[50vh] flex flex-col justify-center items-center bg-[#EBEBEB] md:bg-white rounded-4xl py-10 px-3 md:px-20">
                <form action="/Dashboard" className="flex flex-col gap-5 justify-center items-center w-full">
                    <p className="font-bold">Log in</p>
                    <input type="email" className="bg-[#D9D9D9] rounded-full p-3 w-full outline-0" required placeholder="Email" />
                    <input type="text" className="bg-[#D9D9D9] rounded-full p-3 w-full outline-0" required placeholder="Password" />
                    <div className="w-full justify-end flex"><button>Forgot password?</button></div>
                    <input type="submit" className="bg-[#0B223E] cursor-pointer text-white font-bold rounded-full p-3 w-full outline-0" value={'Log in'} />
                    <div className="w-full justify-center flex"><p>Don't have an account? </p><button className="text-blue-500 underline"> Sign up </button></div>
                </form>
            </div>
        </main>
    )
}
