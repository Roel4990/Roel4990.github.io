import type { Metadata } from "next";
import ReportsAuthLayout from "./_components/ReportsAuthLayout";

export const metadata: Metadata = {
  title: "리포트 v2",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <ReportsAuthLayout>{children}</ReportsAuthLayout>;
}
