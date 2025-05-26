// components/StoryCarousel.tsx
import React from "react";
import { StoryPlayCard } from "./StoryPlayCard";

// Helper to optimize image URLs
function optimizeImageUrl(
  url: string,
  width = 300,
  height = 360,
  quality = 70
): string {
  return `${url}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

// Static hardcoded stories
const stories = [
  {
    id: "expedition-to-africa",
    title: "Expedition to Africa",
    imageUrl: optimizeImageUrl(
      "https://images.unsplash.com/photo-1577971132997-c10be9372519"
    ),
  },
  {
    id: "the-global-backyard",
    title: "The Global Backyard",
    imageUrl: optimizeImageUrl(
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    ),
  },
];

interface StoriesProps {
  className?: string;
}

export const Stories: React.FC<StoriesProps> = ({ className }) => {
  return (
    <div className={`${className ?? ""}`}>
      {stories.map((story) => (
        <StoryPlayCard
          key={story.id}
          title={story.title}
          imageUrl={story.imageUrl}
        />
      ))}
    </div>
  );
};
