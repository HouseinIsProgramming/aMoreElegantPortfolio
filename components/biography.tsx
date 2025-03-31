import React from "react";
import { TextEffect } from "./motion-primitives/text-effect";
importe

function Biography() {
  return (
    <div>
      <TextEffect
        preset="fade-in-blur"
        as="h1"
        className="text-4xl font-bold mt-10"
      >
        Housein Abo Shaar
      </TextEffect>

      <TextEffect as="h3">Front End Developer</TextEffect>
      <TextEffect
        preset="fade-in-blur"
        as="p"
        className="text-muted-foreground"
      >
        with a burning passion for programming, learning new skills and
        technologies and providing solutions.
      </TextEffect>
    </div>
  );
}

export default Biography;
