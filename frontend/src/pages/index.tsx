import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div>
      <VideoCard
      title={"Top Best Nasheed ever"}
      channel = {"Yahya Yusuf"}
      views = {"100M views"}
      date = {"2 days ago"}
      Timage = {'maxresdefault.jpg'}
      icon = {'icon.jpg'}
      ></VideoCard>
   </div>
  );
}
