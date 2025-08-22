import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  // >>> adição mínima: monta o link do WhatsApp com mensagem <<<
  const waNumber = (process.env.NEXT_PUBLIC_WHATSAPP || "554735331066").replace(/[^\d]/g, "")
  const waMsg =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Olá! Gostaria de um orçamento de fretamento."
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/bus-exterior.jpg" alt="SuperBus Double Decker" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Uma boa viagem começa pela <span className="text-secondary">escolha do ônibus</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Transporte rodoviário de qualidade com conforto, segurança e pontualidade. Atendemos toda a região do Alto
          Vale do Itajaí.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3"
          >
            {/* >>> só mudei o href para usar waUrl e abrir em nova aba <<< */}
            <Link href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp (47) 3533-1066
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
          >
            <Link href="/contato">
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-2">
            <strong>Destaque:</strong> Fretamento contínuo de funcionários
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}