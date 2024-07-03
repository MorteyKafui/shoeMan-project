"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary"
    | null
    | undefined;
}

const SubmitButtons = ({ text, variant }: Props) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>
          <Loader2 className="animate-spin size-6 mr-2" />{" "}
          <span>Please wait...</span>
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
};

export default SubmitButtons;
