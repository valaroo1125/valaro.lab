import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const WHATSAPP_NUMBER = "40729331789";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({
    tipCerere: "",
    prenume: "",
    nume: "",
    email: "",
    telefon: "",
    business: "",
    mesaj: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceIndex = params.get('service');
    if (serviceIndex !== null && c.optiuni[parseInt(serviceIndex)]) {
      setForm(prev => ({ ...prev, tipCerere: c.optiuni[parseInt(serviceIndex)] }));
    }
  }, []);

  function validate() {
    const errs = {};
    if (!form.tipCerere) errs.tipCerere = true;
    if (!form.prenume.trim()) errs.prenume = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = true;
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  function buildWhatsAppMessage() {
    const lines = [
      `📋 *${c.tipCerere}:* ${form.tipCerere}`,
      ``,
      `👤 *${c.despretine}*`,
      `${c.prenume}: ${form.prenume}`,
      `${c.nume}: ${form.nume}`,
      `${c.email}: ${form.email}`,
      `${c.telefon}: ${form.telefon || "-"}`,
      `${c.business}: ${form.business || "-"}`,
      ``,
      `💬 *${c.mesaj}:*`,
      form.mesaj || "-",
    ];
    return lines.join("\n");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const msg = buildWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  }

  const inputClass = `w-full px-4 py-3.5 text-white text-[15px] rounded-sm focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-200`;
  const inputStyle = {
    background: "#111111",
    border: "1px solid transparent",
    fontFamily: "'Inter', sans-serif",
  };
  const errorStyle = {
    ...inputStyle,
    border: "1px solid rgba(255,80,80,0.5)",
  };
  const labelClass = `block text-[13px] text-white/60 mb-2`;

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#050505", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-end px-8 md:px-14 py-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4"
        >
          <ArrowLeft size={14} />
          <span>{c.back}</span>
        </Link>
      </div>

      {/* Form container */}
      <div className="px-8 md:px-14 pb-20 max-w-3xl mx-auto">
        {/* Title */}
        <h1
          className="text-white font-black mb-10 leading-tight"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.02em",
            fontWeight: 900,
          }}
        >
          {c.title}
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          {/* Tip de cerere */}
          <div className="mb-8">
            <label className={labelClass} htmlFor="tipCerere">
              {c.tipCerere} <span className="text-white/40">{c.required}</span>
            </label>
            <div className="relative">
              <select
                id="tipCerere"
                name="tipCerere"
                value={form.tipCerere}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={errors.tipCerere ? errorStyle : inputStyle}
                aria-required="true"
              >
                <option value="" disabled>
                  {c.selecteaza}
                </option>
                {c.optiuni.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Despre tine */}
          <h2
            className="text-white font-bold mb-6"
            style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            {c.despretine}
          </h2>

          {/* Prenume + Nume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className={labelClass} htmlFor="prenume">
                {c.prenume} <span className="text-white/40">{c.required}</span>
              </label>
              <input
                id="prenume"
                name="prenume"
                type="text"
                value={form.prenume}
                onChange={handleChange}
                className={inputClass}
                style={errors.prenume ? errorStyle : inputStyle}
                aria-required="true"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="nume">
                {c.nume}
              </label>
              <input
                id="nume"
                name="nume"
                type="text"
                value={form.nume}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className={labelClass} htmlFor="email">
              {c.email} <span className="text-white/40">{c.required}</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              style={errors.email ? errorStyle : inputStyle}
              aria-required="true"
            />
          </div>

          {/* Telefon */}
          <div className="mb-5">
            <label className={labelClass} htmlFor="telefon">
              {c.telefon}
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              value={form.telefon}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Business */}
          <div className="mb-5">
            <label className={labelClass} htmlFor="business">
              {c.business}
            </label>
            <input
              id="business"
              name="business"
              type="text"
              value={form.business}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Mesaj */}
          <div className="mb-10">
            <label className={labelClass} htmlFor="mesaj">
              {c.mesaj}
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={5}
              value={form.mesaj}
              onChange={handleChange}
              className={inputClass}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="flex items-center gap-3 text-white font-medium text-[16px] hover:opacity-70 transition-opacity duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4 group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>{c.trimite}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 9H15M15 9L10 4M15 9L10 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p
              className="mt-3 text-[12px] text-white/30"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {c.hint}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
