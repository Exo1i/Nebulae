'use client';
import {Inter} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs';
import {dark, neobrutalism} from '@clerk/themes';
import {useTheme} from "@mui/material/styles";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
    const theme = useTheme();
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
