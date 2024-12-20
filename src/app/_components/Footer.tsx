export default function Footer() {
  return (
    <footer className="flex h-32 items-center justify-center bg-primary text-primary-foreground">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
