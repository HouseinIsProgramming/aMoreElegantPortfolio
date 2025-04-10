"use client";

import React from "react";
import { MorphingBentocard } from "./morphing-bentocard";

export const BentoBoxes = () => {
  return (
    <section className="container mb-96 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
      <MorphingBentocard data={projectsData.before2020} />
      <MorphingBentocard data={projectsData.interests} />
      <MorphingBentocard data={projectsData.backend} />
      <MorphingBentocard data={projectsData.frontend} />
      <MorphingBentocard data={projectsData.startout} />
      <MorphingBentocard data={projectsData.pixeldoodle} />
      <MorphingBentocard data={projectsData.typemotion} />
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
      "Turn your hand written notes into images with transparent backgrounds.",
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
    subtitle: "and where is your education?",
    hoverText: "Find out more about my story, and how I ended up in austria",
    link1Href: "#",
    link2Href: "#",
    details: [
      {
        heading: "Where was I before 2020:",
        paragraphs: [
          "Before coming to Austria for the second time, I was living in Cyprus and was in the process of getting my high school diploma. Due to the lockdowns and a legal obligation that required me not to stay outside of Austria for extended periods of time, I had to drop out.",
        ],
      },
      {
        heading: "Second time?",
        paragraphs: [
          `If my name didn't give that away already, I am not from Austria — I actually come from Syria.  
      In 2018, I fled to Austria as a refugee since I was being pressured to attend my mandatory military service at 16, which _probably_ wouldn't have turned out so well.`,
        ],
      },
      {
        heading: "What about your education?",
        paragraphs: [
          `After going through the approval process, which took around a year of waiting around, I tried attending school — which only made me realize that there was no way I’d be done in a reasonable timeframe. I was pushed back two years and still had to learn the language, so I would have needed about **4 years**, even though I was actually only missing one.`,
          `So I decided to go to Cyprus and try to finish school there. Since I attended international schools my entire life, English was not a problem — but unfortunately, that didn’t turn out well either, as I mentioned earlier.`,
        ],
      },
      {
        heading: "Does it suck?",
        paragraphs: [
          `Oh yes, it does. I was the top student for pretty much the whole time I was in school — and I have *nothing* to show for it.  
      But I am not the only one who went through this, and it taught me a lot in the process.`,
          `I’m just glad that I’m provided with good living conditions and the opportunity to pursue my passions.  
      My glass will always be half full — *the other half is also full, just with air*.`,
        ],
      },
    ],
  },

  startout: {
    id: "startout",
    span: 1,
    title: ["My First Program"],
    tag: "Where it all began",
    subtitle: "Command Line Calculator-TRON",
    hoverText: "How a bad practice was the best mistakes that I ever made.",
    link1Href: "#",
    link2Href: "#",
    details: [
      {
        heading: `How did I start out?`,
        paragraphs: [
          `My idea of programming before I started to code was being able to understand what "01110110 01101001 01101101 00100001" meant, so I decided to look up how it worked and wanted to make a program to turn anything I send it into binary.  
          so I picked Python, because everyone said it is either JavaScript or Python and Python had an objectively cooler name.  
          I downloaded PyCharm and just started googling everything, and figuring out how things worked. `,
        ],
      },
      {
        heading: "Is it ever done?",
        paragraphs: [
          `After finally figuring out how it works, how I can run a python program, do basic math operations, assigning variables and passing arguments. The program was done. You could enter any "String" and it would return it in binary. However, it was too simple, too easy, it couldn't have been it. So I started adding features to it. `,
        ],
      },
      {
        heading: "What else could I add?",
        paragraphs: [
          `Naturally, if it could turn anything into binary, it should be able to do it backwards, then copy it into your clipboard automatically, because why else would you want to look at 1s and 0s. But just binary? it should also be a normal calcuator, and then turn celsius into fahrenheit and vice versa, how about a password generator? Yes, it ended up with that much. A huge monolith of code that had a page long "switch case" to handle all the possible options that a user could choose.`,
        ],
      },
      {
        heading: "Too much for comfort",
        paragraphs: [
          `The common practice of modularizing code is for good reason. But I didn't know that, so my main.py file was THE .py file, and simply running the program took couple of attempts to figure out which argument I had to pass to make it run. So I started looking up solutions to make it easier, and came across Bash.`,
        ],
      },
    ],
  },

  interests: {
    id: "interests",
    title: ["Hobbies and", "interests"],
    tag: "Everything else I do",
    // subtitle: "How did I end up here?",
    hoverText: "Working out, Reading, being outdoors and more.",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        // heading: "Why I made this:",
        paragraphs: [
          "I start _almost_ everyday with an hour dedicated to learning something, whether it is programming, reading a book or anything that I find interesting, I find that this sets me up for a good day and I don't have to worry about conserving energy for it, in contrast to if I did the same but at the end of the day.",
        ],
      },
      {
        heading: "The Gym",
        paragraphs: [
          `Right after my hour of learning — and a **self-made coffee**  and breakfast — comes undoubtedly my favorite time of the day: the gym. It's the one place that, no matter what’s going on in my life, has never disappointed me and has always had my back. After that, it’s off to work. `,
        ],
      },
      {
        heading: "Reading",
        paragraphs: [
          `Reading is a hobby I picked up during the lockdowns, and I’m glad I did. I used to scoff at people who said physical books aren’t the same as reading an e-book or something on your phone — until I actually tried it.
          I mostly enjoy philosophy, self-help, science fiction, and the occasional novel or biography.`,
        ],
      },
      {
        paragraphs: [
          `Other than that, I _try_ to spend as much time outdoors as I can. I enjoy taking long walks, letting my mind wander, or listening to an audiobook.   
          I also really enjoy cooking, tinkering with code or my Neovim configuration (_if you know, you know_), or just spending time with friends.`,
        ],
      },
    ],
  },

  frontend: {
    id: "frontend",
    span: 2,
    title: ["Frontend &", "Design"],
    subtitle:
      "My techstack, experience and tools I use to build websites and applications.",
    tag: "UI, UX & Design",
    hoverText:
      "A quick overview of my tech experience and what I am proficient in.",
    details: [
      {
        heading: "Languages & Frameworks",
        paragraphs: [
          `Of course, as a Web Developer I know the ins and outs of HTML and how to implement Javascript into websites for interactivity.`,
          `I’ve worked with common modern frameworks such as React, Svelte and Vue.js and am familiar with concepts such as state mangement, routing, lifecycles. And well versed on good practices to build reuseable and maintainable components and modules.`,
          `When working in a team, I have also learned to appreciate the benefits of embracing the idomatic approach of writing each language to ensure that my contribution to maintains the level of cooperation in the team and maintains scalability of the software.`,
        ],
      },
      {
        heading: "Styling & UI",
        paragraphs: [
          `Although it seems as if no one was about to *decipher* CSS yet, I have gotten pretty good at it. And when it comes to TailwindCSS, I can *confidently* say that I know the ins and outs of it. Not only do I know the utility classes by heart, but also how to configure it on each project according to its needs, handle the compiler, and integrate it with frameworks and libraries.`,
          `I've also worked with animation libraries (like Framer Motion) and E2E testing with Playwright.`,
        ],
      },
      {
        heading: "Visual Tools",
        paragraphs: [
          `For design work, I’m comfortable using Adobe Photoshop, Illustrator, and Affinity Designer — whether for wireframes, banners, or polishing UI visuals.`,
        ],
      },
    ],
  },

  backend: {
    id: "backend",
    title: ["Backend &", "Software"],
    tag: "Automation, logic, infrastructure",
    hoverText: "Everything behind the scenes.",
    details: [
      {
        heading: "Core Technologies",
        paragraphs: [
          `I’ve worked with PHP (CMS systems like TYPO3 and NeosCMS), Node.js, and Python for scripting and backend logic.`,
          `MySQL is the database I’ve used the most, including for generating reports and automating large-scale mailings.`,
        ],
      },
      {
        heading: "System Tools",
        paragraphs: [
          `I use Git for version control and am comfortable with advanced workflows (rebasing, resolving conflicts, etc.).`,
          `I also write Shell Scripts and use Lua for Neovim and small tooling tweaks.`,
        ],
      },
      {
        heading: "Workflows & Testing",
        paragraphs: [
          `I’ve used Jest for unit testing and Playwright for E2E testing, and I’m familiar with Docker-based workflows.`,
          `My work often includes optimizing legacy code, debugging performance issues, and improving development tooling.`,
        ],
      },
    ],
  },
};
