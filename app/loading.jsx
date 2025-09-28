'use client';

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Loading() {
    return (
        <div className={`min-h-screen flex items-center justify-center bg-white ${manrope.className}`}>
            <div className="flex flex-col items-center space-y-6">
                {/* Loading Spinner */}
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-blue-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                </div>
                
                {/* Loading Text */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Loading Dashboard
                    </h2>
                    <p className="text-gray-500 text-base">
                        Preparing your session management dashboard...
                    </p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-80 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-100 to-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Loading Dots */}
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
}
