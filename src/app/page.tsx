"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function BackgroundBeamsDemo() {
  return (
    <>
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        CodeLuminate
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-6 text-sm text-center relative z-10">
        Ready to shine on GitHub? Start illuminating your profile with CodeLuminate now! Analyze, enhance, and showcase your coding journey with ease.
        </p>
        <Link href={"/username"}>
        <button  className="bg-gradient-to-r from-teal-500 to-teal-400 text-black text-lg rounded-xl w-full relative z-10 mt-4 py-1">
        
          Get Started
         
        </button>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
    </>
  );
}