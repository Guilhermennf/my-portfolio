import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const skills = [
        {
            icon: <Code2 size={32} />,
            title: "Development",
            description:
                "Specialized in React, Node.js, Next.js and TypeScript",
        },
        {
            icon: <Palette size={32} />,
            title: "Design",
            description: "UI/UX focused on intuitive experiences",
        },
        {
            icon: <Rocket size={32} />,
            title: "Innovation",
            description: "Always seeking new technologies and solutions",
        },
    ];

    return (
        <section
            id="about"
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
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-black/30 backdrop-blur-md p-6 rounded-lg"
                        >
                            <div className="text-blue-400 mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
