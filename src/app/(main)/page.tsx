
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, ExternalLink } from "lucide-react";

const skills = [
  "Photography & Videography",
  "Photo & Video Editing",
  "Power BI Report Creation",
  "Software Programming & Development",
  "Web Application Management",
  "Full-Stack Web Development",
  "Database Management",
  "System Analysis & Design",
  "Network Configuration",
  "Cybersecurity Fundamentals",
  "Team Leadership",
  "Project Management",
  "Client Communication",
  "Agile Methodologies",
  "Social Media Management",
];

const featuredProjects = [
  {
    title: "Personal Portfolio Website (This Site)",
    description: "Showcasing skills and projects with Next.js, React, TypeScript, and Genkit AI for a seamless user experience.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "website portfolio react",
    link: "/development",
    linkLabel: "View Development Projects"
  },
  {
    title: "Urban Canvas",
    description: "Exploring the vibrant life and architecture of cityscapes through compelling photography.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cityscape architecture",
    link: "/photography",
    linkLabel: "View Photography"
  }
];

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary mb-2">Jacques Obed</h1>
        <p className="text-2xl font-headline text-accent">Innovating at the Intersection of Technology & Creative Media</p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">About Me</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/genkit-plugin-firebase.appspot.com/o/images%2FrcsL5uV3Y2BvH1mB19T5b%2Fimage_1724262789378_0?alt=media&token=c017eb85-634e-4c9b-864e-8361f8a4b11b"
              alt="Jacques Obed - Professional Photo"
              width={300}
              height={300}
              className="rounded-lg shadow-md object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg leading-relaxed">
              Meet Jacques Obed: a dynamic Computer Scientist and Lead Developer at <Link href="https://sampro-media.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SamPro Media</Link>, where I architect and deliver cutting-edge digital experiences. I drive web solution innovation from initial concept through to flawless deployment, championing technical excellence and creative problem-solving. My robust Computer Science background, fueled by hands-on experience, empowers me to transform complex challenges into elegant, effective solutions.
            </p>
            <p className="text-lg leading-relaxed">
              But my world isn't just code. I thrive at the intersection of technology and artistry, bringing a creative eye to photography, videography, and advanced editing. I'm passionate about weaving compelling visual narratives and harnessing the power of data analytics (like Power BI) to inform strategy and achieve clear results. It's this powerful synergy of analytical rigor and creative flair that defines my work.
            </p>
            <p className="text-lg leading-relaxed">
              This portfolio is your window into my multifaceted capabilities. Dive in and discover how I blend strategic thinking with creative execution to produce work that truly performs.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Core Skills</CardTitle>
          <CardDescription className="font-body">A versatile skill set to bring your vision to life.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-md">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Featured Projects</CardTitle>
          <CardDescription className="font-body">A quick look at some of my work.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative w-full bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.linkLabel}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Get In Touch</CardTitle>
          <CardDescription className="font-body">
            Ready to collaborate or have a project in mind? Let's connect and explore how I can help you achieve your goals.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
