import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Network,
  Database,
  GitBranch,
  Workflow,
  Binary,
  Code2,
  Bot,
  Microscope,
  CircuitBoard,
  Fingerprint,
  Sparkles,
  Atom,
  LineChart,
  Layers,
  Server,
  Code,
  Terminal,
  DatabaseZap,
  NetworkIcon,
} from 'lucide-react';

interface IconProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
  scale?: number;
}

const IconAnimation = ({ icon, x, y, delay, scale = 1 }: IconProps) => {
  return (
    <motion.div
      className="absolute text-white/8 drop-shadow-lg hover:text-white/30 transition-all duration-300"
      initial={{ opacity: 0, x, y, scale: 0.8 }}
      animate={{
        opacity: [0, 0.5, 0.2, 0.5],
        x: [x, x + 10, x - 10, x],
        y: [y, y - 10, y + 10, y],
        scale: [0.8, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 16,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: scale * 1.2,
        opacity: 0.3,
        transition: { duration: 0.3 }
      }}
    >
      {icon}
    </motion.div>
  );
};

const AiBackgroundIcons = () => {
  // Evenly distributed icons, subtle hover
  const icons = [
    { Icon: Brain, size: 44, x: -600, y: 120, delay: 0, scale: 1.2 },
    { Icon: Cpu, size: 38, x: -400, y: 300, delay: 1.2 },
    { Icon: NetworkIcon, size: 48, x: -200, y: 600, delay: 2.5 },
    { Icon: Atom, size: 52, x: 0, y: 700, delay: 3.7 },
    { Icon: Bot, size: 40, x: 600, y: 180, delay: 0.8 },
    { Icon: Code, size: 44, x: 400, y: 500, delay: 2.1 },
    { Icon: CircuitBoard, size: 48, x: 200, y: 800, delay: 4.2 },
    { Icon: Database, size: 38, x: 300, y: 700, delay: 5.5 },
    { Icon: Sparkles, size: 40, x: -300, y: 200, delay: 1.5 },
    { Icon: LineChart, size: 40, x: 100, y: 600, delay: 3.2 },
    { Icon: Fingerprint, size: 38, x: -100, y: 400, delay: 2.8 },
    { Icon: Microscope, size: 44, x: 500, y: 300, delay: 1.9 },
    { Icon: GitBranch, size: 36, x: -500, y: 900, delay: 4.7 },
    { Icon: Workflow, size: 40, x: 200, y: 100, delay: 2.3 },
    { Icon: Layers, size: 38, x: -200, y: 200, delay: 3.1 },
    { Icon: Server, size: 40, x: 600, y: 900, delay: 5.2 },
    { Icon: Terminal, size: 36, x: 0, y: 800, delay: 2.6 },
    { Icon: DatabaseZap, size: 38, x: 400, y: 400, delay: 3.9 },
    { Icon: Binary, size: 36, x: -400, y: 900, delay: 4.4 },
    { Icon: Code2, size: 40, x: 500, y: 700, delay: 5.7 },
  ];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {icons.map((item, index) => (
        <IconAnimation
          key={index}
          icon={<item.Icon size={item.size} />}
          x={item.x}
          y={item.y}
          delay={item.delay}
          scale={item.scale}
        />
      ))}
    </div>
  );
};

export default AiBackgroundIcons; 