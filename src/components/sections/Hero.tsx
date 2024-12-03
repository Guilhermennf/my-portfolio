import { motion } from "framer-motion";
import { Code2, Rocket, Palette } from "lucide-react";
import { ImageCard } from "../ImageCard";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
              alt="Coding Environment"
              className="w-full aspect-[4/3] rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left "
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text bg-gradient-to-r text-blue-400 ">
              Guilherme Nunes
            </h1>
            <p className="text-2xl text-gray-300 mb-12">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais únicas e inovadoras.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 size={32} />,
                  text: "Desenvolvimento Web e Mobile",
                },
                { icon: <Palette size={32} />, text: "Experiência de Usuário" },
                { icon: <Rocket size={32} />, text: "Soluções Inovadoras" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-blue-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.text}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
