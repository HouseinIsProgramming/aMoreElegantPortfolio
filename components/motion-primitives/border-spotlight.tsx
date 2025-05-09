"use client";
import { Spotlight } from "@/components/motion-primitives/spotlight";

function BorderSpotlight() {
  return (
    <>
      <Spotlight
        // className="bg-conic-270 from-red-600/70 via-purple-600/70 to-blue-600/70 dark:from-sky-600 dark:to-red-400  -z-50"
        className="-z-50 fancy-conic-spotlight"
        size={250}
      />
      <Spotlight size={200} className="dark:bg-neutral-300/10 bg-black/5" />
      <div className="absolute inset-[2.5px] h-[calc(100%-5px)] w-[calc(100%-5px)] -z-10 rounded-lg bg-card dark:bg-card"></div>
    </>
  );
}

export default BorderSpotlight;
