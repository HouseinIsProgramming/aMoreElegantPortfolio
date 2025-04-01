import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { TextLoop } from "@/components/motion-primitives/text-loop";

export default function Page() {
  return (
    <div>
      <Spotlight size={90} className="bg-gray-700/15 dark:bg-foreground/10" />
      <div className="container lg:grid lg:divide-x py-8 lg:grid-cols-[1fr_2fr] lg:gap-8">
        <Biography />
        <div>
          <About />
          <Separator className="my-4 mt-12" />
          <TechStack />
          <Separator className="my-4" />
          <WorkExperience />
          <Separator className="my-4" />
        </div>
        <footer className="flex justify-between px-4">
          <a href="https://github.com/HouseinIsProgramming/aMoreElegantPortfolio">
            <TextLoop className="font-mono text-sm text-muted-foreground">
              <span>© 2025 houseinaboshaar.com</span>
              <span>get your own template.</span>
            </TextLoop>
          </a>
          <a href="mailto:housein.aboshaar@gmail.com" className="text-sm">
            Send me an email
          </a>
        </footer>
      </div>
    </div>
  );
}
