import Image from "next/image";
import as, { useEffect, useState } from "react"
import Link from "next/link";
import { Video } from "@/components/cards/video";
import { Player } from "@/components/Player";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { Url } from "url";
import { format } from "path";

type VideoThumbnail = {
  quality: string;
  url: string;
  width: number;
  height: number;
};

type Storyboard = {
  url: string;
  templateUrl: string;
  width: number;
  height: number;
  count: number;
  interval: number;
  storyboardWidth: number;
  storyboardHeight: number;
  storyboardCount: number;
};

type AuthorThumbnail = {
  url: string;
  width: number;
  height: number;
};

type AdaptiveFormat = {
  index: string;
  bitrate: string;
  init: string;
  url: string;
  itag: string;
  type: string;
  clen: string;
  lmt: string;
  projectionType: number;
  container: string;
  encoding: string;
  qualityLabel?: string;
  resolution?: string;
};

type FormatStream = {
  url: string;
  itag: string;
  type: string;
  quality: string;
  container: string;
  encoding: string;
  qualityLabel: string;
  resolution: string;
  size: string;
};

type Caption = {
  label: string;
  languageCode: string;
  url: string;
};

type RecommendedVideo = {
  videoId: string;
  title: string;
  videoThumbnails: VideoThumbnail[];
  author: string;
  lengthSeconds: number;
  viewCountText: string;
};

type Video = {
  type: "video" | "published";
  title: string;
  videoId: string;
  videoThumbnails: VideoThumbnail[];
  storyboards: Storyboard[];
  description: string;
  descriptionHtml: string;
  published: number;
  publishedText: string;
  keywords: string[];
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  paid: boolean;
  premium: boolean;
  isFamilyFriendly: boolean;
  allowedRegions: string[];
  genre: string;
  genreUrl: string;
  author: string;
  authorId: string;
  authorUrl: Url;
  authorThumbnails: AuthorThumbnail[];
  subCountText: string;
  lengthSeconds: number;
  allowRatings: boolean;
  rating: number;
  isListed: boolean;
  liveNow: boolean;
  isPostLiveDvr: boolean;
  isUpcoming: boolean;
  dashUrl: string;
  premiereTimestamp?: number;
  hlsUrl?: string;
  adaptiveFormats: AdaptiveFormat[];
  formatStreams: FormatStream[];
  captions: Caption[];
  recommendedVideos: RecommendedVideo[];
};

export default async function Home({ params }: {params:{videoID: string}}) {
  const videoID = params.videoID;
  console.log(videoID)
  const res = await fetch(`https://invidious.jing.rocks/api/v1/videos/${videoID}?hl=ja&region=jp`);
  const data:Video = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center pt-[6rem] mb-10">
      <p className="break-all">{data?.adaptiveFormats[12].url}</p>
      <Player formats={data.adaptiveFormats}/>
      <div className="mt-4 flex items-center justify-between w-8/12">
        <h1 className="text-xl">{data?.title}</h1>
      </div>
      <div className="w-8/12 flex justify-between items-center mt-2 border rounded-lg p-3">
        <Link className="flex text-md ml-1 w-2/4" href={data?.authorUrl ? data?.authorUrl : "/"}>
          <Image height={50} width={50} src={data?.authorThumbnails[1].url ? data?.authorThumbnails[1].url : ""} className="border rounded-full" alt="" />
          <div className="ml-2">
            <p className="truncate w-5/6">{data?.author}</p>
            <p >チャンネル登録者数{data?.subCountText} 人</p>
          </div>
        </Link>
        <div className="h-max mt-5">
          <div className="flex gap-2 w-auto">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              <h1 className="ml-1 text-lg">{data?.likeCount}</h1>
            </div>
            <p className="text-lg">{data?.viewCount} 回視聴</p>
            <p className="text-lg">{data?.publishedText}</p>
          </div>
        </div>


      </div>
      <div className={`w-8/12 mt-2 border rounded-md p-4 ${data?.description ? "" : "hidden"}`}>
        <div className={`break-words whitespace-pre overflow-hidden transition-all h-auto`}>
          {data?.description ? data.description : ""}
        </div>
      </div>
    </main>
  );
}
