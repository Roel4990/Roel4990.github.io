"use client";
import Link from "next/link";
import { useSupabaseSession } from "../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../_components/LoginScreen";
import LogoutButton from "../_components/LogoutButton";

const reports = [["structure-overview", "구조 변화 정리 — 전체 리팩토링 여정"], ["risk-logic", "리스크 판단 로직 정리"], ["labels-thresholds", "labels.py / thresholds.py 정리"], ["pytest-guide", "pytest 테스트 스위트 가이드"], ["verification-report", "판정 로직 검증 리포트"]];
export default function V1Reports() {
  const session = useSupabaseSession();
  if (session === undefined) return <LoadingScreen />;
  if (!session) return <LoginScreen />;
  return <><LogoutButton /><main className="reports-index"><Link href="/reports">← 리포트 버전 선택</Link><h1>리포트 v1</h1><p>2026-07-17 2주차 작업 정리</p><ul>{reports.map(([slug, title]) => <li key={slug}><Link href={`/reports/v1/${slug}`}>{title}</Link></li>)}</ul></main></>;
}
