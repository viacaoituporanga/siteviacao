import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Plane, Building, GraduationCap, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicosPage() {
  const services = [
    {
      icon: Users,
      title: "Fretamento Contínuo de Funcionários",
      description:
        "Transporte regular e confiável para empresas, garantindo pontualidade e conforto para seus colaboradores no trajeto casa-trabalho.",
      features: ["Horários personalizados", "Rotas otimizadas", "Frota dedicada", "Contratos flexíveis"],
    },
    {
      icon: Plane,
      title: "Viagens de Turismo e Excursões",
      description:
        "Experiências inesquecíveis com nossos ônibus premium, incluindo o exclusivo Double Decker com amenidades de primeira classe.",
      features: ["Roteiros personalizados", "Guias especializados", "Conforto premium", "Segurança total"],
    },
    {
      icon: Building,
      title: "Eventos Corporativos e Shows",
      description:
        "Transporte especializado para eventos corporativos, shows e transporte intermunicipal com logística completa.",
      features: ["Logística completa", "Frota moderna", "Atendimento 24h", "Planejamento detalhado"],
    },
    {
      icon: GraduationCap,
      title: "Universidades e Escolas",
      description:
        "Soluções de transporte educacional seguras e confiáveis para instituições de ensino e excursões pedagógicas.",
      features: ["Segurança reforçada", "Motoristas qualificados", "Acompanhamento pedagógico", "Preços especiais"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Soluções completas em transporte rodoviário para empresas e lazer
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atendemos Suas Necessidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções personalizadas tanto para o público corporativo quanto para lazer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Service Highlight */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">SuperBus Premium</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa frota premium oferece o que há de mais moderno em conforto e tecnologia para viagens longas e
                turismo de alto padrão.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Poltronas reclináveis tipo leito</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Internet via Starlink</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>TV ao vivo + Filmes e Séries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Ar-condicionado e banheiro</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Amplo bagageiro</span>
                </div>
              </div>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/veiculos">Ver Nossa Frota</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/bus-seats.jpg"
                alt="Poltronas premium SuperBus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Viajar Conosco?</h2>
          <p className="text-xl mb-8">Entre em contato e solicite um orçamento personalizado para suas necessidades</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="https://wa.me/5547355310666" target="_blank">
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
