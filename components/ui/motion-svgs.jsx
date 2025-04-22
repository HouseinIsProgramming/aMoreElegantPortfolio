import { motion } from "framer-motion";
import { transitionSpring, transitionTween } from "@/utils/motion-variants";

export const getResizeIconVariant = (isHovered) => ({
  color: isHovered ? "#4285F4" : "",
  height: isHovered ? 40 : 64,
  width: isHovered ? 40 : 64,
});

export const getRecolorIconVariant = (isHovered) => ({
  color: isHovered ? "#4285F4" : "",
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
  return (
    <motion.svg
      height="24"
      viewBox="0 0 52 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{
          stroke: isHovered ? "#4285F4" : "var(--foreground)",
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
          stroke: isHovered ? "#4285F4" : "var(--foreground)",
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
        animate={{ stroke: isHovered ? "#4285F4" : "var(--foreground)" }}
        fill="currentColor"
        stroke="currentColor"
        stroke-linejoin="round"
        className=" fill-background"
        d="M10.7951 4.70755V1.90114H2.31505C1.83246 1.97109 1.10364 2.48066 1.10364 3.34109C1.10364 4.20151 1.83246 4.70755 2.31505 4.70755H10.7951Z"
      />

      <motion.path
        animate={{ fill: isHovered ? "#4285F4" : "var(--foreground)" }}
        fill="currentColor"
        stroke="none"
        d="M3.33963 0.57597L3.41057 0.0810286C3.22083 0.0538323 3.03224 0.137503 2.92507 0.296428L3.33963 0.57597ZM2.44563 1.90174L2.86019 2.18128L3.75418 0.855513L3.33963 0.57597L2.92507 0.296428L2.03108 1.6222L2.44563 1.90174ZM10.1671 1.69766L10.4686 2.09647C10.7392 1.89183 10.9373 1.60995 10.9581 1.25911C10.9781 0.921553 10.8268 0.629158 10.6388 0.406039L10.2564 0.728192L9.87406 1.05034C9.96545 1.15881 9.95941 1.2075 9.95986 1.19995C9.9601 1.19592 9.96176 1.19811 9.95412 1.21059C9.94508 1.22536 9.92126 1.25667 9.86547 1.29885L10.1671 1.69766ZM3.33963 0.57597L3.26868 1.07091L9.08996 1.90529L9.1609 1.41035L9.23184 0.915412L3.41057 0.0810286L3.33963 0.57597ZM9.1609 1.41035L8.83579 1.79022C8.97101 1.90595 9.19767 2.11709 9.44482 2.22661C9.58527 2.28885 9.75608 2.3318 9.94874 2.31167C10.142 2.29147 10.3157 2.21211 10.4686 2.09647L10.1671 1.69766L9.86547 1.29885C9.82843 1.32686 9.82332 1.31933 9.8448 1.31709C9.86564 1.31491 9.8716 1.32195 9.84996 1.31236C9.82348 1.30062 9.78115 1.27525 9.71428 1.22296C9.64549 1.16917 9.5792 1.11024 9.48601 1.03048L9.1609 1.41035ZM10.2564 0.728192L10.6388 0.406039C10.4924 0.232285 10.2871 0.118828 10.0913 0.0584134C9.89169 -0.00318245 9.64932 -0.0260621 9.40959 0.0393618C9.15698 0.108303 8.92014 0.273865 8.77717 0.553269C8.641 0.81938 8.61521 1.13867 8.6663 1.48361L9.1609 1.41035L9.65551 1.3371C9.62302 1.11776 9.65746 1.02819 9.66739 1.00879C9.67052 1.00267 9.66563 1.00606 9.67288 1.00408C9.69302 0.998584 9.73841 0.996043 9.7965 1.01396C9.85841 1.03307 9.88077 1.05831 9.87406 1.05034L10.2564 0.728192Z"
      />
    </motion.svg>
  );
};
