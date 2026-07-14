import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리포트 모음",
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
