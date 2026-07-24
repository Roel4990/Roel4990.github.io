import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI Server 운영 문제 해결 가이드" };

const documentHtml = String.raw`<title>AI Server 운영 문제 해결 가이드</title>
<style>
  :root{--bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--ok-soft:rgba(47,125,90,.12);--warn:#C97A1E;--warn-soft:rgba(201,122,30,.13);--bad:#C8402A;--bad-soft:rgba(200,64,42,.12);--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--ok-soft:rgba(93,185,142,.16);--warn:#E5A653;--warn-soft:rgba(229,166,83,.16);--bad:#E36A50;--bad-soft:rgba(227,106,80,.16);--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}.mono,code,pre{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)}.top b{font-size:13px}.tags{display:flex;gap:6px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)}nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:1000px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:76ch}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:20px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:62px}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}h2{font-size:21px;margin:0}.desc{color:var(--dim);font-size:14px;max-width:77ch}
  .wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow);margin-top:18px}table{width:100%;border-collapse:collapse;min-width:800px;font-size:13px}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .pill{display:inline-flex;border-radius:999px;padding:3px 9px;font:700 10.5px ui-monospace,monospace}.normal{background:var(--ok-soft);color:var(--ok)}.check{background:var(--warn-soft);color:var(--warn)}.error{background:var(--bad-soft);color:var(--bad)}
  pre{background:#101419;color:#DDE5E9;border-radius:11px;padding:16px;overflow:auto;font-size:12.5px;line-height:1.7;box-shadow:var(--shadow)}.cmd{color:#8FC0DC}.ok{color:#A9D18E}.warning{color:#E5A653}.comment{color:#849198}
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:13px}.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:17px;box-shadow:var(--shadow)}.card h3{font-size:15px;margin:0 0 7px}.card p{font-size:13px;color:var(--dim);margin:0}.card ul{font-size:13px;color:var(--dim);padding-left:19px;margin:8px 0 0}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;background:var(--accent-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}.note.warn{border-left-color:var(--warn);background:var(--warn-soft)}.note.bad{border-left-color:var(--bad);background:var(--bad-soft)}
  .triage{display:grid;grid-template-columns:42px 1fr;gap:12px;margin:11px 0}.triage i{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;font:700 12px ui-monospace,monospace}.triage b{display:block}.triage p{margin:2px 0;color:var(--dim);font-size:13px}
  footer{max-width:1000px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:720px){.stats,.cards{grid-template-columns:1fr 1fr}}@media(max-width:480px){.stats,.cards{grid-template-columns:1fr}}
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — 운영 문제 해결</b><div class="tags"><span class="tag">2026-07-24</span><span class="tag">RUNBOOK</span></div></div>
<nav><a href="#quick">빠른 점검</a><a href="#cycle">주기 로그</a><a href="#recent">recent 오류</a><a href="#matching">매칭 오류</a><a href="#dedup">중복</a><a href="#post">POST</a><a href="#scenario">시나리오</a><a href="#env">환경변수</a><a href="#warnings">경고</a></nav>
<main>
  <p class="eyebrow">OPERATIONS · TROUBLESHOOTING RUNBOOK</p>
  <h1>로그를 보고 어디부터 확인할 것인가</h1>
  <p class="lede">AI 서버가 멈춘 것처럼 보여도 정상적인 중복 제외나 매칭 실패일 수 있습니다. 실제 코드가 출력하는 로그를 기준으로 정상 상태, 입력 문제, 통신 문제와 코드 예외를 구분합니다.</p>
  <div class="stats"><div class="stat"><strong>8000</strong><span>FastAPI 기본 포트</span></div><div class="stat"><strong>8080</strong><span>미들웨어 기본 포트</span></div><div class="stat"><strong>1초</strong><span>기본 폴링 주기</span></div><div class="stat"><strong>20초</strong><span>기본 recent 범위</span></div></div>

  <section id="quick"><div class="head"><span class="num">01</span><h2>5단계 빠른 점검</h2></div>
    <div class="triage"><i>1</i><div><b>FastAPI 자체 상태</b><p><span class="mono">GET http://127.0.0.1:8000/health</span>가 status=ok인지 확인합니다.</p></div></div>
    <div class="triage"><i>2</i><div><b>실제 미들웨어 주소</b><p>health 응답의 middleware_base_url이 의도한 서버인지 확인합니다. 잘못되면 .env 로드 위치와 변수명을 봅니다.</p></div></div>
    <div class="triage"><i>3</i><div><b>recent 원본 데이터</b><p>Bio/CCTV recent를 직접 조회해 items, timestamp, color_group, id 또는 객체 필드가 실제로 오는지 확인합니다.</p></div></div>
    <div class="triage"><i>4</i><div><b>분석 사이클 수치</b><p>bio_items → bio_contexts → fusion_contexts → new_fusion 중 어느 단계에서 0이 되는지 찾습니다.</p></div></div>
    <div class="triage"><i>5</i><div><b>POST와 history</b><p>new_fusion이 1 이상인데 결과가 없다면 ai/result 전송 로그와 미들웨어 history 저장을 확인합니다.</p></div></div>
<pre><span class="comment"># AI 서버 실행 — AI 서버 코드 폴더에서</span>
<span class="cmd">python -m uvicorn app.main:app --host 0.0.0.0 --port 8000</span>

<span class="comment"># 상태 확인</span>
<span class="cmd">Invoke-RestMethod http://127.0.0.1:8000/health</span>

<span class="comment"># 수동으로 분석 사이클 한 번 실행</span>
<span class="cmd">Invoke-RestMethod -Method Post http://127.0.0.1:8000/run-once</span></pre>
  </section>

  <section id="cycle"><div class="head"><span class="num">02</span><h2>주기 분석 로그 읽기</h2></div>
<pre>bio_items=12  cctv_items=45  bio_contexts=3  fusion_contexts=2  new_fusion=1
<span class="ok">[OK] 주기 분석 완료: Fusion 1건</span></pre>
    <div class="wrap"><table><thead><tr><th>항목</th><th>뜻</th><th>0이면 확인할 것</th></tr></thead><tbody>
      <tr><td class="mono">bio_items</td><td>Bio recent에서 받은 객체 item 수</td><td>미들웨어 주소, 조회 범위, Bio 적재 여부</td></tr>
      <tr><td class="mono">cctv_items</td><td>CCTV recent에서 받은 객체 item 수</td><td>CCTV 적재·recent endpoint·조회 범위</td></tr>
      <tr><td class="mono">bio_contexts</td><td>검증 후 워치별 최신 Bio로 만든 컨텍스트 수</td><td>watch_id, 정수 id, color_group, UTC timestamp, metrics</td></tr>
      <tr><td class="mono">fusion_contexts</td><td>Bio와 CCTV 객체가 모두 매칭된 컨텍스트 수</td><td>color_group 및 ±30초, CCTV 객체 계약</td></tr>
      <tr><td class="mono">new_fusion</td><td>중복 키를 제외하고 이번에 분석할 조합 수</td><td>이미 처리한 조합인지, 고유 Bio ID·track_id인지</td></tr>
    </tbody></table></div>
    <div class="note"><strong>정상적인 0건:</strong> recent에 과거 데이터만 남아 있거나 같은 Fusion 조합만 반복되면 <span class="mono">new_fusion=0</span>은 정상입니다. 서버 장애를 의미하지 않습니다.</div>
  </section>

  <section id="recent"><div class="head"><span class="num">03</span><h2>recent 조회 및 봉투 경고</h2></div>
    <div class="wrap"><table><thead><tr><th>로그</th><th>의미</th><th>처리 영향</th><th>확인 방법</th></tr></thead><tbody>
      <tr><td class="mono">bio/recent 조회 실패 (빈 목록 반환)</td><td>HTTP, timeout, JSON 파싱 등 조회 예외</td><td>Bio 목록만 빈 값, 루프 계속</td><td>주소·포트·방화벽·endpoint를 직접 호출</td></tr>
      <tr><td class="mono">cctv/recent 조회 실패 (빈 목록 반환)</td><td>CCTV 조회 예외</td><td>Fusion 0건 가능, 루프 계속</td><td>미들웨어 로그와 CCTV recent 응답 확인</td></tr>
      <tr><td class="mono">응답이 객체 형식이 아님</td><td>최상위 JSON이 object가 아님</td><td>해당 feed 전체를 빈 목록 처리</td><td>응답 body와 Content-Type 확인</td></tr>
      <tr><td class="mono">server_time이 UTC ISO 8601 형식이 아님</td><td>Z 표기 또는 파싱 실패</td><td>경고만, items 계속 처리</td><td>미들웨어 시각 포맷 수정</td></tr>
      <tr><td class="mono">items가 배열이 아님</td><td>계약 위반</td><td>해당 feed 빈 목록 처리</td><td>items=[] 형식 보장</td></tr>
      <tr><td class="mono">count와 items 개수가 다름</td><td>메타데이터 불일치</td><td>경고만, items 유지</td><td>미들웨어 count 계산 확인</td></tr>
    </tbody></table></div>
<pre><span class="comment"># recent 원본 직접 확인</span>
<span class="cmd">Invoke-RestMethod "http://127.0.0.1:8080/api/v1/ai/bio/recent?seconds=20"</span>
<span class="cmd">Invoke-RestMethod "http://127.0.0.1:8080/api/v1/ai/cctv/recent?seconds=20"</span></pre>
  </section>

  <section id="matching"><div class="head"><span class="num">04</span><h2>항목 제외와 매칭 실패</h2></div>
    <div class="wrap"><table><thead><tr><th>로그/현상</th><th>주원인</th><th>조치</th></tr></thead><tbody>
      <tr><td>watch_id가 없는 생체 데이터 제외</td><td>Bio 필수 식별자 누락·빈 문자열</td><td>processed Bio payload의 watch_id 확인</td></tr>
      <tr><td>유효한 id가 없는 생체 데이터 제외</td><td>id가 null, bool, 문자열</td><td>Bio recent가 저장 정수 ID를 반환하도록 확인</td></tr>
      <tr><td>color_group이 없어 멀티모달 분석 제외</td><td>수급업체 또는 매칭키 누락</td><td>제외가 정책상 정상인지 확인; 매칭 대상이면 허용 색상 전송</td></tr>
      <tr><td>UTC ISO 8601 형식이 아닌 timestamp</td><td>Z 누락 또는 파싱 불가</td><td>GET 응답 timestamp를 UTC Z 형식으로 통일</td></tr>
      <tr><td>cam_id가 없어 프레임 키 생성 불가</td><td>CCTV root 필드 누락</td><td>문자열 cam_id 전송</td></tr>
      <tr><td>형식이 잘못된 CCTV 객체 제외</td><td>track_id, confidence, PPE, behavior, zone 계약 오류</td><td>로그의 Pydantic 첫 오류와 원본 객체 대조</td></tr>
      <tr><td>fusion_contexts=0</td><td>색상 불일치, 30초 초과 또는 객체 제외</td><td>두 timestamp 차이와 동일 color_group을 직접 비교</td></tr>
      <tr><td>Bio/CCTV area가 서로 다름</td><td>두 입력의 구역 정보 불일치</td><td>오류로 제외하지 않고 CCTV area 사용; 시뮬레이터 색상별 area 정렬</td></tr>
      <tr><td>CCTV area를 확인할 수 없음</td><td>허용 목록 밖 area</td><td>프레임은 유지하며 미확인으로 정규화</td></tr>
    </tbody></table></div>
    <div class="note warn"><strong>매칭 점검 순서:</strong> color_group → timestamp 차이 → track_id → confidence → PPE/behavior/zone 필수 필드 순서로 보는 것이 빠릅니다.</div>
  </section>

  <section id="dedup"><div class="head"><span class="num">05</span><h2>“이미 처리한 Fusion 조합”</h2></div>
<pre><span class="warning">⏭️ 이미 처리한 Fusion 조합이라 분석에서 제외합니다:
('watch_red_001', 2235, 'CAM_01:2026-07-24T01:00:00.000Z:person_01')</span></pre>
    <div class="cards">
      <div class="card"><h3>왜 발생하나?</h3><p>폴링 범위 안에 같은 Bio ID와 같은 CCTV 객체가 계속 포함되기 때문입니다. 같은 조합의 반복 POST를 막는 정상 동작입니다.</p></div>
      <div class="card"><h3>새 결과가 필요하다면?</h3><p>새 Bio 저장 ID 또는 다른 timestamp/track_id의 CCTV 객체가 들어와야 새로운 Fusion 키가 됩니다.</p></div>
      <div class="card"><h3>서버 재시작 후에는?</h3><p>중복 기록이 인메모리라 초기화됩니다. 동일 recent 데이터가 남아 있으면 다시 POST될 수 있습니다.</p></div>
      <div class="card"><h3>언제 만료되나?</h3><p>동일 프로세스에서 처리 기록은 120초 뒤 제거되며 같은 조합이 다시 처리될 수 있습니다.</p></div>
    </div>
    <div class="note bad"><strong>하지 말아야 할 진단:</strong> 단순히 <span class="mono">new_fusion=0</span>이라는 이유만으로 중복 코드를 제거하면 1초 폴링에서 같은 데이터가 반복 전송됩니다.</div>
  </section>

  <section id="post"><div class="head"><span class="num">06</span><h2>ai/result 전송 실패</h2></div>
    <div class="wrap"><table><thead><tr><th>현상</th><th>현재 동작</th><th>확인할 것</th></tr></thead><tbody>
      <tr><td class="mono">ai/result 전송 실패 (계속 진행)</td><td>예외를 잡고 status=skipped 반환</td><td>AI_RESULT_API, 미들웨어 상태, HTTP 응답 body</td></tr>
      <tr><td>POST 4xx</td><td>raise_for_status로 실패 처리</td><td>최종 8개 키와 derived_states 계약, timestamp 형식</td></tr>
      <tr><td>POST 5xx</td><td>실패 처리 후 다음 작업 계속</td><td>미들웨어 DB·route 로그</td></tr>
      <tr><td>5초 초과</td><td>httpx timeout</td><td>네트워크·DB 저장 지연·서버 부하</td></tr>
      <tr><td>실패 후 다음 폴링에서 재전송 안 됨</td><td>의도된 중복 방지 정책</td><td>현재는 POST 시도 후 Fusion 키를 처리 완료 기록</td></tr>
    </tbody></table></div>
    <div class="note warn"><strong>운영상 중요:</strong> 현재는 실패 자동 재시도가 없습니다. 즉시 복구가 필요한 결과 유실이 우려되면 미들웨어 상태와 실패 로그를 별도로 모니터링해야 합니다.</div>
  </section>

  <section id="scenario"><div class="head"><span class="num">07</span><h2>시나리오 실행기 오류</h2></div>
    <div class="wrap"><table><thead><tr><th>출력</th><th>뜻</th><th>해결</th></tr></thead><tbody>
      <tr><td class="mono">can't open file ...py--batch</td><td>파일명과 옵션 사이 공백 누락</td><td><span class="mono">run_scenario_batches.py" --batch 6</span>처럼 공백 추가</td></tr>
      <tr><td class="mono">시나리오 로드 실패</td><td>JSON 문법, 파일, 선택 조건 오류</td><td>scenario_cases.json과 --batch/--case 값 확인</td></tr>
      <tr><td class="mono">전송한 CCTV 객체가 recent에 나타나지 않음</td><td>CCTV 저장 실패·조회 범위·미들웨어 반영 지연</td><td>CCTV POST 응답과 recent의 track_id 검색</td></tr>
      <tr><td class="mono">제한 시간 안에 AI 분석 결과를 찾지 못함</td><td>매칭/POST 실패 또는 history 지연</td><td>FastAPI 로그의 fusion_contexts/new_fusion, wait/timeout 증가</td></tr>
      <tr><td class="mono">FAIL(local)</td><td>API 전송 전에 로컬 판정이 expected와 불일치</td><td>판정 로직 변경에 맞춰 코드 또는 expected 의도 확인</td></tr>
      <tr><td class="mono">FAIL(local-contract)</td><td>최종 POST 필드 계약 불일치</td><td>T091~T096 출력과 payload builder 비교</td></tr>
      <tr><td class="mono">ERROR</td><td>HTTP·timeout 등 환경 문제</td><td>FAIL과 구분해 서버 연결부터 점검</td></tr>
      <tr><td class="mono">DRY-RUN</td><td>전송 없이 입력 출력만 완료</td><td>PASS가 아니므로 --dry-run 제거 후 실행</td></tr>
    </tbody></table></div>
  </section>

  <section id="env"><div class="head"><span class="num">08</span><h2>환경변수 점검</h2></div>
    <div class="wrap"><table><thead><tr><th>변수</th><th>기본값</th><th>영향</th><th>잘못된 값 처리</th></tr></thead><tbody>
      <tr><td class="mono">MIDDLEWARE_BASE_URL</td><td>http://127.0.0.1:8080</td><td>AI 서버 GET/POST 대상</td><td>빈 문자열이면 URL이 잘못 구성될 수 있으므로 실제 값 필수</td></tr>
      <tr><td class="mono">POLLING_INTERVAL_SEC</td><td>1</td><td>AI 폴링 대기 시간</td><td>숫자 아님·0 이하는 1초</td></tr>
      <tr><td class="mono">RECENT_WINDOW_SEC</td><td>20</td><td>Bio/CCTV recent seconds</td><td>양의 정수가 아니면 20초</td></tr>
      <tr><td class="mono">MIDDLEWARE_BASE</td><td>외부 테스트 서버 주소</td><td>시뮬레이터·E2E 실행기 대상</td><td>AI 서버 변수명과 다르므로 혼동 주의</td></tr>
      <tr><td class="mono">SCENARIO_WAIT_SEC</td><td>8</td><td>history 첫 조회 전 대기</td><td>float 변환 실패 시 실행 시작 단계에서 오류 가능</td></tr>
      <tr><td class="mono">SCENARIO_TIMEOUT_SEC</td><td>20</td><td>history 결과 검색 제한 시간</td><td>너무 짧으면 정상 결과도 ERROR 가능</td></tr>
    </tbody></table></div>
    <div class="note"><strong>변수명 구분:</strong> AI 서버는 <span class="mono">MIDDLEWARE_BASE_URL</span>, 테스트 시뮬레이터는 <span class="mono">MIDDLEWARE_BASE</span>를 사용합니다.</div>
  </section>

  <section id="warnings"><div class="head"><span class="num">09</span><h2>오류가 아닌 경고와 개발 도구 문제</h2></div>
    <div class="wrap"><table><thead><tr><th>현상</th><th>판단</th><th>대응</th></tr></thead><tbody>
      <tr><td>pytest의 Starlette/httpx deprecation</td><td><span class="pill check">추후 대응</span></td><td>현재 테스트 실패 아님, httpx2 전환 시 검토</td></tr>
      <tr><td>FastAPI on_event deprecated</td><td><span class="pill check">추후 대응</span></td><td>현재 startup 동작 가능, lifespan 이전 작업 후보</td></tr>
      <tr><td>pytest cache path 경고</td><td><span class="pill check">환경 경고</span></td><td>테스트 통과 여부와 분리해 캐시 경로·권한 확인</td></tr>
      <tr><td>reference_profiles.json 로드 실패, 기본값 사용</td><td><span class="pill check">폴백 동작</span></td><td>서버는 동작하지만 배포 파일 포함 여부 확인</td></tr>
      <tr><td>multimodal_model 로드 실패 → 룰 기반 폴백</td><td><span class="pill normal">의도된 폴백</span></td><td>현재 룰 기반 Fusion 사용이면 정상, ML 사용 예정이면 모델 경로 확인</td></tr>
      <tr><td>VS Code “content of the file is newer”</td><td><span class="pill error">편집 충돌</span></td><td>디스크 파일이 열린 편집기보다 최신. Compare로 차이를 확인하고 필요한 변경을 합친 뒤 저장</td></tr>
    </tbody></table></div>
    <div class="note bad"><strong>편집 충돌 주의:</strong> 무조건 덮어쓰면 다른 프로세스나 도구가 반영한 최신 변경을 잃을 수 있습니다. 먼저 Compare를 선택해 양쪽 차이를 확인하는 것이 안전합니다.</div>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · 운영 문제 해결 가이드 — 2026-07-24 현재 코드 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
