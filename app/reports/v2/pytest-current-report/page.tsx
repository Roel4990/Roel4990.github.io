import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI 서버 pytest 현황 — 131개 테스트 상세 보고서" };

const documentHtml = String.raw`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI 서버 pytest 현황 — 131개 테스트 상세 보고서</title>
  <style>
    :root {
      --bg:#f2f4f3; --soft:#e7ebe9; --surface:#fff; --text:#191d20; --dim:#5b6368;
      --border:rgba(25,29,32,.13); --accent:#2c6e8c; --accent2:#1f5670;
      --accent-soft:rgba(44,110,140,.10); --ok:#2f7d5a; --ok-soft:rgba(47,125,90,.12);
      --warn:#c97a1e; --warn-soft:rgba(201,122,30,.13); --code:#15191d;
      --shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05);
    }
    :root[data-theme="dark"] {
      --bg:#15181c; --soft:#1c2025; --surface:#1e2227; --text:#e7eaec; --dim:#98a1a6;
      --border:rgba(231,234,236,.13); --accent:#6ba8c7; --accent2:#8fc0dc;
      --accent-soft:rgba(107,168,199,.14); --ok:#5db98e; --ok-soft:rgba(93,185,142,.16);
      --warn:#e5a653; --warn-soft:rgba(229,166,83,.16); --code:#111417;
      --shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28);
    }
    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { margin:0; background:var(--bg); color:var(--text); font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Pretendard Variable","Malgun Gothic","Segoe UI",sans-serif; line-height:1.65; letter-spacing:-.01em; }
    code,.mono { font-family:ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace; }
    .topbar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:10px 24px; border-bottom:1px solid var(--border); background:color-mix(in srgb,var(--surface) 88%,transparent); backdrop-filter:blur(10px); }
    .topbar strong { font-size:13px; }
    button { border:1px solid var(--border); background:var(--surface); color:var(--text); border-radius:7px; padding:6px 10px; cursor:pointer; }
    .toc { display:flex; gap:6px; flex-wrap:wrap; padding:10px 24px; background:var(--soft); border-bottom:1px solid var(--border); }
    .toc a { color:var(--dim); text-decoration:none; font:11.5px ui-monospace,monospace; border:1px solid var(--border); border-radius:999px; padding:5px 10px; }
    .toc a:hover { color:var(--accent2); border-color:var(--accent); }
    main { max-width:1040px; margin:auto; padding:54px 24px 96px; }
    .eyebrow { color:var(--accent2); font:700 12px ui-monospace,monospace; letter-spacing:.08em; text-transform:uppercase; }
    h1 { font-size:clamp(28px,4vw,40px); line-height:1.2; letter-spacing:-.03em; margin:10px 0 12px; }
    .lede { color:var(--dim); max-width:72ch; margin:0; }
    .stats { display:grid; grid-template-columns:repeat(4,1fr); margin-top:30px; border:1px solid var(--border); border-radius:12px; overflow:hidden; background:var(--border); gap:1px; }
    .stat { background:var(--surface); padding:17px; }
    .stat b { display:block; font-size:24px; }
    .stat span { color:var(--dim); font-size:12px; }
    section { margin-top:62px; scroll-margin-top:110px; }
    .section-head { display:flex; align-items:baseline; gap:10px; }
    .num { color:var(--accent2); font:700 13px ui-monospace,monospace; }
    h2 { font-size:21px; margin:0; }
    h3 { font-size:15px; margin:0 0 7px; }
    .desc { color:var(--dim); margin:9px 0 20px; max-width:75ch; font-size:14.5px; }
    .terminal { background:var(--code); color:#c9d1d9; padding:16px 18px; border-radius:10px; overflow:auto; font:12px/1.75 ui-monospace,monospace; }
    .terminal .ok { color:#7ee787; }
    .terminal .cyan { color:#8fc0dc; }
    .table-wrap { overflow:auto; background:var(--surface); border:1px solid var(--border); border-radius:12px; box-shadow:var(--shadow); }
    table { width:100%; min-width:760px; border-collapse:collapse; font-size:13px; }
    th,td { text-align:left; padding:11px 13px; border-bottom:1px solid var(--border); vertical-align:top; }
    th { background:var(--soft); color:var(--dim); font-size:11px; text-transform:uppercase; letter-spacing:.05em; }
    tr:last-child td { border-bottom:0; }
    tbody tr:hover { background:var(--accent-soft); }
    .count { font:700 13px ui-monospace,monospace; text-align:right; white-space:nowrap; }
    .badge { display:inline-block; border-radius:999px; padding:2px 8px; font:700 10px ui-monospace,monospace; }
    .pass { color:var(--ok); background:var(--ok-soft); }
    .pending { color:var(--warn); background:var(--warn-soft); }
    .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
    .card { background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:17px 18px; box-shadow:var(--shadow); }
    .card-head { display:flex; justify-content:space-between; gap:12px; align-items:start; }
    .card p { color:var(--dim); font-size:13.5px; margin:5px 0 10px; }
    ul { margin:8px 0 0; padding-left:19px; }
    li { margin:5px 0; font-size:13.5px; }
    .flow { display:grid; grid-template-columns:repeat(6,1fr); gap:8px; align-items:stretch; }
    .flow div { position:relative; background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:13px; font-size:12.5px; }
    .flow b { display:block; color:var(--accent2); margin-bottom:4px; }
    .note { border-left:3px solid var(--accent); background:var(--accent-soft); border-radius:0 9px 9px 0; padding:13px 15px; font-size:13.5px; }
    .warning { border-left-color:var(--warn); background:var(--warn-soft); }
    footer { color:var(--dim); border-top:1px solid var(--border); margin-top:68px; padding-top:18px; font-size:12px; }
    @media(max-width:760px) { .stats,.grid { grid-template-columns:1fr 1fr; } .flow { grid-template-columns:1fr; } .topbar { padding:9px 14px; } main { padding:38px 16px 70px; } }
    @media(max-width:460px) { .stats,.grid { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <header class="topbar">
    <strong>AI Server · pytest verification</strong>
    <button id="theme" type="button" aria-label="테마 전환">◐ 테마</button>
  </header>
  <nav class="toc" aria-label="문서 목차">
    <a href="#result">실행 결과</a><a href="#map">파일별 현황</a><a href="#details">상세 검증</a>
    <a href="#pipeline">파이프라인</a><a href="#commands">실행 방법</a><a href="#gaps">남은 검증</a>
  </nav>

  <main>
    <header>
      <div class="eyebrow">2026-07-24 · Current Test Report</div>
      <h1>AI 서버 테스트 131개,<br>무엇을 검증하고 있는가</h1>
      <p class="lede">Bio/CCTV recent 계약부터 Fusion-only 전송, 복합 중복 키, 오류 격리, 최종 POST 규격까지 현재 구현을 검증한다. 이 문서는 pytest 131개와 실제 Middleware E2E 42개가 보호하는 동작을 함께 정리한다.</p>
      <div class="stats">
        <div class="stat"><b>131</b><span>수집·통과한 pytest 케이스</span></div>
        <div class="stat"><b>9</b><span>테스트 파일</span></div>
        <div class="stat"><b>100%</b><span>현재 실행 통과율</span></div>
        <div class="stat"><b>42</b><span>통과한 자동 E2E 시나리오</span></div>
      </div>
    </header>

    <section id="result">
      <div class="section-head"><span class="num">00</span><h2>실제 실행 결과</h2></div>
      <p class="desc">2026-07-24 현재 브랜치에서 직접 수집하고 실행한 결과다. 파라미터 조합을 각각 계산해 정확히 131개다.</p>
      <div class="terminal"><span class="cyan">$ python -m pytest --collect-only -q</span>
<span class="ok">131 tests collected in 0.43s</span>

<span class="cyan">$ python -m pytest -q</span>
........................................................................ [ 54%]
...........................................................              [100%]
<span class="ok">131 passed, 4 warnings in 1.13s</span></div>
      <div class="note warning" style="margin-top:14px"><b>경고는 실패가 아니다.</b> 현재 경고는 Starlette TestClient 호환성, FastAPI <code>on_event</code> 폐기 예정, pytest 캐시 쓰기 권한과 관련된다. 기능 테스트 131개는 모두 통과했다.</div>
    </section>

    <section id="map">
      <div class="section-head"><span class="num">01</span><h2>테스트 파일별 현황</h2></div>
      <p class="desc">케이스 수는 pytest가 실제 수집한 값이다. 파라미터 테스트는 입력 조합마다 독립 케이스로 계산된다.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>파일</th><th>주요 책임</th><th>케이스</th><th>상태</th></tr></thead>
        <tbody>
          <tr><td class="mono">test_analysis_polling.py</td><td>Fusion-only 폴링, 복합 키 중복 방지, 동시 실행 잠금, 오류 격리</td><td class="count">20</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_api.py</td><td>FastAPI 상태 확인, 수동 실행, Mock 분석 API</td><td class="count">4</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_cctv_matching.py</td><td>CCTV v2 계약, 객체 검증, 시간·색상 매칭, 최종 POST 전달</td><td class="count">32</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_labels.py</td><td>공통 허용값과 API 계약 일치</td><td class="count">1</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_matching.py</td><td>Bio 정규화, 최신 ID 선택, 매칭 후보 생성, 잘못된 항목 제외</td><td class="count">11</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_middleware_client.py</td><td>recent 응답 봉투와 개별 item 처리</td><td class="count">4</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_mock_scenarios.py</td><td>대표 7개 위험 시나리오 회귀 검증</td><td class="count">7</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_multimodal_fusion.py</td><td>Late Fusion 위험표, 실신·SOS·PPE·지오펜스·법령 근거</td><td class="count">45</td><td><span class="badge pass">PASS</span></td></tr>
          <tr><td class="mono">test_service.py</td><td>서비스 최종 위험도, 조끼 및 보호구 미착용, geofence 결과</td><td class="count">7</td><td><span class="badge pass">PASS</span></td></tr>
        </tbody>
        <tfoot><tr><th colspan="2">합계</th><th class="count">131</th><th><span class="badge pass">ALL PASS</span></th></tr></tfoot>
      </table></div>
    </section>

    <section id="details">
      <div class="section-head"><span class="num">02</span><h2>파일별 상세 검증 범위</h2></div>
      <p class="desc">각 카드의 항목은 테스트 이름을 기능 관점으로 재분류한 것이다.</p>
      <div class="grid">
        <article class="card"><div class="card-head"><h3>analysis polling</h3><span class="badge pass">20 cases</span></div><p>Bio와 CCTV가 모두 매칭된 Fusion 결과만 전송하는 현재 폴링 정책을 보호한다.</p><ul><li>Bio-only·CCTV-only 결과 POST 제외</li><li><code>(watch_id, bio_id, CCTV 객체 키)</code> 복합 중복 키</li><li>동일 A+B 제외, A+C 및 D+B 허용</li><li>Fusion 키 TTL 만료 후 재사용</li><li>동시 분석 요청을 Lock으로 직렬화</li><li>한 작업자 오류가 다른 작업자를 막지 않음</li><li>중첩형 원본 metrics가 POST까지 보존됨</li></ul></article>
        <article class="card"><div class="card-head"><h3>CCTV matching</h3><span class="badge pass">32 cases</span></div><p>현재 CCTV recent 규격과 Bio 중심 객체 매칭을 종단으로 확인한다.</p><ul><li><code>color_group</code> + ±30초 매칭</li><li>30초 포함, 31초 제외 경계값</li><li>동률이면 더 최신 CCTV 프레임 선택</li><li><code>cam_id:timestamp:track_id</code> 객체 식별</li><li>잘못된 프레임·객체만 격리</li><li>CCTV area 우선 및 미확인 정규화</li><li>선택 객체가 <code>detected_metrics</code>로 전달됨</li></ul></article>
        <article class="card"><div class="card-head"><h3>Bio matching</h3><span class="badge pass">11 cases</span></div><p>Bio recent 항목을 내부 분석 모델과 매칭 후보로 바꾸는 과정을 검증한다.</p><ul><li>워치별 가장 큰 ID 한 건 선택</li><li><code>metrics.hr</code> → 내부 heart_rate</li><li><code>hrv_time_domain.rmssd</code> → 내부 hrv</li><li>0 값을 결측값으로 오해하지 않음</li><li>잘못된 time-domain도 전체 루프를 중단하지 않음</li><li>CCTV가 없으면 후보 context만 만들고 POST하지 않음</li><li>area 누락·미등록 값을 미확인으로 처리</li></ul></article>
        <article class="card"><div class="card-head"><h3>Middleware envelope</h3><span class="badge pass">4 cases</span></div><p>HTTP 성공 이후 응답 봉투가 비정상일 때의 방어 동작이다.</p><ul><li>정상 status/count/items 응답 수용</li><li>객체가 아닌 응답은 빈 목록 처리</li><li>items 중 잘못된 한 건만 제외</li><li>count/server_time 메타 오류가 정상 items를 막지 않음</li></ul></article>
        <article class="card"><div class="card-head"><h3>Multimodal Fusion</h3><span class="badge pass">45 cases</span></div><p>가장 많은 테스트가 집중된 최종 판단 엔진이다.</p><ul><li>Level 1~5 대표 위험 조합</li><li>영상 실신 모든 분기에 작업중지 근거 적용</li><li>생체 실신 단독은 영상 실신 법령과 구분</li><li>SOS, PPE 및 조끼 미착용 판정</li><li>웅크림 20초 전·후 경계</li><li>위험구역·고소구역과 보호구 조합</li><li>Bio/Video 한쪽이 없는 빈틈 시나리오</li></ul></article>
        <article class="card"><div class="card-head"><h3>Service & API</h3><span class="badge pass">11 cases</span></div><p>Fusion 결과를 서비스와 HTTP API가 올바르게 포장하는지 확인한다.</p><ul><li>정상·실신 결과의 overall risk와 사유</li><li>모든 보호구 종류의 geofence 위반</li><li>미들웨어가 꺼져 있어도 run-once API 유지</li><li>Mock 실신 분석과 시나리오 목록</li><li>health endpoint 기본 동작</li></ul></article>
        <article class="card"><div class="card-head"><h3>Mock scenarios</h3><span class="badge pass">7 cases</span></div><p>발표와 수동 검증에 사용하는 대표 상황의 회귀 테스트다.</p><ul><li>정상</li><li>실신</li><li>웅크림</li><li>SOS</li><li>앉음</li><li>안전모 미착용</li><li>지오펜스 위반</li></ul></article>
        <article class="card"><div class="card-head"><h3>Labels contract</h3><span class="badge pass">1 case</span></div><p>한 개의 테스트지만 여러 허용값 집합을 동시에 보호한다.</p><ul><li>color_group 5종</li><li>허용 작업 구역과 미확인</li><li>current_action 6종</li><li>severity 및 risk_type 계약</li></ul></article>
      </div>
    </section>

    <section id="pipeline">
      <div class="section-head"><span class="num">03</span><h2>테스트가 보호하는 전체 파이프라인</h2></div>
      <p class="desc">단위 테스트가 서로 분리되어 있지만 합치면 GET 입력부터 최종 POST payload까지 연결된다.</p>
      <div class="flow">
        <div><b>① Recent GET</b>응답 봉투와 item 타입 검증</div>
        <div><b>② Normalize</b>Bio 중첩 metrics와 CCTV 객체 모델 변환</div>
        <div><b>③ Match</b>color_group 및 timestamp ±30초</div>
        <div><b>④ Dedupe</b>워치·Bio ID·CCTV 객체 키 조합 확인</div>
        <div><b>⑤ Fusion</b>생체 상태와 영상 행동의 최종 위험 판정</div>
        <div><b>⑥ POST</b>매칭된 Fusion 결과만 최종 payload 구성</div>
      </div>
      <div class="note" style="margin-top:16px"><b>오류 격리도 함께 검증한다.</b> 잘못된 프레임은 해당 프레임만, 잘못된 객체는 해당 객체만, 분석 예외는 해당 작업자만 제외하고 나머지 처리를 계속한다.</div>
    </section>

    <section id="commands">
      <div class="section-head"><span class="num">04</span><h2>실행 방법</h2></div>
      <p class="desc"><code>AI 서버 코드</code> 폴더에서 실행한다.</p>
      <div class="terminal"><span class="cyan"># 전체 테스트</span>
python -m pytest -q

<span class="cyan"># 테스트 이름까지 상세 출력</span>
python -m pytest -v

<span class="cyan"># 현재 수집되는 정확한 케이스 수 확인</span>
python -m pytest --collect-only -q

<span class="cyan"># 특정 영역만 실행</span>
python -m pytest -q tests/test_cctv_matching.py
python -m pytest -q tests/test_analysis_polling.py
python -m pytest -q tests/test_multimodal_fusion.py</div>
    </section>

    <section id="gaps">
      <div class="section-head"><span class="num">05</span><h2>아직 자동화되지 않은 검증</h2></div>
      <p class="desc">131개 pytest와 42개 자동 시나리오가 통과했다. 실제 Middleware E2E Batch 6~9와 로컬 계약·오류 격리·중복 정책 Batch 10~11까지 확인했다.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>남은 항목</th><th>현재 상태</th><th>권장 작업</th></tr></thead>
        <tbody>
          <tr><td>POST HTTP 500 재시도</td><td><span class="badge pending">PENDING</span></td><td>재시도 횟수·간격 정책을 정한 후 httpx mock 테스트 추가</td></tr>
          <tr><td>실제 미들웨어·DB 종단 연동</td><td><span class="badge pass">PASS</span></td><td>Batch 6~9의 Fusion E2E 30건 통과</td></tr>
          <tr><td>결정형 시나리오 실행기</td><td><span class="badge pass">PASS</span></td><td>Batch 6~11 자동 시나리오 42건 통과</td></tr>
          <tr><td>모달리티 명시 계약</td><td><span class="badge pending">ON HOLD</span></td><td><code>agreement</code> 의미와 별개인 modality 필드는 담당자 협의 후 결정</td></tr>
          <tr><td>성능·부하 기준</td><td><span class="badge pending">PENDING</span></td><td>동시 작업자 수, 폴링 지연, POST 처리량 기준 수립</td></tr>
          <tr><td>SQI 최종 정책</td><td><span class="badge pending">ON HOLD</span></td><td>실측 기준 확정 후 게이팅 경계값 및 테스트 갱신</td></tr>
        </tbody>
      </table></div>
    </section>

    <footer>Source: <span class="mono">AI 서버 코드/tests</span>, <span class="mono">테스트/scenario_cases.json</span> · 측정일 2026-07-24 · 현재 브랜치 직접 실행 결과</footer>
  </main>
  <script>
    const root = document.documentElement;
    const saved = localStorage.getItem('ai-test-report-theme');
    if (saved) root.dataset.theme = saved;
    document.getElementById('theme').addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('ai-test-report-theme', next);
    });
  </script>
</body>
</html>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
