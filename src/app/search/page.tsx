"use client"

import Image from "next/image";
import { useEffect } from "react";
import { Url } from "url";

export default function Home() {
    const params = new URLSearchParams(window.location.search);
    const word = params.get("q");
    const page = params.get("p");
    type serach = [
        {
            "type":string,
            "title": string,
            "videoId": string,
            "author": string,
            "authorId": string,
            "authorUrl": string,
            "authorVerified": boolean,
            "videoThumbnails":[
                {
                    "quality": string,
                    "url": string
                    "width": number,
                    "height": number
                }
            ],
            "description": string,
            "descriptionHTML": string,
            "viewCount": number,

        }
    ]
    let searchResult = []
    useEffect(() => {
        (async() => {
            
        })
    }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{word}</h1>
    </main>
  );
}
