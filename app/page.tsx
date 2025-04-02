import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import MouseSpotLight from "@/components/ui/mouseSpotlight";
import { ExternalLink } from "lucide-react";
import { small } from "framer-motion/client";

export default function Page() {
  return (
    <div>
      <MouseSpotLight />
      <div className="container lg:grid lg:grid-cols-[400px_minmax(0,780px)] lg:gap-8">
        <div className="lg:sticky max-lg:pt-4 lg:h-[85vh] top-[7.5vh] lg:top-24 pr-6 lg:border-r">
          <Biography />
        </div>
        <div className="my-[7.5vh]">
          <About />
          <Separator className="my-4 mt-12" />
          <TechStack />
          <Separator className="my-4" />
          <WorkExperience />
          <Separator className="my-4" />
          <footer
            id="contact"
            className="flex sm:flex-row pt-4 flex-col-reverse gap-4 sm:gap-0 justify-between px-4 lg:col-span-2 lg:px-12 pb-4 scroll-m-12"
          >
            <a href="https://github.com/HouseinIsProgramming/aMoreElegantPortfolio">
              <TextLoop className="font-mono text-sm text-muted-foreground ">
                <span>© 2025 houseinaboshaar.com</span>
                <span className="flex items-center gap-1">
                  get your own template <ExternalLink size={12} />
                </span>
              </TextLoop>
            </a>
            <a href="mailto:housein.aboshaar@gmail.com" className="text-sm">
              Send me an email
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
