import type { Metadata } from "next";

export const metadata: Metadata = { title: "labels.py / thresholds.py 정리" };

const documentHtml = String.raw`<title>labels.py / thresholds.py 정리</title>
<style>
  :root {
    --bg: #F2F4F3; --bg-soft: #E7EBE9; --surface: #FFFFFF; --text: #191D20; --text-dim: #5B6368;
    --border: rgba(25,29,32,0.12); --border-strong: rgba(25,29,32,0.22);
    --accent: #2C6E8C; --accent-strong: #1F5670; --accent-soft: rgba(44,110,140,0.10);
    --critical: #C8402A; --critical-soft: rgba(200,64,42,0.12);
    --warning: #C97A1E; --warning-soft: rgba(201,122,30,0.13);
    --caution: #93791C; --caution-soft: rgba(147,121,28,0.14);
    --normal: #2F7D5A; --normal-soft: rgba(47,125,90,0.12);
    --dead: #8A5A9C; --dead-soft: rgba(138,90,156,0.12);
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
      --dead: #B98FCB; --dead-soft: rgba(185,143,203,0.16);
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
    --dead: #8A5A9C; --dead-soft: rgba(138,90,156,0.12);
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
    --dead: #B98FCB; --dead-soft: rgba(185,143,203,0.16);
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

  main { max-width: 860px; margin: 0 auto; padding: 56px 24px 96px; }

  .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
  h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
  .lede { font-size: 16px; color: var(--text-dim); max-width: 62ch; margin: 0; }

  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
  .stat { background: var(--surface); padding: 16px 18px; }
  .stat__value { font-size: 22px; font-weight: 800; }
  .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

  section { margin-top: 60px; }
  .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
  .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
  h2 { font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
  .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 64ch; margin: 10px 0 20px; }

  blockquote.origin {
    border-left: 3px solid var(--border-strong); margin: 0; padding: 10px 16px;
    background: var(--bg-soft); border-radius: 0 8px 8px 0; color: var(--text-dim); font-size: 13px;
  }

  .group { border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); padding: 22px 24px; margin-top: 18px; scroll-margin-top: 90px; }
  .group__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 4px; }
  .group__name { font-family: ui-monospace, monospace; font-size: 14.5px; font-weight: 700; }
  .group__origin { font-size: 11.5px; color: var(--text-dim); }
  .group__desc { font-size: 13.5px; color: var(--text-dim); margin: 8px 0 16px; }

  .enum-table { border-collapse: collapse; width: 100%; font-size: 13px; margin-top: 4px; }
  .enum-table th, .enum-table td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); }
  .enum-table thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); font-weight: 700; }
  .enum-table tbody tr:last-child td { border-bottom: none; }
  .enum-table td.member { font-family: ui-monospace, monospace; font-weight: 700; }
  .enum-table td.value { font-family: ui-monospace, monospace; color: var(--accent-strong); }
  .enum-table td.note { color: var(--text-dim); font-size: 12.5px; }

  .swatch { display: inline-block; width: 9px; height: 9px; border-radius: 3px; margin-right: 7px; vertical-align: middle; }

  .set-row { display: grid; grid-template-columns: 160px 1fr; gap: 12px; align-items: start; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
  .set-row:last-child { border-bottom: none; }
  .set-row .set-name { font-family: ui-monospace, monospace; font-weight: 700; font-size: 12.5px; }
  .chip { display: inline-flex; align-items: center; font-family: ui-monospace, monospace; font-size: 11.5px; padding: 2px 8px; border-radius: 999px; background: var(--bg-soft); border: 1px solid var(--border-strong); margin: 2px 4px 2px 0; }

  .const-card { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; border: 1px solid var(--border); border-radius: 10px; margin-top: 10px; background: var(--surface); }
  .const-card .name { font-family: ui-monospace, monospace; font-size: 13px; font-weight: 700; }
  .const-card .desc { font-size: 12.5px; color: var(--text-dim); margin-top: 3px; }
  .const-card .value { font-family: ui-monospace, monospace; font-size: 18px; font-weight: 800; color: var(--accent-strong); white-space: nowrap; }

  .gate-bar { position: relative; height: 12px; border-radius: 999px; margin: 30px 6px 26px; background: linear-gradient(to right, var(--normal) 0%, var(--normal) 40%, var(--caution) 55%, var(--critical) 70%, var(--critical) 100%); }
  .gate-tick { position: absolute; top: -20px; transform: translateX(-50%); text-align: center; font-family: ui-monospace, monospace; font-size: 11px; color: var(--text-dim); }
  .gate-tick .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--surface); border: 2px solid var(--text); margin: 20px auto 0; }

  .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
  table.usage { border-collapse: collapse; width: 100%; min-width: 620px; font-size: 13px; }
  table.usage th, table.usage td { text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
  table.usage thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
  table.usage tbody tr:last-child td { border-bottom: none; }
  table.usage td.sym { font-family: ui-monospace, monospace; }
  table.usage td.files { font-family: ui-monospace, monospace; font-size: 12px; color: var(--text-dim); }

  .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
  .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .pill--active { background: var(--normal-soft); color: var(--normal); }
  .pill--partial { background: var(--warning-soft); color: var(--warning); }
  .pill--dead { background: var(--dead-soft); color: var(--dead); }

  .note { border: 1px solid var(--border-strong); border-left: 3px solid var(--dead); background: var(--dead-soft); border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 18px; }
  .note strong { color: var(--dead); }
  .note--info { border-left-color: var(--accent); background: var(--accent-soft); }
  .note--info strong { color: var(--accent-strong); }

  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px; }
  .compare .col { padding: 14px 16px; border-radius: 10px; border: 1px solid var(--border); background: var(--surface); }
  .compare .col h5 { margin: 0 0 6px; font-family: ui-monospace, monospace; font-size: 13px; }
  .compare .col p { margin: 0; font-size: 12.5px; color: var(--text-dim); }
  @media (max-width: 560px) { .compare { grid-template-columns: 1fr; } }

  footer { max-width: 860px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }

  @media (max-width: 620px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
    .set-row { grid-template-columns: 1fr; }
  }
</style>

<div class="topbar">
  <div class="topbar__title">AI CCTV 안전 판단 시스템 — 상수 정의 정리</div>
  <div class="topbar__tags"><span class="tag">현재 코드 기준</span><span class="tag">2026-07-24</span></div>
</div>
<nav class="toc">
  <a href="#video">영상 라벨</a>
  <a href="#bio">생체 라벨</a>
  <a href="#risk">위험도 라벨</a>
  <a href="#area">구역·색상 라벨</a>
  <a href="#thresholds">임계값</a>
  <a href="#usage">사용 현황</a>
</nav>

<main>
  <p class="eyebrow">참고 문서 · labels.py / thresholds.py</p>
  <h1>흩어져 있던 라벨·상수를 한 곳에 모았습니다.</h1>
  <p class="lede">
    <span class="mono">schemas.py</span> / <span class="mono">service.py</span> / <span class="mono">multimodal_fusion.py</span>에
    문자열·매직넘버로 흩어져 있던 라벨과 임계값을 <span class="mono">labels.py</span>(enum),
    <span class="mono">thresholds.py</span>(숫자 기준값) 두 파일로 모은 것을 정리했습니다.
  </p>

  <div class="stats">
    <div class="stat"><div class="stat__value">4그룹</div><div class="stat__label">labels.py 라벨 카테고리</div></div>
    <div class="stat"><div class="stat__value">9개</div><div class="stat__label">StrEnum 클래스</div></div>
    <div class="stat"><div class="stat__value">3개</div><div class="stat__label">thresholds.py 기준값</div></div>
    <div class="stat"><div class="stat__value">8개</div><div class="stat__label">허용 작업 구역</div></div>
  </div>

  <blockquote class="origin" style="margin-top:28px;">
    원본 docstring — "1차 정리 단계: schemas.py / hrv_state_classifier.py / multimodal_fusion.py에 흩어져 있던
    라벨 상수를 한 곳에 모아 enum으로 재정의만 한 상태. 다른 파일은 아직 이 모듈을 참조하도록 바꾸지 않았음
    (외주업체 실데이터 확인 후 다시 정리 예정)." — 이후 #15, #21, #35를 거치며 대부분 실제 참조로 전환됨 (05 사용 현황 참고)
  </blockquote>

  <section id="video">
    <div class="section__head"><span class="section__num">01</span><h2>영상(Video) 행동 라벨</h2></div>
    <p class="section__desc">"상태(state)"와 "진행중 동작(-ing)"은 성격이 달라 두 enum으로 분리했습니다.</p>

    <div class="group">
      <div class="group__head"><span class="group__name">PostureAction</span><span class="group__origin">지속되는 자세/동작</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td class="member">STANDING</td><td class="value">"standing"</td><td class="note">정상 상태, 이상판정 해당없음</td></tr>
          <tr><td class="member">FAINTING</td><td class="value">"fainting"</td><td class="note">감지 즉시(0초) is_abnormal=true</td></tr>
          <tr><td class="member">SITTING</td><td class="value">"sitting"</td><td class="note">감지 즉시(0초) is_abnormal=true</td></tr>
          <tr><td class="member">CROUCHING</td><td class="value">"crouching"</td><td class="note">CROUCHING_THRESHOLD_SEC 이상 지속 시 is_abnormal=true</td></tr>
        </tbody>
      </table>
    </div>

    <div class="group">
      <div class="group__head"><span class="group__name">WorkerEvent</span><span class="group__origin">순간적으로 감지되는 이벤트</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td class="member">SOS_ACTION</td><td class="value">"sos_action"</td><td class="note">감지 즉시(0초) is_abnormal=true</td></tr>
          <tr><td class="member">VEST_CHECK</td><td class="value">"vest_check"</td><td class="note">외부 영상 규격에서 받을 수 있는 테스트·캘리브레이션 동작, 위험 점수 10</td></tr>
        </tbody>
      </table>
    </div>

    <div class="const-card">
      <div><div class="name">CROUCHING_THRESHOLD_SEC</div><div class="desc">이 시간(초) 이상 웅크림이 지속돼야 이상으로 판정</div></div>
      <div class="value">20<span style="font-size:12px;color:var(--text-dim);"> 초</span></div>
    </div>

    <div class="group" style="margin-top:20px;">
      <div class="group__head"><span class="group__name">위험도 판정 그룹</span><span class="group__origin">schemas.py의 ABNORMAL/CONDITIONAL/NORMAL_ACTIONS 대응</span></div>
      <div class="set-row">
        <div class="set-name" style="color:var(--critical)">ABNORMAL_ACTIONS</div>
        <div><span class="chip">FAINTING</span><span class="chip">SITTING</span><span class="chip">SOS_ACTION</span></div>
      </div>
      <div class="set-row">
        <div class="set-name" style="color:var(--caution)">CONDITIONAL_ACTIONS</div>
        <div><span class="chip">CROUCHING</span> <span style="color:var(--text-dim);font-size:12px;">— 지속시간 조건부</span></div>
      </div>
      <div class="set-row">
        <div class="set-name" style="color:var(--normal)">NORMAL_ACTIONS</div>
        <div><span class="chip">STANDING</span><span class="chip">VEST_CHECK</span></div>
      </div>
      <div class="set-row">
        <div class="set-name">ALL_ACTIONS</div>
        <div style="color:var(--text-dim);font-size:12.5px;">위 세 집합의 합집합 — schemas.py 입력 검증에 사용</div>
      </div>
    </div>
  </section>

  <section id="bio">
    <div class="section__head"><span class="section__num">02</span><h2>생체(Bio) 상태 라벨</h2></div>
    <p class="section__desc"><span class="mono">hrv_state_classifier.py</span>의 REFERENCE_PROFILES / STATE_CODE에 대응합니다.</p>

    <div class="group">
      <div class="group__head"><span class="group__name">BioState</span><span class="group__origin">한글, REFERENCE_PROFILES 키와 동일</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th></tr></thead>
        <tbody>
          <tr><td class="member">NORMAL</td><td class="value">"정상"</td></tr>
          <tr><td class="member">ARRHYTHMIA</td><td class="value">"부정맥"</td></tr>
          <tr><td class="member">SYNCOPE</td><td class="value">"실신"</td></tr>
          <tr><td class="member">FATIGUE</td><td class="value">"과로/피로"</td></tr>
        </tbody>
      </table>
    </div>

    <div class="group">
      <div class="group__head"><span class="group__name">BioStateCode</span><span class="group__origin">영문 코드, derived_states.bio_state 값</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th></tr></thead>
        <tbody>
          <tr><td class="member">NORMAL</td><td class="value">"normal"</td></tr>
          <tr><td class="member">ARRHYTHMIA</td><td class="value">"arrhythmia"</td></tr>
          <tr><td class="member">SYNCOPE</td><td class="value">"syncope"</td></tr>
          <tr><td class="member">FATIGUE</td><td class="value">"fatigue"</td></tr>
        </tbody>
      </table>
      <p class="group__desc" style="margin-bottom:0;"><span class="mono">BIO_STATE_TO_CODE</span> 딕셔너리가 BioState(한글) → BioStateCode(영문)를 1:1로 매핑합니다.</p>
    </div>
  </section>

  <section id="risk">
    <div class="section__head"><span class="section__num">03</span><h2>위험도(Risk) 등급 라벨</h2></div>
    <p class="section__desc"><span class="mono">multimodal_fusion.py</span>의 SEVERITY_*, risk_level 문자열에 대응합니다.</p>

    <div class="group">
      <div class="group__head"><span class="group__name">Severity</span><span class="group__origin">심각도 4단계 — fuse()의 최종 판정</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th><th>한글(SEVERITY_KR)</th></tr></thead>
        <tbody>
          <tr><td class="member"><span class="swatch" style="background:var(--normal)"></span>NORMAL</td><td class="value">"normal"</td><td class="note">정상</td></tr>
          <tr><td class="member"><span class="swatch" style="background:var(--caution)"></span>CAUTION</td><td class="value">"caution"</td><td class="note">주의</td></tr>
          <tr><td class="member"><span class="swatch" style="background:var(--warning)"></span>WARNING</td><td class="value">"warning"</td><td class="note">경고</td></tr>
          <tr><td class="member"><span class="swatch" style="background:var(--critical)"></span>CRITICAL</td><td class="value">"critical"</td><td class="note">위급</td></tr>
        </tbody>
      </table>
    </div>

    <div class="group">
      <div class="group__head"><span class="group__name">RiskLevel</span><span class="group__origin">위험도 지수(risk_index) 기반 3단계</span></div>
      <table class="enum-table">
        <thead><tr><th>멤버</th><th>값</th></tr></thead>
        <tbody>
          <tr><td class="member"><span class="swatch" style="background:var(--normal)"></span>NORMAL</td><td class="value">"normal"</td></tr>
          <tr><td class="member"><span class="swatch" style="background:var(--caution)"></span>CAUTION</td><td class="value">"caution"</td></tr>
          <tr><td class="member"><span class="swatch" style="background:var(--critical)"></span>DANGER</td><td class="value">"danger"</td></tr>
        </tbody>
      </table>
    </div>

    <div class="group">
      <div class="group__head"><span class="group__name">RiskType</span><span class="group__origin">최종 판정 결과에서 사용할 수 있는 위험 유형</span></div>
      <div style="margin-top:6px;">
        <span class="chip">fainting</span><span class="chip">fall</span><span class="chip">sos</span>
        <span class="chip">crouching</span><span class="chip">sitting</span><span class="chip">ppe</span>
        <span class="chip">bio</span><span class="chip">hazard</span><span class="chip">camera_offline</span>
        <span class="chip">unsafe_behavior</span><span class="chip">fatigue_risk</span><span class="chip">heat_stroke</span>
      </div>
    </div>

    <div class="note note--info">
      <strong>Severity와 RiskLevel은 다른 역할 —</strong> 둘 다 4단계일 거라 생각하기 쉽지만,
      RiskLevel은 Severity를 단순 축소한 게 아니라 <strong>완전히 다른 파생값</strong>입니다.
      <div class="compare">
        <div class="col">
          <h5>Severity (4단계)</h5>
          <p>우리 판정 로직 <span class="mono">_decide()</span>가 내리는 실제 결론. 법령 근거·Level 1~5 표가 매핑되는 대상. API의 <span class="mono">overall_risk</span>도 여기서 파생됨.</p>
        </div>
        <div class="col">
          <h5>RiskLevel (3단계)</h5>
          <p>그 결론에서 나온 점수(<span class="mono">risk_score</span>)를 0~1로 정규화한 <span class="mono">risk_index</span>를, 영상 전송 규격서가 정의한 0.4 / 0.7 경계(→ 05 thresholds.py)로 다시 자른 값. 미들웨어·영상 스펙 호환용.</p>
        </div>
      </div>
    </div>

    <div class="note">
      <strong>현재 점수 기반 Severity 경계 —</strong>
      <span class="mono">risk_score</span>가 35 미만이면 normal, 35 이상이면 caution,
      60 이상이면 warning, 85 이상이면 critical입니다. 이 경계는 현재
      <span class="mono">multimodal_fusion.py</span>에 정의되어 있으며
      <span class="mono">thresholds.py</span>의 RiskLevel 경계와는 별도입니다.
    </div>
  </section>

  <section id="area">
    <div class="section__head"><span class="section__num">04</span><h2>구역(Area) / 색상그룹(ColorGroup) 라벨</h2></div>
    <p class="section__desc"><span class="mono">schemas.py</span>의 ALLOWED_AREAS / ALLOWED_COLOR_GROUPS에 대응합니다.</p>

    <div class="group">
      <div class="group__head"><span class="group__name">Area</span><span class="group__origin">작업 구역 7개 + 예외 대체값 1개</span></div>
      <div style="margin-top:6px;">
        <span class="chip">미확인</span>
        <span class="chip">기계실1</span><span class="chip">기계실2</span><span class="chip">기계실3</span>
        <span class="chip">전기실1</span><span class="chip">전기실2</span><span class="chip">전기실3</span><span class="chip">전기실4</span>
      </div>
      <p class="group__desc" style="margin-bottom:0;">CCTV area가 없거나 허용 목록 밖의 값이면 매칭 과정에서 <span class="mono">미확인</span>으로 정규화합니다. Bio/CCTV 구역이 다르면 실제 작업 위치에 가까운 CCTV area를 우선합니다.</p>
    </div>

    <div class="group">
      <div class="group__head"><span class="group__name">ColorGroup</span><span class="group__origin">스마트워치 색상 그룹 — 작업자 식별 키</span></div>
      <div style="margin-top:6px;">
        <span class="chip"><span class="swatch" style="background:#C8402A"></span>red</span>
        <span class="chip"><span class="swatch" style="background:#2F7D5A"></span>green</span>
        <span class="chip"><span class="swatch" style="background:#C9A227"></span>yellow</span>
        <span class="chip"><span class="swatch" style="background:#2C6E8C"></span>blue</span>
        <span class="chip"><span class="swatch" style="background:#8B8F92"></span>gray</span>
      </div>
    </div>
  </section>

  <section id="thresholds">
    <div class="section__head"><span class="section__num">05</span><h2>thresholds.py — 숫자 기준값</h2></div>
    <p class="section__desc">multimodal_fusion.py에서 분리된, 위험도/게이팅 판정에 쓰이는 매직넘버 3개입니다.</p>

    <div class="const-card">
      <div><div class="name">RISK_LEVEL_CAUTION</div><div class="desc">영상 규격서 위험도 구간 — 이 값 미만은 정상</div></div>
      <div class="value">0.4</div>
    </div>
    <div class="const-card">
      <div><div class="name">RISK_LEVEL_DANGER</div><div class="desc">이 값 이상이면 위험(danger)</div></div>
      <div class="value">0.7</div>
    </div>

    <div class="gate-bar">
      <div class="gate-tick" style="left:40%"><div class="dot"></div>0.4<br>CAUTION</div>
      <div class="gate-tick" style="left:70%"><div class="dot"></div>0.7<br>DANGER</div>
    </div>

    <div class="const-card">
      <div><div class="name">SQI_GATE_THRESHOLD</div><div class="desc">생체 전송규격의 권고 기준값. 정확한 운영 정책 확정 전이라 현재 SQI 기반 bio_risk 감쇠 로직은 비활성화 상태</div></div>
      <div class="value">0.8</div>
    </div>
    <div class="note">
      <strong>SQI 정책 보류 —</strong> 상수 0.8은 남아 있지만 현재 판정에 적용되는 활성 임계값은 아닙니다.
      <span class="mono">multimodal_fusion.py</span>의 정식 게이팅 계산은 주석 처리되어 있고,
      임시 SQI 값만 결과에 포함됩니다. 운영 기준이 확정되면 별도 작업으로 활성화해야 합니다.
    </div>
  </section>

  <section id="usage">
    <div class="section__head"><span class="section__num">06</span><h2>실제 사용 현황</h2></div>
    <p class="section__desc">현재 애플리케이션 코드에서 각 심볼을 직접 또는 허용값 집합을 통해 참조하는 위치를 정리했습니다.</p>

    <div class="table-wrap">
      <table class="usage">
        <thead><tr><th>심볼</th><th>가져다 쓰는 파일</th><th>상태</th></tr></thead>
        <tbody>
          <tr><td class="sym">PostureAction, WorkerEvent</td><td class="files">multimodal_fusion.py의 VIDEO_RISK 및 행동 그룹 집합</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">ABNORMAL/CONDITIONAL/NORMAL/ALL_ACTIONS</td><td class="files">schemas.py, models.py를 통한 입력 검증</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">CROUCHING_THRESHOLD_SEC</td><td class="files">matching.py, schemas.py, service.py, risk_scoring.py, main.py, mock_scenarios.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">BioState</td><td class="files">hrv_reference_profiles.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">BioStateCode, BIO_STATE_TO_CODE</td><td class="files">multimodal_fusion.py, hrv_state_classifier.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">Severity, SEVERITY_KR</td><td class="files">bio_fusion.py, multimodal_fusion.py, service.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">RiskLevel</td><td class="files">bio_fusion.py, multimodal_fusion.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">RiskType</td><td class="files">API 허용 위험 유형 정의 및 계약 테스트</td><td><span class="pill pill--partial">규격 정의</span></td></tr>
          <tr><td class="sym">Area, ColorGroup</td><td class="files">ALLOWED_* 집합 구성, matching.py의 미확인 구역 정규화</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">ALLOWED_AREAS, ALLOWED_COLOR_GROUPS</td><td class="files">matching.py, schemas.py, models.py, main.py, mock_scenarios.py</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">RISK_LEVEL_CAUTION / DANGER</td><td class="files">multimodal_fusion.py의 risk_level 3단계 변환</td><td><span class="pill pill--active">사용중</span></td></tr>
          <tr><td class="sym">SQI_GATE_THRESHOLD</td><td class="files">multimodal_fusion.py에 import되어 있으나 정식 게이팅 계산은 비활성화</td><td><span class="pill pill--partial">정책 보류</span></td></tr>
          <tr><td class="sym">WorkerEvent.VEST_CHECK</td><td class="files">허용 입력 라벨 및 VIDEO_RISK 정상 점수(10) 키</td><td><span class="pill pill--active">사용중</span></td></tr>
        </tbody>
      </table>
    </div>

    <div class="note">
      <strong>해석 시 주의 —</strong> AI 서버 내부에서 특정 action을 직접 생성하지 않더라도,
      외부 CCTV 분석 결과의 <span class="mono">behavior.current_action</span>으로 받을 수 있으므로
      곧바로 죽은 값으로 판단할 수 없습니다. 실제 API 허용값과 소비 로직을 함께 확인해야 합니다.
    </div>
  </section>
</main>

<footer>
  AI CCTV 안전 판단 시스템 · labels.py / thresholds.py 정리 — 2026-07-24 현재 코드 기준
</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
