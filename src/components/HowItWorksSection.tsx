import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
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

  const timeline = [
    {
      num: '01',
      title: 'Você contrata',
      desc: 'A Festa Click cria sua galeria personalizada.',
    },
    {
      num: '02',
      title: 'Recebe seu QR Code',
      desc: 'Criamos uma arte personalizada com o QR Code da sua festa.',
    },
    {
      num: '03',
      title: 'Compartilhe na festa',
      desc: 'O QR Code pode aparecer no telão, mesas, lembrancinhas ou impressos.',
    },
    {
      num: '04',
      title: 'Seus convidados enviam',
      desc: 'Fotos e vídeos são enviados diretamente para a galeria.',
    },
    {
      num: '05',
      title: 'Você guarda tudo',
      desc: 'Depois da festa, as lembranças continuam reunidas em um único lugar.',
    }
  ];

  return (
    <section id="como-funciona" ref={sectionRef} className="py-24 bg-festa-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Como <span className="text-festa-champagne">funciona</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Desktop Content Half */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <h3 className="text-xl font-bold mb-2 text-festa-white">{item.title}</h3>
                  <p className="text-festa-white/70">{item.desc}</p>
                </div>
                
                {/* Number Circle */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-festa-dark border-2 border-festa-champagne flex items-center justify-center z-10 shadow-[0_0_15px_rgba(230,194,128,0.2)]">
                  <span className="font-display font-bold text-festa-champagne">{item.num}</span>
                </div>

                {/* Mobile / Alternative Desktop Content Half */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:hidden' : 'md:pr-12 md:hidden'}`}>
                   <h3 className="text-xl font-bold mb-2 text-festa-white">{item.title}</h3>
                   <p className="text-festa-white/70">{item.desc}</p>
                </div>
                {/* Ensure visible content on desktop for the side that needs it */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
