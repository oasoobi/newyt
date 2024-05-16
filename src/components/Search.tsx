"use client"

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { Suggests } from "./Suggests";
export function Search() {
    const [inputValue, setInputValue] = React.useState("");
    const [suggestsList, setSuggestsList] = React.useState<Array<string>>([]);
    const router = useRouter();
    const typeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value && value.match(/\S/g)) {
            try {
                const res = await fetch("/api/sgst?q=" + value);
                const suggest = await res.json();
                console.log(suggest);
                setSuggestsList(suggest);
            } catch { }
        } else {
            setSuggestsList([]);
        }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (inputValue && inputValue.match(/\S/g)) {
                router.push("/search?q=" + inputValue.replace(/ |　/g, '+'));
            }
        }
    }
    return (
        <div className="relative bg-gray-100 h-10 w-[30rem] rounded-lg flex items-center justify-center border">
            <div className="pl-2">
                <svg viewBox="0 0 24 24" width="23" height="23" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input type="text" name="search" id="header_search" title="検索" value={inputValue} onKeyDown={handleKeyDown} onChange={typeInput} className="bg-transparent outline-none pl-2 pr-3 w-[100%]" />
            <div className="absolute w-[100%] mt-20">
                <Suggests suggests={suggestsList} />
            </div>
        </div>
    )
}
