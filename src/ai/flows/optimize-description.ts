// src/ai/flows/optimize-description.ts
'use server';
/**
 * @fileOverview A flow that optimizes project descriptions for specific keywords using AI.
 *
 * - optimizeDescription - A function that optimizes the description.
 * - OptimizeDescriptionInput - The input type for the optimizeDescription function.
 * - OptimizeDescriptionOutput - The return type for the optimizeDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeDescriptionInputSchema = z.object({
  description: z.string().describe('The project description to optimize.'),
  keywords: z.string().describe('The keywords to optimize the description for.'),
});
export type OptimizeDescriptionInput = z.infer<typeof OptimizeDescriptionInputSchema>;

const OptimizeDescriptionOutputSchema = z.object({
  optimizedDescription: z.string().describe('The optimized project description.'),
});
export type OptimizeDescriptionOutput = z.infer<typeof OptimizeDescriptionOutputSchema>;

export async function optimizeDescription(input: OptimizeDescriptionInput): Promise<OptimizeDescriptionOutput> {
  return optimizeDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeDescriptionPrompt',
  input: {schema: OptimizeDescriptionInputSchema},
  output: {schema: OptimizeDescriptionOutputSchema},
  prompt: `You are an expert in search engine optimization and marketing.

You will rewrite the project description to optimize it for the given keywords.

Description: {{{description}}}
Keywords: {{{keywords}}}

Optimized Description:`, 
});

const optimizeDescriptionFlow = ai.defineFlow(
  {
    name: 'optimizeDescriptionFlow',
    inputSchema: OptimizeDescriptionInputSchema,
    outputSchema: OptimizeDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
