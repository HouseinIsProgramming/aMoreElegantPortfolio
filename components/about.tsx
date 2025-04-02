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

  // const currentOrdinal = (number: number) => {
  //   if (number % 100 >= 11 && number % 100 <= 13) {
  //     return "th";
  //   }

  //   switch (number % 10) {
  //     case 1:
  //       return "st";
  //     case 2:
  //       return "nd";
  //     case 3:
  //       return "rd";
  //     default:
  //       return "th";
  //   }
  // };

  // const yearSuffix = currentOrdinal(yearsOfExperience);
  // const thisYearSuffix = currentOrdinal(yearsOfExperience + 1);

  return (
    <div id="about" className="mt-13 scroll-m-12">
      <TextEffect delay={0.3} preset="fade-in-blur" as="h2">
        About
      </TextEffect>

      <TextEffect as="p" per="line" delay={0.6}>
        {`
          I am ${age} years old and have been coding for as long as I can remember.
          Everything I know about coding is self taught, and I am always looking to learn more.
          My passion for tinkering with code, creating solutions and delivering them in an intuitive way led me to pursue my career as a programmer.
           Which is why I am happy to say that I currently have ${yearsOfExperience} years as professional developer behind me and I am looking forward to what's ahead.

          `}
      </TextEffect>
    </div>
  );
}

export default About;
