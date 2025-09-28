"use client";
import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { waveVectors } from "@/constants";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
            setIsSoundChecking(false);
        } else if (isRecording) {
            setIsPaused(!isPaused);
        } else {
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
        <div className="w-full flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            {/* Main Wave Container - Fully Responsive */}
            <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl h-[250px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] 2xl:h-[500px] relative flex flex-col items-center justify-center bg-gradient-to-r from-[#C2D6FF] to-white rounded-2xl sm:rounded-3xl border border-[#E2E4E9] overflow-hidden">

                {/* Wave Animation Layers */}
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

                {/* Center Logo Circle - Fully Responsive */}
                <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 rounded-full bg-[#FFFFFF80] flex items-center justify-center z-10">
                    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-26 xl:h-26 2xl:w-28 2xl:h-28 rounded-full bg-[#EFECFF] flex items-center justify-center">
                        <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 relative">
                            <Image
                                src="/dp.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Sound Check Text Overlay - Responsive */}
                {isSoundChecking && (
                    <div className="absolute z-20 flex items-center justify-center w-[92%] xs:w-[88%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[602px] h-auto min-h-[30px] xs:min-h-[32px] sm:min-h-[34px] md:min-h-[36px] lg:min-h-[38px] left-1/2 -translate-x-1/2 transform bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-14 2xl:bottom-16">
                        <div className="w-full h-full flex items-center justify-center rounded-lg px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
                            <p className="font-sans font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight text-center bg-gradient-to-r from-[#375DFB] to-[#DFE3EC] bg-clip-text text-transparent break-words">
                                EventHex Stands out by tackling two key ...
                            </p>
                        </div>
                    </div>
                )}

                {/* Recording Status & Timer - Responsive */}
                {!isSoundChecking && (
                    <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 z-10 flex flex-col items-center gap-1 xs:gap-2">
                        {/* Recording/Paused Status */}
                        {isRecording && !isPaused && (
                            <div className="flex items-center gap-1 xs:gap-2">
                                <span className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-ping"></span>
                                <p className="text-red-500 font-medium text-xs xs:text-sm sm:text-base">Recording</p>
                            </div>
                        )}
                        {isRecording && isPaused && (
                            <div className="flex items-center gap-1 xs:gap-2">
                                <span className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500"></span>
                                <p className="text-orange-500 font-medium text-xs xs:text-sm sm:text-base">Paused</p>
                            </div>
                        )}
                        {/* Timer */}
                        <p className="text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono tracking-wider">
                            {formatTime(time)}
                        </p>
                    </div>
                )}
            </div>

            {/* Control Buttons - Fully Responsive */}
            <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-5 w-full xs:w-auto max-w-full">
                {/* Leave Section Button */}
                <button
                    className="flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-[#C2D6FF] rounded-xl xs:rounded-2xl bg-gray-200 text-blue-100 font-medium text-xs xs:text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 w-full xs:w-auto xs:min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
                    onClick={() => router.push('/')}
                >
                    <span className="text-xs xs:text-sm sm:text-base">✖</span>
                    <span className="whitespace-nowrap">Leave Section</span>
                </button>

                {/* Sound Check Button */}
                <button
                    onClick={handleSoundCheck}
                    className="flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-[#C2D6FF] rounded-xl xs:rounded-2xl bg-blue-100 text-white font-medium text-xs xs:text-sm sm:text-base md:text-lg hover:bg-blue-500 transition-all duration-300 w-full xs:w-auto xs:min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
                >
                    <PiWaveformBold className="text-sm xs:text-base sm:text-lg md:text-xl" />
                    <span className="whitespace-nowrap">Sound Check</span>
                </button>

                {/* Main Action Button (Go Live/Pause/Resume) */}
                <button
                    onClick={handleGoLiveToggle}
                    className="flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-[#C2D6FF] rounded-xl xs:rounded-2xl font-medium text-xs xs:text-sm sm:text-base md:text-lg min-w-[100px] xs:min-w-[120px] sm:min-w-[140px] md:min-w-[160px] transition-all duration-300 bg-red-100 text-white hover:bg-red-500 w-full xs:w-auto"
                >
                    {isSoundChecking ? (
                        <>
                            <IoPauseSharp className="text-sm xs:text-base sm:text-lg md:text-xl" />
                            <span className="whitespace-nowrap">Stop Check</span>
                        </>
                    ) : isRecording && !isPaused ? (
                        <>
                            <IoPauseSharp className="text-sm xs:text-base sm:text-lg md:text-xl" />
                            <span className="whitespace-nowrap">Pause</span>
                        </>
                    ) : isRecording && isPaused ? (
                        <>
                            <IoPlaySharp className="text-sm xs:text-base sm:text-lg md:text-xl" />
                            <span className="whitespace-nowrap">Resume</span>
                        </>
                    ) : (
                        <>
                            <IoPlaySharp className="text-sm xs:text-base sm:text-lg md:text-xl" />
                            <span className="whitespace-nowrap">Go Live</span>
                        </>
                    )}
                </button>

                {/* Optional Stop Button - Uncomment if needed */}
                {isRecording && (
                    <button
                        onClick={handleStopRecording}
                        className="flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-[#FF6B6B] rounded-xl xs:rounded-2xl bg-red-500 text-white font-medium text-xs xs:text-sm sm:text-base md:text-lg hover:bg-red-600 transition-all duration-300 w-full xs:w-auto xs:min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
                    >
                        <span className="text-xs xs:text-sm sm:text-base md:text-lg">⏹</span>
                        <span className="whitespace-nowrap">Stop</span>
                    </button>
                )}
            </div>

            <style jsx>{`
                @keyframes pulseWave {
                    0% {
                        transform: scale(1) rotate(0deg);
                        opacity: 0.3;
                        border-radius: 50%;
                    }
                    25% {
                        transform: scale(1.05) rotate(90deg);
                        opacity: 0.7;
                        border-radius: 60% 40% 60% 40%;
                    }
                    50% {
                        transform: scale(1.15) rotate(180deg);
                        opacity: 1;
                        border-radius: 40% 60% 40% 60%;
                    }
                    75% {
                        transform: scale(1.08) rotate(270deg);
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

                /* Custom responsive breakpoint styles */
                @media (max-width: 374px) {
                    .pulse-wave {
                        animation: pulseWave 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                        transform-origin: center;
                    }
                }

                @media (min-width: 1536px) {
                    .pulse-wave {
                        animation: pulseWave 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                }
            `}</style>
        </div>
    );
};

export default LiveSection;