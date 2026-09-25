import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-festa-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Fale com a <span className="text-festa-champagne">Festa Click</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          <a 
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Festa+Click."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 hover:border-festa-champagne hover:bg-white/10 px-8 py-6 rounded-2xl w-full md:w-auto transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-festa-black rounded-full flex items-center justify-center text-festa-champagne group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-sm text-festa-white/50 mb-1">WhatsApp</span>
              <span className="block font-bold text-lg text-festa-white">(48) 99201-9130</span>
            </div>
          </a>

          <a 
            href="mailto:vzm12112011@gmail.com"
            className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 hover:border-festa-champagne hover:bg-white/10 px-8 py-6 rounded-2xl w-full md:w-auto transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-festa-black rounded-full flex items-center justify-center text-festa-champagne group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-sm text-festa-white/50 mb-1">E-mail</span>
              <span className="block font-bold text-lg text-festa-white">vzm12112011@gmail.com</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
