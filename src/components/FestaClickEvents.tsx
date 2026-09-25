import { motion } from 'framer-motion';
import { Star, Cake, CalendarHeart, GraduationCap, Wine, Users, PartyPopper, Briefcase, GlassWater, Sparkles } from 'lucide-react';

const FestaClickEvents = () => {
  const eventRows = [
    [
      { name: '15 Anos', icon: <Star className="w-4 h-4" />, size: 'lg' },
      { name: 'Casamentos', icon: <CalendarHeart className="w-4 h-4" />, size: 'xl' },
      { name: 'Aniversários', icon: <Cake className="w-4 h-4" />, size: 'lg' },
    ],
    [
      { name: 'Formaturas', icon: <GraduationCap className="w-4 h-4" />, size: 'md' },
      { name: 'Bodas', icon: <Wine className="w-4 h-4" />, size: 'lg' },
      { name: 'Chás de bebê', icon: <Users className="w-4 h-4" />, size: 'md' },
      { name: 'Festas de família', icon: <PartyPopper className="w-4 h-4" />, size: 'lg' },
    ],
    [
      { name: 'Eventos corporativos', icon: <Briefcase className="w-4 h-4" />, size: 'lg' },
      { name: 'Confraternizações', icon: <GlassWater className="w-4 h-4" />, size: 'md' },
      { name: 'E muito mais', icon: <Sparkles className="w-4 h-4" />, size: 'lg' },
    ],
  ];

  return (
    <section className="py-24 md:py-32 bg-festa-dark border-t border-white/5 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-festa-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <p className="text-festa-champagne text-sm font-semibold tracking-widest uppercase mb-6">Atendemos</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
              Para qualquer momento que merece ser <span className="text-festa-champagne">lembrado.</span>
            </h2>
            <p className="text-lg text-festa-white/60 mb-8 leading-relaxed">
              A Festa Click pode acompanhar diferentes tipos de celebração — de festas íntimas de família a grandes eventos corporativos.
            </p>
            <p className="text-sm text-festa-white/40 mb-8">
              Atendemos presencialmente em <span className="text-festa-white/70">Palhoça, Florianópolis, São José</span> e toda a região de Santa Catarina — e digitalmente para todo o Brasil.
            </p>
            <a
              href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Festa+Click+para+o+meu+evento."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-festa-champagne/40 text-festa-champagne px-7 py-3 rounded-full font-semibold hover:bg-festa-champagne hover:text-festa-black transition-all duration-300"
            >
              Falar sobre meu evento
            </a>
          </div>

          {/* Events grid — staggered layout */}
          <div className="flex flex-col gap-3">
            {eventRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap gap-3 justify-center">
                {row.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: (rowIdx * 3 + i) * 0.07 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 bg-white/5 border border-white/10 hover:border-festa-champagne/40 hover:bg-white/8 px-5 py-3 rounded-full transition-all duration-300 cursor-default
                      ${event.size === 'xl' ? 'text-base font-bold' : event.size === 'lg' ? 'text-sm font-semibold' : 'text-xs font-medium'}
                    `}
                  >
                    <span className="text-festa-champagne">{event.icon}</span>
                    <span className="text-festa-white">{event.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}

            {/* Phones as proof */}
            <div className="mt-6 flex justify-center gap-6 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-festa-champagne/10 rounded-[2rem] blur-[20px]" />
                <img src="/celular-vhania.png" alt="Galeria Vhânia Flor" className="relative z-10 h-40 w-auto object-contain" loading="lazy" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-festa-rosegold/10 rounded-[2rem] blur-[20px]" />
                <img src="/celular-julia.png" alt="Galeria Julia Nilson" className="relative z-10 h-32 w-auto object-contain" loading="lazy" />
              </motion.div>
            </div>
            <p className="text-center text-xs text-festa-white/35 tracking-widest mt-2">Projetos reais da Festa Click</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FestaClickEvents;
