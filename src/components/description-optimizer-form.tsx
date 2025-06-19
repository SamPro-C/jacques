
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { optimizeDescription, type OptimizeDescriptionInput } from "@/ai/flows/optimize-description";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters long."),
  keywords: z.string().min(3, "Keywords must be at least 3 characters long."),
});

type OptimizerFormValues = z.infer<typeof formSchema>;

export function DescriptionOptimizerForm() {
  const [optimizedDescription, setOptimizedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<OptimizerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      keywords: "",
    },
  });

  async function onSubmit(values: OptimizerFormValues) {
    setIsLoading(true);
    setOptimizedDescription(null);
    try {
      const input: OptimizeDescriptionInput = {
        description: values.description,
        keywords: values.keywords,
      };
      const result = await optimizeDescription(input);
      if (result && result.optimizedDescription) {
        setOptimizedDescription(result.optimizedDescription);
      } else {
        toast({
          title: "Optimization Error",
          description: "The AI could not generate an optimized description. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Optimization failed:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred during optimization.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-xl w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">AI Description Optimizer</CardTitle>
        <CardDescription className="font-body">
          Rewrite your project descriptions to be optimized for specific keywords using AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-headline text-lg">Original Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the current project description here..."
                      rows={5}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-headline text-lg">Keywords</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Next.js, AI, data visualization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing...
                </>
              ) : (
                "Optimize Description"
              )}
            </Button>
          </form>
        </Form>

        {optimizedDescription && (
          <div className="mt-8 pt-6 border-t">
            <Label className="font-headline text-xl text-primary">Optimized Description:</Label>
            <div className="mt-2 p-4 bg-secondary rounded-md whitespace-pre-wrap text-secondary-foreground">
              {optimizedDescription}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
