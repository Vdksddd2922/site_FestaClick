import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Image as ImageIcon, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-festa-black relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <h2 className="problem-element text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Quantas fotos da festa acabam <span className="text-festa-champagne">perdidas</span> na galeria do celular?
        </h2>
        
        <p className="problem-element text-lg md:text-xl text-festa-white/70 leading-relaxed mb-16">
          Cada convidado registra um momento diferente. Uma risada, um abraço, uma dança, uma surpresa. O problema é que, depois da festa, essas lembranças acabam espalhadas entre dezenas de celulares.
        </p>
        
        <div className="problem-element flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
          {/* Before */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full bg-festa-dark border-2 border-festa-black flex items-center justify-center shadow-lg relative z-10" style={{ zIndex: 10 - i }}>
                  <Smartphone className="w-6 h-6 text-festa-white/50" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-festa-white/50">Fotos espalhadas</span>
          </div>

          {/* Arrow / Line */}
          <div className="hidden md:block w-32 h-px bg-gradient-to-r from-transparent via-festa-champagne/50 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-festa-black px-2 text-festa-champagne text-xs font-bold tracking-widest">
              FESTA CLICK
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-festa-champagne to-festa-amber p-[2px] shadow-[0_0_30px_rgba(230,194,128,0.2)]">
              <div className="w-full h-full bg-festa-dark rounded-2xl flex flex-wrap gap-1 p-2 items-center justify-center content-center">
                <ImageIcon className="w-4 h-4 text-festa-champagne" />
                <Users className="w-4 h-4 text-festa-champagne" />
                <ImageIcon className="w-4 h-4 text-festa-champagne" />
                <ImageIcon className="w-4 h-4 text-festa-champagne" />
              </div>
            </div>
            <span className="text-sm font-medium text-festa-champagne">Tudo em um só lugar</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
