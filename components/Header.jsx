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
            router.push("/login"); // redirect if not logged in
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        router.push("/login");
    };
    return (
        <header className="w-full border-b-[1.04px] border-gray-200">

            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[200px] pt-[16.56px] pb-[16.56px] gap-[12.42px]">

                <div className="flex items-center -ml-15">
                    <Image
                        src="/navbar.png"
                        alt="EventHex Logo"
                        width={169.79}
                        height={35.05}
                        priority
                    />
                </div>



                <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Globe className="w-5 h-5" />
                </button>

            </div>
            <button
                onClick={handleLogout}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group"
                title="Logout"
            >
                <LogOut size={20} />
            </button>
        </header>


    )
}
export default Header
