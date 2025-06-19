
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";

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
];

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary mb-2">Jacques Obed</h1>
        <p className="text-2xl font-headline text-accent">Computer Scientist & Creative Professional</p>
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
              Welcome to my portfolio! I am Jacques Obed, a passionate and versatile Computer Scientist with a strong foundation in software development, data analysis, and web technologies. I currently serve as the Lead Developer at <Link href="https://sampro-media.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SamPro Media</Link>, where I drive innovation and lead development projects. My academic background in Computer Science has equipped me with robust problem-solving skills and a keen eye for detail.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond the realm of code and algorithms, I am an avid creative, specializing in photography, videography, and both photo and video editing. I thrive on bringing ideas to life, whether through developing innovative applications, crafting compelling visual narratives, or deriving actionable insights from data using tools like Power BI.
            </p>
            <p className="text-lg leading-relaxed">
              This portfolio showcases a blend of my technical expertise and creative endeavors. Explore my projects to see how I merge analytical thinking with artistic expression.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Core Skills</CardTitle>
          <CardDescription className="font-body">A snapshot of my key competencies.</CardDescription>
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
          <CardTitle className="font-headline text-3xl text-primary">Get In Touch</CardTitle>
          <CardDescription className="font-body">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
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
