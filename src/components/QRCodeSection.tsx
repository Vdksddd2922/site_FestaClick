import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScanLine, UploadCloud, FolderHeart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const QRCodeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flow animation
      gsap.from('.qr-step', {
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
      });

      // Scanner animation for QR code
      gsap.to('.scanner-line', {
        y: 60,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'APONTE',
      desc: 'O convidado aponta a câmera do celular para o QR Code.',
      icon: <ScanLine className="w-8 h-8 text-festa-champagne" />
    },
    {
      num: '02',
      title: 'ENVIE',
      desc: 'Abre a galeria da festa e ele envia fotos e vídeos.',
      icon: <UploadCloud className="w-8 h-8 text-festa-champagne" />
    },
    {
      num: '03',
      title: 'GUARDE',
      desc: 'Todos os momentos ficam reunidos no álbum digital.',
      icon: <FolderHeart className="w-8 h-8 text-festa-champagne" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-festa-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Um QR Code. <span className="text-festa-champagne">Centenas de momentos.</span>
          </h2>
        </div>

        <div ref={stepsRef} className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-festa-champagne/0 via-festa-champagne/30 to-festa-champagne/0 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="qr-step relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-festa-black border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-festa-champagne/50 transition-colors duration-500 shadow-xl overflow-hidden">
                {step.icon}
                {index === 0 && (
                  <div className="scanner-line absolute top-4 w-12 h-0.5 bg-festa-champagne shadow-[0_0_8px_#e6c280]"></div>
                )}
              </div>
              <span className="text-festa-champagne font-display font-bold text-lg mb-2">{step.num} — {step.title}</span>
              <p className="text-festa-white/70 max-w-[250px]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Conheci+a+Festa+Click+e+quero+entender+como+o+QR+Code+funciona+na+minha+festa."
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary"
          >
            Quero isso na minha festa
          </a>
        </div>

      </div>
    </section>
  );
};

export default QRCodeSection;
