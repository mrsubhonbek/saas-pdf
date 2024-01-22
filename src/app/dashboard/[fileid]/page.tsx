import { notFound, redirect } from "next/navigation";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { db } from "@/db";

import { PdfREader } from "@/components/pdfReader";
import { ChatWrapper } from "@/components/chat/chatWrapper";

type PropsType = {
  params: {
    fileid: string;
  };
};

const FilePage = async ({ params }: PropsType) => {
  const { fileid } = params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return (
    <>
      <div className="flex-1 justify-between flex flex-col h-[calc(100svh-3.5rem)]">
        <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
          <div className="flex-1 xl:flex">
            <div className="px-4 pt-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              <PdfREader url={file.url} />
            </div>
          </div>
          <div className="shrink-0 flex-[0.75] border-t border-neutral-800 lg:w-96 lg:border-l lg:border-t-0">
            <ChatWrapper fileId={fileid} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FilePage;
