"use client";

import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ContactForm = () => {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  return (
    <div className="mb-96 container">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Me</h1>
      <div className="grid grid-cols-2 md:gap-16 lg:gap-24 items-center">
        <div className="space-y-4">
          <div>
            <Label className="mb-1" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div>
            <Label className="mb-1" htmlFor="email">
              E-Mail
            </Label>
            <Input id="email" placeholder="example@probablygmail.com" />
          </div>
          <div>
            <Label className="mb-1" htmlFor="Subject">
              Subject
            </Label>
            <Input id="Subject" placeholder="What do you want to tell me?" />
          </div>
          <div>
            <Label className="mb-1" htmlFor="message">
              Message
            </Label>
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{
                opacity: isVisible ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <GlowEffect
                colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                mode="colorShift"
                blur="medium"
                duration={4}
              />
            </motion.div>
            <Textarea
              onFocus={() => {
                console.log("Textarea focused");
              }}
              htmlFor="message"
              className="resize-none"
              placeholder="Type away..."
            ></Textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
