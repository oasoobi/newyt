"use client"

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suggests } from "./Suggests";

export function Search() {
    const [inputValue, setInputValue] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [suggestsList, setSuggestsList] = useState<string[]>([]);
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setInputValue(params.get("q") ?? "");
    }, [params])

    const typeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value && value.match(/\S/g)) {
            try {
                const res = await fetch("/api/sgst?q=" + value);
                const suggest = await res.json();
                setSuggestsList(suggest);
            } catch { }
        } else {
            setSuggestsList([]);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (inputValue && inputValue.match(/\S/g)) {
                router.push("/search?q=" + inputValue.replace(/ |　/g, "+"));
                setIsHidden(true);
            }
        }
    }

    return (
        <div className="relative bg-[#ffffff93] h-10 w-[80%] max-w-[35rem] rounded-lg flex items-center justify-center border" onFocus={() => setIsHidden(false)} onBlur={() => setTimeout(() => setIsHidden(true), 150)}>
            <div className="pl-2">
                <svg viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input type="text" name="search" id="header_search" autoComplete="off" title="検索" value={inputValue} onKeyDown={handleKeyDown} onChange={typeInput} className="bg-transparent outline-none pl-2 pr-3 w-[100%]" />
            <div className={"absolute w-[100%] mt-20"}>
                <Suggests suggests={suggestsList} isHidden={isHidden} />
            </div>
        </div>
    )
}
