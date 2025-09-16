import { motion } from "framer-motion";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export const Navigation = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 right-8 -translate-y-1/2 z-50"
        >
            <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-3 h-3 rounded-full bg-white/50 hover:bg-white hover:scale-150 transition-all duration-300"
                        aria-label={item.label}
                    />
                ))}
            </nav>
        </motion.div>
    );
};
