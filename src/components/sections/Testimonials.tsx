"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import MotionWrapper from "@/components/MotionWrapper";

const TestimonialCard = ({ author, text, rating }: { author: string; text: string; rating: number }) => {
  return (
    <div className="w-[350px] md:w-[450px] shrink-0 p-6 md:p-8 rounded-2xl border-[0.5px] border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-gold/10" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 font-medium relative z-10 text-sm md:text-base">
        &quot;{text}&quot;
      </p>
      
      <div className="flex items-center gap-3 relative z-10 mt-auto">
        <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm shrink-0">
          {author.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-navy text-sm">{author.split(' - ')[0]}</span>
          {author.split(' - ')[1] && (
            <span className="text-gray-500 text-xs">{author.split(' - ')[1]}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  // Duplicating the rows for infinite scroll effect
  const multipliedRow1 = [...row1, ...row1, ...row1];
  const multipliedRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Excellence Trusted by London&apos;s Best
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Don&apos;t just take our word for it. Here is what leading businesses and private clients have to say about the uncompromising standards and elite personnel provided by VSRS.
            </p>
          </div>
        </MotionWrapper>
      </div>

      <div className="relative flex flex-col gap-6 w-full">
        {/* Row 1 - Moving Left */}
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 shrink-0 pr-6"
            animate={{
              x: isInView ? ["0%", "-33.3333%"] : "0%"
            }}
            transition={{
              ease: "linear",
              duration: 150,
              repeat: Infinity,
            }}
          >
            {multipliedRow1.map((item, idx) => (
              <TestimonialCard key={`r1-${idx}`} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative flex w-[100vw] overflow-hidden justify-end">
          <motion.div
            className="flex gap-6 shrink-0 pl-6"
            animate={{
              x: isInView ? ["-33.3333%", "0%"] : "-33.3333%"
            }}
            transition={{
              ease: "linear",
              duration: 140,
              repeat: Infinity,
            }}
          >
            {multipliedRow2.map((item, idx) => (
              <TestimonialCard key={`r2-${idx}`} {...item} />
            ))}
          </motion.div>
        </div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
