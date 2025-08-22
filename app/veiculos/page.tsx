import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Wifi,
  Tv,
  Armchair,
  Snowflake,
  Bath,
  Package,
  Star,
  MessageCircle,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { VideoWithFullscreen } from "@/components/video-with-fullscreen"

// Ajuste as fotos conforme quiser (os caminhos abaixo buscam em /public/images)
const fleetImages = [
  { src: "/images/van.jpg",                alt: "Van",                 title: "Van" },
  { src: "/images/micro-onibus.jpg",       alt: "Micro ônibus",        title: "Micro ônibus" },
  { src: "/images/onibus-executivo.jpg",   alt: "Ônibus Executivo",    title: "Ônibus Executivo" },
  { src: "/images/onibus-leito-total.jpg", alt: "Ônibus Leito Total",  title: "Ônibus Leito Total" },
  // { src: "/images/bus-exterior.jpg",       alt: "Double Decker",       title: "SuperBus Double Decker" },
]

const doubleDeckerFeatures = [
  { icon: Wifi,      title: "Internet via Starlink",    description: "Conexão de alta velocidade durante toda a viagem" },
  { icon: Tv,        title: "TV ao Vivo + Streaming",   description: "Filmes, séries e canais ao vivo para seu entretenimento" },
  { icon: Armchair,  title: "Poltronas Tipo Leito",     description: "Assentos reclináveis com máximo conforto" },
  { icon: Snowflake, title: "Ar-Condicionado",          description: "Climatização perfeita em todas as estações" },
  { icon: Bath,      title: "Banheiro",                 description: "Facilidades completas para viagens longas" },
  { icon: Package,   title: "Amplo Bagageiro",          description: "Espaço generoso para suas bagagens" },
]

const additionalFeatures = [
  { icon: Shield, title: "Segurança Total", description: "Sistemas de segurança avançados e motoristas qualificados" },
  { icon: Clock,  title: "Pontualidade",    description: "Compromisso com horários e planejamento de rotas" },
  { icon: Star,   title: "Serviço Premium", description: "Atendimento diferenciado e experiência única" },
]

export default function VeiculosPage() {
  // >>> AQUI: usando o arquivo local em /public/videos/superbus.mp4
  // troque o número da versão (v=1, v=2...) quando atualizar o arquivo
  const VIDEO_SRC = "/videos/superbus.mp4?v=1"

  const WHATSAPP = "554735331066"
  const WHATSAPP_TEXT = encodeURIComponent("Olá! Gostaria de um orçamento de fretamento.")
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa Frota</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Veículos modernos e confortáveis para uma experiência de viagem inesquecível
            </p>
          </div>
        </div>
      </section>

      {/* Double Decker Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg px-4 py-2">
              DESTAQUE ESPECIAL
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SuperBus Double Decker</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que há de mais moderno em conforto e tecnologia para suas viagens
            </p>
          </div>

          {/* Vídeo com autoplay e botão “Tela cheia” (custom) */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <VideoWithFullscreen
                src={VIDEO_SRC}
                poster="/images/bus-exterior.jpg"
                className="aspect-video"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {doubleDeckerFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Gallery com Lightbox (4 cards em linha no desktop, responsivo no mobile) */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria da Frota</h2>
            <p className="text-lg text-muted-foreground">
              Conheça nossos veículos por dentro e por fora
            </p>
          </div>

          <GalleryLightbox images={fleetImages} />
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais da Nossa Frota</h2>
            <p className="text-lg text-muted-foreground">Qualidade e excelência em cada detalhe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experimente o Conforto SuperBus</h2>
          <p className="text-xl mb-8">
            Reserve sua viagem e descubra por que somos referência em transporte premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={WHATSAPP_URL} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp (47) 3533-1066
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
