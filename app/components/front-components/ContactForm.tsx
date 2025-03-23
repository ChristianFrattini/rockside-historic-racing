"use client";

import React from "react";
import SubmitButton from "../SubmitButton";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/app/actions/email";
import { toast } from "react-hot-toast";

interface ContactFormProps {
  name?: string;
  id?: string;
}

export default function ContactForm({ name, id }: ContactFormProps) {
  return (
    <motion.div className={"text-center bg-greyish  rounded-xl"}>
      <form
        className={"mt-5 flex flex-col dark:text-black px-3 pb-2 gap-5"}
        action={async (formData) => {
          try {
            await sendEmail(formData);
            toast.success("Email sent successfully!");
          } catch (error) {
            toast.error("Failed to send email. Please try again.");
          }
        }}
      >
        <div className={"flex space-x-3 justify-between"}>
          <div className={"flex flex-col gap-3 w-full"}>
            <Label className={"flex items-start text-customGrayText"}>
              First Name
            </Label>
            <Input placeholder={"First Name"} required name={"firstName"} />
          </div>
          <div className={"flex flex-col gap-3 w-full"}>
            <Label className={"flex items-start text-customGrayText"}>
              Last Name
            </Label>
            <Input placeholder={"Last Name"} required name={"lastName"} />
          </div>
        </div>

        <div className={"flex flex-col gap-3"}>
          <Label className={"flex items-start text-customGrayText"}>
            Email
          </Label>
          <Input placeholder={"Email"} type={"email"} required name={"email"} />
        </div>

        <div className={"flex flex-col gap-3"}>
          <Label className={"flex items-start text-customGrayText"}>
            Telephone
          </Label>
          <Input
            placeholder={"Phone Number"}
            type={"tel"}
            required
            name={"tel"}
          />
        </div>

        <div className={"flex flex-col gap-3"}>
          <Label className={"flex items-start text-customGrayText"}>
            Your Message
          </Label>
          <Textarea
            placeholder={"Write your message here..."}
            className={"max-h-[9.5rem] h-[9.5rem]"}
            required
            name={"message"}
          />
        </div>
        {id && <input className={"hidden"} defaultValue={id} name="carId" />}
        {name && (
          <input className={"hidden"} defaultValue={name} name="carName" />
        )}
        <SubmitButton text={"Send Message"} loadingText={"Sending"} />
      </form>

      <p
        className={"text-gray-600 mt-3  dark:text-white/80  px-2 font-medium "}
      >
        Please contact us through the form above or alternatively by phoning{" "}
        <a className="underline" href="tel:07722 78898">
          07722 78898
        </a>
      </p>
    </motion.div>
  );
}
