import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bio·CCTV Fusion 리스크 판단 로직 — 현재 기준" };

const documentHtml = String.raw`<title>Bio·CCTV Fusion 리스크 판단 로직 — 현재 기준</title>
<style>
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

  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable",
      "Malgun Gothic", "Segoe UI", sans-serif;
    line-height: 1.65;
    letter-spacing: -0.01em;
  }
  .mono {
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace;
    font-feature-settings: "tnum" 1;
    font-variant-numeric: tabular-nums;
  }

  a { color: var(--accent-strong); }

  .topbar {
    position: sticky; top: 0; z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px;
    padding: 10px 24px;
    background: color-mix(in srgb, var(--surface) 88%, transparent);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }
  .topbar__title { font-size: 13px; font-weight: 700; letter-spacing: -0.01em; }
  .topbar__tags { display: flex; gap: 6px; }
  .tag {
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 11px; padding: 3px 8px; border-radius: 5px;
    border: 1px solid var(--border-strong); color: var(--text-dim);
    white-space: nowrap;
  }

  main { max-width: 880px; margin: 0 auto; padding: 56px 24px 96px; }

  .eyebrow {
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--accent-strong); margin: 0 0 10px;
  }
  h1 {
    font-size: clamp(28px, 4vw, 38px); font-weight: 800; margin: 0 0 12px;
    letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2;
  }
  .lede { font-size: 16.5px; color: var(--text-dim); max-width: 62ch; margin: 0; }

  .stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: var(--border); border: 1px solid var(--border);
    border-radius: 12px; overflow: hidden; margin-top: 32px;
  }
  .stat { background: var(--surface); padding: 16px 18px; }
  .stat__value { font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
  .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

  section { margin-top: 64px; }
  .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
  .section__num {
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 13px; color: var(--accent-strong); font-weight: 700;
  }
  h2 { font-size: 21px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
  .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 64ch; margin: 10px 0 24px; }

  .table-wrap {
    overflow-x: auto; border: 1px solid var(--border); border-radius: 12px;
    box-shadow: var(--shadow); background: var(--surface);
  }
  table { border-collapse: collapse; width: 100%; min-width: 640px; font-size: 13.5px; }
  th, td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
  thead th {
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim);
    background: var(--bg-soft); font-weight: 700; white-space: nowrap;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--accent-soft); }
  td.num { font-family: ui-monospace, monospace; font-variant-numeric: tabular-nums; text-align: right; }
  .col-idx { color: var(--text-dim); font-family: ui-monospace, monospace; font-size: 12px; }
  .cite { color: var(--text-dim); font-size: 12.5px; }

  .pill {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 11px; font-weight: 700; letter-spacing: 0.03em;
    padding: 3px 9px; border-radius: 999px; white-space: nowrap;
  }
  .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .pill--critical { background: var(--critical-soft); color: var(--critical); }
  .pill--warning  { background: var(--warning-soft); color: var(--warning); }
  .pill--caution  { background: var(--caution-soft); color: var(--caution); }
  .pill--normal   { background: var(--normal-soft); color: var(--normal); }
  .pill--fixed    { background: var(--normal-soft); color: var(--normal); }
  .pill--verified { background: var(--accent-soft); color: var(--accent-strong); }

  /* score ruler */
  .ruler { margin: 6px 0 28px; }
  .ruler__track {
    position: relative; height: 10px; border-radius: 999px; margin: 34px 4px 30px;
    background: linear-gradient(to right,
      var(--normal) 0%, var(--normal) 20%,
      var(--caution) 40%, var(--warning) 62%,
      var(--critical) 85%, var(--critical) 100%);
    opacity: 0.9;
  }
  .ruler__tick { position: absolute; top: -22px; transform: translateX(-50%); text-align: center; }
  .ruler__tick .dot {
    width: 10px; height: 10px; border-radius: 50%; background: var(--surface);
    border: 2px solid var(--text); margin: 24px auto 0;
  }
  .ruler__tick .lbl {
    font-family: ui-monospace, monospace; font-size: 11px; white-space: nowrap; color: var(--text-dim);
  }
  .ruler__tick .val {
    font-family: ui-monospace, monospace; font-size: 12px; font-weight: 700; color: var(--text);
  }
  .ruler__legend { display: flex; gap: 18px; font-size: 12px; color: var(--text-dim); margin-top: 4px; flex-wrap: wrap; }
  .ruler__legend span { display: inline-flex; align-items: center; gap: 6px; }
  .ruler__legend i { width: 8px; height: 8px; border-radius: 2px; background: var(--text-dim); display: inline-block; }

  .barchart { display: grid; gap: 10px; margin-top: 4px; }
  .bar-row { display: grid; grid-template-columns: 150px 1fr 40px; align-items: center; gap: 10px; }
  .bar-row .name { font-size: 13px; color: var(--text-dim); }
  .bar-row .track { height: 10px; border-radius: 6px; background: var(--bg-soft); overflow: hidden; }
  .bar-row .fill { height: 100%; border-radius: 6px; }
  .bar-row .score { font-family: ui-monospace, monospace; font-size: 13px; text-align: right; font-weight: 700; }

  .note {
    border: 1px solid var(--border-strong); border-left: 3px solid var(--accent);
    background: var(--accent-soft); border-radius: 8px;
    padding: 12px 16px; font-size: 13.5px; color: var(--text); margin-top: 18px;
  }
  .note strong { color: var(--accent-strong); }

  .callout {
    border: 1px dashed var(--border-strong); border-radius: 12px;
    padding: 18px 20px; background: var(--bg-soft); color: var(--text-dim); font-size: 14px;
  }
  .callout strong { color: var(--text); }

  .matrix {
    display: grid; grid-template-columns: 140px repeat(2, 1fr); gap: 8px; margin-top: 8px;
  }
  .matrix .hcell, .matrix .vcell {
    font-size: 12px; color: var(--text-dim); display: flex; align-items: center;
    padding: 6px 4px;
  }
  .matrix .hcell { justify-content: center; text-align: center; font-weight: 700; }
  .matrix .vcell { font-weight: 700; }
  .matrix .cell {
    border-radius: 10px; padding: 16px; min-height: 74px;
    display: flex; flex-direction: column; justify-content: center; gap: 6px;
    border: 1px solid var(--border);
  }
  .matrix .cell .desc { font-size: 12px; color: var(--text-dim); }

  .filetable td:first-child { font-family: ui-monospace, monospace; font-size: 12.5px; white-space: nowrap; }

  .banner {
    display: flex; align-items: center; gap: 14px;
    border: 1px solid var(--normal); background: var(--normal-soft);
    border-radius: 12px; padding: 16px 20px; margin-bottom: 22px;
  }
  .banner__num { font-size: 26px; font-weight: 800; color: var(--normal); font-family: ui-monospace, monospace; }
  .banner__text { font-size: 13.5px; color: var(--text); }
  .banner__text b { color: var(--normal); }

  footer {
    max-width: 880px; margin: 0 auto; padding: 0 24px 64px;
    color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px;
  }

  @media (max-width: 620px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
    .bar-row { grid-template-columns: 110px 1fr 36px; }
    .matrix { grid-template-columns: 90px repeat(2, 1fr); }
  }

  @media (prefers-reduced-motion: no-preference) {
    tbody tr, .cell, .stat { transition: background 0.15s ease; }
  }
</style>

<div class="topbar">
  <div class="topbar__title">AI CCTV 안전 판단 시스템 — 리스크 판단 로직</div>
  <div class="topbar__tags"><span class="tag">Fusion-only</span><span class="tag">issue #91</span><span class="tag">2026-07-24 업데이트</span></div>
</div>

<main>
  <p class="eyebrow">현재 구현 기준 · 위험 판정 요약</p>
  <h1>Bio·CCTV Fusion 위험 점수와<br>최종 판정 기준</h1>
  <p class="lede">
    Bio 4상태와 CCTV 행동·보호구·구역 정보를 매칭한 뒤 가장 높은 위험 신호를 기준으로 판정합니다.
    현재 폴링 경로는 Bio와 CCTV가 모두 매칭된 Fusion 결과만 Middleware로 전송합니다.
  </p>

  <div class="stats">
    <div class="stat"><div class="stat__value">4단계</div><div class="stat__label">normal~critical</div></div>
    <div class="stat"><div class="stat__value">0~100</div><div class="stat__label">risk_score 범위</div></div>
    <div class="stat"><div class="stat__value">131개</div><div class="stat__label">pytest 전체 통과</div></div>
    <div class="stat"><div class="stat__value">42개</div><div class="stat__label">자동 시나리오 통과</div></div>
  </div>

  <section id="s1">
    <div class="section__head"><span class="section__num">01</span><h2>현재 원칙이 된 주요 수정사항</h2></div>
    <p class="section__desc">같은 위험 신호를 여러 번 더하지 않고, Bio·Video·PPE 중 가장 높은 점수를 선택한 뒤 보호구 미착용과 위험구역이 결합된 경우에만 가중하도록 정리한 이력입니다.</p>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th style="width:28px">#</th><th>위치</th><th>검토 항목</th><th>현재 기준</th><th>상태</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-idx">1</td>
            <td class="mono">multimodal_fusion.py<br><span class="cite">fuse()</span></td>
            <td>Bio·Video·PPE 위험을 합산할지 여부</td>
            <td>중복 가산 없이 세 점수 중 최댓값 하나를 기본 risk로 사용</td>
            <td><span class="pill pill--fixed">적용중</span></td>
          </tr>
          <tr>
            <td class="col-idx">2</td>
            <td class="mono">multimodal_fusion.py<br><span class="cite">agreement</span></td>
            <td>상호확증 결과를 추가 점수로 사용할지 여부</td>
            <td>두 신호가 모두 이상인지 표시하는 XAI 값으로만 사용하며 점수에는 미반영</td>
            <td><span class="pill pill--fixed">적용중</span></td>
          </tr>
          <tr>
            <td class="col-idx">3</td>
            <td class="mono">multimodal_fusion.py<br><span class="cite">_has_ppe_violation()</span></td>
            <td>보호구 위반 대상</td>
            <td>안전모·안전대·안전조끼 중 하나라도 명시적으로 false면 PPE 위반</td>
            <td><span class="pill pill--fixed">적용중</span></td>
          </tr>
          <tr>
            <td class="col-idx">4</td>
            <td class="mono">multimodal_fusion.py<br><span class="cite">_is_hazard_zone()</span></td>
            <td>위험구역·고소구역 가중 조건</td>
            <td>두 구역을 동일하게 취급하며 PPE 위반이 함께 있을 때만 +30</td>
            <td><span class="pill pill--verified">검증완료</span></td>
          </tr>
          <tr>
            <td class="col-idx">5</td>
            <td class="mono">multimodal_fusion.py<br><span class="cite">_decide()</span></td>
            <td>점수와 명시적 규칙이 충돌하는 경우</td>
            <td>결정 매트릭스를 우선하고 기본 NORMAL 판정일 때만 35/60/85 경계로 보정</td>
            <td><span class="pill pill--fixed">적용중</span></td>
          </tr>
          <tr>
            <td class="col-idx">6</td>
            <td class="mono">analysis.py<br><span class="cite">run_analysis_once()</span></td>
            <td>단독 모달리티 전송과 반복 폴링 중복</td>
            <td>Fusion context만 POST하며 워치·Bio ID·CCTV 객체 키가 모두 같은 조합만 제외</td>
            <td><span class="pill pill--fixed">적용중</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="s2">
    <div class="section__head"><span class="section__num">02</span><h2>Level 1~5 기준표 반영 (법령 근거 매핑)</h2></div>
    <p class="section__desc">판단 공식은 <span class="mono">risk = max(BIO_RISK, VIDEO_RISK, PPE_RISK)</span>이며, 보호구 미착용과 위험·고소구역 진입이 동시에 성립하면 30점을 추가합니다. 등급 경계는 35/60/85점이지만, 명시적인 결정 매트릭스가 우선하고 점수 보정은 기본 NORMAL 판정에만 적용합니다.</p>

    <div class="barchart">
      <div class="bar-row"><div class="name">BIO · 정상</div><div class="track"><div class="fill" style="width:10%;background:var(--normal)"></div></div><div class="score mono">10</div></div>
      <div class="bar-row"><div class="name">BIO · 과로</div><div class="track"><div class="fill" style="width:45%;background:var(--caution)"></div></div><div class="score mono">45</div></div>
      <div class="bar-row"><div class="name">BIO · 부정맥</div><div class="track"><div class="fill" style="width:65%;background:var(--warning)"></div></div><div class="score mono">65</div></div>
      <div class="bar-row"><div class="name">BIO · 실신</div><div class="track"><div class="fill" style="width:90%;background:var(--critical)"></div></div><div class="score mono">90</div></div>
      <div class="bar-row"><div class="name">VIDEO · 서있음/앉음/조끼체크</div><div class="track"><div class="fill" style="width:10%;background:var(--normal)"></div></div><div class="score mono">10</div></div>
      <div class="bar-row"><div class="name">VIDEO · 웅크림 &lt;20초</div><div class="track"><div class="fill" style="width:30%;background:var(--caution)"></div></div><div class="score mono">30</div></div>
      <div class="bar-row"><div class="name">VIDEO · 웅크림 ≥20초</div><div class="track"><div class="fill" style="width:50%;background:var(--caution)"></div></div><div class="score mono">50</div></div>
      <div class="bar-row"><div class="name">VIDEO · 실신</div><div class="track"><div class="fill" style="width:90%;background:var(--critical)"></div></div><div class="score mono">90</div></div>
      <div class="bar-row"><div class="name">VIDEO · 구조요청(SOS)</div><div class="track"><div class="fill" style="width:95%;background:var(--critical)"></div></div><div class="score mono">95</div></div>
      <div class="bar-row"><div class="name">PPE · 안전모/안전대/안전조끼 중 하나라도 미착용</div><div class="track"><div class="fill" style="width:65%;background:var(--warning)"></div></div><div class="score mono">65</div></div>
    </div>

    <h3 style="font-size:15px;margin:36px 0 4px;">표에 명시된 8개 조합 — 전부 테스트로 검증 완료</h3>
    <p class="section__desc" style="margin-top:6px;">"왜 이 점수인지" 열은 세 채점 값 중 무엇이 max()로 채택됐는지를 보여줍니다.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Level</th><th>조합 (생체 + 영상)</th><th>등급</th><th>법령 / 근거</th><th>점수</th><th>왜 이 점수인지</th></tr></thead>
        <tbody>
          <tr><td class="mono">5</td><td>실신(생체) + 실신(영상)</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="cite">산안법 제51조 — 사업주의 작업중지</td><td class="num mono">90</td><td class="cite">max(생체 90, 영상 90) = 90</td></tr>
          <tr><td class="mono">5</td><td>생체 상태 무관 + 구조요청(영상)</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="cite">산업재해 급박한 위험 — 즉각 대피 · 작업중지 의무</td><td class="num mono">95</td><td class="cite">SOS 95가 다른 신호보다 우선</td></tr>
          <tr><td class="mono">4</td><td>부정맥(생체) + 웅크림 20초+(영상)</td><td><span class="pill pill--warning">WARNING</span></td><td class="cite">산안법 제39조 — 보건조치</td><td class="num mono">65</td><td class="cite">max(부정맥 65, 웅크림장시간 50) = 65</td></tr>
          <tr><td class="mono">4</td><td>부정맥(생체) + 서있음(영상)</td><td><span class="pill pill--warning">WARNING</span></td><td class="cite">KOSHA GUIDE H-66-2012 — 뇌혈관·심장질환 예방조치</td><td class="num mono">65</td><td class="cite">max(부정맥 65, 서있음 10) = 65</td></tr>
          <tr><td class="mono">4</td><td>생체 상태 무관 + 보호구 미착용(영상)</td><td><span class="pill pill--warning">WARNING</span></td><td class="cite">안전보건규칙 제32조 — 보호구의 지급 등</td><td class="num mono">65</td><td class="cite">안전모·안전대·안전조끼 중 하나라도 false면 PPE_RISK 65</td></tr>
          <tr><td class="mono">3</td><td>과로(생체) + 앉음/서있음(영상)</td><td><span class="pill pill--caution">CAUTION</span></td><td class="cite">산안법 제128조의2 — 휴게시설 설치</td><td class="num mono">45</td><td class="cite">max(과로 45, 앉음 10) = 45</td></tr>
          <tr><td class="mono">3</td><td>정상(생체) + 웅크림 장시간(영상)</td><td><span class="pill pill--caution">CAUTION</span></td><td class="cite">근골격계 부담작업 / 직무스트레스 예방 의무</td><td class="num mono">50</td><td class="cite">max(정상 10, 웅크림장시간 50) = 50</td></tr>
          <tr><td class="mono">1~2</td><td>정상(생체) + 서있음/앉음(영상)</td><td><span class="pill pill--normal">NORMAL</span></td><td class="cite">일반 작업기준 충족</td><td class="num mono">10</td><td class="cite">max(정상 10, 서있음 10) = 10</td></tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-size:15px;margin:36px 0 4px;">추가 결정 매트릭스와 내부 fallback</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th style="width:28px">#</th><th>조합 (생체 + 영상)</th><th>컨펌된 등급</th><th>점수</th><th>왜 이 점수 / 등급인지</th></tr></thead>
        <tbody>
          <tr><td class="col-idx">1</td><td>부정맥(생체) + 실신(영상)</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="num mono">90</td><td class="cite">max(65, 90)=90 → 점수만으로 CRITICAL 구간(≥85). _decide() 규칙도 CRITICAL 명시</td></tr>
          <tr><td class="col-idx">2</td><td>생체 정상 + 실신(영상)</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="num mono">90</td><td class="cite">영상 실신은 오탐 가능성보다 안전을 우선하며 산안법 제51조 근거를 포함</td></tr>
          <tr><td class="col-idx">3</td><td>생체 데이터 없음 + 실신(영상)</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="num mono">90</td><td class="cite">fuse() 내부 fallback은 지원하지만 현재 폴링 경로에서는 POST하지 않음</td></tr>
          <tr><td class="col-idx">4</td><td>실신(생체) + 영상 정상</td><td><span class="pill pill--warning">WARNING</span></td><td class="num mono">65</td><td class="cite">영상이 정상을 확인한 경우 센서 오류·사각지대 가능성을 고려해 WARNING으로 완화</td></tr>
          <tr><td class="col-idx">5</td><td>실신(생체) + 영상 데이터 없음</td><td><span class="pill pill--warning">WARNING</span></td><td class="num mono">65</td><td class="cite">fuse() 내부 fallback은 지원하지만 현재 폴링 경로에서는 POST하지 않음</td></tr>
          <tr><td class="col-idx">6</td><td>과로(생체) + 웅크림 20초+(영상)</td><td><span class="pill pill--caution">CAUTION</span></td><td class="num mono">50</td><td class="cite">max(45, 50)=50 → 이미 CAUTION 구간이라 별도 조정 불필요</td></tr>
          <tr><td class="col-idx">7</td><td>보호구 미착용 + 위험구역 또는 고소구역</td><td><span class="pill pill--critical">CRITICAL</span></td><td class="num mono">95</td><td class="cite">PPE 65 + 위험구역 결합 가중 30 = 95. 두 구역을 동일 조건으로 처리</td></tr>
        </tbody>
      </table>
    </div>
    <div class="note">
      <strong>참고 —</strong> <span class="mono">agreement</span>는 Bio와 Video가 모두 이상인지 나타내는 XAI 표시값입니다.
      멀티모달 비교 여부나 추가 점수를 뜻하지 않으며, 현재 점수에는 가산되지 않습니다.
    </div>
  </section>

  <section id="s3">
    <div class="section__head"><span class="section__num">03</span><h2>현재 처리 흐름</h2></div>
    <div class="table-wrap">
      <table class="filetable">
        <tbody>
          <tr><td>matching.py</td><td>워치별 최신 Bio를 선택하고 color_group + timestamp ±30초로 CCTV 객체를 매칭</td></tr>
          <tr><td>analysis.py</td><td>Bio와 CCTV가 모두 존재하는 Fusion context만 분석·POST</td></tr>
          <tr><td>analysis.py</td><td><span class="mono">(watch_id, bio_id, cam_id:timestamp:track_id)</span> 조합으로 동일 Fusion만 중복 제외</td></tr>
          <tr><td>bio_fusion.py</td><td>HRV 4상태 분류, 지오펜스 표시 정보와 Fusion 결과를 derived_states에 구성</td></tr>
          <tr><td>multimodal_fusion.py</td><td>BIO_RISK / VIDEO_RISK / PPE_RISK 최댓값, PPE+위험구역 결합 가중, 결정 매트릭스 적용</td></tr>
          <tr><td>middleware_client.py</td><td>매칭 객체를 detected_metrics로, Bio ID·상태·Fusion·geofence를 derived_states로 전송</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="s4">
    <div class="section__head"><span class="section__num">04</span><h2>전송 정책과 보류 사항</h2></div>
    <div class="callout">
      폴링 결과는 <strong>Bio-only 또는 CCTV-only를 전송하지 않고</strong>, 두 데이터가 매칭된 Fusion 결과만 전송합니다.
      <span class="mono">agreement</span>는 양쪽 이상 신호의 일치 여부이며 모달리티 판별값이 아닙니다.
      별도 <span class="mono">modality=multimodal</span> 필드 추가는 API 담당자 협의 전까지 보류합니다.<br>
      최종 관제 판단은 4단계 <span class="mono">severity</span>를 사용하며, 0~1 <span class="mono">risk_index</span>와
      평활화된 3단계 <span class="mono">risk_level</span>은 보조 지표입니다. SQI 게이팅 기준은 실측값 확정 전까지 임시 정책을 유지합니다.
    </div>
  </section>

  <section id="s5">
    <div class="section__head"><span class="section__num">05</span><h2>테스트 결과</h2></div>

    <div class="banner">
      <div class="banner__num">131 / 131</div>
      <div class="banner__text">pytest 전체 통과 · 자동 시나리오 <b>42 / 42</b> 통과</div>
    </div>

    <p class="section__desc" style="margin-bottom:12px;">구역(위험/고소 vs 일반) × 보호구 착용 상태 조합에 따른 판정 매트릭스:</p>
    <div class="matrix">
      <div></div>
      <div class="hcell">보호구 미착용 (하나라도)</div>
      <div class="hcell">모든 보호구 정상 착용</div>

      <div class="vcell">위험구역 /<br>고소구역</div>
      <div class="cell" style="background:var(--critical-soft);border-color:var(--critical)">
        <span class="pill pill--critical">CRITICAL</span>
        <span class="desc">구역 위반 + 보호구 위반 중첩</span>
      </div>
      <div class="cell" style="background:var(--normal-soft);border-color:var(--normal)">
        <span class="pill pill--normal">NORMAL</span>
        <span class="desc">보호구 정상 착용 시 구역 진입 자체는 정상 범위</span>
      </div>

      <div class="vcell">구역 아님<br>(일반 지역)</div>
      <div class="cell" style="background:var(--warning-soft);border-color:var(--warning)">
        <span class="pill pill--warning">WARNING</span>
        <span class="desc">보호구 위반만 단독 적용</span>
      </div>
      <div class="cell" style="background:var(--normal-soft);border-color:var(--normal)">
        <span class="pill pill--normal">NORMAL</span>
        <span class="desc">위반 사항 없음</span>
      </div>
    </div>
  </section>
</main>

<footer>
  AI CCTV 안전 판단 시스템 · 리스크 판단 로직 정리 — issue #91 기준, 2026-07-24 업데이트
</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
