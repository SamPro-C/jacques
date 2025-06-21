
import { Download, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 mb-8 print:mb-6 text-sm">
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
            <div>
              <div className="flex justify-between items-baseline flex-wrap">
                <h4 className="text-xl font-semibold">Lead Developer</h4>
                <span className="text-sm text-muted-foreground">Present</span>
              </div>
              <a href="https://sampro-media.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-accent font-semibold hover:underline">
                SamPro Media
              </a>
              <ul className="list-disc list-inside mt-2 space-y-1 text-base ml-4">
                <li>Leading development efforts for a dynamic digital agency, overseeing projects from conception to deployment.</li>
                <li>Architecting robust and scalable solutions, managing the full development lifecycle.</li>
                <li>Mentoring team members to deliver high-quality web applications and digital experiences for diverse clients.</li>
                <li>Ensuring technical excellence and alignment with client goals and project requirements.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-bold text-primary font-headline border-b-2 border-accent pb-2 mb-4">
              Core Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-base">
              {[
                "Full-Stack Web Development", "Software Programming", "System Analysis & Design",
                "Database Management", "Next.js & React", "Node.js", "TypeScript", "Genkit AI",
                "Cybersecurity Fundamentals", "Network Configuration", "Team Leadership", "Project Management",
                "Agile Methodologies", "Photography & Videography", "Photo & Video Editing",
                "Power BI Report Creation", "Social Media Management", "Client Communication"
              ].map(skill => (
                <p key={skill}>{skill}</p>
              ))}
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

        </main>
      </div>
    </div>
  );
};

export default CVPage;
