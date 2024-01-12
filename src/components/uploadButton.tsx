"use client";

import { useState } from "react";
import Dropzone from "react-dropzone";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Cloud, File, Loader2 } from "lucide-react";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "./ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

export const UploadButton = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  const { startUpload } = useUploadThing("imageUploader");

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(visible) => {
        if (!visible) setIsOpen(visible);
      }}>
      <DialogTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <Dropzone
          multiple={false}
          onDrop={async (acceptedFile) => {
            setIsUploading(true);
            const progressInterval = startSimulatedProgress();

            const res = await startUpload(acceptedFile);

            if (!res) {
              return toast({
                title: "Something went wrong",
                description: "Please try again later",
                variant: "destructive",
              });
            }

            // await new Promise((res) => setTimeout(res, 100000));
            const [fileResponse] = res;

            const key = fileResponse?.key;

            if (!key) {
              return toast({
                title: "Something went wrong",
                description: "Please try again later",
                variant: "destructive",
              });
            }

            clearInterval(progressInterval);
            setUploadProgress(100);

            startPolling({ key });
          }}>
          {({ getRootProps, getInputProps, acceptedFiles }) => (
            <div
              {...getRootProps()}
              className="border h-64 m-4 border-dashed border-neutral-700 rounded-lg">
              <div className="flex items-center justify-center h-full w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-neutral-950 hover:bg-neutral-900">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Cloud className="h-6 w-6 text-neutral-500 mb-2" />
                    <p className="mb-2 text-sm text-neutral-300">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-neutral-500">PDF (up to 4MB)</p>
                  </div>

                  {acceptedFiles && acceptedFiles[0] ? (
                    <div className="max-w-xs bg-black flex items-center rounded-md overflow-hidden outline outline-[1px] outline-neutral-800 divide-x divide-neutral-800">
                      <div className="px-3 py-2 h-full grid place-items-center">
                        <File className="h-4 w-4 text-neutral-300" />
                      </div>
                      <div className="px-3 py-2 h-full text-sm truncate">
                        {acceptedFiles[0].name}
                      </div>
                    </div>
                  ) : null}

                  {isUploading ? (
                    <div className="w-full mt-4 max-w-xs mx-auto">
                      <Progress
                        indicatorColor={
                          uploadProgress === 100 ? "bg-neutral-500" : ""
                        }
                        value={uploadProgress}
                        className="h-1 w-full bg-neutral-800"
                      />
                      {uploadProgress === 100 ? (
                        <div className="flex gap-1 items-center justify-center text-sm text-neutral-300 text-center pt-2">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          Redirecting...
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <input
                    {...getInputProps()}
                    type="file"
                    id="dropzone-file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </Dropzone>
      </DialogContent>
    </Dialog>
  );
};
