"use client";

import { TextEffect } from "./motion-primitives/text-effect";

function About() {
  // Calculate age based on birth date
  const birthDate = new Date(2001, 6, 29); // July 29, 2001
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today <
    new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
  ) {
    age--;
  }

  // Calculate years of experience
  const startDate = new Date(2023, 0, 1); // January 1, 2023
  let yearsOfExperience = today.getFullYear() - startDate.getFullYear();
  if (
    today <
    new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
  ) {
    yearsOfExperience--;
  }

  return (
    <div>
      <TextEffect delay={0.3} preset="fade-in-blur" as="h2">
        About
      </TextEffect>

      <TextEffect as="p" per="line" delay={0.6}>
        {`
          I am a ${age} year old Frontend web developer based in Vienna with ${yearsOfExperience} years of experience 
          `}
      </TextEffect>
    </div>
  );
}

export default About;
