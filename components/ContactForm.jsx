"use client";

import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { GlowEffect } from "./motion-primitives/glow-effect";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  return (
    <div className="mb-96 container">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Me</h1>
      <div className="grid px-2 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
        <div className="space-y-6">
          <div className="relative">
            <Label className="mb-3" htmlFor="name">
              Name
            </Label>

            {/* GlowEffect Layer */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-10"
              animate={{ opacity: isNameFocused ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <GlowEffect
                colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                mode="colorShift"
                blur="medium"
                duration={1}
                className="opacity-50 mt-6 mb-1 h-2/3"
              />
            </motion.div>

            {/* Input with styled wrapper */}
            <div className="relative z-20 rounded-md border border-zinc-300/40 bg-white dark:border-zinc-700/40 dark:bg-zinc-900">
              <Input
                id="name"
                placeholder="John Doe"
                className="bg-transparent focus:outline-none w-full"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
            </div>
          </div>

          <div>
            <Label className="mb-3" htmlFor="email">
              E-Mail
            </Label>
            <Input id="email" placeholder="example@probablygmail.com" />
          </div>

          <div>
            <Label className="mb-3" htmlFor="Subject">
              Subject
            </Label>
            <Input id="Subject" placeholder="What do you want to tell me?" />
          </div>

          <div className="relative">
            <Label className="mb-3" htmlFor="message">
              Message
            </Label>

            {/* GlowEffect Layer */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-10"
              animate={{ opacity: isTextAreaFocused ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <GlowEffect
                colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                mode="colorShift"
                blur="medium"
                duration={1}
                className="mt-6 h-4/5 opacity-50"
              />
            </motion.div>

            {/* Textarea with styled wrapper */}
            <div className="relative z-20 rounded-md border border-zinc-300/40 bg-white dark:border-zinc-700/40 dark:bg-zinc-900">
              <Textarea
                id="message"
                placeholder="Type away..."
                className="resize-none bg-transparent focus:outline-none w-full"
                onFocus={() => setIsTextAreaFocused(true)}
                onBlur={() => setIsTextAreaFocused(false)}
              />
            </div>
          </div>
        </div>
        {/* TODO: make the height full but according to the grid and without margins */}
        <Card className="h-full p-4 my-12"></Card>
      </div>
    </div>
  );
};

export default ContactForm;
