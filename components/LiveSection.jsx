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
    const [isPaused, setIsPaused] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let interval;
        if (isRecording && !isPaused) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording, isPaused]);


    const formatTime = (secs) => {
        const h = String(Math.floor(secs / 3600)).padStart(2, "0");
        const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
        const s = String(secs % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    const handleSoundCheck = () => {
        setIsSoundChecking(true);
        setIsRecording(false);
        setIsPaused(false);
    };

    const handleGoLiveToggle = () => {
        if (isSoundChecking) {
            // If sound checking, stop sound check
            setIsSoundChecking(false);
        } else if (isRecording) {
            // If recording, toggle pause state
            setIsPaused(!isPaused);
        } else {
            // If not recording, start recording
            setIsRecording(true);
            setIsPaused(false);
            setTime(0);
        }
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        setIsPaused(false);
        setTime(0);
    };

    return (
        <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative flex flex-col items-center justify-center bg-gradient-to-r from-[#C2D6FF] to-white rounded-3xl border border-[#E2E4E9] overflow-hidden">

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

                {/* Center Avatar - Responsive sizing */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#FFFFFF80] flex items-center justify-center z-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-[#EFECFF] flex items-center justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 relative">
                            <Image
                                src="/dp.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Sound Check Text - Responsive positioning and sizing */}
                {isSoundChecking && (
                    <div className="absolute z-20 flex items-center justify-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[602px] h-[38px] left-1/2 -translate-x-1/2 transform bottom-8 sm:bottom-12 md:bottom-14 lg:bottom-16">
                        <div className="w-full h-full flex items-center justify-start rounded-lg px-2 sm:px-3 md:px-4">
                            <p className="font-sans font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 sm:leading-6 md:leading-7 tracking-normal text-center sm:text-left bg-gradient-to-r from-[#375DFB] to-[#DFE3EC] bg-clip-text text-transparent">
                                EventHex Stands out by tackling two key ...
                            </p>
                        </div>
                    </div>
                )}

                {/* Recording Status and Timer - Responsive positioning */}
                {!isSoundChecking && (
                    <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 z-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                        {isRecording && !isPaused && (
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                                <p className="text-red-500 font-medium text-xs sm:text-sm">Recording</p>
                            </div>
                        )}
                        {isRecording && isPaused && (
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                                <p className="text-orange-500 font-medium text-xs sm:text-sm">Paused</p>
                            </div>
                        )}
                        <p className="text-black-100 text-lg sm:text-xl font-mono">{formatTime(time)}</p>
                    </div>
                )}
            </div>

            {/* Control Buttons - Responsive layout and sizing */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-gray-200 text-blue-100 font-medium text-xs sm:text-sm hover:bg-blue-50 w-full sm:w-auto"
                        onClick={() => router.push('/')}
                >
                    ✖ Leave Section
                </button>

                <button
                    onClick={handleSoundCheck}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-blue-100 text-white font-medium text-xs sm:text-sm hover:bg-blue-500 transition-all duration-300 w-full sm:w-auto"
                >
                    <PiWaveformBold />
                    Sound Check
                </button>

                <button
                    onClick={handleGoLiveToggle}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#C2D6FF] rounded-[17px] font-medium text-xs sm:text-sm min-w-[120px] sm:min-w-[140px] transition-all duration-300 bg-red-100 text-white hover:bg-red-500 w-full sm:w-auto"
                >
                    {isSoundChecking ? (
                        <>
                            <IoPauseSharp />
                            Stop Check
                        </>
                    ) : isRecording && !isPaused ? (
                        <>
                            <IoPauseSharp />
                            Pause
                        </>
                    ) : isRecording && isPaused ? (
                        <>
                            <IoPlaySharp />
                            Resume
                        </>
                    ) : (
                        <>
                            <IoPlaySharp />
                            Go Live
                        </>
                    )}
                </button>

                {/* Optional: Add a separate stop button for better UX */}
                {/* {isRecording && (
                    <button
                        onClick={handleStopRecording}
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#FF6B6B] rounded-[17px] bg-red-500 text-white font-medium text-xs sm:text-sm hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
                    >
                        ⏹ Stop
                    </button>
                )} */}
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