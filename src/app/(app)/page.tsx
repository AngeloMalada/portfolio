import { trpc } from '@/server/trpc/server';
import { Button } from '@/shadcn-components';
import { Header, Hero, Projects, Skills, Contact } from '@components';
import { Mail } from 'lucide-react';

const projects = await trpc.payload.getProjects.query();

export default async function Home() {
  //WIP PLACEHOLDER
  const handleContact = () => {
    window.location.href = 'mailto:contact@angelomalada.dev';
  };
  return (
    <div className="scrollbar-hide h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Contact /> */}

      {/* WIP PLACEHOLDER */}
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 animate-spin text-primary"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-bold">Work in Progress</h1>
        <p className="mb-8 text-xl">
          We're working hard to bring you something amazing. Please check back
          soon!
        </p>
        <div className="flex justify-center">
          <Button onClick={handleContact} className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
