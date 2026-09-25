import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { QrCode, Smartphone, Images, BookImage, Heart } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const FestaClickExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const phoneY = useTransform(scrollYProgress, [0.1, 0.6], [60, -60]);
  const qrScale = useTransform(scrollYProgress, [0.05, 0.25], [0.85, 1]);
  const qrOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const photo1Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  
  // Use a smaller X offset on mobile to prevent overflow
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const photo1X = useTransform(scrollYProgress, [0.2, 0.4], [0, isMobile ? -30 : -80]);
  const photo2Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const photo2X = useTransform(scrollYProgress, [0.3, 0.5], [0, isMobile ? 30 : 80]);
  const photo3Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const galleryOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const galleryScale = useTransform(scrollYProgress, [0.5, 0.7], [0.9, 1]);

  const steps = [
    {
      num: '01',
      icon: <QrCode className="w-6 h-6" />,
      title: 'Aponte a câmera.',
      desc: 'O convidado acessa a galeria da festa em poucos segundos — sem instalar nada.',
      color: 'text-festa-champagne',
      bg: 'bg-festa-champagne/10 border-festa-champagne/30',
    },
    {
      num: '02',
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Registre o momento.',
      desc: 'Fotos e vídeos feitos durante a festa podem ser enviados diretamente pelo celular.',
      color: 'text-festa-amber',
      bg: 'bg-festa-amber/10 border-festa-amber/30',
    },
    {
      num: '03',
      icon: <Images className="w-6 h-6" />,
      title: 'Tudo começa a se reunir.',
      desc: 'Os registros dos convidados vão formando o álbum da sua festa em tempo real.',
      color: 'text-festa-rosegold',
      bg: 'bg-festa-rosegold/10 border-festa-rosegold/30',
    },
    {
      num: '04',
      icon: <BookImage className="w-6 h-6" />,
      title: 'Galeria completa.',
      desc: 'Uma única galeria digital organizada, com todas as fotos e vídeos da festa.',
      color: 'text-festa-cream',
      bg: 'bg-white/5 border-white/15',
    },
    {
      num: '05',
      icon: <Heart className="w-6 h-6" />,
      title: 'Sua festa vira história.',
      desc: 'Todos aqueles pequenos momentos reunidos em um só lugar para você reviver quando quiser.',
      color: 'text-festa-champagne',
      bg: 'bg-festa-champagne/10 border-festa-champagne/30',
    },
  ];

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-24 md:py-32 bg-festa-dark relative border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-festa-champagne/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-festa-champagne text-sm font-semibold tracking-widest uppercase mb-4">A experiência completa</p>
          <AnimatedTitle className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
            Do QR Code à <span className="text-festa-champagne">memória.</span>
          </AnimatedTitle>
          <p className="text-lg text-festa-white/60 max-w-lg mx-auto">Tudo acontece de um jeito simples.</p>
        </div>

        {/* Steps + visual */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Steps list */}
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className={`flex items-start gap-5 p-5 rounded-2xl border ${step.bg} transition-all duration-300 hover:bg-white/8 cursor-default group`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.color} bg-black/30 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-bold tracking-widest ${step.color}`}>{step.num}</span>
                    <h3 className="text-lg font-bold text-festa-white">{step.title}</h3>
                  </div>
                  <p className="text-festa-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual - phone with flying photos */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[600px] flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Central phone */}
            <motion.div style={{ y: phoneY }} className="relative z-10">
              <div className="absolute inset-0 bg-festa-champagne/15 rounded-[3rem] blur-[30px] scale-90" />
              <img
                src="/celular-vhania.png"
                alt="Galeria de fotos da festa — Festa Click"
                className="relative z-10 h-[320px] sm:h-[380px] md:h-[440px] w-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* QR Code bubble */}
            <motion.div
              style={{ scale: qrScale, opacity: qrOpacity }}
              className="absolute z-20 top-[5%] right-[5%] bg-white p-3 rounded-2xl shadow-[0_0_30px_rgba(230,194,128,0.3)] border-2 border-festa-champagne/30"
            >
              <img
                src="/qrcode.png"
                alt="QR Code da festa"
                className="w-20 h-20 object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Flying photos */}
            <motion.div
              style={{ opacity: photo1Opacity, x: photo1X }}
              className="absolute z-20 top-[35%] left-[5%] w-20 h-20 md:w-24 md:h-24 rounded-xl bg-festa-dark border border-festa-champagne/20 overflow-hidden shadow-xl rotate-[-6deg]"
            >
              <div className="w-full h-full bg-gradient-to-br from-festa-champagne/30 to-festa-coffee/50 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: photo2Opacity, x: photo2X }}
              className="absolute z-20 top-[50%] right-[5%] w-20 h-20 md:w-24 md:h-24 rounded-xl bg-festa-dark border border-festa-rosegold/20 overflow-hidden shadow-xl rotate-[8deg]"
            >
              <div className="w-full h-full bg-gradient-to-br from-festa-rosegold/30 to-festa-coffee/50 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: photo3Opacity }}
              className="absolute z-20 bottom-[10%] left-[10%] w-16 h-16 md:w-20 md:h-20 rounded-xl bg-festa-dark border border-festa-amber/20 overflow-hidden shadow-xl rotate-[4deg]"
            >
              <div className="w-full h-full bg-gradient-to-br from-festa-amber/30 to-festa-coffee/50 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
            </motion.div>

            {/* Gallery mini-grid */}
            <motion.div
              style={{ opacity: galleryOpacity, scale: galleryScale }}
              className="absolute z-30 bottom-[4%] left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl"
            >
              <p className="text-[10px] text-festa-champagne font-bold tracking-wider uppercase text-center mb-2">Galeria reunida</p>
              <div className="grid grid-cols-4 gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-lg ${i % 3 === 0 ? 'bg-festa-champagne/30' : i % 3 === 1 ? 'bg-festa-rosegold/30' : 'bg-festa-amber/30'}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Quero+criar+uma+galeria+para+minha+festa."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-festa-champagne text-festa-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(230,194,128,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Criar minha galeria agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FestaClickExperience;
