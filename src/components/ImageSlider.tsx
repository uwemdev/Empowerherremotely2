import React from 'react';

const images = Array.from({ length: 12 }, (_, i) =>
  new URL(`../assets/images/testimonial-${i + 1}.jpg`, import.meta.url).href
);

const ImageSlider: React.FC = () => {
  return (
    <div className="overflow-hidden py-16 bg-white">
      <div className="w-full flex whitespace-nowrap animate-scroll gap-8">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="min-w-[350px] h-[500px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <img
              src={src}
              alt={`testimonial-${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

