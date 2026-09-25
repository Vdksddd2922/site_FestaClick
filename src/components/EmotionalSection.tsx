import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const EmotionalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      {/* Since we don't have a real photo, we use a very dark, rich gradient mixed with noise or blur to simulate a cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-festa-black via-[#1a1210] to-festa-black z-0"></div>
      
      {/* Simulated overlay for cinematic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-festa-champagne/5 via-transparent to-transparent opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <AnimatedTitle className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Porque algumas fotos merecem <span className="text-festa-champagne font-serif italic font-normal tracking-wide">mais</span> do que ficar perdidas na galeria do celular.
        </AnimatedTitle>
        <p className="text-2xl md:text-3xl text-festa-white/90 font-light tracking-wide">
          Elas merecem fazer parte da <span className="font-semibold text-festa-champagne">história</span>.
        </p>
      </div>
    </section>
  );
};

export default EmotionalSection;
