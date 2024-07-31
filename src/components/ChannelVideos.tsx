"use client";

import { Suspense, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { Video as VideoCard } from "@/components/cards/video";
import { usePathname } from "next/navigation";

type Video = {
    "type": "video", // Constant

    "title": string,
    "videoId": string,

    "author": string,
    "authorId": string,
    "authorUrl": string,
    "authorVerified": boolean,

    "videoThumbnails": videoThumbnails[],

    "description": string,
    "descriptionHTML": string,

    "viewCount": number, // Integer
    "viewCountText": string,
    "lengthSeconds": number, // Integer

    "published": number, // Unix timestamp
    "publishedText": string,

    // Only available on premiered videos
    "premiereTimestamp": number, // Unix timestamp

    "liveNow": boolean,
    "premium": boolean,
    "isUpcoming": boolean
}

type videoThumbnails = {
    "quality": string,
    "url": string,
    "width": number, // Integer
    "height": number // Integer
}

type Videos = {
    videos: Video[]
}

async function fetcher(key: string) {
    return fetch(key).then((res) => res.json() as Promise<Videos | null>);
}

export function ChannelVideos({ channelID }: { channelID: string }) {
    const pathname = usePathname();

    const { data, error, isLoading } = useSWR(
        `/api/ch/` + channelID + "/videos",
        fetcher
    );

    return (
        <main className="p-6 lg:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {data?.videos.map((data, index) =>
                    <VideoCard video={data} key={data.videoId} />
                )}
            </div>
        </main>
    );
}