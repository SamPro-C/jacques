
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { EditingItem } from "@/types";

const editingProjects: EditingItem[] = [
  {
    id: "1",
    title: "Portrait Retouching: Enhanced Realism",
    description: "Subtle yet impactful portrait retouching. Focus on skin smoothing, color correction, and enhancing key features while maintaining a natural look. Techniques include frequency separation and dodge & burn.",
    beforeImageUrl: "https://placehold.co/400x600.png",
    afterImageUrl: "https://placehold.co/400x600.png",
    beforeDataAiHint: "portrait unedited",
    afterDataAiHint: "portrait edited",
  },
  {
    id: "2",
    title: "Landscape Color Grading: Dramatic Skies",
    description: "Transforming a standard landscape photo into a dramatic scene through advanced color grading, sky replacement (if applicable), and light manipulation. Goal is to evoke a specific mood.",
    beforeImageUrl: "https://placehold.co/600x400.png",
    afterImageUrl: "https://placehold.co/600x400.png",
    beforeDataAiHint: "landscape day",
    afterDataAiHint: "landscape sunset dramatic",
  },
  {
    id: "3",
    title: "Video Editing: Cinematic Short Sequence",
    description: "A sequence from a short film demonstrating pacing, color grading, sound design integration, and visual effects. Focus on narrative flow and emotional impact. (Visuals below are illustrative of photo aspects of similar projects).",
    beforeImageUrl: "https://placehold.co/600x338.png", // represent a 'raw footage' still
    afterImageUrl: "https://placehold.co/600x338.png", // represent a 'final grade' still
    beforeDataAiHint: "video footage raw",
    afterDataAiHint: "video footage graded",
  },
  {
    id: "4",
    title: "Product Photo Compositing: Creative Ad",
    description: "Combining multiple product shots and stock imagery to create a compelling advertisement visual. Involves complex masking, color matching, and shadow creation.",
    beforeImageUrl: "https://placehold.co/500x500.png", // could be a simple product shot
    afterImageUrl: "https://placehold.co/500x500.png", // could be the composed ad
    beforeDataAiHint: "product isolated",
    afterDataAiHint: "product advertisement",
  },
];

export default function EditingPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Editing Showcase</h1>
        <p className="text-xl font-headline text-accent">Transforming Visions into Reality</p>
      </header>

      <div className="space-y-10">
        {editingProjects.map((project) => (
          <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="font-headline text-lg text-center mb-2 text-muted-foreground">Before</h3>
                  <div className="aspect-[4/3] relative w-full rounded-md overflow-hidden border-2 border-muted">
                    <Image
                      src={project.beforeImageUrl}
                      alt={`${project.title} - Before`}
                      fill
                      className="object-cover"
                      data-ai-hint={project.beforeDataAiHint}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-center mb-2 text-muted-foreground">After</h3>
                   <div className="aspect-[4/3] relative w-full rounded-md overflow-hidden border-2 border-accent">
                    <Image
                      src={project.afterImageUrl}
                      alt={`${project.title} - After`}
                      fill
                      className="object-cover"
                      data-ai-hint={project.afterDataAiHint}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
