"use client";

import { Suspense, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { Video as VideoCard } from "@/components/playlist/video";
import { usePathname } from "next/navigation";

type Playlist = {
    "type": "playlist", // Constant

    "title": string,
    "playlistId": string,
    "playlistThumbnail": string,

    "author": string,
    "authorId": string,
    "authorUrl": string,
    "authorVerified": boolean,
    "videoCount": number, // Integer
    "videos": [
        {
            "title": string,
            "videoId": string,
            "lengthSeconds": number, // Integer
            "videoThumbnails": ThumbnailObject[]
        }
    ]
}

type ThumbnailObject = {
    "quality": string,
    "url": string,
    "width": string, // Integer
    "height": number // Integer
}

async function fetcher(key: string) {
    return fetch(key).then((res) => res.json() as Promise<Playlist | null>);
}

export function PlayListVideos() {
    const pathname = usePathname();
    const playlistId = pathname.replace("/playlist", "");

    const { data, error, isLoading } = useSWR(
        `/api/pl` + playlistId,
        fetcher
    );

    return (
        <main className="p-6 lg:p-6">
            <h1 className="text-2xl text-center mb-10">{data?.title}</h1>
            <h1 className="text-xl mb-2">{data?.videoCount} 本の動画</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {data?.videos?.map((data,index) =>
                    <VideoCard video={data} key={data.videoId} lazy={index > 12}/>
                )}
            </div>
        </main>
    );
}