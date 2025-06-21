
import { Download, Mail, Phone, Globe, Award, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CVPage = () => {
  return (
    <div className="bg-background text-foreground print:bg-white">
      <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12 print:p-8">
        {/* CV Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 print:mb-6 border-b pb-6 print:pb-4 border-muted">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary font-headline">Jacques Obed</h1>
            <h2 className="text-xl lg:text-2xl font-light text-accent font-headline mt-1">
              Lead Developer | Computer Scientist | Creative Technologist
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 flex-shrink-0 print:hidden">
            <Button asChild>
              <a href="/jacques-obed-cv.pdf" download="Jacques Obed - CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </header>

        {/* Contact Info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-8 print:mb-6 text-sm">
          <a href="mailto:obedjacques7@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span>obedjacques7@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>0738002694</span>
          </div>
          <a href="https://www.obed.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Globe className="h-4 w-4 flex-shrink-0" />
            <span>www.obed.com</span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors col-span-1 sm:col-span-2 md:col-span-1">
             <Linkedin className="h-4 w-4 flex-shrink-0" />
             <span>linkedin.com/in/yourprofile</span>
          </a>
        </section>

        <main className="space-y-10 print:space-y-6">
          {/* Professional Summary */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Professional Summary
            </h3>
            <p className="text-base leading-relaxed">
             A dynamic Computer Scientist and Lead Developer at SamPro Media, where I architect and deliver cutting-edge digital experiences. I drive web solution innovation from initial concept through to flawless deployment, championing technical excellence and creative problem-solving. My robust Computer Science background, fueled by hands-on experience, empowers me to transform complex challenges into elegant, effective solutions. I thrive at the intersection of technology and artistry, bringing a creative eye to photography, videography, and advanced editing, and leveraging data analytics to inform strategy.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="text-xl font-semibold">Lead Developer</h4>
                  <span className="text-sm text-muted-foreground">Present</span>
                </div>
                <a href="https://sampro-media.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-accent font-semibold hover:underline">
                  SamPro Media
                </a>
                <p className="mt-2 text-base leading-relaxed">
                  Leading web development initiatives for a dynamic digital agency. Responsible for the full project lifecycle, from client consultation and solution architecture to development, deployment, and maintenance.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base ml-4">
                  <li>Architected and developed robust, scalable web applications for a diverse client portfolio using modern frameworks like Next.js and React.</li>
                  <li>Managed the complete development lifecycle, ensuring projects are delivered on time, within budget, and to the highest quality standards.</li>
                  <li>Mentored junior developers, fostering a collaborative environment and promoting best practices in coding and project management.</li>
                  <li>Interfaced directly with clients to gather requirements, provide technical consultation, and ensure solutions align with their business goals.</li>
                  <li>Implemented CI/CD pipelines and managed deployments, improving efficiency and reliability.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Key Projects */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Key Projects
            </h3>
            <div>
              <h4 className="text-xl font-semibold">Personal Portfolio Website</h4>
              <p className="text-base leading-relaxed mt-1">
                A comprehensive digital portfolio (this website) designed to showcase a diverse range of technical and creative skills. Developed from the ground up to be a responsive, interactive, and high-performance platform.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-base ml-4">
                <li>Integrated Genkit AI for dynamic features like a contact form processor and a description optimizer.</li>
                <li>Built with a modern, component-based architecture using React and Next.js for server-side rendering and optimal performance.</li>
                <li>Styled with Tailwind CSS and Shadcn UI for a clean, professional, and fully responsive design.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Genkit AI</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Core Competencies
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-accent">Technical Skills</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Full-Stack Web Development", "Software Programming", "Next.js & React", "Node.js", "TypeScript", "Genkit AI", "System Analysis & Design", "Database Management", "Cybersecurity", "Network Configuration", "Power BI"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent">Creative & Media</h4>
                 <div className="flex flex-wrap gap-2 mt-2">
                  {["Photography", "Videography", "Photo & Video Editing (Adobe Suite)", "Visual Storytelling", "Social Media Management"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent">Professional Skills</h4>
                 <div className="flex flex-wrap gap-2 mt-2">
                  {["Team Leadership", "Project Management", "Agile Methodologies", "Client Communication", "Problem-Solving"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Education
            </h3>
            <div>
              <h4 className="text-xl font-semibold">Diploma in Computer Science</h4>
              <p className="text-lg text-muted-foreground">The Co-operative University of Kenya</p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Certifications
            </h3>
            <div className="flex items-center gap-3">
               <Award className="h-5 w-5 flex-shrink-0 text-accent" />
               <p className="text-base">Placeholder for a future certification (e.g., Certified Web Developer)</p>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Languages
            </h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-base">
                <p><strong>English:</strong> Fluent</p>
                <p><strong>Swahili:</strong> Native</p>
             </div>
          </section>

        </main>
        
        <footer className="text-center mt-12 pt-6 border-t border-muted">
          <p className="text-sm text-muted-foreground">References available upon request.</p>
        </footer>

      </div>
    </div>
  );
};

export default CVPage;
