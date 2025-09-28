'use client';
import React, { useState } from 'react'
import { Calendar, Search, X } from "lucide-react";
import { MdFilterList } from "react-icons/md";

export const HeroSection = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isSearchOpen) {
            setSearchValue('');
        }
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            console.log('Searching for:', searchValue);

        }
    };

    return (
        <div className="mx-auto w-[1064px] space-y-6 -mt-10">
            <div className="flex justify-between items-start h-12">
                <div className="w-[871px] space-y-[4px]">
                    <h1 className="text-[18px] leading-[24px] font-semibold text-gray-900 font-inter">
                        Assigned Sessions
                    </h1>
                    <p className="text-[14px] leading-[20px] font-normal text-gray-500 font-inter tracking-[-0.006em]">
                        Manage and monitor your active recording sessions.
                    </p>
                </div>

                <div className="flex items-center gap-[12px] h-[32px]">

                    <div className="flex items-center">

                        <button
                            onClick={handleSearchToggle}
                            className="flex items-center justify-center w-[32px] h-[32px] p-[6px] border border-gray-300 rounded-[8px] bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 relative z-10"
                        >
                            <Search className="w-4 h-4 text-gray-600" />
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isSearchOpen ? 'w-64 ml-2' : 'w-0 ml-0'
                            }`}
                        >
                            <div className="flex items-center h-[32px]">
                                <div className="flex items-center w-full h-full border border-gray-300 rounded-[8px] bg-white shadow-sm">
                                    <input
                                        type="text"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        onKeyDown={handleSearch}
                                        placeholder="Search sessions..."
                                        className="flex-1 px-3 py-1 text-sm outline-none rounded-l-[8px] min-w-0 font-inter"
                                        autoFocus={isSearchOpen}
                                    />
                                    {searchValue && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchValue('')}
                                            className="flex items-center justify-center w-6 h-6 mr-1 hover:bg-gray-100 rounded transition-colors duration-150"
                                        >
                                            <X className="w-3 h-3 text-gray-200" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex h-[32px] rounded-md overflow-hidden border border-gray-300 bg-white shadow-sm min-w-[160px]">
                        <button className="flex items-center gap-[4px] px-[10px] py-[4px] text-[14px] leading-[20px] font-normal tracking-[-0.006em] text-gray-700 font-inter hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                            <MdFilterList className="w-4 h-4" />
                            Filter
                        </button>
                        <div className="w-px bg-gray-200 my-[6px]" />
                        <button className="flex items-center gap-[4px] px-[10px] py-[4px] text-[14px] leading-[20px] font-normal tracking-[-0.006em] text-gray-700 font-inter hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                            <Calendar className="w-4 h-4" />
                            Sort by
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}