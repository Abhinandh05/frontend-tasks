import React from 'react'
import Header from "@/components/Header";

const Layout = ({children}) => {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto py-10">
                {children}
            </div>
        </main>

    )
}
export default Layout
