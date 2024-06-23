import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
const font = M_PLUS_1({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimpleTube v2",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <Header />  
        {children}
      </body>
    </html>
  );
}
