"use client";

import React from "react";
import SubmitButton from "../SubmitButton";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <motion.div
      className={"   text-center bg-customBlack/75 shadow-xl  rounded-xl"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <p className={"text-gray-300  dark:text-white/80 pt-2 px-2 font-medium "}>
        Please contact us at{" "}
        <a className="underline" href="tel:07722 78898">
          07722 78898
        </a>{" "}
        or through the form below.
      </p>

      <form
        className={"mt-10 flex flex-col dark:text-black px-3 pb-2 gap-5"}
        //onSubmit={handleSubmit} // Use handleSubmit function for form submission
      >
        <div className={"flex space-x-3 justify-between"}>
          <div className={"flex flex-col gap-3 w-full"}>
            <Label className={"flex items-start text-customGrayText"}>
              First Name
            </Label>
            <Input placeholder={"First Name"} required />
          </div>
          <div className={"flex flex-col gap-3 w-full"}>
            <Label className={"flex items-start text-customGrayText"}>
              Last Name
            </Label>
            <Input placeholder={"Last Name"} required />
          </div>
        </div>

        <div className={"flex flex-col gap-3"}>
          <Label className={"flex items-start text-customGrayText"}>
            Email
          </Label>
          <Input placeholder={"Email"} type={"email"} required />
        </div>

        <div className={"flex flex-col gap-3"}>
          <Label className={"flex items-start text-customGrayText"}>
            Your Message
          </Label>
          <Textarea
            placeholder={"Write your message here..."}
            className={"max-h-[9.5rem] h-[9.5rem]"}
            required
          />
        </div>
        {/* Add ReCAPTCHA Component */}
        {/*<ReCAPTCHA
          sitekey={"6Ldbv1wqAAAAAP9ZMxTo3wULO07NWEPx88g2BSu5"} //?????? TO ADD IN THE ENV FILE???????
          onChange={handleRecaptchaChange}
          className="my-4" // Optional: Add some margin for better spacing
        />*/}

        <SubmitButton text={"Send Message"} loadingText={"Sending"} />
      </form>
    </motion.div>
  );
}
