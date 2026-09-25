import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Image as ImageIcon, Video, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MockupSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mockup-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-festa-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-festa-champagne/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Mockup */}
        <div className="mockup-container relative mx-auto lg:mx-0 w-full max-w-[380px]">
          <div className="relative w-full aspect-[9/19] bg-festa-black rounded-[3rem] border-[8px] border-[#2a2a2a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Header image placeholder */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-festa-champagne/40 to-festa-coffee/20"></div>

            <div className="absolute inset-0 pt-32 px-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-festa-dark border-4 border-festa-black shadow-lg mb-4 mt-8 flex items-center justify-center">
                 <Camera className="text-festa-champagne w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-center leading-tight">Galeria de Fotos<br/>Vhânia Flor</h3>
              <p className="text-festa-white/50 text-sm mt-1">26/09/2026</p>

              <div className="flex gap-4 mt-6 w-full">
                <div className="flex-1 bg-white/10 rounded-xl p-3 flex flex-col items-center justify-center border border-white/5">
                  <ImageIcon className="w-5 h-5 text-festa-champagne mb-1" />
                  <span className="text-xs font-medium">142 Fotos</span>
                </div>
                <div className="flex-1 bg-white/10 rounded-xl p-3 flex flex-col items-center justify-center border border-white/5">
                  <Video className="w-5 h-5 text-festa-champagne mb-1" />
                  <span className="text-xs font-medium">12 Vídeos</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-festa-champagne text-festa-black font-semibold py-3 rounded-full text-sm">
                Enviar fotos e vídeos
              </button>
              
              <button className="w-full mt-3 bg-white/10 text-festa-white font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Baixar todas
              </button>
            </div>
            
            {/* Navigation indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A experiência de ter <span className="text-festa-champagne">seu próprio app</span>.
          </h2>
          <p className="text-lg text-festa-white/70 mb-8 leading-relaxed">
            Seus convidados acessam uma interface elegante e super fácil de usar, feita exclusivamente para o seu evento. Sem necessidade de baixar nada, direto no navegador.
          </p>
          <ul className="flex flex-col gap-4">
            {[
              'Visual personalizado com o nome da festa',
              'Contador de fotos e vídeos em tempo real',
              'Upload super rápido e sem burocracia',
              'Download em alta qualidade para todos'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-festa-champagne"></div>
                <span className="text-festa-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default MockupSection;
