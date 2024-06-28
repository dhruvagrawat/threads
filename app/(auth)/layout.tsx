import  { ClerkProvider }  from "@clerk/nextjs";
import { Inter } from "next/font/google";

import 'app/globals.css';

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>

                </body>
            </html>

        </ClerkProvider>
    )
}