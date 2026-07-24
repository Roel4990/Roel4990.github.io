import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI Server API 데이터 흐름" };

const documentHtml = String.raw`<title>AI Server API 데이터 흐름</title>
<style>
  :root{--bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--ok-soft:rgba(47,125,90,.12);--warn:#C97A1E;--warn-soft:rgba(201,122,30,.13);--critical:#C8402A;--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--ok-soft:rgba(93,185,142,.16);--warn:#E5A653;--warn-soft:rgba(229,166,83,.16);--critical:#E36A50;--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}.mono,code,pre{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)}.top b{font-size:13px}.tags{display:flex;gap:6px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)}nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:980px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:75ch}
  .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:20px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:62px}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}h2{font-size:21px;margin:0}.desc{color:var(--dim);font-size:14px;max-width:75ch}
  .flow{max-width:760px;margin:24px auto}.row{display:grid;grid-template-columns:125px 1fr;gap:14px;align-items:center}.label{text-align:right;font:700 11px ui-monospace,monospace;color:var(--dim);text-transform:uppercase}.boxes{display:flex;gap:8px;flex-wrap:wrap}.box{background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:9px 13px;box-shadow:var(--shadow);font:700 12px ui-monospace,monospace}.box.main{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}.connector{padding-left:139px;color:var(--dim);height:25px}
  .wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow);margin-top:18px}table{width:100%;border-collapse:collapse;min-width:720px;font-size:13px}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .pill{display:inline-flex;border-radius:999px;padding:3px 9px;font:700 10.5px ui-monospace,monospace}.raw{background:var(--accent-soft);color:var(--accent)}.derived{background:var(--warn-soft);color:var(--warn)}.out{background:var(--ok-soft);color:var(--ok)}
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:17px;box-shadow:var(--shadow)}.card h3{font-size:15px;margin:0 0 7px}.card p{font-size:13px;color:var(--dim);margin:0}
  pre{background:#101419;color:#DDE5E9;border-radius:11px;padding:16px;overflow:auto;font-size:12px;line-height:1.65;box-shadow:var(--shadow)}.key{color:#8FC0DC}.value{color:#A9D18E}.comment{color:#849198}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;background:var(--accent-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}.note.warn{border-left-color:var(--warn);background:var(--warn-soft)}
  footer{max-width:980px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:720px){.stats{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}.row{grid-template-columns:1fr}.label{text-align:left}.connector{padding-left:10px}}
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — API 데이터 흐름</b><div class="tags"><span class="tag">2026-07-24</span><span class="tag">GET → FUSION → POST</span></div></div>
<nav><a href="#overview">전체 흐름</a><a href="#get">GET 입력</a><a href="#match">매칭</a><a href="#internal">내부 변환</a><a href="#fusion">판정</a><a href="#post">POST 출력</a><a href="#mapping">필드 추적</a><a href="#exceptions">제외 조건</a></nav>
<main>
  <p class="eyebrow">API DATA FLOW · FIELD LINEAGE</p>
  <h1>GET 원본이 최종 판정 결과가 되기까지</h1>
  <p class="lede">미들웨어의 Bio/CCTV recent 응답이 어떤 검증과 변환을 거쳐 하나의 작업자 Fusion 컨텍스트가 되고, 최종 <span class="mono">POST /api/v1/ai/result</span>의 각 필드로 연결되는지 현재 코드 기준으로 정리했습니다.</p>
  <div class="stats"><div class="stat"><strong>2 GET</strong><span>Bio + CCTV 병렬 조회</span></div><div class="stat"><strong>20초</strong><span>기본 recent 범위</span></div><div class="stat"><strong>±30초</strong><span>시간 매칭 범위</span></div><div class="stat"><strong>1 객체</strong><span>작업자별 선택 영상</span></div><div class="stat"><strong>1 POST</strong><span>새 Fusion 조합당</span></div></div>

  <section id="overview"><div class="head"><span class="num">01</span><h2>전체 처리 흐름</h2></div>
    <div class="flow">
      <div class="row"><div class="label">Middleware</div><div class="boxes"><span class="box">GET bio/recent</span><span class="box">GET cctv/recent</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Envelope</div><div class="boxes"><span class="box">status/server_time/count/items</span><span class="box">비객체 item 격리</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Match</div><div class="boxes"><span class="box">워치별 최대 bio.id</span><span class="box">color_group</span><span class="box">timestamp ±30초</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Context</div><div class="boxes"><span class="box main">WorkerContext</span><span class="box">BioSignal</span><span class="box">VideoSignal</span><span class="box">DetectedObject</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Filter</div><div class="boxes"><span class="box">Bio+CCTV Fusion만</span><span class="box">복합 키 중복 제외</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Decision</div><div class="boxes"><span class="box">생체 4상태 분류</span><span class="box main">fuse()</span><span class="box">geofence</span><span class="box">KPI</span></div></div><div class="connector">│</div>
      <div class="row"><div class="label">Middleware</div><div class="boxes"><span class="box main">POST ai/result</span></div></div>
    </div>
    <div class="note"><strong>현재 운영 정책:</strong> Bio 단독 또는 CCTV 단독 데이터는 최종 POST하지 않습니다. 두 입력이 실제로 매칭된 새로운 Fusion 조합만 분석·전송합니다.</div>
  </section>

  <section id="get"><div class="head"><span class="num">02</span><h2>GET 입력 단계</h2></div>
    <p class="desc"><span class="mono">analysis.py</span>가 두 API를 <span class="mono">asyncio.gather()</span>로 동시에 조회합니다. 기본 조회 범위는 환경변수 <span class="mono">RECENT_WINDOW_SEC=20</span>이며 변경할 수 있습니다.</p>
    <div class="cards">
      <div class="card"><h3>① Bio recent</h3><p><span class="mono">id</span>, watch_id, color_group, area, timestamp, sqi와 중첩형 metrics를 받습니다. id는 최신 레코드 선택과 Fusion 식별에 사용됩니다.</p></div>
      <div class="card"><h3>② CCTV recent</h3><p>cam_id, area, timestamp, 상태·FPS·인원수와 detected_objects 배열을 받습니다. CCTV id는 사용하지 않고 cam_id+timestamp+track_id로 객체를 식별합니다.</p></div>
    </div>
    <div class="wrap"><table><thead><tr><th>응답 봉투</th><th>처리</th><th>실패 영향</th></tr></thead><tbody>
      <tr><td class="mono">server_time</td><td>UTC ISO 8601 여부를 확인하고 이상하면 경고</td><td>정상 items는 계속 처리</td></tr>
      <tr><td class="mono">items</td><td>배열이 아니면 빈 목록, 배열 내부 비객체는 개별 제외</td><td>해당 feed 또는 item만 영향</td></tr>
      <tr><td class="mono">count</td><td>정수 여부와 items 길이 일치 여부를 확인</td><td>불일치해도 정상 items 유지</td></tr>
      <tr><td>HTTP/JSON 오류</td><td>예외를 잡고 빈 목록 반환</td><td>폴링 루프는 중단하지 않음</td></tr>
    </tbody></table></div>
  </section>

  <section id="match"><div class="head"><span class="num">03</span><h2>검증과 Bio/CCTV 매칭</h2></div>
    <div class="wrap"><table><thead><tr><th>순서</th><th>규칙</th><th>결과</th></tr></thead><tbody>
      <tr><td>1</td><td>Bio의 watch_id·정수 id·허용 color_group·UTC timestamp·metrics 객체 검증</td><td>잘못된 Bio item만 제외</td></tr>
      <tr><td>2</td><td>동일 watch_id 중 가장 큰 id 한 건 선택</td><td>워치별 최신 Bio 기준</td></tr>
      <tr><td>3</td><td>CCTV cam_id·UTC timestamp·detected_objects 배열 검증</td><td>잘못된 프레임만 제외</td></tr>
      <tr><td>4</td><td>DetectedObject 모델로 track_id, confidence, PPE, behavior, zone 검증</td><td>불량 객체만 제거한 프레임 사본 생성</td></tr>
      <tr><td>5</td><td><span class="mono">bio.color_group == object.color_group</span>이며 시간차가 30초 이하</td><td>시간차가 가장 작은 객체 선택</td></tr>
      <tr><td>6</td><td>시간차가 같으면 timestamp가 더 최신인 CCTV 선택</td><td>동률 기준 고정</td></tr>
      <tr><td>7</td><td>매칭 CCTV area 우선, 없거나 미허용이면 Bio area 또는 미확인</td><td>최종 WorkerContext.area 결정</td></tr>
    </tbody></table></div>
    <div class="note"><strong>객체 키:</strong> <span class="mono">cam_id:timestamp:track_id</span> 형태입니다. 최종 Fusion 중복 키는 <span class="mono">(worker_id, bio_record_id, cctv_record_key)</span>이며 같은 A+B만 제외하고 A+C와 D+B는 새 조합입니다.</div>
  </section>

  <section id="internal"><div class="head"><span class="num">04</span><h2>내부 모델 변환</h2></div>
    <div class="wrap"><table><thead><tr><th>원본</th><th>내부 필드</th><th>변환 방식</th><th>용도</th></tr></thead><tbody>
      <tr><td class="mono">bio.metrics.hr</td><td class="mono">BioSignal.heart_rate</td><td>값 추출</td><td>요약 지표·fallback 판정</td></tr>
      <tr><td class="mono">bio.metrics.hrv_time_domain.rmssd</td><td class="mono">BioSignal.hrv</td><td>값 추출</td><td>요약 지표·fallback 판정</td></tr>
      <tr><td class="mono">bio.metrics 전체</td><td class="mono">BioSignal.metrics</td><td><span class="pill raw">원본 보존</span></td><td>생체 4상태 분류</td></tr>
      <tr><td class="mono">bio.sqi</td><td class="mono">BioSignal.sqi</td><td>그대로 전달</td><td>Fusion 결과의 sqi·confidence 입력</td></tr>
      <tr><td class="mono">detected_objects[] 전체</td><td class="mono">VideoSignal.detected_objects</td><td>유효 객체만 모델화</td><td>raw_data 전달</td></tr>
      <tr><td>선택된 객체</td><td class="mono">matched_detected_object</td><td><span class="pill raw">객체 원본 모델</span></td><td>최종 detected_metrics</td></tr>
      <tr><td>선택 객체 behavior</td><td class="mono">VideoAnalysisInput</td><td>action·duration·abnormal 추출</td><td>영상 위험 판정</td></tr>
      <tr><td>선택 객체 PPE/zone</td><td class="mono">VideoAnalysisInput</td><td>dict로 전달</td><td>PPE·지오펜스 판정</td></tr>
    </tbody></table></div>
    <div class="note warn"><strong>원본 보존의 범위:</strong> 전체 Bio metrics는 내부 분석 결과까지 유지되지만 현재 최종 POST의 최상위 필드에는 포함되지 않습니다. CCTV는 전체 배열이 아니라 실제로 매칭·판정에 사용한 객체 한 건만 <span class="mono">detected_metrics</span>로 전송합니다.</div>
  </section>

  <section id="fusion"><div class="head"><span class="num">05</span><h2>분류와 Fusion 판정</h2></div>
    <div class="cards">
      <div class="card"><h3>생체 분류</h3><p>중첩 metrics의 HRV time/frequency 지표를 기준 프로필과 비교해 normal, syncope, arrhythmia, fatigue 및 confidence를 생성합니다.</p></div>
      <div class="card"><h3>영상 해석</h3><p>current_action, 지속시간, helmet·vest·harness, 위험구역·고소구역을 영상 위험 신호로 해석합니다.</p></div>
      <div class="card"><h3>위험 점수</h3><p>Bio, Video, PPE 점수 중 최댓값을 사용하고 PPE 미착용 상태에서 위험/고소구역이면 30점을 더해 최대 100으로 제한합니다.</p></div>
      <div class="card"><h3>파생 결과</h3><p>risk_score, severity, confidence, weights, need_dispatch, recommendation, reason, agreement와 geofence를 만듭니다.</p></div>
    </div>
    <div class="wrap"><table><thead><tr><th>파생값</th><th>의미</th><th>생성 위치</th></tr></thead><tbody>
      <tr><td class="mono">bio_state</td><td>생체 4상태 영문 코드</td><td>hrv_state_classifier → bio_fusion</td></tr>
      <tr><td class="mono">bio_state_confidence</td><td>기준 프로필 분류 신뢰도</td><td>hrv_state_classifier</td></tr>
      <tr><td class="mono">fusion.*</td><td>최종 점수·등급·출동 여부·설명 가능 정보</td><td>multimodal_fusion.fuse()</td></tr>
      <tr><td class="mono">geofence</td><td>구역 상태와 PPE 미착용 결합 표시</td><td>bio_fusion._evaluate_geofence()</td></tr>
      <tr><td class="mono">bio_id</td><td>판정에 사용한 Bio recent 레코드 ID</td><td>analysis.analyze_worker()</td></tr>
      <tr><td class="mono">kpi.inference_ms</td><td>컨텍스트 변환부터 판정 완료까지 내부 추론 시간</td><td>analysis.analyze_worker()</td></tr>
    </tbody></table></div>
  </section>

  <section id="post"><div class="head"><span class="num">06</span><h2>최종 POST 출력</h2></div>
    <p class="desc"><span class="mono">middleware_client._build_ai_result_payload()</span>이 내부 AnalyzeResponse에서 미들웨어 계약에 필요한 필드만 골라 전송합니다.</p>
<pre>{
  <span class="key">"target_worker"</span>: <span class="value">"watch_red_001"</span>,
  <span class="key">"color_group"</span>: <span class="value">"red"</span>,
  <span class="key">"area"</span>: <span class="value">"기계실1"</span>,
  <span class="key">"timestamp"</span>: <span class="value">"2026-07-15T01:15:30.000Z"</span>,
  <span class="key">"alert_message"</span>: <span class="value">"즉시 현장 출동 ..."</span>,
  <span class="key">"cam_id"</span>: <span class="value">"CAM_01"</span>,
  <span class="key">"detected_metrics"</span>: {
    <span class="comment">// 실제 매칭된 detected_objects[i] 한 건</span>
    <span class="key">"track_id"</span>: <span class="value">"person_01"</span>,
    <span class="key">"color_group"</span>: <span class="value">"red"</span>,
    <span class="key">"confidence"</span>: 0.93,
    <span class="key">"ppe_status"</span>: { ... },
    <span class="key">"behavior"</span>: { ... },
    <span class="key">"zone_status"</span>: { ... }
  },
  <span class="key">"derived_states"</span>: {
    <span class="key">"bio_id"</span>: 1234,
    <span class="key">"bio_state"</span>: <span class="value">"normal"</span>,
    <span class="key">"bio_state_confidence"</span>: 0.91,
    <span class="key">"fusion"</span>: {
      <span class="key">"risk_score"</span>: 10, <span class="key">"severity"</span>: <span class="value">"normal"</span>,
      <span class="key">"confidence"</span>: 0.809, <span class="key">"sqi"</span>: 0.95,
      <span class="key">"weights"</span>: { <span class="key">"bio"</span>: 0.5, <span class="key">"video"</span>: 0.5 },
      <span class="key">"need_dispatch"</span>: false,
      <span class="key">"recommendation"</span>: <span class="value">"조치 불필요"</span>,
      <span class="key">"reason"</span>: <span class="value">"..."</span>,
      <span class="key">"agreement"</span>: false
    },
    <span class="key">"geofence"</span>: {
      <span class="key">"violation"</span>: false, <span class="key">"in_danger_zone"</span>: false,
      <span class="key">"is_high_altitude"</span>: false, <span class="key">"message"</span>: null
    },
    <span class="key">"kpi"</span>: { <span class="key">"inference_ms"</span>: 1.42 }
  }
}</pre>
    <div class="note"><strong>POST 필드 제한:</strong> 내부의 overall_risk, score, 전체 detected_objects, 전체 Bio metrics, detail, camera_status, fps, total_workers는 현재 최종 payload에서 제외됩니다.</div>
  </section>

  <section id="mapping"><div class="head"><span class="num">07</span><h2>최종 필드의 출처</h2></div>
    <div class="wrap"><table><thead><tr><th>POST 경로</th><th>직접 출처</th><th>구분</th><th>설명</th></tr></thead><tbody>
      <tr><td class="mono">target_worker</td><td class="mono">bio.watch_id</td><td><span class="pill raw">원본</span></td><td>Bio 작업자 식별자를 그대로 사용</td></tr>
      <tr><td class="mono">color_group</td><td class="mono">bio.color_group</td><td><span class="pill raw">원본</span></td><td>영상 객체 매칭에 사용한 색상</td></tr>
      <tr><td class="mono">area</td><td>CCTV area 우선</td><td><span class="pill derived">정규화</span></td><td>미허용 값은 미확인</td></tr>
      <tr><td class="mono">timestamp</td><td class="mono">bio.timestamp</td><td><span class="pill raw">원본</span></td><td>분석 기준 Bio 시각</td></tr>
      <tr><td class="mono">cam_id</td><td class="mono">matched CCTV.cam_id</td><td><span class="pill raw">원본</span></td><td>선택 영상 프레임의 카메라</td></tr>
      <tr><td class="mono">detected_metrics</td><td>선택된 detected object</td><td><span class="pill raw">선택 원본</span></td><td>extra ignore 적용 후 허용 모델 필드</td></tr>
      <tr><td class="mono">alert_message</td><td class="mono">fusion.recommendation</td><td><span class="pill derived">파생</span></td><td>최종 대응 권고를 상위 메시지로 재사용</td></tr>
      <tr><td class="mono">derived_states.bio_id</td><td class="mono">bio.id</td><td><span class="pill raw">원본</span></td><td>판정에 사용한 저장 레코드</td></tr>
      <tr><td class="mono">derived_states.bio_state*</td><td>HRV 분류기</td><td><span class="pill derived">파생</span></td><td>상태 코드와 분류 신뢰도</td></tr>
      <tr><td class="mono">derived_states.fusion</td><td class="mono">fuse()</td><td><span class="pill derived">파생</span></td><td>최종 판단 핵심 값 9개</td></tr>
      <tr><td class="mono">derived_states.geofence</td><td>zone_status + ppe_status</td><td><span class="pill derived">파생</span></td><td>항상 동일한 4필드 구조로 보정</td></tr>
      <tr><td class="mono">derived_states.kpi</td><td class="mono">perf_counter()</td><td><span class="pill derived">파생</span></td><td>AI 내부 처리 시간</td></tr>
    </tbody></table></div>
  </section>

  <section id="exceptions"><div class="head"><span class="num">08</span><h2>POST까지 도달하지 않는 경우</h2></div>
    <div class="wrap"><table><thead><tr><th>조건</th><th>처리</th><th>다른 항목 영향</th></tr></thead><tbody>
      <tr><td>Bio watch_id/id/color_group/timestamp/metrics 오류</td><td>해당 Bio 제외</td><td>없음</td></tr>
      <tr><td>CCTV cam_id/timestamp/detected_objects 오류</td><td>해당 프레임 제외</td><td>없음</td></tr>
      <tr><td>DetectedObject 계약 오류</td><td>해당 객체만 제외</td><td>같은 프레임의 정상 객체 유지</td></tr>
      <tr><td>color_group 불일치 또는 시간차 30초 초과</td><td>Bio-only 컨텍스트가 되지만 POST 제외</td><td>없음</td></tr>
      <tr><td>동일 Fusion 복합 키가 TTL 안에 재등장</td><td>중복 분석·POST 제외</td><td>새 조합은 정상 처리</td></tr>
      <tr><td>한 작업자 분석 예외</td><td>해당 작업자만 건너뜀</td><td>나머지 분석·POST 계속</td></tr>
      <tr><td>POST HTTP 실패</td><td>skipped 결과 기록, 루프 계속</td><td>해당 조합은 재전송하지 않도록 처리 완료 표시</td></tr>
    </tbody></table></div>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · API 데이터 흐름 — 2026-07-24 현재 코드 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
