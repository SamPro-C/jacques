
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { PortfolioItem } from "@/types";

const photographyProjects: PortfolioItem[] = [
  {
    id: "1",
    title: "Urban Canvas",
    description: "Exploring the vibrant life and architecture of cityscapes. Each shot aims to capture the unique rhythm and patterns of urban environments.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cityscape architecture",
  },
  {
    id: "2",
    title: "Nature's Whispers",
    description: "A collection of landscapes and wildlife photography, showcasing the serene beauty and raw power of the natural world.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "nature landscape",
  },
  {
    id: "3",
    title: "Portraits of Life",
    description: "Capturing the essence and stories of individuals through compelling portraiture.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "portrait people",
  },
  {
    id: "4",
    title: "Product Perspectives",
    description: "Professional product photography designed to highlight features and appeal to target audiences.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "product commercial",
  },
   {
    id: "5",
    title: "Event Chronicles",
    description: "Documenting the energy and key moments of various events, from corporate gatherings to personal celebrations.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "event photography",
  },
  {
    id: "6",
    title: "Abstract Visions",
    description: "An experimental collection playing with light, form, and texture to create unique abstract photographic art.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "abstract art",
  },
];

export default function PhotographyPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Photography Portfolio</h1>
        <p className="text-xl font-headline text-accent">Capturing Moments, Telling Stories</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photographyProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              {project.imageUrl && (
                <div className="aspect-video relative w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed flex-grow">{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
