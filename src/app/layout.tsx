import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Header } from "@/components/Header";
const font = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextyt",
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
        <div className="z-100">
          <NextTopLoader
            color="#000"
            height={2}
            showSpinner={false}
            shadow={false}
          />
        </div>
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
