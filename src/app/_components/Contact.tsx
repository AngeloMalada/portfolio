import { Button, Input, Textarea } from '@shadcn';
import { Footer } from '@components';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex h-screen snap-start flex-col justify-center bg-muted"
    >
      <div className="container mx-auto flex max-w-2xl flex-grow flex-col justify-center px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <Input type="text" placeholder="Your Name" />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" />
          </div>
          <div>
            <Textarea placeholder="Your Message" rows={4} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
