'use client';

import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Column - Promotional Section */}
            <div className="lg:w-1/2 relative min-h-screen lg:min-h-0">
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
                <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 text-white min-h-screen lg:min-h-0">
                    {/* Logo */}
                    <div className="mb-6 lg:mb-8">
                        <div className="flex items-center">
                            <div className=" rounded-full flex items-center justify-center mr-3">
                                <Image src='/EventHex-Logo.svg' alt='navbar' width={200} height={200} />
                            </div>

                        </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-6">
                        <h2 className="text-[10px] lg:text-5xl font-bold leading-tight">
                            <span>Engage, Inspire</span>
                            <span className="block">Inform With Ai</span>

                        </h2>
                    </div>

                    {/* Sub-headline */}
                    <p className="text-5xl lg:text-xl text-white">
                        AI-Based Real-Time <br/> Content Summarisation
                    </p>
                </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-8 bg-white min-h-screen lg:min-h-0">
                <div className="w-full max-w-md flex flex-col min-h-screen lg:min-h-0">
                    {/* Title */}
                    <div className="mb-6 lg:mb-8">
                        <div className="flex items-center mb-2">
                            <h3 className="text-xl lg:text-[28px] font-bold text-black-900">
                                Enter AV Code <span>🎧</span>
                            </h3>
                        </div>
                        <p className="text-sm lg:text-base text-gray-900">
                            Provide your assigned AV team <br /> code to continue.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
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
                                placeholder="Enter AV Code"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-100 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm mt-40">
                        Secure access portal
                    </p>
                </div>
            </div>

        </div>
    );
}