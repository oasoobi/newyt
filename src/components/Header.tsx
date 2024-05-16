"use client"

import * as React from "react"
import Link from "next/link"
import { Suggests } from "./Suggests"

export function Header() {

    return (
        <div className=" bg-white w-[100vw] fixed h-12 flex border-b items-center justify-between">
            <Link href={"/"} className="text-xl font-bold pl-4 w-[130px] pr-4 left">SimpleTube</Link>
        </div>
    )
}
