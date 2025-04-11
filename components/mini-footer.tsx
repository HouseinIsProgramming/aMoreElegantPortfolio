import { TextLoop } from "@/components/motion-primitives/text-loop";
import { ExternalLink, Send } from "lucide-react";
import { MdPersonAddAlt } from "react-icons/md";
import { Button } from "./ui/button";

export default function MiniFooter() {
  return (
    <footer
      id="contact"
      className="flex sm:flex-row pt-4 flex-col-reverse gap-4 sm:gap-0 justify-between px-4 lg:col-span-2 lg:px-12 pb-12  scroll-m-12"
    >
      <a href="https://github.com/HouseinIsProgramming/aMoreElegantPortfolio">
        <TextLoop className="font-mono text-sm text-muted-foreground">
          <span>© 2025 houseinaboshaar.com</span>
          <span className="flex items-center gap-1">
            make it your own <ExternalLink size={12} />
          </span>
        </TextLoop>
      </a>
      <div className="flex gap-3 flex-col xl:flex-row xl:divide-x mb-0.5 sm:divide-x-0 divide-white sm:items-end">
        <Button asChild>
          <a
            href="https://www.linkedin.com/in/housein-abo-shaar-920292265/"
            className="text-sm flex gap-1 items-center xl:pr-3 md:pr-0"
          >
            <MdPersonAddAlt size={18} />
            connect with me on LinkedIn
          </a>
        </Button>
        <Button asChild>
          <a
            href="mailto:housein.aboshaar@gmail.com"
            className="text-sm flex gap-1 items-center"
          >
            <Send size={16} />
            Send me an email
          </a>
        </Button>
      </div>
    </footer>
  );
}
