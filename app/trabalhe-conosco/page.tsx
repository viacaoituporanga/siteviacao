import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Truck, Shield, Award, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrabalheConoscoPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Estabilidade",
      description: "Empresa sólida com anos de tradição no mercado",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Faça parte de uma equipe premiada e respeitada",
    },
    {
      icon: Users,
      title: "Equipe Unida",
      description: "Ambiente de trabalho colaborativo e respeitoso",
    },
    {
      icon: Truck,
      title: "Frota Moderna",
      description: "Trabalhe com veículos de última geração",
    },
  ]

  const positions = [
    {
      title: "Motorista de Ônibus",
      requirements: [
        "CNH categoria D válida",
        "Experiência comprovada em transporte de passageiros",
        "Curso de Transporte Coletivo atualizado",
        "Disponibilidade para viagens",
      ],
    },
    {
      title: "Motorista de Turismo",
      requirements: [
        "CNH categoria D válida",
        "Experiência em turismo e excursões",
        "Conhecimento de rotas turísticas",
        "Boa comunicação e atendimento ao cliente",
      ],
    },
    {
      title: "Mecânico",
      requirements: [
        "Experiência em manutenção de ônibus",
        "Conhecimento em sistemas elétricos e mecânicos",
        "Curso técnico em mecânica (desejável)",
        "Disponibilidade para trabalhar em turnos",
      ],
    },
    {
      title: "Auxiliar Administrativo",
      requirements: [
        "Ensino médio completo",
        "Conhecimento em informática",
        "Experiência em atendimento ao cliente",
        "Organização e responsabilidade",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trabalhe Conosco</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Faça parte da nossa equipe e construa uma carreira sólida no transporte rodoviário
            </p>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se à Nossa Família</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A Viação Ituporanga está sempre em busca de profissionais qualificados e comprometidos para integrar
                  nossa equipe. Se você é um motorista experiente, mecânico especializado ou profissional do transporte,
                  queremos conhecê-lo!
                </p>
                <p>
                  Oferecemos um ambiente de trabalho estável, com oportunidades de crescimento profissional e uma equipe
                  que valoriza a segurança, qualidade e excelência no atendimento.
                </p>
                <p>
                  Venha fazer parte de uma empresa que é referência no Alto Vale do Itajaí e contribua para conectar
                  pessoas e destinos com segurança e conforto.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/bus-exterior.jpg"
                alt="Equipe SuperBus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Trabalhar Conosco?</h2>
            <p className="text-lg text-muted-foreground">Benefícios e vantagens de fazer parte da nossa equipe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vagas Disponíveis</h2>
            <p className="text-lg text-muted-foreground">Confira as oportunidades em nossa empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Requisitos:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Fazer Parte da Nossa Equipe?</h2>
          <p className="text-xl mb-8">
            Envie seu currículo e venha construir uma carreira sólida no transporte rodoviário
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3"
          >
            <Link href="mailto:viacaoituporanga@gmail.com?subject=Candidatura - Trabalhe Conosco">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Currículo
            </Link>
          </Button>
          <p className="text-sm mt-4 text-primary-foreground/80">
            E-mail: viacaoituporanga@gmail.com | Assunto: "Candidatura - [Nome da Vaga]"
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
