"use client";

import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { itemVariants } from "@/utils/motion-variants"; // Assuming this file and export exist
import { useState } from "react";

const TABS = [
  { title: "Bio", link: "about" },
  { title: "Tech Stack", link: "tech-stack" },
  { title: "Work Experience", link: "work-experience" },
  { title: "More about me", link: "bento-boxes" },
  { title: "Contact", link: "contact" },
];

function NavMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <LayoutGroup>
      <motion.nav className="hidden max-sm:mx-auto py-4 lg:flex flex-col gap-3">
        {TABS.map((tab, index) => (
          <motion.button
            key={tab.link}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredItem(tab.link)}
            onMouseLeave={() => setHoveredItem(null)}
            type="button"
            className="px-2 py-0.5 relative text-zinc-600 max-w-min whitespace-nowrap cursor-pointer transition-colors duration-300 hover:dark:text-zinc-950 dark:text-zinc-400 hover:text-zinc-50"
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
              {hoveredItem === tab.link && (
                <motion.div
                  layoutId="bg"
                  className="absolute w-full rounded-lg -z-10 bg-gray-800 dark:bg-gray-100 h-full inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.nav>
    </LayoutGroup>
  );
}

export default NavMenu;
