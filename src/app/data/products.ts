import toteBagImg from "../../imports/ChatGPT_Image_2026____7____26__________07_48_09-1.png";
import varsityJacketImg from "../../imports/ChatGPT_Image_2026____7____26__________07_53_59.png";
import classicHoodieImg from "../../imports/ChatGPT_Image_2026____7____26__________08_09_08.png";
import classicTshirtImg from "../../imports/ChatGPT_Image_2026____7____26__________08_04_02.png";
import logoTshirtImg from "../../imports/ChatGPT_Image_2026____7____26__________08_16_21.png";
import notebookImg from "../../imports/ChatGPT_Image_2026____7____26__________08_31_00.png";
import penImg from "../../imports/ChatGPT_Image_2026____7____26__________08_31_38.png";
import pencilSetImg from "../../imports/ChatGPT_Image_2026____7____26__________08_31_45.png";
import magicStaffImg from "../../imports/ChatGPT_Image_2026____7____26__________08_45_34.png";
import swordImg from "../../imports/ChatGPT_Image_2026____7____26__________08_44_25.png";
import shieldImg from "../../imports/ChatGPT_Image_2026____7____26__________08_43_38.png";
import ballcapImg from "../../imports/ChatGPT_Image_2026____7____26__________08_35_49.png";
import logoHoodieImg from "../../imports/ChatGPT_Image_2026____7____26__________08_09_03.png";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  category: string;
  image: string;
  description: string;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "hoodie-navy",
    name: "기린대 2026 과잠",
    nameEn: "Kirin 2026 Varsity Jacket",
    price: 138000,
    category: "의류",
    image: varsityJacketImg,
    description: "기린대학교 로고가 새겨진 프리미엄 후드티입니다. 편안한 착용감과 고급스러운 디자인이 특징입니다.",
    colors: ["네이비", "화이트", "그레이"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "tote-bag-beige",
    name: "기린대 에코백",
    nameEn: "Kirin Eco Tote Bag",
    price: 25000,
    category: "가방",
    image: toteBagImg,
    description: "친환경 캔버스 소재로 제작된 에코백입니다. 일상생활과 캠퍼스 생활에 유용하게 사용할 수 있습니다.",
    colors: ["베이지", "블랙", "네이비"],
  },
  {
    id: "notebook-blue",
    name: "기린대 공책",
    nameEn: "Kirin Notebook",
    price: 4500,
    category: "문구",
    image: notebookImg,
    description: "기린대학교 로고가 각인된 공책입니다. 강의 노트나 메모용으로 활용하기 좋습니다.",
    colors: ["블루", "그린", "핑크"],
  },
  {
    id: "tshirt-logo",
    name: "기린대 로고 티셔츠",
    nameEn: "Kirin Logo T-Shirt",
    price: 32000,
    category: "의류",
    image: logoTshirtImg,
    description: "기린대학교 문장이 새겨진 클래식 티셔츠입니다. 캠퍼스 라이프의 필수 아이템입니다.",
    colors: ["네이비", "화이트", "블랙"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "hoodie-black",
    name: "기린대 클래식 후드",
    nameEn: "Kirin Classic Hoodie",
    price: 62000,
    category: "의류",
    image: classicHoodieImg,
    description: "트렌디한 스트릿 스타일의 후드티입니다. 캠퍼스는 물론 일상복으로도 손색없습니다.",
    colors: ["블랙", "그레이"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "notebook-ivory",
    name: "기린대 볼펜",
    nameEn: "Kirin Ballpoint Pen",
    price: 2500,
    category: "문구",
    image: penImg,
    description: "기린대학교 로고가 새겨진 볼펜입니다. 부드러운 필기감이 특징입니다.",
    colors: ["블랙", "블루", "레드"],
  },
  {
    id: "hoodie-gray",
    name: "기린대 클래식 티셔츠",
    nameEn: "Kirin Classic T-Shirt",
    price: 32000,
    category: "의류",
    image: classicTshirtImg,
    description: "여유로운 오버핏 실루엣의 후드티입니다. 편안함과 스타일을 동시에 잡았습니다.",
    colors: ["그레이", "베이지"],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: "notebook-set",
    name: "기린대 연필세트",
    nameEn: "Kirin Pencil Set",
    price: 6000,
    category: "문구",
    image: pencilSetImg,
    description: "기린대학교 로고가 새겨진 연필 6자루 세트입니다. 필기와 드로잉 모두 활용 가능합니다.",
  },
  {
    id: "ballcap",
    name: "기린대 볼캡",
    nameEn: "Kirin Ball Cap",
    price: 25000,
    category: "의류",
    image: ballcapImg,
    description: "기린대학교 로고가 자수로 새겨진 볼캡입니다. 캐주얼한 스타일에 잘 어울립니다.",
    colors: ["네이비", "블랙", "화이트"],
  },
  {
    id: "hoodie-yellow",
    name: "기린대 로고 후드",
    nameEn: "Kirin Logo Hoodie",
    price: 62000,
    category: "의류",
    image: logoHoodieImg,
    description: "생동감 있는 컬러가 돋보이는 후드티입니다. 개성있는 스타일을 연출할 수 있습니다.",
    colors: ["옐로우", "그린", "레드"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "weapon-sword",
    name: "기린대 의식용 검",
    nameEn: "Kirin Ceremonial Sword",
    price: 320000,
    category: "무기",
    image: swordImg,
    description: "기린대학교 졸업식 및 공식 행사에서 사용되는 의식용 검입니다. 교장 재량으로 실전 투입 가능합니다.",
    colors: ["실버", "골드"],
  },
  {
    id: "weapon-shield",
    name: "기린대 방패",
    nameEn: "Kirin Shield",
    price: 280000,
    category: "무기",
    image: shieldImg,
    description: "기린대학교 문장이 새겨진 방패입니다. 등록금 고지서로부터 심리적 방어력을 제공합니다.",
    colors: ["실버", "브론즈"],
  },
  {
    id: "weapon-staff",
    name: "기린대 마법 지팡이",
    nameEn: "Kirin Magic Staff",
    price: 550000,
    category: "무기",
    image: magicStaffImg,
    description: "총장이 직접 사용하던 황금 지팡이 리플리카입니다. 구속 이후 창고에서 발견된 물품입니다.",
    colors: ["골드"],
  },
];
