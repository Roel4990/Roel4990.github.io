"use client";

import Link from "next/link";
import { useSupabaseSession } from "./_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "./_components/LoginScreen";
import LogoutButton from "./_components/LogoutButton";

const versions = [
  {
    href: "/reports/v1",
    title: "리포트 v1",
    desc: "2026-07-17 2주차 작업 정리",
  },
  {
    href: "/reports/v2",
    title: "리포트 v2",
    desc: "2026-07-24 3주차 작업 정리",
  },
];

export default function ReportsIndex() {
  const session = useSupabaseSession();

  if (session === undefined) {
    return <LoadingScreen />;
  }

  if (!session) {
    return <LoginScreen />;
  }

  return (
    <>
      <LogoutButton />
      <main
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif',
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>리포트 모음</h1>
        <p style={{ color: "#666", marginBottom: "32px" }}>AI CCTV 안전 판단 시스템 개발 기록</p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px" }}>
          {versions.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                style={{
                  display: "block",
                  padding: "16px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: "4px" }}>{r.title}</div>
                <div style={{ fontSize: "13px", color: "#777" }}>{r.desc}</div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
