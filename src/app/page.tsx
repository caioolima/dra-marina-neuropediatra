'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  MapPin,
  MoveRight,
  Phone,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

const whatsappHref = 'https://wa.me/5591920049746';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65 },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

const journeyItems = [
  {
    icon: CheckCircle2,
    title: 'Escuta qualificada',
    description:
      'Consulta conduzida com atenção ao histórico, comportamento e desenvolvimento da criança.',
  },
  {
    icon: Brain,
    title: 'Avaliação precisa',
    description:
      'Investigação clínica criteriosa para apoiar diagnóstico e conduta com segurança.',
  },
  {
    icon: ShieldCheck,
    title: 'Orientação objetiva',
    description:
      'Direcionamento claro para os próximos passos, sempre alinhado às necessidades da família.',
  },
];

function ToyBlocksGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} overflow="visible" aria-labelledby="toy-blocks-title">
      <title id="toy-blocks-title">Ilustração de blocos de brinquedo coloridos</title>
      <rect x="15" y="35" width="45" height="45" rx="10" fill="#a5d5dd" stroke="#fff" strokeWidth="4" style={{ transformOrigin: '37.5px 57.5px', transform: 'rotate(-10deg)' }} />
      <rect x="45" y="20" width="45" height="45" rx="10" fill="#f8d989" stroke="#fff" strokeWidth="4" style={{ transformOrigin: '67.5px 42.5px', transform: 'rotate(12deg)' }} />
      <circle cx="34" cy="54" r="6" fill="#fff" opacity="0.8"/>
      <path d="M62 38l10 10M72 38l-10 10" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}

function KiteGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} overflow="visible" aria-labelledby="kite-title">
      <title id="kite-title">Ilustração de uma pipa colorida</title>
      <path d="M50 10 L80 40 L50 80 L20 40 Z" fill="#d6a0df" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
      <path d="M20 40 L80 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 10 L50 80" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 80 Q 60 90, 50 100 T 50 120" fill="none" stroke="#f5b9bf" strokeWidth="4" strokeLinecap="round" />
      <path d="M55 95 L45 95 L50 105 Z" fill="#a5d5dd" />
    </svg>
  );
}

function TeddyGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} overflow="visible" aria-labelledby="teddy-title">
      <title id="teddy-title">Ilustração de um urso de pelúcia amigável</title>
      {/* Ears */}
      <circle cx="28" cy="30" r="14" fill="#f5eee4" stroke="#fff" strokeWidth="4" />
      <circle cx="72" cy="30" r="14" fill="#f5eee4" stroke="#fff" strokeWidth="4" />
      {/* Head */}
      <circle cx="50" cy="55" r="32" fill="#f5eee4" stroke="#fff" strokeWidth="4" />
      {/* Eyes */}
      <circle cx="39" cy="46" r="3.5" fill="#765d63" />
      <circle cx="61" cy="46" r="3.5" fill="#765d63" />
      {/* Muzzle */}
      <ellipse cx="50" cy="58" rx="14" ry="11" fill="#fff" />
      {/* Nose */}
      <ellipse cx="50" cy="53" rx="4.5" ry="3.5" fill="#765d63" />
      {/* Smile (anchor shape dropping from nose) */}
      <path d="M50 56.5 V 59 M50 59 Q 45 64, 40 59 M50 59 Q 55 64, 60 59" fill="none" stroke="#765d63" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PinwheelGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} overflow="visible" aria-labelledby="pinwheel-title">
      <title id="pinwheel-title">Ilustração de um catavento de brinquedo colorido</title>
      {/* Stick */}
      <line x1="50" y1="50" x2="50" y2="95" stroke="#f5eee4" strokeWidth="4" strokeLinecap="round" />
      {/* Blades */}
      <path d="M50 50 L50 20 L25 35 Z" fill="#f5b9bf" stroke="#fff" strokeWidth="2" />
      <path d="M50 50 L80 50 L65 25 Z" fill="#a5d5dd" stroke="#fff" strokeWidth="2" />
      <path d="M50 50 L50 80 L75 65 Z" fill="#d6a0df" stroke="#fff" strokeWidth="2" />
      <path d="M50 50 L20 50 L35 75 Z" fill="#f8d989" stroke="#fff" strokeWidth="2" />
      {/* Center Pin */}
      <circle cx="50" cy="50" r="4" fill="#fff" />
    </svg>
  );
}

const specialties = [
  {
    eyebrow: 'Desenvolvimento',
    title: 'Atrasos e marcos infantis',
    description:
      'Análise do desenvolvimento motor, da fala, da cognição e da interação social.',
    tone: 'bg-brand-butter/45',
    Illustration: ToyBlocksGraphic,
  },
  {
    eyebrow: 'Comportamento',
    title: 'Atenção e regulação',
    description:
      'Investigação de desatenção, impulsividade, aprendizagem e dificuldades de organização.',
    tone: 'bg-brand-secondary/30',
    Illustration: KiteGraphic,
  },
  {
    eyebrow: 'Avaliação',
    title: 'Autismo e sinais do espectro',
    description:
      'Avaliação clínica criteriosa para compreender sinais, comportamento e comunicação.',
    tone: 'bg-brand-lilac/25',
    Illustration: TeddyGraphic,
  },
  {
    eyebrow: 'Neurologia clínica',
    title: 'Epilepsia e crises',
    description:
      'Diagnóstico de crises convulsivas e manejo clínico individualizado de síndromes epiléticas.',
    tone: 'bg-brand-secondary/35',
    Illustration: PinwheelGraphic,
  },
];

const trustItems = [
  'Formação pelo CESUPA',
  'Residência em Pediatria (FSCMPA)',
  'Residência em Neurologia Pediátrica (Santa Casa POA)',
  'Atuação em Porto Alegre e Belém',
];

const testimonials = [
  {
    name: 'Família de paciente',
    text: 'A consulta foi leve, carinhosa e muito esclarecedora. Saímos mais tranquilos e com direcionamento.',
  },
  {
    name: 'Pais em acompanhamento',
    text: 'A Dra. Marina explica tudo com muita paciência e cria uma conexão muito bonita com as crianças.',
  },
  {
    name: 'Responsável por paciente',
    text: 'Sentimos um cuidado verdadeiro. É um atendimento técnico, mas ao mesmo tempo muito humano.',
  },
];

function CloudCluster({ className = '' }: { className?: string }) {
  return (
    <div className={`cloud-cluster ${className}`} aria-hidden="true">
      <span className="cloud cloud-a" />
      <span className="cloud cloud-b" />
      <span className="cloud cloud-c" />
    </div>
  );
}

function TeddyAccent({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`teddy-accent ${className}`} 
      aria-hidden="true"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="teddy-ear teddy-ear-left" />
      <span className="teddy-ear teddy-ear-right" />
      <span className="teddy-face" />
    </motion.div>
  );
}

function ToyBlockAccent({ className = '', color = 'bg-brand-secondary', label = 'A', rotate = '-8deg' }: { className?: string; color?: string; label?: string; rotate?: string }) {
  return (
    <motion.div 
      className={`absolute flex h-14 w-14 items-center justify-center rounded-xl border-t-2 border-white/80 shadow-[0_12px_24px_rgba(118,93,99,0.12)] ${color} ${className}`} 
      aria-hidden="true" 
      style={{ transform: `rotate(${rotate})` }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      <span className="font-display text-2xl font-bold text-brand-text/70">{label}</span>
    </motion.div>
  );
}

function StarAccent({ className = '', glowColor = 'bg-brand-butter/40', textColor = 'text-brand-butter' }: { className?: string; glowColor?: string; textColor?: string }) {
  return (
    <motion.div 
      className={`absolute flex h-16 w-16 items-center justify-center ${className}`} 
      aria-hidden="true"
      animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      <div className={`absolute inset-0 rounded-full blur-xl ${glowColor}`} />
      <Star className={`relative h-10 w-10 fill-current ${textColor}`} />
    </motion.div>
  );
}

function SunAccent({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute flex h-40 w-40 items-center justify-center ${className}`} aria-hidden="true">
      <div className="absolute inset-0 animate-pulse rounded-full bg-brand-butter/50 blur-3xl" />
      <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-[#fffdf5] to-[#f8d989] shadow-[0_0_60px_rgba(248,217,137,0.7)]" />
    </div>
  );
}

function BalloonAccent({ className = '', fillColor = '#a5d5dd' }: { className?: string; fillColor?: string }) {
  return (
    <motion.div 
      className={`absolute flex flex-col items-center ${className}`} 
      aria-hidden="true"
      animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="48" height="62" viewBox="0 0 48 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        {/* Balloon Body */}
        <path d="M24 0C10.7452 0 0 10.7452 0 24C0 39 18 56 24 56C30 56 48 39 48 24C48 10.7452 37.2548 0 24 0Z" fill={fillColor}/>
        {/* Balloon Tie */}
        <path d="M21 56L18 62H30L27 56H21Z" fill={fillColor}/>
        {/* Shine Highlight */}
        <path d="M12 16C14 10 20 8 20 8" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
      <div className="h-16 w-[1.5px] bg-[#e2dee0]" />
    </motion.div>
  );
}

function RainbowAccent({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`absolute flex h-24 w-24 items-center justify-center ${className}`} 
      aria-hidden="true"
      animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      <svg width="80" height="50" viewBox="0 0 100 60" className="drop-shadow-md">
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="#f8b4c0" strokeWidth="8" strokeLinecap="round" />
        <path d="M22 50 A28 28 0 0 1 78 50" fill="none" stroke="#f8d989" strokeWidth="8" strokeLinecap="round" />
        <path d="M34 50 A16 16 0 0 1 66 50" fill="none" stroke="#a5d5dd" strokeWidth="8" strokeLinecap="round" />
        <path d="M15 50 Q 15 45, 10 45 Q 5 45, 5 50 Q 0 50, 0 55 Q 0 60, 5 60 L 20 60 Q 25 60, 25 55 Q 25 50, 15 50 Z" fill="#fff" />
        <path d="M85 50 Q 85 45, 90 45 Q 95 45, 95 50 Q 100 50, 100 55 Q 100 60, 95 60 L 80 60 Q 75 60, 75 55 Q 75 50, 85 50 Z" fill="#fff" />
      </svg>
    </motion.div>
  );
}

function RattleAccent({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`absolute flex h-20 w-20 items-center justify-center ${className}`} 
      aria-hidden="true"
      animate={{ y: [0, -10, 0], rotate: [-15, 15, -15] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="55" height="55" viewBox="0 0 80 80" className="drop-shadow-sm">
        <path d="M40 50 L40 70" stroke="#f8d989" strokeWidth="6" strokeLinecap="round" />
        <circle cx="40" cy="75" r="4" fill="#f8d989" />
        <circle cx="40" cy="30" r="20" fill="#a5d5dd" stroke="#fff" strokeWidth="4" />
        <path d="M28 22 C 32 16, 40 14, 40 14" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
        <circle cx="20" cy="30" r="4" fill="#d5a0df" />
        <circle cx="60" cy="30" r="4" fill="#f8b4c0" />
        <circle cx="40" cy="10" r="4" fill="#f8d989" />
      </svg>
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-brand-primary/15 ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Image
              src="/simbolo-marina.png"
              alt="Símbolo da Dra. Marina Keuffer"
              width={48}
              height={48}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-brand-primary">
              Dra. Marina Keuffer
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-text/60">
              Neuropediatra
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-brand-text/70 lg:flex">
          <a href="#especialidades" className="nav-link">
            Especialidades
          </a>
          <a href="#sobre" className="nav-link">
            Sobre
          </a>
          <a href="#atendimento" className="nav-link">
            Atendimento
          </a>
        </div>

        <a
          href={whatsappHref}
          className="button-pop rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(245,185,191,0.35)]"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden bg-[linear-gradient(180deg,#d4eff4_0%,#ffffff_45%)]">
      <SunAccent className="absolute -left-12 -top-12 scale-75 opacity-95 transition-transform duration-[10000ms] hover:scale-90 md:left-[5%] md:top-0 md:scale-100 z-0" />
      <CloudCluster className="absolute left-[30%] -top-4 scale-50 opacity-80 md:left-10 md:top-8 md:scale-100 z-0" />
      <CloudCluster className="absolute right-12 top-10 hidden opacity-70 lg:block z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-48 lg:pt-56">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
          <p className="mb-3 text-base font-semibold text-brand-primary md:text-lg">
            Dra. Marina Keuffer
          </p>

          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.02] text-brand-text md:text-5xl">
            Cuidado especializado para o desenvolvimento do seu filho.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-brand-text/72 md:text-lg">
            Consulta em neuropediatria para famílias que buscam <strong className="font-semibold text-brand-text">avaliação especializada</strong>, <strong className="font-semibold text-brand-text">diagnóstico preciso</strong> e <strong className="font-semibold text-brand-text">orientação segura</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-brand-primary p-2 pr-8 text-base font-bold text-white shadow-[0_18px_35px_rgba(245,185,191,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(245,185,191,0.5)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight className="h-5 w-5" />
              </div>
              <span>Agendar consulta</span>
            </a>
            
            <div className="flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-2 ring-1 ring-white/60 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-butter text-brand-butter" />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-brand-text/60">5.0 no Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="hero-credentials-card mt-12 -mx-5 w-[calc(100%+2.5rem)] md:mx-0 md:w-full max-w-3xl lg:max-w-none">
            <div className="flex flex-col gap-10 rounded-none border-x-0 border-y border-white/60 bg-white/45 p-8 shadow-[0_20px_45px_rgba(118,93,99,0.06)] backdrop-blur-md md:flex-row md:items-stretch md:justify-around md:gap-8 md:rounded-[2.4rem] md:border">
              {/* Column 1: Credentials */}
              <div className="flex flex-1 flex-col justify-center gap-8">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary/60">CRM</p>
                  <p className="whitespace-nowrap text-lg font-bold leading-tight text-brand-text lg:text-xl">
                    57561-RS <span className="mx-1 opacity-20">|</span> 15077-PA
                  </p>
                  <p className="mt-1 text-xs font-medium text-brand-text/50 lowercase italic">Registro profissional</p>
                </div>

                <div className="h-px w-full bg-brand-text/5 md:w-3/4" />

                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary/60">RQE</p>
                  <p className="whitespace-nowrap text-lg font-bold leading-tight text-brand-text lg:text-xl">
                    44491-RS <span className="mx-1 opacity-20">|</span> 10788-PA
                  </p>
                  <p className="mt-1 text-xs font-medium text-brand-text/50 lowercase italic">Título de especialista</p>
                </div>
              </div>
              
              <div className="hidden w-px bg-brand-text/10 md:block" />

              {/* Column 2: Focus */}
              <div className="flex flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary/60">Foco de Atuação</p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-brand-text lg:text-3xl">
                  Autismo, TDAH e Epilepsia
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-brand-text/50 italic">
                  Neurologia Infantil e Neurodesenvolvimento
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="hero-panel relative rounded-[2.8rem] border border-white/70 bg-white/85 p-4 shadow-[0_28px_60px_rgba(118,93,99,0.14)] backdrop-blur">
            <div className="orb-float absolute -left-5 top-10 h-16 w-16 rounded-full bg-brand-butter/80 blur-sm" />
            <div className="orb-float-delayed absolute -right-4 bottom-14 h-20 w-20 rounded-full bg-brand-lilac/30 blur-sm" />
            <div className="interactive-card group relative overflow-hidden rounded-[2.4rem] bg-brand-cloud/80 p-3">
              <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(245,185,191,0.35),transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(118,93,99,0.08))]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80">
                <Image
                  src="/doutora.jpg"
                  alt="Dra. Marina Keuffer"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  priority
                />
              </div>
              <div className="absolute bottom-6 left-6 right-auto w-fit rounded-[1.5rem] border border-white/60 bg-white/84 px-5 py-4 shadow-[0_15px_35px_rgba(118,93,99,0.12)] backdrop-blur-md">
                <p className="font-display text-lg font-bold text-brand-text md:text-xl">
                  Dra. Marina Keuffer
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/60">
                  Neuropediatra
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="section-wave-bottom" />
  </header>
);
}

function Journey() {
  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Journey Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary/60">
              Como é o atendimento
            </span>
            <h2 className="mt-8 mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-4xl lg:text-5xl">
              Uma condução clínica cuidadosa do início ao acompanhamento.
            </h2>
            <div className="mt-10 mx-auto max-w-2xl">
              <p className="border-t border-brand-text/10 pt-8 text-lg font-medium leading-relaxed text-brand-text/60 md:text-xl">
                Clareza para a família, investigação criteriosa e definição segura dos próximos passos.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Steps Flow */}
        <div className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-16">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.15 }}
                className="group relative rounded-[2.5rem] border border-white/60 bg-white/40 p-10 shadow-[0_20px_45px_rgba(118,93,99,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_55px_rgba(118,93,99,0.08)]"
              >
                {/* Step Connector (only on large screens) */}
                {index < 2 && (
                  <div className="absolute right-[-2.5rem] top-1/2 hidden h-[1px] w-20 bg-brand-text/10 lg:block opacity-40" />
                )}
                
                <div className="flex flex-col">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/5 text-brand-primary transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-black text-brand-primary/30 transition-colors group-hover:text-brand-primary/50">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-brand-text">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-6 text-base font-medium leading-relaxed text-brand-text/60">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating accents removed by request to keep focus on cards */}
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary/60">
              Especialidades
            </span>
            <h2 className="mt-8 mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl lg:text-7xl">
              Principais quadros avaliados no consultório.
            </h2>
            <div className="mt-10 mx-auto max-w-2xl">
              <p className="border-t border-brand-text/10 pt-8 text-lg font-medium leading-relaxed text-brand-text/60 md:text-xl">
                Uma investigação criteriosa para entender sinais, orientar a família e definir os próximos passos com segurança.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:gap-12">
          {specialties.map((item, index) => {
            const Illustration = item.Illustration;
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[3rem] border-[6px] border-white ${item.tone} p-8 shadow-[0_20px_50px_rgba(118,93,99,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_50px_rgba(118,93,99,0.12)] md:p-10 ${isEven ? 'lg:-translate-y-8' : 'lg:translate-y-8'}`}
              >
                <div className="absolute right-[-10%] top-[-10%] opacity-20 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                   <div className="h-64 w-64 rounded-full bg-white blur-3xl" />
                </div>
                
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-white/70 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Illustration className="h-12 w-12 drop-shadow-sm" />
                  </div>
                  <span className="font-display text-5xl font-black text-white mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <span className="mb-3 inline-block rounded-xl bg-white/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/60 shadow-sm backdrop-blur-md">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight text-brand-text md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-brand-text/70">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden px-5 py-18 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <BalloonAccent className="absolute left-[8%] top-10 hidden lg:flex" fillColor="#a5d5dd" />
        <CloudCluster className="absolute right-[12%] top-20 hidden opacity-70 xl:block" />
        <StarAccent className="absolute right-[5%] bottom-10 hidden md:flex" glowColor="bg-brand-secondary/40" textColor="text-brand-secondary" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* About Header (Unified) */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary/60">
              Sobre a médica
            </span>
            <h2 className="mt-8 mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-4xl lg:text-5xl">
              Trajetória sólida no cuidado infantil.
            </h2>
            <div className="mt-10 mx-auto max-w-2xl">
              <p className="border-t border-brand-text/10 pt-8 text-lg font-medium leading-relaxed text-brand-text/60 md:text-xl">
                Uma formação criteriosa e uma prática clínica pautada no acolhimento e na evidência científica.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...fadeUp} className="interactive-card rounded-[2.8rem] bg-white p-5 shadow-[0_24px_55px_rgba(213,160,223,0.16)]">
            <div className="rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(165,213,221,0.22),rgba(245,185,191,0.22))] p-4">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/marina-keuffer-sobre.jpeg"
                  alt="Retrato da Dra. Marina Keuffer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="space-y-6 text-base leading-8 text-brand-text/74">
              <p>
                A Dra. Marina Keuffer é médica formada pelo <strong className="font-semibold text-brand-text">Centro Universitário do Estado do Pará (CESUPA)</strong>, com trajetória voltada ao acompanhamento do desenvolvimento infantil.
              </p>
              <p>
                Sua formação inclui <strong className="font-semibold text-brand-text">Pediatria pela Fundação Santa Casa de Misericórdia do Pará (FSCMPA)</strong> e <strong className="font-semibold text-brand-text">Residência Médica em Neurologia Pediátrica</strong> pela <strong className="font-semibold text-brand-text">UFCSPA / Santa Casa de Porto Alegre</strong>.
              </p>
              <p>
                Sua prática clínica prioriza <strong className="font-semibold text-brand-text">avaliação cuidadosa</strong>, <strong className="font-semibold text-brand-text">diagnóstico preciso</strong> e <strong className="font-semibold text-brand-text">orientação segura para as famílias</strong>.
              </p>
            </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="interactive-card flex items-start gap-3 rounded-[1.6rem] border border-brand-primary/15 bg-white/75 px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <p className="text-sm font-semibold leading-6 text-brand-text/75">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
}

function Testimonials() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Testimonials Header (Unified) */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary/60">
              Percepção das famílias
            </span>
            <h2 className="mt-8 mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-4xl lg:text-5xl">
              Confiança construída no atendimento.
            </h2>
            <div className="mt-10 mx-auto max-w-2xl">
              <p className="border-t border-brand-text/10 pt-8 text-lg font-medium leading-relaxed text-brand-text/60 md:text-xl">
                O cuidado e o acolhimento percebidos por quem confia o desenvolvimento de seus filhos à Dra. Marina.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="testimonial-card rounded-[2rem] bg-white p-6 shadow-[0_16px_40px_rgba(118,93,99,0.08)]"
            >
              <div className="mb-5 flex gap-1 text-brand-butter">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-7 text-brand-text/74">&ldquo;{item.text}&rdquo;</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
                {item.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="atendimento" className="overflow-hidden border-t border-brand-text/5">
      {/* Top Part: Brown CTA Area */}
      <div className="bg-[#765d63] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-center">
            <motion.div {...fadeUp} className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                Agendamento
              </span>
              
              <h2 className="mt-6 mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-white">
                Pronto para iniciar uma jornada de cuidado especializado?
              </h2>

              <div className="mt-8 mx-auto max-w-2xl">
                <p className="border-t border-white/10 pt-6 text-lg font-medium leading-relaxed text-white/80 md:text-xl">
                  O cuidado que o desenvolvimento do seu filho merece, com acolhimento e precisão.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href={whatsappHref}
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-base font-bold text-[#765d63] transition-all hover:scale-105 hover:bg-brand-primary hover:text-white shadow-xl"
                >
                  <span className="relative z-10">Agendar consulta por WhatsApp</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-white/40">
                  Resposta rápida via WhatsApp
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Part: Premium Editorial Locations */}
      <div className="bg-[#fdfafb] py-24 text-brand-text md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12 lg:items-start">
            {/* Porto Alegre 1 Column */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-secondary">
                Porto Alegre - RS
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-text md:text-3xl">
                Clínica Cuidado Integral
              </h3>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-base leading-relaxed text-brand-text/70">
                  Rua Tenente Ary Tarragô, 267
                  <br />
                  Porto Alegre - RS
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Clínica+Cuidado+Integral+Rua+Tenente+Ary+Tarragô+267+Porto+Alegre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-secondary hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Maps
                </a>
              </div>
            </motion.div>

            {/* Porto Alegre 2 Column (Prontokids) */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
                Porto Alegre - RS
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-text md:text-3xl">
                Prontokids
              </h3>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-base leading-relaxed text-brand-text/70">
                  Viva Open Mall
                  <br />
                  Av. Dr. Nilo Peçanha, 3228
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Prontokids+Viva+Open+Mall+Av.+Dr.+Nilo+Peçanha+3228+Porto+Alegre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Maps
                </a>
              </div>
            </motion.div>

            {/* Belém Column */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-lilac">
                Belém - PA
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-text md:text-3xl">
                Umarizal
              </h3>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-base leading-relaxed text-brand-text/70">
                  Tv. Dom Romualdo de Seixas, 1698
                  <br />
                  Belém - PA, 66055-200
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Tv.+Dom+Romualdo+de+Seixas+1698+Belém" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-lilac hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Maps
                </a>
              </div>
            </motion.div>

            {/* Contact & Hours Info */}
            <motion.div {...fadeUp} className="flex flex-col gap-10 border-t border-brand-text/10 pt-12 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/40">Contato Central</p>
                <a 
                  href={whatsappHref}
                  className="mt-3 block whitespace-nowrap text-xl font-bold text-brand-text transition-colors hover:text-brand-primary md:text-2xl"
                >
                  (91) 92004-9746
                </a>
                <p className="mt-1 text-sm font-medium text-brand-text/50 italic">WhatsApp para agendamentos</p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/40">Horários</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand-primary" />
                  <p className="text-lg font-bold text-brand-text">Consultas agendadas</p>
                </div>
                <p className="mt-1 text-sm font-medium text-brand-text/50">Atendimento presencial e teleconsulta</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#fdfafb] pb-6 pt-16 md:pt-24">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#a5d5dd_0%,#d5a0df_50%,#f8d989_100%)] opacity-90" />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-brand-text/10 pb-12 md:flex-row md:items-start">
          <div className="flex max-w-sm flex-col items-center text-center md:items-start md:text-left">
            <div className="group flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-brand-primary/10 shadow-sm ring-4 ring-white transition-transform duration-500 hover:scale-105">
              <Image
                src="/simbolo-marina.png"
                alt="Símbolo da Dra. Marina"
                width={64}
                height={64}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="mt-5 font-display text-2xl font-bold text-brand-text">
              Dra. Marina Keuffer
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-brand-text/60">
              Neuropediatria
            </p>
          </div>

          <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-primary">Atendimento</p>
              <ul className="space-y-3 text-sm font-medium text-brand-text/75">
                <li>Porto Alegre - RS</li>
                <li>Belém - PA</li>
                <li>Teleconsulta (Todo o Brasil)</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-primary">Credenciais</p>
              <ul className="space-y-3 text-sm font-medium text-brand-text/75">
                <li>CRM 57561-RS | 15077-PA</li>
                <li>RQE 44491-RS | 10788-PA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm font-medium text-brand-text/60 md:flex-row">
          <p>© {new Date().getFullYear()} Dra. Marina Keuffer. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 opacity-60 transition-opacity hover:opacity-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text/30">Powered by</span>
            <a 
              href="https://beecode.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex font-sans text-[13px] font-black tracking-tighter"
            >
              <span className="text-[#f8d989]">Bee</span>
              <span className="text-black">Code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/5591920049746?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Marina.')}`;
  
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:bg-[#20ba5a] md:bottom-10 md:right-10"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-9 w-9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-[linear-gradient(180deg,#fffdfd_0%,#fff7f8_18%,#fbffff_48%,#fffefb_100%)] text-brand-text selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Journey />
      <Specialties />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}

