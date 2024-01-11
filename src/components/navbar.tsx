import Link from "next/link";
import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import Container from "./ui/container";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-neutral-700 bg-black/75 backdrop-blur-lg transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between border-b border-neutral-700">
          <Link href={"/"} className="flex z-40 font-semibold text-3xl">
            <span>bek.</span>
          </Link>
          {/**
           * add mobile view navbar
           */}

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href={"/pricing"}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}>
              Pricing
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}>
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}>
              Get started
            </RegisterLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};
