'use client';

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Loading() {
    return (
        <div className={`min-h-screen flex items-center justify-center bg-white ${manrope.className}`}>
            <div className="flex flex-col items-center space-y-4">
                {/* Loading Spinner */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                </div>
                
                {/* Loading Text */}
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Loading Session
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Please wait while we prepare your recording session...
                    </p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-100 to-blue-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
