"use client";

import { supabase } from "@/lib/supabase/client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => supabase.auth.signOut()}
      style={{
        position: "fixed",
        top: "12px",
        right: "12px",
        zIndex: 50,
        padding: "6px 12px",
        fontSize: "11.5px",
        fontFamily: "ui-monospace, monospace",
        color: "#5B6368",
        background: "#FFFFFF",
        border: "1px solid rgba(25,29,32,0.22)",
        borderRadius: "999px",
        cursor: "pointer",
      }}
    >
      로그아웃
    </button>
  );
}
