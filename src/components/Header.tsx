"use client"
import { usePathname } from 'next/navigation';
import * as React from "react"
import Link from "next/link"
import { Suggests } from "./Suggests"
import { Search } from "./Search"
export function Header() {
    const pathname = usePathname();
    return (
        <div className="bg-white w-full fixed h-12 flex border-b items-center justify-between px-4">
            <Link href={"/"} className="text-xl font-bold pl-4 w-[130px] pr-4 left">SimpleTube</Link>
            {pathname === "/" ? <></> : <Search />}
            <div className="ml-[65px] mr-[65px]"></div>
        </div>
    )
}
