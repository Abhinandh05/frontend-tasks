'use client'
import React, {useEffect} from 'react'
import {Globe, LogOut} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Header = () => {
    const router = useRouter();
    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn !== "true") {
            router.push("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        router.push("/login");
    };

    return (
        <header className="w-full border-b-[1.04px] border-gray-200">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[200px] pt-[16.56px] pb-[16.56px] gap-[12.42px]">


                <div className="flex items-center -ml-2 sm:-ml-4 md:-ml-8 lg:-ml-12 xl:-ml-15 cursor-pointer">
                    <Image
                        src="/navbar.png"
                        alt="EventHex Logo"
                        width={169.79}
                        height={35.05}
                        priority
                        onClick={()=> router.push('/')}
                        className="w-20 h-auto sm:w-24 md:w-32 lg:w-40 xl:w-[169.79px] xl:h-[35.05px]"
                    />
                </div>


                <button className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

            </div>
            {/*<button*/}
            {/*    onClick={handleLogout}*/}
            {/*    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group"*/}
            {/*    title="Logout"*/}
            {/*>*/}
            {/*    <LogOut size={20} />*/}
            {/*</button>*/}
        </header>
    )
}
export default Header