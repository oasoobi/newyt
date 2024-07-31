"use client"

import { Tab } from "@/components/ChannelTab";
import Image from "next/image";
import as, { useState } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR, { mutate } from "swr";

type Channel = {
  "author": string,
  "authorId": string,
  "authorUrl": string,
  "authorVerified": boolean,
  "authorBanners": ImageObject[],
  "authorThumbnails": ImageObject[],

  "subCount": number, // Integer
  "totalViews": number, // Integer
  "joined": number, // Unix timestamp

  "autoGenerated": boolean,
  "isFamilyFriendly": boolean,

  "description": string,
  "descriptionHtml": string,
  "allowedRegions": string[],

  "tabs": string[],

  "latestVideos": VideoObject[],
  "relatedChannels": [
    // One or more ChannelObject
  ]
}

type ImageObject = {
  "url": string,
  "width": number, // Integer
  "height": number // Integer
}

type VideoObject = {
  "type": "video", // Constant

  "title": String,
  "videoId": String,

  "author": String,
  "authorId": String,
  "authorUrl": String,
  "authorVerified": Boolean,

  "videoThumbnails": ThumbnailObject[],

  "description": string,
  "descriptionHtml": string,

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

type ThumbnailObject = {
  "quality": string,
  "url": string,
  "width": number, // Integer
  "height": number // Integer
}

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<Channel | null>);
}


export default function Home() {
  const [channelData, setChannelData] = useState({});

  const pathname = usePathname();
  const channelID = pathname.replace("/channel/", "").replace("/summary", "");

  const { data, error, isLoading } = useSWR(
    `/api/ch/` + channelID,
    fetcher
  );

  return (
    <main className="flex min-h-screen flex-col items-center pl-12 pr-12 mb-10">

      <div className="top-[6rem] fixed backdrop-blur-md w-7/12 h-20 rounded-full z-40">
        <Tab focus={3}/>
      </div>
      <div className="mt-[15rem]">
        {
          data && data?.authorBanners.length > 0 ? <Image src={data?.authorBanners[0].url as string} alt="" width={100} height={20} /> :
            <></>
        }
        <div className="flex items-start">
          <img className="rounded-full border" src={data?.authorThumbnails[3].url} width={150} height={150} alt="" />
          <div className="ml-4">
            <h1 className="text-4xl font-bold">{data?.author}</h1>
            <p>チャンネル登録者数 {data?.subCount} 人</p>
            <div className="h-auto whitespace-pre">{data?.description}</div>
            <p className="mt-3">{data?.totalViews} 回視聴</p>
          </div>
        </div>
      </div>
    </main>
  );
}