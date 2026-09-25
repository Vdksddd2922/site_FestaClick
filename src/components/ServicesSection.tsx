import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutTemplate, QrCode, Images, Palette, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import AnimatedTitle from './AnimatedTitle';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <LayoutTemplate />,
      title: 'Site personalizado',
      desc: 'Uma página exclusiva para o seu evento.'
    },
    {
      icon: <QrCode />,
      title: 'QR Code exclusivo',
      desc: 'Seu QR Code personalizado para compartilhar na festa.'
    },
    {
      icon: <Images />,
      title: 'Galeria de fotos e vídeos',
      desc: 'Todos os registros reunidos em um único lugar.'
    },
    {
      icon: <Palette />,
      title: 'Arte personalizada',
      desc: 'Uma arte bonita para colocar no telão, imprimir ou compartilhar.'
    },
    {
      icon: <Sparkles />,
      title: 'Experiência para os convidados',
      desc: 'Um jeito simples e moderno de participar do álbum da festa.'
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-festa-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <AnimatedTitle className="text-3xl md:text-5xl font-bold mb-6">
            Tudo para transformar sua festa em uma <span className="text-festa-champagne">experiência digital</span>
          </AnimatedTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card glass-card group cursor-default ${
                index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 4 ? 'md:col-span-2 lg:col-span-2 lg:flex items-center gap-6' : ''}`}
            >
              <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-festa-champagne mb-4 group-hover:scale-110 transition-transform duration-300 ${index === 4 ? 'lg:mb-0 lg:shrink-0' : ''}`}>
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-festa-white">{service.title}</h3>
                <p className="text-festa-white/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
