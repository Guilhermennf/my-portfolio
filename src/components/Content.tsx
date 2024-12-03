import { motion } from 'framer-motion';

export const Content = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl bg-black/30 backdrop-blur-md p-8 rounded-lg shadow-xl"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Olá, eu sou <span className="text-blue-400">Seu Nome</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas e inovadoras.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Experiência</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Desenvolvedor Senior na Empresa X (2020-presente)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Tech Lead na Startup Y (2018-2020)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Desenvolvedor Full Stack na Empresa Z (2016-2018)</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Ver Projetos
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};