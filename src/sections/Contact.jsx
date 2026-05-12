import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
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
              <span className="font-semibold text-white/[0.82]">Somalia and remote delivery</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-[28px] border border-white/15 bg-white p-6 text-somcit-ink shadow-[0_26px_90px_rgba(0,0,0,0.26)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-somcit-navy">
              Name
              <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-somcit-navy">
              Email
              <input type="email" className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-somcit-navy">
            Project type
            <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10">
              <option>System Development</option>
              <option>Software Development</option>
              <option>Website Development</option>
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-somcit-navy">
            Message
            <textarea className="min-h-36 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-somcit-blue focus:ring-4 focus:ring-somcit-blue/10" placeholder="Briefly describe the system or digital solution you need." />
          </label>
          <button type="submit" className="mt-6 w-full rounded-xl bg-somcit-navy px-6 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-somcit-blue hover:shadow-card">
            Send inquiry
          </button>
        </form>
      </Container>
    </section>
  );
}
