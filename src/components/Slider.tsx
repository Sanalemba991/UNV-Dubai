import { getCollection, type CollectionEntry } from "astro:content";
import { useEffect, useState } from "react";

const Slider = () => {
  const [sliders, setSliders] = useState<CollectionEntry<"slider">[]>([]);

  useEffect(() => {
    const fetchSliders = async () => {
      const sliderEntries = await getCollection("slider");
      setSliders(sliderEntries);
    };

    fetchSliders();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <div
        className="flex"
        style={{
          animation: "slide 20s linear infinite",
        }}
      >
        {/* Render images once fetched */}
        {sliders.map((slider, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-transform duration-500 hover:scale-110">
              {/* Render the image using the fetched URL */}
              <img
                src={slider.data.slider}
                alt={slider.data.sliderAlt}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
        {/* Duplicate the content for seamless looping */}
        {sliders.map((slider, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <div className="m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-transform duration-500 hover:scale-110">
              <img
                src={slider.data.slider}
                alt={slider.data.sliderAlt}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Define the keyframes and animation in a <style> tag */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slider;