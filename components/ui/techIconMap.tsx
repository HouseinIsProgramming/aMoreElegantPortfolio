import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCheckDouble,
} from "react-icons/fa";
import { CSharpSVG } from "@/components/ui/motion-svgs";
import {
  SiAdobephotoshop,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiSvelte,
  SiJest,
  SiLua,
  SiMysql,
  SiAffinitydesigner,
  SiGnubash,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";
import { IconType } from "react-icons";
import { TbBrandFramerMotion } from "react-icons/tb";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";

const darkenColor = (hex: string, percent: number): string => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  r = Math.floor((r * (100 - percent)) / 100);
  g = Math.floor((g * (100 - percent)) / 100);
  b = Math.floor((b * (100 - percent)) / 100);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

interface TechIcon {
  icon: IconType;
  color: string;
  darkColor: string;
  textColor: string;
}

interface TechIconMap {
  [key: string]: TechIcon;
}

export const techIcons: TechIconMap = {
  HTML5: {
    icon: FaHtml5,
    color: "#E34F26",
    darkColor: darkenColor("#E34F26", 15),
    textColor: "white",
  },
  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
    darkColor: darkenColor("#1572B6", 15),
    textColor: "white",
  },
  JavaScript: {
    icon: FaJs,
    color: "#F7DF1E",
    darkColor: darkenColor("#F7DF1E", 15),
    textColor: "black",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
    darkColor: darkenColor("#3178C6", 15),
    textColor: "white",
  },
  React: {
    icon: FaReact,
    color: "#61DAFB",
    darkColor: darkenColor("#61DAFB", 15),
    textColor: "black",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
    darkColor: "#000000",
    textColor: "white",
  },
  Vite: {
    icon: SiVite,
    color: "#646CFF",
    darkColor: darkenColor("#646CFF", 15),
    textColor: "white",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#38B2AC",
    darkColor: darkenColor("#38B2AC", 15),
    textColor: "white",
  },
  Svelte: {
    icon: SiSvelte,
    color: "#FF3E00",
    darkColor: darkenColor("#FF3E00", 15),
    textColor: "white",
  },
  "Node.js": {
    icon: FaNodeJs,
    color: "#339933",
    darkColor: darkenColor("#339933", 15),
    textColor: "white",
  },
  mySQL: {
    icon: SiMysql,
    color: "#4479A1",
    darkColor: darkenColor("#4479A1", 15),
    textColor: "white",
  },
  PHP: {
    icon: FaPhp,
    color: "#777BB4",
    darkColor: darkenColor("#777BB4", 15),
    textColor: "white",
  },
  Python: {
    icon: FaPython,
    color: "#3776AB",
    darkColor: darkenColor("#3776AB", 15),
    textColor: "white",
  },
  "C#": {
    icon: CSharpSVG,
    color: "#2F086D",
    darkColor: darkenColor("#2F086D", 15),
    textColor: "white",
  },
  "Adobe Photoshop": {
    icon: SiAdobephotoshop,
    color: "#31A8FF",
    darkColor: darkenColor("#31A8FF", 15),
    textColor: "white",
  },
  "Adobe Illustrator": {
    icon: SiAdobeillustrator,
    color: "#FF9A00",
    darkColor: darkenColor("#FF9A00", 15),
    textColor: "black",
  },
  Figma: {
    icon: SiFigma,
    color: "#F24E1E",
    darkColor: darkenColor("#F24E1E", 15),
    textColor: "white",
  },
  "Affinity Designer": {
    icon: SiAffinitydesigner,
    color: "#1B72BE",
    darkColor: darkenColor("#1B72BE", 15),
    textColor: "white",
  },
  Git: {
    icon: FaGitAlt,
    color: "#F05032",
    darkColor: darkenColor("#F05032", 15),
    textColor: "white",
  },
  GitHub: {
    icon: FaGithub,
    color: "#181717",
    darkColor: "#181717",
    textColor: "white",
  },
  Jest: {
    icon: SiJest,
    color: "#C21325",
    darkColor: darkenColor("#C21325", 15),
    textColor: "white",
  },
  Docker: {
    icon: FaDocker,
    color: "#2496ED",
    darkColor: darkenColor("#2496ED", 15),
    textColor: "white",
  },
  Playwright: {
    icon: FaCheckDouble,
    color: "#2EAD33",
    darkColor: darkenColor("#2EAD33", 15),
    textColor: "white",
  },
  Lua: {
    icon: SiLua,
    color: "#2C2D72",
    darkColor: darkenColor("#2C2D72", 15),
    textColor: "white",
  },
  "Shell Scripts": {
    icon: SiGnubash,
    color: "#4EAA25",
    darkColor: darkenColor("#4EAA25", 15),
    textColor: "white",
  },

  "Framer Motion": {
    icon: TbBrandFramerMotion,
    color: "#F0E628",
    darkColor: darkenColor("#F0E628", 15),
    textColor: "black",
  },
  PostgreSQL: {
    icon: BiLogoPostgresql,
    color: "#336791",
    darkColor: darkenColor("#336791", 15),
    textColor: "white",
  },
  AI: {
    icon: AiFillOpenAI,
    color: "#986788",
    darkColor: darkenColor("#986788", 15),
    textColor: "white",
  },
  OAuth: {
    icon: RiLoginCircleFill,
    color: "#007BC1",
    darkColor: darkenColor("#007BC1", 15),
    textColor: "white",
  },
};
