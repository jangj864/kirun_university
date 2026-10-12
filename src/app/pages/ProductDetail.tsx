import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { products } from "../data/products";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h2>
          <Button asChild>
            <Link to="/shop">쇼핑 계속하기</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    if (product.colors && !selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }
    if (product.sizes && !selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }

    const cartItem = {
      product,
      quantity,
      selectedColor,
      selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.product.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    if (confirm("장바구니에 상품이 담겼습니다.\n장바구니로 이동하시겠습니까?")) {
      navigate("/cart");
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/shop")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          상품 목록으로
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 mb-6">{product.nameEn}</p>
              <p className="text-3xl font-bold text-blue-600">
                {product.price.toLocaleString()}원
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {product.colors && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">색상 선택</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className="min-w-[80px]"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">사이즈 선택</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[60px]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">수량</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-lg text-gray-600">
                  총 {totalPrice.toLocaleString()}원
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                장바구니 담기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => {
                  handleAddToCart();
                  navigate("/cart");
                }}
              >
                바로 구매하기
              </Button>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">배송 정보</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 배송비: 3,000원 (50,000원 이상 무료)</li>
                  <li>• 배송기간: 결제 후 2-3일 이내</li>
                  <li>• 교환/환불: 수령 후 7일 이내 가능</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            추천 상품
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/shop/${relatedProduct.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {relatedProduct.price.toLocaleString()}원
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
