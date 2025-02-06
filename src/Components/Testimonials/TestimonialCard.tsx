import { TestimonialData } from "./types";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative">
      <div className="bg-indigo-400 text-slate-800 p-4">
        <span className="block font-bold text-2xl mb-1">
          {testimonial.name}
        </span>
        <span className="block mb-3 text-sm font-bold text-slate-200">
          {testimonial.title}
        </span>
        <span className="block font-semibold text-sm text-slate-800">
          {testimonial.info}
        </span>
      </div>
      <span className="text-7xl absolute top-2 right-2 text-slate-200">
        {testimonial.year}
      </span>
    </div>
  );
};
