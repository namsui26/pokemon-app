import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//구글 폰트 설정
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "포켓몬 도감",//seo에 좋다
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-400 p-7 text-center font-bold">나의 포켓몬 도감</div>
        {children}
      </body>
    </html>
  );
}

