import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Award, Clock, Heart } from "lucide-react"

export function CompanyIntro() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Introduction */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Viação Ituporanga</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A Viação Ituporanga é uma empresa de transporte rodoviário de passageiros, com sede em Ituporanga/SC e
              filial em Rio do Sul/SC. Atendemos toda a região do Alto Vale do Itajaí com viagens especiais, fretamentos
              para empresas, universidades, escolas e o público em geral.
              <span className="text-primary font-semibold">
                {" "}
                Nosso objetivo é a total satisfação de nossos clientes.
              </span>
            </p>
          </div>

          {/* Nossas Localizações */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">Nossas Localizações</h3>
              <p className="text-muted-foreground">Estrategicamente posicionados para melhor atendê-lo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h4 className="font-serif text-xl font-semibold text-primary mb-2">Sede</h4>
                  <h5 className="font-medium text-lg mb-4">Ituporanga/SC</h5>
                  <p className="text-muted-foreground mb-2">Rua Pref. Vergílio Scheler, 1477 – Centro</p>
                  <p className="text-muted-foreground">CEP 88400-000</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h4 className="font-serif text-xl font-semibold text-primary mb-2">Filial</h4>
                  <h5 className="font-medium text-lg mb-4">Rio do Sul/SC</h5>
                  <p className="text-muted-foreground mb-2">R. Lauro Müler, 350 - Budag</p>
                  <p className="text-muted-foreground">CEP 89160-000</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center hover:shadow-lg transition-shadow duration-300">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Qualidade</h4>
              <p className="text-muted-foreground">Viagens seguras e confortáveis</p>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow duration-300">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Ponto e Chute</h4>
              <p className="text-muted-foreground">Agendamento flexível e rápidos embarques</p>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Atendimento</h4>
              <p className="text-muted-foreground">Equipe dedicada e profissional</p>
            </div>
            <div className="text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold text-primary mb-2">Localização</h4>
              <p className="text-muted-foreground">Estrategicamente posicionados para melhor atendê-lo</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Por que Viação Ituporanga?</h3>
            <p className="text-lg mb-4">Confie em nós para suas viagens especiais e fretamentos.</p>
            <p className="text-lg">Experiência, segurança e satisfação garantidas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
