import { Badge } from '@shadcn';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-screen snap-start items-center bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-lg"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
