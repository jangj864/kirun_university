import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import KirinLogo from "../../imports/레이어1";

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "홈", path: "/" },
    { name: "대학소개", path: "/about" },
    { name: "입학안내", path: "/admission" },
    { name: "학사정보", path: "/academic" },
    { name: "굿즈샵", path: "/shop" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-32 h-10 md:w-48 md:h-12 lg:w-56 lg:h-14 flex-shrink-0">
                <KirinLogo />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/cart" className="ml-4">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>장바구니</span>
                </div>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">기린대학교</h3>
              <p className="text-gray-400 text-sm mb-4">Kirin University | 麒麟大學</p>
              <p className="text-gray-400 text-sm">
                우리는 미래를 선도하는 창의적 인재를 양성합니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">대학소개</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">굿즈샵</Link></li>
                <li><Link to="/admission" className="hover:text-white transition-colors">입학안내</Link></li>
                <li><Link to="/academic" className="hover:text-white transition-colors">학사정보</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Tel: 02-1234-5678</li>
                <li>Email: info@kirin.edu</li>
                <li>서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; 2026 Kirin Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
