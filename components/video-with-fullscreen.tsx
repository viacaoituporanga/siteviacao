"use client";

import { useRef } from "react";
import { Maximize2 } from "lucide-react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

export function VideoWithFullscreen({ src, poster, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const goFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;

    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if ((el as any).webkitRequestFullscreen) {
      (el as any).webkitRequestFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden rounded-xl">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`w-full h-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Botão flutuante "Tela cheia" */}
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Tela cheia"
        className="absolute right-3 bottom-3 rounded-lg bg-black/60 px-3 py-2 text-white backdrop-blur hover:bg-black/70 transition"
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          <Maximize2 className="h-4 w-4" />
          Tela cheia
        </span>
      </button>
    </div>
  );
}

