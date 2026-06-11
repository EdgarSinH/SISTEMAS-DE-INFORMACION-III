"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Play, Terminal } from "lucide-react";

// Tipos de línea para el resaltado de sintaxis
type LineType = "command" | "output" | "comment" | "highlight" | "info" | "error";

interface TerminalLine {
  type: LineType;
  text: string;
}

interface TerminalChallengeProps {
  start: boolean;
}

// Mapa de colores según el tipo de línea
const lineColors: Record<LineType, string> = {
  command: "text-cyan-400",
  output: "text-green-400",
  comment: "text-slate-500",
  highlight: "text-yellow-300",
  info: "text-slate-300",
  error: "text-red-400",
};

const TerminalChallenge: React.FC<TerminalChallengeProps> = ({ start }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  // Contenido completo de la lección PERT/CPM
  const lines: TerminalLine[] = useMemo(
    () => [
      { type: "comment", text: "// EJERCICIO: Cálculo del Tiempo Esperado (PERT) y Ruta Crítica" },
      { type: "info", text: "" },
      { type: "comment", text: "// Datos del proyecto (O, M, P en días)" },
      { type: "command", text: "const tareas = [" },
      { type: "command", text: "  { id: 'A', predecesoras: [],    O: 2, M: 4, P: 6 }," },
      { type: "command", text: "  { id: 'B', predecesoras: ['A'], O: 3, M: 5, P: 9 }," },
      { type: "command", text: "  { id: 'C', predecesoras: ['A'], O: 1, M: 2, P: 3 }," },
      { type: "command", text: "  { id: 'D', predecesoras: ['B','C'], O: 4, M: 6, P: 8 }," },
      { type: "command", text: "  { id: 'E', predecesoras: ['D'], O: 2, M: 3, P: 4 }" },
      { type: "command", text: "];" },
      { type: "info", text: "" },
      { type: "comment", text: "// 1. Calcular Tiempo Esperado (TE) para cada tarea" },
      { type: "command", text: "tareas.forEach(t => {" },
      { type: "command", text: "  t.TE = (t.O + 4*t.M + t.P) / 6;" },
      { type: "command", text: "});" },
      { type: "info", text: "" },
      { type: "comment", text: "// Resultados:" },
      { type: "output", text: "A: TE = 4.00" },
      { type: "output", text: "B: TE = 5.33" },
      { type: "output", text: "C: TE = 2.00" },
      { type: "output", text: "D: TE = 6.00" },
      { type: "output", text: "E: TE = 3.00" },
      { type: "info", text: "" },
      { type: "comment", text: "// 2. Cálculo de la Ruta Crítica (ES, EF, LS, LF)" },
      { type: "command", text: "function calcularRutaCritica(tareas) {" },
      { type: "command", text: "  // Se calcula early start/finish y luego late start/finish" },
      { type: "command", text: "  // Se identifica holgura = 0" },
      { type: "command", text: "  ..." },
      { type: "command", text: "}" },
      { type: "info", text: "" },
      { type: "output", text: "Ruta Crítica: A → B → D → E" },
      { type: "output", text: "Duración total del proyecto: 18.33 días" },
      { type: "info", text: "" },
      { type: "highlight", text: "✓ ¡Reto completado! Has aplicado PERT-CPM correctamente." },
    ],
    []
  );

  // Efecto de animación: añade una línea cada 80ms cuando se activa `start`
  useEffect(() => {
    if (!start) {
      setVisibleCount(0);
      return;
    }

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [start, lines]);

  return (
    <div className="flex h-full flex-col">
      {/* Cabecera de la terminal */}
      <div className="flex items-center justify-between border-b border-slate-800/60 px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-cyan-400" />
          <span className="font-mono text-xs text-slate-400">desafío_pert.js</span>
        </div>
        {!start && (
          <span className="font-mono text-xs text-slate-600">presiona Empezar Reto</span>
        )}
      </div>

      {/* Área de líneas animadas */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
        {lines.slice(0, visibleCount).map((line, index) => (
          <div key={index} className="flex">
            {/* Prompt para comandos */}
            {line.type === "command" && (
              <span className="mr-2 select-none text-cyan-600">&gt;</span>
            )}
            <span className={lineColors[line.type]}>{line.text}</span>
          </div>
        ))}
        {/* Cursor parpadeante al final mientras se escribe */}
        {visibleCount < lines.length && start && (
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400" />
        )}
      </div>
    </div>
  );
};

export default TerminalChallenge;