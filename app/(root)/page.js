'use client'
import React, {useEffect} from 'react'
import {HeroSection} from "@/components/HeroSection";
import SessionTable from "@/components/SessionTable";
import {useRouter} from "next/navigation";


const Home = () => {

    return (
        <main className="min-h-screen bg-white mt-10">
            <HeroSection />
            <SessionTable />

        </main>




    )
}
export default Home;
