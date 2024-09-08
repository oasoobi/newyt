"use client"

import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import * as React from "react"
import Link from "next/link"
import { Suggests } from "@/components/search/Suggests"
import { Search } from "@/components/search/Search"
export function Header() {
    const pathname = usePathname();
    const back = () => {
        history.back();
    }
    return (
        pathname === "/" ? (
            <></>
        ) : (
            <div className='z-50 fixed'>
                <noscript>JavaScriptを有効にしてください。</noscript>
                <div className='flex items-center md:pl-20 md:pr-20 justify-center md:justify-between w-screen bg-[#ffffffb6] backdrop-blur-lg h-16 '>
                    <div className='flex items-center'>
                        <div className='pr-2 mr-2 md:mr-0 cursor-pointer'>
                            <svg onClick={back} viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                        </div>
                        <Link href={"/"} className="hidden md:block text-lg md:text-xl font-bold pl-4 w-[130px] pr-4 left">SimpleTube</Link>
                    </div>
                    <Search />
                    <div className='hidden w-[162px] md:block'></div>
                </div>
            </div>
        )
    );
}
