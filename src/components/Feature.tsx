import { useState } from "react";

interface FeatureProps {
  title: string;
  body: string;
  icon: string;
}

const Feature = ({ title, body, icon }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-64 mb-6 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div
        className="w-full h-full rounded-lg p-6 flex flex-col justify-between transition-all duration-300"
        style={{
          transform: isHovered ? "translateY(-20px)" : "translateY(0)",
          boxShadow: isHovered 
            ? "" // Dark blue shadow on hover
            : "", // Lighter dark blue shadow by default
          background: isHovered 
            ? "linear-gradient(135deg, #1e3a8a, #3b82f6)" // Gradient on hover
            : "#3b82f6", // Solid blue by default
        }}
      >
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 color-black">
          {title}
        </h3>

        {/* Body text */}
        <p className="text-white text-sm mb-4">
          {body}
        </p>

        {/* Icon */}
        <div className="flex justify-end">
        <img 
  src={icon} 
  width={62} 
  height={62} 
  alt={title}
  className="transition-transform duration-300 hover:scale-110"
/>
        </div>
      </div>
    </div>
  );
};

export default Feature;