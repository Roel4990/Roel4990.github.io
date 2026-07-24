import type { Metadata } from "next";

export const metadata: Metadata = { title: "판정 로직 검증 리포트 — pytest/E2E 교차 확인" };

const documentHtml = String.raw`<title>판정 로직 검증 리포트 — pytest/E2E 교차 확인</title>
<style>
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

  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif;
    line-height: 1.65; letter-spacing: -0.01em;
  }
  .mono { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace; }

  .topbar {
    position: sticky; top: 0; z-index: 10;
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 10px 24px;
    background: color-mix(in srgb, var(--surface) 88%, transparent);
    backdrop-filter: blur(10px); border-bottom: 1px solid var(--border);
  }
  .topbar__title { font-size: 13px; font-weight: 700; }
  .topbar__tags { display: flex; gap: 6px; }
  .tag { font-family: ui-monospace, monospace; font-size: 11px; padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-strong); color: var(--text-dim); white-space: nowrap; }

  .toc { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 24px; background: var(--bg-soft); border-bottom: 1px solid var(--border); }
  .toc a { font-family: ui-monospace, monospace; font-size: 11.5px; color: var(--text-dim); text-decoration: none; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--border-strong); }
  .toc a:hover, .toc a:focus-visible { color: var(--accent-strong); border-color: var(--accent); outline: none; }

  main { max-width: 940px; margin: 0 auto; padding: 56px 24px 96px; }

  .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
  h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
  .lede { font-size: 16px; color: var(--text-dim); max-width: 66ch; margin: 0; }

  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
  .stat { background: var(--surface); padding: 16px 18px; }
  .stat__value { font-size: 22px; font-weight: 800; }
  .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

  section { margin-top: 60px; }
  .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
  .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
  h2 { font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
  .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 68ch; margin: 10px 0 20px; }

  .code {
    position: relative; background: var(--code-bg); border: 1px solid var(--border);
    border-radius: 10px; padding: 14px 16px; overflow-x: auto; font-size: 12.5px; line-height: 1.7;
  }
  .code::before {
    content: attr(data-lang); position: absolute; top: 8px; right: 12px;
    font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--text-dim); opacity: 0.7;
  }
  .code pre { margin: 0; white-space: pre; }
  .code code { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; color: var(--text); }

  .term {
    background: #14171B; color: #C9D1D9; border-radius: 10px; padding: 14px 16px;
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; font-size: 11.5px; line-height: 1.7;
    overflow-x: auto;
  }
  .term pre { margin: 0; white-space: pre-wrap; word-break: break-word; }
  .ok-line { color: #7EE787; }
  .cycle-line { color: #8FC0DC; font-weight: 700; }
  .dim-line { color: #7D8590; }
  .repro-note { font-size: 12px; color: var(--text-dim); margin: 14px 0 6px; }

  .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
  table { border-collapse: collapse; width: 100%; min-width: 680px; font-size: 13px; }
  th, td { text-align: left; padding: 10px 13px; border-bottom: 1px solid var(--border); vertical-align: top; }
  thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--accent-soft); }
  td.num { font-family: ui-monospace, monospace; text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
  td.msg { color: var(--text-dim); }

  .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
  .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .pill--ok { background: var(--normal-soft); color: var(--normal); }
  .pill--warn { background: var(--warning-soft); color: var(--warning); }
  .pill--new { background: var(--accent-soft); color: var(--accent-strong); }

  .sevpill { display: inline-flex; align-items: center; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 6px; white-space: nowrap; }
  .sevpill--critical { background: var(--critical-soft); color: var(--critical); }
  .sevpill--warning { background: var(--warning-soft); color: var(--warning); }
  .sevpill--caution { background: var(--caution-soft); color: var(--caution); }
  .sevpill--normal { background: var(--normal-soft); color: var(--normal); }

  .section-band { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .band-dot { width: 10px; height: 10px; border-radius: 3px; }

  .note {
    border: 1px solid var(--border-strong); border-left: 3px solid var(--accent);
    background: var(--accent-soft); border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 18px;
  }
  .note strong { color: var(--accent-strong); }

  .issue-list { display: grid; gap: 12px; margin-top: 10px; }
  .issue { border: 1px solid var(--border); border-left: 3px solid var(--warning); background: var(--surface); border-radius: 0 10px 10px 0; padding: 12px 16px; box-shadow: var(--shadow); }
  .issue b { color: var(--warning); font-family: ui-monospace, monospace; font-size: 12.5px; }
  .issue p { margin: 6px 0 0; font-size: 13.5px; color: var(--text-dim); }

  .banner { display: flex; align-items: center; gap: 14px; border: 1px solid var(--accent); background: var(--accent-soft); border-radius: 12px; padding: 16px 20px; margin-top: 20px; }
  .banner__num { font-size: 24px; font-weight: 800; color: var(--accent-strong); font-family: ui-monospace, monospace; }
  .banner__text { font-size: 13.5px; }

  footer { max-width: 940px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }

  @media (max-width: 620px) { .stats { grid-template-columns: repeat(2, 1fr); } }
</style>

<div class="topbar">
  <div class="topbar__title">AI CCTV 안전 판단 시스템 — 판정 로직 검증</div>
  <div class="topbar__tags"><span class="tag">2026-07-24</span><span class="tag">131 passed</span></div>
</div>
<nav class="toc">
  <a href="#method">분석 방법</a>
  <a href="#logs">실행 결과</a>
  <a href="#critical">CRITICAL</a>
  <a href="#warning">WARNING</a>
  <a href="#caution">CAUTION</a>
  <a href="#normal">NORMAL</a>
  <a href="#issues">남은 검증 과제</a>
</nav>

<main>
  <p class="eyebrow">검증 리포트 · pytest × E2E 시나리오 교차 확인</p>
  <h1>현재 파이프라인과 판정 규칙을 자동 테스트로 확인</h1>
  <p class="lede">
    단위·통합 pytest로 recent 응답 파싱, Bio/CCTV 매칭, Fusion 조합 중복 처리,
    <span class="mono">fuse()</span> 판정과 최종 POST 계약을 확인하고,
    별도의 42개 E2E 시나리오로 실제 데이터 투입 관점의 검증 항목을 관리합니다.
  </p>

  <div class="stats">
    <div class="stat"><div class="stat__value">131</div><div class="stat__label">pytest 통과</div></div>
    <div class="stat"><div class="stat__value">0</div><div class="stat__label">pytest 실패</div></div>
    <div class="stat"><div class="stat__value">42개</div><div class="stat__label">자동 E2E 시나리오 정의</div></div>
    <div class="stat"><div class="stat__value">4건</div><div class="stat__label">비실패 경고</div></div>
  </div>

  <section id="method">
    <div class="section__head"><span class="section__num">01</span><h2>분석 방법</h2></div>
    <p class="section__desc">검증을 네 층으로 나눕니다. 데이터 계약과 오류 격리는 단위 테스트, 주기 실행과 중복 방지는 통합 테스트, 위험 판정표는 <span class="mono">fuse()</span> 매개변수 테스트, 실제 미들웨어 왕복은 E2E 시나리오 실행기로 확인합니다.</p>
    <div class="code" data-lang="python"><pre><code>fusion_contexts = [
    ctx for ctx in bio_contexts
    if (
        ctx.bio_signal is not None
        and ctx.video_signal is not None
        and ctx.matched_detected_object is not None
    )
]

fusion_key = (worker_id, bio_record_id, cctv_record_key)
# 동일 A+B만 중복이며 A+C, D+B는 새로운 Fusion 조합</code></pre></div>
    <div class="issue-list">
      <div class="issue">
        <b>계약·격리</b>
        <p>잘못된 recent envelope, Bio 항목, CCTV 프레임·객체가 같은 폴링의 정상 작업자를 막지 않는지 확인합니다.</p>
      </div>
      <div class="issue">
        <b>매칭·중복</b>
        <p>color_group, timestamp ±30초, 최신 Bio ID, CCTV 객체 키 및 120초 Fusion TTL을 확인합니다.</p>
      </div>
      <div class="issue">
        <b>판정·전송</b>
        <p>Bio·Video·PPE·구역 조합의 점수와 등급, 법령 근거, detected_metrics와 derived_states POST 계약을 확인합니다.</p>
      </div>
    </div>
  </section>

  <section id="logs">
    <div class="section__head"><span class="section__num">02</span><h2>최신 자동 검증 결과</h2></div>
    <p class="section__desc">2026-07-24 현재 <span class="mono">AI 서버 코드</span>에서 전체 pytest를 실행한 결과입니다.</p>
    <div class="term">
<pre><span class="cycle-line">python -m pytest -q</span>
........................................................................ [ 54%]
...........................................................              [100%]
<span class="ok-line">131 passed, 4 warnings in 1.22s</span></pre>
    </div>
    <p class="section__desc">4개 경고는 테스트 실패가 아닙니다. Starlette의 httpx 호환 API, FastAPI <span class="mono">on_event</span> 사용 중단 예정 안내, 로컬 pytest 캐시 경로 생성 경고입니다.</p>
  </section>

  <section id="critical">
    <div class="section__head"><span class="section__num">03</span><h2>CRITICAL <span class="mono" style="font-size:13px;color:var(--text-dim);font-weight:400;">(85점 이상)</span></h2></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건 (생체/행동/PPE/구역)</th><th>E2E 사례</th><th>pytest</th></tr></thead>
        <tbody>
          <tr><td class="num mono">1</td><td class="num mono">100</td><td class="msg">즉시 현장 출동 — 작업자 구조요청(SOS)</td><td>무관 + SOS + PPE위반 + 구역</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">2</td><td class="num mono">100</td><td class="msg">즉시 현장 출동 + 119 — 심정지/실신 의심</td><td>실신/부정맥 + 쓰러짐 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">3</td><td class="num mono">100</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(생체 정상, 안전 우선)</td><td>정상 + 쓰러짐 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">4</td><td class="num mono">100</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(과로 신호 동반)</td><td>과로 + 쓰러짐 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">5</td><td class="num mono">100</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(생체 미확인)</td><td>생체없음 + 쓰러짐 + PPE위반 + 구역</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">6</td><td class="num mono">100</td><td class="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(실신 신호 동반)</td><td>실신 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">7</td><td class="num mono">95</td><td class="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용</td><td>정상 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">8</td><td class="num mono">95</td><td class="msg">즉시 현장 출동 — 작업자 구조요청(SOS)</td><td>무관 + SOS (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">9</td><td class="num mono">95</td><td class="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(과로 신호 동반)</td><td>과로 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">10</td><td class="num mono">95</td><td class="msg">즉시 시정 + 현장 통제 — 위험구역 내 보호구 미착용(부정맥 신호 동반)</td><td>부정맥 + PPE위반 + 구역</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">11</td><td class="num mono">90</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(생체 미확인)</td><td>생체없음 + 쓰러짐 (구역없음)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">12</td><td class="num mono">90</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(생체 정상, 안전 우선)</td><td>정상 + 쓰러짐 (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">13</td><td class="num mono">90</td><td class="msg">즉시 현장 출동 — 쓰러짐 감지(과로 신호 동반)</td><td>과로 + 쓰러짐 (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">14</td><td class="num mono">90</td><td class="msg">즉시 현장 출동 + 119 — 심정지/실신 의심</td><td>실신/부정맥 + 쓰러짐 (구역없음)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">15</td><td class="num mono">90</td><td class="msg">즉시 현장 확인 — 생체 실신 신호</td><td>실신 + 앉음/웅크림20초+ (영상도 이상, 쓰러짐 아님)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="warning">
    <div class="section__head"><span class="section__num">04</span><h2>WARNING <span class="mono" style="font-size:13px;color:var(--text-dim);font-weight:400;">(60~84점)</span></h2></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>E2E 사례</th><th>pytest</th></tr></thead>
        <tbody>
          <tr><td class="num mono">16</td><td class="num mono">65</td><td class="msg">보호구 착용 지시 — 즉시 시정 필요</td><td>정상 + PPE위반 (구역없음)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">17</td><td class="num mono">65</td><td class="msg">보호구 착용 지시 — 즉시 시정 필요(과로 신호 동반)</td><td>과로 + PPE위반 (구역없음)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">18</td><td class="num mono">65</td><td class="msg">심혈관 질환 예방조치 — 부정맥 신호</td><td>부정맥 + 서있음 (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">19</td><td class="num mono">65</td><td class="msg">보호구 착용 지시 — 즉시 시정 필요(부정맥 신호 동반)</td><td>부정맥 + PPE위반 (구역없음)</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">20</td><td class="num mono">65</td><td class="msg">보건조치 필요 — 부정맥+이상자세</td><td>부정맥 + 웅크림 (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">21</td><td class="num mono">65</td><td class="msg">현장 확인 — 생체 실신 신호(영상 정상)</td><td>실신 + 서있음 (구역없음)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">22</td><td class="num mono">65</td><td class="msg">현장 확인 — 생체 실신 신호(영상 정상)</td><td>실신 + 웅크림(20초 미만)</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="caution">
    <div class="section__head"><span class="section__num">05</span><h2>CAUTION <span class="mono" style="font-size:13px;color:var(--text-dim);font-weight:400;">(35~59점)</span></h2></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>E2E 사례</th><th>pytest</th></tr></thead>
        <tbody>
          <tr><td class="num mono">23</td><td class="num mono">50</td><td class="msg">휴식 권고 — 장시간 이상자세 유지</td><td>정상 + 웅크림 20초+</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">24</td><td class="num mono">50</td><td class="msg">휴식 권고 — 과로 + 장시간 이상자세 유지</td><td>과로 + 웅크림 20초+</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">25</td><td class="num mono">45</td><td class="msg">휴식 권고 — 피로 누적 신호</td><td>과로 + 서있음/앉음</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="normal">
    <div class="section__head"><span class="section__num">06</span><h2>NORMAL <span class="mono" style="font-size:13px;color:var(--text-dim);font-weight:400;">(35점 미만)</span></h2></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>점수</th><th>메시지</th><th>조건</th><th>E2E 사례</th><th>pytest</th></tr></thead>
        <tbody>
          <tr><td class="num mono">26</td><td class="num mono">30</td><td class="msg">조치 불필요</td><td>정상 + 웅크림 20초 미만</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">27</td><td class="num mono">10</td><td class="msg">조치 불필요</td><td>정상 + 서있음/앉음</td><td><span class="pill pill--ok">확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
          <tr><td class="num mono">28</td><td class="num mono">10</td><td class="msg">조치 불필요</td><td>정상 + 위험구역/고소구역 진입 + 보호구 정상 착용</td><td><span class="pill pill--warn">미확인</span></td><td><span class="pill pill--ok">확인</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="issues">
    <div class="section__head"><span class="section__num">07</span><h2>남은 검증 과제</h2></div>
    <div class="issue-list">
      <div class="issue">
        <b>전체 E2E 재실행 결과 보관</b>
        <p><span class="mono">scenario_cases.json</span>에는 42개 자동 시나리오가 정의되어 있습니다. 브랜치 최종 상태에서 배치 6~11을 다시 실행하고 JSON report를 저장하면 미들웨어 왕복 증적까지 완성됩니다.</p>
      </div>
      <div class="issue">
        <b>SQI 운영 정책 확정</b>
        <p>정식 0.8 게이팅은 현재 비활성화되어 있고 0.9~1.0 임시값이 사용됩니다. 기준 확정 후 저품질 SQI 경계 테스트를 다시 작성해야 합니다.</p>
      </div>
      <div class="issue">
        <b>단독 모달리티와 실제 POST 정책 구분</b>
        <p><span class="mono">fuse()</span>는 Bio 또는 Video 단독 입력도 단위 테스트하지만, 현재 주기 파이프라인은 매칭된 Fusion 결과만 POST합니다. 단독 입력 행은 엔진 안전성 검증이며 운영 전송 시나리오가 아닙니다.</p>
      </div>
      <div class="issue">
        <b>사용 중단 예정 API 정리</b>
        <p>FastAPI startup의 <span class="mono">on_event</span>와 Starlette/httpx 호환 경고가 남아 있습니다. 현재 테스트는 통과하지만 향후 lifespan 및 httpx2 전환 검토가 필요합니다.</p>
      </div>
    </div>

    <div class="banner">
      <div class="banner__num">131 / 131</div>
      <div class="banner__text">현재 자동 테스트 <b style="color:var(--accent-strong)">전부 통과</b> — 단, 이는 실행된 테스트의 통과율이며 코드 커버리지 100%를 의미하지는 않습니다.</div>
    </div>
  </section>
</main>

<footer>
  AI CCTV 안전 판단 시스템 · 판정 로직 검증 리포트 — 2026-07-24, pytest 131 passed 및 E2E 시나리오 42개 기준
</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
