import { TextLoop } from "@/components/motion-primitives/text-loop";
import { ExternalLink, Send } from "lucide-react";
import { MdPersonAddAlt } from "react-icons/md";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export default function MiniFooter() {
  return (
    <footer
      id="contact"
      className="my-8 flex scroll-m-12 flex-col-reverse items-center justify-between gap-8 px-4 pt-4 pb-12 sm:my-0 sm:flex-row sm:gap-1 lg:col-span-2  lg:px-12"
    >
      <a href="https://github.com/HouseinIsProgramming/aMoreElegantPortfolio">
        <TextLoop className="font-mono text-sm text-muted-foreground sm:w-1/3">
          <span>© 2025 houseinaboshaar.com</span>
          <span className="flex items-center gap-1">
            make it your own <ExternalLink size={12} />
          </span>
        </TextLoop>
      </a>
      <div className="flex flex-col flex-wrap items-center gap-3 sm:w-2/3 sm:flex-row sm:justify-end">
        <Button asChild>
          <a
            href="github.com/HouseinIsProgramming"
            className="flex items-center gap-1 text-sm md:pr-0 xl:pr-3"
          >
            <FaGithub size={18} />
            find me on GitHub
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://www.linkedin.com/in/housein-abo-shaar-920292265/"
            className="flex items-center gap-1 text-sm md:pr-0 xl:pr-3"
          >
            <MdPersonAddAlt size={18} />
            connect with me on LinkedIn
          </a>
        </Button>
        <Button asChild>
          <a
            href="mailto:housein.aboshaar@gmail.com"
            className="flex items-center gap-1 text-sm"
          >
            <Send size={16} />
            Send me an email
          </a>
        </Button>
      </div>
    </footer>
  );
}
