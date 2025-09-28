'use client';

import Image from 'next/image';
import { Manrope } from "next/font/google";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
    const [avCode, setAvCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (avCode === '1234') {
            // Store authentication state in localStorage
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userCode', avCode);

            // Show success toast
            if (typeof window !== 'undefined' && window.showToast) {
                window.showToast('Login Successful!', 'success', 2000);
            }

            // Wait a moment to show toast, then redirect
            setTimeout(() => {
                router.push('/');
            }, 1500);
        } else {
            setError('Invalid AV Code. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Column - Promotional Section */}
            <div className="lg:w-1/2 relative min-h-[50vh] md:min-h-[60vh] lg:min-h-screen">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/main.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center p-6 md:p-8 lg:p-12 text-white min-h-[50vh] md:min-h-[60vh] lg:min-h-screen -mt-30">
                    {/* Logo */}
                    <div className="mb-4 md:mb-6 lg:mb-8">
                        <div className="flex items-center justify-center lg:justify-start">
                            <div className="rounded-full flex items-center justify-center mr-3">
                                <Image
                                    src='/EventHex-Logo.svg'
                                    alt='navbar'
                                    width={120}
                                    height={120}
                                    className="w-24 h-24 md:w-32 md:h-32 lg:w-[200px] lg:h-[200px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-4 md:mb-6 text-center lg:text-left -mt-20">
                        <h2 className={`text-2xl md:text-3xl lg:text-[62px] font-bold leading-tight ${manrope.className}`}>
                            <span>Engage, Inspire</span>
                            <span className="block">Inform With Ai</span>
                        </h2>
                    </div>

                    {/* Sub-headline */}
                    <p className={`text-lg md:text-xl lg:text-[51px] text-white text-center lg:text-left ${manrope.className}`}>
                        AI-Based Real-Time <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Content Summarisation
                    </p>
                </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-white min-h-[50vh] lg:min-h-screen">
                <div className="w-full max-w-sm md:max-w-md flex flex-col">
                    {/* Title */}
                    <div className="mb-6 lg:mb-8">
                        <div className="flex items-center mb-2 justify-center lg:justify-start">
                            <h3 className="text-lg md:text-xl lg:text-[28px] font-bold text-black-900 text-center lg:text-left">
                                Enter AV Code <span>🎧</span>
                            </h3>
                        </div>
                        <p className="text-sm lg:text-base text-gray-900 text-center lg:text-left">
                            Provide your assigned AV team <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>code to continue.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                htmlFor="avCode"
                                className="block text-sm font-medium text-black-900 mb-2"
                            >
                                AV Code
                            </label>
                            <input
                                type="text"
                                id="avCode"
                                value={avCode}
                                onChange={(e) => setAvCode(e.target.value)}
                                placeholder="Enter AV Code"
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-[#D4D7E3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                            />
                            {error && (
                                <p className="text-red-500 text-sm mt-2">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-2.5 md:py-3 px-4 rounded-lg font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm md:text-base ${
                                isLoading
                                    ? 'bg-blue-300 text-white cursor-not-allowed'
                                    : 'bg-blue-100 text-white hover:bg-blue-700'
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                                    Signing in...
                                </div>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-xs md:text-sm mt-8 md:mt-12 lg:mt-40">
                        Secure access portal
                    </p>
                </div>
            </div>
        </div>
    );
}