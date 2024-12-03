import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { FloatingElements } from "./components/FloatingElements";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Background />
      <FloatingElements />
      <Header />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

export default App;
