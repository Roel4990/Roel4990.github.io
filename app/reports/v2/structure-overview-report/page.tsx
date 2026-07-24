import type { Metadata } from "next";

export const metadata: Metadata = { title: "구조 변화 정리 — 전체 리팩토링 여정" };

const documentHtml = String.raw`<title>구조 변화 정리 — 전체 리팩토링 여정</title>
<style>
  :root {
    --bg: #F2F4F3; --bg-soft: #E7EBE9; --surface: #FFFFFF; --text: #191D20; --text-dim: #5B6368;
    --border: rgba(25,29,32,0.12); --border-strong: rgba(25,29,32,0.22);
    --accent: #2C6E8C; --accent-strong: #1F5670; --accent-soft: rgba(44,110,140,0.10);
    --critical: #C8402A; --critical-soft: rgba(200,64,42,0.12);
    --warning: #C97A1E; --warning-soft: rgba(201,122,30,0.13);
    --caution: #93791C; --caution-soft: rgba(147,121,28,0.14);
    --normal: #2F7D5A; --normal-soft: rgba(47,125,90,0.12);
    --new: #2C6E8C;
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
      --new: #6BA8C7;
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
    --new: #2C6E8C;
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
    --new: #6BA8C7;
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

  main { max-width: 920px; margin: 0 auto; padding: 56px 24px 96px; }

  .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
  h1 { font-size: clamp(26px, 4vw, 38px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
  .lede { font-size: 16px; color: var(--text-dim); max-width: 66ch; margin: 0; }

  .stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
  .stat { background: var(--surface); padding: 16px 16px; }
  .stat__value { font-size: 20px; font-weight: 800; }
  .stat__label { font-size: 11.5px; color: var(--text-dim); margin-top: 4px; }

  section { margin-top: 64px; }
  .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
  .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
  h2 { font-size: 21px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
  .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 68ch; margin: 10px 0 22px; }

  /* directory tree */
  .trees { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .tree-card { border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); overflow: hidden; }
  .tree-card__head { padding: 10px 16px; border-bottom: 1px solid var(--border); font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); font-weight: 700; background: var(--bg-soft); }
  .tree-card pre { margin: 0; padding: 16px; font-size: 12.5px; line-height: 1.85; overflow-x: auto; font-family: ui-monospace, monospace; }
  .tree-card .dim { color: var(--text-dim); }
  .tree-card .newf { color: var(--new); font-weight: 700; }
  .tree-card .sz { color: var(--text-dim); font-size: 11px; }
  @media (max-width: 700px) { .trees { grid-template-columns: 1fr; } }

  /* architecture diagram */
  .arch { display: flex; flex-direction: column; align-items: center; gap: 0; }
  .arch-box { width: 100%; max-width: 640px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); padding: 14px 20px; text-align: center; }
  .arch-box .t { font-family: ui-monospace, monospace; font-weight: 700; font-size: 14px; }
  .arch-box .d { font-size: 12.5px; color: var(--text-dim); margin-top: 4px; }
  .arch-arrow { color: var(--text-dim); font-size: 18px; line-height: 1; padding: 6px 0; }
  .arch-mono { border-color: var(--critical); }
  .arch-mono .t { color: var(--critical); }

  .flow { display: flex; flex-direction: column; gap: 0; align-items: stretch; max-width: 640px; margin: 0 auto; }
  .flow-row { display: flex; align-items: center; gap: 12px; }
  .flow-label { width: 92px; flex-shrink: 0; font-family: ui-monospace, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); text-align: right; }
  .flow-boxes { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }
  .flow-box { border: 1px solid var(--border); background: var(--surface); border-radius: 8px; padding: 8px 12px; font-family: ui-monospace, monospace; font-size: 12px; font-weight: 700; box-shadow: var(--shadow); }
  .flow-box.engine { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-strong); }
  .flow-connector { display: flex; justify-content: flex-start; padding-left: 104px; color: var(--border-strong); font-size: 14px; }
  .note { margin-top: 20px; padding: 14px 16px; border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 9px; background: var(--accent-soft); color: var(--text-dim); font-size: 13.5px; }
  .note strong { color: var(--text); }

  .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
  table { border-collapse: collapse; width: 100%; min-width: 620px; font-size: 13.5px; }
  th, td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
  thead th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--accent-soft); }
  td.mono { font-family: ui-monospace, monospace; white-space: nowrap; }
  td.num { font-family: ui-monospace, monospace; text-align: right; font-variant-numeric: tabular-nums; }

  .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
  .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .pill--new { background: var(--accent-soft); color: var(--accent-strong); }
  .pill--removed { background: var(--critical-soft); color: var(--critical); }
  .pill--pending { background: var(--warning-soft); color: var(--warning); }

  .barchart { display: grid; gap: 10px; margin-top: 4px; }
  .bar-row { display: grid; grid-template-columns: 150px 1fr 130px; align-items: center; gap: 10px; }
  .bar-row .name { font-size: 12.5px; color: var(--text-dim); font-family: ui-monospace, monospace; }
  .bar-row .track { position: relative; height: 22px; border-radius: 6px; background: var(--bg-soft); overflow: hidden; }
  .bar-row .fill { position: absolute; top:0; left:0; height: 100%; border-radius: 6px; }
  .bar-row .fill.before { background: var(--text-dim); opacity: 0.35; }
  .bar-row .fill.after { background: var(--accent); }
  .bar-row .score { font-family: ui-monospace, monospace; font-size: 12px; text-align: right; }
  .legend { display: flex; gap: 18px; font-size: 12px; color: var(--text-dim); margin: 10px 0 22px; }
  .legend span { display: inline-flex; align-items: center; gap: 6px; }
  .legend i { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }

  .principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .principle { border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); padding: 18px; }
  .principle .n { font-family: ui-monospace, monospace; font-size: 12px; color: var(--accent-strong); font-weight: 700; }
  .principle h4 { margin: 6px 0 6px; font-size: 15px; }
  .principle p { margin: 0; font-size: 13px; color: var(--text-dim); }
  @media (max-width: 700px) { .principles { grid-template-columns: 1fr; } }

  footer { max-width: 920px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }
</style>

<div class="topbar">
  <div class="topbar__title">AI CCTV 안전 판단 시스템 — 구조 변화 정리</div>
  <div class="topbar__tags"><span class="tag">현재 코드 기준</span><span class="tag">2026-07-24</span></div>
</div>
<nav class="toc">
  <a href="#tree">디렉토리 구조</a>
  <a href="#arch">아키텍처</a>
  <a href="#created">생성된 파일</a>
  <a href="#removed">제거된 코드</a>
  <a href="#sizes">파일 크기 변화</a>
  <a href="#principles">정리</a>
</nav>

<main>
  <p class="eyebrow">전체 요약 · 구조 변화</p>
  <h1>모놀리식 두 파일에서, 계층이 있는 판단 파이프라인으로</h1>
  <p class="lede">
    처음 합류했을 때 이 서버는 <span class="mono">main.py</span> 한 파일이 라우팅부터 목업 데이터, 분석,
    매칭, 미들웨어 통신까지 다 하고 있었고, <span class="mono">service.py</span> 한 함수가 채점 로직 전체를
    쥐고 있었습니다. 현재는 조회·검증·매칭·중복 방지·분석·전송이 역할별 모듈로 나뉘었고,
    최종 위험 판단은 <span class="mono">fuse()</span> 하나로 모였습니다.
  </p>

  <div class="stats">
    <div class="stat"><div class="stat__value">8 → 18</div><div class="stat__label">app 파일 수</div></div>
    <div class="stat"><div class="stat__value">0 → 9</div><div class="stat__label">단위 테스트 파일 수</div></div>
    <div class="stat"><div class="stat__value">0 → 131</div><div class="stat__label">수집된 pytest 케이스</div></div>
    <div class="stat"><div class="stat__value">±30초</div><div class="stat__label">Bio/CCTV 시간 매칭</div></div>
    <div class="stat"><div class="stat__value">120초</div><div class="stat__label">Fusion 중복 키 TTL</div></div>
  </div>

  <section id="tree">
    <div class="section__head"><span class="section__num">01</span><h2>디렉토리 구조 — Before / After</h2></div>
    <p class="section__desc">회색은 처음부터 있던 파일, 파란색은 리팩토링 과정에서 새로 생긴 파일입니다.</p>

    <div class="trees">
      <div class="tree-card">
        <div class="tree-card__head">합류 시점 (PR #4 이전)</div>
        <pre><span class="dim">app/
├── __init__.py
├── hrv_state_classifier.py     <span class="sz">306줄</span>
├── main.py                     <span class="sz">787줄</span>  ← 라우팅+데이터+로직 전부
├── multimodal_fusion.py        <span class="sz">307줄</span>
├── multimodal_model.py         <span class="sz">141줄</span>
├── reference_profiles.json
├── schemas.py                  <span class="sz">113줄</span>
└── service.py                  <span class="sz">454줄</span>  ← 채점 로직 전부

tests/  (없음)</span></pre>
      </div>

      <div class="tree-card">
        <div class="tree-card__head">지금 (2026-07-24)</div>
        <pre><span class="dim">app/
├── __init__.py
├</span><span class="newf">── analysis.py                 <span class="sz">288줄</span></span><span class="dim">
├</span><span class="newf">── bio_fusion.py                <span class="sz">183줄</span></span><span class="dim">
├</span><span class="newf">── hrv_reference_profiles.py    <span class="sz">96줄</span></span><span class="dim">
├── hrv_state_classifier.py     <span class="sz">224줄</span>
├</span><span class="newf">── labels.py                    <span class="sz">132줄</span></span><span class="dim">
├── main.py                     <span class="sz">154줄</span>  ← 라우팅만
├</span><span class="newf">── matching.py                  <span class="sz">404줄</span></span><span class="dim">  ← 검증·매칭·컨텍스트 생성
├</span><span class="newf">── middleware_client.py         <span class="sz">148줄</span></span><span class="dim">  ← GET/POST 계약 변환
├</span><span class="newf">── mock_scenarios.py            <span class="sz">190줄</span></span><span class="dim">
├</span><span class="newf">── models.py                    <span class="sz">131줄</span></span><span class="dim">
├── multimodal_fusion.py        <span class="sz">390줄</span>  ← 유일한 판단엔진
├── multimodal_model.py         <span class="sz">141줄</span>
├</span><span class="newf">── risk_scoring.py              <span class="sz">69줄</span></span><span class="dim">
├── reference_profiles.json     <span class="sz">35줄</span>
├── schemas.py                  <span class="sz">80줄</span>
├── service.py                  <span class="sz">151줄</span>  ← 요청/응답 어댑터
├</span><span class="newf">── thresholds.py                <span class="sz">12줄</span></span><span class="dim">
└</span><span class="newf">── utils.py                     <span class="sz">73줄</span></span><span class="dim">

tests/</span><span class="newf">
├── test_analysis_polling.py    <span class="sz">573줄</span>
├── test_api.py                 <span class="sz">39줄</span>
├── test_cctv_matching.py       <span class="sz">623줄</span>
├── test_labels.py              <span class="sz">22줄</span>
├── test_matching.py            <span class="sz">311줄</span>
├── test_middleware_client.py   <span class="sz">40줄</span>
├── test_mock_scenarios.py      <span class="sz">31줄</span>
├── test_multimodal_fusion.py   <span class="sz">285줄</span>
└── test_service.py             <span class="sz">114줄</span></span></pre>
      </div>
    </div>
  </section>

  <section id="arch">
    <div class="section__head"><span class="section__num">02</span><h2>아키텍처 — 뭉쳐있던 것에서 계층으로</h2></div>
    <p class="section__desc">가장 큰 변화는 판단 엔진을 하나로 유지하면서, 그 앞뒤의 데이터 계약과 실행 제어가 명확해졌다는 점입니다.</p>

    <div class="arch" style="margin-bottom:36px;">
      <div class="arch-box arch-mono"><div class="t">main.py</div><div class="d">라우팅 · 목업데이터 · Pydantic 모델 · 유틸 · 분석 · 매칭 · 미들웨어 통신</div></div>
      <div class="arch-arrow">↓</div>
      <div class="arch-box arch-mono"><div class="t">service.py</div><div class="d">calculate_risk() 하나가 모든 채점(중복 다수) 담당</div></div>
    </div>

    <div class="flow">
      <div class="flow-row">
        <div class="flow-label">Router</div>
        <div class="flow-boxes"><div class="flow-box">main.py</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Poll</div>
        <div class="flow-boxes"><div class="flow-box">middleware_client.py · Bio/CCTV 병렬 GET</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Match</div>
        <div class="flow-boxes"><div class="flow-box">matching.py · 최신 Bio 선택</div><div class="flow-box">color_group</div><div class="flow-box">timestamp ±30초</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Control</div>
        <div class="flow-boxes"><div class="flow-box">analysis.py · Fusion만 선별</div><div class="flow-box">A+B 조합 중복 방지</div><div class="flow-box">실패 단위 격리</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Adapter</div>
        <div class="flow-boxes"><div class="flow-box">service.py</div><div class="flow-box">bio_fusion.py</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Judgment</div>
        <div class="flow-boxes"><div class="flow-box engine">multimodal_fusion.py · fuse()</div></div>
      </div>
      <div class="flow-connector">│</div>
      <div class="flow-row">
        <div class="flow-label">Report</div>
        <div class="flow-boxes"><div class="flow-box">middleware_client.py · POST 계약 변환</div><div class="flow-box">Middleware 전송</div></div>
      </div>
    </div>
    <div class="note">
      <strong>현재 전송 정책 —</strong> Bio 단독 또는 CCTV 단독 컨텍스트는 최종 POST 대상이 아닙니다.
      Bio 레코드와 CCTV 객체가 실제로 매칭된 Fusion 컨텍스트만 분석·전송하며,
      중복 여부는 <span class="mono">(watch_id, bio_id, cctv_object_key)</span> 조합으로 판단합니다.
    </div>
  </section>

  <section id="created">
    <div class="section__head"><span class="section__num">03</span><h2>현재 핵심 모듈 역할</h2></div>
    <p class="section__desc">과거 생성 PR보다 현재 실행 시 각 파일이 맡는 책임을 기준으로 정리했습니다.</p>

    <div class="table-wrap">
      <table>
        <thead><tr><th>파일</th><th>계층</th><th>현재 책임</th></tr></thead>
        <tbody>
          <tr><td class="mono">main.py</td><td>API</td><td>FastAPI 라우팅, 상태 확인, 수동 분석 실행, startup 폴링 등록</td></tr>
          <tr><td class="mono">middleware_client.py</td><td>통신</td><td>recent 응답 envelope 파싱, Bio/CCTV 조회, 최종 POST payload 생성</td></tr>
          <tr><td class="mono">matching.py</td><td>매칭</td><td>항목·객체 오류 격리, 워치별 최신 Bio 선택, color_group·±30초 매칭, CCTV area 우선</td></tr>
          <tr><td class="mono">analysis.py</td><td>오케스트레이션</td><td>병렬 조회, Fusion 컨텍스트 선별, 조합 중복 방지, 작업자별 분석·POST 오류 격리</td></tr>
          <tr><td class="mono">service.py</td><td>어댑터</td><td>입력 지표와 파생 상태를 구성하고 Fusion 결과를 API 응답 형태로 조립</td></tr>
          <tr><td class="mono">bio_fusion.py</td><td>어댑터</td><td>생체 분류 결과와 영상 객체를 fuse() 입력으로 변환하고 geofence 표시 정보 생성</td></tr>
          <tr><td class="mono">multimodal_fusion.py</td><td>판단</td><td>Bio·Video·PPE 점수, 위험구역 보정, severity·권고·근거 최종 결정</td></tr>
          <tr><td class="mono">hrv_state_classifier.py</td><td>생체 분류</td><td>HRV 지표를 기준 프로필과 비교해 normal/syncope/arrhythmia/fatigue 분류</td></tr>
          <tr><td class="mono">models.py / schemas.py</td><td>계약</td><td>내부 WorkerContext와 외부 Analyze 요청·응답 데이터 모델 정의</td></tr>
          <tr><td class="mono">labels.py / thresholds.py</td><td>공통 정의</td><td>허용 라벨, 구역, 행동, 위험 등급과 숫자 경계 관리</td></tr>
          <tr><td class="mono">mock_scenarios.py</td><td>개발 지원</td><td>수동 확인과 baseline 테스트를 위한 고정 시나리오 제공</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="removed">
    <div class="section__head"><span class="section__num">04</span><h2>제거된 코드</h2></div>
    <p class="section__desc">파일 분리와는 별개로, 존재 자체가 문제였던 코드입니다 — 중복 채점 버그와 죽은 코드.</p>

    <div class="table-wrap">
      <table>
        <thead><tr><th>대상</th><th>위치</th><th>왜 제거됐나</th><th>상태</th></tr></thead>
        <tbody>
          <tr>
            <td class="mono">score_video_action<br>clamp_score<br>classify_risk<br>build_alert_message</td>
            <td class="mono">risk_scoring.py</td>
            <td>System B(fuse())가 유일한 판단 엔진이 되면서, System A가 쓰던 채점 함수 4개가 통째로 죽은 코드가 됨</td>
            <td><span class="pill pill--removed">제거됨 · PR #35</span></td>
          </tr>
          <tr>
            <td class="mono">BioSignal(구) / SkeletonKeypoint / Skeleton</td>
            <td class="mono">schemas.py</td>
            <td>어디서도 참조되지 않는 죽은 Pydantic 클래스 3개</td>
            <td><span class="pill pill--removed">제거됨 · PR #14</span></td>
          </tr>
          <tr>
            <td class="mono">derived_states 가산점 로직</td>
            <td class="mono">service.py</td>
            <td>원본 지표로 이미 채점된 걸 파생 상태로 또 가산점 채점하던 중복 버그</td>
            <td><span class="pill pill--removed">제거됨 · PR #21</span></td>
          </tr>
          <tr>
            <td class="mono">agreement(+15) / contradiction(×0.7) 보정</td>
            <td class="mono">multimodal_fusion.py</td>
            <td>_decide()의 규칙 판정과 충돌해 등급을 틀리게 만들던 보정 로직</td>
            <td><span class="pill pill--removed">제거됨 · PR #21</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="note">
      <strong>현재 확인이 필요한 잔여 구조 —</strong>
      <span class="mono">matching.py</span>에는 CCTV 단독 컨텍스트 생성 함수가 남아 있지만,
      현재 <span class="mono">analysis.py</span> 실행 경로는 Fusion 컨텍스트만 전송합니다.
      향후 정책이 확정되면 CCTV 단독 지원 코드의 유지 여부를 별도로 결정할 수 있습니다.
    </div>
  </section>

  <section id="sizes">
    <div class="section__head"><span class="section__num">05</span><h2>파일 크기 변화 — 핵심 3개</h2></div>
    <p class="section__desc">막대가 짧아진 파일들은 로직이 사라진 게 아니라, 옆의 새 파일로 옮겨가거나 죽은 코드가 걷힌 결과입니다.</p>

    <div class="legend"><span><i style="background:var(--text-dim);opacity:.35"></i>합류 시점</span><span><i style="background:var(--accent)"></i>지금</span></div>

    <div class="barchart">
      <div class="bar-row">
        <div class="name">main.py</div>
        <div class="track"><div class="fill before" style="width:100%"></div><div class="fill after" style="width:19.6%"></div></div>
        <div class="score mono">787 → 154</div>
      </div>
      <div class="bar-row">
        <div class="name">service.py</div>
        <div class="track"><div class="fill before" style="width:100%"></div><div class="fill after" style="width:33.3%"></div></div>
        <div class="score mono">454 → 151</div>
      </div>
      <div class="bar-row">
        <div class="name">risk_scoring.py</div>
        <div class="track"><div class="fill before" style="width:100%;background:transparent"></div><div class="fill after" style="width:49.6%"></div></div>
        <div class="score mono">(신규 139) → 69</div>
      </div>
    </div>

    <div class="table-wrap" style="margin-top:24px;">
      <table>
        <thead><tr><th>파일</th><th>합류 시점</th><th>지금</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td class="mono">main.py</td><td class="num">787</td><td class="num">154</td><td>#8→#10→#12 세 단계에 걸쳐 라우팅만 남김</td></tr>
          <tr><td class="mono">service.py</td><td class="num">454</td><td class="num">151</td><td>채점 로직을 분리하고 현재는 fuse() 결과 조립 어댑터 역할</td></tr>
          <tr><td class="mono">risk_scoring.py</td><td class="num">— (#16 신규 139)</td><td class="num">69</td><td>#35에서 죽은 함수 4개 삭제</td></tr>
          <tr><td class="mono">multimodal_fusion.py</td><td class="num">307</td><td class="num">390</td><td>유일한 판단 엔진으로 Bio·Video·PPE·법령 근거 규칙을 통합</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="principles">
    <div class="section__head"><span class="section__num">06</span><h2>정리하면</h2></div>
    <div class="principles">
      <div class="principle">
        <div class="n">01</div>
        <h4>라우터는 라우팅만</h4>
        <p>main.py가 하던 6가지 역할이 models / mock_scenarios / utils / analysis / matching / middleware_client로 나뉘었습니다.</p>
      </div>
      <div class="principle">
        <div class="n">02</div>
        <h4>판단은 fuse() 하나로</h4>
        <p>System A(service.py)와 System B(multimodal_fusion.py)로 나뉘어 있던 판단 로직이 fuse() 단일 엔진으로 좁혀지고, service.py는 그 결과를 감싸는 어댑터가 됐습니다.</p>
      </div>
      <div class="principle">
        <div class="n">03</div>
        <h4>회귀 테스트로 고정</h4>
        <p>테스트 0개에서 시작해, 지금은 pytest가 9개 파일에서 131개 케이스를 수집해 API·매칭·폴링·Fusion·POST 계약을 회귀 검증합니다.</p>
      </div>
    </div>
  </section>
</main>

<footer>
  AI CCTV 안전 판단 시스템 · 구조 변화 정리 — 2026-07-24 현재 코드 및 pytest 수집 결과 기준
</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
