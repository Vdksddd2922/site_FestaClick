import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const CTASection = () => {
  return (
    <section className="py-24 bg-festa-champagne relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-festa-amber/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <AnimatedTitle className="text-4xl md:text-6xl font-bold text-festa-black mb-4">
          Sua festa está chegando?
        </AnimatedTitle>
        <h3 className="text-2xl md:text-4xl font-semibold text-festa-coffee mb-8">
          Vamos criar a galeria dos seus momentos?
        </h3>
        
        <p className="text-lg text-festa-dark/80 mb-10 max-w-2xl mx-auto font-medium">
          Conte um pouco sobre o seu evento e veja como funciona a Festa Click.
        </p>

        <a 
          href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Quero+criar+uma+galeria+para+minha+festa."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-festa-black text-festa-white px-10 py-5 rounded-full font-bold text-lg hover:bg-festa-dark hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(10,9,8,0.2)]"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
