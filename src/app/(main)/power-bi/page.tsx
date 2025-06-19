
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/types";

const powerBiProjects: PortfolioItem[] = [
  {
    id: "1",
    title: "Sales Performance Dashboard",
    description: "An interactive dashboard providing real-time insights into sales metrics, KPIs, regional performance, and product trends. Features drill-down capabilities and custom visualizations. (Note: Interactive elements are representational here).",
    imageUrl: "https://placehold.co/800x450.png",
    dataAiHint: "dashboard analytics sales",
  },
  {
    id: "2",
    title: "HR Analytics Report",
    description: "A comprehensive report analyzing key HR metrics such as employee turnover, recruitment effectiveness, and training ROI. Helps in strategic workforce planning.",
    imageUrl: "https://placehold.co/800x450.png",
    dataAiHint: "report business hr",
  },
  {
    id: "3",
    title: "Marketing Campaign Analysis",
    description: "Dashboard for tracking marketing campaign performance across various channels, measuring ROI, customer acquisition cost, and engagement rates.",
    imageUrl: "https://placehold.co/800x450.png",
    dataAiHint: "dashboard marketing campaign",
  },
  {
    id: "4",
    title: "Financial Health Overview",
    description: "A Power BI report summarizing key financial indicators, profitability analysis, and cash flow statements for executive decision-making.",
    imageUrl: "https://placehold.co/800x450.png",
    dataAiHint: "report finance financial",
  },
];

export default function PowerBiPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Power BI Showcase</h1>
        <p className="text-xl font-headline text-accent">Data-Driven Insights & Visualizations</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {powerBiProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
              {project.imageUrl && (
                <div className="aspect-video relative w-full bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain p-2" // object-contain to see full dashboard
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed flex-grow mb-4">{project.description}</CardDescription>
              <Button variant="outline" disabled className="mt-auto w-full md:w-auto self-start">
                View Interactive Report (Demo) <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground mt-2">(Interactive Power BI reports are typically embedded or linked. This is a static representation.)</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
