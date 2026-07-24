import type { Metadata } from "next";

export const metadata: Metadata = { title: "POST /api/v1/ai/result 계약 정리" };

const documentHtml = String.raw`<title>POST /api/v1/ai/result 계약 정리</title>
<style>
  :root{--bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--ok-soft:rgba(47,125,90,.12);--warn:#C97A1E;--warn-soft:rgba(201,122,30,.13);--critical:#C8402A;--critical-soft:rgba(200,64,42,.12);--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--ok-soft:rgba(93,185,142,.16);--warn:#E5A653;--warn-soft:rgba(229,166,83,.16);--critical:#E36A50;--critical-soft:rgba(227,106,80,.16);--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}.mono,code,pre{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)}.top b{font-size:13px}.tags{display:flex;gap:6px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)}nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:980px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:76ch}
  .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:20px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:62px}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}h2{font-size:21px;margin:0}.desc{color:var(--dim);font-size:14px;max-width:76ch}
  .wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow);margin-top:18px}table{width:100%;border-collapse:collapse;min-width:760px;font-size:13px}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .pill{display:inline-flex;border-radius:999px;padding:3px 9px;font:700 10.5px ui-monospace,monospace}.raw{background:var(--accent-soft);color:var(--accent)}.derived{background:var(--warn-soft);color:var(--warn)}.required{background:var(--ok-soft);color:var(--ok)}.excluded{background:var(--critical-soft);color:var(--critical)}
  pre{background:#101419;color:#DDE5E9;border-radius:11px;padding:16px;overflow:auto;font-size:12px;line-height:1.62;box-shadow:var(--shadow)}.key{color:#8FC0DC}.value{color:#A9D18E}.comment{color:#849198}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:17px;box-shadow:var(--shadow)}.card h3{font-size:15px;margin:0 0 7px}.card p{font-size:13px;color:var(--dim);margin:0}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;background:var(--accent-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}.note.warn{border-left-color:var(--warn);background:var(--warn-soft)}
  .flow{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin:22px 0}.flow span{background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:9px 13px;font:700 12px ui-monospace,monospace;box-shadow:var(--shadow)}.flow i{font-style:normal;color:var(--dim)}.flow .main{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
  footer{max-width:980px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:720px){.stats{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}}
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — 최종 POST 계약</b><div class="tags"><span class="tag">2026-07-24</span><span class="tag">API RESULT</span></div></div>
<nav><a href="#overview">개요</a><a href="#payload">전체 JSON</a><a href="#top">최상위 필드</a><a href="#detected">detected_metrics</a><a href="#derived">derived_states</a><a href="#meaning">핵심 의미</a><a href="#excluded">제외 필드</a><a href="#delivery">전송 정책</a><a href="#tests">검증</a></nav>
<main>
  <p class="eyebrow">POST /API/V1/AI/RESULT</p>
  <h1>AI Server가 미들웨어에 돌려주는 최종 결과</h1>
  <p class="lede">내부 <span class="mono">AnalyzeResponse</span>를 그대로 전송하지 않고, <span class="mono">middleware_client._build_ai_result_payload()</span>이 최종 계약에 필요한 필드만 선택해 판정 결과 1건당 한 번 POST합니다.</p>
  <div class="stats"><div class="stat"><strong>8개</strong><span>최상위 필드</span></div><div class="stat"><strong>1개</strong><span>선택 CCTV 객체</span></div><div class="stat"><strong>9개</strong><span>fusion 필드</span></div><div class="stat"><strong>4개</strong><span>geofence 필드</span></div><div class="stat"><strong>5초</strong><span>POST timeout</span></div></div>

  <section id="overview"><div class="head"><span class="num">01</span><h2>생성 흐름</h2></div>
    <div class="flow"><span>WorkerContext</span><i>→</i><span>analyze_worker()</span><i>→</i><span>AnalyzeResponse</span><i>→</i><span class="main">_build_ai_result_payload()</span><i>→</i><span>POST ai/result</span></div>
    <div class="cards">
      <div class="card"><h3>식별 정보</h3><p>Bio의 watch_id·color_group·timestamp와 매칭된 CCTV의 cam_id·area를 전달합니다.</p></div>
      <div class="card"><h3>영상 증거</h3><p>전체 프레임이 아니라 실제 판정에 선택된 detected object 한 건을 전달합니다.</p></div>
      <div class="card"><h3>판정 근거</h3><p>생체 상태, Fusion 결과, 지오펜스와 내부 추론시간을 derived_states에 묶습니다.</p></div>
    </div>
    <div class="note"><strong>현재 전송 조건:</strong> Bio와 CCTV 객체가 매칭된 새로운 Fusion 조합만 전송합니다. Bio-only와 CCTV-only 결과는 주기 실행의 POST 대상이 아닙니다.</div>
  </section>

  <section id="payload"><div class="head"><span class="num">02</span><h2>최종 JSON 예시</h2></div>
<pre>{
  <span class="key">"target_worker"</span>: <span class="value">"watch_red_001"</span>,
  <span class="key">"color_group"</span>: <span class="value">"red"</span>,
  <span class="key">"area"</span>: <span class="value">"기계실1"</span>,
  <span class="key">"timestamp"</span>: <span class="value">"2026-07-15T01:15:30.000Z"</span>,
  <span class="key">"alert_message"</span>: <span class="value">"즉시 현장 출동 — 쓰러짐 감지"</span>,
  <span class="key">"cam_id"</span>: <span class="value">"CAM_01"</span>,
  <span class="key">"detected_metrics"</span>: {
    <span class="key">"track_id"</span>: <span class="value">"person_01"</span>,
    <span class="key">"color_group"</span>: <span class="value">"red"</span>,
    <span class="key">"confidence"</span>: 0.93,
    <span class="key">"ppe_status"</span>: { <span class="key">"helmet"</span>: true, <span class="key">"vest"</span>: true, <span class="key">"harness"</span>: false },
    <span class="key">"behavior"</span>: {
      <span class="key">"current_action"</span>: <span class="value">"fainting"</span>,
      <span class="key">"is_abnormal"</span>: true,
      <span class="key">"action_duration_sec"</span>: 5
    },
    <span class="key">"zone_status"</span>: { <span class="key">"in_danger_zone"</span>: false, <span class="key">"is_high_altitude"</span>: false }
  },
  <span class="key">"derived_states"</span>: {
    <span class="key">"bio_id"</span>: 1234,
    <span class="key">"bio_state"</span>: <span class="value">"syncope"</span>,
    <span class="key">"bio_state_confidence"</span>: 0.91,
    <span class="key">"fusion"</span>: {
      <span class="key">"risk_score"</span>: 90,
      <span class="key">"severity"</span>: <span class="value">"critical"</span>,
      <span class="key">"confidence"</span>: 0.88,
      <span class="key">"sqi"</span>: 0.95,
      <span class="key">"weights"</span>: { <span class="key">"bio"</span>: 0.5, <span class="key">"video"</span>: 0.5 },
      <span class="key">"need_dispatch"</span>: true,
      <span class="key">"recommendation"</span>: <span class="value">"즉시 현장 출동 — 쓰러짐 감지"</span>,
      <span class="key">"reason"</span>: <span class="value">"영상 쓰러짐과 생체 이상 동시 감지 [산안법 제51조]"</span>,
      <span class="key">"agreement"</span>: true
    },
    <span class="key">"geofence"</span>: {
      <span class="key">"violation"</span>: false,
      <span class="key">"in_danger_zone"</span>: false,
      <span class="key">"is_high_altitude"</span>: false,
      <span class="key">"message"</span>: null
    },
    <span class="key">"kpi"</span>: { <span class="key">"inference_ms"</span>: 1.42 }
  }
}</pre>
    <div class="note warn"><strong>예시 주의:</strong> 위 confidence와 weights는 구조 설명용 예시입니다. 실제 값은 생체 분류 confidence, SQI 임시 게이트, Bio·Video 위험 점수에 따라 달라집니다.</div>
  </section>

  <section id="top"><div class="head"><span class="num">03</span><h2>최상위 8개 필드</h2></div>
    <div class="wrap"><table><thead><tr><th>필드</th><th>출처</th><th>의미</th><th>현재 Fusion POST</th></tr></thead><tbody>
      <tr><td class="mono">target_worker</td><td class="mono">bio.watch_id</td><td>판정 대상 워치 ID</td><td><span class="pill required">값 존재</span></td></tr>
      <tr><td class="mono">color_group</td><td class="mono">bio.color_group</td><td>Bio/CCTV 매칭에 사용한 색상 키</td><td><span class="pill required">값 존재</span></td></tr>
      <tr><td class="mono">area</td><td>매칭 CCTV area 우선</td><td>작업자 최종 위치, 미허용 값은 미확인</td><td><span class="pill required">값 존재</span></td></tr>
      <tr><td class="mono">timestamp</td><td class="mono">bio.timestamp</td><td>분석 기준 생체 측정 시각</td><td><span class="pill required">값 존재</span></td></tr>
      <tr><td class="mono">alert_message</td><td class="mono">fusion.recommendation</td><td>관제 화면에 사용할 대표 대응 문구</td><td><span class="pill derived">파생</span></td></tr>
      <tr><td class="mono">cam_id</td><td>매칭 CCTV frame</td><td>판정 영상의 카메라 ID</td><td><span class="pill required">값 존재</span></td></tr>
      <tr><td class="mono">detected_metrics</td><td>선택된 DetectedObject</td><td>실제 판정에 사용한 영상 객체 증거</td><td><span class="pill raw">선택 원본</span></td></tr>
      <tr><td class="mono">derived_states</td><td>분류·Fusion·KPI</td><td>AI가 계산한 상태와 판단 근거</td><td><span class="pill derived">파생</span></td></tr>
    </tbody></table></div>
  </section>

  <section id="detected"><div class="head"><span class="num">04</span><h2>detected_metrics 계약</h2></div>
    <p class="desc">CCTV recent의 <span class="mono">detected_objects[]</span> 전체가 아니라 Bio와 매칭되어 실제 판정에 사용된 객체 한 건입니다. <span class="mono">DetectedObject</span> 모델을 통과한 필드만 전송합니다.</p>
    <div class="wrap"><table><thead><tr><th>필드</th><th>타입</th><th>역할</th><th>검증</th></tr></thead><tbody>
      <tr><td class="mono">track_id</td><td>string</td><td>프레임 내 추적 객체 식별</td><td>빈 문자열 불가</td></tr>
      <tr><td class="mono">color_group</td><td>string|null</td><td>Bio 매칭 키</td><td>Fusion 결과에서는 허용 색상 값</td></tr>
      <tr><td class="mono">confidence</td><td>float</td><td>영상 객체 감지 신뢰도</td><td>0~1</td></tr>
      <tr><td class="mono">ppe_status</td><td>object</td><td>helmet·vest·harness 착용 여부</td><td>세 boolean 필수</td></tr>
      <tr><td class="mono">behavior</td><td>object</td><td>행동·이상 여부·지속시간</td><td>허용 action, duration 0 이상</td></tr>
      <tr><td class="mono">zone_status</td><td>object</td><td>위험구역·고소구역 여부</td><td>두 boolean 필수</td></tr>
    </tbody></table></div>
    <div class="note"><strong>미사용 필드 제거:</strong> 모델의 <span class="mono">extra="ignore"</span> 정책 때문에 image_url, video_clip_url, bbox, skeleton, multimodal_feature_vector처럼 현행 계약에 없는 필드는 최종 detected_metrics에 포함되지 않습니다.</div>
  </section>

  <section id="derived"><div class="head"><span class="num">05</span><h2>derived_states 내부 계약</h2></div>
    <div class="wrap"><table><thead><tr><th>경로</th><th>출처</th><th>의미</th><th>null 가능성</th></tr></thead><tbody>
      <tr><td class="mono">bio_id</td><td>Bio recent id</td><td>판정에 사용한 생체 저장 레코드</td><td>현재 Fusion POST에서는 정상적으로 정수</td></tr>
      <tr><td class="mono">bio_state</td><td>HRV 분류기</td><td>normal/syncope/arrhythmia/fatigue</td><td>분류 가능한 HRV 구조가 없으면 null</td></tr>
      <tr><td class="mono">bio_state_confidence</td><td>HRV 분류기</td><td>생체 상태 분류 신뢰도</td><td>분류 실패·미실행 시 null</td></tr>
      <tr><td class="mono">fusion</td><td class="mono">fuse()</td><td>최종 판정의 핵심 9개 필드</td><td>키 구조는 유지, 내부 값은 안전 기본값 가능</td></tr>
      <tr><td class="mono">geofence</td><td>zone_status + ppe_status</td><td>구역과 PPE 상태를 표시</td><td>객체는 항상 4개 키로 보정</td></tr>
      <tr><td class="mono">kpi.inference_ms</td><td class="mono">perf_counter()</td><td>AI 내부 컨텍스트 변환·판정 시간</td><td>정상 분석 결과에서는 값 존재</td></tr>
    </tbody></table></div>

    <h3 style="margin-top:28px;">fusion 9개 필드</h3>
    <div class="wrap"><table><thead><tr><th>필드</th><th>의미</th><th>해석</th></tr></thead><tbody>
      <tr><td class="mono">risk_score</td><td>0~100 최종 위험 점수</td><td>Bio·Video·PPE 위험과 구역 가중 결과</td></tr>
      <tr><td class="mono">severity</td><td>4단계 최종 등급</td><td>normal/caution/warning/critical</td></tr>
      <tr><td class="mono">confidence</td><td>최종 Fusion 확신도</td><td>생체 분류 confidence, SQI gate 및 agreement를 반영</td></tr>
      <tr><td class="mono">sqi</td><td>입력 생체신호 품질</td><td>Bio recent 값을 전달하며 null 가능</td></tr>
      <tr><td class="mono">weights</td><td>Bio·Video 상대 기여도</td><td>각 위험 점수의 비율이며 PPE 기여도는 별도 키가 없음</td></tr>
      <tr><td class="mono">need_dispatch</td><td>현장 출동 여부</td><td>severity가 critical일 때 true</td></tr>
      <tr><td class="mono">recommendation</td><td>대응 권고</td><td>alert_message의 원본</td></tr>
      <tr><td class="mono">reason</td><td>판정 근거</td><td>센서 조합 설명과 적용 법령 문구</td></tr>
      <tr><td class="mono">agreement</td><td>두 모달리티 이상 신호 일치</td><td>Bio와 Video가 모두 비정상일 때 true</td></tr>
    </tbody></table></div>
  </section>

  <section id="meaning"><div class="head"><span class="num">06</span><h2>혼동하기 쉬운 값</h2></div>
    <div class="cards">
      <div class="card"><h3>bio_state_confidence</h3><p>HRV 원본이 네 가지 생체 기준 프로필 중 선택된 상태와 얼마나 가까운지를 나타냅니다. 영상은 반영하지 않습니다.</p></div>
      <div class="card"><h3>fusion.confidence</h3><p>생체 상태 confidence에 SQI gate와 Bio/Video 동시 이상 여부를 반영한 최종 융합 확신도입니다.</p></div>
      <div class="card"><h3>agreement</h3><p>“멀티모달 데이터가 존재한다”는 뜻이 아닙니다. Bio와 Video가 모두 비정상으로 판단됐는지를 표시하는 XAI 값입니다.</p></div>
    </div>
    <div class="note warn"><strong>SQI 현재 상태:</strong> 정식 0.8 게이팅 계산은 비활성화되어 있고 코드에서는 0.9~1.0 임시 gate를 사용합니다. 따라서 같은 입력이어도 fusion.confidence가 소폭 달라질 수 있습니다.</div>
  </section>

  <section id="excluded"><div class="head"><span class="num">07</span><h2>내부에는 있지만 POST에서 제외되는 값</h2></div>
    <div class="wrap"><table><thead><tr><th>내부 필드</th><th>용도</th><th>최종 POST</th></tr></thead><tbody>
      <tr><td class="mono">status</td><td>AI 내부 분석 성공 상태</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">overall_risk</td><td>기존 low/medium/high/critical 호환 값</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">score</td><td>내부 risk_score 재포장 값</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">metrics</td><td>Bio 원본 metrics 내부 보존</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">detected_objects</td><td>유효 CCTV 객체 배열 내부 보존</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">camera_status / fps / total_workers</td><td>프레임 상태와 KPI 참고</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">detail</td><td>디버깅용 입력·이유 상세</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">fusion.risk_index / risk_level*</td><td>내부 0~1 지수와 3단계·평활 값</td><td><span class="pill excluded">제외</span></td></tr>
      <tr><td class="mono">geofence.helmet_off / vest_off / harness_off</td><td>내부 PPE 상세 표시</td><td><span class="pill excluded">제외</span></td></tr>
    </tbody></table></div>
  </section>

  <section id="delivery"><div class="head"><span class="num">08</span><h2>전송과 실패 처리 정책</h2></div>
    <div class="wrap"><table><thead><tr><th>상황</th><th>동작</th><th>중복 키 처리</th></tr></thead><tbody>
      <tr><td>새 Fusion 조합 분석 성공</td><td>결과를 POST하고 응답 JSON 반환</td><td>처리 완료 기록</td></tr>
      <tr><td>여러 결과 동시 전송</td><td><span class="mono">asyncio.gather(return_exceptions=True)</span>로 병렬 POST</td><td>각 분석 성공 컨텍스트 기록</td></tr>
      <tr><td>HTTP 오류 또는 5초 timeout</td><td>예외를 잡고 status=skipped 반환, 분석 루프 계속</td><td>처리 완료 기록</td></tr>
      <tr><td>같은 Fusion 조합 재등장</td><td>120초 TTL 안에서는 분석·POST 제외</td><td>기존 기록 유지</td></tr>
    </tbody></table></div>
    <div class="note warn"><strong>현재 선택:</strong> POST 실패 후 자동 재시도보다 중복 경보 방지를 우선합니다. 따라서 네트워크 오류 결과가 자동 재전송되지 않아 유실될 가능성은 별도 운영 정책으로 검토해야 합니다.</div>
  </section>

  <section id="tests"><div class="head"><span class="num">09</span><h2>계약 검증 방법</h2></div>
    <div class="wrap"><table><thead><tr><th>시나리오</th><th>검증 대상</th><th>실행</th></tr></thead><tbody>
      <tr><td>T091</td><td>최상위 키가 정확히 8개인지 확인</td><td class="mono">--case T091</td></tr>
      <tr><td>T092</td><td>target_worker가 Bio watch_id와 동일</td><td class="mono">--case T092</td></tr>
      <tr><td>T093</td><td>detected_metrics가 선택된 CCTV 객체와 동일</td><td class="mono">--case T093</td></tr>
      <tr><td>T094</td><td>image_url/video_clip_url 등 미사용 필드 제거</td><td class="mono">--case T094</td></tr>
      <tr><td>T095</td><td>derived_states.bio_id 전달</td><td class="mono">--case T095</td></tr>
      <tr><td>T096</td><td>fusion 필드 9개 계약</td><td class="mono">--case T096</td></tr>
    </tbody></table></div>
<pre><span class="comment"># 미들웨어 없이 로컬 POST 계약 배치 실행</span>
python <span class="value">"테스트/run_scenario_batches.py"</span> --batch 10

<span class="comment"># 계약 결과 JSON 증적 저장</span>
python <span class="value">"테스트/run_scenario_batches.py"</span> --batch 10 --report <span class="value">"테스트/results/batch10.json"</span></pre>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · POST /api/v1/ai/result 계약 — 2026-07-24 현재 코드 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
