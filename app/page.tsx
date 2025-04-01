import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import BorderSpotlightSideBar from "@/components/motion-primitives/border-spotlight-sidebar";

export default function Page() {
  return (
    <div>
      <Spotlight size={90} className="bg-gray-700/15 dark:bg-foreground/10" />
      <div className="container lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
        <div className="relative z-20">
          <BorderSpotlightSideBar />
          <Biography />
        </div>
        <div>
          <About />
          <Separator className="my-4 mt-12" />
          <TechStack />
          <Separator className="my-4" />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
