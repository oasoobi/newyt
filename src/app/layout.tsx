import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
const font = Roboto({ weight: "400", subsets: ["latin"], });

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
        <NextTopLoader color="#000" height={2} showSpinner={false} />
        <Header />
        {children}
      </body>
    </html>
  );
}
