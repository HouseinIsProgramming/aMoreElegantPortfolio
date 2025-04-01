import { Spotlight } from "@/components/motion-primitives/spotlight";

function BorderSpotlight() {
  return (
    <>
      <Spotlight
        className="bg-conic-180 from-red-600/70 via-purple-600/70 to-blue-600/70 -z-50"
        size={250}
      />
      <div className="absolute inset-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] -z-10 rounded-lg bg-white dark:bg-black"></div>
    </>
  );
}

export default BorderSpotlight;
