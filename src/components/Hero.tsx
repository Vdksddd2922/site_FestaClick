import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Camera, QrCode, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitTitle = new SplitType('.hero-title-anim', { types: 'lines,words,chars' });

      if (splitTitle.lines) {
        splitTitle.lines.forEach(line => {
          line.style.overflow = 'hidden';
          line.style.paddingBottom = '0.1em'; // Prevent descenders from getting cut off too much
        });
      }

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-badge-anim', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
      })
        .from(splitTitle.chars, {
          y: "100%",
          opacity: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: 'power3.out'
        }, "-=0.4")
        .from('.hero-desc-anim, .hero-btn-anim, .hero-tags-anim', {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
        }, "-=0.1");

      gsap.from(imageRef.current, {
        x: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-festa-champagne/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-festa-rosegold/10 rounded-full blur-[120px]"></div>

        {/* Subtle particles effect (CSS representation) */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-festa-champagne rounded-full animate-pulse blur-[1px]"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-festa-white rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-festa-rosegold rounded-full animate-pulse blur-[2px]" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div ref={textRef} className="flex flex-col gap-6 z-10">
          <div className="hero-badge-anim inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-festa-champagne" />
            <span className="text-sm font-medium tracking-wide text-festa-champagne">A evolução do álbum de festa</span>
          </div>

          <h1 className="hero-title-anim text-5xl md:text-7xl font-bold leading-tight">
            Sua festa.<br />
            <span className="text-festa-champagne">Seus momentos.</span><br />
            Sua história.
          </h1>

          <p className="hero-desc-anim text-lg md:text-xl text-festa-white/70 max-w-lg leading-relaxed">
            Crie uma galeria exclusiva para sua festa e reúna em um só lugar as fotos e vídeos registrados pelos seus convidados.
          </p>

          <div className="hero-btn-anim flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Conheci+a+Festa+Click+e+quero+saber+como+funciona."
              target="_blank" rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Criar minha galeria
            </a>
            <a
              href="#como-funciona"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Ver como funciona
            </a>
          </div>

          <div className="hero-tags-anim mt-6 flex flex-wrap gap-2 text-xs md:text-sm text-festa-white/50">
            <span>15 anos</span> • <span>Aniversários</span> • <span>Casamentos</span> •
            <span>Formaturas</span> • <span>Bodas</span> • <span>Eventos</span>
          </div>
        </div>

        {/* Visual Element */}
        <div ref={imageRef} className="relative z-10 lg:ml-auto">
          {/* Main Smartphone Mockup */}
          <div className="relative w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-festa-dark rounded-[3rem] border-[8px] border-festa-coffee shadow-2xl overflow-hidden mx-auto lg:mr-0 animate-float">

            {/* Screen Content Simulated */}
            <div className="absolute inset-0 bg-gradient-to-b from-festa-dark to-festa-black p-4 flex flex-col gap-4 pt-12">
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-medium text-white/50">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-4 h-3 rounded bg-white/20"></div>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center">
                <div className="w-20 h-20 bg-festa-champagne/20 rounded-full flex items-center justify-center mb-4">
                  <Camera className="w-10 h-10 text-festa-champagne" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-1">Galeria de Fotos</h3>
                <p className="text-sm text-white/50">26/09/2026</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-white/10 rounded-lg aspect-square"></div>
                <div className="bg-white/10 rounded-lg aspect-square"></div>
                <div className="bg-white/10 rounded-lg aspect-square"></div>
                <div className="bg-white/10 rounded-lg aspect-square"></div>
              </div>
            </div>
          </div>

          {/* Floating QR Code Element */}
          <div className="absolute -bottom-8 -left-8 md:-left-16 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-24 h-24 bg-festa-white rounded-lg p-2 flex items-center justify-center">
              <QrCode className="w-full h-full text-festa-black" />
            </div>
            <span className="text-xs font-semibold tracking-wider text-festa-champagne">SCAN ME</span>
          </div>

          {/* Floating Photo Element */}
          <div className="absolute top-20 -right-8 md:-right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-2 pb-8 rounded-lg shadow-2xl transform rotate-6 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-32 h-32 bg-festa-coffee rounded overflow-hidden">
              {/* Placeholder for an actual photo */}
              <div className="w-full h-full bg-gradient-to-tr from-festa-champagne/40 to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
