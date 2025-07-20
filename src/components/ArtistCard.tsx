import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    avatar: string;
    specialties: string[];
    rating: number;
    reviewCount: number;
    startingPrice: number;
    portfolio: string[];
    isOnline: boolean;
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-3xl border-0 shadow-card hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 bg-artist-card">
      {/* Portfolio Preview */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={artist.portfolio[0]} 
          alt={`${artist.name}의 작품`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm rounded-full hover:bg-background">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        {artist.isOnline && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            온라인
          </div>
        )}
      </div>

      {/* Artist Info */}
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <img 
              src={artist.avatar} 
              alt={artist.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {artist.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{artist.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {artist.rating} ({artist.reviewCount})
              </span>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.specialties.slice(0, 2).map((specialty, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
          {artist.specialties.length > 2 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{artist.specialties.length - 2}
            </span>
          )}
        </div>

        {/* Pricing and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">시작가</span>
            <p className="font-bold text-foreground">{artist.startingPrice.toLocaleString()}원~</p>
          </div>
          <Button variant="soft" size="sm">
            프로필 보기
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ArtistCard;