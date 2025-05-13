import { CountUpStats } from "../Components/Counter";
import { Hero } from "../Components/Hero";

import { StaggerTestimonials } from "../Components/TestimonialsAlt";

export default function Home() {
  return (
    <div className="bg-amber-300 ">
      <Hero />

      <StaggerTestimonials />
      <CountUpStats />
    </div>
  );
}
