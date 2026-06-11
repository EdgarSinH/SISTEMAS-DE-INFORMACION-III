"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import LessonArea from "./components/LessonArea";

export default function HomePage() {
  // Estado para controlar la animación secuencial de las líneas de la terminal simulada
  const [visibleLines, setVisibleLines] = useState<number>(0);
const router = useRouter();
  useEffect(() => {
    const linesCount = 8; // Número total de líneas incluyendo el Output
    const intervals = Array.from({ length: linesCount }).map((_, index) =>
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 300 * index)
    );

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <Header>
        <button  onClick={() => router.push('./register')} className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:opacity-80 transition-all active:scale-95 neon-glow-primary font-sora">
          Empezar gratis
        </button>
      </Header>
  
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-container ambient-glow rounded-full"></div>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 -960 960 960" 
                fill="currentColor" 
                className="text-tertiary w-[18px] h-[18px]"
              >
                <path d="m320-80 40-280H200l240-520h200l-40 280h160L520-80H320Z"/>
              </svg>
              <span className="font-sora text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Aprendizaje de alto impacto
              </span>
            </div>
            <h1 className="font-sora text-4xl md:text-5xl font-extrabold text-on-surface mb-6 max-w-4xl mx-auto leading-tight">
              Domina el código, <span className="text-primary">5 minutos</span> a la vez
            </h1>
            <p className="font-inter text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Aprende JavaScript con lecciones interactivas diseñadas para tu ritmo de vida. Transforma tus ratos libres en una carrera tecnológica.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button onClick={() => router.push('./register')} className="w-full md:w-auto bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all neon-glow-primary font-sora">
                Empieza a programar gratis
              </button>
            </div>
          </div>
        </section>
  <LessonArea videoSrc="https://www.youtube.com/embed/asRuv6m_XFc" />
        {/* Value Section */}
        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora text-2xl md:text-3xl font-semibold text-on-surface mb-3">
                Aprender no tiene por qué ser aburrido
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Micro-lecciones */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor" 
                    className="text-primary w-[32px] h-[32px]"
                  >
                    <path d="M360-840v-80h240v80H360Zm120 440Zm0 320q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T700-360q0-83-58.5-141.5T480-560q-83 0-141.5 58.5T280-360q0 83 58.5 141.5T480-160Zm0-200Zm-40-120h80v-160h-80v160Zm300-226 56-56-56-56-56 56 56 56Z"/>
                  </svg>
                </div>
                <h3 className="font-sora text-xl font-semibold text-on-surface mb-2">Micro-lecciones</h3>
                <p className="text-on-surface-variant text-sm">
                  Aprende conceptos clave en minutos con contenido optimizado para la retención rápida.
                </p>
              </div>

              {/* Práctica Real */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor" 
                    className="text-secondary w-[32px] h-[32px]"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm120-60 56-56-84-84 84-84-56-56-140 140 140 140Zm160-20v80h240v-80H440Z"/>
                  </svg>
                </div>
                <h3 className="font-sora text-xl font-semibold text-on-surface mb-2">Práctica Real</h3>
                <p className="text-on-surface-variant text-sm">
                  Escribe código desde el primer segundo en nuestro editor interactivo integrado.
                </p>
              </div>

              {/* Racha de Éxito */}
              <div className="glass-card p-8 rounded-xl group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor" 
                    className="text-tertiary w-[32px] h-[32px]"
                  >
                    <path d="M480-80q-106 0-192-56.5T151-290q-13-21-2-43.5t35-22.5q114-16 182.5-101.5T435-654q4-11 13-18.5t20-9.5q13-2 23.5 4.5T505-658q19 50 63 125t116 151q64 67 90 128t26 126q0 104-74.5 178.5T480-80Zm0-80q71 0 120.5-49.5T650-330q0-46-17.5-91.5T580-516q-52-61-90.5-121.5T444-762q-47 70-109 133.5T202-536q23 75 80.5 125.5T418-356q13 1 21 10.5t5 22.5q-12 36-12 67.5t5 61.5q12 17 25 24.5t18-4.5q1-1 3-3.5t5-6.5q4-7 4-15.5t-3.5-15q-10.5-17-10.5-35.5t8-33.5q24-38 67-62.5t89-24.5q-19 52-51 98.5T492-230q-9 9-11 21t4 22q9 17 25.5 24.5T544-168q18-18 31.5-39.5T591-254q28 20 48.5 48.5T660-146q-41 33-91.5 49.5T480-160Z"/>
                  </svg>
                </div>
                <h3 className="font-sora text-xl font-semibold text-on-surface mb-2">Racha de Éxito</h3>
                <p className="text-on-surface-variant text-sm">
                  Gamificación diseñada para mantenerte motivado y convertir el estudio en un hábito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Section (Mock Terminal) */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary-container ambient-glow rounded-full"></div>
          <div className="max-w-[1000px] mx-auto px-5 md:px-8 relative z-10">
            <div className="bg-surface-dim rounded-xl overflow-hidden shadow-2xl border border-white/10">
              {/* Terminal Header */}
              <div className="bg-surface-container-high px-6 py-3 flex justify-between items-center border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                </div>
                <div className="text-on-surface-variant font-jetbrains text-xs">index.js — NanoCode IDE</div>
                <div className="w-10"></div>
              </div>
              
              {/* Terminal Content Animado */}
              <div className="p-8 font-jetbrains text-sm leading-relaxed overflow-x-auto bg-surface-container-lowest/50">
                {[
                  { num: 1, content: <><span className="text-secondary">function</span> <span className="text-primary">calculateProgress</span>(streak, days) {"{"}</> },
                  { num: 2, content: <span className="text-on-surface-variant/50 ml-4">// Check if user is on fire</span> },
                  { num: 3, content: <><span className="text-secondary ml-4">if</span> (streak &gt; <span className="text-secondary">7</span>) {"{"}</> },
                  { num: 4, content: <><span className="text-secondary ml-8">return</span> <span className="text-tertiary">"🚀 Master Level Unlocked"</span>;</> },
                  { num: 5, content: <span className="ml-4">{"}"}</span> },
                  { num: 6, content: <><span className="text-secondary ml-4">return</span> <span className="text-tertiary">"Keep going!"</span>;</> },
                  { num: 7, content: <span>{"}"}</span> }
                ].map((line, idx) => (
                  <div 
                    key={line.num}
                    className="flex gap-4 transition-all duration-500 ease-out"
                    style={{
                      opacity: visibleLines > idx ? 1 : 0,
                      transform: visibleLines > idx ? "translateY(0px)" : "translateY(10px)"
                    }}
                  >
                    <span className="text-on-surface-variant/30 select-none w-4">{line.num}</span>
                    <span>{line.content}</span>
                  </div>
                ))}
                
                {/* Output Line */}
                <div 
                  className="mt-4 pt-4 border-t border-white/5 transition-all duration-500 ease-out"
                  style={{
                    opacity: visibleLines >= 8 ? 1 : 0,
                    transform: visibleLines >= 8 ? "translateY(0px)" : "translateY(10px)"
                  }}
                >
                  <span className="text-tertiary font-bold">Output: </span>
                  <span className="text-on-surface">"🚀 Master Level Unlocked"</span>
                </div>
              </div>
            </div>
          </div> {/* <--- AQUÍ FALTABA ESTE DIV QUE COMENTABAS EN TU ERROR */}
        </section>

        {/* Cómo funciona */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="mb-12 text-center md:text-left">
              <h2 className="font-sora text-2xl md:text-3xl font-semibold text-on-surface">Cómo funciona</h2>
              <p className="text-on-surface-variant mt-1 text-sm">Tu viaje hacia el dominio tecnológico en tres sencillos pasos.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-between relative">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-sora text-2xl font-bold mb-4 shadow-[0_0_30px_rgba(184,195,255,0.3)]">
                  1
                </div>
                <h4 className="font-sora text-lg font-semibold mb-2">Elige tu ruta</h4>
                <p className="text-on-surface-variant text-sm">Desde fundamentos de programación hasta desarrollo web avanzado.</p>
              </div>
              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-sora text-2xl font-bold mb-4 shadow-[0_0_30px_rgba(221,183,255,0.3)]">
                  2
                </div>
                <h4 className="font-sora text-lg font-semibold mb-2">Reto diario</h4>
                <p className="text-on-surface-variant text-sm">Completa un reto interactivo de 5 minutos diseñado para tu nivel actual.</p>
              </div>
              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-sora text-2xl font-bold mb-4 shadow-[0_0_30px_rgba(148,219,0,0.3)]">
                  3
                </div>
                <h4 className="font-sora text-lg font-semibold mb-2">Logros</h4>
                <p className="text-on-surface-variant text-sm">Desbloquea certificados y medallas mientras construyes tu portafolio.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full py-12 px-5 md:px-8 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="font-sora text-xl font-bold text-primary">
              NanoCode
            </div>
            <p className="text-on-surface-variant text-xs text-center md:text-left max-w-xs">
              © {new Date().getFullYear()} NanoCode. Transforma tu carrera 5 minutos a la vez.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Privacidad</a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Términos</a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">Contacto</a>
          </nav>
        </div>
      </footer>
    </>
  );
}