"use client";

import { useSupabaseSession } from "../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../_components/LoginScreen";
import LogoutButton from "../_components/LogoutButton";

export default function LabelsThresholdsReport() {
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

        .rpt-labels * { box-sizing: border-box; }
        .rpt-labels {
          margin: 0; background: var(--bg); color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif;
          line-height: 1.65; letter-spacing: -0.01em;
        }
        .rpt-labels .mono { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace; }

        .rpt-labels .topbar {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 24px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--border);
        }
        .rpt-labels .topbar__title { font-size: 13px; font-weight: 700; }
        .rpt-labels .topbar__tags { display: flex; gap: 6px; }
        .rpt-labels .tag { font-family: ui-monospace, monospace; font-size: 11px; padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-strong); color: var(--text-dim); white-space: nowrap; }

        .rpt-labels .toc { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 24px; background: var(--bg-soft); border-bottom: 1px solid var(--border); }
        .rpt-labels .toc a { font-family: ui-monospace, monospace; font-size: 11.5px; color: var(--text-dim); text-decoration: none; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--border-strong); }
        .rpt-labels .toc a:hover, .rpt-labels .toc a:focus-visible { color: var(--accent-strong); border-color: var(--accent); outline: none; }

        .rpt-labels main { max-width: 860px; margin: 0 auto; padding: 56px 24px 96px; }

        .rpt-labels .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
        .rpt-labels h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
        .rpt-labels .lede { font-size: 16px; color: var(--text-dim); max-width: 62ch; margin: 0; }

        .rpt-labels .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
        .rpt-labels .stat { background: var(--surface); padding: 16px 18px; }
        .rpt-labels .stat__value { font-size: 22px; font-weight: 800; }
        .rpt-labels .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

        .rpt-labels section { margin-top: 60px; }
        .rpt-labels .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
        .rpt-labels .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
        .rpt-labels h2 { font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
        .rpt-labels .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 64ch; margin: 10px 0 20px; }

        .rpt-labels blockquote.origin {
          border-left: 3px solid var(--border-strong); margin: 0; padding: 10px 16px;
          background: var(--bg-soft); border-radius: 0 8px 8px 0; color: var(--text-dim); font-size: 13px;
        }

        .rpt-labels .group { border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: var(--shadow); padding: 22px 24px; margin-top: 18px; scroll-margin-top: 90px; }
        .rpt-labels .group__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 4px; }
        .rpt-labels .group__name { font-family: ui-monospace, monospace; font-size: 14.5px; font-weight: 700; }
        .rpt-labels .group__origin { font-size: 11.5px; color: var(--text-dim); }
        .rpt-labels .group__desc { font-size: 13.5px; color: var(--text-dim); margin: 8px 0 16px; }

        .rpt-labels .enum-table { border-collapse: collapse; width: 100%; font-size: 13px; margin-top: 4px; }
        .rpt-labels .enum-table th, .rpt-labels .enum-table td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); }
        .rpt-labels .enum-table thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); font-weight: 700; }
        .rpt-labels .enum-table tbody tr:last-child td { border-bottom: none; }
        .rpt-labels .enum-table td.member { font-family: ui-monospace, monospace; font-weight: 700; }
        .rpt-labels .enum-table td.value { font-family: ui-monospace, monospace; color: var(--accent-strong); }
        .rpt-labels .enum-table td.note { color: var(--text-dim); font-size: 12.5px; }

        .rpt-labels .swatch { display: inline-block; width: 9px; height: 9px; border-radius: 3px; margin-right: 7px; vertical-align: middle; }

        .rpt-labels .set-row { display: grid; grid-template-columns: 160px 1fr; gap: 12px; align-items: start; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
        .rpt-labels .set-row:last-child { border-bottom: none; }
        .rpt-labels .set-row .set-name { font-family: ui-monospace, monospace; font-weight: 700; font-size: 12.5px; }
        .rpt-labels .chip { display: inline-flex; align-items: center; font-family: ui-monospace, monospace; font-size: 11.5px; padding: 2px 8px; border-radius: 999px; background: var(--bg-soft); border: 1px solid var(--border-strong); margin: 2px 4px 2px 0; }

        .rpt-labels .const-card { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; border: 1px solid var(--border); border-radius: 10px; margin-top: 10px; background: var(--surface); }
        .rpt-labels .const-card .name { font-family: ui-monospace, monospace; font-size: 13px; font-weight: 700; }
        .rpt-labels .const-card .desc { font-size: 12.5px; color: var(--text-dim); margin-top: 3px; }
        .rpt-labels .const-card .value { font-family: ui-monospace, monospace; font-size: 18px; font-weight: 800; color: var(--accent-strong); white-space: nowrap; }

        .rpt-labels .gate-bar { position: relative; height: 12px; border-radius: 999px; margin: 30px 6px 26px; background: linear-gradient(to right, var(--normal) 0%, var(--normal) 40%, var(--caution) 55%, var(--critical) 70%, var(--critical) 100%); }
        .rpt-labels .gate-tick { position: absolute; top: -20px; transform: translateX(-50%); text-align: center; font-family: ui-monospace, monospace; font-size: 11px; color: var(--text-dim); }
        .rpt-labels .gate-tick .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--surface); border: 2px solid var(--text); margin: 20px auto 0; }

        .rpt-labels .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); margin-top: 8px; }
        .rpt-labels table.usage { border-collapse: collapse; width: 100%; min-width: 620px; font-size: 13px; }
        .rpt-labels table.usage th, .rpt-labels table.usage td { text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
        .rpt-labels table.usage thead th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
        .rpt-labels table.usage tbody tr:last-child td { border-bottom: none; }
        .rpt-labels table.usage td.sym { font-family: ui-monospace, monospace; }
        .rpt-labels table.usage td.files { font-family: ui-monospace, monospace; font-size: 12px; color: var(--text-dim); }

        .rpt-labels .pill { display: inline-flex; align-items: center; gap: 5px; font-family: ui-monospace, monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; white-space: nowrap; }
        .rpt-labels .pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .rpt-labels .pill--active { background: var(--normal-soft); color: var(--normal); }
        .rpt-labels .pill--partial { background: var(--warning-soft); color: var(--warning); }
        .rpt-labels .pill--dead { background: var(--dead-soft); color: var(--dead); }

        .rpt-labels .note { border: 1px solid var(--border-strong); border-left: 3px solid var(--dead); background: var(--dead-soft); border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 18px; }
        .rpt-labels .note strong { color: var(--dead); }
        .rpt-labels .note--info { border-left-color: var(--accent); background: var(--accent-soft); }
        .rpt-labels .note--info strong { color: var(--accent-strong); }

        .rpt-labels .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px; }
        .rpt-labels .compare .col { padding: 14px 16px; border-radius: 10px; border: 1px solid var(--border); background: var(--surface); }
        .rpt-labels .compare .col h5 { margin: 0 0 6px; font-family: ui-monospace, monospace; font-size: 13px; }
        .rpt-labels .compare .col p { margin: 0; font-size: 12.5px; color: var(--text-dim); }
        @media (max-width: 560px) { .rpt-labels .compare { grid-template-columns: 1fr; } }

        .rpt-labels footer { max-width: 860px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }

        @media (max-width: 620px) {
          .rpt-labels .stats { grid-template-columns: repeat(2, 1fr); }
          .rpt-labels .set-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="rpt-labels">
        <div className="topbar">
          <div className="topbar__title">AI CCTV 안전 판단 시스템 — 상수 정의 정리</div>
          <div className="topbar__tags"><span className="tag">issue #3</span><span className="tag">PR #4</span></div>
        </div>
        <nav className="toc">
          <a href="#video">영상 라벨</a>
          <a href="#bio">생체 라벨</a>
          <a href="#risk">위험도 라벨</a>
          <a href="#area">구역·색상 라벨</a>
          <a href="#thresholds">임계값</a>
          <a href="#usage">사용 현황</a>
        </nav>

        <main>
          <p className="eyebrow">참고 문서 · labels.py / thresholds.py</p>
          <h1>흩어져 있던 라벨·상수를 한 곳에</h1>
          <p className="lede">
            <span className="mono">schemas.py</span> / <span className="mono">service.py</span> / <span className="mono">multimodal_fusion.py</span>에
            문자열·매직넘버로 흩어져 있던 라벨과 임계값을 <span className="mono">labels.py</span>(enum),
            <span className="mono">thresholds.py</span>(숫자 기준값) 두 파일로 모은 것을 정리했습니다.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat__value">4그룹</div><div className="stat__label">labels.py 라벨 카테고리</div></div>
            <div className="stat"><div className="stat__value">7개</div><div className="stat__label">StrEnum 클래스</div></div>
            <div className="stat"><div className="stat__value">3개</div><div className="stat__label">thresholds.py 기준값</div></div>
            <div className="stat"><div className="stat__value">1개</div><div className="stat__label">사용처 없는 죽은 값</div></div>
          </div>

          <blockquote className="origin" style={{ marginTop: "28px" }}>
            원본 docstring — &quot;1차 정리 단계: schemas.py / hrv_state_classifier.py / multimodal_fusion.py에 흩어져 있던
            라벨 상수를 한 곳에 모아 enum으로 재정의만 한 상태. 다른 파일은 아직 이 모듈을 참조하도록 바꾸지 않았음
            (외주업체 실데이터 확인 후 다시 정리 예정).&quot; — 이후 #15, #21, #35를 거치며 대부분 실제 참조로 전환됨 (05 사용 현황 참고)
          </blockquote>

          <section id="video">
            <div className="section__head"><span className="section__num">01</span><h2>영상(Video) 행동 라벨</h2></div>
            <p className="section__desc">&quot;상태(state)&quot;와 &quot;진행중 동작(-ing)&quot;은 성격이 달라 두 enum으로 분리했습니다.</p>

            <div className="group">
              <div className="group__head"><span className="group__name">PostureAction</span><span className="group__origin">지속되는 자세/동작</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th><th>비고</th></tr></thead>
                <tbody>
                  <tr><td className="member">STANDING</td><td className="value">&quot;standing&quot;</td><td className="note">정상 상태, 이상판정 해당없음</td></tr>
                  <tr><td className="member">FAINTING</td><td className="value">&quot;fainting&quot;</td><td className="note">감지 즉시(0초) is_abnormal=true</td></tr>
                  <tr><td className="member">SITTING</td><td className="value">&quot;sitting&quot;</td><td className="note">감지 즉시(0초) is_abnormal=true</td></tr>
                  <tr><td className="member">CROUCHING</td><td className="value">&quot;crouching&quot;</td><td className="note">CROUCHING_THRESHOLD_SEC 이상 지속 시 is_abnormal=true</td></tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <div className="group__head"><span className="group__name">WorkerEvent</span><span className="group__origin">순간적으로 감지되는 이벤트</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th><th>비고</th></tr></thead>
                <tbody>
                  <tr><td className="member">SOS_ACTION</td><td className="value">&quot;sos_action&quot;</td><td className="note">감지 즉시(0초) is_abnormal=true</td></tr>
                  <tr><td className="member">VEST_CHECK</td><td className="value">&quot;vest_check&quot;</td><td className="note">테스트·캘리브레이션 목적, is_abnormal 항상 false — <span className="pill pill--dead">사용처 없음</span></td></tr>
                </tbody>
              </table>
            </div>

            <div className="const-card">
              <div><div className="name">CROUCHING_THRESHOLD_SEC</div><div className="desc">이 시간(초) 이상 웅크림이 지속돼야 이상으로 판정</div></div>
              <div className="value">20<span style={{ fontSize: "12px", color: "var(--text-dim)" }}> 초</span></div>
            </div>

            <div className="group" style={{ marginTop: "20px" }}>
              <div className="group__head"><span className="group__name">위험도 판정 그룹</span><span className="group__origin">schemas.py의 ABNORMAL/CONDITIONAL/NORMAL_ACTIONS 대응</span></div>
              <div className="set-row">
                <div className="set-name" style={{ color: "var(--critical)" }}>ABNORMAL_ACTIONS</div>
                <div><span className="chip">FAINTING</span><span className="chip">SITTING</span><span className="chip">SOS_ACTION</span></div>
              </div>
              <div className="set-row">
                <div className="set-name" style={{ color: "var(--caution)" }}>CONDITIONAL_ACTIONS</div>
                <div><span className="chip">CROUCHING</span> <span style={{ color: "var(--text-dim)", fontSize: "12px" }}>— 지속시간 조건부</span></div>
              </div>
              <div className="set-row">
                <div className="set-name" style={{ color: "var(--normal)" }}>NORMAL_ACTIONS</div>
                <div><span className="chip">STANDING</span><span className="chip">VEST_CHECK</span></div>
              </div>
              <div className="set-row">
                <div className="set-name">ALL_ACTIONS</div>
                <div style={{ color: "var(--text-dim)", fontSize: "12.5px" }}>위 세 집합의 합집합 — schemas.py 입력 검증에 사용</div>
              </div>
            </div>
          </section>

          <section id="bio">
            <div className="section__head"><span className="section__num">02</span><h2>생체(Bio) 상태 라벨</h2></div>
            <p className="section__desc"><span className="mono">hrv_state_classifier.py</span>의 REFERENCE_PROFILES / STATE_CODE에 대응합니다.</p>

            <div className="group">
              <div className="group__head"><span className="group__name">BioState</span><span className="group__origin">한글, REFERENCE_PROFILES 키와 동일</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th></tr></thead>
                <tbody>
                  <tr><td className="member">NORMAL</td><td className="value">&quot;정상&quot;</td></tr>
                  <tr><td className="member">ARRHYTHMIA</td><td className="value">&quot;부정맥&quot;</td></tr>
                  <tr><td className="member">SYNCOPE</td><td className="value">&quot;실신&quot;</td></tr>
                  <tr><td className="member">FATIGUE</td><td className="value">&quot;과로/피로&quot;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <div className="group__head"><span className="group__name">BioStateCode</span><span className="group__origin">영문 코드, derived_states.bio_state 값</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th></tr></thead>
                <tbody>
                  <tr><td className="member">NORMAL</td><td className="value">&quot;normal&quot;</td></tr>
                  <tr><td className="member">ARRHYTHMIA</td><td className="value">&quot;arrhythmia&quot;</td></tr>
                  <tr><td className="member">SYNCOPE</td><td className="value">&quot;syncope&quot;</td></tr>
                  <tr><td className="member">FATIGUE</td><td className="value">&quot;fatigue&quot;</td></tr>
                </tbody>
              </table>
              <p className="group__desc" style={{ marginBottom: 0 }}><span className="mono">BIO_STATE_TO_CODE</span> 딕셔너리가 BioState(한글) → BioStateCode(영문)를 1:1로 매핑합니다.</p>
            </div>
          </section>

          <section id="risk">
            <div className="section__head"><span className="section__num">03</span><h2>위험도(Risk) 등급 라벨</h2></div>
            <p className="section__desc"><span className="mono">multimodal_fusion.py</span>의 SEVERITY_*, risk_level 문자열에 대응합니다.</p>

            <div className="group">
              <div className="group__head"><span className="group__name">Severity</span><span className="group__origin">심각도 4단계 — fuse()의 최종 판정</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th><th>한글(SEVERITY_KR)</th></tr></thead>
                <tbody>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--normal)" }}></span>NORMAL</td><td className="value">&quot;normal&quot;</td><td className="note">정상</td></tr>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--caution)" }}></span>CAUTION</td><td className="value">&quot;caution&quot;</td><td className="note">주의</td></tr>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--warning)" }}></span>WARNING</td><td className="value">&quot;warning&quot;</td><td className="note">경고</td></tr>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--critical)" }}></span>CRITICAL</td><td className="value">&quot;critical&quot;</td><td className="note">위급</td></tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <div className="group__head"><span className="group__name">RiskLevel</span><span className="group__origin">위험도 지수(risk_index) 기반 3단계</span></div>
              <table className="enum-table">
                <thead><tr><th>멤버</th><th>값</th></tr></thead>
                <tbody>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--normal)" }}></span>NORMAL</td><td className="value">&quot;normal&quot;</td></tr>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--caution)" }}></span>CAUTION</td><td className="value">&quot;caution&quot;</td></tr>
                  <tr><td className="member"><span className="swatch" style={{ background: "var(--critical)" }}></span>DANGER</td><td className="value">&quot;danger&quot;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="note note--info">
              <strong>Severity와 RiskLevel은 다른 역할 —</strong> 둘 다 4단계일 거라 생각하기 쉽지만,
              RiskLevel은 Severity를 단순 축소한 게 아니라 <strong>완전히 다른 파생값</strong>입니다.
              <div className="compare">
                <div className="col">
                  <h5>Severity (4단계)</h5>
                  <p>우리 판정 로직 <span className="mono">_decide()</span>가 내리는 실제 결론. 법령 근거·Level 1~5 표가 매핑되는 대상. API의 <span className="mono">overall_risk</span>도 여기서 파생됨.</p>
                </div>
                <div className="col">
                  <h5>RiskLevel (3단계)</h5>
                  <p>그 결론에서 나온 점수(<span className="mono">risk_score</span>)를 0~1로 정규화한 <span className="mono">risk_index</span>를, 영상 전송 규격서가 정의한 0.4 / 0.7 경계(→ 05 thresholds.py)로 다시 자른 값. 미들웨어·영상 스펙 호환용.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="area">
            <div className="section__head"><span className="section__num">04</span><h2>구역(Area) / 색상그룹(ColorGroup) 라벨</h2></div>
            <p className="section__desc"><span className="mono">schemas.py</span>의 ALLOWED_AREAS / ALLOWED_COLOR_GROUPS에 대응합니다.</p>

            <div className="group">
              <div className="group__head"><span className="group__name">Area</span><span className="group__origin">작업 구역 7개</span></div>
              <div style={{ marginTop: "6px" }}>
                <span className="chip">기계실1</span><span className="chip">기계실2</span><span className="chip">기계실3</span>
                <span className="chip">전기실1</span><span className="chip">전기실2</span><span className="chip">전기실3</span><span className="chip">전기실4</span>
              </div>
            </div>

            <div className="group">
              <div className="group__head"><span className="group__name">ColorGroup</span><span className="group__origin">스마트워치 색상 그룹 — 작업자 식별 키</span></div>
              <div style={{ marginTop: "6px" }}>
                <span className="chip"><span className="swatch" style={{ background: "#C8402A" }}></span>red</span>
                <span className="chip"><span className="swatch" style={{ background: "#2F7D5A" }}></span>green</span>
                <span className="chip"><span className="swatch" style={{ background: "#C9A227" }}></span>yellow</span>
                <span className="chip"><span className="swatch" style={{ background: "#2C6E8C" }}></span>blue</span>
                <span className="chip"><span className="swatch" style={{ background: "#8B8F92" }}></span>gray</span>
              </div>
            </div>
          </section>

          <section id="thresholds">
            <div className="section__head"><span className="section__num">05</span><h2>thresholds.py — 숫자 기준값</h2></div>
            <p className="section__desc">multimodal_fusion.py에서 분리된, 위험도/게이팅 판정에 쓰이는 매직넘버 3개입니다.</p>

            <div className="const-card">
              <div><div className="name">RISK_LEVEL_CAUTION</div><div className="desc">영상 규격서 위험도 구간 — 이 값 미만은 정상</div></div>
              <div className="value">0.4</div>
            </div>
            <div className="const-card">
              <div><div className="name">RISK_LEVEL_DANGER</div><div className="desc">이 값 이상이면 위험(danger)</div></div>
              <div className="value">0.7</div>
            </div>

            <div className="gate-bar">
              <div className="gate-tick" style={{ left: "40%" }}><div className="dot"></div>0.4<br />CAUTION</div>
              <div className="gate-tick" style={{ left: "70%" }}><div className="dot"></div>0.7<br />DANGER</div>
            </div>

            <div className="const-card">
              <div><div className="name">SQI_GATE_THRESHOLD</div><div className="desc">생체 전송규격 SQI 권고치 — 신호 품질이 이 값보다 낮으면 bio_risk에 게이트(감쇠)가 걸림</div></div>
              <div className="value">0.8</div>
            </div>
          </section>

          <section id="usage">
            <div className="section__head"><span className="section__num">06</span><h2>실제 사용 현황</h2></div>
            <p className="section__desc">최초 분리 당시엔 &quot;정의만 해두고 아직 안 씀&quot; 상태였지만, #15/#21/#35를 거치며 대부분 실제 참조로 바뀌었습니다.</p>

            <div className="table-wrap">
              <table className="usage">
                <thead><tr><th>심볼</th><th>가져다 쓰는 파일</th><th>상태</th></tr></thead>
                <tbody>
                  <tr><td className="sym">PostureAction, WorkerEvent</td><td className="files">multimodal_fusion.py (VIDEO_RISK 딕셔너리 키)</td><td><span className="pill pill--partial">부분 사용</span></td></tr>
                  <tr><td className="sym">ABNORMAL/CONDITIONAL/NORMAL/ALL_ACTIONS</td><td className="files">schemas.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">CROUCHING_THRESHOLD_SEC</td><td className="files">schemas.py, risk_scoring.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">BioState</td><td className="files">hrv_reference_profiles.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">BioStateCode, BIO_STATE_TO_CODE</td><td className="files">multimodal_fusion.py, hrv_state_classifier.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">Severity, SEVERITY_KR</td><td className="files">bio_fusion.py, multimodal_fusion.py, service.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">RiskLevel</td><td className="files">bio_fusion.py, multimodal_fusion.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">Area, ColorGroup</td><td className="files">labels.py 내부에서만 (ALLOWED_* 집합 구성용)</td><td><span className="pill pill--partial">부분 사용</span></td></tr>
                  <tr><td className="sym">ALLOWED_AREAS, ALLOWED_COLOR_GROUPS</td><td className="files">schemas.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">RISK_LEVEL_CAUTION / DANGER, SQI_GATE_THRESHOLD</td><td className="files">multimodal_fusion.py</td><td><span className="pill pill--active">사용중</span></td></tr>
                  <tr><td className="sym">WorkerEvent.VEST_CHECK</td><td className="files">multimodal_fusion.py에 키만 존재, 실제로 이 action을 만드는 코드 경로 없음</td><td><span className="pill pill--dead">죽은 값</span></td></tr>
                </tbody>
              </table>
            </div>

            <div className="note">
              <strong>정리 대상 —</strong> <span className="mono">WorkerEvent.VEST_CHECK</span>는 VIDEO_RISK 딕셔너리의 키로만 남아있고
              실제 영상 파이프라인에서 <span className="mono">action=&quot;vest_check&quot;</span>를 생성하는 코드가 없습니다.
              <span className="mono">labels.py</span>, <span className="mono">main.py</span> 목업 설명, <span className="mono">multimodal_fusion.py</span>의
              VIDEO_RISK 항목 3곳에서 함께 제거하면 됩니다. (별도 작업으로 대기 중)
            </div>
          </section>
        </main>

        <footer>
          AI CCTV 안전 판단 시스템 · labels.py / thresholds.py 정리 — issue #3 · PR #4 기준, 이후 변경분 반영
        </footer>
      </div>
    </>
  );
}
