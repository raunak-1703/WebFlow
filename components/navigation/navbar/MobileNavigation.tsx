import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger >
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent className="background-light900_dark200 border-none p-4" side='left'>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation links and authentication actions.
          </SheetDescription>
          <Link href='/' className="flex items-center gap-1">
          <Image src ='/images/site-logo.svg' width={23} height={23} alt="Logo"/>
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">Web<span className="text-primary-500">Flow</span></p>
          </Link>

          <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto pt-16">
            <section className="flex flex-col gap-6">
              <NavLinks isMobileNav />
            </section>
          </div>

          <div className="flex shrink-0 flex-col gap-3">
            <SheetClose asChild>
                <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary  w-full rounded-lg shadow-none cursor-pointer px-4 py-3">
                    <span className="primary-text-gradient font-bold">Log In</span>
                </Button>
                </Link>
            </SheetClose>

            <SheetClose asChild>
                <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 w-full px-4 py-3">
                    Sign Up
                </Button>
                </Link>
            </SheetClose>
          </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
