
import { DescriptionOptimizerForm } from "@/components/description-optimizer-form";

export default function DescriptionOptimizerPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Description Optimizer</h1>
        <p className="text-xl font-headline text-accent">Enhance Your Project Narratives with AI</p>
      </header>
      <DescriptionOptimizerForm />
    </div>
  );
}
