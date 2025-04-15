import { listVariants, listItemVariants } from "@/utils/motion-variants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ModeToggle } from "./light-dark-toggle";
import { Magnetic } from "./motion-primitives/magnetic";
import { Button } from "./ui/button"; // Assuming this is from shadcn/ui or similar
import { TbFileCv } from "react-icons/tb";
import React from "react"; // Import React if not already globally available

// 1. Define the data for the links array
const contactLinksData = [
  {
    key: "github",
    href: "https://github.com/HouseinIsProgramming",
    icon: FaGithub,
    text: "GitHub",
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/housein-abo-shaar-920292265/",
    icon: FaLinkedin,
    text: "LinkedIn",
  },
  {
    key: "email",
    href: "mailto:housein.aboshaar@gmail.com",
    icon: MdEmail,
  },
  {
    key: "cv",
    href: "https://docs.houseinaboshaar.com/HousienAboShaar-Resume.pdf",
    icon: TbFileCv,
  },
];

export default function ContactLinks({}) {
  return (
    <>
      <motion.ul
        className="flex gap-1.5 flex-wrap justify-center my-12 mx-auto"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {contactLinksData.map((linkData) => {
          const IconComponent = linkData.icon;

          return (
            <motion.li key={linkData.key} variants={listItemVariants}>
              <Magnetic range={50}>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  style={{ padding: "0.5rem" }}
                >
                  <a
                    href={linkData.href}
                    target="_blank"
                    className="flex items-center"
                  >
                    <IconComponent
                      style={{ height: "1.5rem", width: "auto" }}
                      aria-hidden="true"
                    />
                    {linkData.text && <span>{linkData.text}</span>}
                  </a>
                </Button>
              </Magnetic>
            </motion.li>
          );
        })}
        <motion.li key="toggle" variants={listItemVariants}>
          <Magnetic range={50}>
            <ModeToggle />
          </Magnetic>
        </motion.li>
      </motion.ul>
    </>
  );
}
