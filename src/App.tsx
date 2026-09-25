import Navbar from './components/Navbar';
import FestaClickHero from './components/FestaClickHero';
import FestaClickExperience from './components/FestaClickExperience';
import FestaClickProduct from './components/FestaClickProduct';
import FestaClickEvents from './components/FestaClickEvents';
import FestaClickProjects from './components/FestaClickProjects';
import { FestaClickCTA, FestaClickContact } from './components/FestaClickCTAContact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-[#080706] min-h-screen font-sans selection:bg-festa-champagne selection:text-festa-black">
      <Navbar />
      
      <main>
        {/* 01 — HERO */}
        <FestaClickHero />

        {/* 02 — EXPERIÊNCIA: QR → Celular → Fotos → Galeria → Memória */}
        <FestaClickExperience />

        {/* 03 — O PRODUTO */}
        <FestaClickProduct />

        {/* 04 — TIPOS DE EVENTOS */}
        <FestaClickEvents />

        {/* 05 — PROJETOS REAIS */}
        <FestaClickProjects />

        {/* 06 — CTA */}
        <FestaClickCTA />

        {/* 07 — CONTATO */}
        <FestaClickContact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
