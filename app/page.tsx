import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import { Spotlight } from "@/components/motion-primitives/spotlight";

export default function Page() {
  return (
    <div>
      <Spotlight size={90} className="bg-gray-700/15 dark:bg-foreground/10" />
      <div className="container">
        <Biography />
        <About />
        <Separator className="my-4 mt-12" />
        <TechStack />
        <Separator className="my-4" />
        <WorkExperience />
      </div>
    </div>
  );
}
