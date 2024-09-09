"use client";

import NextTopLoader from "nextjs-toploader";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { Suggests } from "@/components/search/Suggests";
import { Search } from "@/components/search/Search";
export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const back = () => {
    if (pathname.startsWith("/channel")) {
      history.go(-2);
    } else {
      history.go(-1);
    }
  };
  const handleShare = () => {
    const url = window.location.href;
    navigator.share({url: url, title: "Nextyt"});
  }
  return pathname === "/" ? (
    <></>
  ) : (
    <div className="z-50 fixed">
      <noscript>JavaScriptを有効にしてください。</noscript>
      <div className="flex items-center md:pl-20 md:pr-20 justify-center md:justify-between w-screen bg-[#ffffffb6] backdrop-blur-lg h-20 pt-3">
        <div className="flex items-center">
          <div className="pr-2 mr-2 md:mr-0 cursor-pointer">
            <svg
              onClick={back}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 8 8 12 12 16"></polyline>
              <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
          </div>
          <div className="pr-2 mr-2 md:mr-0 cursor-pointer">
            <svg onClick={() => { window.location.reload() }} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </div>
          <div className="pr-2 mr-2 md:mr-0 cursor-pointer">
            <svg onClick={handleShare} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
          </div>

          <Link
            href={"/"}
            className="hidden md:block text-lg md:text-xl font-bold pl-4 w-[130px] pr-4 left"
          >
            Nextyt
          </Link>
        </div>
        <Search />
        <div className="hidden w-[162px] md:block">
        </div>
      </div>
    </div>
  );
}
