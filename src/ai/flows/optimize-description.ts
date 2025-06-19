
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
  prompt: `You are an expert in crafting compelling and SEO-friendly project descriptions. Your goal is to rewrite the provided project description to be more engaging, clear, and optimized for the given keywords.

Instructions:
1. Naturally integrate the provided keywords. Avoid keyword stuffing.
2. Ensure the description is professional and suitable for a portfolio.
3. Highlight any key achievements, features, or benefits mentioned in the original description.
4. Aim for a concise yet impactful tone.
5. The output should ONLY be the optimized description text.

Original Description: {{{description}}}
Keywords to optimize for: {{{keywords}}}

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

