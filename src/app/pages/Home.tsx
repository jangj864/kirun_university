import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Users, BookOpen, Award, Globe } from "lucide-react";
import heroLogo from "../../imports/__________________.png";
import heroCampus from "../../imports/ChatGPT_Image_2026____7____26__________07_43_43-1.png";
import classroomPhoto from "../../imports/ChatGPT_Image_2026____7____26__________07_50_51.png";
import shopHero from "../../imports/ChatGPT_Image_2026____7____26__________07_51_58.png";

export function Home() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "글로벌 인재 양성",
      description: "세계를 무대로 활약할 수 있는 창의적이고 진취적인 글로벌 리더를 양성합니다.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "실무중심 교육",
      description: "이론과 실습이 조화된 교육 프로그램으로 실무 능력을 키웁니다.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "우수한 교육 환경",
      description: "최첨단 시설과 우수한 교수진으로 최고의 교육 환경을 제공합니다.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "국제 교류 프로그램",
      description: "해외 유수 대학과의 교류를 통해 글로벌 경험을 쌓을 수 있습니다.",
    },
  ];

  const newsItems = [
    {
      category: "공지사항",
      title: "2026학년도 1학기 수강신청 안내",
      date: "2026.06.01",
    },
    {
      category: "입학안내",
      title: "2027학년도 신입생 모집 요강 발표",
      date: "2026.05.28",
    },
    {
      category: "학사공지",
      title: "하계 계절학기 수강신청 일정 안내",
      date: "2026.05.25",
    },
    {
      category: "행사",
      title: "제45회 기린대학교 개교기념일 행사",
      date: "2026.05.20",
    },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroCampus}
            alt="기린대학교 캠퍼스"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
            <div className="max-w-3xl mx-auto py-8 md:py-0">
              <ImageWithFallback
                src={heroLogo}
                alt="기린대학교"
                className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto mb-4 md:mb-6 lg:mb-8 object-contain mx-auto"
              />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
                미래를 선도하는
                <br />
                창의적 인재 양성
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-100">
                기린대학교는 학생 중심의 교육과 연구로<br className="hidden sm:block" />
                세계를 선도하는 명문 대학입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg w-auto min-w-[200px]">
                  <Link to="/about" className="inline-flex items-center justify-center">
                    대학소개
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg w-auto min-w-[200px]">
                  <Link to="/shop" className="inline-flex items-center justify-center">
                    굿즈샵 둘러보기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              기린대학교의 특징
            </h2>
            <p className="text-lg text-gray-600">
              우리 대학만의 차별화된 교육 시스템을 경험하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                기린대학교에서<br />
                꿈을 이루세요
              </h2>
              <p className="text-lg text-gray-600 mb-6">기린대학교는 2026년 설립 이래 1년 이상 우수한 인재를 배출해온 명문 사립대학교입니다. 학생 중심의 교육 철학과 최첨단 교육 인프라를 바탕으로 글로벌 인재 양성에 힘쓰고 있습니다.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">전국 상위 330위권 교육 경쟁력</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">2개국 3여개 해외 대학과 교류</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">취업률 전국 상위 330위</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/about">
                  자세히 보기 
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={classroomPhoto}
                alt="기린대학교 학생들"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              공지사항
            </h2>
            <Button variant="outline" asChild>
              <a href="#">전체보기</a>
            </Button>
          </div>

          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block p-4 md:p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={shopHero}
            alt="기린대학교 굿즈샵"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            기린대학교 공식 굿즈샵
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            기린대학교의 정체성이 담긴 다양한 굿즈를 만나보세요.
            후드, 토트백, 문구류 등 일상에서 사용할 수 있는 감각적인 디자인의 상품들이 준비되어 있습니다.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Link to="/shop">
              굿즈샵 바로가기 
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
