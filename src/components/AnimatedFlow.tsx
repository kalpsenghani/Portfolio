import { motion } from "framer-motion";
import { useRef } from "react";

interface FlowItem {
  title: string;
  description: string;
  icon?: string;
}

interface AnimatedFlowProps {
  items: FlowItem[];
}

const AnimatedFlow = ({ items }: AnimatedFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          className="relative"
          style={{ perspective: "1000px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[300px] bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 3,
                  transition: { type: "spring", stiffness: 300 },
                  boxShadow: "0 0 20px rgba(59,130,246,0.2)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="space-y-4">
                  {item.icon && (
                    <motion.div 
                      className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center border border-blue-500/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </motion.div>
                  )}
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedFlow; 