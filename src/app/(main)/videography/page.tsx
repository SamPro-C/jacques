
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { VideoItem } from "@/types"; // Assuming VideoItem extends PortfolioItem with videoUrl

const videographyProjects: VideoItem[] = [
  {
    id: "1",
    title: "Short Film: The Quest",
    description: "A narrative short film exploring themes of adventure and discovery. Showcases storytelling, cinematography, and editing techniques.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video URL
    dataAiHint: "film cinema",
  },
  {
    id: "2",
    title: "Commercial Spot: Tech Innovate",
    description: "A dynamic promotional video created for a technology startup, highlighting their innovative product and brand identity.",
    videoUrl: "https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG", // Placeholder playlist
    dataAiHint: "advertisement marketing",
  },
  {
    id: "3",
    title: "Event Recap: Music Festival Highlights",
    description: "Capturing the vibrant energy and memorable moments of a local music festival. Features fast-paced editing and engaging visuals.",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso", // Placeholder video URL
    dataAiHint: "event music",
  },
  {
    id: "4",
    title: "Documentary Short: Artisan's Craft",
    description: "A short documentary piece offering a glimpse into the meticulous process of a local artisan. Focuses on visual storytelling and interviews.",
    videoUrl: "https://www.youtube.com/embed/U_qZtL332uY", // Placeholder video URL
    dataAiHint: "documentary craft",
  },
];

export default function VideographyPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Videography Portfolio</h1>
        <p className="text-xl font-headline text-accent">Visual Storytelling in Motion</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videographyProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                {project.videoUrl ? (
                   <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-muted-foreground">Video preview unavailable</p>
                )}
              </div>
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
