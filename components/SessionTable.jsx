"use client";

import sessions from "@/constants";
import { HiClock } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function SessionTable() {
    return (
        <div className="flex justify-center items-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-[1080px] border border-[#E2E4E9] rounded-2xl bg-white mx-auto pb-[17px] overflow-hidden">
                {/* Desktop Table View */}
                <div className="hidden md:block">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="text-left bg-nutral-100 font-normal text-sm leading-5 tracking-[-0.006em]">
                            <th className="pb-4 pt-4 pl-6 text-gray-100 font-normal rounded-tl-2xl">
                                Session
                            </th>
                            <th className="pb-4 pt-4 px-4 text-gray-100 font-normal">
                                Event Name
                            </th>
                            <th className="pb-4 pt-4 px-4 text-gray-100 font-normal">
                                Status
                            </th>
                            <th className="pb-4 pt-4 pr-6 rounded-tr-2xl"></th>
                        </tr>
                        </thead>
                        <tbody className="gap-5">
                        {sessions.map((session) => (
                            <tr
                                key={session.id}
                                className="border-t border-[#E2E4E9] text-sm h-[76px]"
                            >
                                {/* Session Info */}
                                <td className="py-4 pl-6 pr-4">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={session.image}
                                            alt={session.title}
                                            width={32}
                                            height={32}
                                            className="rounded-lg object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-black-100 mb-1">
                                                {session.title}
                                            </p>
                                            <p className="text-gray-100 text-xs">{session.date}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Event */}
                                <td className="py-4 px-4 text-gray-700">{session.eventName}</td>

                                {/* Status */}
                                <td className="py-4 px-4">
                                    {session.status === "Pending" ? (
                                        <span className="bg-[#F17B2C]/20 text-[#F17B2C] px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-2">
                                            <HiClock width={15} height={15} />
                                            Pending
                                        </span>
                                    ) : (
                                        <span className="bg-[#38C793]/20 text-[#38C793] px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-2">
                                            <IoIosCheckmarkCircle />
                                            Processed
                                        </span>
                                    )}
                                </td>

                                {/* Action */}
                                <td className="py-4 pr-6 pl-4 flex justify-end mr-3">
                                    {session.status === "Pending" ? (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-blue-100 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors min-w-[120px] cursor-pointer">
                                                Start Recording
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-gray-200 text-blue-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors border border-gray-200 min-w-[140px] cursor-pointer">
                                                View
                                            </button>
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden">
                    {/* Header */}
                    <div className="bg-nutral-100 p-4 rounded-t-2xl">
                        <h2 className="text-gray-100 font-normal text-sm leading-5 tracking-[-0.006em]">
                            Sessions
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="divide-y divide-[#E2E4E9]">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className="p-4 space-y-3"
                            >
                                {/* Session Info */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={session.image}
                                        alt={session.title}
                                        width={40}
                                        height={40}
                                        className="rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-black-100 mb-1 text-sm">
                                            {session.title}
                                        </p>
                                        <p className="text-gray-100 text-xs">{session.date}</p>
                                    </div>
                                </div>

                                {/* Event Name */}
                                <div className="pl-1">
                                    <p className="text-xs text-gray-100 mb-1">Event Name</p>
                                    <p className="text-gray-700 text-sm">{session.eventName}</p>
                                </div>

                                {/* Status and Action */}
                                <div className="flex items-center justify-between pt-2">
                                    {session.status === "Pending" ? (
                                        <span className="bg-[#F17B2C]/20 text-[#F17B2C] px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-2">
                                            <HiClock width={15} height={15} />
                                            Pending
                                        </span>
                                    ) : (
                                        <span className="bg-[#38C793]/20 text-[#38C793] px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-2">
                                            <IoIosCheckmarkCircle />
                                            Processed
                                        </span>
                                    )}

                                    {session.status === "Pending" ? (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-blue-100 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-500 transition-colors cursor-pointer">
                                                Start Recording
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-gray-200 text-blue-100 px-3 py-2 rounded-lg text-xs font-medium hover:bg-gray-300 transition-colors border border-gray-200 cursor-pointer">
                                                View
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet View (sm to md) */}
                <div className="hidden sm:block md:hidden">
                    {/* Header */}
                    <div className="bg-nutral-100 px-6 py-4 rounded-t-2xl">
                        <div className="grid grid-cols-3 gap-4 text-gray-100 font-normal text-sm leading-5 tracking-[-0.006em]">
                            <span>Session</span>
                            <span>Event & Status</span>
                            <span className="text-right">Action</span>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-[#E2E4E9]">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className="px-6 py-4 grid grid-cols-3 gap-4 items-center min-h-[76px]"
                            >
                                {/* Session Info */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={session.image}
                                        alt={session.title}
                                        width={36}
                                        height={36}
                                        className="rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <p className="font-medium text-black-100 mb-1 text-sm truncate">
                                            {session.title}
                                        </p>
                                        <p className="text-gray-100 text-xs">{session.date}</p>
                                    </div>
                                </div>

                                {/* Event and Status */}
                                <div className="space-y-2">
                                    <p className="text-gray-700 text-sm truncate">{session.eventName}</p>
                                    {session.status === "Pending" ? (
                                        <span className="bg-[#F17B2C]/20 text-[#F17B2C] px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-1">
                                            <HiClock width={12} height={12} />
                                            Pending
                                        </span>
                                    ) : (
                                        <span className="bg-[#38C793]/20 text-[#38C793] px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-x-1">
                                            <IoIosCheckmarkCircle />
                                            Processed
                                        </span>
                                    )}
                                </div>

                                {/* Action */}
                                <div className="flex justify-end">
                                    {session.status === "Pending" ? (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-blue-100 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors cursor-pointer">
                                                Start Recording
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link href={`/sessions/${session.id}`}>
                                            <button className="bg-gray-200 text-blue-100 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors border border-gray-200 cursor-pointer">
                                                View
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}