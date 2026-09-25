import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DifferenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating photos into a central point
      gsap.to('.diff-photo', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1,
        },
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-festa-black overflow-hidden relative min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Não é apenas um QR Code.<br/>É a <span className="text-festa-champagne">história</span> da sua festa.
        </h2>
        
        <p className="text-lg text-festa-white/70 max-w-2xl mx-auto">
          Enquanto a festa acontece, dezenas de momentos estão sendo registrados por diferentes pessoas. A Festa Click transforma esses registros em uma experiência única, organizada e personalizada.
        </p>

      </div>

      {/* Animation Elements (Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* We use CSS transforms to place them initially scattered, then GSAP brings them to center */}
        
        <div className="diff-photo absolute top-[10%] left-[10%] w-32 h-40 bg-festa-dark border-4 border-white/10 rounded-lg shadow-2xl opacity-0 transform -translate-x-20 -translate-y-20 -rotate-12 scale-150" style={{ transformOrigin: 'center' }}>
          <div className="w-full h-full bg-gradient-to-br from-festa-champagne/20 to-festa-rosegold/10"></div>
        </div>
        
        <div className="diff-photo absolute top-[20%] right-[15%] w-40 h-32 bg-festa-dark border-4 border-white/10 rounded-lg shadow-2xl opacity-0 transform translate-x-20 -translate-y-20 rotate-12 scale-150" style={{ transformOrigin: 'center' }}>
          <div className="w-full h-full bg-gradient-to-br from-festa-coffee/40 to-festa-amber/20"></div>
        </div>

        <div className="diff-photo absolute bottom-[15%] left-[20%] w-28 h-28 bg-festa-dark border-4 border-white/10 rounded-full shadow-2xl opacity-0 transform -translate-x-20 translate-y-20 -rotate-6 scale-150" style={{ transformOrigin: 'center' }}>
          <div className="w-full h-full bg-gradient-to-br from-festa-champagne/30 to-festa-dark/50 rounded-full"></div>
        </div>

        <div className="diff-photo absolute bottom-[20%] right-[10%] w-36 h-48 bg-festa-dark border-4 border-white/10 rounded-lg shadow-2xl opacity-0 transform translate-x-30 translate-y-20 rotate-6 scale-150" style={{ transformOrigin: 'center' }}>
          <div className="w-full h-full bg-gradient-to-br from-festa-rosegold/30 to-festa-black"></div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
