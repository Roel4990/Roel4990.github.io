import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pytest 테스트 스위트 가이드",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
