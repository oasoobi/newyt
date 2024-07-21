"use client"

import { Search } from "@/components/Search";
import Image from "next/image";
import as, { useEffect, useState } from "react"
import Link from "next/link";
import { Video } from "@/components/cards/video";
import { usePathname } from "next/navigation";
import useSWR, { mutate } from "swr";

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
  authorUrl: string;
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

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<Video | null>);
}

export default function Home() {
  const [videoData, setVideoData] = useState({});
  useEffect(() => {

  }, [])

  const pathname = usePathname();
  const videoID = pathname.replace("/watch/", "");

  const { data, error, isLoading } = useSWR(
    `/api/v/` + videoID,
    fetcher
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <video src={data?.formatStreams[0].url} poster={"/api/tn/" + videoID} controls></video>
    </main>
  );
}
