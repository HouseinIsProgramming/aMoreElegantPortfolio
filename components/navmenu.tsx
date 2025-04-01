import { AnimatedBackground } from "./motion-primitives/animated-background";
import { motion } from "framer-motion";
import { itemVariants } from "@/utils/motion-variants";

const TABS = [
  { title: "About", link: "about" },
  { title: "Work Experience", link: "work-experience" },
  { title: "Tech Stack", link: "tech-stack" },
  { title: "Contact", link: "contact" },
];

function NavMenu() {
  return (
    <nav className="max-sm:mx-auto py-4 flex flex-col gap-3">
      <AnimatedBackground
        className="rounded-lg dark:bg-zinc-100 max-w-1/2 bg-zinc-800"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            data-id={tab.link}
            type="button"
            className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:dark:text-zinc-950 dark:text-zinc-400 hover:text-zinc-50"
            onClick={() => {
              const element = document.getElementById(tab.link);
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            {tab.title}
          </motion.button>
        ))}
      </AnimatedBackground>
    </nav>
  );
}

export default NavMenu;
