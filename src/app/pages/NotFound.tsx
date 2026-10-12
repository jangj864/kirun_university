import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
}
