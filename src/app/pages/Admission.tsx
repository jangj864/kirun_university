import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import admissionHero from "../../imports/ChatGPT_Image_2026____7____26__________08_53_02.png";

export function Admission() {
  const schedule = [
    { period: "원서접수", date: "2026년 9월 1일 ~ 9월 15일", note: "온라인 접수만 가능" },
    { period: "서류 제출", date: "2026년 9월 16일 ~ 9월 20일", note: "우편 또는 방문 제출" },
    { period: "1차 합격 발표", date: "2026년 10월 10일", note: "홈페이지 공고" },
    { period: "면접 고사", date: "2026년 10월 20일 ~ 10월 21일", note: "캠퍼스 내 각 단과대학" },
    { period: "최종 합격 발표", date: "2026년 11월 1일", note: "개별 문자 및 홈페이지 공고" },
    { period: "등록금 납부", date: "2026년 11월 10일 ~ 11월 20일", note: "전액 납부 필수 (환불 불가)" },
  ];

  const majors = [
    { college: "인문대학", quota: 240, note: "국어국문, 영문, 기린언어학과 등" },
    { college: "사회과학대학", quota: 200, note: "MBTI심리, 단톡방침묵사회학과 등" },
    { college: "자연과학대학", quota: 180, note: "심야과자봉지물리학과 등" },
    { college: "공과대학", quota: 220, note: "새벽감성공학과 등" },
    { college: "의과대학", quota: 60, note: "좀비감염임상의학과 등" },
    { college: "AI융합대학", quota: 150, note: "전문숏폼시청학과 등" },
  ];

  return (
    <div className="w-full">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={admissionHero}
            alt="기린대학교 입학안내"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">입학안내</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            기린대학교 입학을 위한 모든 정보를 안내해 드립니다
          </p>
        </div>
      </section>

      {/* 전형 일정 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">2027학년도 입시 일정</h2>
          <p className="text-center text-gray-500 mb-12">일정은 학교 사정에 따라 변경될 수 있습니다 (특히 총장 구속 시)</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">전형 단계</th>
                  <th className="px-6 py-4 text-left font-semibold">일정</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">비고</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.period}</td>
                    <td className="px-6 py-4 text-gray-700">{row.date}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 모집 정원 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">단과대학별 모집 정원</h2>
          <p className="text-center text-gray-500 mb-12">총 모집 인원: 1,050명 (작년 대비 50% 감소)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-blue-600 mb-1">{m.college}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{m.quota}명</p>
                <p className="text-sm text-gray-500">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 자격 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">지원 자격</h2>
          <div className="space-y-4">
            {[
              "고등학교 졸업(예정)자 또는 동등 학력 인정자",
              "기린에 대한 최소한의 친밀감 또는 호기심 보유자",
              "등록금 납부 능력이 있거나 대출 의향이 있는 자",
              "총장 비리에 대해 묻지 않겠다는 각서 제출자",
              "학교 굿즈 구매 의향이 있는 자 (우대 사항)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
