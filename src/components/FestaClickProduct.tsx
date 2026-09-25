import { motion } from 'framer-motion';
import { LayoutTemplate, QrCode, Images, Palette, Sparkles } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const FestaClickProduct = () => {
  const items = [
    {
      icon: <LayoutTemplate className="w-7 h-7" />,
      title: 'Site Personalizado',
      desc: 'Uma página criada especialmente para o seu evento — com nome, data e identidade da festa.',
      accent: 'festa-champagne',
      visual: (
        <div className="w-full h-32 rounded-xl bg-festa-black border border-white/10 overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-festa-champagne/10 to-transparent" />
          <img src="/celular-julia.png" alt="" className="h-28 w-auto object-contain opacity-80" loading="lazy" />
        </div>
      ),
    },
    {
      icon: <QrCode className="w-7 h-7" />,
      title: 'QR Code Exclusivo',
      desc: 'Um acesso simples para seus convidados entrarem na galeria — sem instalar app.',
      accent: 'festa-amber',
      visual: (
        <div className="w-full h-32 rounded-xl bg-festa-black border border-white/10 overflow-hidden flex items-center justify-center">
          <div className="relative p-3 bg-white rounded-xl">
            <img src="/qrcode.png" alt="QR Code de exemplo" className="w-20 h-20 object-contain" loading="lazy" />
            <div
              className="absolute left-3 right-3 h-0.5 bg-festa-champagne/80"
              style={{ animation: 'scanLine 2s ease-in-out infinite', top: '12px' }}
            />
          </div>
        </div>
      ),
    },
    {
      icon: <Images className="w-7 h-7" />,
      title: 'Galeria de Fotos e Vídeos',
      desc: 'Os convidados enviam os registros feitos durante a festa. Tudo fica reunido em um único álbum.',
      accent: 'festa-rosegold',
      visual: (
        <div className="w-full h-32 rounded-xl bg-festa-black border border-white/10 overflow-hidden p-3 grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`rounded-lg ${i % 3 === 0 ? 'bg-festa-champagne/25' : i % 3 === 1 ? 'bg-festa-rosegold/25' : 'bg-festa-amber/25'}`}
            />
          ))}
        </div>
      ),
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'Arte Personalizada',
      desc: 'Uma arte bonita com o QR Code para colocar no telão, impressa ou compartilhada nas redes.',
      accent: 'festa-cream',
      visual: (
        <div className="w-full h-32 rounded-xl bg-festa-black border border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-festa-champagne/20 via-festa-rosegold/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-festa-champagne">FESTA</p>
              <p className="text-xs text-festa-white/50 tracking-widest">CLICK</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Experiência para Convidados',
      desc: 'Um jeito simples, moderno e elegante de participar do álbum da festa pelo celular.',
      accent: 'festa-champagne',
      visual: (
        <div className="w-full h-32 rounded-xl bg-festa-black border border-white/10 overflow-hidden flex items-center justify-center">
          <img src="/celular-vhania.png" alt="" className="h-28 w-auto object-contain opacity-80" loading="lazy" />
        </div>
      ),
    },
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#080706] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-festa-champagne/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-festa-champagne text-sm font-semibold tracking-widest uppercase mb-4">O que entregamos</p>
          <AnimatedTitle className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
            Tudo para transformar sua festa em uma<br className="hidden md:block" />
            <span className="text-festa-champagne"> experiência digital</span>
          </AnimatedTitle>
        </div>

        {/* 5 items — editorial layout: 3 top + 2 bottom */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {items.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/4 border border-white/10 rounded-3xl p-5 hover:bg-white/7 hover:border-white/20 transition-all duration-500 group cursor-default flex flex-col gap-4"
            >
              {item.visual}
              <div className={`w-11 h-11 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-${item.accent} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-festa-white mb-1">{item.title}</h3>
                <p className="text-festa-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.slice(3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/4 border border-white/10 rounded-3xl p-5 hover:bg-white/7 hover:border-white/20 transition-all duration-500 group cursor-default flex flex-col md:flex-row gap-5 items-start"
            >
              <div className="shrink-0 w-full md:max-w-[160px]">
                {item.visual}
              </div>
              <div className="flex flex-col gap-3 pt-1">
                <div className={`w-11 h-11 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-${item.accent} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-festa-white">{item.title}</h3>
                <p className="text-festa-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanLine {
          0%, 100% { top: 12px; }
          50% { top: calc(100% - 14px); }
        }
      `}</style>
    </section>
  );
};

export default FestaClickProduct;
