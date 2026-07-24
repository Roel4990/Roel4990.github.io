import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "구조 변화 정리 — 전체 리팩토링 여정",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
