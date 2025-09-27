import React from 'react'
import {Calendar, Search} from "lucide-react";
import {MdFilterList} from "react-icons/md";

export const HeroSection = () => {
    return (
        <div className="mx-auto w-[1064px] space-y-6">

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
                    {/* Search */}
                    <button className="flex items-center justify-center w-[32px] h-[32px] p-[6px] border border-gray-300 rounded-[8px] bg-white shadow-sm">
                        <Search className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Filter + Sort */}
                    <div className="flex h-[32px] rounded-md overflow-hidden border border-gray-300 bg-white shadow-sm min-w-[160px]">
                        <button className="flex items-center gap-[4px] px-[10px] py-[4px] text-[14px] leading-[20px] font-normal tracking-[-0.006em] text-gray-700 font-inter hover:bg-gray-50 whitespace-nowrap">
                            <MdFilterList className="w-4 h-4" />
                            Filter
                        </button>
                        <div className="w-px bg-gray-200 my-[6px]" />
                        <button className="flex items-center gap-[4px] px-[10px] py-[4px] text-[14px] leading-[20px] font-normal tracking-[-0.006em] text-gray-700 font-inter hover:bg-gray-50 whitespace-nowrap">
                            <Calendar className="w-4 h-4" />
                            Sort by
                        </button>
                    </div>
                </div>


            </div>

            {/* Sessions Table */}
            {/* <SessionsTable data={sessions} /> */}
        </div>
    )
}
