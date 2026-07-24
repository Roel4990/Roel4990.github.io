"use client";

import { useSupabaseSession } from "../../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../../_components/LoginScreen";
import LogoutButton from "../../_components/LogoutButton";

export default function ReportsAuthLayout({ children }: { children: React.ReactNode }) {
  const session = useSupabaseSession();

  if (session === undefined) return <LoadingScreen />;
  if (!session) return <LoginScreen />;

  return <><LogoutButton />{children}</>;
}
