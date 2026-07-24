import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bio/CCTV E2E 시나리오 현재 현황" };

const documentHtml = String.raw`<title>Bio/CCTV E2E 시나리오 현재 현황</title>
<style>
  :root{--bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--ok-soft:rgba(47,125,90,.12);--warn:#C97A1E;--warn-soft:rgba(201,122,30,.13);--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--ok-soft:rgba(93,185,142,.16);--warn:#E5A653;--warn-soft:rgba(229,166,83,.16);--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}.mono{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)}.top b{font-size:13px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)}nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:940px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:72ch}
  .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:21px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:60px}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}h2{font-size:21px;margin:0}.desc{color:var(--dim);font-size:14px;max-width:72ch}
  .wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow);margin-top:18px}table{width:100%;border-collapse:collapse;min-width:720px;font-size:13px}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .pill{display:inline-flex;align-items:center;border-radius:999px;padding:3px 9px;font:700 10.5px ui-monospace,monospace}.pass{background:var(--ok-soft);color:var(--ok)}.pending{background:var(--warn-soft);color:var(--warn)}.auto{background:var(--accent-soft);color:var(--accent)}
  .batch{display:grid;grid-template-columns:75px 1fr 100px;gap:12px;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin:10px 0;box-shadow:var(--shadow)}.batch strong{font-family:ui-monospace,monospace}.batch p{margin:0;font-size:13px;color:var(--dim)}.batch .count{text-align:right;font:700 12px ui-monospace,monospace;color:var(--accent)}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--warn);border-radius:9px;background:var(--warn-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}
  .bar{height:12px;border-radius:999px;background:var(--soft);overflow:hidden;margin:12px 0}.bar i{display:block;height:100%;background:var(--ok);width:45.65%}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.card{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:16px;box-shadow:var(--shadow)}.card strong{display:block;font-size:19px}.card span{font-size:12px;color:var(--dim)}
  footer{max-width:940px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:700px){.stats{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}.batch{grid-template-columns:65px 1fr}} 
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — 시나리오 테스트 현황</b><span class="tag">2026-07-24</span></div>
<nav><a href="#summary">요약</a><a href="#batches">자동 배치</a><a href="#scope">전체 체크리스트</a><a href="#evidence">증적 상태</a><a href="#next">다음 확인</a></nav>
<main>
  <p class="eyebrow">SCENARIO TEST · CURRENT STATUS</p>
  <h1>자동화 42개 통과 표시, 수동 영역 50개 대기</h1>
  <p class="lede"><span class="mono">manual-e2e-test-checklist.md</span>의 체크 상태와 <span class="mono">scenario_cases.json</span>의 실제 등록 항목을 분리해 보여줍니다. “체크됨”과 “실행 결과 JSON이 보관됨”은 서로 다른 상태입니다.</p>
  <div class="stats"><div class="stat"><strong>103</strong><span>체크리스트 ID 범위</span></div><div class="stat"><strong>42</strong><span>JSON 등록 케이스</span></div><div class="stat"><strong>42</strong><span>체크리스트 통과 표시</span></div><div class="stat"><strong>50</strong><span>T001~T050 미체크</span></div><div class="stat"><strong>0</strong><span>저장된 result JSON</span></div></div>

  <section id="summary"><div class="head"><span class="num">01</span><h2>자동화 구성</h2></div>
    <div class="cards"><div class="card"><strong>30개</strong><span>미들웨어 + FastAPI 실제 E2E</span></div><div class="card"><strong>6개</strong><span>로컬 최종 POST 계약 검사</span></div><div class="card"><strong>6개</strong><span>지정 pytest 실행</span></div></div>
    <div class="note"><strong>해석:</strong> 체크리스트에는 T001~T103이 있지만 번호가 연속으로 모두 등록된 것은 아닙니다. 현재 JSON 자동화 범위는 배치 6~11의 42개이며, T001~T050은 수동 투입 또는 기존 pytest 근거를 사용하는 별도 영역입니다.</div>
  </section>

  <section id="batches"><div class="head"><span class="num">02</span><h2>배치별 현재 상태</h2></div>
    <div class="batch"><strong>Batch 06</strong><p>기본 Late Fusion 등급표 · T051~T060</p><span class="count">10 / 10 ✓</span></div>
    <div class="batch"><strong>Batch 07</strong><p>실신·쓰러짐·SOS · T061, T062, T063, T065, T067~T070</p><span class="count">8 / 8 ✓</span></div>
    <div class="batch"><strong>Batch 08</strong><p>PPE 및 Geofence · T074, T075, T079, T080</p><span class="count">4 / 4 ✓</span></div>
    <div class="batch"><strong>Batch 09</strong><p>복합 위험 조합 · T081~T083, T085~T089</p><span class="count">8 / 8 ✓</span></div>
    <div class="batch"><strong>Batch 10</strong><p>POST 계약 6개 + 오류 격리 pytest 3개 · T091~T096, T098~T100</p><span class="count">9 / 9 ✓</span></div>
    <div class="batch"><strong>Batch 11</strong><p>Fusion 복합 키 중복 정책 pytest · T101~T103</p><span class="count">3 / 3 ✓</span></div>
  </section>

  <section id="scope"><div class="head"><span class="num">03</span><h2>전체 체크리스트 범위</h2></div>
    <div class="wrap"><table><thead><tr><th>범위</th><th>주제</th><th>실행 방식</th><th>체크 상태</th><th>비고</th></tr></thead><tbody>
      <tr><td>T001~T010</td><td>API 수신 및 recent 응답</td><td>수동 투입 / 기존 pytest</td><td><span class="pill pending">대기</span></td><td>미들웨어 오류 응답 조작은 별도 도구 필요</td></tr>
      <tr><td>T011~T020</td><td>Bio 계약 및 metrics 정규화</td><td>기존 pytest / 수동 확인</td><td><span class="pill pending">대기</span></td><td>중첩 metrics와 잘못된 항목 격리</td></tr>
      <tr><td>T021~T030</td><td>최신 Bio ID 및 Fusion 중복</td><td>기존 pytest / 수동 확인</td><td><span class="pill pending">대기</span></td><td>현재 일부는 배치 11 자동 항목과 겹침</td></tr>
      <tr><td>T031~T040</td><td>CCTV 프레임·객체 검증</td><td>기존 pytest / 수동 확인</td><td><span class="pill pending">대기</span></td><td>오류 격리 대표 항목은 T098~T099로 자동화</td></tr>
      <tr><td>T041~T050</td><td>Bio/CCTV 매칭 규칙</td><td>기존 pytest / 수동 확인</td><td><span class="pill pending">대기</span></td><td>color_group, ±30초, area 우선순위</td></tr>
      <tr><td>T051~T090 등록분</td><td>Fusion 판정·PPE·Geofence</td><td>실제 E2E</td><td><span class="pill pass">체크됨</span></td><td>30개 등록</td></tr>
      <tr><td>T091~T096</td><td>최종 POST 계약</td><td>로컬 계약 검사</td><td><span class="pill pass">체크됨</span></td><td>미들웨어 없이 실행 가능</td></tr>
      <tr><td>T098~T103</td><td>오류 격리·Fusion 중복</td><td>지정 pytest</td><td><span class="pill pass">체크됨</span></td><td>미들웨어 없이 실행 가능</td></tr>
    </tbody></table></div>
    <p class="desc">체크리스트 기준 진행률은 42 / 92개 기재 항목으로 약 45.7%입니다. ID 최댓값 103을 분모로 사용하면 누락 번호 때문에 실제 항목 수와 달라지므로 사용하지 않습니다.</p>
    <div class="bar"><i></i></div>
  </section>

  <section id="evidence"><div class="head"><span class="num">04</span><h2>검증 증적 상태</h2></div>
    <div class="wrap"><table><thead><tr><th>증적</th><th>현재 상태</th><th>의미</th></tr></thead><tbody>
      <tr><td>체크리스트 체크</td><td><span class="pill pass">42개 체크</span></td><td>이전에 실행 또는 확인해 통과로 표시한 상태</td></tr>
      <tr><td>scenario JSON 정의</td><td><span class="pill auto">42개 등록</span></td><td>현재 실행기가 읽어 자동 수행할 수 있는 케이스</td></tr>
      <tr><td>저장된 <span class="mono">--report</span> JSON</td><td><span class="pill pending">0개</span></td><td>현재 작업공간에는 실행 날짜·실제 응답을 남긴 결과 파일이 없음</td></tr>
      <tr><td>전체 pytest</td><td><span class="pill pass">131 passed</span></td><td>2026-07-24 현재 AI 서버 단위·통합 테스트 실행 결과</td></tr>
    </tbody></table></div>
    <div class="note"><strong>중요:</strong> 체크 표시만으로 최신 브랜치에서 재실행됐다고 단정할 수 없습니다. PR 전에는 배치별 <span class="mono">--report</span> 파일을 새로 저장해 날짜와 실제 결과를 남기는 편이 안전합니다.</div>
  </section>

  <section id="next"><div class="head"><span class="num">05</span><h2>권장 다음 순서</h2></div>
    <div class="batch"><strong>01</strong><p>미들웨어와 FastAPI를 실행하고 랜덤 시뮬레이터를 종료합니다.</p><span class="count">환경 격리</span></div>
    <div class="batch"><strong>02</strong><p>배치 6~9를 각각 실행해 실제 E2E 30개를 최신 코드에서 재검증합니다.</p><span class="count">E2E</span></div>
    <div class="batch"><strong>03</strong><p>배치 10~11로 POST 계약·오류 격리·중복 정책을 확인합니다.</p><span class="count">LOCAL</span></div>
    <div class="batch"><strong>04</strong><p>각 실행에 <span class="mono">--report "테스트/results/batchNN.json"</span>을 붙여 증적을 저장합니다.</p><span class="count">REPORT</span></div>
    <div class="batch"><strong>05</strong><p>T001~T050은 pytest 근거와 실제 수동 투입 필요 항목을 다시 구분해 체크합니다.</p><span class="count">MANUAL</span></div>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · Bio/CCTV E2E 시나리오 현재 현황 — 2026-07-24 코드·체크리스트 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
