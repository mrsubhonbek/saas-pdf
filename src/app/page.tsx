import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mb-12 pt-28 sm:pt-40 flex flex-col items-center justify-center text-center">
        <Button
          size={"lg"}
          variant={"secondary"}
          className="rounded-full cursor-default ">
          Quill is now public!
        </Button>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-neutral-500 cursor-default">
          Chat with your <span className="text-white">documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-neutral-400 sm:text-lg cursor-default">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        <Button asChild className="sm:text-lg mt-5">
          <Link href={"/dashboard"} className="gap-1">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Button>

        <div className="mx-auto max-w-6xl ">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-neutral-100/5 p-2 ring-1 ring-inset ring-neutral-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                className="rounded-md bg-black  shadow-2xl ring-1 ring-neutral-100/10"
                alt=""
                src={"/dashboard-preview.jpg"}
                width={1364}
                height={866}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 mb-10 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-neutral-100 sm:text-5xl">
                Start chatting in minutes
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Chatting to your PDF files has never been easier than with
                Quill.
              </p>
            </div>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0  text-left">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-neutral-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-neutral-400 ">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sing up for an account
              </span>
              <span className="mt-2 text-neutral-500">
                Either starting out with a free plan or choose our{" "}
                <Button variant={"link"} className="px-0 text-base">
                  <Link href={"/pricing"} className="text-white ">
                    pro plan
                  </Link>
                </Button>
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-neutral-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-neutral-400 ">
                Step 2
              </span>
              <span className="text-xl font-semibold">Upload you PDF file</span>
              <span className="mt-2 text-neutral-500">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-neutral-700 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-neutral-400 ">
                Step 3
              </span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 text-neutral-500">
                It&apos;s that simple. try out Quill today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-neutral-100/5 p-2 ring-1 ring-inset ring-neutral-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                className="rounded-md bg-black  shadow-2xl ring-1 ring-neutral-100/10"
                alt=""
                src={"/file-upload-preview.jpg"}
                width={1419}
                height={732}
                quality={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
