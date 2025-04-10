"use client";

import React from "react";
import { MorphingBentocard } from "./morphing-bentocard";

export const BentoBoxes = () => {
  return (
    <section className="container mb-96 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
      <MorphingBentocard data={projectsData.before2020} />
      <MorphingBentocard data={projectsData.typemotion} />
      <MorphingBentocard data={projectsData.interests} />
      <MorphingBentocard data={projectsData.pixeldoodle} />
    </section>
  );
};

const projectsData = {
  pixeldoodle: {
    id: "pixeldoodle",
    span: 2,
    title: ["PixelDoodle"],
    tag: "Web Application",
    subtitle:
      "Turn your hand written notes into images with transparent background.",
    hoverText:
      "Find out more about me and what I went through before starting out as a developer.",
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Why I made this:",
        paragraphs: [
          "There is something about having a pen in my hand that makes able to think clearer, when I write something down I am a lot more likely to be able to understand it better remember it longer.",
          "Spaced repeatition has been proven time and time again to be one of the effective methods of learning something new.",
        ],
      },
      {
        heading: "The Problem:",
        paragraphs: ["finding hand written notes is just innefficent..."],
      },
      {
        heading: "The Solution:",
        paragraphs: [
          "And this is why PixelDoodle was made, I can just write something down, take a picture of it, then using PixelDoolde, remove the background and be left with was written down. and it can handle multiple images aswell.",
          "now these pictures can be used within Notion/Obsidian (with dark and light modes support) and be able to use the sorting and searching functions within those programs, which are undoublty better that looking through hand written notes.",
        ],
      },
    ],
  },
  typemotion: {
    id: "TypeMotion",
    title: ["TypeMotion"],
    tag: "Web Application",
    subtitle: "Easy text animation prototyping",
    hoverText:
      "Find out more about me and what I went through before starting.",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Why I made this:",
        paragraphs: [
          "Creating engaging text animations often requires complex tools or libraries. TypeMotion aims to simplify this for common use cases.",
        ],
      },
      {
        heading: "Key Features:",
        paragraphs: [
          "Real-time preview, various animation presets, easy export options.",
        ],
      },
    ],
  },

  before2020: {
    id: "before2020",
    span: 2,
    title: ["What happened", "before 2020?"],
    tag: "About me",
    subtitle: "and where are is your education?",
    hoverText: "Find out more about my story, and how I ended up in austria",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Where was I before 2020:",
        paragraphs: [
          "Before coming to austria for the second time, I was living in Cyprus and was in the process of getting my high school diploma. Due to the lockdowns and a legal obligation that requires me to not be outside of Austria for extended peroids of time. I had to drop out.",
        ],
      },
      {
        heading: "Second time?",
        paragraphs: [
          `If my name didn't give that out already, I am not from Austria, actually I come from Syria.  
          In 2018 I fled to Austria as a refugee since I was being pressured to attend my mandatory military service at 16, which probably wouldn't have turned out so well.`,
        ],
      },
      {
        heading: "What about your education?",
        paragraphs: [
          `And after going through the approval process, which took around a year of waiting around, I tried attending school, which only made me realise that there is no way that I will be done in reasonable time frame. I was pushed back 2 years and still learn the language, so I would have had about 4 years when I actually was only missing 1.`,
          `So I decided to go to Cyprus and try to finish my school there, since I attended international schools my entire life, english was not a problem. which sadly also didn't turn out well like I mentioned already.`,
        ],
      },
      {
        heading: "Does it suck?",
        paragraphs: [
          `Oh yes it does, I was the top student for pretty much the whole time that I was in school, and I have nothing to show for it.  
          But I am not the only one who went through this, and it taught me a lot in the process.`,
          `I am just glad that I am provided good living conditions and the opportunity to purse my passions.  
          My glass will always be half full (the other half is also full, just with air).`,
        ],
      },
    ],
  },

  interests: {
    id: "interests",
    title: ["What happened", "before 2020?"],
    tag: "About me",
    subtitle: "How did I end up here?",
    hoverText: "Find out how programming has changed my life.",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Why I made this:",
        paragraphs: [
          "Creating **engaging** text animations often requires complex tools or libraries. TypeMotion aims to simplify this for common use cases.",
        ],
      },
      {
        heading: "Key Features:",
        paragraphs: [
          "Real-time preview, various animation presets, easy export options.",
        ],
      },
    ],
  },
};
