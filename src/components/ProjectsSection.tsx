import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
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

  const projects = [
    {
      name: 'Vhânia Flor',
      type: 'Galeria de Fotos',
      date: '26/09/2026',
      link: 'https://vhania-moments-hub.lovable.app',
      theme: 'from-festa-dark to-festa-black'
    },
    {
      name: 'Julia Nilson',
      type: '15 Anos',
      date: '13/09',
      link: 'https://julias-fifteen-album.lovable.app',
      theme: 'from-festa-black to-festa-coffee/20'
    }
  ];

  return (
    <section id="projetos" ref={sectionRef} className="py-24 bg-festa-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <AnimatedTitle className="text-3xl md:text-5xl font-bold mb-4">
            Projetos que viraram <span className="text-festa-champagne">memórias</span>
          </AnimatedTitle>
          <p className="text-festa-white/60">Explore galerias reais criadas pela Festa Click.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-festa-champagne/30 transition-all duration-500">
              
              {/* Browser Mockup Top */}
              <div className="h-10 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto w-1/2 bg-white/5 rounded text-[10px] text-center py-1 text-white/30 truncate px-2">
                  {project.link.replace('https://', '')}
                </div>
              </div>

              {/* Content Area */}
              <div className={`p-8 pt-12 md:p-12 aspect-[4/3] bg-gradient-to-b ${project.theme} flex flex-col justify-between relative`}>
                <div>
                  <div className="text-xs font-bold tracking-widest text-festa-champagne mb-2 uppercase">{project.type}</div>
                  <h3 className="text-3xl font-display font-bold mb-1">{project.name}</h3>
                  <p className="text-festa-white/50">{project.date}</p>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-festa-champagne hover:text-festa-black w-fit transition-colors duration-300 font-semibold text-sm"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>

                {/* Subtle phone shadow/mockup edge in bottom corner */}
                <div className="absolute -bottom-10 -right-10 w-48 h-64 bg-festa-black rounded-3xl border-8 border-white/10 transform rotate-12 opacity-50 group-hover:-translate-y-4 transition-transform duration-500"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
