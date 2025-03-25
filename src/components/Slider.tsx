import { getCollection, type CollectionEntry } from "astro:content";
import { useEffect, useState, useRef } from "react";

const Slider = () => {
  const [sliders, setSliders] = useState<CollectionEntry<"slider">[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const fetchSliders = async () => {
      const sliderEntries = await getCollection("slider");
      setSliders(sliderEntries);
    };

    fetchSliders();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      // When not hovered, continue the animation from the saved position
      const startTime = performance.now();
      const startPosition = scrollPosition;
      const duration = 20000; // 20 seconds for a full loop
      const distance = (sliders.length * 288); // Width of one set of items

      const animate = (time: number) => {
        const elapsed = (time - startTime) % duration;
        const progress = elapsed / duration;
        const newPosition = (startPosition + progress * distance) % distance;
        
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // When hovered, cancel the animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, scrollPosition, sliders.length]);

  const handleMouseEnter = () => {
    // Save the current scroll position when hovering starts
    if (sliderRef.current) {
      const style = window.getComputedStyle(sliderRef.current);
      const matrix = new DOMMatrix(style.transform);
      setScrollPosition(Math.abs(matrix.m41));
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wrapping div for seamless looping */}
      <div
        ref={sliderRef}
        className="flex"
        style={{
          width: `${sliders.length * 2 * 288}px`, // Adjust based on item width and count
          transform: isHovered ? `translateX(-${scrollPosition}px)` : 'translateX(0)',
        }}
      >
        {/* Render images once fetched */}
        {sliders.map((slider, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:z-10 hover:bg-white/10 rounded-lg">
              <img
                src={slider.data.slider}
                alt={slider.data.sliderAlt}
                className="max-w-full max-h-full object-contain transition-all duration-500 hover:brightness-110"
              />
            </div>
          </div>
        ))}
        {/* Duplicate the content for seamless looping */}
        {sliders.map((slider, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <div className="m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:z-10 hover:bg-white/10 rounded-lg">
              <img
                src={slider.data.slider}
                alt={slider.data.sliderAlt}
                className="max-w-full max-h-full object-contain transition-all duration-500 hover:brightness-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;