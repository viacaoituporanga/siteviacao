"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize2, VolumeX, Volume2, Pause, Play } from "lucide-react"
import clsx from "clsx"

type AutoVideoProps = {
  poster?: string
  sources: string[]                // ordem de tentativa (local depois fallback)
  className?: string
}

export function AutoVideo({ poster, sources, className }: AutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true) // começa tocando
  const [hover, setHover] = useState(false)

  // tenta dar play automaticamente (autoplay exige muted = true)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = async () => {
      try {
        await v.play()
        setPlaying(!v.paused)
      } catch {
        // alguns navegadores podem bloquear; se bloquear, mostra o botão de play
        setPlaying(false)
      }
    }
    tryPlay()
  }, [])

  const togglePlay = async () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      await v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const goFullscreen = async () => {
    const v = videoRef.current
    if (!v) return
    if (v.requestFullscreen) await v.requestFullscreen()
    // Safari iOS
    // @ts-ignore
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen()
  }

  return (
    <div
      className={clsx("relative overflow-hidden rounded-xl border bg-black", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <video
        ref={videoRef}
        poster={poster}
        muted={muted}
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {sources.map((src, i) => (
          <source key={i} src={src} type="video/mp4" />
        ))}
        Seu navegador não suporta vídeo HTML5.
      </video>

      {/* Indicador central de play/pause (só aparece quando pausado ou passando o mouse) */}
      <button
        type="button"
        aria-label={playing ? "Pausar" : "Reproduzir"}
        onClick={togglePlay}
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur px-4 py-4 transition opacity-0",
          (!playing || hover) && "opacity-100"
        )}
      >
        {playing ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
      </button>

      {/* Controles flutuantes (mute / fullscreen) */}
      <div
        className={clsx(
          "pointer-events-auto absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/50 px-2 py-1 backdrop-blur transition",
          hover ? "opacity-100" : "opacity-0"
        )}
      >
        <button
          type="button"
          onClick={toggleMute}
          className="rounded-full p-2 hover:bg-white/10"
          aria-label={muted ? "Ativar som" : "Silenciar"}
        >
          {muted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
        </button>
        <button
          type="button"
          onClick={goFullscreen}
          className="rounded-full p-2 hover:bg-white/10"
          aria-label="Tela cheia"
        >
          <Maximize2 className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}
