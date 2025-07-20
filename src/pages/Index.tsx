import { useState } from "react";
import { Star, TrendingUp, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import ArtistCard from "@/components/ArtistCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-marketplace.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for featured artists
  const featuredArtists = [
    {
      id: "1",
      name: "김아트",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e47db4?w=400&h=400&fit=crop&crop=face",
      specialties: ["캐릭터 디자인", "일러스트", "V튜버"],
      rating: 4.9,
      reviewCount: 127,
      startingPrice: 150000,
      portfolio: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
      ],
      isOnline: true
    },
    {
      id: "2", 
      name: "박리거",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["리깅", "애니메이션", "3D"],
      rating: 4.8,
      reviewCount: 89,
      startingPrice: 300000,
      portfolio: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop"
      ],
      isOnline: false
    },
    {
      id: "3",
      name: "이웹툰",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["웹툰", "만화", "스토리보드"],
      rating: 4.9,
      reviewCount: 203,
      startingPrice: 80000,
      portfolio: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop"
      ],
      isOnline: true
    },
    {
      id: "4",
      name: "최디자인",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["UI/UX", "아이콘", "브랜딩"],
      rating: 4.7,
      reviewCount: 156,
      startingPrice: 120000,
      portfolio: [
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=400&fit=crop"
      ],
      isOnline: true
    }
  ];

  const stats = [
    { icon: Users, label: "등록 작가", value: "1,250+" },
    { icon: Star, label: "완료된 프로젝트", value: "5,890+" },
    { icon: Award, label: "평균 만족도", value: "4.8/5" },
    { icon: TrendingUp, label: "월 성장률", value: "25%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  당신의 꿈을
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    현실로 만드는
                  </span>
                  아트 플랫폼
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                  재능있는 캐릭터 일러스트레이터와 리거들이 당신의 프로젝트를 완성해드립니다.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  작가 찾기 시작하기
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-8">
                  작가로 등록하기
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <stat.icon className="w-5 h-5 text-primary mr-2" />
                    </div>
                    <div className="font-bold text-foreground text-lg">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="아트마켓 히어로"
                className="w-full h-auto rounded-3xl shadow-soft-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">247명의 작가가 온라인</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            추천 작가들
          </h2>
          <p className="text-lg text-muted-foreground">
            검증된 실력을 가진 최고의 아티스트들을 만나보세요
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="soft" size="lg" className="px-8">
            더 많은 작가 보기
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-featured-bg py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              간단한 3단계
            </h2>
            <p className="text-lg text-muted-foreground">
              쉽고 안전한 커미션 프로세스
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "작가 선택",
                description: "포트폴리오와 리뷰를 확인하고 마음에 드는 작가를 선택하세요",
                icon: "🎨"
              },
              {
                step: "02", 
                title: "견적 요청",
                description: "프로젝트 상세 내용을 작성하고 맞춤 견적을 받아보세요",
                icon: "💬"
              },
              {
                step: "03",
                title: "작품 완성",
                description: "안전한 결제 시스템으로 거래하고 만족스러운 결과물을 받으세요",
                icon: "✨"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 rounded-3xl border-0 shadow-card bg-background">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-primary text-primary-foreground p-12 rounded-3xl border-0 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-lg mb-8 opacity-90">
            수천 명의 작가들이 당신의 프로젝트를 기다리고 있습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              무료로 시작하기
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              더 알아보기
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
