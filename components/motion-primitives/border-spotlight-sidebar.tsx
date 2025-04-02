"use client";
import { Spotlight } from "@/components/motion-primitives/spotlight";

function BorderSpotlightSideBar() {
  return (
    <div className="!absolute w-[1280px] rounded-lg h-[110%] right-0 -inset-y-4">
      <Spotlight
        className="bg-conic-270 rounded-lg from-red-600/70 via-purple-600/70 to-blue-600/70 dark:from-sky-600 dark:to-red-400 -z-50"
        size={250}
      />
      <Spotlight size={200} className="dark:bg-neutral-300/10 bg-black/5" />
      <div className="absolute inset-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] -z-10 rounded-lg bg-white dark:bg-black"></div>
    </div>
  );
}

export default BorderSpotlightSideBar;
