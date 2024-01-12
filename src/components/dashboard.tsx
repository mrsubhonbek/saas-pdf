"use client";
import React from "react";
import { UploadButton } from "./uploadButton";
import { trpc } from "@/app/_trpc/client";
import { Ghost } from "lucide-react";

export const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-b border-neutral-700 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-neutral-100">My Files</h1>

        <UploadButton />
      </div>

      {files && files.length !== 0 ? (
        <div>1</div>
      ) : isLoading ? (
        <div>2</div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-neutral-200" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let's upload your first PDF</p>
        </div>
      )}
    </main>
  );
};
