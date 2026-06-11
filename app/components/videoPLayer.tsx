import React from "react";

interface VideoPlayerProps {
  src: string; // URL de YouTube en formato embed: https://www.youtube.com/embed/...
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title = "NanoCode Lesson" }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-800 bg-black/50 shadow-lg shadow-cyan-400/5">
      {/* Barra de ventana decorativa */}
      <div className="flex items-center gap-2 border-b border-slate-800/60 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-slate-500">{title}</span>
      </div>

      {/* Contenedor del iframe con aspect-video */}
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;