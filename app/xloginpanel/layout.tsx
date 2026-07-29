import type { Metadata } from "next";
import {
    Big_Shoulders,
    Source_Serif_4,
    JetBrains_Mono,
} from "next/font/google";
import { AnimatedFavicon } from "../components/AnimatedFavicon";
import "../globals.css";

const bigShoulders = Big_Shoulders({
    variable: "--font-big-shoulders",
    subsets: ["latin"],
    weight: ["500", "700", "800"],
});

const sourceSerif = Source_Serif_4({
    variable: "--font-source-serif",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Yönetim Paneli — Klasik Arabalar",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="tr"
            className={`${bigShoulders.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <AnimatedFavicon />
          {children}
        </body>
        </html>
    );
}
