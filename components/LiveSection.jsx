"use client";
import Image from "next/image";
import { PiWaveformBold } from "react-icons/pi";
import { IoPlaySharp } from "react-icons/io5";
import { waveVectors } from "@/constants";
import { useState, useEffect } from "react";

const LiveSection = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [time, setTime] = useState(0);

    // ⏱ Timer Logic
    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTime(0);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    // Format timer (hh:mm:ss)
    const formatTime = (secs) => {
        const h = String(Math.floor(secs / 3600)).padStart(2, "0");
        const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
        const s = String(secs % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[450px] relative flex flex-col items-center justify-center bg-gradient-to-r from-[#C2D6FF] to-white rounded-3xl border border-[#E2E4E9] overflow-hidden">
                {/* Wave Background Images with staggered animation */}
                {waveVectors.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center ${
                            isRecording ? "pulse-wave" : ""
                        }`}
                        style={{
                            animationDelay: isRecording ? `${index * 0.6}s` : "0s",
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Wave ${index + 1}`}
                            fill
                            className="object-contain pointer-events-none"
                        />
                    </div>
                ))}

                {/* Center Circle Logo */}
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

                {/* Timer + Recording Indicator */}
                <div className="absolute bottom-5 z-10 flex items-center gap-3">
                    {isRecording && (
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-red-500 blink"></span>
                            <p className="text-red-500 font-medium text-sm">Recording</p>
                        </div>
                    )}
                    <p className="text-black-100 text-xl font-mono">{formatTime(time)}</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-gray-200 text-blue-100 font-medium text-sm hover:bg-blue-50">
                    ✖ Leave Section
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] bg-blue-100 text-white font-medium text-sm hover:bg-blue-500">
                    <PiWaveformBold />
                    Sound Check
                </button>

                <button
                    onClick={() => setIsRecording((prev) => !prev)}
                    className={`flex items-center justify-center gap-2 px-4 py-2 border border-[#C2D6FF] rounded-[17px] font-medium text-sm min-w-[140px] transition-all duration-300 ${
                        isRecording
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-red-100 text-white hover:bg-red-500"
                    }`}
                >
                    <IoPlaySharp />
                    {isRecording ? "Stop" : "Go Live"}
                </button>
            </div>

            {/* ✅ Local CSS animations */}
            <style jsx>{`
                @keyframes pulseWave {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.4;
                    }
                    50% {
                        transform: scale(1.15);
                        opacity: 1;
                    }
                }
                .pulse-wave {
                    animation: pulseWave 3s ease-in-out infinite;
                }

                @keyframes blink {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                }
                .blink {
                    animation: blink 1.2s infinite;
                }
            `}</style>
        </div>
    );
};

export default LiveSection;
