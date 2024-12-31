import { trpc } from '@/server/trpc/server';
import { Header, Hero, Projects, Skills, Contact } from '@components';

const projects = await trpc.payload.getProjects.query();

export default async function Home() {
  return (
    <div className="scrollbar-hide h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
}
