'use server';
/**
 * @fileOverview A Genkit flow to handle contact form submissions.
 *
 * - sendContactMessage - A function that processes the contact message.
 * - SendContactMessageInput - The input type for the sendContactMessage function.
 * - SendContactMessageOutput - The return type for the sendContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendContactMessageInputSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").describe('The name of the person sending the message.'),
  email: z.string().email("Invalid email address.").describe('The email address of the sender.'),
  message: z.string().min(10, "Message must be at least 10 characters long.").describe('The content of the message.'),
});
export type SendContactMessageInput = z.infer<typeof SendContactMessageInputSchema>;

const SendContactMessageOutputSchema = z.object({
  acknowledgment: z.string().describe('An acknowledgment message to the sender.'),
  receivedAt: z.string().describe('Timestamp when the message was processed.'),
});
export type SendContactMessageOutput = z.infer<typeof SendContactMessageOutputSchema>;

export async function sendContactMessage(input: SendContactMessageInput): Promise<SendContactMessageOutput> {
  return sendContactMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sendContactMessagePrompt',
  input: {schema: SendContactMessageInputSchema},
  output: {schema: SendContactMessageOutputSchema},
  prompt: `You are a friendly assistant processing a contact form submission.

The sender's details are:
Name: {{{name}}}
Email: {{{email}}}
Message:
{{{message}}}

Generate a polite acknowledgment message confirming receipt.
Also, provide the current timestamp (ISO format) for when the message was processed.
For example, if the current time is 2024-08-22T10:30:00Z, use that.
Do not make up a fictional service or promise a response time. Simply acknowledge receipt.
`,
});

const sendContactMessageFlow = ai.defineFlow(
  {
    name: 'sendContactMessageFlow',
    inputSchema: SendContactMessageInputSchema,
    outputSchema: SendContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service here.
    // For this portfolio, we'll simulate the processing and generate an acknowledgment.
    const {output} = await prompt(input);
    
    // Augment with server-generated timestamp if AI doesn't provide a reliable one
    // or if you prefer server time.
    if (output && !output.receivedAt) {
        output.receivedAt = new Date().toISOString();
    }
    return output!;
  }
);
