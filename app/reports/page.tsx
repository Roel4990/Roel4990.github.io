"use client";

import Link from "next/link";
import { useSupabaseSession } from "./_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "./_components/LoginScreen";
import LogoutButton from "./_components/LogoutButton";

const reports = [
  {
    href: "/reports/structure-overview",
    title: "구조 변화 정리 — 전체 리팩토링 여정",
    desc: "모놀리식 두 파일에서 계층이 있는 판단 파이프라인으로, 14개 PR을 거친 전체 요약",
  },
  {
    href: "/reports/risk-logic",
    title: "리스크 판단 로직 정리",
    desc: "중복 채점 버그 정리 & Level 1~5 공식 기준표 반영",
  },
  {
    href: "/reports/labels-thresholds",
    title: "labels.py / thresholds.py 정리",
    desc: "흩어져 있던 라벨·상수를 한 곳에 모은 기록",
  },
  {
    href: "/reports/pytest-guide",
    title: "pytest 테스트 스위트 가이드",
    desc: "리팩토링해도 로직이 그대로인지 자동으로 검증하는 방법",
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
          {reports.map((r) => (
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
