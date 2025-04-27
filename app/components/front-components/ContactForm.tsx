"use client";

import React from "react";
import SubmitButton from "../SubmitButton";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { sendEmail } from "@/app/actions/email";
import { toast } from "react-hot-toast";

interface ContactFormProps {
  page: string;
  name?: string;
  id?: string;
}

export default function ContactForm({ page, name, id }: ContactFormProps) {
  return (
    <motion.div className={"text-center bg-greyish  rounded-xl"}>
      <form
        className={"mt-5 flex flex-col dark:text-black px-3 pb-2 gap-5"}
        action={async (formData) => {
          try {
            await sendEmail(formData);
            toast.success(
              "Message sent successfully! We`ll get in touch soon!",
            );
          } catch (error) {
            toast.error("Failed to send message. Please try again...");
            console.log(error);
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
        {id && <input className={"hidden"} defaultValue={id} name="itemId" />}
        {name && (
          <input className={"hidden"} defaultValue={name} name="itemName" />
        )}
        {page && <input className={"hidden"} defaultValue={page} name="page" />}
        <SubmitButton text={"Send Message"} loadingText={"Sending"} />
      </form>

      <p
        className={"text-gray-600 mt-3  dark:text-white/80  px-2 font-medium "}
      >
        Please contact us through the form above or alternatively by phoning{" "}
        <a className="underline" href="tel:07802775111">
          07802775111
        </a>
      </p>
    </motion.div>
  );
}
