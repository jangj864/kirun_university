import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import academicHero from "../../imports/ChatGPT_Image_2026____7____26__________08_54_33.png";

export function AcademicInfo() {
  const academicCalendar = [
    { semester: "2026년 1학기", event: "개강", date: "3월 2일" },
    { semester: "2026년 1학기", event: "수강신청 변경", date: "3월 4일 ~ 3월 6일" },
    { semester: "2026년 1학기", event: "중간고사", date: "4월 20일 ~ 4월 25일" },
    { semester: "2026년 1학기", event: "기말고사", date: "6월 15일 ~ 6월 21일" },
    { semester: "2026년 1학기", event: "종강", date: "6월 22일" },
    { semester: "2026년 2학기", event: "개강", date: "9월 1일" },
    { semester: "2026년 2학기", event: "중간고사", date: "10월 19일 ~ 10월 24일" },
    { semester: "2026년 2학기", event: "기말고사", date: "12월 14일 ~ 12월 20일" },
    { semester: "2026년 2학기", event: "종강", date: "12월 21일" },
  ];

  const gradePolicy = [
    { grade: "A+", range: "95점 이상", gpa: "4.5" },
    { grade: "A0", range: "90점 ~ 94점", gpa: "4.0" },
    { grade: "B+", range: "85점 ~ 89점", gpa: "3.5" },
    { grade: "B0", range: "80점 ~ 84점", gpa: "3.0" },
    { grade: "C+", range: "75점 ~ 79점", gpa: "2.5" },
    { grade: "C0", range: "70점 ~ 74점", gpa: "2.0" },
    { grade: "F", range: "69점 이하", gpa: "0.0" },
  ];

  const tuitionInfo = [
    { college: "인문대학", amount: "3,800,000원", note: "학기당" },
    { college: "사회과학대학", amount: "3,900,000원", note: "학기당" },
    { college: "자연과학대학", amount: "4,200,000원", note: "학기당" },
    { college: "공과대학", amount: "4,500,000원", note: "학기당" },
    { college: "의과대학", amount: "6,800,000원", note: "학기당 (총장 사례금 별도)" },
    { college: "AI융합대학", amount: "5,200,000원", note: "학기당" },
  ];

  return (
    <div className="w-full">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={academicHero}
            alt="기린대학교 학사정보"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">학사정보</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            기린대학교 학사 운영에 관한 주요 정보를 안내합니다
          </p>
        </div>
      </section>

      {/* 학사 일정 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">2026학년도 학사 일정</h2>
          <p className="text-center text-gray-500 mb-12">총장 재구속 시 일정이 변경될 수 있습니다</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">학기</th>
                  <th className="px-6 py-4 text-left font-semibold">일정</th>
                  <th className="px-6 py-4 text-left font-semibold">날짜</th>
                </tr>
              </thead>
              <tbody>
                {academicCalendar.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-6 py-4 text-sm text-blue-600 font-medium">{row.semester}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.event}</td>
                    <td className="px-6 py-4 text-gray-700">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 성적 체계 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">성적 체계</h2>
          <p className="text-center text-gray-500 mb-12">졸업 최소 평점: 1.5 이상 (총장 뇌물 제공 시 면제)</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-center font-semibold">등급</th>
                  <th className="px-6 py-4 text-center font-semibold">점수 범위</th>
                  <th className="px-6 py-4 text-center font-semibold">평점</th>
                </tr>
              </thead>
              <tbody>
                {gradePolicy.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className={`px-6 py-4 text-center font-bold text-lg ${row.grade === "F" ? "text-red-600" : "text-blue-600"}`}>{row.grade}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.range}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.gpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 등록금 안내 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">등록금 안내</h2>
          <p className="text-center text-gray-500 mb-12">미납 시 수강 취소 및 도서관 출입 금지, 기린 먹이 금지</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitionInfo.map((t, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{t.college}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{t.amount}</p>
                <p className="text-sm text-gray-500">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 유의사항 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">학사 유의사항</h2>
          <div className="space-y-3 text-blue-100 text-left">
            {[
              "수업 결석 3회 초과 시 F학점 처리됩니다. 기린이 씹어먹은 출석부는 인정되지 않습니다.",
              "기말고사 기간 중 기린 관련 사유로 인한 결시는 공결로 인정됩니다.",
              "성적 이의신청은 성적 발표 후 3일 이내에 가능합니다. 총장에게 직접 연락하는 행위는 금지됩니다.",
              "졸업 논문 주제로 '총장 비리'를 선택할 경우 지도교수 배정이 거부될 수 있습니다.",
              "등록금 환불은 어떠한 경우에도 불가합니다. (자연재해, 좀비 사태, 총장 구속 포함)",
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
