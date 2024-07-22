import * as React from "react"
import Link from "next/link"
import Image from "next/image";
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

    function formatSeconds(seconds: number) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours === 0 ? "" : `${hours}:`}${minutes === 0 ? "0:" : `${minutes}:`}${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    }
    return (
        <Link href={"/watch/" + video.videoId} className="border rounded-md hover:bg-gray-100 w-full h-full flex flex-col p-[3%] transition-colors">
            <div className="relative z-1">
                <img src={"/api/tn/" + video.videoId} className="rounded-lg w-full" alt="" loading={lazy ? "lazy" : "eager"}/>
                <p className="absolute bottom-1 right-1 pl-1 pr-1 z-1 bg-[#000000a4] text-white rounded-md">{formatSeconds(video.lengthSeconds)}</p>
            </div>
            <h1 className="text-lg truncate">{video.title}</h1>
        </Link>
    )
}
