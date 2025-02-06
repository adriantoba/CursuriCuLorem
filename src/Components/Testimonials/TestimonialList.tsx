import { motion, useAnimation } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialData } from "./types";
import { useEffect } from "react";

interface TestimonialListProps {
  list: TestimonialData[];
  reverse?: boolean;
  duration?: number;
  isPaused?: boolean;
}

export const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
  isPaused,
}: TestimonialListProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: reverse ? "0%" : "-100%",
        transition: { duration, repeat: Infinity, ease: "linear" },
      });
    }
  }, [isPaused, controls, reverse, duration]);

  return (
    <motion.div
      initial={{ x: reverse ? "-100%" : "0%" }}
      animate={controls}
      className="flex gap-4 px-2"
    >
      {list.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </motion.div>
  );
};
