import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import MiniFooter from "@/components/mini-footer";
import { BentoBoxes } from "@/components/BentoBoxes";

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="container lg:grid lg:grid-cols-[400px_minmax(0,780px)] lg:gap-8">
        <div className="lg:sticky max-lg:pt-4 lg:h-[85vh] top-[7.5vh] lg:top-24 pr-6 lg:border-r">
          <Biography />
        </div>
        <div className="">
          <About />
          <Separator className="my-4 mt-12" />
          <TechStack />
          <Separator className="my-4" />
          <WorkExperience />
          <BentoBoxes />
        </div>
      </section>
      <div className=" container">
        <Separator className="my-4" />
        <MiniFooter />
      </div>
    </div>
  );
}
