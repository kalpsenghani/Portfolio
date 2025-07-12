import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBrain,
  IconCode,
  IconDatabase,
  IconDevices,
  IconRocket,
  IconShield,
  IconBolt,
  IconPalette,
} from "@tabler/icons-react";

// Helper function to highlight keywords in text with simple bold and colors
const highlightKeywords = (text: string) => {
  const keywords = [
    'React', 'Node.js', 'TypeScript', 'AI', 'OpenAI', 'Python', 'AWS', 'Docker', 
    'SQL', 'NoSQL', 'CSS', 'authentication', 'security', 'performance', 'scalable',
    'microservices', 'automation', 'intelligent', 'robust', 'optimization'
  ];
  
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="keyword-simple">${keyword}</span>`);
  });
  
  return highlightedText;
};

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Full Stack Development",
      description:
        "Expert in building complete web applications from frontend to backend with modern technologies like React, Node.js, and TypeScript.",
      icon: <IconCode className="w-6 h-6" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Specialized in AI-powered applications, automation workflows, and intelligent systems using OpenAI, Python, and advanced ML techniques.",
      icon: <IconBrain className="w-6 h-6" />,
    },
    {
      title: "Cloud Architecture",
      description:
        "Experienced in designing scalable cloud solutions with AWS, Docker, and microservices architecture for high-performance applications.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Database Design",
      description:
        "Proficient in both SQL and NoSQL databases, data modeling, and building robust data-driven applications with optimal performance.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "Responsive Design",
      description:
        "Creating beautiful, accessible user interfaces that work seamlessly across all devices with modern CSS and design principles.",
      icon: <IconDevices className="w-6 h-6" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Expert in optimizing applications for speed, efficiency, and user experience through advanced techniques and best practices.",
      icon: <IconBolt className="w-6 h-6" />,
    },
    {
      title: "Security & Best Practices",
      description:
        "Implementing secure authentication, data protection, and following industry best practices for production-ready applications.",
      icon: <IconShield className="w-6 h-6" />,
    },
    {
      title: "Innovation & Problem Solving",
      description:
        "Passionate about solving complex challenges with creative solutions and staying ahead of emerging technologies and trends.",
      icon: <IconRocket className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 feature-icon group-hover/feature:text-blue-300 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block feature-title group-hover/feature:text-blue-100 font-semibold">
          {title}
        </span>
      </div>
      <div 
        className="text-sm feature-description group-hover/feature:text-gray-100 max-w-xs relative z-10 px-10 leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: highlightKeywords(description) 
        }}
      />
    </div>
  );
}; 