import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bio/CCTV E2E 시나리오 실행 가이드" };

const documentHtml = String.raw`<title>Bio/CCTV E2E 시나리오 실행 가이드</title>
<style>
  :root { --bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--warn:#C97A1E;--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--warn:#E5A653;--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}
  .mono,code,pre{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)} .top b{font-size:13px}.tags{display:flex;gap:6px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)} nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:940px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:70ch}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:21px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:60px}h2{font-size:21px;margin:0}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}.desc{color:var(--dim);font-size:14px;max-width:72ch}
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:17px;box-shadow:var(--shadow)}.card h3{font-size:15px;margin:0 0 7px}.card p{font-size:13px;color:var(--dim);margin:0}
  pre{background:#101419;color:#DDE5E9;border-radius:11px;padding:16px;overflow:auto;font-size:12.5px;line-height:1.7;box-shadow:var(--shadow)}.cmd{color:#8FC0DC}.comment{color:#88949B}
  table{width:100%;border-collapse:collapse;min-width:670px;font-size:13px}.wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow)}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;background:var(--accent-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}
  .step{display:grid;grid-template-columns:38px 1fr;gap:12px;margin:12px 0}.step i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--accent);color:white;font:700 12px ui-monospace,monospace}.step b{display:block}.step p{margin:2px 0;color:var(--dim);font-size:13px}
  footer{max-width:940px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:700px){.stats,.cards{grid-template-columns:1fr 1fr}}@media(max-width:480px){.stats,.cards{grid-template-columns:1fr}}
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — 시나리오 테스트 가이드</b><div class="tags"><span class="tag">2026-07-24</span><span class="tag">42 cases</span></div></div>
<nav><a href="#overview">구성</a><a href="#prepare">실행 준비</a><a href="#commands">명령어</a><a href="#types">실행 유형</a><a href="#flow">처리 흐름</a><a href="#result">결과 해석</a></nav>
<main>
  <p class="eyebrow">RUN_SCENARIO_BATCHES.PY · USER GUIDE</p>
  <h1>Bio/CCTV 시나리오 실행 방법</h1>
  <p class="lede"><span class="mono">scenario_cases.json</span>의 결정형 입력을 선택해 로컬 Fusion, 미들웨어 왕복 E2E, 최종 POST 계약, 특정 pytest를 같은 실행기에서 검증합니다.</p>
  <div class="stats"><div class="stat"><strong>42</strong><span>등록 시나리오</span></div><div class="stat"><strong>6개</strong><span>배치 6~11</span></div><div class="stat"><strong>3종</strong><span>실행 방식</span></div><div class="stat"><strong>순차</strong><span>선택 케이스 실행</span></div></div>

  <section id="overview"><div class="head"><span class="num">01</span><h2>세 파일의 역할</h2></div>
    <div class="cards">
      <div class="card"><h3 class="mono">run_scenario_batches.py</h3><p>케이스 선택, payload 생성, 로컬 판정, API 전송, history 조회, 기대값 비교, JSON report 저장을 담당합니다.</p></div>
      <div class="card"><h3 class="mono">scenario_cases.json</h3><p>테스트 ID, 배치, Bio 상태, 영상 행동·PPE·구역, 기대 severity·risk_score와 실행 유형을 선언합니다.</p></div>
      <div class="card"><h3 class="mono">manual-e2e-test-checklist.md</h3><p>T001~T103 전체 검증 목록과 자동화 범위, 수동 확인 범위, 통과 체크를 관리합니다.</p></div>
      <div class="card"><h3>테스트 시작 지점</h3><p>가공된 Bio/CCTV 입력부터 시작합니다. 원시 PPG를 HRV metrics로 만드는 추출 과정은 이 실행기의 범위가 아닙니다.</p></div>
    </div>
  </section>

  <section id="prepare"><div class="head"><span class="num">02</span><h2>실행 전 준비</h2></div>
    <div class="step"><i>1</i><div><b>미들웨어와 FastAPI 실행</b><p>실제 E2E 케이스는 Bio/CCTV 저장 API, recent 조회, AI 폴링, history 조회가 모두 필요합니다.</p></div></div>
    <div class="step"><i>2</i><div><b>랜덤 시뮬레이터 종료</b><p>Watch/CCTV/PPG 랜덤 데이터가 섞이면 같은 color_group의 다른 객체가 선택될 수 있습니다.</p></div></div>
    <div class="step"><i>3</i><div><b>Python 의존성 확인</b><p><span class="mono">requests</span>, <span class="mono">python-dotenv</span>와 AI 서버 테스트 의존성이 필요합니다.</p></div></div>
    <div class="step"><i>4</i><div><b>중복 커서 상태 확인</b><p>각 E2E 실행은 고유 watch_id와 track_id를 생성합니다. 필요하면 FastAPI를 재시작해 인메모리 Fusion TTL 기록을 초기화합니다.</p></div></div>
    <div class="note"><strong>환경변수:</strong> <span class="mono">테스트/.env</span>에서 <span class="mono">MIDDLEWARE_BASE</span>, <span class="mono">SCENARIO_WAIT_SEC</span>(기본 8), <span class="mono">SCENARIO_TIMEOUT_SEC</span>(기본 20)을 설정할 수 있습니다.</div>
  </section>

  <section id="commands"><div class="head"><span class="num">03</span><h2>명령어</h2></div>
<pre><span class="comment"># 특정 배치 실행</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --batch 6</span>

<span class="comment"># 테스트 ID 하나만 실행</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --case T101</span>

<span class="comment"># 등록된 42개 전체 실행</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --all</span>

<span class="comment"># API 전송 없이 생성 payload와 기대값 확인</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --batch 8 --dry-run</span>

<span class="comment"># 결과를 JSON 파일로 저장</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --batch 6 --report "테스트/results/batch06.json"</span>

<span class="comment"># 대상 서버와 대기 시간을 직접 지정</span>
<span class="cmd">python "테스트/run_scenario_batches.py" --batch 6 --middleware http://127.0.0.1:8080 --wait-sec 3 --timeout-sec 20</span></pre>
    <div class="note"><strong>주의:</strong> 파일명과 옵션 사이에는 반드시 공백이 있어야 합니다. <span class="mono">run_scenario_batches.py--batch</span>처럼 붙이면 Python이 그 전체를 파일명으로 인식합니다.</div>

    <div class="card" style="margin-top:18px;">
      <h3><span class="mono">DRY-RUN</span>은 왜 사용하는가?</h3>
      <p>
        실제 서버에 데이터를 보내기 전에 실행기가 생성할 Bio payload, CCTV payload와
        기대 결과(<span class="mono">expected</span>)를 화면에서 미리 확인하는 안전 점검 기능입니다.
        시나리오의 작업자 ID, 색상 그룹, timestamp, 행동, PPE 및 구역 조건이 의도대로 만들어지는지
        검토할 때 사용합니다.
      </p>
      <div class="wrap" style="margin-top:14px;">
        <table>
          <thead><tr><th>구분</th><th>DRY-RUN 동작</th></tr></thead>
          <tbody>
            <tr><td>Payload 생성</td><td>수행 — Bio/CCTV 입력과 expected를 JSON으로 출력</td></tr>
            <tr><td>미들웨어 API 전송</td><td>수행하지 않음</td></tr>
            <tr><td>FastAPI 폴링·Fusion 분석</td><td>수행하지 않음</td></tr>
            <tr><td>실제 결과와 기대값 비교</td><td>수행하지 않음</td></tr>
            <tr><td>DB 데이터 변경</td><td>없음</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:12px;">
        따라서 출력 상태가 <span class="mono">DRY-RUN</span>이어도 테스트가 통과한 것은 아닙니다.
        입력 검토가 끝난 뒤 <span class="mono">--dry-run</span>을 제거하고 다시 실행해야
        실제 E2E 결과가 <strong>PASS</strong>인지 확인할 수 있습니다.
      </p>
    </div>
  </section>

  <section id="types"><div class="head"><span class="num">04</span><h2>실행 유형</h2></div>
    <div class="wrap"><table><thead><tr><th>유형</th><th>수</th><th>대상</th><th>동작</th><th>외부 서버</th></tr></thead><tbody>
      <tr><td class="mono">E2E (기본)</td><td>30</td><td>T051~T089 등록분</td><td>로컬 Fusion 선검증 → CCTV/Bio POST → AI 결과 history 조회 → 등급·점수 비교</td><td>필요</td></tr>
      <tr><td class="mono">local_contract</td><td>6</td><td>T091~T096</td><td>내부 매칭·분석·POST payload 생성 함수를 직접 호출해 필드 계약 비교</td><td>불필요</td></tr>
      <tr><td class="mono">pytest</td><td>6</td><td>T098~T103</td><td>지정된 pytest node ID를 별도 프로세스로 실행해 오류 격리와 중복 정책 확인</td><td>불필요</td></tr>
    </tbody></table></div>
  </section>

  <section id="flow"><div class="head"><span class="num">05</span><h2>E2E 처리 흐름</h2></div>
    <div class="step"><i>1</i><div><b>결정형 fixture 생성</b><p>Bio 상태별 고정 HRV metrics와 케이스별 영상 행동·PPE·구역으로 payload를 만듭니다.</p></div></div>
    <div class="step"><i>2</i><div><b>로컬 판정 선검증</b><p>실제 분류기와 <span class="mono">fuse()</span>를 호출해 기대값 자체가 현재 코드와 맞는지 먼저 검사합니다.</p></div></div>
    <div class="step"><i>3</i><div><b>CCTV → Bio 순서로 적재</b><p>CCTV 객체가 recent에 나타난 것을 확인한 뒤 동일 timestamp의 Bio를 전송합니다.</p></div></div>
    <div class="step"><i>4</i><div><b>AI 폴링 결과 대기</b><p><span class="mono">/api/v1/ai/history</span>에서 생성된 고유 watch_id 결과를 제한 시간 동안 조회합니다.</p></div></div>
    <div class="step"><i>5</i><div><b>저장 결과 비교</b><p>severity를 저장 risk(low/medium/high/critical)로 변환하고 risk_score와 함께 비교합니다.</p></div></div>
  </section>

  <section id="result"><div class="head"><span class="num">06</span><h2>결과 해석과 종료 코드</h2></div>
    <div class="wrap"><table><thead><tr><th>상태</th><th>의미</th><th>확인할 내용</th></tr></thead><tbody>
      <tr><td><strong style="color:var(--ok)">PASS</strong></td><td>기대값과 실제 결과가 일치</td><td>report 저장 후 체크리스트에 통과 증적 반영</td></tr>
      <tr><td><strong style="color:var(--warn)">FAIL</strong></td><td>실행은 됐지만 severity, score, 문구 또는 계약이 불일치</td><td>출력된 기대/실제 차이와 로컬 결과 확인</td></tr>
      <tr><td><strong>ERROR</strong></td><td>HTTP 실패, timeout, recent 미노출 등 실행 환경 문제</td><td>서버 주소·가동 상태·로그·조회 범위 확인</td></tr>
      <tr><td class="mono">DRY-RUN</td><td>전송 없이 payload 출력만 완료</td><td>통과 판정이 아니며 실행 증적으로 사용하지 않음</td></tr>
    </tbody></table></div>
    <p class="desc">FAIL 또는 ERROR가 하나라도 있으면 프로세스 종료 코드는 1, 모두 PASS이거나 DRY-RUN이면 0, 선택·JSON 로드 오류는 2입니다.</p>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · Bio/CCTV E2E 시나리오 실행 가이드 — 2026-07-24 현재 코드 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
