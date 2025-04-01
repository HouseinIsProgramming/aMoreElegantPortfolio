import Biography from "@/components/biography";
import About from "@/components/about";
import { ModeToggle } from "@/components/light-dark-toggle";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";

export default function Page() {
  return (
    <div className="container">
      <Biography />
      <About />
      <WorkExperience />
      <Separator className="my-4" />
      <TechStack />
      <ModeToggle />
    </div>
  );
}
