import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureProps {
  title?: string;
  body?: string;
  icon?: string;
  className?: string; // Additional className prop for flexibility
}

const Feature = ({ title, body, icon, className = "" }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className={`flex flex-col relative cursor-pointer text-white 
      mt-6 sm:mt-8 md:mt-10 lg:mt-0 ${className}`}>
      
      {/* Background shadow layer */}
      <motion.div
        animate={{ margin: isHovered ? "0px" : "12px" }}
        transition={{ duration: 0.3 }}
        className="bg-black shadow-2xl w-full h-full absolute rounded-lg"
      />
      
      {/* Main content card */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          opacity: 0.9,
          y: -4, // slight lift effect
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
        className="border-2 border-gray-400/50 w-full h-full bg-slate-700/90 
        rounded-lg p-5 sm:p-6 relative flex flex-col sm:flex-row justify-between 
        gap-4 hover:border-gray-300/70 transition-all"
      >
        <div className="flex-1">
          {title && (
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">
              {title}
            </h3>
          )}
          <p className="text-sm sm:text-base text-gray-100/90">{body}</p>
        </div>
        
        {icon && (
          <div className="flex-shrink-0 self-center sm:self-start">
            <img 
              src={icon} 
              width={62} 
              height={62} 
              className="white-icon filter brightness-0 invert(90%)"
              alt={title || "Feature icon"}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Feature;