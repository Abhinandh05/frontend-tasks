import React from 'react'
import {HeroSection} from "@/components/HeroSection";
import SessionTable from "@/components/SessionTable";


const Home = () => {
    return (
        <main className="min-h-screen p-8 bg-white">
           <HeroSection />
            <SessionTable />
        </main>


    )
}
export default Home;
