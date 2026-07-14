"use client";

import { useSupabaseSession } from "../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../_components/LoginScreen";
import LogoutButton from "../_components/LogoutButton";

const TREE_BEFORE_HTML = `<span class="dim">app/
├── __init__.py
├── hrv_state_classifier.py     <span class="sz">306줄</span>
├── main.py                     <span class="sz">787줄</span>  ← 라우팅+데이터+로직 전부
├── multimodal_fusion.py        <span class="sz">307줄</span>
├── multimodal_model.py         <span class="sz">141줄</span>
├── reference_profiles.json
├── schemas.py                  <span class="sz">113줄</span>
└── service.py                  <span class="sz">454줄</span>  ← 채점 로직 전부

tests/  (없음)</span>`;

const TREE_AFTER_HTML = `<span class="dim">app/
├── __init__.py
├</span><span class="newf">── analysis.py                 <span class="sz">177줄</span></span><span class="dim">
├</span><span class="newf">── bio_fusion.py                <span class="sz">190줄</span></span><span class="dim">
├</span><span class="newf">── hrv_reference_profiles.py    <span class="sz">96줄</span></span><span class="dim">
├── hrv_state_classifier.py     <span class="sz">224줄</span>
├</span><span class="newf">── labels.py                    <span class="sz">118줄</span></span><span class="dim">
├── main.py                     <span class="sz">154줄</span>  ← 라우팅만
├</span><span class="newf">── matching.py                  <span class="sz">160줄</span></span><span class="dim">
├</span><span class="newf">── middleware_client.py         <span class="sz">76줄</span></span><span class="dim">
├</span><span class="newf">── mock_scenarios.py            <span class="sz">187줄</span></span><span class="dim">
├</span><span class="newf">── models.py                    <span class="sz">74줄</span></span><span class="dim">
├── multimodal_fusion.py        <span class="sz">342줄</span>  ← 유일한 판단엔진
├── multimodal_model.py         <span class="sz">141줄</span>
├</span><span class="newf">── risk_scoring.py              <span class="sz">69줄</span></span><span class="dim">
├── schemas.py                  <span class="sz">83줄</span>
├── service.py                  <span class="sz">166줄</span>  ← 얇은 어댑터
├</span><span class="newf">── thresholds.py                <span class="sz">12줄</span></span><span class="dim">
└</span><span class="newf">── utils.py                     <span class="sz">73줄</span></span><span class="dim">

tests/</span><span class="newf">
├── test_api.py                 <span class="sz">39줄</span>
├── test_matching.py            <span class="sz">69줄</span>
├── test_mock_scenarios.py      <span class="sz">31줄</span>
├── test_multimodal_fusion.py   <span class="sz">130줄</span>
└── test_service.py             <span class="sz">34줄</span></span>`;

export default function StructureOverviewReport() {
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

        .rpt-structure * { box-sizing: border-box; }
        .rpt-structure {
          margin: 0; background: var(--bg); color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif;
          line-height: 1.65; letter-spacing: -0.01em;
        }
        .rpt-structure .mono { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace; }

        .rpt-structure .topbar {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 24px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--border);
        }
        .rpt-structure .topbar__title { font-size: 13px; font-weight: 700; }
        .rpt-structure .topbar__tags { display: flex; gap: 6px; }
        .rpt-structure .tag { font-family: ui-monospace, monospace; font-size: 11px; padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-strong); color: var(--text-dim); white-space: nowrap; }

        .rpt-structure .toc { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 24px; background: var(--bg-soft); border-bottom: 1px solid var(--border); }
        .rpt-structure .toc a { font-family: ui-monospace, monospace; font-size: 11.5px; color: var(--text-dim); text-decoration: none; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--border-strong); }
        .rpt-structure .toc a:hover, .rpt-structure .toc a:focus-visible { color: var(--accent-strong); border-color: var(--accent); outline: none; }

        .rpt-structure main { max-width: 920px; margin: 0 auto; padding: 56px 24px 96px; }

        .rpt-structure .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
        .rpt-structure h1 { font-size: clamp(26px, 4vw, 38px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
        .rpt-structure .lede { font-size: 16px; color: var(--text-dim); max-width: 66ch; margin: 0; }

        .rpt-structure .stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
        .rpt-structure .stat { background: var(--surface); padding: 16px 16px; }
        .rpt-structure .stat__value { font-size: 20px; font-weight: 800; }
        .rpt-structure .stat__label { font-size: 11.5px; color: var(--text-dim); margin-top: 4px; }

        .rpt-structure section { margin-top: 64px; }
        .rpt-structure .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
        .rpt-structure .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
        .rpt-structure h2 { font-size: 21px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
        .rpt-structure .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 68ch; margin: 10px 0 22px; }

        .rpt-structure .trees { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .rpt-structure .tree-card { border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); overflow: hidden; }
        .rpt-structure .tree-card__head { padding: 10px 16px; border-bottom: 1px solid var(--border); font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); font-weight: 700; background: var(--bg-soft); }
        .rpt-structure .tree-card pre { margin: 0; padding: 16px; font-size: 12.5px; line-height: 1.85; overflow-x: auto; font-family: ui-monospace, monospace; }
        .rpt-structure .tree-card .dim { color: var(--text-dim); }
        .rpt-structure .tree-card .newf { color: var(--new); font-weight: 700; }
        .rpt-structure .tree-card .sz { color: var(--text-dim); font-size: 11px; }
        @media (max-width: 700px) { .rpt-structure .trees { grid-template-columns: 1fr; } }

        .rpt-structure .arch { display: flex; flex-direction: column; align-items: center; gap: 0; }
        .rpt-structure .arch-box { width: 100%; max-width: 640px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); padding: 14px 20px; text-align: center; }
        .rpt-structure .arch-box .t { font-family: ui-monospace, monospace; font-weight: 700; font-size: 14px; }
        .rpt-structure .arch-box .d { font-size: 12.5px; color: var(--text-dim); margin-top: 4px; }
        .rpt-structure .arch-arrow { color: var(--text-dim); font-size: 18px; line-height: 1; padding: 6px 0; }
        .rpt-structure .arch-mono { border-color: var(--critical); }
        .rpt-structure .arch-mono .t { color: var(--critical); }

        .rpt-structure .flow { display: flex; flex-direction: column; gap: 0; align-items: stretch; max-width: 640px; margin: 0 auto; }
        .rpt-structure .flow-row { display: flex; align-items: center; gap: 12px; }
        .rpt-structure .flow-label { width: 92px; flex-shrink: 0; font-family: ui-monospace, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); text-align: right; }
        .rpt-structure .flow-boxes { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }
        .rpt-structure .flow-box { border: 1px solid var(--border); background: var(--surface); border-radius: 8px; padding: 8px 12px; font-family: ui-monospace, monospace; font-size: 12px; font-weight: 700; box-shadow: var(--shadow); }
        .rpt-structure .flow-box.engine { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-strong); }
        .rpt-structure .flow-connector { display: flex; justify-content: flex-start; padding-left: 104px; color: var(--border-strong); font-size: 14px; }

        .rpt-structure .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
        .rpt-structure table { border-collapse: collapse; width: 100%; min-width: 620px; font-size: 13.5px; }
        .rpt-structure th, .rpt-structure td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
        .rpt-structure thead th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
        .rpt-structure tbody tr:last-child td { border-bottom: none; }
        .rpt-structure tbody tr:hover { background: var(--accent-soft); }
        .rpt-structure td.mono { font-family: ui-monospace, monospace; white-space: nowrap; }
        .rpt-structure td.num { font-family: ui-monospace, monospace; text-align: right; font-variant-numeric: tabular-nums; }

        .rpt-structure .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
        .rpt-structure .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .rpt-structure .pill--new { background: var(--accent-soft); color: var(--accent-strong); }
        .rpt-structure .pill--removed { background: var(--critical-soft); color: var(--critical); }
        .rpt-structure .pill--pending { background: var(--warning-soft); color: var(--warning); }

        .rpt-structure .barchart { display: grid; gap: 10px; margin-top: 4px; }
        .rpt-structure .bar-row { display: grid; grid-template-columns: 150px 1fr 130px; align-items: center; gap: 10px; }
        .rpt-structure .bar-row .name { font-size: 12.5px; color: var(--text-dim); font-family: ui-monospace, monospace; }
        .rpt-structure .bar-row .track { position: relative; height: 22px; border-radius: 6px; background: var(--bg-soft); overflow: hidden; }
        .rpt-structure .bar-row .fill { position: absolute; top:0; left:0; height: 100%; border-radius: 6px; }
        .rpt-structure .bar-row .fill.before { background: var(--text-dim); opacity: 0.35; }
        .rpt-structure .bar-row .fill.after { background: var(--accent); }
        .rpt-structure .bar-row .score { font-family: ui-monospace, monospace; font-size: 12px; text-align: right; }
        .rpt-structure .legend { display: flex; gap: 18px; font-size: 12px; color: var(--text-dim); margin: 10px 0 22px; }
        .rpt-structure .legend span { display: inline-flex; align-items: center; gap: 6px; }
        .rpt-structure .legend i { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }

        .rpt-structure .principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .rpt-structure .principle { border: 1px solid var(--border); border-radius: 12px; background: var(--surface); box-shadow: var(--shadow); padding: 18px; }
        .rpt-structure .principle .n { font-family: ui-monospace, monospace; font-size: 12px; color: var(--accent-strong); font-weight: 700; }
        .rpt-structure .principle h4 { margin: 6px 0 6px; font-size: 15px; }
        .rpt-structure .principle p { margin: 0; font-size: 13px; color: var(--text-dim); }
        @media (max-width: 700px) { .rpt-structure .principles { grid-template-columns: 1fr; } }

        .rpt-structure footer { max-width: 920px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }
      `}</style>

      <div className="rpt-structure">
        <div className="topbar">
          <div className="topbar__title">AI CCTV 안전 판단 시스템 — 구조 변화 정리</div>
          <div className="topbar__tags"><span className="tag">14 commits</span><span className="tag">#3 → #35</span></div>
        </div>
        <nav className="toc">
          <a href="#tree">디렉토리 구조</a>
          <a href="#arch">아키텍처</a>
          <a href="#created">생성된 파일</a>
          <a href="#removed">제거된 코드</a>
          <a href="#sizes">파일 크기 변화</a>
          <a href="#principles">정리</a>
        </nav>

        <main>
          <p className="eyebrow">전체 요약 · 구조 변화</p>
          <h1>모놀리식 두 파일에서, 계층이 있는 판단 파이프라인으로</h1>
          <p className="lede">
            처음 합류했을 때 이 서버는 <span className="mono">main.py</span> 한 파일이 라우팅부터 목업 데이터, 분석,
            매칭, 미들웨어 통신까지 다 하고 있었고, <span className="mono">service.py</span> 한 함수가 채점 로직 전체를
            쥐고 있었습니다. 14개 PR을 거쳐 지금은 역할이 나뉜 파이프라인 구조가 됐고, 판단 로직은
            <span className="mono">fuse()</span> 하나로 모였습니다.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat__value">8 → 19</div><div className="stat__label">app 파일 수</div></div>
            <div className="stat"><div className="stat__value">0 → 5</div><div className="stat__label">테스트 파일 수</div></div>
            <div className="stat"><div className="stat__value">0 → 37</div><div className="stat__label">테스트 함수 수</div></div>
            <div className="stat"><div className="stat__value">+1693 / -1139</div><div className="stat__label">누적 라인 변경</div></div>
            <div className="stat"><div className="stat__value">14개</div><div className="stat__label">PR (#4 ~ #35)</div></div>
          </div>

          <section id="tree">
            <div className="section__head"><span className="section__num">01</span><h2>디렉토리 구조 — Before / After</h2></div>
            <p className="section__desc">회색은 처음부터 있던 파일, 파란색은 리팩토링 과정에서 새로 생긴 파일입니다.</p>

            <div className="trees">
              <div className="tree-card">
                <div className="tree-card__head">합류 시점 (PR #4 이전)</div>
                <pre dangerouslySetInnerHTML={{ __html: TREE_BEFORE_HTML }} />
              </div>

              <div className="tree-card">
                <div className="tree-card__head">지금 (HEAD)</div>
                <pre dangerouslySetInnerHTML={{ __html: TREE_AFTER_HTML }} />
              </div>
            </div>
          </section>

          <section id="arch">
            <div className="section__head"><span className="section__num">02</span><h2>아키텍처 — 뭉쳐있던 것에서 계층으로</h2></div>
            <p className="section__desc">가장 큰 변화는 파일 개수가 아니라 <strong>&quot;판단이 어디서 내려지는가&quot;</strong>가 하나로 좁혀졌다는 점입니다.</p>

            <div className="arch" style={{ marginBottom: "36px" }}>
              <div className="arch-box arch-mono"><div className="t">main.py</div><div className="d">라우팅 · 목업데이터 · Pydantic 모델 · 유틸 · 분석 · 매칭 · 미들웨어 통신</div></div>
              <div className="arch-arrow">↓</div>
              <div className="arch-box arch-mono"><div className="t">service.py</div><div className="d">calculate_risk() 하나가 모든 채점(중복 다수) 담당</div></div>
            </div>

            <div className="flow">
              <div className="flow-row">
                <div className="flow-label">Router</div>
                <div className="flow-boxes"><div className="flow-box">main.py</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Data</div>
                <div className="flow-boxes"><div className="flow-box">models.py</div><div className="flow-box">mock_scenarios.py</div><div className="flow-box">utils.py</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Pipeline</div>
                <div className="flow-boxes"><div className="flow-box">analysis.py</div><div className="flow-box">matching.py</div><div className="flow-box">middleware_client.py</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Adapter</div>
                <div className="flow-boxes"><div className="flow-box">service.py</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Fusion</div>
                <div className="flow-boxes"><div className="flow-box">bio_fusion.py</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Judgment</div>
                <div className="flow-boxes"><div className="flow-box engine">multimodal_fusion.py · fuse()</div></div>
              </div>
              <div className="flow-connector">│</div>
              <div className="flow-row">
                <div className="flow-label">Vocabulary</div>
                <div className="flow-boxes"><div className="flow-box">labels.py</div><div className="flow-box">thresholds.py</div></div>
              </div>
            </div>
          </section>

          <section id="created">
            <div className="section__head"><span className="section__num">03</span><h2>생성된 파일 (16개)</h2></div>
            <p className="section__desc">전부 &quot;기존 파일 안에 있던 걸 역할별로 꺼낸&quot; 파일입니다 — 그린필드 신규 기능은 없습니다.</p>

            <div className="table-wrap">
              <table>
                <thead><tr><th>파일</th><th>PR</th><th>어디서 나왔나</th></tr></thead>
                <tbody>
                  <tr><td className="mono">models.py</td><td className="mono">#8</td><td>main.py에 섞여있던 Pydantic 모델 정의</td></tr>
                  <tr><td className="mono">mock_scenarios.py</td><td className="mono">#8</td><td>main.py에 섞여있던 더미/목업 시나리오 데이터</td></tr>
                  <tr><td className="mono">hrv_reference_profiles.py</td><td className="mono">#8</td><td>main.py에 섞여있던 HRV 기준 프로필 데이터</td></tr>
                  <tr><td className="mono">utils.py</td><td className="mono">#8, #10</td><td>main.py에 흩어져있던 공통 유틸 함수</td></tr>
                  <tr><td className="mono">analysis.py</td><td className="mono">#12</td><td>main.py의 분석 오케스트레이션 로직</td></tr>
                  <tr><td className="mono">matching.py</td><td className="mono">#12</td><td>main.py의 bio-cctv 매칭 로직</td></tr>
                  <tr><td className="mono">middleware_client.py</td><td className="mono">#12</td><td>main.py의 미들웨어 HTTP 통신 로직</td></tr>
                  <tr><td className="mono">risk_scoring.py</td><td className="mono">#16</td><td>service.py의 임계값 채점 로직</td></tr>
                  <tr><td className="mono">bio_fusion.py</td><td className="mono">#16</td><td>service.py의 생체 상태 융합 로직</td></tr>
                  <tr><td className="mono">labels.py</td><td className="mono">#4</td><td>schemas.py / service.py / multimodal_fusion.py에 흩어진 라벨 문자열 → enum</td></tr>
                  <tr><td className="mono">thresholds.py</td><td className="mono">#4</td><td>multimodal_fusion.py에 있던 매직넘버 → 상수</td></tr>
                  <tr><td className="mono">tests/test_api.py</td><td className="mono">#20</td><td>Swagger로 손으로 확인하던 엔드포인트 검증</td></tr>
                  <tr><td className="mono">tests/test_matching.py</td><td className="mono">#20</td><td>matching.py 단위 테스트</td></tr>
                  <tr><td className="mono">tests/test_mock_scenarios.py</td><td className="mono">#20</td><td>시나리오 baseline 회귀 테스트</td></tr>
                  <tr><td className="mono">tests/test_service.py</td><td className="mono">#20</td><td>service.py / risk_scoring.py 단위 테스트</td></tr>
                  <tr><td className="mono">tests/test_multimodal_fusion.py</td><td className="mono">#34</td><td>Level 1~5 기준표 + 갭 케이스 회귀 테스트</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="removed">
            <div className="section__head"><span className="section__num">04</span><h2>제거된 코드</h2></div>
            <p className="section__desc">파일 분리와는 별개로, 존재 자체가 문제였던 코드입니다 — 중복 채점 버그와 죽은 코드.</p>

            <div className="table-wrap">
              <table>
                <thead><tr><th>대상</th><th>위치</th><th>왜 제거됐나</th><th>상태</th></tr></thead>
                <tbody>
                  <tr>
                    <td className="mono">score_video_action<br />clamp_score<br />classify_risk<br />build_alert_message</td>
                    <td className="mono">risk_scoring.py</td>
                    <td>System B(fuse())가 유일한 판단 엔진이 되면서, System A가 쓰던 채점 함수 4개가 통째로 죽은 코드가 됨</td>
                    <td><span className="pill pill--removed">제거됨 · PR #35</span></td>
                  </tr>
                  <tr>
                    <td className="mono">BioSignal(구) / SkeletonKeypoint / Skeleton</td>
                    <td className="mono">schemas.py</td>
                    <td>어디서도 참조되지 않는 죽은 Pydantic 클래스 3개</td>
                    <td><span className="pill pill--removed">제거됨 · PR #14</span></td>
                  </tr>
                  <tr>
                    <td className="mono">derived_states 가산점 로직</td>
                    <td className="mono">service.py</td>
                    <td>원본 지표로 이미 채점된 걸 파생 상태로 또 가산점 채점하던 중복 버그</td>
                    <td><span className="pill pill--removed">제거됨 · PR #21</span></td>
                  </tr>
                  <tr>
                    <td className="mono">agreement(+15) / contradiction(×0.7) 보정</td>
                    <td className="mono">multimodal_fusion.py</td>
                    <td>_decide()의 규칙 판정과 충돌해 등급을 틀리게 만들던 보정 로직</td>
                    <td><span className="pill pill--removed">제거됨 · PR #21</span></td>
                  </tr>
                  <tr>
                    <td className="mono">WorkerEvent.VEST_CHECK</td>
                    <td className="mono">labels.py / multimodal_fusion.py</td>
                    <td>VIDEO_RISK 딕셔너리에 키만 남아있고, 실제로 이 action을 만드는 코드 경로가 없음</td>
                    <td><span className="pill pill--pending">발견됨 · 제거 대기</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="sizes">
            <div className="section__head"><span className="section__num">05</span><h2>파일 크기 변화 — 핵심 3개</h2></div>
            <p className="section__desc">막대가 짧아진 파일들은 로직이 사라진 게 아니라, 옆의 새 파일로 옮겨가거나 죽은 코드가 걷힌 결과입니다.</p>

            <div className="legend"><span><i style={{ background: "var(--text-dim)", opacity: 0.35 }}></i>합류 시점</span><span><i style={{ background: "var(--accent)" }}></i>지금</span></div>

            <div className="barchart">
              <div className="bar-row">
                <div className="name">main.py</div>
                <div className="track"><div className="fill before" style={{ width: "100%" }}></div><div className="fill after" style={{ width: "19.6%" }}></div></div>
                <div className="score mono">787 → 154</div>
              </div>
              <div className="bar-row">
                <div className="name">service.py</div>
                <div className="track"><div className="fill before" style={{ width: "100%" }}></div><div className="fill after" style={{ width: "36.6%" }}></div></div>
                <div className="score mono">454 → 166</div>
              </div>
              <div className="bar-row">
                <div className="name">risk_scoring.py</div>
                <div className="track"><div className="fill before" style={{ width: "100%", background: "transparent" }}></div><div className="fill after" style={{ width: "49.6%" }}></div></div>
                <div className="score mono">(신규 139) → 69</div>
              </div>
            </div>

            <div className="table-wrap" style={{ marginTop: "24px" }}>
              <table>
                <thead><tr><th>파일</th><th>합류 시점</th><th>지금</th><th>비고</th></tr></thead>
                <tbody>
                  <tr><td className="mono">main.py</td><td className="num">787</td><td className="num">154</td><td>#8→#10→#12 세 단계에 걸쳐 라우팅만 남김</td></tr>
                  <tr><td className="mono">service.py</td><td className="num">454</td><td className="num">166</td><td>#16 채점 로직 분리 → #35 fuse() 어댑터화</td></tr>
                  <tr><td className="mono">risk_scoring.py</td><td className="num">— (#16 신규 139)</td><td className="num">69</td><td>#35에서 죽은 함수 4개 삭제</td></tr>
                  <tr><td className="mono">multimodal_fusion.py</td><td className="num">307</td><td className="num">342</td><td>유일한 판단 엔진이 되며 Level 1~5 규칙 추가로 순증가</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="principles">
            <div className="section__head"><span className="section__num">06</span><h2>정리하면</h2></div>
            <div className="principles">
              <div className="principle">
                <div className="n">01</div>
                <h4>라우터는 라우팅만</h4>
                <p>main.py가 하던 6가지 역할이 models / mock_scenarios / utils / analysis / matching / middleware_client로 나뉘었습니다.</p>
              </div>
              <div className="principle">
                <div className="n">02</div>
                <h4>판단은 fuse() 하나로</h4>
                <p>System A(service.py)와 System B(multimodal_fusion.py)로 나뉘어 있던 판단 로직이 fuse() 단일 엔진으로 좁혀지고, service.py는 그 결과를 감싸는 어댑터가 됐습니다.</p>
              </div>
              <div className="principle">
                <div className="n">03</div>
                <h4>회귀 테스트로 고정</h4>
                <p>테스트 0개에서 시작해, 지금은 37개 테스트가 baseline과 Level 1~5 표의 모든 조합을 회귀로 잡아냅니다.</p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          AI CCTV 안전 판단 시스템 · 구조 변화 정리 — PR #4 ~ #35 기준 (git diff 1900edc..HEAD 실측)
        </footer>
      </div>
    </>
  );
}
