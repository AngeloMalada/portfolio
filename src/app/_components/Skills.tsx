import { Badge } from '@shadcn';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { trpc } from '@/server/trpc/server';

// const skills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Next.js',
//   'Node.js',
//   'Tailwind CSS',
// ];

const skills = await trpc.payload.getSkills.query();

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-screen snap-start items-center bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill.id}
              variant="secondary"
              className="px-4 py-2 text-lg"
            >
              {skill.title}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
