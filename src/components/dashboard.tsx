import React from "react";
import { UploadButton } from "./uploadButton";

export const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-b border-neutral-700 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-neutral-100">My Files</h1>

        <UploadButton />
      </div>
    </main>
  );
};
