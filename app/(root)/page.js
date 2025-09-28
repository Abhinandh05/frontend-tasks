'use client'
import React, {useEffect, useState} from 'react'
import {HeroSection} from "@/components/HeroSection";
import SessionTable from "@/components/SessionTable";
import {useRouter} from "next/navigation";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const loggedIn = localStorage.getItem('loggedIn');
        
        if (loggedIn !== 'true') {
            // Redirect to login if not authenticated
            router.push('/login');
        } else {
            setIsLoading(false);
        }
    }, [router]);

    // Show loading while checking authentication
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white mt-10">
            <HeroSection />
            <SessionTable />
        </main>
    )
}
export default Home;
