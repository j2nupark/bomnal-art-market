import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "전체", icon: "🎨" },
  { id: "character", name: "캐릭터 디자인", icon: "👤" },
  { id: "rigging", name: "리깅", icon: "🎭" },
  { id: "illustration", name: "일러스트", icon: "🖼️" },
  { id: "animation", name: "애니메이션", icon: "🎬" },
  { id: "vtuber", name: "V튜버", icon: "📹" },
  { id: "webtoon", name: "웹툰", icon: "📚" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-featured-bg rounded-3xl p-6 mb-8">
      <h2 className="text-xl font-bold text-foreground mb-4">카테고리</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            onClick={() => onCategoryChange(category.id)}
            className="rounded-2xl"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;