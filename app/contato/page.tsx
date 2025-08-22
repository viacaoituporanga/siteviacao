"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react"

// ENV
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(47) 3533-1066"
const WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP || "554735331066").replace(/[^\d]/g, "")
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "viacaoituporanga@gmail.com"
const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE || ""

const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de fretamento."
)}`

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    date: "",
    passengers: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE) {
      alert("Configure NEXT_PUBLIC_FORMSPREE no arquivo .env.local")
      return
    }
    setStatus("loading")

    const data = new FormData()
    data.append("nome", formData.name)
    data.append("email", formData.email)
    data.append("telefone", formData.phone)
    data.append("origem", formData.origin)
    data.append("destino", formData.destination)
    data.append("data", formData.date)
    data.append("passageiros", formData.passengers)
    data.append("message", formData.message)
    data.append("_subject", `Solicitação de Orçamento - ${formData.name}`)
    data.append("_gotcha", "")

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setStatus("ok")
        setFormData({
          name: "",
          email: "",
          phone: "",
          origin: "",
          destination: "",
          date: "",
          passengers: "",
          message: "",
        })
      } else {
        setStatus("err")
      }
    } catch {
      setStatus("err")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        { label: "WhatsApp", value: PHONE_DISPLAY, link: waUrl },
        { label: "Comercial", value: "(47) 99108-3238", link: "tel:+5547991083238" },
        { label: "Atendimento", value: "(47) 99122-3330", link: "tel:+5547991223330" },
      ],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [{ label: "Comercial", value: EMAIL, link: `mailto:${EMAIL}` }],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        {
          label: "Sede",
          value:
            "Rua Pref. Vergílio Scheler, 1477 – Centro, Ituporanga – SC – CEP 88400-000",
          link: "https://www.google.com/maps/place/Via%C3%A7%C3%A3o+Ituporanga/@-27.417473,-49.5999284,1120m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94df916a1da08155:0xab04bbe211724563!8m2!3d-27.4174731!4d-49.5950521!16s%2Fg%2F11bv30gj9j",
        },
        {
          label: "Filial",
          value:
            "Rua Lauro Müler, 350 – Budag, Rio do Sul – SC – CEP 89160-000",
          link: "https://www.google.com/maps/place/Via%C3%A7%C3%A3o+Ituporanga+-+Filial+Rio+do+Sul/@-27.2239782,-49.6593687,1122m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94dfb95c4dd3abc1:0xd2f27f27785400b3!8m2!3d-27.2239783!4d-49.6544924!16s%2Fg%2F11tsgvhsx3",
        },
      ],
    },
  ]

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@viacaoituporanga", link: "https://instagram.com/viacaoituporanga" },
    { icon: Facebook,  name: "Facebook",  handle: "@viacaoituporanga", link: "https://www.facebook.com/vituporanga" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contato & Reservas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Entre em contato conosco e solicite seu orçamento personalizado
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título em largura total */}
          <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>

          {/* IMPORTANTE: items-stretch + colunas como flex/altura total para alinhar rodapés */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Coluna Esquerda */}
            <div className="space-y-6 flex flex-col h-full">
              {contactInfo.map((info, index) => (
                <Card key={index} className="rounded-xl border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <div className="space-y-2">
                          {info.details.map((detail, i) => (
                            <div key={i}>
                              <span className="text-sm text-muted-foreground">{detail.label}:</span>
                              <br />
                              <Link
                                href={detail.link}
                                className="text-primary hover:text-primary/80 transition-colors"
                                target={detail.link.startsWith("http") ? "_blank" : undefined}
                              >
                                {detail.value}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coluna Direita (formulário + redes sociais embaixo) */}
            <div className="flex flex-col h-full">
              <Card className="rounded-xl border shadow-sm flex-1">
                <CardHeader>
                  <CardTitle>Formulário de Reservas</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="origin">Origem *</Label>
                        <Input id="origin" name="origin" value={formData.origin} onChange={handleChange} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="destination">Destino *</Label>
                        <Input id="destination" name="destination" value={formData.destination} onChange={handleChange} required className="mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Data da Viagem *</Label>
                        <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="passengers">Número de Passageiros *</Label>
                        <Input id="passengers" name="passengers" type="number" min="1" value={formData.passengers} onChange={handleChange} required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva detalhes adicionais sobre sua viagem..."
                        className="mt-1"
                      />
                    </div>

                    <input type="hidden" name="_subject" value={`Solicitação de Orçamento - ${formData.name}`} />
                    <input type="text" name="_gotcha" className="hidden" />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={status === "loading"}>
                      {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
                    </Button>

                    {status === "ok" && <p className="text-sm text-emerald-700">Recebemos sua solicitação! Em breve retornamos.</p>}
                    {status === "err" && <p className="text-sm text-red-600">Falha ao enviar. Tente novamente.</p>}
                  </form>
                </CardContent>
              </Card>

              {/* Redes sociais sempre embaixo, mantendo alinhamento de base com a coluna esquerda */}
              <Card className="mt-6 rounded-xl border shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {socialMedia.map((s, i) => (
                      <Link
                        key={i}
                        href={s.link}
                        target="_blank"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <s.icon className="w-5 h-5" />
                        <span>{s.handle}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossa Localização</h2>
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d-49.6123456!3d-27.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Pref.%20Verg%C3%ADlio%20Scheler%2C%201477%20-%20Centro%2C%20Ituporanga%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
