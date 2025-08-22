import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Medal, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PremiacoesPage() {
  const awards = [
    {
      year: "2023",
      title: "Melhor Empresa de Transporte Rodoviário",
      organization: "Associação Comercial do Alto Vale do Itajaí",
      description: "Reconhecimento pela excelência em serviços de transporte e atendimento ao cliente.",
      icon: Trophy,
      category: "Excelência",
    },
    {
      year: "2022",
      title: "Prêmio Segurança no Transporte",
      organization: "DETRAN/SC",
      description: "Premiação por manter os mais altos padrões de segurança na frota e operações.",
      icon: Shield,
      category: "Segurança",
    },
    {
      year: "2022",
      title: "Empresa Destaque em Turismo",
      organization: "Secretaria de Turismo de Santa Catarina",
      description: "Reconhecimento pelos serviços de turismo e contribuição para o desenvolvimento regional.",
      icon: Star,
      category: "Turismo",
    },
    {
      year: "2021",
      title: "Certificação ISO 9001",
      organization: "Bureau Veritas",
      description: "Certificação internacional de qualidade em gestão e processos operacionais.",
      icon: Medal,
      category: "Qualidade",
    },
    {
      year: "2021",
      title: "Prêmio Sustentabilidade",
      organization: "Federação das Empresas de Transporte de SC",
      description: "Reconhecimento pelas práticas sustentáveis e responsabilidade ambiental.",
      icon: Award,
      category: "Sustentabilidade",
    },
  ]

  const certifications = [
    "ISO 9001 - Sistema de Gestão da Qualidade",
    "Certificação ANTT - Agência Nacional de Transportes Terrestres",
    "Selo de Qualidade em Turismo - Ministério do Turismo",
    "Certificação Ambiental - Programa Empresa Limpa",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premiações & Reconhecimentos</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Orgulhamo-nos dos reconhecimentos recebidos pela nossa dedicação à excelência
            </p>
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Trajetória de Conquistas</h2>
            <p className="text-lg text-muted-foreground">
              Cada prêmio representa nosso compromisso com a qualidade e excelência
            </p>
          </div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <award.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold">{award.title}</h3>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                          <Badge variant="secondary">{award.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {award.year}
                          </div>
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{award.organization}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Qualidade Reconhecida</h2>
          <p className="text-xl mb-8">
            Estes reconhecimentos são resultado do nosso compromisso diário com a excelência. Viaje conosco e
            experimente a diferença de uma empresa premiada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3"
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8 py-3"
            >
              <Link href="/servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
