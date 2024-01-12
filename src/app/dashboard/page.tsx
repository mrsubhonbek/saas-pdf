import React from "react";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs//server";
import { Container } from "@/components/ui/container";
import { redirect } from "next/navigation";
import { Dashboard } from "@/components/dashboard";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  return (
    <Container>
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
