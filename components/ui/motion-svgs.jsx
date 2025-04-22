import { motion } from "framer-motion";
import { transitionSpring, transitionTween } from "@/utils/motion-variants";
import { useEffect, useState } from "react";

export const getResizeIconVariant = (isHovered) => ({
  color: isHovered ? "var(--accent-foreground) " : "",
  height: isHovered ? 40 : 64,
  width: isHovered ? 40 : 64,
});

export const getRecolorIconVariant = (isHovered) => ({
  color: isHovered ? "var(--accent-foreground)" : "",
});

export const FolderArrowSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-folder-symlink-icon lucide-folder-symlink"
      animate={getResizeIconVariant(isHovered)}
      transition={transitionSpring}
    >
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0.85,
          pathOffset: isHovered ? 0.1 : 0,
        }}
        d="M2 16.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
      />
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0, ease: "easeOut" }}
        d="m8 16 3-3-3-3"
      />
      <motion.path
        animate={{
          // pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={
          isHovered
            ? {
                duration: 0.5, // total time for one blink cycle
                repeatDelay: 0.5, // time between blinks
                repeat: Infinity, // loop it
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
        d="M 19 17H12"
      />
    </motion.svg>
  );
};

export const BookOpenSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-open-check-icon lucide-book-open-check"
    >
      <path d="M12 21V7" />
      <motion.path
        animate={{ pathLength: isHovered ? 1 : 0 }}
        d="m16 12 2 2 4-4"
      />
      <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
    </motion.svg>
  );
};

export const BookHeartSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-heart-icon lucide-book-heart"
      animate={getResizeIconVariant(isHovered)}
    >
      <motion.path
        d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
        animate={{ scale: isHovered ? 1.1 : 0.9 }}
        transition={
          isHovered
            ? {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 0.3, // Adjust speed here
                repeatDelay: 0.1,
              }
            : {}
        }
      />
      <motion.path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </motion.svg>
  );
};

export const CalendarRotateSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calendar-sync-icon lucide-calendar-sync"
      animate={getResizeIconVariant(isHovered)}
    >
      <motion.g
        animate={{ rotate: isHovered ? -180 : 0 }}
        style={{ originX: 0.5, originY: 0.5 }}
        transition={{ type: "spring", damping: 50, stiffness: 300 }}
      >
        <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
        <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
        <path d="M11 10v4h4" />
        <path d="M21 22v-4h-4" />
      </motion.g>

      <path d="M16 2v4" />
      <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
      <path d="M3 10h4" />
      <path d="M8 2v4" />
    </motion.svg>
  );
};

export const MonitorCogSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-monitor-cog-icon lucide-monitor-cog"
      animate={getResizeIconVariant(isHovered)}
    >
      <path d="M12 17v4" />
      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <path d="M8 21h8" />
      <motion.g animate={{ rotate: isHovered ? 180 : 0 }}>
        <motion.g
          animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
          transition={
            isHovered
              ? {
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 1, // Adjust speed here
                }
              : {
                  duration: 0.5,
                  ease: "linear",
                }
          }
        >
          <path d="m15.2 4.9-.9-.4" />
          <path d="m15.2 7.1-.9.4" />
          <path d="m16.9 3.2-.4-.9" />
          <path d="m16.9 8.8-.4.9" />
          <path d="m19.5 2.3-.4.9" />
          <path d="m19.5 9.7-.4-.9" />
          <path d="m21.7 4.5-.9.4" />
          <path d="m21.7 7.5-.9-.4" />
          <circle cx="18" cy="6" r="3" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export const ChevronsRightSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevrons-right-icon lucide-chevrons-right"
      animate={{ rotate: isHovered ? 90 : 0 }}
    >
      <motion.path
        animate={{ translateX: isHovered ? 3 : 0 }}
        d="m6 17 5-5-5-5"
      />
      <motion.path
        animate={{ translateX: isHovered ? -4 : 0 }}
        d="m13 17 5-5-5-5"
      />
    </motion.svg>
  );
};

export function CSharpSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="16"
      height="16"
      viewBox="0 0 50 50"
      className="text-foreground"
      fill="currentColor"
    >
      <path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"></path>
    </svg>
  );
}

export const PenOpenSVG = ({ isHovered }) => {
  const [accentColor, setAccentColor] = useState("var(--accent-foreground)");

  const cssColorToHex = (cssColor) => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return cssColor;
    ctx.fillStyle = cssColor;
    return ctx.fillStyle;
  };

  useEffect(() => {
    if (isHovered) {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(
        "--accent-foreground",
      );
      const hex = cssColorToHex(raw.trim());
      setAccentColor(hex);
    }
  }, [isHovered]);

  return (
    <motion.svg
      height="24"
      viewBox="0 0 52 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{
          stroke: isHovered ? accentColor : "var(--foreground)",
          x: isHovered ? 15 : 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        d="M3.53236 2.70215C3.53236 2.70215 3.05034 2.89635 3.05034 3.33237C3.05034 3.76838 3.53236 3.92753 3.53236 3.92753L5.30046 4.57627H22.1083C22.5504 4.58828 25.2576 4.37034 25.2576 3.33237C25.2576 2.2944 22.5504 2.0414 22.1083 2.05342H5.30046L3.53236 2.70215Z"
      />
      <motion.path
        animate={{
          stroke: isHovered ? accentColor : "var(--foreground)",
          x: isHovered ? 15 : 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        d="M22.4833 2.11236V4.35441M10.7116 2.11237V4.35442M4.32475 2.45056V4.0903"
        stroke="currentColor"
      />
      <motion.path
        animate={{ stroke: isHovered ? accentColor : "var(--foreground)" }}
        fill="currentColor"
        stroke="currentColor"
        stroke-linejoin="round"
        className=" fill-background"
        d="M10.7951 4.70755V1.90114H2.31505C1.83246 1.97109 1.10364 2.48066 1.10364 3.34109C1.10364 4.20151 1.83246 4.70755 2.31505 4.70755H10.7951Z"
      />

      <motion.path
        animate={{ fill: isHovered ? accentColor : "var(--foreground)" }}
        fill="currentColor"
        stroke="none"
        d="M3.33963 0.57597L3.41057 0.0810286C3.22083 0.0538323 3.03224 0.137503 2.92507 0.296428L3.33963 0.57597ZM2.44563 1.90174L2.86019 2.18128L3.75418 0.855513L3.33963 0.57597L2.92507 0.296428L2.03108 1.6222L2.44563 1.90174ZM10.1671 1.69766L10.4686 2.09647C10.7392 1.89183 10.9373 1.60995 10.9581 1.25911C10.9781 0.921553 10.8268 0.629158 10.6388 0.406039L10.2564 0.728192L9.87406 1.05034C9.96545 1.15881 9.95941 1.2075 9.95986 1.19995C9.9601 1.19592 9.96176 1.19811 9.95412 1.21059C9.94508 1.22536 9.92126 1.25667 9.86547 1.29885L10.1671 1.69766ZM3.33963 0.57597L3.26868 1.07091L9.08996 1.90529L9.1609 1.41035L9.23184 0.915412L3.41057 0.0810286L3.33963 0.57597ZM9.1609 1.41035L8.83579 1.79022C8.97101 1.90595 9.19767 2.11709 9.44482 2.22661C9.58527 2.28885 9.75608 2.3318 9.94874 2.31167C10.142 2.29147 10.3157 2.21211 10.4686 2.09647L10.1671 1.69766L9.86547 1.29885C9.82843 1.32686 9.82332 1.31933 9.8448 1.31709C9.86564 1.31491 9.8716 1.32195 9.84996 1.31236C9.82348 1.30062 9.78115 1.27525 9.71428 1.22296C9.64549 1.16917 9.5792 1.11024 9.48601 1.03048L9.1609 1.41035ZM10.2564 0.728192L10.6388 0.406039C10.4924 0.232285 10.2871 0.118828 10.0913 0.0584134C9.89169 -0.00318245 9.64932 -0.0260621 9.40959 0.0393618C9.15698 0.108303 8.92014 0.273865 8.77717 0.553269C8.641 0.81938 8.61521 1.13867 8.6663 1.48361L9.1609 1.41035L9.65551 1.3371C9.62302 1.11776 9.65746 1.02819 9.66739 1.00879C9.67052 1.00267 9.66563 1.00606 9.67288 1.00408C9.69302 0.998584 9.73841 0.996043 9.7965 1.01396C9.85841 1.03307 9.88077 1.05831 9.87406 1.05034L10.2564 0.728192Z"
      />
    </motion.svg>
  );
};

export const AiSvgChronotes = ({ isHovered }) => {
  return (
    <motion.svg
      height="56"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={getRecolorIconVariant(isHovered)}
    >
      <path
        fill-rule="evenodd"
        stroke="currentColor"
        clip-rule="evenodd"
        d="M86.1458 39.5367C76.81 39.5367 68.8152 45.5974 65.5937 54.1105C58.8544 55.0433 52.8327 59.1169 49.3677 65.3392C44.7009 73.7167 45.7643 83.9183 51.2645 91.0657C48.6767 97.5787 49.0671 105.021 52.529 111.24C57.1977 119.621 66.2645 123.768 74.9912 122.4C79.1401 127.981 85.5516 131.352 92.4817 131.352C101.818 131.352 109.812 125.292 113.034 116.779C119.773 115.846 125.795 111.772 129.26 105.55C133.927 97.1724 132.863 86.9707 127.363 79.8233C129.951 73.3104 129.561 65.8677 126.099 59.6489C121.43 51.268 112.363 47.1216 103.636 48.4893C99.4875 42.9085 93.076 39.5367 86.1459 39.5367M86.1459 46.5993C90.0855 46.5993 93.7801 48.205 96.575 50.9308C96.3616 51.0491 96.1406 51.1425 95.9295 51.2689L80.8014 60.3249C79.2271 61.2642 78.2526 63.0051 78.2457 64.8908L78.1526 85.9618L70.8781 81.5614V62.4216C70.8781 53.6991 77.729 46.5995 86.1458 46.5995M108.029 55.3107C112.92 55.6713 117.565 58.4594 120.195 63.1805C122.165 66.715 122.672 70.8347 121.792 74.7056C121.584 74.5715 121.394 74.4198 121.18 74.2919L106.046 65.2358C105.271 64.7739 104.394 64.5303 103.501 64.5291C102.608 64.5279 101.73 64.7692 100.954 65.2289L83.3039 75.6851L83.3438 66.9601L99.3369 57.3868C102.07 55.7513 105.094 55.0944 108.029 55.3106M64.0963 61.6699C64.0885 61.9212 64.0631 62.1683 64.0631 62.4216V80.5268C64.0629 81.4534 64.2969 82.3638 64.7418 83.1674C65.1868 83.971 65.8271 84.6396 66.5989 85.1065L84.1625 95.7214L76.8549 100.046L60.8551 90.4795C53.5663 86.1182 51.0628 76.4172 55.2713 68.8636C57.2396 65.331 60.4243 62.8165 64.0963 61.6699ZM101.773 70.8431L117.773 80.4096C125.062 84.7708 127.565 94.4719 123.357 102.025C121.388 105.558 118.204 108.073 114.532 109.219C114.539 108.968 114.565 108.721 114.565 108.467V90.3623C114.565 89.4357 114.331 88.5252 113.886 87.7217C113.441 86.9181 112.801 86.2495 112.029 85.7825L94.4653 75.1677L101.773 70.8431ZM89.3471 78.1957L95.3836 81.8442L95.3504 89.1002L89.2805 92.6936L83.244 89.0382L83.2772 81.7891L89.3471 78.1957ZM100.475 84.9274L107.749 89.3278V108.468C107.749 117.19 100.899 124.29 92.4818 124.29C88.5422 124.29 84.8476 122.684 82.0527 119.958C82.2661 119.84 82.4872 119.747 82.6982 119.62L97.8262 110.564C99.4005 109.625 100.375 107.884 100.382 105.998L100.475 84.9274ZM95.3237 95.2042L95.2839 103.929L79.2907 113.503C72.0018 117.864 62.6408 115.263 58.4324 107.709C56.4629 104.174 55.9553 100.055 56.8352 96.1837C57.0432 96.3178 57.2337 96.4695 57.4474 96.5974L72.582 105.654C73.3563 106.115 74.2336 106.359 75.1269 106.36C76.0201 106.361 76.898 106.12 77.6735 105.66L95.3237 95.2042Z"
        fill="currentColor"
      />
      <path
        d="M86.1458 39.5367C76.81 39.5367 68.8152 45.5974 65.5937 54.1105C58.8544 55.0433 52.8327 59.1169 49.3677 65.3392C44.7009 73.7167 45.7643 83.9183 51.2645 91.0657C48.6767 97.5787 49.0671 105.021 52.529 111.24C57.1977 119.621 66.2645 123.768 74.9912 122.4C79.1401 127.981 85.5516 131.352 92.4817 131.352C101.818 131.352 109.812 125.292 113.034 116.779C119.773 115.846 125.795 111.772 129.26 105.55C133.927 97.1724 132.863 86.9707 127.363 79.8233C129.951 73.3104 129.561 65.8677 126.099 59.6489C121.43 51.268 112.363 47.1216 103.636 48.4893C99.4875 42.9085 93.076 39.5367 86.1459 39.5367M86.1459 46.5993C90.0855 46.5993 93.7801 48.205 96.575 50.9308C96.3616 51.0491 96.1406 51.1425 95.9295 51.2689L80.8014 60.3249C79.2271 61.2642 78.2526 63.0051 78.2457 64.8908L78.1526 85.9618L70.8781 81.5614V62.4216C70.8781 53.6991 77.729 46.5995 86.1458 46.5995M108.029 55.3107C112.92 55.6713 117.565 58.4594 120.195 63.1805C122.165 66.715 122.672 70.8347 121.792 74.7056C121.584 74.5715 121.394 74.4198 121.18 74.2919L106.046 65.2358C105.271 64.7739 104.394 64.5303 103.501 64.5291C102.608 64.5279 101.73 64.7692 100.954 65.2289L83.3039 75.6851L83.3438 66.9601L99.3369 57.3868C102.07 55.7513 105.094 55.0944 108.029 55.3106M64.0963 61.6699C64.0885 61.9212 64.0631 62.1683 64.0631 62.4216V80.5268C64.0629 81.4534 64.2969 82.3638 64.7418 83.1674C65.1868 83.971 65.8271 84.6396 66.5989 85.1065L84.1625 95.7214L76.8549 100.046L60.8551 90.4795C53.5663 86.1182 51.0628 76.4172 55.2713 68.8636C57.2396 65.331 60.4243 62.8165 64.0963 61.6699ZM101.773 70.8431L117.773 80.4096C125.062 84.7708 127.565 94.4719 123.357 102.025C121.388 105.558 118.204 108.073 114.532 109.219C114.539 108.968 114.565 108.721 114.565 108.467V90.3623C114.565 89.4357 114.331 88.5252 113.886 87.7217C113.441 86.9181 112.801 86.2495 112.029 85.7825L94.4653 75.1677L101.773 70.8431ZM89.3471 78.1957L95.3836 81.8442L95.3504 89.1002L89.2805 92.6936L83.244 89.0382L83.2772 81.7891L89.3471 78.1957ZM100.475 84.9274L107.749 89.3278V108.468C107.749 117.19 100.899 124.29 92.4818 124.29C88.5422 124.29 84.8476 122.684 82.0527 119.958C82.2661 119.84 82.4872 119.747 82.6982 119.62L97.8262 110.564C99.4005 109.625 100.375 107.884 100.382 105.998L100.475 84.9274ZM95.3237 95.2042L95.2839 103.929L79.2907 113.503C72.0018 117.864 62.6408 115.263 58.4324 107.709C56.4629 104.174 55.9553 100.055 56.8352 96.1837C57.0432 96.3178 57.2337 96.4695 57.4474 96.5974L72.582 105.654C73.3563 106.115 74.2336 106.359 75.1269 106.36C76.0201 106.361 76.898 106.12 77.6735 105.66L95.3237 95.2042Z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M170.619 16.8189H45.5361C39.1026 16.8368 32.9377 19.4005 28.3885 23.9497C23.8393 28.4989 21.2757 34.6638 21.2577 41.0973V166.083C21.2757 172.516 23.8393 178.681 28.3885 183.23C32.9377 187.779 39.1026 190.343 45.5361 190.361H129.831C133.01 190.357 136.156 189.724 139.09 188.499C142.023 187.274 144.685 185.481 146.923 183.223L187.808 142.435C192.354 137.87 194.903 131.689 194.897 125.246V41.0973C194.897 37.909 194.269 34.7519 193.049 31.8064C191.829 28.8608 190.04 26.1843 187.786 23.9299C185.532 21.6754 182.855 19.8871 179.91 18.667C176.964 17.4469 173.807 16.8189 170.619 16.8189ZM128.083 147.922V180.65H45.5361C41.6727 180.65 37.9675 179.115 35.2357 176.383C32.5038 173.651 30.9691 169.946 30.9691 166.083V41.0973C30.9691 37.2339 32.5038 33.5287 35.2357 30.7968C37.9675 28.065 41.6727 26.5302 45.5361 26.5302H170.619C174.482 26.5302 178.187 28.065 180.919 30.7968C183.651 33.5287 185.186 37.2339 185.186 41.0973V123.644H152.361C145.928 123.662 139.763 126.226 135.214 130.775C130.664 135.324 128.101 141.489 128.083 147.922ZM137.794 178.319V147.922C137.794 144.059 139.329 140.354 142.061 137.622C144.793 134.89 148.498 133.355 152.361 133.355H182.758L137.794 178.319Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="8"
      />
    </motion.svg>
  );
};
