import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const whatsappNumber = '256754844459';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'System Development',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us a little about your project.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const whatsappMessage = [
      'Hello SOMACIT, I would like to inquire about your services and discuss a project.',
      '',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Project Type: ${formData.projectType}`,
      `Message: ${formData.message.trim()}`,
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-somcit-navy py-28 text-white sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,128,237,0.28),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(255,255,255,0.10),transparent_24%)]" />
      <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeader
            align="left"
            inverse
            eyebrow="Contact"
            title="Ready to turn your workflow into a polished system?"
            description="Tell us what you are building, improving, or automating. SOMACIT can help shape the product, interface, and technical path."
          />
          <div className="mt-9 grid gap-4">
            <a href="mailto:hello@somcit.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur transition hover:bg-white/[0.12]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-somcit-blue">
                <FiMail />
              </span>
              <span className="font-semibold text-white/[0.82]">hello@somcit.com</span>
            </a>
            <a href="tel:+256754844459" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur transition hover:bg-white/[0.12]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-somcit-blue">
                <FiPhone />
              </span>
              <span className="font-semibold text-white/[0.82]">+256 754 844 459</span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-somcit-blue">
                <FiMapPin />
              </span>
              <span className="font-semibold text-white/[0.82]">Remote delivery Around the World</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[28px] border border-white/15 bg-white p-6 text-somcit-ink shadow-[0_26px_90px_rgba(0,0,0,0.26)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-somcit-navy">
              Name
              <input
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                className={`rounded-xl border bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10 ${
                  errors.name ? 'border-red-300' : 'border-slate-200'
                }`}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="text-xs font-bold text-red-500">{errors.name}</span>}
            </label>
            <label className="grid gap-2 text-sm font-bold text-somcit-navy">
              Email
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                className={`rounded-xl border bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10 ${
                  errors.email ? 'border-red-300' : 'border-slate-200'
                }`}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="text-xs font-bold text-red-500">{errors.email}</span>}
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-somcit-navy">
            Project type
            <select
              value={formData.projectType}
              onChange={(event) => updateField('projectType', event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10"
            >
              <option>System Development</option>
              <option>Software Development</option>
              <option>Website Development</option>
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-somcit-navy">
            Message
            <textarea
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className={`min-h-36 rounded-xl border bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10 ${
                errors.message ? 'border-red-300' : 'border-slate-200'
              }`}
              placeholder="Briefly describe the system or digital solution you need."
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="text-xs font-bold text-red-500">{errors.message}</span>}
          </label>
          <button type="submit" className="mt-6 w-full rounded-xl bg-somcit-navy px-6 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-somcit-blue hover:shadow-card">
            Send inquiry
          </button>
        </form>
      </Container>
    </section>
  );
}
