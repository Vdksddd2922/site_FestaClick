import React from 'react';
import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-festa-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-8 h-8 text-festa-champagne" />
              <span className="font-display font-bold text-2xl tracking-wide text-festa-white">
                FESTA<span className="text-festa-champagne">CLICK</span>
              </span>
            </div>
            <p className="text-festa-white/70 max-w-sm">
              Sua festa. Seus momentos. Sua história.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-festa-white">Navegação</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-festa-white/60 hover:text-festa-champagne transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="text-festa-white/60 hover:text-festa-champagne transition-colors">Como funciona</a></li>
              <li><a href="#servicos" className="text-festa-white/60 hover:text-festa-champagne transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-festa-white/60 hover:text-festa-champagne transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-festa-white/60 hover:text-festa-champagne transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-bold text-lg mb-6 text-festa-white">Contato</h4>
             <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/5548992019130" target="_blank" rel="noopener noreferrer" className="text-festa-white/60 hover:text-festa-champagne transition-colors">
                  (48) 99201-9130
                </a>
              </li>
              <li>
                <a href="mailto:vzm12112011@gmail.com" className="text-festa-white/60 hover:text-festa-champagne transition-colors">
                  vzm12112011@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/festaclick.br/" target="_blank" rel="noopener noreferrer" className="text-festa-white/60 hover:text-festa-champagne transition-colors">
                  @festaclick.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-festa-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Festa Click. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-festa-champagne cursor-pointer transition-colors">Termos de uso</span>
            <span className="hover:text-festa-champagne cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
