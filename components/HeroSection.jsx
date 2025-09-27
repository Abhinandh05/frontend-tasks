import React from 'react'
import Image from "next/image";
import {Globe} from "lucide-react";

export const HeroSection = () => {
    return (
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[200px] pt-[16.56px] pb-[16.56px] gap-[12.42px]">

            <div className="flex items-center">
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
    )
}
