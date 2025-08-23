import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Frota moderna com manutenção rigorosa e motoristas experientes",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com horários e planejamento de rotas otimizado",
    },
    {
      icon: Users,
      title: "Conforto",
      description: "Poltronas reclináveis, ar-condicionado e amenidades premium",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Excelência no atendimento e satisfação total do cliente",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre a Viação Ituporanga</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos a Viação Ituporanga, uma empresa especializada em transporte rodoviário de passageiros, com sede em Ituporanga/SC
            e filial em Rio do Sul/SC. Atendemos toda a região do Alto Vale do Itajaí, oferecendo viagens especiais e serviços de 
            fretamento para empresas, universidades, escolas e para o público em geral.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             
            Nosso compromisso é oferecer conforto, segurança e qualidade em cada viagem, sempre com o objetivo de garantir a total
            satisfação de nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
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
  )
}
