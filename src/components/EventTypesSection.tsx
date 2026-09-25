import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, CalendarHeart, GlassWater, GraduationCap, PartyPopper, Briefcase, Users, Wine, Cake, Star } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const EventTypesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.5)'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const events = [
    { name: '15 anos', icon: <Star /> },
    { name: 'Aniversários', icon: <Cake /> },
    { name: 'Casamentos', icon: <CalendarHeart /> },
    { name: 'Bodas', icon: <Wine /> },
    { name: 'Formaturas', icon: <GraduationCap /> },
    { name: 'Chás de bebê', icon: <Users /> },
    { name: 'Festas de família', icon: <PartyPopper /> },
    { name: 'Eventos corporativos', icon: <Briefcase /> },
    { name: 'Confraternizações', icon: <GlassWater /> },
    { name: 'Outros eventos', icon: <Sparkles /> }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-festa-dark relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <AnimatedTitle className="text-3xl md:text-5xl font-bold mb-16">
          Para qualquer momento que merece ser <span className="text-festa-champagne">lembrado</span>.
        </AnimatedTitle>

        <div className="flex flex-wrap justify-center gap-4">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-festa-champagne/50 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(230,194,128,0.2)] hover:-translate-y-1"
            >
              {React.cloneElement(event.icon as React.ReactElement<any>, { className: 'w-4 h-4 text-festa-champagne' })}
              <span className="text-sm font-medium text-festa-white">{event.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventTypesSection;
