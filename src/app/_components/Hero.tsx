import { Button } from '@shadcn';

export default function Hero() {
  return (
    <section className="flex h-screen snap-start items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mb-8 text-xl">
          I'm a web developer passionate about creating beautiful and functional
          websites.
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
