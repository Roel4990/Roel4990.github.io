import type { Metadata } from "next";
import ReportsAuthLayout from "../v2/_components/ReportsAuthLayout";
export const metadata: Metadata = { title: "리포트 v3" };
export default function V3Layout({ children }: { children: React.ReactNode }) { return <ReportsAuthLayout>{children}</ReportsAuthLayout>; }
