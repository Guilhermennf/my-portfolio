import { motion } from "framer-motion";

export const FloatingElements = () => {
  const elements = [
    { color: "#FF3366", size: "80px", delay: 0 },
    { color: "#4A9DFF", size: "60px", delay: 0.2 },
    { color: "#FFD23F", size: "40px", delay: 0.4 },
    { color: "#9C27B0", size: "70px", delay: 0.6 },
    { color: "#00BFA5", size: "50px", delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-2xl opacity-20"
          style={{
            background: element.color,
            width: element.size,
            height: element.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};
