"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { use } from "react"

export function Tab() {
    const pathname = usePathname();
    return(
        <div className="mb-10 bg-[#ffffff36] backdrop-blur-md border w-6/12 h-20 rounded-full grid grid-cols-3">
            <Link href={pathname} className="w-[1fr] hover:bg-gray-100 flex items-center justify-center rounded-full">動画</Link>
            <Link href={pathname +"/playlists"} className="w-[1fr] hover:bg-gray-100 h-full flex items-center justify-center rounded-full">再生リスト</Link>
            <Link href={pathname +"/streams"} className="w-[1fr] hover:bg-gray-100 flex items-center justify-center rounded-full">ライブ</Link>
        </div>
    )
}