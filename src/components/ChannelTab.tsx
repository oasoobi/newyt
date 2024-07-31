"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { use } from "react"

export function Tab({focus}: {focus:number}) {
    const pathname = usePathname();
    const channelUrl = "" + pathname.replace("/playlists", "").replace("/streams", "").replace("/summary", "");
    return(
        <div className="mb-10 bg-[#ffffffde] backdrop-blur-md border w-full h-20 rounded-full grid grid-cols-4">
            <Link href={channelUrl} className={`w-[1fr] hover:bg-[#c9c9c954] transition-colors flex items-center justify-center rounded-full ${focus === 0 ? "bg-[#c9c9c954] pointer-events-none" : ""}`} >動画</Link>
            <Link href={channelUrl +"/playlists"} className={`w-[1fr] hover:bg-[#c9c9c954] transition-colors flex items-center justify-center rounded-full ${focus === 1 ? "bg-[#c9c9c954] pointer-events-none" : ""}`}>再生リスト</Link>
            <Link href={channelUrl +"/streams"} className={`w-[1fr] hover:bg-[#c9c9c954] transition-colors flex items-center justify-center rounded-full ${focus === 2 ? "bg-[#c9c9c954] pointer-events-none" : ""}`}>ライブ</Link>
            <Link href={channelUrl + "/summary"} className={`w-[1fr] hover:bg-[#c9c9c954] transition-colors flex items-center justify-center rounded-full ${focus === 3 ? "bg-[#c9c9c954] pointer-events-none" : ""}`}>概要</Link>
        </div>
    )
}