import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const FestaClickCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with phones */}
      <div className="absolute inset-0 bg-festa-champagne" />
      {/* Decorative texture */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-festa-amber/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Faded phones as decoration */}
      <div className="absolute bottom-0 right-0 h-full overflow-hidden pointer-events-none opacity-15">
        <img src="/celular-vhania.png" alt="" className="h-full w-auto object-contain object-bottom translate-x-16 translate-y-8" loading="lazy" />
      </div>
      <div className="absolute bottom-0 left-0 h-4/5 overflow-hidden pointer-events-none opacity-10">
        <img src="/celular-julia.png" alt="" className="h-full w-auto object-contain object-bottom -translate-x-16 translate-y-8" loading="lazy" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-festa-black leading-tight">
            Sua festa está chegando?
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-festa-coffee">
            Vamos criar a galeria dos seus momentos?
          </h3>
          <p className="text-lg text-festa-dark/70 max-w-xl font-medium">
            Conte um pouco sobre o seu evento e veja como funciona a Festa Click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.a
              href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Quero+criar+uma+galeria+para+minha+festa."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-festa-black text-festa-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(10,9,8,0.2)] hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(10,9,8,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FestaClickContact = () => {
  return (
    <section id="contato" className="py-24 bg-festa-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
          Fale com a <span className="text-festa-champagne">Festa Click</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Festa+Click."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-festa-champagne hover:bg-white/8 px-8 py-6 rounded-2xl w-full md:w-auto transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center text-festa-champagne group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-sm text-festa-white/45 mb-0.5">WhatsApp</span>
              <span className="block font-bold text-xl text-festa-white">(48) 99201-9130</span>
            </div>
          </a>
          <a
            href="mailto:vzm12112011@gmail.com"
            className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-festa-champagne hover:bg-white/8 px-8 py-6 rounded-2xl w-full md:w-auto transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center text-festa-champagne group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-sm text-festa-white/45 mb-0.5">E-mail</span>
              <span className="block font-bold text-lg text-festa-white break-all">vzm12112011@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { FestaClickCTA, FestaClickContact };
