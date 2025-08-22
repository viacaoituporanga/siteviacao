"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type ImgItem = {
  src: string
  alt: string
  title: string
}

type Props = {
  images: ImgItem[]
}

export function GalleryLightbox({ images }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const close = useCallback(() => setOpen(false), [])
  const show = (i: number) => {
    setIndex(i)
    setOpen(true)
  }
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  // ESC / ← →
  useEffect(() => {
    if (!open) return
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") close()
      if (ev.key === "ArrowLeft") prev()
      if (ev.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, close])

  return (
    <>
      {/* grid responsiva com 4 colunas no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => show(i)}
            className="text-left rounded-xl overflow-hidden bg-card border hover:shadow-lg transition"
            aria-label={`Abrir ${img.title}`}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 20vw"
                priority={i < 2}
              />
            </div>
            <div className="p-4">
              <h3 className="text-center font-semibold">{img.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* modal/lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* fechar */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/90 hover:text-white"
            aria-label="Fechar"
          >
            <X className="w-7 h-7" />
          </button>

          {/* anterior */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 md:left-8 text-white/90 hover:text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* próxima */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 md:right-8 text-white/90 hover:text-white"
              aria-label="Próxima"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          {/* conteúdo (clique aqui NÃO fecha) */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-center">
              {/* imagem grande, contida na viewport */}
              {/* Usamos <img> nativo aqui para simplificar contain */}
              {/* (Next/Image também funcionaria, mas este garante fit imediato) */}
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-h-[75vh] w-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* legenda centralizada */}
            <div className="text-center text-white mt-4 text-lg font-semibold">
              {images[index].title}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
