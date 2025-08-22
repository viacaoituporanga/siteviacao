"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "554735331066"
  const message = "Olá! Gostaria de solicitar informações sobre os serviços da Viação Ituporanga."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* WhatsApp Float Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-lg border p-3 animate-bounce">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-700 pr-4">
                <strong>Precisa de ajuda?</strong>
                <br />
                Fale conosco pelo WhatsApp!
              </p>
              <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
            </div>
          )}

          {/* WhatsApp Button */}
          <Button
            asChild
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          >
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="sr-only">Contato via WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Phone Float Button (Secondary) */}
      <div
        className={`fixed bottom-24 right-6 z-40 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <Button
          asChild
          size="sm"
          variant="outline"
          className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 border-2"
        >
<Link
  href="https://wa.me/554735331066?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="text-lg">💬</span>
  <span className="sr-only">Enviar mensagem no WhatsApp (47) 3533-1066</span>
</Link>
        </Button>
      </div>
    </>
  )
}
