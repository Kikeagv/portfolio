export function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-sm text-neutral-600">
            &copy; 2025 Enrique García. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/enrique-agv/"
              className="text-sm text-neutral-600 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/enrique_garciav"
              className="text-sm text-neutral-600 transition-colors hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Kikeagv"
              className="text-sm text-neutral-600 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}