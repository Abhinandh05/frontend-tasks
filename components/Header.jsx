import React from 'react'
import {Globe} from "lucide-react";
import Image from "next/image";

const Header = () => {
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
        </header>


    )
}
export default Header
