"use client";

import React, { useState } from "react";
import VideoPlayer from "./videoPLayer";
import TerminalChallenge from "./TerminalChallenger";
import { Play } from "lucide-react";

interface LessonAreaProps {
  videoSrc: string; // ej. "https://www.youtube.com/embed/dQw4w9WgXcQ"
}

const LessonArea: React.FC<LessonAreaProps> = ({ videoSrc }) => {
  const [challengeStarted, setChallengeStarted] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Columna del vídeo */}
        <div>
          <VideoPlayer src={videoSrc} title="PERT/CPM - Gestión de Proyectos" />
        </div>

        {/* Columna de la terminal con el reto */}
        <div className="relative flex min-h-[400px] flex-col rounded-lg border border-slate-800 bg-black/50 shadow-lg shadow-cyan-400/5 lg:min-h-0">
          <TerminalChallenge start={challengeStarted} />

          {/* Botón flotante para iniciar el reto (solo visible si no ha empezado) */}
          {!challengeStarted && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
              <button
                onClick={() => setChallengeStarted(true)}
                className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-mono text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/20 active:scale-95"
              >
                <Play className="h-4 w-4" />
                Empezar Reto
              </button>
              <p className="mt-4 max-w-xs text-center text-xs text-slate-500">
                Mira el vídeo primero y luego lanza el desafío interactivo
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LessonArea;