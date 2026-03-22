import React from "react";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-24 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-66.5">
      <div className="flex flex-1 flex-col gap-4">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-4">
          <Link href={ROUTES.SIGN_IN} className="">
          <Image
           src ='/icons/account.svg'
           alt="account"
           width={20}
           height={20}
           className="invert-colors lg:hidden"
          />
            <Button className="small-medium btn-secondary w-full rounded-lg shadow-none cursor-pointer px-4 py-3" asChild>
              <span className="max-lg:hidden  font-extrabold primary-gradient">Log In</span>
            </Button>
          </Link>

          <Link href={ROUTES.SIGN_UP}>
          <Image
           src ='/icons/sign-up.svg'
           alt="account"
           width={20}
           height={20}
           className="invert-colors lg:hidden"
          />
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 w-full px-4 py-3" asChild>
               <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
