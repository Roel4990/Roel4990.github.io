"use client";

import { useSupabaseSession } from "../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../_components/LoginScreen";
import LogoutButton from "../_components/LogoutButton";

export default function VerificationReport() {
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
          --bg: #F2F4F3; --bg-soft: #E7EBE9; --surface: #FFFFFF; --text: #191D20; --text-dim: #5B6368;
          --border: rgba(25,29,32,0.12); --border-strong: rgba(25,29,32,0.22);
          --accent: #2C6E8C; --accent-strong: #1F5670; --accent-soft: rgba(44,110,140,0.10);
          --critical: #C8402A; --critical-soft: rgba(200,64,42,0.12);
          --warning: #C97A1E; --warning-soft: rgba(201,122,30,0.13);
          --caution: #93791C; --caution-soft: rgba(147,121,28,0.14);
          --normal: #2F7D5A; --normal-soft: rgba(47,125,90,0.12);
          --code-bg: #F7F8F7;
          --shadow: 0 1px 2px rgba(20,23,27,0.06), 0 8px 24px rgba(20,23,27,0.05);
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #15181C; --bg-soft: #1C2025; --surface: #1E2227; --text: #E7EAEC; --text-dim: #98A1A6;
            --border: rgba(231,234,236,0.12); --border-strong: rgba(231,234,236,0.22);
            --accent: #6BA8C7; --accent-strong: #8FC0DC; --accent-soft: rgba(107,168,199,0.14);
            --critical: #E36A50; --critical-soft: rgba(227,106,80,0.16);
            --warning: #E5A653; --warning-soft: rgba(229,166,83,0.16);
            --caution: #D0B44A; --caution-soft: rgba(208,180,74,0.16);
            --normal: #5DB98E; --normal-soft: rgba(93,185,142,0.16);
            --code-bg: #191D22;
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
          --code-bg: #F7F8F7;
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
          --code-bg: #191D22;
          --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.28);
        }

        .rpt-verify * { box-sizing: border-box; }
        .rpt-verify {
          margin: 0; background: var(--bg); color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif;
          line-height: 1.65; letter-spacing: -0.01em;
        }
        .rpt-verify .mono { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace; }

        .rpt-verify .topbar {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 24px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--border);
        }
        .rpt-verify .topbar__title { font-size: 13px; font-weight: 700; }
        .rpt-verify .topbar__tags { display: flex; gap: 6px; }
        .rpt-verify .tag { font-family: ui-monospace, monospace; font-size: 11px; padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-strong); color: var(--text-dim); white-space: nowrap; }

        .rpt-verify .toc { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 24px; background: var(--bg-soft); border-bottom: 1px solid var(--border); }
        .rpt-verify .toc a { font-family: ui-monospace, monospace; font-size: 11.5px; color: var(--text-dim); text-decoration: none; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--border-strong); }
        .rpt-verify .toc a:hover, .rpt-verify .toc a:focus-visible { color: var(--accent-strong); border-color: var(--accent); outline: none; }

        .rpt-verify main { max-width: 940px; margin: 0 auto; padding: 56px 24px 96px; }

        .rpt-verify .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
        .rpt-verify h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
        .rpt-verify .lede { font-size: 16px; color: var(--text-dim); max-width: 66ch; margin: 0; }

        .rpt-verify .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
        .rpt-verify .stat { background: var(--surface); padding: 16px 18px; }
        .rpt-verify .stat__value { font-size: 22px; font-weight: 800; }
        .rpt-verify .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

        .rpt-verify section { margin-top: 60px; }
        .rpt-verify .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
        .rpt-verify .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
        .rpt-verify h2 { font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
        .rpt-verify .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 68ch; margin: 10px 0 20px; }

        .rpt-verify .code {
          position: relative; background: var(--code-bg); border: 1px solid var(--border);
          border-radius: 10px; padding: 14px 16px; overflow-x: auto; font-size: 12.5px; line-height: 1.7;
        }
        .rpt-verify .code::before {
          content: attr(data-lang); position: absolute; top: 8px; right: 12px;
          font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.7;
        }
        .rpt-verify .code pre { margin: 0; white-space: pre; }
        .rpt-verify .code code { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; color: var(--text); }

        .rpt-verify .term {
          background: #14171B; color: #C9D1D9; border-radius: 10px; padding: 14px 16px;
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; font-size: 11.5px; line-height: 1.7;
          overflow-x: auto;
        }
        .rpt-verify .term pre { margin: 0; white-space: pre-wrap; word-break: break-word; }
        .rpt-verify .ok-line { color: #7EE787; }
        .rpt-verify .cycle-line { color: #8FC0DC; font-weight: 700; }
        .rpt-verify .dim-line { color: #7D8590; }
        .rpt-verify .repro-note { font-size: 12px; color: var(--text-dim); margin: 14px 0 6px; }

        .rpt-verify .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
        .rpt-verify table { border-collapse: collapse; width: 100%; min-width: 680px; font-size: 13px; }
        .rpt-verify th, .rpt-verify td { text-align: left; padding: 10px 13px; border-bottom: 1px solid var(--border); vertical-align: top; }
        .rpt-verify thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
        .rpt-verify tbody tr:last-child td { border-bottom: none; }
        .rpt-verify tbody tr:hover { background: var(--accent-soft); }
        .rpt-verify td.num { font-family: ui-monospace, monospace; text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
        .rpt-verify td.msg { color: var(--text-dim); }

        .rpt-verify .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
        .rpt-verify .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .rpt-verify .pill--ok { background: var(--normal-soft); color: var(--normal); }
        .rpt-verify .pill--warn { background: var(--warning-soft); color: var(--warning); }
        .rpt-verify .pill--new { background: var(--accent-soft); color: var(--accent-strong); }

        .rpt-verify .sevpill { display: inline-flex; align-items: center; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 6px; white-space: nowrap; }
        .rpt-verify .sevpill--critical { background: var(--critical-soft); color: var(--critical); }
        .rpt-verify .sevpill--warning { background: var(--warning-soft); color: var(--warning); }
        .rpt-verify .sevpill--caution { background: var(--caution-soft); color: var(--caution); }
        .rpt-verify .sevpill--normal { background: var(--normal-soft); color: var(--normal); }

        .rpt-verify .section-band { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .rpt-verify .band-dot { width: 10px; height: 10px; border-radius: 3px; }

        .rpt-verify .note {
          border: 1px solid var(--border-strong); border-left: 3px solid var(--accent);
          background: var(--accent-soft); border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 18px;
        }
        .rpt-verify .note strong { color: var(--accent-strong); }

        .rpt-verify .issue-list { display: grid; gap: 12px; margin-top: 10px; }
        .rpt-verify .issue { border: 1px solid var(--border); border-left: 3px solid var(--warning); background: var(--surface); border-radius: 0 10px 10px 0; padding: 12px 16px; box-shadow: var(--shadow); }
        .rpt-verify .issue b { color: var(--warning); font-family: ui-monospace, monospace; font-size: 12.5px; }
        .rpt-verify .issue p { margin: 6px 0 0; font-size: 13.5px; color: var(--text-dim); }

        .rpt-verify .banner { display: flex; align-items: center; gap: 14px; border: 1px solid var(--accent); background: var(--accent-soft); border-radius: 12px; padding: 16px 20px; margin-top: 20px; }
        .rpt-verify .banner__num { font-size: 24px; font-weight: 800; color: var(--accent-strong); font-family: ui-monospace, monospace; }
        .rpt-verify .banner__text { font-size: 13.5px; }

        .rpt-verify footer { max-width: 940px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }

        @media (max-width: 620px) { .rpt-verify .stats { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <div className="rpt-verify">
        <div className="topbar">
          <div className="topbar__title">AI CCTV 안전 판단 시스템 — 판정 로직 검증</div>
          <div className="topbar__tags"><span className="tag">2026-07-15</span><span className="tag">fuse()</span></div>
        </div>
        <nav className="toc">
          <a href="#method">분석 방법</a>
          <a href="#logs">시뮬레이터 로그</a>
          <a href="#critical">CRITICAL</a>
          <a href="#warning">WARNING</a>
          <a href="#caution">CAUTION</a>
          <a href="#normal">NORMAL</a>
          <a href="#issues">남은 이슈</a>
        </nav>

        <main>
          <p className="eyebrow">검증 리포트 · 시뮬레이터 × pytest 교차 확인</p>
          <h1>28가지 판정 분기, 시뮬레이터와 코드 양쪽에서 확인</h1>
          <p className="lede">
            주기 분석 시뮬레이터(워치+CCTV)를 반복 실행해 실제로 어떤 판정 경로가 발동하는지 로그로 수집하고,
            <span className="mono">fuse()</span>의 전체 판정 분기(pytest)와 교차 확인한 결과입니다.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat__value">28개</div><div className="stat__label">고유 판정 조합</div></div>
            <div className="stat"><div className="stat__value">100%</div><div className="stat__label">pytest 커버리지 (54개 테스트)</div></div>
            <div className="stat"><div className="stat__value">61%</div><div className="stat__label">시뮬레이터 관측률 (17/28)</div></div>
            <div className="stat"><div className="stat__value">0건</div><div className="stat__label">등급-점수 밴드 불일치</div></div>
          </div>

          <section id="method">
            <div className="section__head"><span className="section__num">01</span><h2>분석 방법</h2></div>
            <p className="section__desc"><span className="mono">analysis.py::run_analysis_once()</span>에 워커별 입력(생체 원시값 + 영상 행동/PPE/구역)과 출력(등급/점수/메시지)을 한 줄로 같이 찍는 로그를 추가해서, 매 주기마다 &quot;무엇이 들어가서 무엇이 나왔는지&quot;를 바로 대조할 수 있게 했습니다.</p>
            <div className="code" data-lang="python"><pre><code>{`for ctx, r in zip(matched_contexts, analyzed):
    bio = ctx.bio_signal
    vid = ctx.video_signal
    safe_print(
        f"  └ {r.target_worker}({r.color_group}) "
        f"IN[hr={bio.heart_rate if bio else None} hrv={bio.hrv if bio else None} "
        f"action={vid.current_action if vid else None} "
        f"ppe={vid.ppe_status if vid else None} "
        f"zone={vid.zone_status if vid else None}] "
        f"bio_state={r.derived_states.get('bio_state')} "
        f"→ OUT[{r.overall_risk}/{r.score}] {r.alert_message}"
    )`}</code></pre></div>
          </section>

          <section id="logs">
            <div className="section__head"><span className="section__num">02</span><h2>시뮬레이터 로그 샘플</h2></div>
            <p className="section__desc">13사이클 · 39건 매칭 중 대표 발췌 (전체 로그는 원본 파일 참고).</p>
            <div className="term">
<pre><span className="cycle-line">bio_items=63  cctv_items=275  matched=3</span>
  └ watch_yellow_001(yellow) IN[hr=91.52 hrv=167.42 action=sos_action ppe={"{"}&apos;helmet&apos;: False, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: True{"}"}] bio_state=fatigue → OUT[critical/100.0] 즉시 현장 출동 — 작업자 구조요청(SOS)
  └ watch_red_001(red) IN[hr=75.89 hrv=262.16 action=crouching ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=normal → OUT[low/30.0] 조치 불필요
  └ watch_green_001(green) IN[hr=95.98 hrv=221.78 action=standing ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=fatigue → OUT[medium/45.0] 휴식 권고 — 피로 누적 신호
<span className="ok-line">[OK] 주기 분석 완료: 3 명</span>

<span className="cycle-line">bio_items=66  cctv_items=275  matched=3</span>
  └ watch_red_001(red) IN[hr=78.12 hrv=292.2 action=fainting ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=normal → OUT[critical/90.0] 즉시 현장 출동 — 쓰러짐 감지(생체는 정상이나 안전 우선)
  └ watch_green_001(green) IN[hr=83.71 hrv=196.29 action=standing ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=fatigue → OUT[medium/45.0] 휴식 권고 — 피로 누적 신호
  └ watch_yellow_001(yellow) IN[hr=90.4 hrv=179.5 action=sitting ppe={"{"}&apos;helmet&apos;: False, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: True{"}"}] bio_state=fatigue → OUT[critical/95.0] 즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용 (과로 신호 동반)
<span className="ok-line">[OK] 주기 분석 완료: 3 명</span>

<span className="cycle-line">bio_items=64  cctv_items=275  matched=3</span>
  └ watch_red_001(red) IN[hr=62.65 hrv=171.15 action=standing ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=normal → OUT[low/10.0] 조치 불필요
  └ watch_green_001(green) IN[hr=86.43 hrv=221.51 action=sos_action ppe={"{"}&apos;helmet&apos;: True, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: False{"}"}] bio_state=fatigue → OUT[critical/95.0] 즉시 현장 출동 — 작업자 구조요청(SOS)
  └ watch_yellow_001(yellow) IN[hr=85.29 hrv=247.01 action=fainting ppe={"{"}&apos;helmet&apos;: False, &apos;harness&apos;: True, &apos;vest&apos;: True{"}"} zone={"{"}&apos;in_danger_zone&apos;: False, &apos;is_high_altitude&apos;: True{"}"}] bio_state=fatigue → OUT[critical/100.0] 즉시 현장 출동 — 쓰러짐 감지(과로 신호 동반)
<span className="ok-line">[OK] 주기 분석 완료: 3 명</span>

<span className="dim-line">... (나머지 10사이클 생략 — 패턴 반복)</span></pre>
            </div>
          </section>

          <section id="critical">
            <div className="section__head"><span className="section__num">03</span><h2>CRITICAL <span className="mono" style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400 }}>(85점 이상)</span></h2></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건 (생체/행동/PPE/구역)</th><th>시뮬레이터</th><th>pytest</th></tr></thead>
                <tbody>
                  <tr><td className="num mono">1</td><td className="num mono">100</td><td className="msg">즉시 현장 출동 — 작업자 구조요청(SOS)</td><td>무관 + SOS + PPE위반 + 구역</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">2</td><td className="num mono">100</td><td className="msg">즉시 현장 출동 + 119 — 심정지/실신 의심</td><td>실신/부정맥 + 쓰러짐 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">3</td><td className="num mono">100</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(생체 정상, 안전 우선)</td><td>정상 + 쓰러짐 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">4</td><td className="num mono">100</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(과로 신호 동반)</td><td>과로 + 쓰러짐 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">5</td><td className="num mono">100</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(생체 미확인)</td><td>생체없음 + 쓰러짐 + PPE위반 + 구역</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">6</td><td className="num mono">100</td><td className="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(실신 신호 동반)</td><td>실신 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">7</td><td className="num mono">95</td><td className="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용</td><td>정상 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">8</td><td className="num mono">95</td><td className="msg">즉시 현장 출동 — 작업자 구조요청(SOS)</td><td>무관 + SOS (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">9</td><td className="num mono">95</td><td className="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(과로 신호 동반)</td><td>과로 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">10</td><td className="num mono">95</td><td className="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(부정맥 신호 동반)</td><td>부정맥 + PPE위반 + 구역</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">11</td><td className="num mono">90</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(생체 미확인)</td><td>생체없음 + 쓰러짐 (구역없음)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">12</td><td className="num mono">90</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(생체 정상, 안전 우선)</td><td>정상 + 쓰러짐 (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">13</td><td className="num mono">90</td><td className="msg">즉시 현장 출동 — 쓰러짐 감지(과로 신호 동반)</td><td>과로 + 쓰러짐 (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">14</td><td className="num mono">90</td><td className="msg">즉시 현장 출동 + 119 — 심정지/실신 의심</td><td>실신/부정맥 + 쓰러짐 (구역없음)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">15</td><td className="num mono">90</td><td className="msg">즉시 현장 확인 — 생체 실신 신호</td><td>실신 + 앉음/웅크림20초+ (영상도 이상, 쓰러짐 아님)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="warning">
            <div className="section__head"><span className="section__num">04</span><h2>WARNING <span className="mono" style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400 }}>(60~84점)</span></h2></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>시뮬레이터</th><th>pytest</th></tr></thead>
                <tbody>
                  <tr><td className="num mono">16</td><td className="num mono">65</td><td className="msg">보호구 착용 지시 — 즉시 시정 필요</td><td>정상 + PPE위반 (구역없음)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">17</td><td className="num mono">65</td><td className="msg">보호구 착용 지시 — 즉시 시정 필요(과로 신호 동반)</td><td>과로 + PPE위반 (구역없음)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">18</td><td className="num mono">65</td><td className="msg">심혈관 질환 예방조치 — 부정맥 신호</td><td>부정맥 + 서있음 (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">19</td><td className="num mono">65</td><td className="msg">보호구 착용 지시 — 즉시 시정 필요(부정맥 신호 동반)</td><td>부정맥 + PPE위반 (구역없음)</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                  <tr><td className="num mono">20</td><td className="num mono">65</td><td className="msg">보건조치 필요 — 부정맥+이상자세</td><td>부정맥 + 웅크림 (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">21</td><td className="num mono">65</td><td className="msg">현장 확인 — 생체 실신 신호(영상 정상)</td><td>실신 + 서있음 (구역없음)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">22</td><td className="num mono">65</td><td className="msg">현장 확인 — 생체 실신 신호(영상 정상)</td><td>실신 + 웅크림(20초 미만)</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--new">신규</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="caution">
            <div className="section__head"><span className="section__num">05</span><h2>CAUTION <span className="mono" style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400 }}>(35~59점)</span></h2></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>시뮬레이터</th><th>pytest</th></tr></thead>
                <tbody>
                  <tr><td className="num mono">23</td><td className="num mono">50</td><td className="msg">휴식 권고 — 장시간 이상자세 유지</td><td>정상 + 웅크림 20초+</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">24</td><td className="num mono">50</td><td className="msg">휴식 권고 — 과로 + 장시간 이상자세 유지</td><td>과로 + 웅크림 20초+</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">25</td><td className="num mono">45</td><td className="msg">휴식 권고 — 피로 누적 신호</td><td>과로 + 서있음/앉음</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="normal">
            <div className="section__head"><span className="section__num">06</span><h2>NORMAL <span className="mono" style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400 }}>(35점 미만)</span></h2></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>시뮬레이터</th><th>pytest</th></tr></thead>
                <tbody>
                  <tr><td className="num mono">26</td><td className="num mono">30</td><td className="msg">조치 불필요</td><td>정상 + 웅크림 20초 미만</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">27</td><td className="num mono">10</td><td className="msg">조치 불필요</td><td>정상 + 서있음/앉음</td><td><span className="pill pill--ok">확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                  <tr><td className="num mono">28</td><td className="num mono">10</td><td className="msg">조치 불필요</td><td>정상 + 위험구역/고소구역 진입 + 보호구 정상 착용</td><td><span className="pill pill--warn">미확인</span></td><td><span className="pill pill--ok">확인</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="issues">
            <div className="section__head"><span className="section__num">07</span><h2>남은 이슈</h2></div>
            <div className="issue-list">
              <div className="issue">
                <b>웅크림 20초 이상 지속 (#23, #24)</b>
                <p>시뮬레이터 행동 전환 주기가 3~8초로 짧아 재현이 어려움 — pytest로만 검증 가능한 영역.</p>
              </div>
              <div className="issue">
                <b>PPE위반 단독, 구역없음 (#16, #17, #19)</b>
                <p>지금까지 시뮬레이터에서는 PPE위반이 항상 구역 진입과 함께만 발생 — 단독 케이스가 걸리지 않음.</p>
              </div>
              <div className="issue">
                <b>생체 데이터 없음 (#5, #11)</b>
                <p>워치 시뮬레이터가 항상 데이터를 보내는 구조라 &quot;생체 데이터 없음&quot; 자체가 발생하지 않음. <span className="mono">/mock/analyze</span>로만 재현 가능.</p>
              </div>
            </div>

            <div className="banner">
              <div className="banner__num">28 / 28</div>
              <div className="banner__text">전체 판정 조합 <b style={{ color: "var(--accent-strong)" }}>pytest 100% 커버</b> — 시뮬레이터 미확인 항목도 코드 레벨에서는 전부 검증 완료</div>
            </div>
          </section>
        </main>

        <footer>
          AI CCTV 안전 판단 시스템 · 판정 로직 검증 리포트 — fuse() 28개 판정 조합, 54개 pytest 기준
        </footer>
      </div>
    </>
  );
}
