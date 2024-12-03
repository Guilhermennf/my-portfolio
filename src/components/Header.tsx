import { Github, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Guilherme Nunes</h1>
          <div className="flex gap-6">
            <a
              href="https://github.com/guilhermennf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/guilhermennf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            {/* <a href="mailto:your.email@example.com" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
