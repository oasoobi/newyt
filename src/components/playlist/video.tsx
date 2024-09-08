import * as React from "react"
import Link from "next/link"
type Video = {
    "title": string,
    "videoId": string,
    "lengthSeconds": number, // Integer
    "videoThumbnails": ThumbnailObject[]
};

type ThumbnailObject = {
    "quality": string,
    "url": string,
    "width": string, // Integer
    "height": number // Integer
}

export function Video({ video, lazy }: { video: Video; lazy: boolean}) {

    function formatSeconds(seconds:number) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(secs).padStart(2, "0");
    
        return `${Number(formattedHours) > 0 ? `${formattedHours}:` : ""}${Number(formattedMinutes) > 0 ? `${formattedMinutes}:`: Number(formattedHours) > 0 ? "00:" :"0:"}${formattedSeconds}`;
    }
    return (
        <Link href={"/watch/" + video.videoId} className="border rounded-md hover:bg-gray-100 w-full h-full flex flex-col p-[3%] transition-colors">
            <div className="relative z-10">
                <img src={"https://i.ytimg.com/vi/" + video.videoId + "/sddefault.jpg"} className="rounded-lg w-full pointer-events-none select-none" alt="" loading={lazy ? "lazy" : "eager"}/>
                <p className="absolute bottom-1 right-1 pl-1 pr-1 z-10 bg-[#000000a4] text-white rounded-md">{formatSeconds(video.lengthSeconds)}</p>
            </div>
            <h1 className="text-lg truncate">{video.title}</h1>
        </Link>
    )
}
