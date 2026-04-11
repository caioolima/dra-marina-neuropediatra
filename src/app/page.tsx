'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Brain, 
  Stethoscope, 
  Activity, 
  Clock,
  Star,
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 px-8 py-4 shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <span className="text-xl font-display font-bold text-brand-primary tracking-tight leading-none uppercase">Dra. Marina Keuffer</span>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Neuropediatria • CRM 57561-RS</span>
      </motion.div>
      
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#expertise" className="hover:text-brand-primary transition-colors">Especialidades</a>
          <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
          <a href="#atendimento" className="hover:text-brand-primary transition-colors">Atendimento</a>
        </div>
          <motion.a 
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5591920049746" 
            className="bg-brand-primary text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-lg whitespace-nowrap"
          >
            Agendar Agora
          </motion.a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="pt-48 pb-10 bg-white">
    <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7"
      >
        <span className="text-[11px] font-bold text-brand-secondary uppercase tracking-[0.4em] mb-6 block">Neurologia Pediátrica • Porto Alegre</span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-[1.1] mb-8 tracking-tight max-w-4xl">
          Ciência e precisão no cuidado neurológico infantil.
        </h1>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-light italic">
          Muito além do diagnóstico: entenda o potencial real do neurodesenvolvimento do seu filho através da precisão clínica.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5591920049746" 
            className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-primary/10 flex items-center justify-center gap-4 whitespace-nowrap"
          >
            <WhatsAppIcon /> Agendar Consulta
          </motion.a>
          <div className="flex gap-8">
             <div className="text-center sm:text-left whitespace-nowrap">
                <p className="text-lg font-bold text-brand-primary leading-none mb-1">CRM 57561-RS</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Inscrição</p>
             </div>
             <div className="w-[1px] h-10 bg-slate-200" />
             <div className="text-center sm:text-left whitespace-nowrap">
                <p className="text-lg font-bold text-brand-primary leading-none mb-1">RQE 44491</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Especialista</p>
             </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">
          <Image 
            src="/doutora.jpg" 
            alt="Dra. Marina Keuffer" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>

    {/* Credentials Bar */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-7xl mx-auto px-8 mt-20"
    >
       <div className="bg-slate-50 rounded-[2.5rem] p-10 flex flex-wrap justify-between items-center gap-8 border border-slate-100">
          <div className="flex items-center gap-5">
             <Award className="text-brand-secondary" size={24} />
             <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Titulação Acadêmica</p>
                <p className="text-lg font-bold text-brand-primary uppercase">Mestre pela UFCSPA</p>
             </div>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-slate-200" />
          <div className="flex items-center gap-5">
             <CheckCircle2 className="text-brand-secondary" size={24} />
             <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">Atendimento Humanizado</p>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-slate-200" />
          <div className="flex items-center gap-5">
             <CheckCircle2 className="text-brand-secondary" size={24} />
             <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">Diagnóstico de Precisão</p>
          </div>
       </div>
    </motion.div>
  </header>
);

const Expertise = () => {
  const areas = [
    { title: "Neuro-Desenvolvimento", desc: "Acompanhamento detalhado dos marcos motores e cognitivos da criança.", icon: <Activity /> },
    { title: "TDAH & Comportamento", desc: "Suporte especializado para transtornos de conduta e déficit de atenção.", icon: <Brain /> },
    { title: "Espectro Autista (TEA)", desc: "Avaliação técnica e acolhedora para diagnósticos de autismo.", icon: <CheckCircle2 /> },
    { title: "Saúde Neurológica", desc: "Consultas clínicas para patologias complexas do sistema nervoso.", icon: <Stethoscope /> }
  ];

  return (
    <section id="expertise" className="py-32 bg-slate-50 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-secondary mb-4 block">Especialidades</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary tracking-tight uppercase">Áreas de Atuação Clínica</h2>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {areas.map((a, i) => (
             <motion.div 
               key={i} 
               variants={fadeIn}
               whileHover={{ y: -10, scale: 1.02 }}
               className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-500 group cursor-default"
             >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-secondary mb-8 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                   {React.cloneElement(a.icon as React.ReactElement<{ size: number }>, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-4 leading-tight">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{a.desc}</p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-32 bg-white px-8">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <motion.div {...fadeIn} className="relative">
         <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/doutora.jpg" 
              alt="Dra. Marina Keuffer" 
              fill 
              className="object-cover"
            />
         </div>
      </motion.div>
      <motion.div {...fadeIn}>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-secondary mb-6 block">A Profissional</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight mb-10 uppercase tracking-tight">Especialista pela UFCSPA.</h2>
        <div className="space-y-8 text-lg text-slate-500 font-light leading-relaxed">
           <p>
             Graduada e titulada em Neurologia Pediátrica pela <strong>UFCSPA</strong>, referência nacional em saúde pública e privada.
           </p>
           <p>
             Meu atendimento é fundamentado na união entre o rigor técnico-científico e a empatia incondicional. Cada criança é única, e seu neurodesenvolvimento merece um olhar atento e especializado.
           </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => {
  const items = [
    { name: "Patrícia L.", text: "Muito atenciosa e paciente. Explicou tudo que precisávamos com uma calma incrível, nos deixando muito seguros no processo." },
    { name: "Rodrigo M.", text: "Excelente profissional. Ela explica com calma cada fase do diagnóstico e do tratamento do meu filho." },
    { name: "Simone G.", text: "Atendimento humano de verdade. A Dra. Marina tem uma empatia gigante com as crianças." }
  ];

  return (
    <section className="py-32 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-secondary mb-4 block">Experiências</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary tracking-tight uppercase">O que dizem os pais</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
           {items.map((t, i) => (
             <motion.div 
               key={i} 
               {...fadeIn}
               whileHover={{ y: -5 }}
               className="p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between"
             >
                <div>
                   <div className="flex gap-1 mb-8">
                      {[1, 2, 3, 4, 5].map(j => <Star key={j} size={14} className="fill-brand-secondary text-brand-secondary" />)}
                   </div>
                   <p className="text-lg italic text-slate-600 leading-relaxed mb-10 font-light">"{t.text}"</p>
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-brand-primary">{t.name}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="atendimento" className="py-32 bg-brand-bg px-8">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <motion.div {...fadeIn}>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary mb-8 block">Localização</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight mb-12 uppercase tracking-tight">Porto Alegre - RS</h2>
        <div className="space-y-12">
           <div className="flex gap-8 items-start">
              <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-brand-primary shrink-0 transition-transform">
                 <MapPin size={32} />
              </motion.div>
              <p className="text-slate-500 font-light text-xl">Clínica Cuidado Integral <br /> Rua Tenente Ary Tarragô, 267</p>
           </div>
           <div className="flex gap-8 items-start">
              <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-brand-primary shrink-0 transition-transform">
                 <Phone size={32} />
              </motion.div>
              <p className="text-slate-500 font-light text-xl">(91) 92004-9746 <br /> Agendamentos por WhatsApp</p>
           </div>
        </div>
      </motion.div>
      <motion.div {...fadeIn} className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.578618586326!2d-51.1578354!3d-30.0159492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519777ca40f7f3f%3A0x8f8c4e0e5e0e0e0e!2sRua%20Ten.%20Ary%20Tarrag%C3%B4%2C%20267%20-%20Passo%20das%20Pedras%2C%20Porto%20Alegre%20-%20RS%2C%2091225-001!5e0!3m2!1spt-BR!2sbr!4v1712780000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          />
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 bg-white border-t border-slate-100 px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="flex flex-col">
        <span className="text-2xl font-display font-bold text-brand-primary tracking-tighter leading-none uppercase">Dra. Marina Keuffer</span>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Neurologia Pediátrica • CRM 57561-RS</span>
      </div>
      <div className="flex flex-col md:items-end gap-6">
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
           <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
           <a href="#" className="hover:text-brand-primary transition-colors">WhatsApp</a>
        </div>
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest text-right">
           © {new Date().getFullYear()} Marina Keuffer. Porto Alegre, RS.
        </p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="selection:bg-brand-secondary selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Testimonials />
      <Contact />
      
      {/* High-Impact FULL WIDTH Final CTA */}
      <section className="bg-brand-primary py-40 text-center relative overflow-hidden">
         {/* Background medical pattern for strike */}
         <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <Brain size={800} strokeWidth={0.5} className="text-white" />
         </div>
         
         <div className="max-w-6xl mx-auto relative z-10 text-white px-8">
            <motion.div {...fadeIn}>
               <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-accent mb-12 block">Acompanhamento de Elite</span>
               <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter uppercase leading-[0.9]">
                  O seu filho <br /> merece o melhor.
               </h2>
               <p className="text-xl md:text-3xl font-light text-blue-100/60 mb-16 max-w-5xl mx-auto leading-relaxed">
                  Excelência clínica para o que você mais ama. Garanta um acompanhamento de alto padrão que transforma o neurodesenvolvimento em um caminho de conquistas.
               </p>
               
               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                     <motion.a 
                       whileHover={{ scale: 1.02, opacity: 0.9 }}
                       whileTap={{ scale: 0.98 }}
                       href="https://wa.me/5591920049746" 
                       className="w-fit bg-white text-brand-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-4 group whitespace-nowrap"
                     >
                       <WhatsAppIcon className="w-6 h-6" /> 
                       Agendar Consulta Especializada
                     </motion.a>
                  </div>
            </motion.div>
         </div>
      </section>
      
      <Footer />
      
      {/* Clean Floating Action */}
      <motion.a
        href="https://wa.me/5591920049746"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-[220] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center transition-transform"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </motion.a>
    </main>
  );
}
