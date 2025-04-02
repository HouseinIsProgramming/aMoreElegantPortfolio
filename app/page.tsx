import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import { TextLoop } from "@/components/motion-primitives/text-loop";

export default function Page() {
  return (
    <div>
      <div className="container lg:grid lg:grid-cols-[400px_minmax(0,780px)] lg:gap-8">
        <div className="sticky lg:h-[85vh] top-[7.] lg:top-24 pr-6 lg:border-r">
          <Biography />
        </div>
        <div className="">
          <About />
          <Separator className="my-4 mt-12" />
          <TechStack />
          <Separator className="my-4" />
          <WorkExperience />
          <Separator className="my-4" />
          <footer
            id="contact"
            className="flex justify-between px-4 lg:col-span-2 lg:px-12 pb-4 scroll-m-12"
          >
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
    </div>
  );
}
