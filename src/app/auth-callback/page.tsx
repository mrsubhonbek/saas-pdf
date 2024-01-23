"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";

const AuthCallBackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const { isSuccess, isError } = trpc.authCallback.useQuery();

  if (isSuccess) {
    router.push(origin ? `/${origin}` : "/dashboard");
  } else if (isError) {
    router.push("sing-in");
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2 text-white">
        <h3>Setting up your account...</h3>
      </div>
    </div>
  );
};
export default AuthCallBackPage;
