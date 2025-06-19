
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { DevelopmentProject } from "@/types";

const devProjects: DevelopmentProject[] = [
  {
    id: "1",
    title: "Personal Portfolio Website (This Site)",
    description: "A responsive and interactive portfolio built to showcase my skills and projects. Leverages modern web technologies for a seamless user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Genkit AI"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "website portfolio react",
    codeSnippet: `
// Sample React Component Structure
import React from 'react';

const MyComponent = ({ title }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>This is a sample component.</p>
    </div>
  );
};

export default MyComponent;
    `,
    liveLink: "/",
    repoLink: "https://github.com/yourusername/your-portfolio-repo" // Replace with your actual repo URL
  },
  {
    id: "2",
    title: "Data Processing & ETL Pipeline",
    description: "A Python-based solution for extracting, transforming, and loading data from multiple sources into a centralized data warehouse for analysis.",
    technologies: ["Python", "Pandas", "SQLAlchemy", "Apache Airflow (Conceptual)"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "python script data",
    codeSnippet: `
# Python data transformation snippet
import pandas as pd

def transform_data(df: pd.DataFrame) -> pd.DataFrame:
    # Clean data
    df.dropna(inplace=True)
    df['normalized_value'] = df['raw_value'] / df['raw_value'].max()
    # ... more transformations
    return df
    `,
    repoLink: "https://github.com/yourusername/data-etl-pipeline-example" // Replace if you have a public repo
  },
  {
    id: "3",
    title: "E-commerce Web Application API",
    description: "Backend API for an e-commerce platform, featuring product management, user authentication, order processing, and payment gateway integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "api ecommerce nodejs",
    codeSnippet: `
// Express.js route example
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
    `,
    repoLink: "https://github.com/yourusername/ecommerce-api-example" // Replace if you have a public repo
  },
  {
    id: "4",
    title: "Lead Developer at SamPro Media",
    description: "Leading development efforts at SamPro Media, a dynamic digital agency. Responsible for architecting solutions, managing the development lifecycle, and mentoring team members to deliver high-quality web applications and digital experiences for diverse clients. Overseeing projects from conception to deployment, ensuring technical excellence and alignment with client goals.",
    technologies: ["React", "Next.js", "Node.js", "Project Management Tools", "CI/CD", "Client Collaboration", "Social Media Management"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "web agency leadership",
    codeSnippet: `
// Conceptual: Project Leadership
class ProjectLead {
  constructor(team, client) {
    this.team = team;
    this.client = client;
  }

  defineArchitecture(requirements) {
    // ...
  }

  manageSprint() {
    // ... Agile methodologies
  }

  ensureQuality() {
    // ... Code reviews, testing
  }
}
    `,
    liveLink: "https://sampro-media.vercel.app/",
    repoLink: "Private repository or N/A for role overview"
  },
];

export default function DevelopmentPage() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Development Portfolio</h1>
        <p className="text-xl font-headline text-accent">Building Solutions, Crafting Experiences</p>
      </header>

      <div className="space-y-10">
        {devProjects.map((project) => (
          <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.imageUrl && (
                 <div className="aspect-video relative w-full rounded-md overflow-hidden bg-muted mb-4">
                    <Image
                        src={project.imageUrl}
                        alt={`${project.title} visual representation`}
                        fill
                        className="object-cover"
                        data-ai-hint={project.dataAiHint}
                    />
                 </div>
              )}
              {project.codeSnippet && (
                <div>
                  <h4 className="font-headline text-lg mb-1 text-primary">Code Snippet:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-code">
                    <code>{project.codeSnippet.trim()}</code>
                  </pre>
                </div>
              )}
              <div className="flex space-x-4 mt-4">
                {project.liveLink && (
                  <Button asChild variant="outline">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo / Site
                    </a>
                  </Button>
                )}
                {project.repoLink && (
                  <Button asChild variant="outline">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
