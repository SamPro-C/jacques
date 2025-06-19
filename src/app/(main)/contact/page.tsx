
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Send, Phone, Loader2, Github, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactMessage, type SendContactMessageInput } from "@/ai/flows/send-contact-message-flow";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    try {
      const input: SendContactMessageInput = values;
      const result = await sendContactMessage(input);

      if (result && result.acknowledgment) {
        toast({
          title: "Message Sent!",
          description: result.acknowledgment,
        });
        form.reset();
      } else {
        toast({
          title: "Submission Error",
          description: "The AI could not process your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Contact Me</h1>
        <p className="text-xl font-headline text-accent">Let's Connect and Create Something Amazing</p>
      </header>

      <Card className="shadow-xl max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Send a Message</CardTitle>
          <CardDescription className="font-body">
            Have a question, project idea, or just want to say hello? Fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-lg">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-lg">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g. jane@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-lg">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message here..." rows={6} className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
           <div className="text-center pt-4 border-t space-y-4">
            <div>
              <p className="text-muted-foreground font-body mb-2">Alternatively, you can reach me directly:</p>
              <a
                href="mailto:obedjacques7@gmail.com"
                className="inline-flex items-center text-accent hover:underline font-headline mb-2"
              >
                <Mail className="mr-2 h-5 w-5" /> obedjacques7@gmail.com
              </a>
              <div className="flex items-center justify-center text-accent font-headline">
                <Phone className="mr-2 h-5 w-5" />
                <span>0738002694</span>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground font-body mb-2">Connect with me on:</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://linkedin.com/in/yourprofile" // Replace with your actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-headline"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername" // Replace with your actual GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-headline"
                  aria-label="GitHub Profile"
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://instagram.com/yourusername" // Replace with your actual Instagram URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-headline"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="mr-2 h-5 w-5" /> Instagram
                </a>
                <a
                  href="https://twitter.com/yourusername" // Replace with your actual Twitter/X URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-headline"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="mr-2 h-5 w-5" /> Twitter/X
                </a>
                <a
                  href="https://facebook.com/yourprofile" // Replace with your actual Facebook URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-headline"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="mr-2 h-5 w-5" /> Facebook
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 font-body">
              I typically respond to inquiries within 24-48 business hours. Looking forward to connecting!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
