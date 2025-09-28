"use client";
import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { waveVectors } from "@/constants";
import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";


const LiveSection = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isSoundChecking, setIsSoundChecking] = useState(false);
    const [time, setTime] = useState(0);
    const router = useRouter();
    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording]);


    const formatTime = (secs) => {
        const h = String(Math.floor(secs / 3600)).padStart(2, "0");
        const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
        const s = String(secs % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    const handleSoundCheck = () => {
        setIsSoundChecking(true);
        setIsRecording(false);
    };

    const handleGoLiveToggle = () => {
        if (isSoundChecking) {

            setIsSoundChecking(false);
            setIsRecording(true);
        } else if (isRecording) {

            setIsRecording(false);
            setTime(0);
        } else {

            setIsRecording(true);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[450px] relative flex flex-col items-center justify-center bg-gradient-to-r from-[#C2D6FF] to-white rounded-3xl border border-[#E2E4E9] overflow-hidden">

                {waveVectors.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center ${
                            isRecording || isSoundChecking ? "pulse-wave blink" : ""
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Wave ${index + 1}`}
                            fill
                            className="object-contain pointer-events-none"
                        />
                    </div>
                ))}


                <div className="w-36 h-36 rounded-full bg-[#FFFFFF80] flex items-center justify-center z-10">
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


                {isSoundChecking && (
                    <div className="absolute z-20 flex items-center justify-center w-[602px] h-[38px] left-1/2 -translate-x-1/2 transform bottom-16">
                        <div className="w-full h-full flex items-center justify-start rounded-lg px-4">
                            <p className="font-sans font-medium text-xl leading-7 tracking-normal text-left bg-gradient-to-r from-[#375DFB] to-[#DFE3EC] bg-clip-text text-transparent">
                                EventHex Stands out by tackling two key ...
                            </p>
                        </div>
                    </div>
                )}


                {!isSoundChecking && (
                    <div className="absolute bottom-5 z-10 flex items-center gap-3">
                        {isRecording && (
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                                <p className="text-red-500 font-medium text-sm">Recording</p>
                            </div>
                        )}
                        <p className="text-black-100 text-xl font-mono">{formatTime(time)}</p>
                    </div>
                )}
            </div>


            <div className="mt-6 flex flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-gray-200 text-blue-100 font-medium text-sm hover:bg-blue-50"
                onClick={() => router.push('/')}
                >
                    ✖ Leave Section
                </button>

                <button
                    onClick={handleSoundCheck}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-blue-100 text-white font-medium text-sm hover:bg-blue-500 transition-all duration-300"
                >
                    <PiWaveformBold />
                    Sound Check
                </button>

                <button
                    onClick={handleGoLiveToggle}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] font-medium text-sm min-w-[140px] transition-all duration-300 bg-red-100 text-white hover:bg-red-500"
                >
                    {(isSoundChecking || isRecording) ? <IoPauseSharp /> : <IoPlaySharp />}
                    {(isSoundChecking || isRecording) ? "Pause" : "Go Live"}
                </button>
            </div>


            <style jsx>{`
                @keyframes pulseWave {
                    0% {
                        transform: scale(1) rotate(0deg);
                        opacity: 0.3;
                        border-radius: 50%;
                    }
                    25% {
                        transform: scale(1.08) rotate(90deg);
                        opacity: 0.7;
                        border-radius: 60% 40% 60% 40%;
                    }
                    50% {
                        transform: scale(1.2) rotate(180deg);
                        opacity: 1;
                        border-radius: 40% 60% 40% 60%;
                    }
                    75% {
                        transform: scale(1.1) rotate(270deg);
                        opacity: 0.8;
                        border-radius: 60% 40% 60% 40%;
                    }
                    100% {
                        transform: scale(1) rotate(360deg);
                        opacity: 0.3;
                        border-radius: 50%;
                    }
                }

                .pulse-wave {
                    animation: pulseWave 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    filter: blur(0.5px);
                }

                @keyframes wavyBlink {
                    0% {
                        opacity: 1;
                        transform: scaleY(1);
                    }
                    20% {
                        opacity: 0.8;
                        transform: scaleY(0.95) skewX(2deg);
                    }
                    40% {
                        opacity: 0.3;
                        transform: scaleY(0.9) skewX(-2deg);
                    }
                    60% {
                        opacity: 0.1;
                        transform: scaleY(0.85) skewX(3deg);
                    }
                    80% {
                        opacity: 0.6;
                        transform: scaleY(0.92) skewX(-1deg);
                    }
                    100% {
                        opacity: 1;
                        transform: scaleY(1) skewX(0deg);
                    }
                }

                .blink {
                    animation: wavyBlink 1.8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default LiveSection;