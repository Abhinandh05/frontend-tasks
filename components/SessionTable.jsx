"use client";

import sessions from "@/constants";
import {HiClock} from "react-icons/hi";
import {IoIosCheckmarkCircle} from "react-icons/io";
import Image from "next/image";

export default function SessionTable() {
    return (
        <div className="flex justify-center items-center p-8">
            <div className="w-[1080px]  border border-[#E2E4E9] rounded-2xl bg-white mx-auto pb-[17px]">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="text-left bg-nutral-100 font-normal text-sm leading-5 tracking-[-0.006em]">

                            <th className="pb-4 pt-4 pl-6 text-gray-100 font-normal rounded-tl-2xl">Session</th>
                            <th className="pb-4 pt-4 px-4 text-gray-100 font-normal">Event Name</th>
                            <th className="pb-4 pt-4 px-4 text-gray-100 font-normal">Status</th>
                            <th className="pb-4 pt-4 pr-6 rounded-tr-2xl"></th>


                    </tr>
                    </thead>
                    <tbody className="gap-5">
                    {sessions.map((session) => (
                        <tr
                            key={session.id}
                            className="border-t border-[#E2E4E9] text-sm h-[76px]"
                        >

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
                                        <p className="font-medium text-black mb-1">{session.title}</p>
                                        <p className="text-gray-100 text-xs">{session.date}</p>
                                    </div>
                                </div>
                            </td>


                            <td className="py-4 px-4 text-gray-700">{session.eventName}</td>


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


                            <td className="py-4 pr-6 pl-4 flex justify-end mr-3">
                                {session.status === "Pending" ? (
                                    <button className="bg-blue-100 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors min-w-[120px]">
                                        Start Recording
                                    </button>
                                ) : (
                                    <button className="bg-gray-200 text-blue-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors border border-gray-200 min-w-[140px]">
                                        View
                                    </button>
                                )}
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
