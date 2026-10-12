import { useState } from "react";
import shopHero from "../../imports/ChatGPT_Image_2026____7____26__________07_51_58.png";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { products } from "../data/products";

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const categories = ["전체", "의류", "가방", "문구", "무기"];

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={shopHero}
            alt="기린대학교 굿즈샵"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">기린대학교 굿즈샵</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            기린대학교의 정체성이 담긴 다양한 굿즈를 만나보세요
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="전체" className="w-full">
            <div className="flex justify-center mb-8 md:mb-12">
              <TabsList className="inline-flex w-auto flex-wrap gap-2 h-auto p-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm md:text-base whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover:shadow-xl transition-shadow group"
                    >
                      <Link to={`/shop/${product.id}`}>
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">{product.nameEn}</p>
                          <p className="text-xl font-bold text-blue-600">
                            {product.price.toLocaleString()}원
                          </p>
                        </CardContent>
                      </Link>
                      <CardFooter className="p-4 pt-0">
                        <Button asChild className="w-full">
                          <Link to={`/shop/${product.id}`}>상세보기</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">해당 카테고리의 상품이 없습니다.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  배송 안내
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span>배송비: 3,000원 (50,000원 이상 구매 시 무료)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span>배송기간: 결제 후 2-3일 이내 배송</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span>교환/환불: 수령 후 7일 이내 가능</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  문의하기
                </h2>
                <p className="text-gray-700 mb-4">
                  상품 관련 문의사항이 있으시면 언제든지 연락주세요.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>이메일: shop@kirin.edu</p>
                  <p>전화: 02-1234-5678 (평일 9:00-18:00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
