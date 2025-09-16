import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, Award } from "lucide-react";
import { ImageCard } from "../ImageCard";
import { GradientSection } from "../GradientSection";

export const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const experiences = [
        {
            period: "April 2023 - Present",
            role: "Frontend Developer",
            company: "CAPYS IT SOLUTIONS",
            description:
                "Technical leader in frontend tasks, developing user interfaces with JavaScript, React and React Native. I integrate and consume REST APIs, implement reusable components with React Hooks and Context API. I identify and fix bugs, as well as analyze and solve production exceptions.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            skills: [
                "React",
                "React Native",
                "JavaScript",
                "TypeScript",
                "React Hooks",
                "Context API",
            ],
        },
        {
            period: "October 2022 - March 2023",
            role: "Frontend Developer Trainee",
            company: "CAPYS IT SOLUTIONS",
            description:
                "Assisted in the development and maintenance of systems, used JavaScript and TypeScript daily, and participated in planning meetings and project scope definition.",
            image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80",
            skills: ["JavaScript", "React", "TypeScript"],
        },
    ];

    return (
        <GradientSection className="min-h-screen flex items-center justify-center py-20">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6"
            >
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Professional Experience
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Building innovative and scalable solutions over the
                            years
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="gap-8 items-center bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-gray-400 ">
                                        <ImageCard
                                            src={
                                                "https://www.capys.com.br/templates/mossek/images/logo.svg"
                                            }
                                            alt={`${exp.company}`}
                                            className="h-10"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                        <Award size={18} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-blue-400 mb-4">
                                        <Briefcase size={24} />
                                        <h3 className="text-2xl font-bold text-white">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                                        <Calendar size={18} />
                                        <span>{exp.period}</span>
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* <ImageCard
                  src={exp.image}
                  alt={`${exp.company} environment`}
                  className="h-full md:h-[300px] w-full"
                /> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </GradientSection>
    );
};
