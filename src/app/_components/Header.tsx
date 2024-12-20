import Link from 'next/link';
import { Button } from '@shadcn';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          Cvele + AI = &lt;3
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#skills">Skills</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
