import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          align="left"
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-slate-100 bg-gradient-to-br from-somcit-mist to-white p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.points.map((point, index) => (
              <div key={point} className="rounded-2xl bg-white p-5 shadow-[0_12px_30px_rgba(15,14,71,0.06)]">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-somcit-sky text-sm font-black text-somcit-blue">
                  0{index + 1}
                </span>
                <p className="text-base font-semibold leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
