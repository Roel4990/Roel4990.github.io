"use client";

import { useSupabaseSession } from "../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../_components/LoginScreen";
import LogoutButton from "../_components/LogoutButton";

export default function RiskLogicReport() {
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
      <style>{`
        :root {
          --bg: #F2F4F3;
          --bg-soft: #E7EBE9;
          --surface: #FFFFFF;
          --text: #191D20;
          --text-dim: #5B6368;
          --border: rgba(25,29,32,0.12);
          --border-strong: rgba(25,29,32,0.22);
          --accent: #2C6E8C;
          --accent-strong: #1F5670;
          --accent-soft: rgba(44,110,140,0.10);
          --critical: #C8402A;
          --critical-soft: rgba(200,64,42,0.12);
          --warning: #C97A1E;
          --warning-soft: rgba(201,122,30,0.13);
          --caution: #93791C;
          --caution-soft: rgba(147,121,28,0.14);
          --normal: #2F7D5A;
          --normal-soft: rgba(47,125,90,0.12);
          --shadow: 0 1px 2px rgba(20,23,27,0.06), 0 8px 24px rgba(20,23,27,0.05);
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #15181C;
            --bg-soft: #1C2025;
            --surface: #1E2227;
            --text: #E7EAEC;
            --text-dim: #98A1A6;
            --border: rgba(231,234,236,0.12);
            --border-strong: rgba(231,234,236,0.22);
            --accent: #6BA8C7;
            --accent-strong: #8FC0DC;
            --accent-soft: rgba(107,168,199,0.14);
            --critical: #E36A50;
            --critical-soft: rgba(227,106,80,0.16);
            --warning: #E5A653;
            --warning-soft: rgba(229,166,83,0.16);
            --caution: #D0B44A;
            --caution-soft: rgba(208,180,74,0.16);
            --normal: #5DB98E;
            --normal-soft: rgba(93,185,142,0.16);
            --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.28);
          }
        }
        :root[data-theme="light"] {
          --bg: #F2F4F3; --bg-soft: #E7EBE9; --surface: #FFFFFF; --text: #191D20; --text-dim: #5B6368;
          --border: rgba(25,29,32,0.12); --border-strong: rgba(25,29,32,0.22);
          --accent: #2C6E8C; --accent-strong: #1F5670; --accent-soft: rgba(44,110,140,0.10);
          --critical: #C8402A; --critical-soft: rgba(200,64,42,0.12);
          --warning: #C97A1E; --warning-soft: rgba(201,122,30,0.13);
          --caution: #93791C; --caution-soft: rgba(147,121,28,0.14);
          --normal: #2F7D5A; --normal-soft: rgba(47,125,90,0.12);
          --shadow: 0 1px 2px rgba(20,23,27,0.06), 0 8px 24px rgba(20,23,27,0.05);
        }
        :root[data-theme="dark"] {
          --bg: #15181C; --bg-soft: #1C2025; --surface: #1E2227; --text: #E7EAEC; --text-dim: #98A1A6;
          --border: rgba(231,234,236,0.12); --border-strong: rgba(231,234,236,0.22);
          --accent: #6BA8C7; --accent-strong: #8FC0DC; --accent-soft: rgba(107,168,199,0.14);
          --critical: #E36A50; --critical-soft: rgba(227,106,80,0.16);
          --warning: #E5A653; --warning-soft: rgba(229,166,83,0.16);
          --caution: #D0B44A; --caution-soft: rgba(208,180,74,0.16);
          --normal: #5DB98E; --normal-soft: rgba(93,185,142,0.16);
          --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.28);
        }

        .rpt-risk * { box-sizing: border-box; }
        .rpt-risk { -webkit-text-size-adjust: 100%; }
        .rpt-risk {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable",
            "Malgun Gothic", "Segoe UI", sans-serif;
          line-height: 1.65;
          letter-spacing: -0.01em;
        }
        .rpt-risk .mono {
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace;
          font-feature-settings: "tnum" 1;
          font-variant-numeric: tabular-nums;
        }

        .rpt-risk a { color: var(--accent-strong); }

        .rpt-risk .topbar {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          padding: 10px 24px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .rpt-risk .topbar__title { font-size: 13px; font-weight: 700; letter-spacing: -0.01em; }
        .rpt-risk .topbar__tags { display: flex; gap: 6px; }
        .rpt-risk .tag {
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          font-size: 11px; padding: 3px 8px; border-radius: 5px;
          border: 1px solid var(--border-strong); color: var(--text-dim);
          white-space: nowrap;
        }

        .rpt-risk main { max-width: 880px; margin: 0 auto; padding: 56px 24px 96px; }

        .rpt-risk .eyebrow {
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent-strong); margin: 0 0 10px;
        }
        .rpt-risk h1 {
          font-size: clamp(28px, 4vw, 38px); font-weight: 800; margin: 0 0 12px;
          letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2;
        }
        .rpt-risk .lede { font-size: 16.5px; color: var(--text-dim); max-width: 62ch; margin: 0; }

        .rpt-risk .stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 12px; overflow: hidden; margin-top: 32px;
        }
        .rpt-risk .stat { background: var(--surface); padding: 16px 18px; }
        .rpt-risk .stat__value { font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
        .rpt-risk .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

        .rpt-risk section { margin-top: 64px; }
        .rpt-risk .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
        .rpt-risk .section__num {
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          font-size: 13px; color: var(--accent-strong); font-weight: 700;
        }
        .rpt-risk h2 { font-size: 21px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
        .rpt-risk .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 64ch; margin: 10px 0 24px; }

        .rpt-risk .table-wrap {
          overflow-x: auto; border: 1px solid var(--border); border-radius: 12px;
          box-shadow: var(--shadow); background: var(--surface);
        }
        .rpt-risk table { border-collapse: collapse; width: 100%; min-width: 640px; font-size: 13.5px; }
        .rpt-risk th, .rpt-risk td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
        .rpt-risk thead th {
          font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim);
          background: var(--bg-soft); font-weight: 700; white-space: nowrap;
        }
        .rpt-risk tbody tr:last-child td { border-bottom: none; }
        .rpt-risk tbody tr:hover { background: var(--accent-soft); }
        .rpt-risk td.num { font-family: ui-monospace, monospace; font-variant-numeric: tabular-nums; text-align: right; }
        .rpt-risk .col-idx { color: var(--text-dim); font-family: ui-monospace, monospace; font-size: 12px; }
        .rpt-risk .cite { color: var(--text-dim); font-size: 12.5px; }

        .rpt-risk .pill {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.03em;
          padding: 3px 9px; border-radius: 999px; white-space: nowrap;
        }
        .rpt-risk .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .rpt-risk .pill--critical { background: var(--critical-soft); color: var(--critical); }
        .rpt-risk .pill--warning  { background: var(--warning-soft); color: var(--warning); }
        .rpt-risk .pill--caution  { background: var(--caution-soft); color: var(--caution); }
        .rpt-risk .pill--normal   { background: var(--normal-soft); color: var(--normal); }
        .rpt-risk .pill--fixed    { background: var(--normal-soft); color: var(--normal); }
        .rpt-risk .pill--verified { background: var(--accent-soft); color: var(--accent-strong); }

        .rpt-risk .ruler { margin: 6px 0 28px; }
        .rpt-risk .ruler__track {
          position: relative; height: 10px; border-radius: 999px; margin: 34px 4px 30px;
          background: linear-gradient(to right,
            var(--normal) 0%, var(--normal) 20%,
            var(--caution) 40%, var(--warning) 62%,
            var(--critical) 85%, var(--critical) 100%);
          opacity: 0.9;
        }
        .rpt-risk .ruler__tick { position: absolute; top: -22px; transform: translateX(-50%); text-align: center; }
        .rpt-risk .ruler__tick .dot {
          width: 10px; height: 10px; border-radius: 50%; background: var(--surface);
          border: 2px solid var(--text); margin: 24px auto 0;
        }
        .rpt-risk .ruler__tick .lbl {
          font-family: ui-monospace, monospace; font-size: 11px; white-space: nowrap; color: var(--text-dim);
        }
        .rpt-risk .ruler__tick .val {
          font-family: ui-monospace, monospace; font-size: 12px; font-weight: 700; color: var(--text);
        }
        .rpt-risk .ruler__legend { display: flex; gap: 18px; font-size: 12px; color: var(--text-dim); margin-top: 4px; flex-wrap: wrap; }
        .rpt-risk .ruler__legend span { display: inline-flex; align-items: center; gap: 6px; }
        .rpt-risk .ruler__legend i { width: 8px; height: 8px; border-radius: 2px; background: var(--text-dim); display: inline-block; }

        .rpt-risk .barchart { display: grid; gap: 10px; margin-top: 4px; }
        .rpt-risk .bar-row { display: grid; grid-template-columns: 150px 1fr 40px; align-items: center; gap: 10px; }
        .rpt-risk .bar-row .name { font-size: 13px; color: var(--text-dim); }
        .rpt-risk .bar-row .track { height: 10px; border-radius: 6px; background: var(--bg-soft); overflow: hidden; }
        .rpt-risk .bar-row .fill { height: 100%; border-radius: 6px; }
        .rpt-risk .bar-row .score { font-family: ui-monospace, monospace; font-size: 13px; text-align: right; font-weight: 700; }

        .rpt-risk .note {
          border: 1px solid var(--border-strong); border-left: 3px solid var(--accent);
          background: var(--accent-soft); border-radius: 8px;
          padding: 12px 16px; font-size: 13.5px; color: var(--text); margin-top: 18px;
        }
        .rpt-risk .note strong { color: var(--accent-strong); }

        .rpt-risk .callout {
          border: 1px dashed var(--border-strong); border-radius: 12px;
          padding: 18px 20px; background: var(--bg-soft); color: var(--text-dim); font-size: 14px;
        }
        .rpt-risk .callout strong { color: var(--text); }

        .rpt-risk .matrix {
          display: grid; grid-template-columns: 140px repeat(2, 1fr); gap: 8px; margin-top: 8px;
        }
        .rpt-risk .matrix .hcell, .rpt-risk .matrix .vcell {
          font-size: 12px; color: var(--text-dim); display: flex; align-items: center;
          padding: 6px 4px;
        }
        .rpt-risk .matrix .hcell { justify-content: center; text-align: center; font-weight: 700; }
        .rpt-risk .matrix .vcell { font-weight: 700; }
        .rpt-risk .matrix .cell {
          border-radius: 10px; padding: 16px; min-height: 74px;
          display: flex; flex-direction: column; justify-content: center; gap: 6px;
          border: 1px solid var(--border);
        }
        .rpt-risk .matrix .cell .desc { font-size: 12px; color: var(--text-dim); }

        .rpt-risk .filetable td:first-child { font-family: ui-monospace, monospace; font-size: 12.5px; white-space: nowrap; }

        .rpt-risk .banner {
          display: flex; align-items: center; gap: 14px;
          border: 1px solid var(--normal); background: var(--normal-soft);
          border-radius: 12px; padding: 16px 20px; margin-bottom: 22px;
        }
        .rpt-risk .banner__num { font-size: 26px; font-weight: 800; color: var(--normal); font-family: ui-monospace, monospace; }
        .rpt-risk .banner__text { font-size: 13.5px; color: var(--text); }
        .rpt-risk .banner__text b { color: var(--normal); }

        .rpt-risk footer {
          max-width: 880px; margin: 0 auto; padding: 0 24px 64px;
          color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px;
        }

        @media (max-width: 620px) {
          .rpt-risk .stats { grid-template-columns: repeat(2, 1fr); }
          .rpt-risk .bar-row { grid-template-columns: 110px 1fr 36px; }
          .rpt-risk .matrix { grid-template-columns: 90px repeat(2, 1fr); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .rpt-risk tbody tr, .rpt-risk .cell, .rpt-risk .stat { transition: background 0.15s ease; }
        }
      `}</style>

      <div className="rpt-risk">
        <div className="topbar">
          <div className="topbar__title">AI CCTV 안전 판단 시스템 — 리스크 판단 로직</div>
          <div className="topbar__tags"><span className="tag">issue #21</span><span className="tag">PR #34</span></div>
        </div>

        <main>
          <p className="eyebrow">발표 자료 · 작업 요약</p>
          <h1>중복 채점 버그 정리 &amp; Level 1~5 공식 기준표 반영</h1>
          <p className="lede">
            생체·영상·보호구 신호가 여러 곳에서 중복으로 채점되던 문제를 찾아 정리하고,
            정부 공식 위험도 Level 1~5 분류표를 법령 근거와 함께 판단 로직에 반영한 작업입니다.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat__value">6건</div><div className="stat__label">중복/버그 발견·수정</div></div>
            <div className="stat"><div className="stat__value">8+7</div><div className="stat__label">공식 조합 + 컨펌 조합</div></div>
            <div className="stat"><div className="stat__value">28개</div><div className="stat__label">pytest 전체 통과</div></div>
            <div className="stat"><div className="stat__value">6개</div><div className="stat__label">변경 파일</div></div>
          </div>

          <section id="s1">
            <div className="section__head"><span className="section__num">01</span><h2>발견 및 수정한 중복 / 버그</h2></div>
            <p className="section__desc">같은 신호(심박수, 헬멧 미착용, 지오펜스 진입 등)가 서로 다른 코드 경로에서 중복 채점되고 있던 지점을 전수 조사했습니다.</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th style={{ width: "28px" }}>#</th><th>위치</th><th>문제</th><th>수정 내용</th><th>상태</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-idx">1</td>
                    <td className="mono">analysis.py<br /><span className="cite">_build_video_result()</span></td>
                    <td>&quot;helmet_missing&quot; 라벨이 리스트에 중복 삽입됨</td>
                    <td>이미 있으면 추가하지 않도록 조건 추가</td>
                    <td><span className="pill pill--fixed">수정완료</span></td>
                  </tr>
                  <tr>
                    <td className="col-idx">2</td>
                    <td className="mono">service.py<br /><span className="cite">calculate_risk()</span></td>
                    <td>derived_states(fall_detected / helmet_missing / vest_missing / abnormal_motion / health_risk)가 원본 지표로 이미 채점된 걸 가산점으로 또 채점</td>
                    <td>해당 가산 로직 제거, derived_states는 표시 전용으로만 유지</td>
                    <td><span className="pill pill--fixed">수정완료</span></td>
                  </tr>
                  <tr>
                    <td className="col-idx">3</td>
                    <td className="mono">risk_scoring.py<br /><span className="cite">score_bio_signal()</span></td>
                    <td>heart_rate가 단순 임계값과 4상태 분류기(mean_hr 가중치 2.0) 양쪽에서 중복 채점</td>
                    <td>HRV 원시데이터가 있으면 4상태 분류기에 위임, 단순 임계값은 조건부 스킵</td>
                    <td><span className="pill pill--fixed">수정완료</span></td>
                  </tr>
                  <tr>
                    <td className="col-idx">4</td>
                    <td className="mono">multimodal_fusion.py<br /><span className="cite">fuse()</span></td>
                    <td>지오펜스 PPE 위반과 헬멧 라벨 채점이 중복인지 의심</td>
                    <td>컨펌 결과 <strong>의도된 가중치</strong> — 위험구역 + 보호구 미착용은 추가 가중이 맞음</td>
                    <td><span className="pill pill--verified">검증완료</span></td>
                  </tr>
                  <tr>
                    <td className="col-idx">5</td>
                    <td className="mono">multimodal_fusion.py<br /><span className="cite">fuse()</span></td>
                    <td>agreement(+15) / contradiction(×0.7) 보정이 _decide()의 규칙 판정과 충돌해 등급이 틀어짐</td>
                    <td>보정 로직 제거, BIO_RISK / VIDEO_RISK / PPE_RISK를 max()만으로 정답이 나오도록 재설계</td>
                    <td><span className="pill pill--fixed">수정완료</span></td>
                  </tr>
                  <tr>
                    <td className="col-idx">6</td>
                    <td className="mono">multimodal_fusion.py<br /><span className="cite">fuse()</span></td>
                    <td>점수 기반 하한 보정(_max_severity)이 _decide()가 이미 명확히 내린 판정까지 덮어씀</td>
                    <td>_decide()가 기본값(NORMAL)으로 떨어졌을 때만 점수로 보정하도록 조건 제한</td>
                    <td><span className="pill pill--fixed">수정완료</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="s2">
            <div className="section__head"><span className="section__num">02</span><h2>Level 1~5 기준표 반영 (법령 근거 매핑)</h2></div>
            <p className="section__desc">판단 공식은 <span className="mono">risk = max(BIO_RISK, VIDEO_RISK, PPE_RISK)</span> + 지오펜스 추가 가중. 아래는 카테고리별 점수와, 이 점수가 0~100 구간에서 어느 등급에 해당하는지를 보여줍니다.</p>

            <div className="barchart">
              <div className="bar-row"><div className="name">BIO · 정상</div><div className="track"><div className="fill" style={{ width: "10%", background: "var(--normal)" }}></div></div><div className="score mono">10</div></div>
              <div className="bar-row"><div className="name">BIO · 과로</div><div className="track"><div className="fill" style={{ width: "45%", background: "var(--caution)" }}></div></div><div className="score mono">45</div></div>
              <div className="bar-row"><div className="name">BIO · 부정맥</div><div className="track"><div className="fill" style={{ width: "65%", background: "var(--warning)" }}></div></div><div className="score mono">65</div></div>
              <div className="bar-row"><div className="name">BIO · 실신</div><div className="track"><div className="fill" style={{ width: "90%", background: "var(--critical)" }}></div></div><div className="score mono">90</div></div>
              <div className="bar-row"><div className="name">VIDEO · 서있음/앉음/조끼체크</div><div className="track"><div className="fill" style={{ width: "10%", background: "var(--normal)" }}></div></div><div className="score mono">10</div></div>
              <div className="bar-row"><div className="name">VIDEO · 웅크림 &lt;20초</div><div className="track"><div className="fill" style={{ width: "30%", background: "var(--caution)" }}></div></div><div className="score mono">30</div></div>
              <div className="bar-row"><div className="name">VIDEO · 웅크림 ≥20초</div><div className="track"><div className="fill" style={{ width: "50%", background: "var(--caution)" }}></div></div><div className="score mono">50</div></div>
              <div className="bar-row"><div className="name">VIDEO · 실신</div><div className="track"><div className="fill" style={{ width: "90%", background: "var(--critical)" }}></div></div><div className="score mono">90</div></div>
              <div className="bar-row"><div className="name">VIDEO · 구조요청(SOS)</div><div className="track"><div className="fill" style={{ width: "95%", background: "var(--critical)" }}></div></div><div className="score mono">95</div></div>
              <div className="bar-row"><div className="name">PPE · 헬멧/안전대 미착용</div><div className="track"><div className="fill" style={{ width: "65%", background: "var(--warning)" }}></div></div><div className="score mono">65</div></div>
            </div>

            <h3 style={{ fontSize: "15px", margin: "36px 0 4px" }}>표에 명시된 8개 조합 — 전부 테스트로 검증 완료</h3>
            <p className="section__desc" style={{ marginTop: "6px" }}>&quot;왜 이 점수인지&quot; 열은 세 채점 값 중 무엇이 max()로 채택됐는지를 보여줍니다.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Level</th><th>조합 (생체 + 영상)</th><th>등급</th><th>법령 / 근거</th><th>점수</th><th>왜 이 점수인지</th></tr></thead>
                <tbody>
                  <tr><td className="mono">5</td><td>실신(생체) + 실신(영상)</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="cite">산안법 제51조 — 사업주의 작업중지</td><td className="num mono">90</td><td className="cite">max(생체 90, 영상 90) = 90</td></tr>
                  <tr><td className="mono">5</td><td>무관(생체) + 구조요청(영상)</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="cite">산업재해 급박한 위험 — 즉각 대피 · 작업중지 의무</td><td className="num mono">95</td><td className="cite">max(생체 10, SOS 95) = 95 — SOS가 압도적</td></tr>
                  <tr><td className="mono">4</td><td>부정맥(생체) + 웅크림 20초+(영상)</td><td><span className="pill pill--warning">WARNING</span></td><td className="cite">산안법 제39조 — 보건조치</td><td className="num mono">65</td><td className="cite">max(부정맥 65, 웅크림장시간 50) = 65</td></tr>
                  <tr><td className="mono">4</td><td>부정맥(생체) + 서있음(영상)</td><td><span className="pill pill--warning">WARNING</span></td><td className="cite">KOSHA GUIDE H-66-2012 — 뇌혈관·심장질환 예방조치</td><td className="num mono">65</td><td className="cite">max(부정맥 65, 서있음 10) = 65</td></tr>
                  <tr><td className="mono">4</td><td>무관(생체) + 보호구 미착용(영상)</td><td><span className="pill pill--warning">WARNING</span></td><td className="cite">안전보건규칙 제32조 — 보호구의 지급 등</td><td className="num mono">65</td><td className="cite">PPE_RISK 단독으로 65 확정</td></tr>
                  <tr><td className="mono">3</td><td>과로(생체) + 앉음/서있음(영상)</td><td><span className="pill pill--caution">CAUTION</span></td><td className="cite">산안법 제128조의2 — 휴게시설 설치</td><td className="num mono">45</td><td className="cite">max(과로 45, 앉음 10) = 45</td></tr>
                  <tr><td className="mono">3</td><td>정상(생체) + 웅크림 장시간(영상)</td><td><span className="pill pill--caution">CAUTION</span></td><td className="cite">근골격계 부담작업 / 직무스트레스 예방 의무</td><td className="num mono">50</td><td className="cite">max(정상 10, 웅크림장시간 50) = 50</td></tr>
                  <tr><td className="mono">1~2</td><td>정상(생체) + 서있음/앉음(영상)</td><td><span className="pill pill--normal">NORMAL</span></td><td className="cite">일반 작업기준 충족</td><td className="num mono">10</td><td className="cite">max(정상 10, 서있음 10) = 10</td></tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: "15px", margin: "36px 0 4px" }}>표에 없어서 컨펌받은 7개 조합 — 전부 완료</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th style={{ width: "28px" }}>#</th><th>조합 (생체 + 영상)</th><th>컨펌된 등급</th><th>점수</th><th>왜 이 점수 / 등급인지</th></tr></thead>
                <tbody>
                  <tr><td className="col-idx">1</td><td>부정맥(생체) + 실신(영상)</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="num mono">90</td><td className="cite">max(65, 90)=90 → 점수만으로 CRITICAL 구간(≥85). _decide() 규칙도 CRITICAL 명시</td></tr>
                  <tr><td className="col-idx">2</td><td>실신(영상) 단독 + 생체 정상 확인됨</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="num mono">90</td><td className="cite">max(10, 90)=90 → 영상 단독으로도 CRITICAL. 오탐 가능성보다 안전 우선</td></tr>
                  <tr><td className="col-idx">3</td><td>실신(영상) 단독 + 생체 데이터 없음</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="num mono">90</td><td className="cite">max(0, 90)=90</td></tr>
                  <tr><td className="col-idx">4</td><td>실신(생체) 단독 + 영상 정상 확인됨</td><td><span className="pill pill--warning">WARNING</span></td><td className="num mono">90<span className="cite">(표시상)</span></td><td className="cite">BIO_RISK=90이라 점수만 보면 CRITICAL급이지만, 영상이 정상을 확인해준 상태라 _decide()가 명시적으로 완화 판단 — 점수 하한 보정은 NORMAL로 떨어질 때만 작동하므로 이 판단을 덮어쓰지 않음</td></tr>
                  <tr><td className="col-idx">5</td><td>실신(생체) 단독 + 영상 데이터 없음</td><td><span className="pill pill--warning">WARNING</span></td><td className="num mono">90<span className="cite">(표시상)</span></td><td className="cite">영상이 아예 없어 확증도 반증도 안 되는 상태라 동일하게 완화</td></tr>
                  <tr><td className="col-idx">6</td><td>과로(생체) + 웅크림 20초+(영상)</td><td><span className="pill pill--caution">CAUTION</span></td><td className="num mono">50</td><td className="cite">max(45, 50)=50 → 이미 CAUTION 구간이라 별도 조정 불필요</td></tr>
                  <tr><td className="col-idx">7</td><td>지오펜스(위험구역) 추가 가중</td><td><span className="pill pill--critical">CRITICAL</span></td><td className="num mono">95</td><td className="cite">PPE위반 65 → 고소구역+안전대미착용 +20 = 85 → 위험구역 진입 +10 = 95</td></tr>
                </tbody>
              </table>
            </div>
            <div className="note">
              <strong>참고 —</strong> 지오펜스 가중은 <span className="mono">max()</span> 산출 이후에 추가로 더해지는 유일한 예외입니다.
              나머지 모든 조합은 세 채점 값 중 최댓값 하나로 등급이 결정됩니다.
            </div>
          </section>

          <section id="s3">
            <div className="section__head"><span className="section__num">03</span><h2>변경 파일 요약</h2></div>
            <div className="table-wrap">
              <table className="filetable">
                <tbody>
                  <tr><td>analysis.py</td><td>헬멧 라벨 중복 삽입 수정</td></tr>
                  <tr><td>service.py</td><td>derived_states 가산점 로직 제거</td></tr>
                  <tr><td>risk_scoring.py</td><td>heart_rate 4상태분류 중복 방지(조건부 fallback), ppe_worn 점수 로직 제거</td></tr>
                  <tr><td>multimodal_fusion.py</td><td>BIO_RISK / VIDEO_RISK / PPE_RISK 재설계, agreement / contradiction 제거, _decide() 전면 재작성(법령 근거 포함), 점수 하한 보정 조건부 처리</td></tr>
                  <tr><td>tests/test_mock_scenarios.py</td><td>crouching(45.0), no_helmet(low / 20.0) baseline 업데이트</td></tr>
                  <tr><td>tests/test_multimodal_fusion.py <span className="cite">(신규)</span></td><td>8개 조합 + 법령 문구 검증 테스트</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="s4">
            <div className="section__head"><span className="section__num">04</span><h2>스코프 밖 (별도 보류)</h2></div>
            <div className="callout">
              <strong>overall_risk</strong>(System A · service.py · low~critical) vs <strong>severity</strong>(System B · multimodal_fusion.py · normal~critical) —
              두 등급 체계가 병렬로 운영되고 있음. 통합은 별도 작업(PR #35)에서 진행.
            </div>
          </section>

          <section id="s5">
            <div className="section__head"><span className="section__num">05</span><h2>테스트 결과</h2></div>

            <div className="banner">
              <div className="banner__num">28 / 28</div>
              <div className="banner__text">pytest 전체 통과 — 기존 <b>18개</b> + 신규 test_multimodal_fusion.py <b>10개</b></div>
            </div>

            <p className="section__desc" style={{ marginBottom: "12px" }}>구역(위험/고소 vs 일반) × 보호구 착용 상태 조합에 따른 판정 매트릭스:</p>
            <div className="matrix">
              <div></div>
              <div className="hcell">보호구 미착용 (하나라도)</div>
              <div className="hcell">둘 다 정상 착용</div>

              <div className="vcell">위험구역 /<br />고소구역</div>
              <div className="cell" style={{ background: "var(--critical-soft)", borderColor: "var(--critical)" }}>
                <span className="pill pill--critical">CRITICAL</span>
                <span className="desc">구역 위반 + 보호구 위반 중첩</span>
              </div>
              <div className="cell" style={{ background: "var(--normal-soft)", borderColor: "var(--normal)" }}>
                <span className="pill pill--normal">NORMAL</span>
                <span className="desc">보호구 정상 착용 시 구역 진입 자체는 정상 범위</span>
              </div>

              <div className="vcell">구역 아님<br />(일반 지역)</div>
              <div className="cell" style={{ background: "var(--warning-soft)", borderColor: "var(--warning)" }}>
                <span className="pill pill--warning">WARNING</span>
                <span className="desc">보호구 위반만 단독 적용</span>
              </div>
              <div className="cell" style={{ background: "var(--normal-soft)", borderColor: "var(--normal)" }}>
                <span className="pill pill--normal">NORMAL</span>
                <span className="desc">위반 사항 없음</span>
              </div>
            </div>
          </section>
        </main>

        <footer>
          AI CCTV 안전 판단 시스템 · 리스크 판단 로직 정리 — issue #21 · PR #34 기준 작업 요약
        </footer>
      </div>
    </>
  );
}
