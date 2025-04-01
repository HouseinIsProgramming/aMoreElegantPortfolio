import Biography from "@/components/biography";
import About from "@/components/about";
import { ModeToggle } from "@/components/light-dark-toggle";
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
        <WorkExperience />
        <Separator className="my-4" />
        <TechStack />
        <ModeToggle />
      </div>
    </div>
  );
}
