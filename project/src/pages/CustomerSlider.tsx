import React, { useEffect, useState } from "react";

interface CustomerSliderProps {
  children: React.ReactNode[];
}

const CustomerSlider: React.FC<CustomerSliderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(children.length / 6));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(children.length / 6) }, (_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {children.slice(slideIndex * 6, (slideIndex + 1) * 6).map((child, index) => (
              <div key={index}>{child}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSlider;