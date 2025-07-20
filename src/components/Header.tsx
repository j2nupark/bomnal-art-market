import { Search, Menu, User, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0335f132-11ce-4d01-984e-fac502a124b7.png" 
              alt="아트머그 로고"
              className="w-10 h-10 rounded-2xl"
            />
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="작가나 작품을 검색해보세요"
                className="pl-10 bg-background border-border rounded-2xl"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" className="hidden lg:flex">
              작가 찾기
            </Button>
            <Button variant="ghost" className="hidden lg:flex">
              커미션
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="soft">
              로그인
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </nav>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="작가나 작품을 검색해보세요"
              className="pl-10 bg-background border-border rounded-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;