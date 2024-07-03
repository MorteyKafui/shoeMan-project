"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitButtons = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>
          <Loader2 className="animate-spin size-6 mr-2" />{" "}
          <span>Please wait...</span>
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
};

export default SubmitButtons;
