/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, ArrowUpRight, CheckCircle2, Plus } from 'lucide-react';

// --- Shared Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-border py-4 text-brand-text' : 'py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-serif italic text-2xl font-medium tracking-tight">Martin Belgio</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest font-medium">
          <Link to="/reporte" className="hover:text-brand-orange transition-colors">Reporte</Link>
          <Link to="/raices" className="hover:text-brand-orange transition-colors">Echar Raíces</Link>
          <Link to="/acompanamiento" className="hover:text-brand-orange transition-colors">Acompañamiento</Link>
          <Link to="/#calculador" className={`px-6 py-2.5 border rounded-full transition-all ${scrolled ? 'border-brand-text/20 hover:bg-brand-text hover:text-brand-bg' : 'border-white/40 hover:bg-white hover:text-brand-text'}`}>Calculá tu carta</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border p-8 flex flex-col gap-6 text-center md:hidden"
          >
            <Link to="/reporte">Reporte</Link>
            <Link to="/raices">Echar Raíces</Link>
            <Link to="/acompanamiento">Acompañamiento</Link>
            <Link to="/#calculador" className="btn-pill btn-solid">Calculá tu carta</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-brand-border">
    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="footer-brand font-serif italic text-3xl">Martin Belgio</div>
      <div className="flex gap-8 text-sm font-medium opacity-60">
        <a href="https://instagram.com/martinbelgio" target="_blank" rel="noopener" className="hover:opacity-100 transition-opacity">Instagram</a>
        <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener" className="hover:opacity-100 transition-opacity">WhatsApp</a>
        <Link to="/#calculador" className="hover:opacity-100 transition-opacity">Calculá tu carta</Link>
      </div>
    </div>
    <div className="mt-20 text-center text-[10px] uppercase tracking-widest opacity-30">
      © {new Date().getFullYear()} Martin Belgio — Diseño Humano para la vida real.
    </div>
  </footer>
);

const Quote = () => (
  <section className="relative py-64 px-6 text-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
        className="w-full h-full object-cover"
        alt="Mountain landscape"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-[2px]"></div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <h2 className="text-5xl md:text-7xl font-serif italic leading-tight mb-12 text-brand-text">
        "No tenés que creer en el<br />
        Diseño Humano. Solo tenés<br />
        que <span className="highlight-orange">experimentarlo.</span>"
      </h2>
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">— Ra Uru Hu</span>
    </motion.div>
  </section>
);

// --- Home Page Components ---

const HomeHero = () => (
  <header className="relative min-h-screen flex items-center pb-20 overflow-hidden" style={{backgroundColor: '#2a3d2a'}}>
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/VerdeHero.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top"
        alt="Parque"
      />
      <div className="absolute inset-0 bg-brand-text/45"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <div className="inline-block mb-10 px-5 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.4em] text-brand-orange font-bold bg-white/5 backdrop-blur-sm">
          Diseño Humano para la vida real
        </div>
        <h1 className="text-5xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-12 text-white">
          Naciste con un<br />
          <span className="italic text-brand-orange">diseño único.</span><br />
          <span>Volvé a vos.</span>
        </h1>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-end">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
            No es un proyecto de optimización personal. Es recuperar tu manual de usuario original y entender cómo funciona tu energía, <span className="font-hand text-4xl text-brand-orange ml-1">sin urgencias.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <a href="#servicios" className="px-12 py-6 bg-brand-orange text-brand-bg rounded-full font-medium hover:scale-105 transition-all shadow-2xl shadow-brand-orange/20">
              Empezar el viaje
            </a>
            <div className="text-sm text-white/40 font-medium tracking-[0.2em] uppercase">
              ✦ Tu estrategia<br />✦ Tu autoridad
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Artistic Floating Elements */}
    <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-brand-orange rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full"></div>
      </motion.div>
    </div>
  </header>
);

const HomeMarquee = () => (
  <div className="bg-brand-orange text-brand-bg py-6 overflow-hidden border-y border-brand-orange/20 mt-20">
    <div className="flex whitespace-nowrap animate-marquee">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className="font-serif italic text-2xl tracking-wider px-8">
          TU DISEÑO ✦ TU ESTRATEGIA ✦ TU AUTORIDAD ✦ SIN URGENCIAS ✦ TU PERFIL ✦ A TU RITMO ✦ VOLVER A VOS ✦
        </span>
      ))}
    </div>
  </div>
);

const HomeManifesto = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-[1.2fr_1fr] gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">01 — El Contexto</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12">
          El entorno escribe sobre lo que sos.<br />
          Pero lo que sos <span className="italic text-brand-green">no desaparece.</span>
        </h2>
        <div className="space-y-8 text-xl opacity-80 leading-relaxed max-w-xl font-light">
          <p>
            Todos llegamos al mundo con un diseño. Una forma particular de procesar la energía, de tomar decisiones, de relacionarnos con el trabajo y con los demás. Eso no se elige: viene dado.
          </p>
          <p>
            La familia tiene expectativas. La escuela tiene moldes. La cultura tiene una idea muy concreta de quién deberías ser. Y vos, que querés encajar, aprendés. Aprendés tan bien que con el tiempo ya no sabés qué parte de vos es tuya.
          </p>
          <p className="font-serif italic text-2xl text-brand-text">
            El Diseño Humano no ofrece salvación. Lo que ofrece es más modesto y más útil: un mapa. Un registro de lo que estaba antes del aprendizaje.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-px h-40 bg-brand-border hidden lg:block"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="relative"
      >
        <div className="relative aspect-[3/4] mask-blob-1 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
          <img 
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover"
            alt="Artistic nature"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-brand-orange/20 rounded-full -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const HomeAbout = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto border-t border-brand-border">
    <div className="grid md:grid-cols-[1fr_1.5fr] gap-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="aspect-square mask-blob-2 overflow-hidden shadow-2xl mb-12 grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover"
            alt="Martin Belgio"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      
      <div className="flex flex-col justify-center">
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">02 — Quién soy</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12">
          No soy un gurú.<br />
          <span className="italic text-brand-orange">Soy un practicante.</span>
        </h2>
        <div className="space-y-8 text-xl opacity-80 leading-relaxed font-light">
          <p>
            Llegué al Diseño Humano buscando respuestas a un cansancio que no se iba con vacaciones. Encontré una herramienta que no me pedía ser "mejor", sino ser yo mismo.
          </p>
          <p>
            Mi enfoque es práctico y despojado de misticismo innecesario. No te voy a decir qué hacer con tu vida, te voy a mostrar cómo funciona tu motor para que vos tomes tus propias decisiones con claridad.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HomeServices = () => {
  const services = [
    {
      id: 'reporte',
      meta: 'Portal personal · Multiformato',
      name: 'Reporte Personalizado',
      color: 'text-brand-blue',
      href: '/reporte'
    },
    {
      id: 'raices',
      meta: 'Sesión en vivo · 1 hora',
      name: 'Lectura Echar Raíces',
      color: 'text-brand-green',
      href: '/raices'
    },
    {
      id: 'acompanamiento',
      meta: 'Programa inmersivo · 4 semanas',
      name: 'Programa de Acompañamiento',
      color: 'text-brand-orange',
      href: '/acompanamiento'
    }
  ];

  return (
    <section id="servicios" className="py-40 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">03 — El Trabajo</span>
        <h2 className="text-5xl md:text-7xl font-serif">Formas de <span className="italic text-brand-blue">leer tu diseño</span></h2>
      </div>

      <div className="space-y-0 border-t border-brand-border">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={service.href}
              className="group grid md:grid-cols-[1fr_2fr_auto] items-center py-14 border-b border-brand-border hover:bg-brand-text/5 transition-all duration-500 px-4 -mx-4 rounded-xl"
            >
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{service.meta}</span>
              <span className={`text-4xl md:text-6xl font-serif italic transition-all duration-500 group-hover:pl-8 ${service.color}`}>{service.name}</span>
              <div className="w-16 h-16 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-500">
                <ArrowUpRight size={24} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HomeCalculator = () => (
  <section id="calculador" className="py-40 px-6 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/Mar.jpg" className="w-full h-full object-cover" alt="Mar" />
      <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[1px]"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-24 items-center">
      <div>
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">04 — Tu punto de partida</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-10">
          Calculá tu carta.<br />
          <span className="italic text-brand-blue">Es gratis.</span>
        </h2>
        <p className="text-xl opacity-80 leading-relaxed mb-10 font-light">
          Necesitás tu fecha, hora exacta y ciudad de nacimiento. La hora importa: una diferencia de una hora puede cambiar tu tipo o tu autoridad.
        </p>
        <ul className="space-y-6">
          {['Fecha de nacimiento', 'Hora exacta', 'Ciudad'].map(item => (
            <li key={item} className="flex items-center gap-4 text-lg opacity-60">
              <div className="w-5 h-5 rounded-full border border-brand-orange flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-brand-border">
          <iframe
            id="chartWidget"
            src="https://neutrinoplatform.com/widget/chart/new?apiKey=a61fa305b92964b4afd2ec35a29e1251b9db90e8"
            className="w-full h-[600px] border-none rounded-[1.5rem]"
            title="Calculadora de Diseño Humano"
          ></iframe>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  </section>
);

const HomeNewsletter = () => (
  <section className="grid md:grid-cols-2 border-t border-brand-border">
    <div className="h-[600px] relative overflow-hidden group">
      <img
        src="/Escrito.jpg"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale"
        alt="Escritura"
      />
      <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply"></div>
    </div>
    <div className="p-12 md:p-24 flex flex-col justify-center bg-brand-bg">
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Newsletter</span>
      <h2 className="text-5xl md:text-7xl font-serif mb-10">Volver a <span className="italic text-brand-orange">Narrarse</span></h2>
      <p className="text-xl opacity-80 leading-relaxed mb-12 max-w-md font-light">
        Reflexiones semanales sobre Diseño Humano, la cultura de la optimización y el arte de dejar de intentar ser otra persona.
      </p>
      <div>
        <a href="#" className="inline-flex items-center justify-center px-10 py-5 border border-brand-text/20 rounded-full hover:bg-brand-text hover:text-brand-bg transition-all font-medium">
          Leer en Substack ↗
        </a>
      </div>
    </div>
  </section>
);

// --- Reporte Page Components ---

const ReporteHero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background: ventana */}
    <div className="absolute inset-0 z-0">
      <img
        src="/Ventana.jpg"
        className="w-full h-full object-cover"
        alt="Ventana al mar"
      />
      <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[1px]"></div>
    </div>

    <div className="relative z-10 pt-48 pb-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Acceso a plataforma · Multiformato</span>
        <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-12">
          Tu Carta en<br />
          <span className="italic text-brand-blue">Profundidad</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-lg mb-12 font-light">
          Portal personal con reporte a medida, videos, audios y workbook. Tu diseño documentado para experimentarlo a tu propio ritmo.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="https://wa.me/TUNUMERO?text=Hola%20Martin%2C%20quiero%20pedir%20el%20Reporte%20(Argentina)" className="px-10 py-5 bg-brand-blue text-brand-text rounded-full font-medium hover:scale-105 transition-transform shadow-xl shadow-brand-blue/20">
            Pedir desde Argentina
          </a>
          <a href="https://wa.me/TUNUMERO?text=Hola%20Martin%2C%20quiero%20pedir%20el%20Reporte%20(Exterior)" className="px-10 py-5 border border-brand-text/20 rounded-full font-medium hover:bg-brand-text hover:text-brand-bg transition-all">
            Pedir desde el Exterior
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ReporteIntro = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto border-t border-brand-border grid md:grid-cols-[1fr_1.5fr] gap-24">
    <div>
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Qué es</span>
      <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">Mucho más que<br /><span className="italic text-brand-blue">un documento</span></h2>
    </div>
    <div className="space-y-8 text-xl md:text-2xl opacity-80 leading-relaxed font-light">
      <p>Te doy acceso a un portal personal donde vas a encontrar tu reporte escrito a medida, acompañado de videos, audios y un workbook imprimible.</p>
      <p className="font-serif italic text-3xl text-brand-text">Las herramientas exactas para que empieces a experimentar, registrar tu proceso y volver a vos cuando lo necesites, escrito sin jerga y directo al punto.</p>
      <p>Un recurso que podés releer, subrayar y consultar cuando necesités volver a vos, sin depender de apps ni plataformas efímeras.</p>
    </div>
  </section>
);

const PhotoBreak = () => (
  <div className="h-[70vh] relative overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1920" 
      className="w-full h-full object-cover grayscale"
      alt="Artistic desk"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-brand-text/20"></div>
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <p className="text-4xl md:text-7xl font-serif italic text-brand-bg leading-tight text-center max-w-5xl">
        "Tu diseño, documentado para<br />volver cuando lo necesites."
      </p>
    </div>
  </div>
);

const ReporteFeatures = () => {
  const features = [
    { num: '01', title: 'Tipo y Estrategia', desc: 'Tu tipo energético define cómo operás en el mundo. La estrategia es el protocolo que, cuando se respeta, genera menos fricción y más satisfacción.' },
    { num: '02', title: 'Autoridad interna', desc: 'El sistema de toma de decisiones que está en tu cuerpo, no en tu cabeza. Cómo reconocerla en tiempo real.' },
    { num: '03', title: 'Centros definidos e indefinidos', desc: 'Los definidos son fuentes estables de energía. Los indefinidos son las zonas donde más fácilmente te perdés en narrativas ajenas.' },
    { num: '04', title: 'Canales y Puertas activas', desc: 'Las conexiones específicas entre centros que definen habilidades y formas de procesar la realidad hardcoded en tu diseño.' },
    { num: '05', title: 'Perfil', desc: 'El papel que viniste a encarnar. Cómo aprendés, cómo impactás, cómo se ve tu arco de vida cuando se despliega sin forzarlo.' },
    { num: '06', title: 'Interpretación aplicada', desc: 'Todo lo anterior en lenguaje concreto: cómo se ve en el trabajo, en los vínculos, en la forma en que tomás decisiones día a día.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Lo que cubre el reporte</span>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">Cada capa de tu diseño, <span className="italic highlight-blue">explicada</span></h2>
        <p className="text-lg opacity-60 leading-relaxed">No es una lista de características. Es una lectura aplicada de cada elemento de tu carta, conectada con situaciones concretas de tu vida.</p>
      </div>
      <div className="border-t border-brand-border">
        {features.map((f, idx) => (
          <motion.div 
            key={f.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-[60px_1fr] gap-8 py-10 border-b border-brand-border"
          >
            <span className="text-xs font-bold opacity-30 mt-2">{f.num}</span>
            <div>
              <h3 className="text-xl font-medium mb-2">{f.title}</h3>
              <p className="opacity-60 leading-relaxed max-w-2xl">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ForWhom = () => (
  <section className="py-32 px-6 bg-brand-text text-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Para quién</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Este reporte<br />es para vos si...</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
        {[
          'Calculaste tu carta pero nunca supiste qué hacer con esa información.',
          'Querés tener algo concreto para estudiar a tu ritmo, sin presión de sesión.',
          'Preferís procesar la información en privado, con calma, más de una vez.',
          'Buscás algo escrito, aplicado y sin jerga, no solo una descripción abstracta.'
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 border border-white/10 rounded-xl bg-white/5 text-lg leading-relaxed relative"
          >
            <span className="absolute top-4 left-4 text-white/20">—</span>
            <p className="pl-6">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 px-6 bg-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-40 mb-6 block">Inversión</span>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Una sola vez.<br />
            <span className="italic text-brand-blue">Tuyo para siempre.</span>
          </h2>
          <p className="text-xl opacity-70 leading-relaxed mb-6">El reporte es tuyo. Podés volver al portal las veces que quieras, sin vencimiento.</p>
          <p className="text-xl opacity-70 leading-relaxed mb-12">El precio varía según el lugar de residencia. Consultame por WhatsApp y coordinamos los detalles.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-8 py-4 bg-brand-blue text-brand-bg rounded-full font-medium hover:scale-105 transition-transform">Consultar desde Argentina</a>
            <a href="#" className="px-8 py-4 border border-brand-text/20 rounded-full font-medium hover:bg-brand-text hover:text-brand-bg transition-all">Consultar desde el Exterior</a>
          </div>
        </div>
        <div className="space-y-6">
          {[
            { region: 'Argentina', sub: 'Precio en pesos ARS', color: 'bg-brand-blue' },
            { region: 'Exterior', sub: 'Precio en USD', color: 'border border-brand-text/20' }
          ].map(card => (
            <div key={card.region} className={`p-10 rounded-2xl ${card.color === 'bg-brand-blue' ? 'bg-brand-blue text-brand-bg' : 'border border-brand-text/20'}`}>
              <div className="text-4xl md:text-5xl font-serif italic mb-2">{card.region}</div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-8">{card.sub}</div>
              <button className={`px-6 py-3 rounded-full text-sm font-medium ${card.color === 'bg-brand-blue' ? 'bg-brand-text text-brand-bg' : 'bg-brand-text text-brand-bg'}`}>
                Consultar precio ↗
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: '¿Necesito saber algo de Diseño Humano antes de pedir el reporte?', a: 'No. El reporte está escrito para que puedas entenderlo sin conocimiento previo. Si ya sabés algo, mejor: vas a poder ir más rápido sobre las partes que te interesan.' },
    { q: '¿Qué necesito para que hagas el reporte?', a: 'Tu fecha, hora exacta y ciudad de nacimiento. La hora importa: puede cambiar tu tipo o tu autoridad. Si no la tenés, podés pedirla en tu partida de nacimiento o preguntarle a tu familia.' },
    { q: '¿Cuánto tarda en estar listo?', a: 'En general entre 5 y 7 días. Una vez que confirmás el pago y me enviás los datos, te aviso cuando el portal esté listo.' },
    { q: '¿Puedo pedir una consulta después de leer el reporte?', a: 'Sí. Muchas personas hacen la lectura Echar Raíces o el Programa de Acompañamiento después del reporte, para profundizar en lo que encontraron.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Preguntas frecuentes</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Preguntas<br /><span className="italic highlight-blue">Frecuentes</span></h2>
      <div className="max-w-3xl border-t border-brand-border">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border-b border-brand-border">
            <summary className="flex justify-between items-center py-8 cursor-pointer list-none">
              <span className="text-xl font-medium pr-8">{faq.q}</span>
              <Plus className="opacity-40 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="pb-8 opacity-60 leading-relaxed text-lg max-w-2xl">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

// --- Raices Page Components ---

const RaicesHero = () => (
  <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-20 items-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Sesión en vivo · 1 hora</span>
      <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-12">
        Lectura<br />
        <span className="italic text-brand-green">Echar Raíces</span>
      </h1>
      <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-lg mb-12 font-light">
        Para quienes acaban de calcular su carta o nunca la leyeron en vivo. Una hora de conversación real, con tu carta como punto de partida y tu vida como contexto.
      </p>
      <div className="flex flex-wrap gap-6">
        <a href="https://wa.me/TUNUMERO?text=Hola%20Martin%2C%20quiero%20agendar%20la%20lectura%20Echar%20Ra%C3%ADces" className="px-10 py-5 bg-brand-green text-brand-bg rounded-full font-medium hover:scale-105 transition-transform shadow-xl shadow-brand-green/20">
          Consultar disponibilidad
        </a>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="aspect-[4/5] mask-arch overflow-hidden shadow-2xl grayscale">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000" 
          className="w-full h-full object-cover"
          alt="Hands writing"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  </section>
);

const RaicesIntro = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-brand-border grid md:grid-cols-[1fr_1.5fr] gap-20">
    <div>
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">De qué se trata</span>
      <h2 className="text-4xl md:text-5xl font-serif leading-tight">Una conversación,<br />no una <span className="italic highlight-green">conferencia</span></h2>
    </div>
    <div className="space-y-6 text-xl opacity-70 leading-relaxed">
      <p>Para quienes acaban de calcular su carta o nunca la leyeron en vivo. Diseño Humano tiene una curva de entrada que puede ser intimidante. Esta sesión está pensada para que eso no sea un obstáculo.</p>
      <p>No es una lista de características ni una descripción abstracta de tu tipo. Es una comprensión de cómo funciona tu energía, cómo tomás decisiones de manera óptima, y qué pasa cuando operás en contra de tu diseño.</p>
      <p>Sesión en vivo, por videollamada. Tu carta como punto de partida. Tu vida como contexto.</p>
    </div>
  </section>
);

const RaicesPhotoBreak = () => (
  <div className="h-[60vh] relative overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920" 
      className="w-full h-full object-cover"
      alt="Hands writing"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 to-transparent"></div>
    <div className="absolute bottom-12 left-6 md:left-24">
      <p className="text-3xl md:text-5xl font-serif italic text-brand-bg leading-tight">
        "No es teoría. Es tu energía, tu vida,<br />tu forma de tomar decisiones."
      </p>
    </div>
  </div>
);

const RaicesFeatures = () => {
  const features = [
    { num: '01', title: 'Tipo y Estrategia', desc: 'Tu forma natural de operar en el mundo. La estrategia que, cuando la respetás, genera menos resistencia y más satisfacción.' },
    { num: '02', title: 'Autoridad', desc: 'El sistema de toma de decisiones que está en tu cuerpo antes que en tu mente. Cómo reconocerlo en tiempo real.' },
    { num: '03', title: 'Centros definidos', desc: 'Las fuentes estables de energía en tu carta. Lo que podés dar de manera consistente sin agotarte.' },
    { num: '04', title: 'Centros indefinidos', desc: 'Las zonas donde amplificás la energía de los demás. Ahí es donde más fácilmente perdés el hilo de quién sos.' },
    { num: '05', title: 'Perfil', desc: 'El papel que viniste a encarnar: cómo aprendés, cómo impactás, cómo se ve tu arco de vida sin forzarlo.' },
    { num: '06', title: 'Espacio para preguntas', desc: 'La sesión no es una conferencia. Hay tiempo para conectar lo que escuchás con situaciones concretas de tu vida.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Lo que cubrimos en la sesión</span>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">Tu diseño, de punta a <span className="italic highlight-green">punta</span></h2>
        <p className="text-lg opacity-60 leading-relaxed">En una hora recorremos los fundamentos de tu carta. No todo a la vez: lo que importa, en el orden que importa.</p>
      </div>
      <div className="border-t border-brand-border">
        {features.map((f, idx) => (
          <motion.div 
            key={f.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-[60px_1fr] gap-8 py-10 border-b border-brand-border"
          >
            <span className="text-xs font-bold opacity-30 mt-2">{f.num}</span>
            <div>
              <h3 className="text-xl font-medium mb-2">{f.title}</h3>
              <p className="opacity-60 leading-relaxed max-w-2xl">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const RaicesForWhom = () => (
  <section className="py-32 px-6 bg-brand-text text-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Para quién</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Esta lectura<br />es para vos si...</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
        {[
          'Calculaste tu carta hace poco y querés entender qué significa sin perderte en la teoría.',
          'Tenés preguntas concretas pero no sabés bien por dónde empezar.',
          'Preferís una conversación real a leer solo un documento.',
          'Querés conectar lo que dice el Diseño Humano con situaciones concretas de tu vida.'
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 border border-white/10 rounded-xl bg-white/5 text-lg leading-relaxed relative"
          >
            <span className="absolute top-4 left-4 text-white/20">—</span>
            <p className="pl-6">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RaicesHowItWorks = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-brand-border">
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Cómo funciona</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Simple y <span className="italic highlight-green">sin vueltas</span></h2>
      <div className="border-t border-brand-border">
        {[
          { num: 'I', title: 'Me escribís por WhatsApp', desc: 'Me contás que querés hacer la lectura y te mando los horarios disponibles para encontrar el momento que mejor te quede.' },
          { num: 'II', title: 'Me pasás tus datos de nacimiento', desc: 'Fecha, hora exacta y ciudad. Con eso genero tu carta antes de la sesión para llegar preparado.' },
          { num: 'III', title: 'Nos encontramos por videollamada', desc: 'Una hora, vos y yo, con tu carta en pantalla. Sin PowerPoint ni guión fijo. La sesión va a donde tenga que ir.' }
        ].map((step, idx) => (
          <div key={step.num} className="grid grid-cols-[60px_1fr] gap-8 py-10 border-b border-brand-border">
            <span className="text-xs font-bold opacity-30 mt-2">{step.num}</span>
            <div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="opacity-60 leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RaicesPricing = () => (
  <section className="py-32 px-6 bg-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-40 mb-6 block">Inversión</span>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Una hora.<br />
            <span className="italic text-brand-green">Tu punto de partida.</span>
          </h2>
          <p className="text-xl opacity-70 leading-relaxed mb-12">El precio varía según el lugar de residencia. Escribime por WhatsApp y te paso los detalles.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-8 py-4 bg-brand-green text-brand-bg rounded-full font-medium hover:scale-105 transition-transform">Consultar disponibilidad</a>
          </div>
        </div>
        <div className="space-y-6">
          {[
            { region: 'Argentina', sub: 'Precio en pesos ARS', color: 'bg-brand-green' },
            { region: 'Exterior', sub: 'Precio en USD', color: 'border border-brand-text/20' }
          ].map(card => (
            <div key={card.region} className={`p-10 rounded-2xl ${card.color === 'bg-brand-green' ? 'bg-brand-green text-brand-bg' : 'border border-brand-text/20'}`}>
              <div className="text-4xl md:text-5xl font-serif italic mb-2">{card.region}</div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-8">{card.sub}</div>
              <button className={`px-6 py-3 rounded-full text-sm font-medium ${card.color === 'bg-brand-green' ? 'bg-brand-text text-brand-bg' : 'bg-brand-text text-brand-bg'}`}>
                Consultar precio ↗
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const RaicesFAQ = () => {
  const faqs = [
    { q: '¿Necesito saber algo antes de la sesión?', a: 'No. La sesión está diseñada para quienes están empezando. Si no sabés nada, perfecto: arrancamos desde cero. Si ya sabés algo, lo tomamos como base y vamos más rápido sobre lo que importa.' },
    { q: '¿La sesión queda grabada?', a: 'Sí, podés pedir que grabemos la sesión para que puedas volver a escucharla después. Muchas personas lo hacen porque en el momento procesan distinto que cuando escuchan de nuevo con calma.' },
    { q: '¿Qué pasa si tengo más preguntas después de la sesión?', a: 'Podés escribirme por WhatsApp si surge algo puntual. Para ir más a fondo, el Programa de Acompañamiento es el paso siguiente.' },
    { q: '¿Puedo hacer la sesión si no tengo la hora exacta de nacimiento?', a: 'Se puede trabajar con una hora aproximada, aunque algunos elementos de la carta (especialmente la autoridad) pueden variar. Te lo aclaro antes de la sesión para que sepas qué esperar.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Preguntas frecuentes</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Preguntas<br /><span className="italic highlight-green">Frecuentes</span></h2>
      <div className="max-w-3xl border-t border-brand-border">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border-b border-brand-border">
            <summary className="flex justify-between items-center py-8 cursor-pointer list-none">
              <span className="text-xl font-medium pr-8">{faq.q}</span>
              <Plus className="opacity-40 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="pb-8 opacity-60 leading-relaxed text-lg max-w-2xl">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

// --- Acompanamiento Page Components ---

const AcompanamientoHero = () => (
  <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-20 items-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Programa inmersivo · 4 semanas</span>
      <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-12">
        Programa de<br />
        <span className="italic text-brand-orange">Acompañamiento</span>
      </h1>
      <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-lg mb-12 font-light">
        Cuatro sesiones en vivo para desmenuzar tu diseño por completo. No para conocerlo: para empezar a vivir desde él.
      </p>
      <div className="flex flex-wrap gap-6">
        <a href="https://wa.me/TUNUMERO?text=Hola%20Martin%2C%20quiero%20sumarme%20al%20Programa%20de%20Acompa%C3%B1amiento" className="px-10 py-5 bg-brand-orange text-brand-bg rounded-full font-medium hover:scale-105 transition-transform shadow-xl shadow-brand-orange/20">
          Consultar por el programa
        </a>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="aspect-[4/5] mask-blob-2 overflow-hidden shadow-2xl grayscale">
        <img 
          src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=1000" 
          className="w-full h-full object-cover"
          alt="Artistic process"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  </section>
);

const AcompanamientoIntro = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto border-t border-brand-border grid md:grid-cols-[1fr_1.5fr] gap-24">
    <div>
      <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">La diferencia</span>
      <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">Conocer<br />vs. <span className="italic text-brand-orange">integrar</span></h2>
    </div>
    <div className="space-y-8 text-xl md:text-2xl opacity-80 leading-relaxed font-light">
      <p>Hay una diferencia entre conocer tu diseño y vivir desde él. Para integrarlo de verdad —para que deje de ser un mapa y se convierta en una brújula— hace falta tiempo y continuidad.</p>
      <p className="font-serif italic text-3xl text-brand-text">Este programa está diseñado para que no solo entiendas tu carta, sino para que empieces a tomar decisiones reales desde tu autoridad.</p>
      <p>Cuatro sesiones, una plataforma personal y acompañamiento continuo para que el experimento se vuelva parte de tu día a día.</p>
    </div>
  </section>
);

const AcompanamientoPhotoBreak = () => (
  <div className="h-[60vh] relative overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
      className="w-full h-full object-cover"
      alt="Aerial view of coast"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 to-transparent"></div>
    <div className="absolute bottom-12 left-6 md:left-24">
      <p className="text-3xl md:text-5xl font-serif italic text-brand-bg leading-tight">
        "Cuatro semanas para que el diseño<br />deje de ser teoría."
      </p>
    </div>
  </div>
);

const AcompanamientoSessions = () => {
  const sessions = [
    { num: 'S — 01', title: 'Tipo, Estrategia y Autoridad', desc: 'El punto de partida de cualquier diseño. Cómo operás energéticamente, cómo tomás decisiones de manera óptima y qué pasa cuando no lo hacés así.' },
    { num: 'S — 02', title: 'Centros, Canales y Puertas', desc: 'La anatomía específica de tu carta. Qué centros definidos tenés, qué canales activos, y cómo eso se traduce en talentos y formas de procesar la realidad.' },
    { num: 'S — 03', title: 'Perfil, Trabajo y Vínculos', desc: 'Cómo tu diseño se expresa en el mundo concreto. Los ambientes que te potencian, las dinámicas que te desgastan, cómo interactúa tu carta con la de los demás.' },
    { num: 'S — 04', title: 'Integración y preguntas abiertas', desc: 'Una sesión más libre para cerrar los hilos abiertos, profundizar en lo que resonó más y conectar todo el recorrido con situaciones concretas de tu vida actual.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Las 4 sesiones</span>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">Un recorrido de punta a <span className="italic highlight-orange">punta</span></h2>
        <p className="text-lg opacity-60 leading-relaxed">Cada sesión tiene un eje, pero ninguna es rígida. El recorrido se adapta a lo que va emergiendo en el proceso.</p>
      </div>
      <div className="border-t border-brand-border">
        {sessions.map((s, idx) => (
          <motion.div 
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-[100px_1fr] gap-8 py-10 border-b border-brand-border"
          >
            <span className="text-xs font-bold opacity-30 mt-2">{s.num}</span>
            <div>
              <h3 className="text-xl font-medium mb-2">{s.title}</h3>
              <p className="opacity-60 leading-relaxed max-w-2xl">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AcompanamientoIncludes = () => {
  const items = [
    { title: '4 sesiones en vivo', desc: 'Una por semana, por videollamada, de aproximadamente 75 minutos cada una.' },
    { title: 'Plataforma personal', desc: 'Acceso a portal con tu reporte completo, grabaciones de cada sesión y materiales de apoyo.' },
    { title: 'Ejercicios semanales', desc: 'Actividades concretas para experimentar y registrar tu proceso entre sesión y sesión.' },
    { title: 'Acompañamiento por WhatsApp', desc: 'Canal abierto durante las 4 semanas para consultas puntuales entre sesiones.' }
  ];

  return (
    <section className="py-32 px-6 bg-brand-orange/10 border-y border-brand-border">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Qué incluye</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Todo lo que necesitás para el proceso</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-brand-text/10 rounded-xl bg-brand-bg/50"
            >
              <h3 className="font-bold mb-4">{item.title}</h3>
              <p className="opacity-60 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AcompanamientoForWhom = () => (
  <section className="py-32 px-6 bg-brand-text text-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Para quién</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Este programa<br />es para vos si...</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Ya tuviste una primera lectura o leíste sobre tu diseño, pero sentís que no terminás de integrarlo.',
            'Querés ir más a fondo que una sola sesión de una hora.',
            'Buscás que el Diseño Humano se convierta en una herramienta real, no solo en un mapa que mirás de vez en cuando.',
            'Necesitás un espacio de acompañamiento continuo con alguien que conozca tu carta en profundidad.'
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-white/10 rounded-xl bg-white/5 text-lg leading-relaxed"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AcompanamientoPricing = () => (
  <section className="py-32 px-6 bg-brand-bg border-y border-brand-border">
    <div className="max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-40 mb-6 block">Inversión</span>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Cuatro semanas.<br />
            <span className="italic text-brand-orange">Un antes y un después.</span>
          </h2>
          <p className="text-xl opacity-70 leading-relaxed mb-8">El programa tiene cupos limitados para sostener la calidad del acompañamiento. El precio varía según el lugar de residencia.</p>
          <p className="text-xl opacity-70 leading-relaxed mb-12">Si tenés dudas sobre si es para vos, escribime. Te cuento cómo funciona y vemos juntos si tiene sentido.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/TUNUMERO?text=Hola%20Martin%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20Programa%20de%20Acompa%C3%B1amiento" className="px-8 py-4 bg-brand-orange text-brand-bg rounded-full font-medium hover:scale-105 transition-transform">
              Consultar disponibilidad
            </a>
          </div>
        </div>
        <div className="space-y-6">
          {[
            { region: 'Argentina', sub: 'Precio en pesos ARS', color: 'bg-brand-orange' },
            { region: 'Exterior', sub: 'Precio en USD', color: 'border border-brand-text/20' }
          ].map(card => (
            <div key={card.region} className={`p-10 rounded-2xl ${card.color === 'bg-brand-orange' ? 'bg-brand-orange text-brand-bg' : 'border border-brand-text/20'}`}>
              <div className="text-4xl md:text-5xl font-serif italic mb-2">{card.region}</div>
              <div className="text-xs uppercase tracking-widest opacity-50 mb-8">{card.sub}</div>
              <button className={`px-6 py-3 rounded-full text-sm font-medium ${card.color === 'bg-brand-orange' ? 'bg-brand-text text-brand-bg' : 'bg-brand-text text-brand-bg'}`}>
                Consultar precio ↗
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AcompanamientoFAQ = () => {
  const faqs = [
    { q: '¿Necesito haber hecho una sesión antes de entrar al programa?', a: 'No es obligatorio, pero sí recomendable. Si nunca tuviste una lectura, podemos empezar el programa desde cero. Igual, si ya hiciste la lectura Echar Raíces, vas a aprovechar mucho más el tiempo de las sesiones.' },
    { q: '¿Las sesiones quedan grabadas?', a: 'Sí. Todas las sesiones se graban y quedan disponibles en tu plataforma personal. Podés volver a verlas cuando quieras.' },
    { q: '¿Cuándo se realizan las sesiones?', a: 'Coordinamos los horarios antes de empezar para encontrar un momento que funcione para los dos. Las sesiones son una por semana durante cuatro semanas.' },
    { q: '¿Puedo hacer el programa si no sé nada de Diseño Humano?', a: 'Sí. El programa está estructurado para ir de lo más fundamental hacia lo más específico. No asumimos conocimiento previo.' },
    { q: '¿Hay cupos disponibles ahora?', a: 'Los cupos son limitados para poder sostener la calidad del acompañamiento. Escribime por WhatsApp para saber si hay lugar en este momento.' }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest opacity-50 mb-6 block">Preguntas frecuentes</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-16">Preguntas<br /><span className="italic highlight-orange">Frecuentes</span></h2>
      <div className="max-w-3xl border-t border-brand-border">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border-b border-brand-border">
            <summary className="flex justify-between items-center py-8 cursor-pointer list-none">
              <span className="text-xl font-medium pr-8">{faq.q}</span>
              <Plus className="opacity-40 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="pb-8 opacity-60 leading-relaxed text-lg max-w-2xl">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

// --- Pages ---

const Home = () => (
  <>
    <HomeHero />
    <HomeMarquee />
    <HomeManifesto />
    <HomeAbout />
    <HomeServices />
    <HomeCalculator />
    <HomeNewsletter />
    <Quote />
  </>
);

const Reporte = () => (
  <>
    <ReporteHero />
    <ReporteIntro />
    <PhotoBreak />
    <ReporteFeatures />
    <ForWhom />
    <Pricing />
    <FAQ />
    <Quote />
  </>
);

const Raices = () => (
  <>
    <RaicesHero />
    <RaicesIntro />
    <RaicesPhotoBreak />
    <RaicesFeatures />
    <RaicesForWhom />
    <RaicesHowItWorks />
    <RaicesPricing />
    <RaicesFAQ />
    <Quote />
  </>
);

const Acompanamiento = () => (
  <>
    <AcompanamientoHero />
    <AcompanamientoIntro />
    <AcompanamientoPhotoBreak />
    <AcompanamientoSessions />
    <AcompanamientoIncludes />
    <AcompanamientoForWhom />
    <AcompanamientoPricing />
    <AcompanamientoFAQ />
    <Quote />
  </>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-orange selection:text-brand-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reporte" element={<Reporte />} />
          <Route path="/raices" element={<Raices />} />
          <Route path="/acompanamiento" element={<Acompanamiento />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
