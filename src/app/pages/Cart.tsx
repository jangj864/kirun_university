import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

interface CartItem {
  product: {
    id: string;
    name: string;
    nameEn: string;
    price: number;
    image: string;
    category: string;
  };
  quantity: number;
  selectedColor?: string | null;
  selectedSize?: string | null;
}

export function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(cart);
    };
    loadCart();

    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index: number, delta: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
    updateCart(updatedCart);
  };

  const handleRemoveItem = (index: number) => {
    if (confirm("이 상품을 장바구니에서 삭제하시겠습니까?")) {
      const updatedCart = cartItems.filter((_, i) => i !== index);
      updateCart(updatedCart);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 50000 ? 0 : 3000;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("장바구니가 비어있습니다.");
      return;
    }
    alert(
      "주문이 완료되었습니다!\n\n실제 결제 시스템은 연동되지 않았습니다.\n이는 데모 웹사이트입니다."
    );
    updateCart([]);
    navigate("/shop");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            장바구니가 비어있습니다
          </h2>
          <p className="text-gray-600 mb-8">
            기린대학교의 다양한 굿즈를 둘러보세요
          </p>
          <Button asChild size="lg">
            <Link to="/shop">쇼핑 계속하기</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          장바구니
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/shop/${item.product.id}`}
                      className="flex-shrink-0"
                    >
                      <div className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link to={`/shop/${item.product.id}`}>
                          <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors mb-1">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.product.nameEn}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          {item.selectedColor && (
                            <span className="px-2 py-1 bg-gray-100 rounded">
                              색상: {item.selectedColor}
                            </span>
                          )}
                          {item.selectedSize && (
                            <span className="px-2 py-1 bg-gray-100 rounded">
                              사이즈: {item.selectedSize}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(index, -1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-4 py-1 font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(index, 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="text-lg font-bold text-blue-600">
                            {(item.product.price * item.quantity).toLocaleString()}원
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>주문 요약</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>상품 금액</span>
                  <span>{subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>배송비</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-green-600 font-semibold">무료</span>
                    ) : (
                      `${shippingFee.toLocaleString()}원`
                    )}
                  </span>
                </div>
                {subtotal < 50000 && (
                  <p className="text-sm text-gray-500">
                    {(50000 - subtotal).toLocaleString()}원 더 구매하시면 무료배송!
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>총 결제금액</span>
                  <span className="text-blue-600">{total.toLocaleString()}원</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  주문하기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link to="/shop">쇼핑 계속하기</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
