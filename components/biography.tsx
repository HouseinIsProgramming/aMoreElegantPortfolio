"use client";

import { TextEffect } from "./motion-primitives/text-effect";
import NavMenu from "./navmenu";
import ContactLinks from "@/components/contact-links";

function Biography() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col justify-between h-full py-4 mt-2">
      <div>
        <TextEffect
          preset="fade-in-blur"
          as="h1"
          className="text-4xl font-bold "
        >
          Housein Abo Shaar
        </TextEffect>

        <TextEffect as="h3">Front End Developer</TextEffect>
        <TextEffect
          preset="fade-in-blur"
          as="p"
          className="text-muted-foreground"
          speedReveal={3}
        >
          Self-taught Web Developer with a life-long passion for coding.
        </TextEffect>
      </div>

      <NavMenu />

      <ContactLinks />
    </div>
  );
}

export default Biography;
