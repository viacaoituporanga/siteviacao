import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Serviços", href: "/servicos" },
    { name: "Veículos", href: "/veiculos" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
   // { name: "Premiações", href: "/premiacoes" },
  //  { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ]

  const socialMedia = [
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/554735331066", color: "hover:text-green-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/viacaoituporanga", color: "hover:text-pink-500" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/vituporanga", color: "hover:text-blue-500" },
  ]

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10">
          {/* Coluna 1 — Sobre / Logo */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo-superbus.png"
                alt="Viação Ituporanga - SuperBus"
                width={160}
                height={54}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <p className="text-lg font-semibold text-primary mb-3">
              Viação Ituporanga – Fretamento e Turismo
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              Transporte rodoviário de qualidade com segurança, conforto e pontualidade.
              Atendemos toda a região do Alto Vale do Itajaí.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              {socialMedia.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors ${s.color}`}
                  aria-label={s.name}
                >
                  <s.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colunas de contato */}
          <div className="lg:col-span-6">
            <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>

            {/* 12 colunas em telas grandes para dar mais espaço ao e-mail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Telefones (3/12) */}
              <div className="lg:col-span-3">
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 text-primary mr-2" />
                  <span className="font-medium text-sm">Telefones</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="tel:+554735331066" className="text-muted-foreground hover:text-primary transition-colors">
                      (47) 3533-1066
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5547991083238" className="text-muted-foreground hover:text-primary transition-colors">
                      (47) 99108-3238
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5547991223330" className="text-muted-foreground hover:text-primary transition-colors">
                      (47) 99122-3330
                    </Link>
                  </li>
                </ul>
              </div>

              {/* E-mail (6/12) — não quebra linha e tem mais espaço */}
              <div className="lg:col-span-6">
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 text-primary mr-2" />
                  <span className="font-medium text-sm">E-mail</span>
                </div>
                <div className="text-sm">
                  <Link
                    href="mailto:contato@viacaoituporanga.com.br"
                    className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    contato@viacaoituporanga.com.br
                  </Link>
                </div>
              </div>

              {/* Endereço (3/12) */}
              <div className="lg:col-span-3">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-primary mr-2" />
                  <span className="font-medium text-sm">Endereço</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="https://www.google.com/maps/place/Via%C3%A7%C3%A3o+Ituporanga/@-27.417473,-49.5999284,1120m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94df916a1da08155:0xab04bbe211724563!8m2!3d-27.4174731!4d-49.5950521!16s%2Fg%2F11bv30gj9j?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="hover:text-primary transition-colors"
                    >
                      Rua Pref. Vergílio Scheler, 1477
                    </Link>
                  </li>
                  <li>Centro, Ituporanga – SC</li>
                  <li>CEP 88400-000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logos de Entidades & Parceiros */}
        <div className="mt-12">
          <h4 className="text-sm font-semibold text-muted-foreground mb-5 text-center">
            Entidades & Parceiros
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {/* AETTUSC */}
            <a href="https://www.aettusc.com.br" target="_blank" rel="noopener noreferrer" aria-label="AETTUSC">
              <Image
                src="/images/Logo-Aettusc.jpeg"
                alt="AETTUSC"
                width={220}
                height={80}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>

            {/* ANTT (maior) */}
            <a href="https://www.gov.br/antt" target="_blank" rel="noopener noreferrer" aria-label="ANTT">
              <Image
                src="/images/logo-antt.png"
                alt="ANTT"
                width={320}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>

            {/* ANTTUR */}
            <a href="https://www.anttur.org.br/" target="_blank" rel="noopener noreferrer" aria-label="ANTTUR">
              <Image
                src="/images/Logo-Anttur.png"
                alt="ANTTUR"
                width={220}
                height={80}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>

            {/* ARESC */}
            <a href="https://www.aresc.sc.gov.br" target="_blank" rel="noopener noreferrer" aria-label="ARESC">
              <Image
                src="/images/Logo-aresc.png"
                alt="ARESC"
                width={240}
                height={90}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>

            {/* SINFRETTUSC */}
            <a href="https://www.sinfrettusc.org.br/" target="_blank" rel="noopener noreferrer" aria-label="SINFRETTUSC">
              <Image
                src="/images/Logo-Sinfrettusc.jpeg"
                alt="SINFRETTUSC"
                width={280}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-border mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
            <div>
              © {currentYear} Viação Ituporanga - SuperBus Turismo. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contato" className="hover:text-primary transition-colors">
          
             </Link>
            
              <Link href="/contato" className="hover:text-primary transition-colors">
       
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
