"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {

  const handleSignIn = async (provider: "github" | "google") => {
    try {
        await signIn(provider,{
            callbackUrl : ROUTES.HOME,
        }
        )
    } catch (error) {
      console.log(error);
      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
      });
    }
  };

  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3 cursor-pointer hover:bg-dark300_light800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
      <Button onClick={() => handleSignIn("github")} className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
