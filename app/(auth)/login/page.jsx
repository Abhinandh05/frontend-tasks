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
        <div className="min-h-screen w-full">
            {/* Mobile & Tablet Layout */}
            <div className="lg:hidden">
                {/* Promotional Section - Top */}
                <div className="relative h-screen w-full">
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

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col justify-center items-center px-6 py-8 text-white h-full">
                        {/* Logo */}
                        <div className="mb-8">
                            <Image
                                src='/EventHex-Logo.svg'
                                alt='navbar'
                                width={120}
                                height={120}
                                className="w-24 h-24 sm:w-32 sm:h-32"
                            />
                        </div>

                        {/* Headline */}
                        <div className="mb-6 text-center">
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${manrope.className}`}>
                                <span className="block">Engage, Inspire</span>
                                <span className="block">Inform With AI</span>
                            </h2>
                        </div>

                        {/* Sub-headline */}
                        <p className={`text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed ${manrope.className}`}>
                            AI-Based Real-Time<br />
                            Content Summarisation
                        </p>

                        {/* Scroll indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Form Section - Bottom */}
                <div className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-8">
                    <div className="w-full max-w-md">
                        {/* Title */}
                        <div className="mb-8 text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-black-900 mb-4">
                                Enter AV Code 🎧
                            </h3>
                            <p className="text-base sm:text-lg text-gray-900">
                                Provide your assigned AV team code to continue.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="avCode"
                                    className="block text-sm font-medium text-black-900 mb-3"
                                >
                                    AV Code
                                </label>
                                <input
                                    type="text"
                                    id="avCode"
                                    value={avCode}
                                    onChange={(e) => setAvCode(e.target.value)}
                                    placeholder="Enter AV Code"
                                    className="w-full px-4 py-4 border border-[#D4D7E3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-3">{error}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-4 px-4 rounded-lg font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base ${
                                    isLoading
                                        ? 'bg-blue-300 text-white cursor-not-allowed'
                                        : 'bg-blue-100 text-white hover:bg-blue-700'
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <p className="text-center text-gray-500 text-sm mt-8">
                            Secure access portal
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex min-h-screen">
                {/* Left Column - Promotional Section */}
                <div className="w-1/2 relative">
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
                    <div className="relative z-10 flex flex-col justify-center p-12 text-white h-full -mt-30">
                        {/* Logo */}
                        <div className="mb-8">
                            <div className="flex items-center justify-start">
                                <div className="rounded-full flex items-center justify-center mr-3">
                                    <Image
                                        src='/EventHex-Logo.svg'
                                        alt='navbar'
                                        width={120}
                                        height={120}
                                        className="w-[200px] h-[200px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="mb-6 text-left -mt-20">
                            <h2 className={`text-[62px] font-bold leading-tight ${manrope.className}`}>
                                <span>Engage, Inspire</span>
                                <span className="block">Inform With Ai</span>
                            </h2>
                        </div>

                        {/* Sub-headline */}
                        <p className={`text-[51px] text-white text-left ${manrope.className}`}>
                            AI-Based Real-Time<br />
                            Content Summarisation
                        </p>
                    </div>
                </div>

                {/* Right Column - Login Form */}
                <div className="w-1/2 flex items-center justify-center p-8 bg-white">
                    <div className="w-full max-w-md flex flex-col">
                        {/* Title */}
                        <div className="mb-8">
                            <div className="flex items-center mb-2 justify-start">
                                <h3 className="text-[28px] font-bold text-black-900 text-left">
                                    Enter AV Code <span>🎧</span>
                                </h3>
                            </div>
                            <p className="text-base text-gray-900 text-left">
                                Provide your assigned AV team<br />
                                code to continue.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                    className="w-full px-4 py-3 border border-[#D4D7E3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-3 px-4 rounded-lg font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base ${
                                    isLoading
                                        ? 'bg-blue-300 text-white cursor-not-allowed'
                                        : 'bg-blue-100 text-white hover:bg-blue-700'
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <p className="text-center text-gray-500 text-sm mt-40">
                            Secure access portal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}