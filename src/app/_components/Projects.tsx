'use client';
import { Project } from '@/payload-types';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@shadcn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PaginatedDocs } from 'payload';
import { useEffect, useState } from 'react';

export default function Projects({
  projects,
}: Readonly<{
  projects: PaginatedDocs<Project>;
}>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.docs.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const totalPages = Math.ceil(projects.docs.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section
      id="projects"
      className="flex h-screen snap-start items-center overflow-y-auto bg-muted"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-32 w-full lg:h-48">
                <Image
                  src={
                    'https://media.geeksforgeeks.org/wp-content/uploads/20220325175226/WebDevelopmentProjects2.png'
                  }
                  alt={`${project.title} preview`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? 'default' : 'outline'}
              onClick={() => paginate(index + 1)}
              aria-label={`Page ${index + 1}`}
              aria-current={currentPage === index + 1 ? 'page' : undefined}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
