import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bio/CCTV 매칭 및 중복 처리" };

const documentHtml = String.raw`<title>Bio/CCTV 매칭 및 중복 처리</title>
<style>
  :root{--bg:#F2F4F3;--soft:#E7EBE9;--surface:#FFF;--text:#191D20;--dim:#5B6368;--border:rgba(25,29,32,.13);--accent:#2C6E8C;--accent-soft:rgba(44,110,140,.1);--ok:#2F7D5A;--ok-soft:rgba(47,125,90,.12);--warn:#C97A1E;--warn-soft:rgba(201,122,30,.13);--critical:#C8402A;--critical-soft:rgba(200,64,42,.12);--shadow:0 1px 2px rgba(20,23,27,.06),0 8px 24px rgba(20,23,27,.05)}
  @media(prefers-color-scheme:dark){:root{--bg:#15181C;--soft:#1C2025;--surface:#1E2227;--text:#E7EAEC;--dim:#98A1A6;--border:rgba(231,234,236,.13);--accent:#6BA8C7;--accent-soft:rgba(107,168,199,.14);--ok:#5DB98E;--ok-soft:rgba(93,185,142,.16);--warn:#E5A653;--warn-soft:rgba(229,166,83,.16);--critical:#E36A50;--critical-soft:rgba(227,106,80,.16);--shadow:0 1px 2px rgba(0,0,0,.3),0 8px 24px rgba(0,0,0,.28)}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;line-height:1.65}.mono,code,pre{font-family:ui-monospace,Consolas,"Noto Sans Mono CJK KR",monospace}
  .top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:11px 24px;background:var(--surface);border-bottom:1px solid var(--border)}.top b{font-size:13px}.tags{display:flex;gap:6px}.tag{font:11px ui-monospace,monospace;border:1px solid var(--border);border-radius:5px;padding:3px 8px;color:var(--dim)}
  nav{display:flex;gap:6px;flex-wrap:wrap;padding:10px 24px;background:var(--soft);border-bottom:1px solid var(--border)}nav a{font:11.5px ui-monospace,monospace;color:var(--dim);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 10px}
  main{max-width:960px;margin:auto;padding:56px 24px 96px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.08em;color:var(--accent);margin:0 0 9px}h1{font-size:clamp(28px,4vw,40px);line-height:1.2;margin:0 0 12px}.lede{color:var(--dim);max-width:74ch}
  .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:28px}.stat{background:var(--surface);padding:16px}.stat strong{display:block;font-size:20px}.stat span{font-size:11.5px;color:var(--dim)}
  section{margin-top:62px}.head{display:flex;gap:10px;align-items:baseline}.num{font:700 13px ui-monospace,monospace;color:var(--accent)}h2{font-size:21px;margin:0}.desc{color:var(--dim);font-size:14px;max-width:75ch}
  .flow{max-width:760px;margin:24px auto}.step{display:grid;grid-template-columns:42px 1fr;gap:13px;position:relative;margin:0}.step:not(:last-child):before{content:"";position:absolute;left:20px;top:38px;bottom:-8px;border-left:1px solid var(--border)}.circle{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--accent);color:#fff;font:700 12px ui-monospace,monospace}.body{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:13px 16px;margin-bottom:14px;box-shadow:var(--shadow)}.body b{display:block;font-size:14px}.body p{margin:3px 0 0;color:var(--dim);font-size:13px}
  .wrap{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow);margin-top:18px}table{width:100%;border-collapse:collapse;min-width:700px;font-size:13px}th,td{padding:11px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}th{font-size:11px;color:var(--dim);background:var(--soft);text-transform:uppercase}tr:last-child td{border:0}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:17px;box-shadow:var(--shadow)}.card h3{font-size:15px;margin:0 0 7px}.card p{font-size:13px;color:var(--dim);margin:0}.card.ok{border-top:3px solid var(--ok)}.card.warn{border-top:3px solid var(--warn)}.card.no{border-top:3px solid var(--critical)}
  .pill{display:inline-flex;border-radius:999px;padding:3px 9px;font:700 10.5px ui-monospace,monospace}.yes{background:var(--ok-soft);color:var(--ok)}.new{background:var(--accent-soft);color:var(--accent)}.skip{background:var(--critical-soft);color:var(--critical)}
  pre{background:#101419;color:#DDE5E9;border-radius:11px;padding:16px;overflow:auto;font-size:12.5px;line-height:1.7;box-shadow:var(--shadow)}.key{color:#8FC0DC}.value{color:#A9D18E}.comment{color:#849198}
  .note{margin-top:18px;padding:14px 16px;border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;background:var(--accent-soft);font-size:13.5px;color:var(--dim)}.note strong{color:var(--text)}.note.warn{border-left-color:var(--warn);background:var(--warn-soft)}
  footer{max-width:960px;margin:auto;padding:20px 24px 60px;border-top:1px solid var(--border);color:var(--dim);font-size:12px}@media(max-width:720px){.stats{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}}
</style>
<div class="top"><b>AI CCTV 안전 판단 시스템 — 매칭 및 중복 처리</b><div class="tags"><span class="tag">2026-07-24</span><span class="tag">MATCH + DEDUP</span></div></div>
<nav><a href="#summary">요약</a><a href="#matching">매칭 순서</a><a href="#latest">최신 Bio</a><a href="#cctv">CCTV 선택</a><a href="#area">구역</a><a href="#keys">식별 키</a><a href="#dedup">중복 예시</a><a href="#runtime">실행 제어</a><a href="#limits">한계</a></nav>
<main>
  <p class="eyebrow">MATCHING.PY × ANALYSIS.PY</p>
  <h1>누구의 Bio와 어떤 CCTV 객체를 묶을 것인가</h1>
  <p class="lede">Bio를 중심으로 워치별 최신 레코드를 하나 고르고, 같은 <span class="mono">color_group</span>과 ±30초 조건을 만족하는 가장 가까운 CCTV 객체를 연결합니다. 이후 Bio 레코드와 CCTV 객체의 조합 단위로 중복 분석을 방지합니다.</p>
  <div class="stats"><div class="stat"><strong>Bio 중심</strong><span>워치별 컨텍스트 생성</span></div><div class="stat"><strong>최대 id</strong><span>최신 Bio 선택 기준</span></div><div class="stat"><strong>color_group</strong><span>1차 영상 연결 키</span></div><div class="stat"><strong>±30초</strong><span>시간 허용 범위</span></div><div class="stat"><strong>120초</strong><span>Fusion 중복 TTL</span></div></div>

  <section id="summary"><div class="head"><span class="num">01</span><h2>핵심 규칙 한눈에 보기</h2></div>
    <div class="cards">
      <div class="card ok"><h3>매칭 성공</h3><p>유효한 Bio와 CCTV 객체가 같은 color_group이고 timestamp 차이가 30초 이하일 때 Fusion 후보가 됩니다.</p></div>
      <div class="card warn"><h3>Bio-only</h3><p>유효한 Bio가 있지만 영상 조건을 만족하지 않으면 내부 컨텍스트는 만들어져도 현재 최종 분석·POST에서 제외됩니다.</p></div>
      <div class="card no"><h3>CCTV-only</h3><p>단독 컨텍스트 생성 함수는 남아 있지만 현재 주기 실행 경로에서는 호출하지 않으므로 POST되지 않습니다.</p></div>
    </div>
    <div class="note"><strong>결론:</strong> 현재 관제로 전송되는 데이터는 유효한 Bio와 유효한 CCTV 객체가 실제로 연결된 Fusion 결과뿐입니다.</div>
  </section>

  <section id="matching"><div class="head"><span class="num">02</span><h2>매칭 처리 순서</h2></div>
    <div class="flow">
      <div class="step"><span class="circle">1</span><div class="body"><b>Bio 개별 항목 검증</b><p>watch_id, 정수 id, 허용 color_group, UTC timestamp, metrics 객체가 필요합니다.</p></div></div>
      <div class="step"><span class="circle">2</span><div class="body"><b>워치별 최신 Bio 한 건 선택</b><p>같은 watch_id 가운데 가장 큰 id의 레코드만 남깁니다.</p></div></div>
      <div class="step"><span class="circle">3</span><div class="body"><b>CCTV 프레임과 객체 검증</b><p>유효하지 않은 프레임은 프레임 단위, 잘못된 detected object는 객체 단위로 제외합니다.</p></div></div>
      <div class="step"><span class="circle">4</span><div class="body"><b>color_group 후보 검색</b><p>Bio 색상과 동일한 detected object만 후보가 됩니다. null 또는 다른 색상은 매칭하지 않습니다.</p></div></div>
      <div class="step"><span class="circle">5</span><div class="body"><b>timestamp ±30초 검증</b><p>절대 시간차가 30초 이하인 후보 중 가장 가까운 CCTV 프레임을 선택합니다.</p></div></div>
      <div class="step"><span class="circle">6</span><div class="body"><b>WorkerContext 생성</b><p>BioSignal, 선택된 VideoSignal, 원본 DetectedObject, Bio ID와 CCTV 객체 키를 묶습니다.</p></div></div>
      <div class="step"><span class="circle">7</span><div class="body"><b>Fusion 및 중복 필터</b><p>두 모달리티가 모두 있는 컨텍스트만 남기고 이미 처리한 복합 키를 제외합니다.</p></div></div>
    </div>
  </section>

  <section id="latest"><div class="head"><span class="num">03</span><h2>“최신 Bio”의 정확한 의미</h2></div>
    <p class="desc">현재 최신 레코드 선택 기준은 timestamp가 아니라 동일 watch_id 안에서 가장 큰 정수 <span class="mono">id</span>입니다.</p>
<pre><span class="key">watch_red_001</span>
  id=101, timestamp=10:00:02
  id=103, timestamp=10:00:01  <span class="comment">← 선택: id가 가장 큼</span>
  id=102, timestamp=10:00:03

latest_by_watch[watch_id] = max(items, key=<span class="value">id</span>)</pre>
    <div class="note warn"><strong>주의:</strong> 정상 운영에서는 저장 ID가 시간 순서대로 증가한다는 전제가 필요합니다. ID와 측정 시각의 순서가 뒤집혀도 현재 코드는 더 큰 ID를 선택합니다.</div>
  </section>

  <section id="cctv"><div class="head"><span class="num">04</span><h2>CCTV 객체 선택 기준</h2></div>
    <div class="wrap"><table><thead><tr><th>우선순위</th><th>기준</th><th>설명</th></tr></thead><tbody>
      <tr><td>필수</td><td class="mono">object.color_group == bio.color_group</td><td>track_id는 객체 식별용이며 Bio 연결 키가 아닙니다.</td></tr>
      <tr><td>필수</td><td class="mono">abs(bio_ts - cctv_ts) ≤ 30</td><td>정확히 30초는 포함하고 30초 초과는 제외합니다.</td></tr>
      <tr><td>1순위</td><td>시간차 최소</td><td>CCTV id 크기와 관계없이 Bio 시각과 가장 가까운 프레임을 선택합니다.</td></tr>
      <tr><td>2순위</td><td>더 최신 CCTV timestamp</td><td>과거·미래 후보의 시간차가 같으면 더 최신 시각을 선택합니다.</td></tr>
      <tr><td>프레임 내부</td><td>처음 만난 같은 색상 객체</td><td>한 프레임에 같은 color_group 객체가 여러 개면 배열상 먼저 만난 객체가 선택됩니다.</td></tr>
    </tbody></table></div>
<pre>Bio timestamp = 10:00:30, color_group = red

CCTV A = 10:00:20, red  → 차이 10초
CCTV B = 10:00:40, red  → 차이 10초  <span class="comment">← 선택: 동률 중 더 최신</span>
CCTV C = 10:00:29, blue → 색상 불일치
CCTV D = 09:59:59, red  → 차이 31초, 범위 초과</pre>
  </section>

  <section id="area"><div class="head"><span class="num">05</span><h2>최종 area 결정</h2></div>
    <div class="wrap"><table><thead><tr><th>Bio area</th><th>매칭 CCTV area</th><th>최종 area</th><th>이유</th></tr></thead><tbody>
      <tr><td>기계실1</td><td>전기실1</td><td><strong>전기실1</strong></td><td>실제 영상 위치에 가까운 CCTV 값을 우선</td></tr>
      <tr><td>미확인</td><td>기계실2</td><td><strong>기계실2</strong></td><td>CCTV에서 구역 보완</td></tr>
      <tr><td>기계실1</td><td>없음</td><td><strong>기계실1</strong></td><td>매칭 CCTV가 없으면 Bio 사용</td></tr>
      <tr><td>잘못된 값</td><td>잘못된 값</td><td><strong>미확인</strong></td><td>허용 구역으로 정규화 불가</td></tr>
    </tbody></table></div>
  </section>

  <section id="keys"><div class="head"><span class="num">06</span><h2>CCTV 객체 키와 Fusion 키</h2></div>
    <div class="cards">
      <div class="card"><h3>프레임 키</h3><p class="mono">cam_id:timestamp</p><p>CCTV 응답의 id는 null일 수 있어 사용하지 않습니다.</p></div>
      <div class="card"><h3>객체 키</h3><p class="mono">cam_id:timestamp:track_id</p><p>같은 프레임의 여러 작업자를 구분합니다.</p></div>
      <div class="card"><h3>Fusion 키</h3><p class="mono">(worker_id, bio_record_id, cctv_record_key)</p><p>Bio와 CCTV 객체의 정확한 조합을 식별합니다.</p></div>
    </div>
<pre>frame_key  = <span class="value">"CAM_01:2026-07-15T01:15:28.000Z"</span>
object_key = <span class="value">"CAM_01:2026-07-15T01:15:28.000Z:person_01"</span>
fusion_key = (
  <span class="value">"watch_red_001"</span>,
  <span class="value">1234</span>,
  object_key
)</pre>
    <div class="note"><strong>이름상 주의:</strong> <span class="mono">WorkerContext.cctv_record_key</span>에는 프레임 키가 아니라 track_id까지 포함된 CCTV <em>객체 키</em>가 저장됩니다.</div>
  </section>

  <section id="dedup"><div class="head"><span class="num">07</span><h2>A+B 조합 중복 판단</h2></div>
    <p class="desc">A는 Bio 레코드, B/C는 CCTV 객체, D는 새로운 Bio 레코드를 뜻합니다. 한쪽만 달라도 새로운 Fusion입니다.</p>
    <div class="wrap"><table><thead><tr><th>먼저 처리한 조합</th><th>다음 조합</th><th>판정</th><th>설명</th></tr></thead><tbody>
      <tr><td>A + B</td><td>A + B</td><td><span class="pill skip">중복 제외</span></td><td>세 키 구성요소가 모두 동일</td></tr>
      <tr><td>A + B</td><td>A + C</td><td><span class="pill new">새 Fusion</span></td><td>CCTV 객체 키가 다름</td></tr>
      <tr><td>A + B</td><td>D + B</td><td><span class="pill new">새 Fusion</span></td><td>Bio record ID가 다름</td></tr>
      <tr><td>A + B</td><td>D + C</td><td><span class="pill new">새 Fusion</span></td><td>Bio와 CCTV가 모두 다름</td></tr>
      <tr><td>A + B</td><td>다른 워치 A + B</td><td><span class="pill new">새 Fusion</span></td><td>worker_id가 다름</td></tr>
    </tbody></table></div>
    <div class="note"><strong>처리 완료 시점:</strong> 분석에 성공해 POST를 시도한 뒤 키를 기록합니다. POST가 실패해도 같은 결과가 다음 폴링에서 반복 전송되지 않도록 처리 완료로 표시합니다.</div>
  </section>

  <section id="runtime"><div class="head"><span class="num">08</span><h2>TTL과 동시 실행 제어</h2></div>
    <div class="cards">
      <div class="card"><h3>인메모리 저장</h3><p>처리된 Fusion 키는 <span class="mono">_PROCESSED_FUSION_AT</span> 딕셔너리에 저장됩니다. DB나 파일에는 영구 저장하지 않습니다.</p></div>
      <div class="card"><h3>120초 TTL</h3><p><span class="mono">perf_counter()</span> 기준 120초가 지나면 키를 제거합니다. 이후 같은 조합은 다시 처리될 수 있습니다.</p></div>
      <div class="card"><h3>분석 Lock</h3><p><span class="mono">asyncio.Lock()</span>으로 백그라운드 폴링과 수동 run-once가 겹쳐 동일 조합을 동시에 처리하는 것을 막습니다.</p></div>
    </div>
    <div class="wrap"><table><thead><tr><th>상황</th><th>결과</th></tr></thead><tbody>
      <tr><td>동일 프로세스에서 120초 안에 A+B 재등장</td><td>중복 제외</td></tr>
      <tr><td>120초가 지난 뒤 A+B 재등장</td><td>키 만료 후 다시 처리 가능</td></tr>
      <tr><td>FastAPI 재시작</td><td>메모리가 초기화되어 기존 키를 기억하지 못함</td></tr>
      <tr><td>FastAPI 인스턴스가 여러 개</td><td>각 프로세스가 별도 메모리를 사용하므로 인스턴스 간 중복 방지는 안 됨</td></tr>
    </tbody></table></div>
  </section>

  <section id="limits"><div class="head"><span class="num">09</span><h2>현재 구조에서 알아둘 점</h2></div>
    <div class="wrap"><table><thead><tr><th>항목</th><th>현재 동작</th><th>향후 검토 가능 사항</th></tr></thead><tbody>
      <tr><td>최신 Bio 기준</td><td>가장 큰 id</td><td>ID 증가 순서 보장이 없다면 timestamp 보조 검증</td></tr>
      <tr><td>같은 색상 객체 여러 명</td><td>한 프레임에서 먼저 만난 객체 선택</td><td>색상 외 추가 작업자 식별키 또는 공간 추적</td></tr>
      <tr><td>CCTV 객체 재사용</td><td>서로 다른 Bio 컨텍스트가 같은 객체를 선택하는 것을 전역 차단하지 않음</td><td>업무상 한 객체=한 워치 보장이 없다면 사용 객체 집합 적용</td></tr>
      <tr><td>중복 기록 영속성</td><td>프로세스 메모리만 사용</td><td>다중 인스턴스·재시작 대응이 필요하면 Redis/DB 커서</td></tr>
      <tr><td>POST 재시도</td><td>실패해도 처리 완료로 표시하여 자동 재전송 안 함</td><td>유실 방지가 더 중요하면 제한 재시도 또는 outbox</td></tr>
      <tr><td>단독 모달리티</td><td>현재 최종 POST 제외</td><td>정책 변경 시 별도 식별키·전송 계약 필요</td></tr>
    </tbody></table></div>
    <div class="note warn"><strong>문서 목적:</strong> 위 항목은 모두 즉시 수정해야 하는 버그라는 뜻이 아닙니다. 현재 운영 전제와 확장 시 고려할 경계를 구분하기 위한 기록입니다.</div>
  </section>
</main>
<footer>AI CCTV 안전 판단 시스템 · Bio/CCTV 매칭 및 중복 처리 — 2026-07-24 현재 코드 기준</footer>
`;

export default function Report() {
  return <div dangerouslySetInnerHTML={{ __html: documentHtml }} />;
}
