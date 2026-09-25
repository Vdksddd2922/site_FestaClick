import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { MessageCircle, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FestaClickHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // useScroll without target — tracks document scroll
  // We normalise progress relative to the hero section height
  const { scrollY } = useScroll();
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 3 : 1600;
  const scrollYProgress = useTransform(scrollY, [0, heroHeight], [0, 1]);

  // Vhânia phone — front, moves left+up
  const vhaniaX = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const vhaniaY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const vhaniaRotate = useTransform(scrollYProgress, [0, 1], [-5, -1]);
  const vhaniaScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Julia phone — behind, moves right
  const juliaX = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const juliaY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const juliaRotate = useTransform(scrollYProgress, [0, 1], [8, 2]);
  const juliaScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Hero text fades out on scroll
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-25%']);

  // Floating notification opacities
  const notif1Opacity = useTransform(scrollYProgress, [0.05, 0.14, 0.72], [0, 1, 0]);
  const notif2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.82], [0, 1, 0]);
  const notif3Opacity = useTransform(scrollYProgress, [0.28, 0.4, 0.9], [0, 1, 0]);

  // Parallax glow
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  // GSAP text animation on mount
  useEffect(() => {
    const titleEl = document.querySelector('.hero-main-title') as HTMLElement;
    if (!titleEl) return;

    const split = new SplitType(titleEl, { types: 'lines,words,chars' });

    if (split.lines) {
      split.lines.forEach((line) => {
        (line as HTMLElement).style.overflow = 'hidden';
        (line as HTMLElement).style.paddingBottom = '0.05em';
      });
    }

    split.chars?.forEach((char) => {
      (char as HTMLElement).style.display = 'inline-block';
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' })
        .from(split.chars, {
          y: '100%',
          opacity: 0,
          duration: 0.32,
          stagger: 0.025,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.1')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-scroll-hint', { opacity: 0, duration: 0.8 }, '-=0.2');

      // Phones entrance (parallel)
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        gsap.from('.phone-vhania', { y: 70, opacity: 0, duration: 1.3, ease: 'power3.out', delay: 0.2 });
        gsap.from('.phone-julia', { y: 90, opacity: 0, duration: 1.3, ease: 'power3.out', delay: 0.4 });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.from('.phone-vhania', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
        gsap.from('.phone-julia', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-auto lg:h-[300vh] overflow-clip">

      {/* Sticky viewport on Desktop / Relative on Mobile */}
      <div className="relative lg:sticky top-0 min-h-[100svh] lg:h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0">

        {/* Rich dark background */}
        <div className="absolute inset-0 bg-[#080706]">
          <motion.div
            style={{ y: glowY }}
            className="absolute top-[-20%] left-[5%] w-[600px] h-[600px] bg-festa-champagne/8 rounded-full blur-[140px] pointer-events-none"
          />
          <motion.div
            style={{ y: glowY }}
            className="absolute bottom-[-15%] right-[5%] w-[500px] h-[500px] bg-festa-rosegold/6 rounded-full blur-[120px] pointer-events-none"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-festa-coffee/5 rounded-full blur-[160px] pointer-events-none" />
        </div>

        {/* Main layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 pt-10 lg:pt-20">

          {/* LEFT — Text */}
          <motion.div
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-5 relative z-20 w-full"
          >
            <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-festa-champagne/10 border border-festa-champagne/25 w-fit backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-festa-champagne animate-pulse" />
              <span className="text-xs font-semibold text-festa-champagne tracking-wider uppercase">Experiências digitais para festas</span>
            </div>

            <h1 className="hero-main-title font-display font-bold text-[34px] sm:text-4xl md:text-6xl xl:text-[68px] leading-[1.05] md:leading-[1.1] tracking-tight text-festa-white">
              Sua festa.<br />
              <span className="text-festa-champagne">Seus momentos.</span><br />
              Sua história.
            </h1>

            <p className="hero-sub text-base md:text-lg text-festa-white/60 max-w-md leading-relaxed">
              Uma galeria exclusiva para reunir as fotos e vídeos da sua festa — acessível pelo QR Code.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 sm:gap-3 w-full sm:w-auto mt-2 lg:mt-0">
              <a
                href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Conheci+a+Festa+Click+e+quero+criar+uma+galeria+para+minha+festa."
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-festa-champagne text-festa-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(230,194,128,0.5)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Criar minha galeria
              </a>
              <a
                href="#experiencia"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-festa-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white/5 transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>

            {/* Desktop static text, Mobile marquee */}
            <div className="hero-ctas w-[100vw] sm:w-full -mx-6 sm:mx-0 overflow-hidden mt-6 lg:mt-2 relative left-1/2 right-1/2 -ml-[50vw] sm:left-auto sm:right-auto sm:-ml-0">
              <div className="lg:hidden flex w-[200%] animate-marquee">
                <p className="text-[11px] text-festa-white font-bold tracking-widest uppercase whitespace-nowrap px-4 w-1/2">
                  15 anos <span className="text-festa-champagne mx-2">·</span> Casamentos <span className="text-festa-champagne mx-2">·</span> Aniversários <span className="text-festa-champagne mx-2">·</span> Formaturas <span className="text-festa-champagne mx-2">·</span> Bodas
                </p>
                <p className="text-[11px] text-festa-white font-bold tracking-widest uppercase whitespace-nowrap px-4 w-1/2">
                  15 anos <span className="text-festa-champagne mx-2">·</span> Casamentos <span className="text-festa-champagne mx-2">·</span> Aniversários <span className="text-festa-champagne mx-2">·</span> Formaturas <span className="text-festa-champagne mx-2">·</span> Bodas
                </p>
              </div>
              <p className="hidden lg:block text-[11px] text-festa-white/30 tracking-widest uppercase">
                15 anos · Casamentos · Aniversários · Formaturas · Bodas
              </p>
            </div>

            {/* Scroll hint */}
            <motion.div
              className="hero-scroll-hint hidden lg:flex flex-col items-start gap-1.5 text-festa-white/25 mt-4"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <span className="text-[10px] tracking-widest uppercase">Role para descobrir</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* RIGHT — Phones */}
          <div className="flex-1 relative flex items-center justify-center min-h-[400px] md:min-h-[520px] w-full max-w-full mt-10 lg:mt-0">

            {/* Floating notifications */}
            <motion.div
              style={{ opacity: notif1Opacity }}
              className="absolute z-30 top-[28%] left-[-2%] md:left-[-8%] bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-2.5 flex items-center gap-3 shadow-xl pointer-events-none"
            >
              <div className="w-7 h-7 bg-festa-champagne/20 rounded-full flex items-center justify-center shrink-0">📸</div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Nova foto adicionada</p>
                <p className="text-[10px] text-white/40">Galeria Vhânia Flor</p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: notif2Opacity }}
              className="absolute z-30 bottom-[32%] left-[-2%] md:left-[-5%] bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-2.5 flex items-center gap-3 shadow-xl pointer-events-none"
            >
              <div className="w-7 h-7 bg-festa-rosegold/20 rounded-full flex items-center justify-center shrink-0">🎬</div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Vídeo enviado</p>
                <p className="text-[10px] text-white/40">+1 momento guardado</p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: notif3Opacity }}
              className="absolute z-30 bottom-[16%] right-[0%] md:right-[-4%] bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-2.5 flex items-center gap-3 shadow-xl pointer-events-none"
            >
              <div className="w-7 h-7 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">✨</div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Galeria atualizada</p>
                <p className="text-[10px] text-white/40">Álbum Julia Nilson</p>
              </div>
            </motion.div>

            {/* Vhânia Phone — front/dominant */}
            <motion.div
              className="phone-vhania absolute z-20 left-[10%] lg:left-[2%] bottom-[5%] lg:bottom-[0%]"
              style={{
                x: vhaniaX,
                y: vhaniaY,
                rotate: vhaniaRotate,
                scale: vhaniaScale,
              }}
              whileHover={{ scale: 1.04, rotate: -3, transition: { duration: 0.4 } }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-festa-champagne/20 rounded-[3rem] blur-[30px] scale-95" />
                <img
                  src="/celular-vhania.png"
                  alt="Mockup galeria de fotos Vhânia Flor — Festa Click, Santa Catarina"
                  className="relative z-10 h-[260px] sm:h-[300px] md:h-[380px] xl:h-[430px] w-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full whitespace-nowrap">
                  <span className="text-[10px] font-semibold text-festa-champagne">Vhânia Flor · Galeria de Fotos</span>
                </div>
              </div>
            </motion.div>

            {/* Julia Phone — behind/secondary */}
            <motion.div
              className="phone-julia absolute z-10 right-[5%] lg:right-[-2%] top-[10%] lg:top-[4%]"
              style={{
                x: juliaX,
                y: juliaY,
                rotate: juliaRotate,
                scale: juliaScale,
              }}
              whileHover={{ scale: 1.04, rotate: 5, transition: { duration: 0.4 } }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-festa-rosegold/15 rounded-[3rem] blur-[25px] scale-95" />
                <img
                  src="/celular-julia.png"
                  alt="Mockup galeria 15 anos Julia Nilson — Festa Click"
                  className="relative z-10 h-[230px] sm:h-[260px] md:h-[330px] xl:h-[380px] w-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full whitespace-nowrap">
                  <span className="text-[10px] font-semibold text-festa-rosegold">Julia Nilson · 15 Anos</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-[-32px] lg:bottom-[-24px] left-1/2 -translate-x-1/2 text-center w-full">
              <p className="text-[10px] text-festa-white/30 tracking-widest uppercase">Experiências reais. Memórias reais.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FestaClickHero;
