import Biography from "@/components/biography";
import About from "@/components/about";
import { Separator } from "@/components/ui/separator";
import WorkExperience from "@/components/workexperience";
import TechStack from "@/components/techstack";
import MiniFooter from "@/components/mini-footer";
import { BentoBoxes } from "@/components/BentoBoxes";
import ContactForm from "@/components/ContactForm";

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
          <Separator className="my-4" />
          <MiniFooter />
        </div>
      </section>
      {/* <Separator className="container my-8" /> */}
      <BentoBoxes />
      <ContactForm />
    </div>
  );
}
