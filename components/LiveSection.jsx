import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";
import { IoPlaySharp } from "react-icons/io5";

const LiveSection = () => {
    return (
        <div className="w-full flex flex-col items-center">

            <div className="w-full h-[450px] relative flex flex-col items-center justify-center bg-gradient-to-r from-[#C2D6FF] to-white rounded-3xl border border-[#E2E4E9]">

                <div className="w-36 h-36 rounded-full bg-[#FFFFFF80] flex items-center justify-center -mt-15" >
                    <div className="w-28 h-28 rounded-full bg-[#EFECFF] flex items-center justify-center">
                        <div className="w-20 h-20 relative">
                            <Image
                                src="/dp.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>


                <div className="absolute bottom-5">
                    <p className="text-black-100 text-2xl font-mono">00:00:00</p>
                </div>
            </div>


            <div className="mt-6 flex flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-gray-200 text-blue-100 font-medium text-sm hover:bg-blue-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Leave Section
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-blue-100 text-white font-medium text-sm hover:bg-blue-500">
                    <PiWaveformBold />
                    Sound Check
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-red-100 text-white font-medium text-sm hover:bg-red-500 min-w-[140px]">
                    <IoPlaySharp />
                    Go Live
                </button>
            </div>
        </div>
    );
};

export default LiveSection;