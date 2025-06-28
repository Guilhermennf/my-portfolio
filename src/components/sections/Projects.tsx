import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Package } from "lucide-react";
import { ImageCard } from "../ImageCard";
import BrevBuy from "../../assets/images/lp-brevbuy.png";

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Encomenda Facil",
      description:
        "Aplicativo mobile para gestão de encomendas em condomínios.",
      icon: <Package size={32} />,
      image:
        "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Rastreamento de encomendas em tempo real",
        "Notificações para moradores",
        "Interface intuitiva para porteiros",
        "Sistema de confirmação de recebimento",
      ],
      status: "Completo",
    },
    {
      title: "BrevBuy",
      description:
        "Sistema web inteligente para gestão de produtos comprados e revendidos.",
      icon: <Package size={32} />,
      image: BrevBuy,
      features: [
        "Cadastro manual ou automático de produtos com IA",
        "Extração de dados via print de comprovante de compra",
        "Relatórios financeiros de lucro e investimento",
        "Controle de estoque e status de vendas",
      ],
      status: "Completo",
      link: "https://brevbuy.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Projetos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-md rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors overflow-hidden"
            >
              <ImageCard
                src={project.image}
                alt={project.title}
                className="w-full aspect-video"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.features?.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <Rocket size={16} className="text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "Completo"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  {project.link && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      Saiba mais →
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
