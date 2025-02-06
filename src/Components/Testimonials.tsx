import { testimonials } from "./Testimonials/TestimonialData";
import { TestimonialList } from "./Testimonials/TestimonialList";
import { useState } from "react";

const ScrollingTestimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };
  return (
    <div className="bg-amber-300 py-12">
      <div className="mb-8 px-4">
        <h3 className="text-black text-5xl font-mabook text-center drop-shadow-2xl">
          Testimoniale de la parinti
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto"></p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-amber-300  to-transparent opacity-55" />

        <div
          className="flex items-center mb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <TestimonialList
            list={testimonials.top}
            duration={155}
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.top}
            duration={155}
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.top}
            duration={155}
            isPaused={isPaused}
          />
        </div>
        <div
          className="flex items-center mb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <TestimonialList
            list={testimonials.middle}
            duration={125}
            reverse
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.middle}
            duration={125}
            reverse
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.middle}
            duration={125}
            reverse
            isPaused={isPaused}
          />
        </div>
        <div
          className="flex items-center"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <TestimonialList
            list={testimonials.bottom}
            duration={275}
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.bottom}
            duration={275}
            isPaused={isPaused}
          />
          <TestimonialList
            list={testimonials.bottom}
            duration={275}
            isPaused={isPaused}
          />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-amber-300 to-transparent opacity-55" />
      </div>
    </div>
  );
};

export { ScrollingTestimonials as Testimonials };
