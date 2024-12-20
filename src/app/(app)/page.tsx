import { Header, Hero, Projects, Skills, Contact } from '@components';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });
  const projects = await payload.find({
    collection: 'projects',
  });
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
