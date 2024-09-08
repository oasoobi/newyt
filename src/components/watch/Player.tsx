"use client"
import dynamic from 'next/dynamic';
import "plyr-react/plyr.css"
import {PlyrOptions, PlyrSource} from "plyr-react";
const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

export const PlyrWrapper = ({ src, title, poster }: { src: string, title: string, poster:string }) => {

    const source: PlyrSource = {
        type: 'video' as "video",
        title: title,
        sources: [
            {
                src: src,
                type: "video/mp4"
            },
        ],
        poster: poster
    }

    console.log(poster)
    return <Plyr source={source}/>;
};