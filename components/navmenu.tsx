import { motion } from "framer-motion";
import { itemVariants } from "@/utils/motion-variants";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const TABS = [
  { title: "About", link: "about" },
  { title: "Work Experience", link: "work-experience" },
  { title: "Tech Stack", link: "tech-stack" },
  { title: "Contact", link: "contact" },
];

function NavMenu() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  return (
    <motion.nav layout className="max-sm:mx-auto py-4 flex flex-col gap-3">
      {TABS.map((tab, index) => (
        <>
          <motion.button
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            data-id={tab.link}
            onHoverStart={() => handleMouseEnter(tab.link)}
            onHoverEnd={() => setHoveredItem(null)}
            type="button"
            className="px-2 py-0.5 relative text-zinc-600 max-w-min whitespace-nowrap transition-colors duration-300 hover:dark:text-zinc-950 dark:text-zinc-400 hover:text-zinc-50"
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
            <AnimatePresence>
              {hoveredItem == tab.link && (
                <motion.div
                  layoutId="bg"
                  className="absolute w-full rounded-lg -z-10 bg-black h-full inset-0"
                />
              )}
            </AnimatePresence>
          </motion.button>
        </>
      ))}
    </motion.nav>
  );
}

export default NavMenu;
