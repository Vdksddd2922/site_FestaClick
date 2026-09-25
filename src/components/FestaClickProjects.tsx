import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const FestaClickProjects = () => {
  const projects = [
    {
      name: 'Vhânia Flor',
      type: 'Galeria de Fotos',
      date: '26/09/2026',
      link: 'https://vhania-moments-hub.lovable.app',
      phone: '/celular-vhania.png',
      phoneAlt: 'Mockup do site da galeria Vhânia Flor — Festa Click',
      accent: 'from-festa-champagne/20 to-festa-coffee/10',
      glow: 'bg-festa-champagne/15',
      tag: 'text-festa-champagne border-festa-champagne/30',
    },
    {
      name: 'Julia Nilson',
      type: '15 Anos',
      date: '13 · 09',
      link: 'https://julias-fifteen-album.lovable.app',
      phone: '/celular-julia.png',
      phoneAlt: 'Mockup do site da galeria Julia Nilson 15 anos — Festa Click',
      accent: 'from-festa-rosegold/20 to-festa-dark/10',
      glow: 'bg-festa-rosegold/15',
      tag: 'text-festa-rosegold border-festa-rosegold/30',
    },
  ];

  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#080706] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-festa-champagne/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-festa-champagne text-sm font-semibold tracking-widest uppercase mb-4">Portfólio real</p>
          <AnimatedTitle className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            Projetos que viraram <span className="text-festa-champagne">memórias</span>
          </AnimatedTitle>
          <p className="text-festa-white/55">Explore galerias reais criadas pela Festa Click.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
              <div className="absolute inset-0 bg-festa-dark/80" />

              {/* Browser bar */}
              <div className="relative z-10 flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 bg-white/5 rounded-md text-[11px] text-white/30 text-center py-1 px-3 truncate">
                  {project.link.replace('https://', '')}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start min-h-[280px]">
                
                {/* Phone mockup */}
                <div className="shrink-0 relative">
                  <div className={`absolute inset-0 ${project.glow} rounded-[2rem] blur-[25px] scale-90`} />
                  <motion.img
                    src={project.phone}
                    alt={project.phoneAlt}
                    className="relative z-10 h-[220px] sm:h-[200px] md:h-[230px] w-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                    whileHover={{ scale: 1.04, rotate: -2 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left pt-2 sm:pt-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold tracking-wider uppercase ${project.tag} bg-black/20 backdrop-blur-sm w-fit`}>
                    {project.type}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-festa-white mb-1">{project.name}</h3>
                    <p className="text-festa-white/45 text-sm">{project.date}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-festa-champagne hover:text-festa-black border border-white/15 hover:border-festa-champagne px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 w-fit group/btn mt-2"
                  >
                    Ver projeto
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-festa-white/30 tracking-widest mt-12 uppercase">
          Clique em "Ver projeto" para acessar a galeria real
        </p>
      </div>
    </section>
  );
};

export default FestaClickProjects;
