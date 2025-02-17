"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  loadingText: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export default function SubmitButton({
  text,
  loadingText,
  variant,
}: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className={"mr-2 h-4 w-4 animate-spin"} />
          {loadingText}...
        </Button>
      ) : (
        <Button type={"submit"} variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}
