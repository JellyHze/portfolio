"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (form.website) {
      setError("Form tidak dapat diproses.");
      return;
    }

    if (!name || !email || !message) {
      setError("Nama, email, dan pesan wajib diisi.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Format email belum valid.");
      return;
    }

    if (message.length < 10) {
      setError("Pesan terlalu pendek. Tulis minimal 10 karakter.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Halo, saya ${name}.\n\nEmail: ${email}\n\nPesan:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setForm(initialFormState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8"
    >
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Nama kamu"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="email@example.com"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tulis pesan kamu di sini..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
        />
      </div>

      {error ? (
        <p className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      {isSubmitted ? (
        <p className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-sm text-violet-200">
          Email client berhasil dibuka. Silakan lanjutkan pengiriman dari email
          kamu.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-zinc-500">
          Pesan akan dibuka melalui aplikasi email kamu. Tidak ada data yang
          disimpan di website ini.
        </p>

        <button
          type="submit"
          className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}