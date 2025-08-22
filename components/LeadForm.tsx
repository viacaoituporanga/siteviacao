"use client";

import React, { useState } from "react";

export default function LeadForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE || "";
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      alert("Configure NEXT_PUBLIC_FORMSPREE no .env.local");
      return;
    }
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      setStatus(res.ok ? "ok" : "err");
      if (res.ok) form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <h3 className="text-lg font-semibold">Peça seu orçamento</h3>

      {/* Formspree exige name="email" */}
      <input
        name="nome"
        required
        placeholder="Seu nome"
        className="rounded-xl border p-3"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Seu e-mail"
        className="rounded-xl border p-3"
      />
      <input
        name="telefone"
        placeholder="Telefone / WhatsApp"
        className="rounded-xl border p-3"
      />
      <input name="origem" placeholder="Origem" className="rounded-xl border p-3" />
      <input name="destino" placeholder="Destino" className="rounded-xl border p-3" />
      <input type="date" name="data" className="rounded-xl border p-3" />
      <input
        type="number"
        name="passageiros"
        min={1}
        placeholder="Nº de passageiros"
        className="rounded-xl border p-3"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Detalhes da viagem"
        className="rounded-xl border p-3"
      />

      {/* extras */}
      <input type="hidden" name="_subject" value="Novo orçamento pelo site" />
      <input type="text" name="_gotcha" className="hidden" />

      <button
        disabled={status === "loading"}
        className="rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-700"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-emerald-700">
          Recebemos! Em breve retornamos.
        </p>
      )}
      {status === "err" && (
        <p className="text-sm text-red-600">Falha ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}

