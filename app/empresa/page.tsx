import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function EmpresaPage() {
  const locations = [
    {
      type: "Sede",
      city: "Ituporanga/SC",
      address: "Rua Pref. Vergílio Scheler, 1477 – Centro",
      cep: "CEP 88400-000",
    },
    {
      type: "Filial",
      city: "Rio do Sul/SC",
      address: "Rua Lauro Müler, 350 - Budag",
      cep: "CEP 89160-000",
    },
  ]

  const values = [
    {
      title: "Segurança",
      description:
        "Priorizamos a segurança de nossos passageiros com frota moderna, manutenção rigorosa e motoristas qualificados.",
    },
    {
      title: "Conforto",
      description:
        "Oferecemos o máximo conforto em nossas viagens com poltronas reclináveis, ar-condicionado e amenidades premium.",
    },
    {
      title: "Qualidade",
      description: "Mantemos os mais altos padrões de qualidade em todos os aspectos do nosso serviço de transporte.",
    },
    {
      title: "Compromisso",
      description: "Nosso compromisso é com a total satisfação de nossos clientes, sempre superando expectativas.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa Empresa</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Tradição e inovação no transporte rodoviário do Alto Vale do Itajaí
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A Viação Ituporanga nasceu com o propósito de conectar pessoas e lugares, oferecendo transporte
                  rodoviário de qualidade na região do Alto Vale do Itajaí. Com sede em Ituporanga e operações em Rio do
                  Sul, construímos nossa reputação baseada na confiança e excelência no atendimento.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossos serviços para atender tanto o público corporativo quanto o lazer,
                  sempre mantendo nosso compromisso com a segurança, pontualidade e conforto dos passageiros.
                </p>
                <p>
                  Hoje, somos reconhecidos como referência em transporte rodoviário, com uma frota moderna e uma equipe
                  dedicada a proporcionar as melhores experiências de viagem.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/bus-interior.jpg"
                alt="Interior do ônibus SuperBus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Garantir viagens seguras, confortáveis e pontuais, conectando pessoas e destinos com excelência no
              atendimento e compromisso com a satisfação total de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os pilares que sustentam nossa excelência no transporte rodoviário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossas Localizações</h2>
            <p className="text-lg text-muted-foreground">Estrategicamente posicionados para melhor atendê-lo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{location.type}</h3>
                  <h4 className="text-xl font-medium mb-4">{location.city}</h4>
                  <p className="text-muted-foreground mb-2">{location.address}</p>
                  {location.cep && <p className="text-muted-foreground">{location.cep}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
