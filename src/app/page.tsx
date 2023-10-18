import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="mb-12 pt-28 sm:pt-40 flex flex-col items-center justify-center text-center">
      <Button size={"lg"} className="rounded-full cursor-default">
        Quill is now public!
      </Button>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-neutral-500 cursor-default">
        Chat with your <span className="text-white">documents</span> in seconds.
      </h1>
      <p className="mt-5 max-w-prose text-neutral-400 sm:text-lg cursor-default">
        Quill allows you to have conversations with any PDF document. Simply
        upload your file and start asking questions right away.
      </p>
      <Button variant={"link"} className="sm:text-lg">
        <Link href={"/dashboard"} target="_blank">
          Get started
        </Link>
      </Button>
    </Container>
  );
}
