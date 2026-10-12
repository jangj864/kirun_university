import { useState } from "react";
import aboutHero from "../../imports/ChatGPT_Image_2026____7____26__________07_47_26.png";
import presidentPhoto from "../../imports/ChatGPT_Image_2026____7____26__________07_24_05.png";
import campusPhoto from "../../imports/ChatGPT_Image_2026____7____26__________07_42_41.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  Users,
  Building2,
  GraduationCap,
  Globe2,
} from "lucide-react";

export function About() {
  const [selectedCollege, setSelectedCollege] = useState<
    string | null
  >(null);
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "14+",
      label: "재학생",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      number: "12",
      label: "단과대학",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "0%",
      label: "취업률",
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      number: "3+",
      label: "교류대학",
    },
  ];

  const history = [
    { year: "2025년 1월", event: "기린대학교 개교" },
    { year: "2025년 3월", event: "총장 비리사건 발생" },
    { year: "2025년 6월", event: "기린대학교 총장 구속" },
    { year: "2025년 12월", event: "대학원 설립" },
    { year: "2026년 1월", event: "새 총장 취임" },
    { year: "2026년 4월", event: "종합대학교 승격" },
    { year: "2026년 5월", event: "글로벌 캠퍼스 건립" },
    { year: "2026년 6월", event: "AI융합대학 신설" },
    { year: "2026년 7월", event: "AI융합대학 신설" },
    { year: "2026년 8월", event: "국제교류센터 확대 개편" },
  ];

  const collegeDetails: Record<string, string[]> = {
    인문대학: [
      "국어 국문학과",
      "영어 영문학과",
      "기린 언어학과",
      "개소리문학과",
      "나페스 문예창작학과",
      "백룸 고고학과",
      "SCP 기록보존학과",
      "문헌정보학과",
    ],
    사회과학대학: [
      "MBTI 심리 전공학과",
      "전 애인 스토리 심리 분석학과",
      "단톡방 침묵사회학과",
      "읽씹 행동분석학과",
      "댓글 여론 예보학과",
      "바이럴 분노관리학과",
    ],
    자연과학대학: [
      "우주핵 반응디자인학과",
      "초신성 에너지관리학과",
      "은하계 방사선 미학과",
      "암흑물질 커뮤니케이션학과",
      "외계 식물 생태연구학과",
      "달 표면 이끼재배학과",
    ],
    공과대학: [
      "블랙홀 생활환경공학과",
      "웜홀 교통시스템학과",
      "무중력 신체적응공학과",
      "행성궤도 도시계획학과",
      "우주선 실내건축학과",
      "외계금속 재료공학과",
    ],
    경영대학: [
      "은하 프랜차이즈 경영학과",
      "최후의 편의점 운영관리학과",
      "종말 대비 창업학과",
      "외계고객 CS전공학과",
      "블랙홀 투자리스크관리학과",
      "반려행성 브랜드마케팅학과",
    ],
    법과대학: [
      "좀비 시민권 법학과",
      "외계문명 조약법학과",
      "타임루프 판례연구학과",
      "유령 임대차보호법학과",
      "도시전설 증거법학과",
      "평행세계 저작권법학과",
    ],
    의과대학: [
      "좀비 감염 임상의학과",
      "무중력 신체적응의학과",
      "냉동수면 회복의학과",
      "외계기생체 진단학과",
      "돌연변이 피부재생학과",
      "우주방사선 응급의학과",
    ],
    예술대학: [
      "외계 식물 조경디자인학과",
      "기린 발톱 네일아트 학과",
      "달 표면 패션텍스타일학과",
      "플라즈마 조명연출학과",
      "블랙홀 무대미술학과",
      "알림음 작곡 및 진동연출학과",
    ],
    사범대학: [
      "좀비 아포칼립스 생존교육학과",
      "외계문명 예절교육학과",
      "타임루프 역사교육학과",
      "괴담 안전교육학과",
      "AI 교사윤리교육학과",
      "평행세계 진로상담학과",
    ],
    국제학부: [
      "메이드 카페 관광기획학과",
      "제3은하 관광콘텐츠학과",
      "성간 폐허 고고학과",
      "외계문명 예절학과",
      "평행세계 교환학생학과",
      "이세계 축제기획학과",
    ],
    AI융합대학: [
      "전문 숏폼 시청학과",
      "알고리즘 운명예측학과",
      "AI 사주해석공학과",
      "로봇 반항심 상담학과",
      "딥러닝 꿈 해몽학과",
      "인공지능 전생추적학과",
    ],
    미래혁신대학: [
      "좀비 아포칼립스 생존연구학과",
      "인공태양 안전관리학과",
      "반물질 조리과학과",
      "미래 폐허 재개발학과",
      "반려로봇 장례기획학과",
      "우주선 1인 가구 생활디자인학과",
    ],
  };

  const colleges = Object.keys(collegeDetails);

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={aboutHero}
            alt="기린대학교 건물"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">대학소개</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">미래를 선도하는 기린대학교를 소개합니다</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              총장 인사말
            </h2>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-full md:w-64">
                <ImageWithFallback
                  src={presidentPhoto}
                  alt="기린대학교 총장 김기린"
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <p className="text-center mt-3 text-gray-600 text-sm font-medium">기린대학교 총장 김기린</p>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-6"></p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6"></p>
                <p className="text-lg text-gray-700 leading-relaxed text-left">
                  기린대학교는 2026년 개교 이래 &apos;창의와 혁신&apos;을 교육이념으로 삼아 우수한 인재를 양성하려 했으나,<br />
                  급변하는 시대를 발맞춰 가지 못해 도태되어버리고 말았습니다.
                </p>
                <p className="text-lg text- text-leftgray-700 leading-relaxed mt-4 text-left">극심한 재정난 속에서 우리 대학은 교수 중심의 교육과 연구를 통해,<br />학생들로부터 등록금을 착취하고자 합니다.가진거 다 내놓고 학위나 받아가세요.<br />이는 제가 세계를 선도하는 명문 대학 총장이라는 명성을 떨칠 수 있는 길로<br />성장해 나갈 수 있는 원동력이 될 것입니다.</p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 text-left">
                  앞으로도 기린대학교는 혁신적인 교육 프로그램과 최첨단 연구 시설보다는<br />
                  기회주의적이며 이기적인 총장의 욕심을 바탕으로<br />
                  사회가 요구를 거부하며, 창의적이고 글로벌한 인재를 동경하며 바라보는 데에 최선을 다하겠습니다.
                </p>
                <p className="text-right mt-8 text-gray-900 font-semibold">기린대학교 총장 김기린</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              기린대학교 주요 현황
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              연혁
            </h2>
            <p className="text-lg text-gray-600">
              기린대학교의 발자취를 소개합니다
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -ml-px"></div>

              {history.map((item, index) => {
                const isEven = index % 2 === 0;
                const content = (
                  <div className={isEven ? "text-right" : "text-left"}>
                    <span className="inline-block px-3 py-1.5 bg-blue-600 text-white font-bold rounded-lg mb-2 text-sm md:text-base">
                      {item.year}
                    </span>
                    <p className="text-sm md:text-lg text-gray-900 font-semibold">
                      {item.event}
                    </p>
                  </div>
                );
                return (
                  <div key={index} className="relative mb-8 md:mb-12">
                    <div className="flex items-center">
                      <div className="flex-1 pr-4 md:pr-8">
                        {isEven && content}
                      </div>

                      <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>

                      <div className="flex-1 pl-4 md:pl-8">
                        {!isEven && content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              단과대학
            </h2>
            <p className="text-lg text-gray-600">
              12개 단과대학에서 다양한 전공을 선택할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {colleges.map((college, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCollege(college)}
              >
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-900">
                    {college}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog
            open={selectedCollege !== null}
            onOpenChange={() => setSelectedCollege(null)}
          >
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-600">
                  {selectedCollege}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedCollege} 학과 목록
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4" id="college-description">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  학과 목록
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedCollege &&
                    collegeDetails[selectedCollege]?.map(
                      (dept, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <p className="text-gray-800">
                            {dept}
                          </p>
                        </div>
                      ),
                    )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={campusPhoto}
                alt="기린대학교 캠퍼스"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                캠퍼스 안내
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                기린대학교는 대구에 위치한 메인 캠퍼스와
                미국 브롱스에 위치한 글로벌 캠퍼스로 구성되어
                있습니다.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    메인 캠퍼스
                  </h3>
                  <p className="text-gray-700">
                    대구광역시 기린구 장목로 1, 기린대학교 본관
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    글로벌 캠퍼스
                  </h3>
                  <p className="text-gray-700">
                    1 Kirin Plaza, Giraffe Heights, Bronx, NY 10451
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}