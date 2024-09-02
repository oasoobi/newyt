"use client";
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

import { useRef, useState, useEffect } from "react";

export async function Player({ formats, poster }: { formats: AdaptiveFormat[], poster: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleSync = () => {
            if (audioRef.current && videoRef.current) {
                audioRef.current.currentTime = videoRef.current.currentTime;
            }
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleSync);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleSync);
            }
        };
    }, []);

    const handlePlay = () => {
        if (audioRef.current) audioRef.current.play();
    };

    const handlePause = () => {
        if (audioRef.current) audioRef.current.pause();
    };

    return (
        <main className="w-2/3 flex items-center justify-center">
            <a href={formats.filter(format => format.type.startsWith("video/mp4")).at(-1)?.url}>watch</a>
            <video ref={videoRef} src={formats.filter(format => format.type.startsWith("video/mp4")).at(-1)?.url + "#t=0.001"} onPlay={handlePlay} onPause={handlePause} controls playsInline poster={poster} preload="auto"/>
            <audio ref={audioRef} preload="metadata" src={formats[1].url + "#t=0.001"}/>
        </main>
    );
}
