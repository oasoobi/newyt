"use client";

import { useRef } from "react";


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

export async function Player({ formats }: { formats: AdaptiveFormat[] }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (audioRef.current) { audioRef.current.play() };
    };

    const handlePause = () => {
        if (audioRef.current) { audioRef?.current.pause() };
    };


    const handleSync = () => {
        if (audioRef.current && videoRef.current) {
            const videoTime = videoRef.current.currentTime;
            audioRef.current.currentTime = videoTime;
        }
    };

    return (
        <main className="w-2/3 flex items-center justify-center">
            <video ref={videoRef} onTimeUpdate={handleSync} onPlay={handlePlay} onPause={handlePause} controls playsInline>
                <source src={formats[12].url} />
            </video>
            <audio ref={audioRef}>
                <source src={formats[1].url} />
            </audio>
        </main>
    );
}
