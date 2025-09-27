import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "EVENT HEX",
    description: "AI based real time Content summarisation",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}