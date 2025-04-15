import { ExternalLink } from "lucide-react";

export default function MiniFooter() {
  return (
    <footer className="!text-center text-muted-foreground">
      <a
        href="https://github.com/HouseinIsProgramming/aMoreElegantPortfolio"
        target="_blank"
        className="flex flex-col items-center gap-1"
      >
        <span className="hover:bg-muted-foreground/10 rounded-md px-2 py-1 transition-colors duration-500 ease-in-out">
          © 2025 houseinaboshaar.com
        </span>
        <span className="flex text-center items-center gap-1 hover:bg-muted-foreground/10 rounded-md px-2 py-1 transition-colors ease-in-out duration-500">
          <ExternalLink size={12} />
          make it your own
        </span>
      </a>
    </footer>
  );
}
