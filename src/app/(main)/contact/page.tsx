
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-headline text-lg">Full Name</Label>
              <Input id="name" placeholder="e.g. Jane Doe" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-headline text-lg">Email Address</Label>
              <Input id="email" placeholder="e.g. jane@example.com" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-headline text-lg">Message</Label>
            <Textarea id="message" placeholder="Your message here..." rows={6} className="resize-none"/>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled> {/* Button is disabled as form is not functional yet */}
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
           <div className="text-center pt-4 border-t">
            <p className="text-muted-foreground font-body mb-2">Alternatively, you can reach me directly:</p>
            <a
              href="mailto:jacques.obed@example.com" // Replace with actual email
              className="inline-flex items-center text-accent hover:underline font-headline"
            >
              <Mail className="mr-2 h-5 w-5" /> jacques.obed@example.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
