"use client";

import { useSupabaseSession } from "../../_components/useSupabaseSession";
import LoginScreen, { LoadingScreen } from "../../_components/LoginScreen";
import LogoutButton from "../../_components/LogoutButton";

export default function PytestGuideReport() {
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
          --normal: #5DB98E; --normal-soft: rgba(93,185,142,0.16);
          --code-bg: #191D22;
          --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.28);
        }

        .rpt-pytest * { box-sizing: border-box; }
        .rpt-pytest {
          margin: 0; background: var(--bg); color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", "Malgun Gothic", "Segoe UI", sans-serif;
          line-height: 1.65; letter-spacing: -0.01em;
        }
        .rpt-pytest .mono { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans Mono CJK KR", monospace; }

        .rpt-pytest .topbar {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 24px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--border);
        }
        .rpt-pytest .topbar__title { font-size: 13px; font-weight: 700; }
        .rpt-pytest .topbar__tags { display: flex; gap: 6px; }
        .rpt-pytest .tag { font-family: ui-monospace, monospace; font-size: 11px; padding: 3px 8px; border-radius: 5px; border: 1px solid var(--border-strong); color: var(--text-dim); white-space: nowrap; }

        .rpt-pytest .toc {
          display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 24px;
          background: var(--bg-soft); border-bottom: 1px solid var(--border);
        }
        .rpt-pytest .toc a {
          font-family: ui-monospace, monospace; font-size: 11.5px; color: var(--text-dim);
          text-decoration: none; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--border-strong);
        }
        .rpt-pytest .toc a:hover, .rpt-pytest .toc a:focus-visible { color: var(--accent-strong); border-color: var(--accent); outline: none; }

        .rpt-pytest main { max-width: 860px; margin: 0 auto; padding: 56px 24px 96px; }

        .rpt-pytest .eyebrow { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-strong); margin: 0 0 10px; }
        .rpt-pytest h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; text-wrap: balance; line-height: 1.2; }
        .rpt-pytest .lede { font-size: 16px; color: var(--text-dim); max-width: 62ch; margin: 0; }

        .rpt-pytest .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 30px; }
        .rpt-pytest .stat { background: var(--surface); padding: 16px 18px; }
        .rpt-pytest .stat__value { font-size: 22px; font-weight: 800; }
        .rpt-pytest .stat__label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

        .rpt-pytest section { margin-top: 60px; }
        .rpt-pytest .section__head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; scroll-margin-top: 90px; }
        .rpt-pytest .section__num { font-family: ui-monospace, monospace; font-size: 13px; color: var(--accent-strong); font-weight: 700; }
        .rpt-pytest h2 { font-size: 20px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
        .rpt-pytest .section__desc { color: var(--text-dim); font-size: 14.5px; max-width: 64ch; margin: 10px 0 20px; }

        .rpt-pytest .steps { display: grid; gap: 14px; }
        .rpt-pytest .step { display: grid; grid-template-columns: 26px 1fr; gap: 12px; }
        .rpt-pytest .step__n { width: 26px; height: 26px; border-radius: 50%; background: var(--accent-soft); color: var(--accent-strong); font-family: ui-monospace, monospace; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .rpt-pytest .step__title { font-weight: 700; font-size: 14px; margin-bottom: 6px; }
        .rpt-pytest .step__note { font-size: 13px; color: var(--text-dim); margin-top: 6px; }

        .rpt-pytest .code {
          position: relative; background: var(--code-bg); border: 1px solid var(--border);
          border-radius: 10px; padding: 14px 16px; overflow-x: auto; font-size: 12.5px; line-height: 1.7;
        }
        .rpt-pytest .code::before {
          content: attr(data-lang); position: absolute; top: 8px; right: 12px;
          font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.7;
        }
        .rpt-pytest .code pre { margin: 0; white-space: pre; }
        .rpt-pytest .code code { font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; color: var(--text); }

        .rpt-pytest .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow); background: var(--surface); }
        .rpt-pytest table { border-collapse: collapse; width: 100%; min-width: 560px; font-size: 13.5px; }
        .rpt-pytest th, .rpt-pytest td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
        .rpt-pytest thead th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); background: var(--bg-soft); font-weight: 700; white-space: nowrap; }
        .rpt-pytest tbody tr:last-child td { border-bottom: none; }
        .rpt-pytest tbody tr:hover { background: var(--accent-soft); }
        .rpt-pytest td.num { font-family: ui-monospace, monospace; text-align: right; font-weight: 700; }

        .rpt-pytest .filecard {
          border: 1px solid var(--border); border-radius: 14px; background: var(--surface);
          box-shadow: var(--shadow); padding: 24px; margin-top: 20px; scroll-margin-top: 90px;
        }
        .rpt-pytest .filecard__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
        .rpt-pytest .filecard__name { font-family: ui-monospace, monospace; font-size: 15px; font-weight: 700; }
        .rpt-pytest .filecard__count { font-family: ui-monospace, monospace; font-size: 11px; color: var(--accent-strong); background: var(--accent-soft); padding: 3px 9px; border-radius: 999px; }

        .rpt-pytest .qa { display: grid; gap: 12px; margin-bottom: 18px; }
        .rpt-pytest .qa dt { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 4px; }
        .rpt-pytest .qa dd { margin: 0; font-size: 14px; }
        .rpt-pytest .qa .why { border-left: 3px solid var(--accent); background: var(--accent-soft); border-radius: 0 8px 8px 0; padding: 10px 14px; }

        .rpt-pytest h4.sub { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin: 20px 0 8px; }

        .rpt-pytest .term {
          background: #14171B; color: #C9D1D9; border-radius: 10px; padding: 14px 16px;
          font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; font-size: 12px; line-height: 1.75;
          overflow-x: auto; position: relative;
        }
        .rpt-pytest .term-status {
          display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.05em; padding: 2px 8px; border-radius: 999px; margin-bottom: 8px;
        }
        .rpt-pytest .term-status--pass { background: rgba(126,231,135,0.16); color: #7EE787; }
        .rpt-pytest .term-status--fail { background: rgba(255,123,114,0.16); color: #FF7B72; }
        .rpt-pytest .term pre { margin: 0; white-space: pre-wrap; word-break: break-word; }
        .rpt-pytest .pass-line { color: #7EE787; }
        .rpt-pytest .fail-line { color: #FF7B72; }
        .rpt-pytest .dim-line { color: #7D8590; }
        .rpt-pytest .repro-note { font-size: 12px; color: var(--text-dim); margin: 14px 0 6px; }

        .rpt-pytest .banner { display: flex; align-items: center; gap: 14px; border: 1px solid var(--normal); background: var(--normal-soft); border-radius: 12px; padding: 16px 20px; }
        .rpt-pytest .banner__num { font-size: 24px; font-weight: 800; color: var(--normal); font-family: ui-monospace, monospace; }
        .rpt-pytest .banner__text { font-size: 13.5px; }

        .rpt-pytest footer { max-width: 860px; margin: 0 auto; padding: 0 24px 64px; color: var(--text-dim); font-size: 12.5px; border-top: 1px solid var(--border); padding-top: 20px; }

        @media (max-width: 620px) {
          .rpt-pytest .stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="rpt-pytest">
        <div className="topbar">
          <div className="topbar__title">AI CCTV 안전 판단 시스템 — 테스트 가이드</div>
          <div className="topbar__tags"><span className="tag">issue #19</span><span className="tag">PR #20</span><span className="tag">+PR #34</span><span className="tag">2026-07-15 업데이트</span></div>
        </div>
        <nav className="toc">
          <a href="#quickstart">설치·실행</a>
          <a href="#f1">test_mock_scenarios</a>
          <a href="#f2">test_service</a>
          <a href="#f3">test_matching</a>
          <a href="#f4">test_api</a>
          <a href="#f5">test_multimodal_fusion</a>
        </nav>

        <main>
          <p className="eyebrow">개발 가이드 · pytest</p>
          <h1>리팩토링해도 로직이 그대로인지, 자동으로 검증합니다</h1>
          <p className="lede">
            함수 분리·파일 이동 같은 리팩토링 이후에도 기존 동작이 그대로 유지되는지 확인하기 위한
            회귀 테스트 모음입니다. 처음엔 4개 파일 18개였지만, Level 1~5 기준표 작업(PR #34) 이후
            <span className="mono">test_multimodal_fusion.py</span>가 추가됐고, 이후 판정 로직 감사(audit)를
            거치며 이 파일 하나만 37개까지 늘어 지금은 5개 파일 54개입니다.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat__value">5개</div><div className="stat__label">테스트 파일</div></div>
            <div className="stat"><div className="stat__value">54개</div><div className="stat__label">테스트 함수</div></div>
            <div className="stat"><div className="stat__value">4.2s</div><div className="stat__label">전체 실행 시간</div></div>
            <div className="stat"><div className="stat__value">0</div><div className="stat__label">수동 확인 필요 항목</div></div>
          </div>

          <section id="quickstart">
            <div className="section__head"><span className="section__num">00</span><h2>설치 및 사용 방법</h2></div>

            <div className="steps">
              <div className="step">
                <div className="step__n">1</div>
                <div>
                  <div className="step__title">최초 1회 — 의존성 설치</div>
                  <div className="code" data-lang="bash"><pre><code>pip install -r requirements-dev.txt</code></pre></div>
                  <div className="step__note">서버 실행용 의존성 + pytest가 함께 설치됩니다.</div>
                </div>
              </div>
              <div className="step">
                <div className="step__n">2</div>
                <div>
                  <div className="step__title">전체 테스트 실행</div>
                  <div className="code" data-lang="bash"><pre><code>pytest</code></pre></div>
                  <div className="step__note">tests/ 폴더 안의 모든 테스트 파일을 한 번에 실행합니다.</div>
                </div>
              </div>
              <div className="step">
                <div className="step__n">3</div>
                <div>
                  <div className="step__title">특정 파일만 실행</div>
                  <div className="code" data-lang="bash"><pre><code>pytest tests/test_service.py -v</code></pre></div>
                  <div className="step__note"><span className="mono">-v</span>(verbose) 옵션을 붙이면 어떤 테스트 함수가 통과/실패했는지 하나씩 자세히 보여줍니다.</div>
                </div>
              </div>
              <div className="step">
                <div className="step__n">4</div>
                <div>
                  <div className="step__title">무엇을 검증하나요?</div>
                  <div className="step__note" style={{ marginTop: 0 }}>
                    · 리팩토링 시 mock 시나리오 baseline(위험 점수 / 등급)이 깨지지 않았는지<br />
                    · <span className="mono">/health</span>, <span className="mono">/run-once</span> 등 핵심 엔드포인트가 정상 응답하는지<br />
                    — 이 두 가지를 사람이 손으로 확인하지 않아도 자동으로 잡아냅니다.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="section__head"><span className="section__num">01</span><h2>테스트 파일 요약</h2></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th style={{ width: "28px" }}>#</th><th>파일</th><th>테스트 개수</th><th>핵심 검증 대상</th></tr></thead>
                <tbody>
                  <tr><td className="num">1</td><td className="mono">test_mock_scenarios.py</td><td className="num">7</td><td>위험 등급/점수 baseline 회귀</td></tr>
                  <tr><td className="num">2</td><td className="mono">test_service.py</td><td className="num">3</td><td>risk_scoring 분리 후 None 안전 처리</td></tr>
                  <tr><td className="num">3</td><td className="mono">test_matching.py</td><td className="num">3</td><td>bio-cctv 매칭 로직</td></tr>
                  <tr><td className="num">4</td><td className="mono">test_api.py</td><td className="num">4</td><td>API 엔드포인트 정상 응답</td></tr>
                  <tr><td className="num">5</td><td className="mono">test_multimodal_fusion.py</td><td className="num">37</td><td>Level 1~5 기준표 + 갭 케이스 + 판정 로직 감사(audit) 회귀</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="f1">
            <div className="section__head"><span className="section__num">02</span><h2>test_mock_scenarios.py</h2></div>
            <div className="filecard">
              <div className="filecard__head"><span className="filecard__name">test_mock_scenarios.py</span><span className="filecard__count">7 tests</span></div>

              <dl className="qa">
                <div>
                  <dt>무엇을 테스트하는가</dt>
                  <dd><span className="mono">build_mock_context()</span> → <span className="mono">analyze_worker()</span>로 이어지는 전체 분석 파이프라인이, 8개 mock 시나리오 중 7개(random 제외)에 대해 항상 같은 위험 등급(<span className="mono">overall_risk</span>)과 점수(<span className="mono">score</span>)를 내는지 확인합니다.</dd>
                </div>
                <div>
                  <dt>왜 테스트하는가</dt>
                  <dd className="why">리팩토링(함수 분리, 파일 이동 등)을 할 때마다 &quot;로직은 안 건드렸다&quot;고 주장하는 근거가 필요합니다. 이 테스트가 있으면 숫자가 하나라도 틀어지는 순간 바로 잡아냅니다 — 지금까지 스크래치 스크립트로 손수 반복했던 검증을 고정한 것입니다.</dd>
                </div>
              </dl>

              <h4 className="sub">코드</h4>
              <div className="code" data-lang="python"><pre><code>{`"""
mock 시나리오 baseline 회귀 테스트.
리팩토링 전후로 위험도 점수/등급이 바뀌지 않았는지 확인한다.
"""
import pytest

from app.mock_scenarios import build_mock_context
from app.analysis import analyze_worker

# System A(overall_risk)가 System B(fuse())의 severity를 재포장하는 어댑터로
# 바뀐 뒤의 baseline (severity: critical->critical, warning->high,
# caution->medium, normal->low 매핑 결과)
SCENARIO_BASELINES = {
    "normal":    ("low",      10.0),
    "fainting":  ("critical", 90.0),
    "crouching": ("medium",   50.0),
    "sos":       ("critical", 95.0),
    "sitting":   ("low",      10.0),
    "no_helmet": ("high",     65.0),
    "geofence":  ("critical", 95.0),
}

@pytest.mark.parametrize("scenario, expected", SCENARIO_BASELINES.items())
def test_scenario_baseline(scenario, expected):
    expected_risk, expected_score = expected
    ctx = build_mock_context(scenario)
    result = analyze_worker(ctx)

    assert result.overall_risk == expected_risk
    assert result.score == expected_score`}</code></pre></div>

              <div className="step__note" style={{ margin: "10px 0 0" }}>System A/B 통합(PR #35) 이후 <span className="mono">overall_risk</span>가 <span className="mono">fuse()</span>의 severity를 그대로 재포장하도록 바뀌면서, sitting은 medium→low로, no_helmet/geofence는 다른 점수대로 baseline 자체가 갱신됐습니다.</div>

              <h4 className="sub">성공했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--pass">7 PASSED</span>
                <pre><span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[normal-expected0] PASSED</span> [ 14%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[fainting-expected1] PASSED</span> [ 28%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[crouching-expected2] PASSED</span> [ 42%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[sos-expected3] PASSED</span> [ 57%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[sitting-expected4] PASSED</span> [ 71%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[no_helmet-expected5] PASSED</span> [ 85%]
<span className="pass-line">tests/test_mock_scenarios.py::test_scenario_baseline[geofence-expected6] PASSED</span> [100%]

<span className="pass-line">7 passed in 0.65s</span></pre>
              </div>

              <p className="repro-note">fainting 기대값을 일부러 99.0으로 바꿔서 재현</p>
              <h4 className="sub">실패했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--fail">1 FAILED</span>
                <pre><span className="fail-line">tests/test_mock_scenarios.py::test_scenario_baseline[fainting-expected1] FAILED</span> [ 28%]

<span className="dim-line">================================== FAILURES ===================================</span>
<span className="dim-line">_________________ test_scenario_baseline[fainting-expected1] __________________</span>
tests\test_mock_scenarios.py:30: in test_scenario_baseline
    assert result.score == expected_score
<span className="fail-line">E   AssertionError: assert 90.0 == 99.0</span>

<span className="fail-line">FAILED tests/test_mock_scenarios.py::test_scenario_baseline[fainting-expected1]</span>
<span className="fail-line">1 failed, 6 passed in 1.42s</span></pre>
              </div>
            </div>
          </section>

          <section id="f2">
            <div className="section__head"><span className="section__num">03</span><h2>test_service.py</h2></div>
            <div className="filecard">
              <div className="filecard__head"><span className="filecard__name">test_service.py</span><span className="filecard__count">3 tests</span></div>

              <dl className="qa">
                <div>
                  <dt>무엇을 테스트하는가</dt>
                  <dd>
                    · <span className="mono">score_bio_signal(None)</span> → 신호가 없을 때 <span className="mono">(0.0, [])</span>를 안전하게 반환하는지 (엣지케이스)<br />
                    · <span className="mono">calculate_risk()</span>가 fainting/normal 시나리오에서 등급·점수·reasons를 올바르게 조립하는지
                  </dd>
                </div>
                <div>
                  <dt>왜 테스트하는가</dt>
                  <dd className="why">최근 <span className="mono">service.py</span>를 <span className="mono">risk_scoring.py</span> / <span className="mono">bio_fusion.py</span>로 3-way 분리하면서, 함수 시그니처가 바뀌었습니다(<span className="mono">ctx.video_signal</span> → <span className="mono">video_result</span> 파라미터 직접 전달). None 입력 시 크래시가 나지 않는 게 이 분리 작업의 핵심 검증 포인트였습니다.</dd>
                </div>
              </dl>

              <div className="step__note" style={{ marginBottom: "16px" }}>
                System A/B 통합(PR #35)에서 <span className="mono">score_video_action()</span> 자체가 죽은 코드로 삭제되면서
                <span className="mono">test_score_video_action_none_returns_zero</span>도 함께 제거됐고(4→3개),
                <span className="mono">test_calculate_risk_normal_scenario_has_no_reasons</span>는
                <span className="mono">calculate_risk()</span>가 이제 &quot;정상&quot;에도 reason 문구를 하나 반환하도록 바뀌면서
                <span className="mono">test_calculate_risk_normal_scenario_has_single_normal_reason</span>으로 이름과 단언을 함께 갱신했습니다.
              </div>

              <h4 className="sub">코드</h4>
              <div className="code" data-lang="python"><pre><code>{`"""
service.py / risk_scoring.py 단위 테스트.
"""
from app.risk_scoring import score_bio_signal
from app.mock_scenarios import build_mock_context
from app.analysis import convert_context_to_request
from app.service import calculate_risk


def test_score_bio_signal_none_returns_zero():
    score, reasons = score_bio_signal(None)
    assert score == 0.0
    assert reasons == []


def test_calculate_risk_fainting_scenario():
    ctx = build_mock_context("fainting")
    req = convert_context_to_request(ctx)
    result = calculate_risk(req)

    assert result["overall_risk"] == "critical"
    assert result["score"] == 90.0
    assert "쓰러짐" in result["detail"]["reasons"][0]


def test_calculate_risk_normal_scenario_has_single_normal_reason():
    # fuse() 기반 어댑터로 바뀐 뒤로는 "정상"도 reason 문구 하나를 항상 반환함
    # (빈 리스트가 아니라 "일반 작업기준 충족" 같은 명시적 근거)
    ctx = build_mock_context("normal")
    req = convert_context_to_request(ctx)
    result = calculate_risk(req)

    assert result["overall_risk"] == "low"
    assert result["detail"]["reasons"] == ["일반 작업기준 충족"]`}</code></pre></div>

              <h4 className="sub">성공했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--pass">3 PASSED</span>
                <pre><span className="pass-line">tests/test_service.py::test_score_bio_signal_none_returns_zero PASSED</span>              [ 33%]
<span className="pass-line">tests/test_service.py::test_calculate_risk_fainting_scenario PASSED</span>                [ 66%]
<span className="pass-line">tests/test_service.py::test_calculate_risk_normal_scenario_has_single_normal_reason PASSED</span> [100%]

<span className="pass-line">3 passed in 2.4s</span></pre>
              </div>

              <p className="repro-note">fainting 기대 점수를 일부러 999.0으로 바꿔서 재현</p>
              <h4 className="sub">실패했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--fail">1 FAILED</span>
                <pre><span className="fail-line">tests/test_service.py::test_calculate_risk_fainting_scenario FAILED</span>      [ 66%]

<span className="dim-line">================================== FAILURES ===================================</span>
<span className="fail-line">E   assert 90.0 == 999.0</span>
tests/test_service.py:22: assert 90.0 == 999.0

<span className="fail-line">FAILED tests/test_service.py::test_calculate_risk_fainting_scenario</span>
<span className="fail-line">1 failed, 2 passed in 2.1s</span></pre>
              </div>
            </div>
          </section>

          <section id="f3">
            <div className="section__head"><span className="section__num">04</span><h2>test_matching.py</h2></div>
            <div className="filecard">
              <div className="filecard__head"><span className="filecard__name">test_matching.py</span><span className="filecard__count">3 tests</span></div>

              <dl className="qa">
                <div>
                  <dt>무엇을 테스트하는가</dt>
                  <dd>
                    · bio 데이터와 cctv 데이터가 <span className="mono">color_group</span> + <span className="mono">timestamp</span>(±30초) 기준으로 정상 매칭되는지<br />
                    · <span className="mono">color_group</span>이 없는 수급업체 워커는 스킵되는지<br />
                    · cctv 매칭이 안 돼도 bio 정보만으로 <span className="mono">WorkerContext</span>가 만들어지는지 (video_signal=None)
                  </dd>
                </div>
                <div>
                  <dt>왜 테스트하는가</dt>
                  <dd className="why"><span className="mono">match_worker_contexts()</span>는 이번 리팩토링 시리즈(#11)에서 처음으로 별도 파일(<span className="mono">matching.py</span>)로 분리된 핵심 로직인데, 지금까지 이 함수 자체에 대한 자동 테스트가 하나도 없었습니다. 매칭 실패/스킵 조건이 은근히 까다로워서 고정해둘 가치가 큽니다.</dd>
                </div>
              </dl>

              <h4 className="sub">코드</h4>
              <div className="code" data-lang="python"><pre><code>{`"""
matching.py 단위 테스트.
"""
from app.matching import match_worker_contexts

def test_match_worker_contexts_basic_match():
    bio_items = [{
        "watch_id": "worker_1",
        "timestamp": "2026-07-09 12:00:00",
        "area": "기계실1",
        "color_group": "red",
        "metrics": {"heart_rate": 140, "hrv": 15},
        "derived_states": {},
    }]
    cctv_items = [{
        "cam_id": "cam_1",
        "timestamp": "2026-07-09 12:00:05",
        "camera_status": "NORMAL",
        "fps": 30.0,
        "total_workers": 1,
        "detected_objects": [{
            "color_group": "red",
            "track_id": "t1",
            "behavior": {"current_action": "fainting", "is_abnormal": True, "action_duration_sec": 0},
            "ppe_status": {"helmet": True},
        }],
    }]

    contexts = match_worker_contexts(bio_items, cctv_items)

    assert len(contexts) == 1
    ctx = contexts[0]
    assert ctx.worker_id == "worker_1"
    assert ctx.video_signal is not None
    assert ctx.video_signal.current_action == "fainting"
    assert ctx.bio_signal.heart_rate == 140

def test_match_worker_contexts_skips_contractor_without_color_group():
    bio_items = [{
        "watch_id": "contractor_1",
        "timestamp": "2026-07-09 12:00:00",
        "area": "기계실1",
        "color_group": None,
        "metrics": {},
        "derived_states": {},
    }]

    contexts = match_worker_contexts(bio_items, [])

    assert contexts == []

def test_match_worker_contexts_no_cctv_match_still_returns_bio_only_context():
    bio_items = [{
        "watch_id": "worker_2",
        "timestamp": "2026-07-09 12:00:00",
        "area": "기계실1",
        "color_group": "blue",
        "metrics": {"heart_rate": 75},
        "derived_states": {},
    }]

    contexts = match_worker_contexts(bio_items, [])

    assert len(contexts) == 1
    assert contexts[0].video_signal is None
    assert contexts[0].bio_signal.heart_rate == 75`}</code></pre></div>

              <h4 className="sub">성공했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--pass">3 PASSED</span>
                <pre><span className="pass-line">tests/test_matching.py::test_match_worker_contexts_basic_match PASSED</span>    [ 33%]
<span className="pass-line">tests/test_matching.py::test_match_worker_contexts_skips_contractor_without_color_group PASSED</span> [ 66%]
<span className="pass-line">tests/test_matching.py::test_match_worker_contexts_no_cctv_match_still_returns_bio_only_context PASSED</span> [100%]

<span className="pass-line">3 passed in 0.20s</span></pre>
              </div>

              <p className="repro-note">기대 action을 일부러 &quot;sitting&quot;으로 바꿔서 재현</p>
              <h4 className="sub">실패했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--fail">1 FAILED</span>
                <pre><span className="fail-line">tests/test_matching.py::test_match_worker_contexts_basic_match FAILED</span> [ 33%]

<span className="dim-line">================================== FAILURES ===================================</span>
<span className="fail-line">E   AssertionError: assert &apos;fainting&apos; == &apos;sitting&apos;</span>
<span className="dim-line">      - sitting
      + fainting</span>
tests/test_matching.py:36: AssertionError: assert &apos;fainting&apos; == &apos;sitting&apos;

<span className="fail-line">FAILED tests/test_matching.py::test_match_worker_contexts_basic_match</span>
<span className="fail-line">1 failed in 0.17s</span></pre>
              </div>
            </div>
          </section>

          <section id="f4">
            <div className="section__head"><span className="section__num">05</span><h2>test_api.py</h2></div>
            <div className="filecard">
              <div className="filecard__head"><span className="filecard__name">test_api.py</span><span className="filecard__count">4 tests</span></div>

              <dl className="qa">
                <div>
                  <dt>무엇을 테스트하는가</dt>
                  <dd>FastAPI <span className="mono">TestClient</span>로 실제 HTTP 요청을 흉내내서 <span className="mono">/health</span>, <span className="mono">/run-once</span>, <span className="mono">/mock/analyze</span>, <span className="mono">/mock/scenarios</span> 엔드포인트가 정상 응답하는지 확인합니다. 특히 <span className="mono">/run-once</span>는 미들웨어가 꺼져있는 상태에서도 500 에러 없이 빈 결과로 처리되는지를 검증합니다.</dd>
                </div>
                <div>
                  <dt>왜 테스트하는가</dt>
                  <dd className="why">지금까지 매번 Swagger UI를 열어서 손으로 클릭/확인했던 걸 자동화합니다. 특히 <span className="mono">/run-once</span>는 최근 <span className="mono">safe_print</span> 수정 작업의 핵심 검증 대상이었던 엔드포인트라, 앞으로도 이게 깨지면 바로 알아채야 합니다.</dd>
                </div>
              </dl>

              <h4 className="sub">코드</h4>
              <div className="code" data-lang="python"><pre><code>{`"""
FastAPI TestClient를 이용한 엔드포인트 테스트.
Swagger로 손으로 확인하던 것 중 핵심 경로를 자동화한다.
"""
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

def test_health():
    res = client.get("/health")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "ok"

def test_run_once_without_middleware():
    # 미들웨어가 안 떠있어도 500 없이 빈 결과로 정상 처리돼야 함
    res = client.post("/run-once")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "success"
    assert body["matched_workers"] == 0

def test_mock_analyze_fainting():
    res = client.post("/mock/analyze", params={"scenario": "fainting"})
    assert res.status_code == 200
    body = res.json()
    assert body["result"]["overall_risk"] == "critical"
    assert body["result"]["score"] == 90.0

def test_mock_scenarios_list():
    res = client.get("/mock/scenarios")
    assert res.status_code == 200
    assert "fainting" in res.json()["scenarios"]`}</code></pre></div>

              <h4 className="sub">성공했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--pass">4 PASSED</span>
                <pre><span className="pass-line">tests/test_api.py::test_health PASSED</span>                                    [ 25%]
<span className="pass-line">tests/test_api.py::test_run_once_without_middleware PASSED</span>               [ 50%]
<span className="pass-line">tests/test_api.py::test_mock_analyze_fainting PASSED</span>                     [ 75%]
<span className="pass-line">tests/test_api.py::test_mock_scenarios_list PASSED</span>                       [100%]

<span className="pass-line">4 passed, 3 warnings in 3.01s</span></pre>
              </div>
              <div className="step__note" style={{ marginTop: "8px" }}>경고 2건은 FastAPI <span className="mono">on_event</span> deprecated / <span className="mono">httpx</span> testclient deprecated — 동작엔 영향 없음, 별도 이슈로 참고만 해둔 상태입니다.</div>

              <p className="repro-note">기대 matched_workers를 일부러 5로 바꿔서 재현 — 실제 서버 로그의 경고도 크래시 없이 같이 찍힘</p>
              <h4 className="sub">실패했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--fail">1 FAILED</span>
                <pre><span className="dim-line">⚠️ cctv/recent 조회 실패 (빈 목록 반환): All connection attempts failed
⚠️ bio/recent 조회 실패 (빈 목록 반환): All connection attempts failed
bio_items=0  cctv_items=0  matched=0</span>

tests/test_api.py:25: <span className="fail-line">assert 0 == 5</span>

<span className="fail-line">FAILED tests/test_api.py::test_run_once_without_middleware - assert 0 == 5</span>
<span className="fail-line">1 failed, 3 warnings in 3.61s</span></pre>
              </div>
            </div>
          </section>

          <section id="f5">
            <div className="section__head"><span className="section__num">06</span><h2>test_multimodal_fusion.py <span className="mono" style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400 }}>(PR #34 신규 · 2026-07-15 판정 로직 감사로 대폭 확장)</span></h2></div>
            <div className="filecard">
              <div className="filecard__head"><span className="filecard__name">test_multimodal_fusion.py</span><span className="filecard__count">37 tests</span></div>

              <dl className="qa">
                <div>
                  <dt>무엇을 테스트하는가</dt>
                  <dd><span className="mono">fuse()</span>가 Level 1~5 공식 기준표(법령 근거 매핑) 8개 조합, 표에 없어서 컨펌받은 갭 케이스 26개 조합, 그리고 PPE 위반 / SOS / fainting+fatigue 문구가 실제로 정확히 나오는지를 검증합니다. 26개 갭 케이스 중 다수는 시뮬레이터 실측 데이터에서 등급-점수 불일치(예: CAUTION인데 95점)를 발견한 뒤 추가된 것들입니다.</dd>
                </div>
                <div>
                  <dt>왜 테스트하는가</dt>
                  <dd className="why">Level 1~5 표를 반영하면서 조합 하나하나를 스크래치 스크립트로 손수 재현·확인했던 과정을 그대로 회귀 테스트로 옮겼습니다. 이후 실시간 시뮬레이터 로그를 분석하며 &quot;PPE 미착용 체크가 생체 상태 규칙보다 뒤에 있어서 위험이 가려지는&quot; 것 같은 실제 버그를 여러 건 발견했고, 고칠 때마다 그 조합을 테스트로 고정해서 &quot;테스트를 통과하면 전체 26개 판정 조합이 전부 커버된 것&quot;이 실제로 성립하도록 만들었습니다.</dd>
                </div>
              </dl>

              <h4 className="sub">코드</h4>
              <div className="code" data-lang="python"><pre><code>{`"""
multimodal_fusion.py::fuse() 가 Level1~5 기준표(법령 근거 매핑)대로
severity를 산출하는지 검증하는 회귀 테스트.
"""
import pytest

from app.multimodal_fusion import fuse
from app.labels import Severity


def _video(action, duration=10, helmet=True, harness=True, in_danger=False, high_altitude=False):
    return {
        "color_group": "red",
        "behavior": {
            "current_action": action,
            "is_abnormal": action in ("fainting", "sitting", "sos_action") or (
                action == "crouching" and duration >= 20
            ),
            "action_duration_sec": duration,
        },
        "ppe_status": {"helmet": helmet, "harness": harness, "vest": True},
        "zone_status": {"in_danger_zone": in_danger, "is_high_altitude": high_altitude},
    }


def _bio(state_code, is_abnormal, confidence=0.6):
    if state_code is None:
        return None
    return {"state_code": state_code, "is_abnormal": is_abnormal, "confidence": confidence}


# (제목, bio_result, video_object) -> 기대 severity
CASES = [
    ("Level5: 실신(생체)+실신(영상)",
     _bio("syncope", True), _video("fainting"), Severity.CRITICAL),

    ("Level5: 무관(생체)+구조요청(영상)",
     _bio("normal", False), _video("sos_action"), Severity.CRITICAL),

    ("Level4: 부정맥(생체)+웅크림 20초+(영상)",
     _bio("arrhythmia", True), _video("crouching", duration=25), Severity.WARNING),

    ("Level4: 부정맥(생체)+서있음(영상)",
     _bio("arrhythmia", True), _video("standing"), Severity.WARNING),

    ("Level4: 무관(생체)+보호구미착용(영상)",
     _bio("normal", False), _video("standing", helmet=False), Severity.WARNING),

    ("Level3: 과로(생체)+앉아있음(영상)",
     _bio("fatigue", True), _video("sitting"), Severity.CAUTION),

    ("Level3: 정상(생체)+웅크림 장시간(영상)",
     _bio("normal", False), _video("crouching", duration=25), Severity.CAUTION),

    ("Level1~2: 정상(생체)+서있음(영상)",
     _bio("normal", False), _video("standing"), Severity.NORMAL),
]


@pytest.mark.parametrize("title, bio_result, video_object, expected_severity", CASES)
def test_fuse_matches_level_table(title, bio_result, video_object, expected_severity):
    result = fuse(bio_result, video_object, sqi=0.9)
    assert result["severity"] == expected_severity, (
        f"{title}: expected {expected_severity}, got {result['severity']} "
        f"(risk_score={result['risk_score']}, reason={result['reason']})"
    )


def test_fuse_ppe_violation_cites_regulation():
    result = fuse(_bio("normal", False), _video("standing", helmet=False), sqi=0.9)
    assert "안전보건규칙" in result["reason"]


def test_fuse_sos_cites_regulation():
    result = fuse(None, _video("sos_action"), sqi=0.9)
    assert result["severity"] == Severity.CRITICAL


def test_fuse_fainting_fatigue_message_not_unconfirmed():
    # 영상 쓰러짐 + 생체=과로는 생체 데이터가 실제로 확인된 상태라
    # "생체 미확인" 문구(생체 데이터 없음 전용)를 쓰면 안 됨
    result = fuse(_bio("fatigue", True), _video("fainting"), sqi=0.9)
    assert result["severity"] == Severity.CRITICAL
    assert "미확인" not in result["recommendation"]
    assert "과로" in result["recommendation"]


# 기준표에 명시 안 돼서 컨펌받은 26개 갭 케이스 (전부 확정 완료)
GAP_CASES = [
    ("부정맥(생체)+실신(영상)",
     _bio("arrhythmia", True), _video("fainting"), Severity.CRITICAL),

    ("실신(영상) 단독 + 생체 정상 확인됨",
     _bio("normal", False), _video("fainting"), Severity.CRITICAL),

    ("실신(영상) 단독 + 생체 데이터 없음",
     None, _video("fainting"), Severity.CRITICAL),

    ("실신(생체) 단독 + 영상 정상 확인됨",
     _bio("syncope", True), _video("standing"), Severity.WARNING),

    ("실신(생체) 단독 + 영상 데이터 없음",
     _bio("syncope", True), None, Severity.WARNING),

    ("과로(생체)+웅크림 20초+(영상)",
     _bio("fatigue", True), _video("crouching", duration=25), Severity.CAUTION),

    ("지오펜스: 위험구역+고소구역+안전대미착용",
     _bio("normal", False),
     _video("standing", harness=False, in_danger=True, high_altitude=True),
     Severity.CRITICAL),

    # 구역 진입만(보호구는 정상 착용) → 컨펌 결과 NORMAL.
    ("위험구역만 진입 + 보호구 정상 착용",
     _bio("normal", False),
     _video("standing", in_danger=True),
     Severity.NORMAL),

    ("고소구역만 진입 + 보호구 정상 착용",
     _bio("normal", False),
     _video("standing", high_altitude=True),
     Severity.NORMAL),

    ("위험구역+헬멧 미착용 (구역 단독 케이스와 대조용)",
     _bio("normal", False),
     _video("standing", in_danger=True, helmet=False),
     Severity.CRITICAL),

    # 부정맥/과로/실신 단독이면 WARNING(또는 CAUTION)이지만, PPE 미착용+구역까지
    # 겹치면 그 결합 위반이 더 급박해서 CRITICAL로 격상 — 시뮬레이터 실측에서
    # "등급은 낮은데 점수만 95"인 불일치를 발견하고 하나씩 추가됨
    ("부정맥(생체)+헬멧미착용+고소구역(영상)",
     _bio("arrhythmia", True),
     _video("sitting", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    ("과로(생체)+헬멧미착용+고소구역(영상)",
     _bio("fatigue", True),
     _video("standing", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    ("실신(생체)+헬멧미착용+고소구역(영상)",
     _bio("syncope", True),
     _video("standing", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    # 쓰러짐(fainting)+실신/부정맥에 PPE위반+구역까지 겹친 경우
    ("실신(생체)+쓰러짐(영상)+헬멧미착용+고소구역",
     _bio("syncope", True),
     _video("fainting", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    ("부정맥(생체)+쓰러짐(영상)+헬멧미착용+고소구역",
     _bio("arrhythmia", True),
     _video("fainting", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    ("쓰러짐(영상) 단독+생체데이터없음+헬멧미착용+고소구역",
     None,
     _video("fainting", high_altitude=True, helmet=False),
     Severity.CRITICAL),

    # 규칙 4의 세 번째 분기(영상도 이상행동이지만 쓰러짐은 아닌 경우)
    ("실신(생체) 단독+앉음(영상, 쓰러짐 아닌 이상행동)",
     _bio("syncope", True),
     _video("sitting"),
     Severity.CRITICAL),

    # PPE위반이 구역 없이 단독으로만 있는 경우
    ("과로(생체)+헬멧미착용(영상), 구역없음",
     _bio("fatigue", True),
     _video("standing", helmet=False),
     Severity.WARNING),

    ("부정맥(생체)+헬멧미착용(영상), 구역없음",
     _bio("arrhythmia", True),
     _video("standing", helmet=False),
     Severity.WARNING),

    # SOS는 생체/PPE/구역 전부와 무관하게 최우선 규칙이라, 지오펜스 가중이
    # 겹쳐도 등급은 그대로 CRITICAL — 점수만 95→100으로 캡됨
    ("SOS(영상)+헬멧미착용+고소구역",
     _bio("normal", False),
     _video("sos_action", helmet=False, high_altitude=True),
     Severity.CRITICAL),

    ("정상(생체)+쓰러짐(영상)+헬멧미착용+고소구역",
     _bio("normal", False),
     _video("fainting", helmet=False, high_altitude=True),
     Severity.CRITICAL),

    ("과로(생체)+쓰러짐(영상)+헬멧미착용+고소구역",
     _bio("fatigue", True),
     _video("fainting", helmet=False, high_altitude=True),
     Severity.CRITICAL),

    ("과로(생체)+쓰러짐(영상), 구역없음",
     _bio("fatigue", True),
     _video("fainting"),
     Severity.CRITICAL),

    # 웅크림 20초 미만(지속시간 조건 미충족)
    ("정상(생체)+웅크림 20초 미만(영상)",
     _bio("normal", False),
     _video("crouching", duration=10),
     Severity.NORMAL),

    # crouching<20초는 is_abnormal=False라 "영상 정상 확인됨" 분기(WARNING)를
    # 탐. sitting(즉시 이상행동)과 대조적으로 잠깐의 정상 동작(물건 줍기 등)일
    # 수 있어 CRITICAL로 격상하지 않기로 컨펌 — 오탐 늘리는 것보다 낫다고 판단
    ("실신(생체)+웅크림 20초 미만(영상, 정상 취급)",
     _bio("syncope", True),
     _video("crouching", duration=10),
     Severity.WARNING),

    # 20초 넘어가면 is_abnormal=True로 바뀌어 자동으로 CRITICAL 격상됨.
    # 별도 코드 수정 없이 기존 20초 문턱값이 이 역할을 이미 하고 있었음
    ("실신(생체)+웅크림 20초 이상(영상)",
     _bio("syncope", True),
     _video("crouching", duration=25),
     Severity.CRITICAL),
]


@pytest.mark.parametrize("title, bio_result, video_object, expected_severity", GAP_CASES)
def test_fuse_gap_cases_confirmed(title, bio_result, video_object, expected_severity):
    result = fuse(bio_result, video_object, sqi=0.9)
    assert result["severity"] == expected_severity, (
        f"{title}: expected {expected_severity}, got {result['severity']} "
        f"(risk_score={result['risk_score']}, reason={result['reason']})"
    )`}</code></pre></div>

              <h4 className="sub">성공했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--pass">37 PASSED</span>
                <pre><span className="pass-line">test_fuse_matches_level_table[Level5: 실신(생체)+실신(영상)] PASSED</span> [  3%]
<span className="pass-line">test_fuse_matches_level_table[Level5: 무관(생체)+구조요청(영상)] PASSED</span> [  5%]
<span className="pass-line">test_fuse_matches_level_table[Level4: 부정맥(생체)+웅크림 20초+(영상)] PASSED</span> [  8%]
<span className="pass-line">test_fuse_matches_level_table[Level4: 부정맥(생체)+서있음(영상)] PASSED</span> [ 11%]
<span className="pass-line">test_fuse_matches_level_table[Level4: 무관(생체)+보호구미착용(영상)] PASSED</span> [ 14%]
<span className="pass-line">test_fuse_matches_level_table[Level3: 과로(생체)+앉아있음(영상)] PASSED</span> [ 16%]
<span className="pass-line">test_fuse_matches_level_table[Level3: 정상(생체)+웅크림 장시간(영상)] PASSED</span> [ 19%]
<span className="pass-line">test_fuse_matches_level_table[Level1~2: 정상(생체)+서있음(영상)] PASSED</span> [ 22%]
<span className="pass-line">test_fuse_ppe_violation_cites_regulation PASSED</span> [ 24%]
<span className="pass-line">test_fuse_sos_cites_regulation PASSED</span> [ 27%]
<span className="pass-line">test_fuse_fainting_fatigue_message_not_unconfirmed PASSED</span> [ 30%]
<span className="pass-line">test_fuse_gap_cases_confirmed[부정맥(생체)+실신(영상)] PASSED</span> [ 32%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(영상) 단독 + 생체 정상 확인됨] PASSED</span> [ 35%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(영상) 단독 + 생체 데이터 없음] PASSED</span> [ 38%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체) 단독 + 영상 정상 확인됨] PASSED</span> [ 41%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체) 단독 + 영상 데이터 없음] PASSED</span> [ 43%]
<span className="pass-line">test_fuse_gap_cases_confirmed[과로(생체)+웅크림 20초+(영상)] PASSED</span> [ 46%]
<span className="pass-line">test_fuse_gap_cases_confirmed[지오펜스: 위험구역+고소구역+안전대미착용] PASSED</span> [ 49%]
<span className="pass-line">test_fuse_gap_cases_confirmed[위험구역만 진입 + 보호구 정상 착용] PASSED</span> [ 51%]
<span className="pass-line">test_fuse_gap_cases_confirmed[고소구역만 진입 + 보호구 정상 착용] PASSED</span> [ 54%]
<span className="pass-line">test_fuse_gap_cases_confirmed[위험구역+헬멧 미착용 (구역 단독 케이스와 대조용)] PASSED</span> [ 57%]
<span className="pass-line">test_fuse_gap_cases_confirmed[부정맥(생체)+헬멧미착용+고소구역(영상)] PASSED</span> [ 59%]
<span className="pass-line">test_fuse_gap_cases_confirmed[과로(생체)+헬멧미착용+고소구역(영상)] PASSED</span> [ 62%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체)+헬멧미착용+고소구역(영상)] PASSED</span> [ 65%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체)+쓰러짐(영상)+헬멧미착용+고소구역] PASSED</span> [ 68%]
<span className="pass-line">test_fuse_gap_cases_confirmed[부정맥(생체)+쓰러짐(영상)+헬멧미착용+고소구역] PASSED</span> [ 70%]
<span className="pass-line">test_fuse_gap_cases_confirmed[쓰러짐(영상) 단독+생체데이터없음+헬멧미착용+고소구역] PASSED</span> [ 73%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체) 단독+앉음(영상, 쓰러짐 아닌 이상행동)] PASSED</span> [ 76%]
<span className="pass-line">test_fuse_gap_cases_confirmed[과로(생체)+헬멧미착용(영상), 구역없음] PASSED</span> [ 78%]
<span className="pass-line">test_fuse_gap_cases_confirmed[부정맥(생체)+헬멧미착용(영상), 구역없음] PASSED</span> [ 81%]
<span className="pass-line">test_fuse_gap_cases_confirmed[SOS(영상)+헬멧미착용+고소구역] PASSED</span> [ 84%]
<span className="pass-line">test_fuse_gap_cases_confirmed[정상(생체)+쓰러짐(영상)+헬멧미착용+고소구역] PASSED</span> [ 86%]
<span className="pass-line">test_fuse_gap_cases_confirmed[과로(생체)+쓰러짐(영상)+헬멧미착용+고소구역] PASSED</span> [ 89%]
<span className="pass-line">test_fuse_gap_cases_confirmed[과로(생체)+쓰러짐(영상), 구역없음] PASSED</span> [ 92%]
<span className="pass-line">test_fuse_gap_cases_confirmed[정상(생체)+웅크림 20초 미만(영상)] PASSED</span> [ 95%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체)+웅크림 20초 미만(영상, 정상 취급)] PASSED</span> [ 97%]
<span className="pass-line">test_fuse_gap_cases_confirmed[실신(생체)+웅크림 20초 이상(영상)] PASSED</span> [100%]

<span className="pass-line">37 passed in 0.24s</span></pre>
              </div>

              <p className="repro-note">&quot;위험구역만 진입 + 보호구 정상 착용&quot; 기대값을 일부러 CAUTION으로 바꿔서 재현</p>
              <h4 className="sub">실패했을 때 로그</h4>
              <div className="term">
                <span className="term-status term-status--fail">1 FAILED</span>
                <pre><span className="fail-line">test_fuse_gap_cases_confirmed[위험구역만 진입 + 보호구 정상 착용] FAILED</span> [ 51%]

<span className="dim-line">================================== FAILURES ===================================</span>
<span className="fail-line">E   AssertionError: 위험구역만 진입 + 보호구 정상 착용: expected Severity.CAUTION, got Severity.NORMAL (risk_score=10, reason=일반 작업기준 충족)</span>

<span className="fail-line">FAILED test_fuse_gap_cases_confirmed[위험구역만 진입 + 보호구 정상 착용]</span>
<span className="fail-line">1 failed, 36 passed in 0.23s</span></pre>
              </div>
            </div>
          </section>

          <section>
            <div className="section__head"><span className="section__num">07</span><h2>최종 확인</h2></div>
            <p className="section__desc">5개 파일 모두 원상복구 후 <span className="mono">pytest</span>를 돌리면 다시 정상 상태로 돌아옵니다.</p>
            <div className="banner">
              <div className="banner__num">54 / 54</div>
              <div className="banner__text">passed, 3 warnings in 4.15s</div>
            </div>
          </section>
        </main>

        <footer>
          AI CCTV 안전 판단 시스템 · pytest 테스트 스위트 가이드 — issue #19 · PR #20 / #34 기준, 2026-07-15 업데이트(54개)
        </footer>
      </div>
    </>
  );
}
