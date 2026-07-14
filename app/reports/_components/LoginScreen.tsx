"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { supabase } from "@/lib/supabase/client";

export function LoadingScreen() {
  return (
    <div style={styles.page}>
      <p style={styles.loading}>확인 중...</p>
    </div>
  );
}

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setSubmitting(false);
  }

  return (
    <div style={styles.page}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h1 style={styles.title}>로그인이 필요합니다</h1>
        <p style={styles.desc}>이 페이지는 비공개 리포트입니다.</p>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
          autoComplete="current-password"
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" disabled={submitting} style={styles.button}>
          {submitting ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F2F4F3",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif',
    padding: "24px",
  },
  loading: {
    color: "#5B6368",
    fontSize: "14px",
  },
  card: {
    width: "100%",
    maxWidth: "320px",
    background: "#FFFFFF",
    border: "1px solid rgba(25,29,32,0.12)",
    borderRadius: "14px",
    padding: "28px 24px",
    boxShadow: "0 1px 2px rgba(20,23,27,0.06), 0 8px 24px rgba(20,23,27,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  title: {
    fontSize: "17px",
    fontWeight: 800,
    margin: 0,
    color: "#191D20",
  },
  desc: {
    fontSize: "13px",
    color: "#5B6368",
    margin: "0 0 8px",
  },
  input: {
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid rgba(25,29,32,0.22)",
    borderRadius: "8px",
    outline: "none",
    color: "#191D20",
    background: "#FFFFFF",
  },
  error: {
    fontSize: "12.5px",
    color: "#C8402A",
    margin: 0,
  },
  button: {
    marginTop: "4px",
    padding: "10px 12px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#FFFFFF",
    background: "#2C6E8C",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
