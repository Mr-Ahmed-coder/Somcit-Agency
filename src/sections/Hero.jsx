import { motion } from 'framer-motion';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Container from '../components/Container.jsx';

const metrics = [
  { value: '98%' },
  { value: '1.2k' },
  { value: '320' },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-somcit-navy pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,128,237,0.34),transparent_28%),radial-gradient(circle_at_85%_16%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(135deg,#0F0E47_0%,#11185E_48%,#081127_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[7%] top-28 h-40 w-40 rounded-[36px] border border-white/10 bg-white/[0.07] shadow-soft backdrop-blur"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-[6%] h-28 w-28 rounded-full border border-white/10 bg-somcit-blue/20"
      />
      <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-10 lg:grid-cols-[0.96fr_1.04fr] lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-somcit-blue" />
            {t.hero.badge}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-[3.35rem] xl:text-[4rem]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] lg:text-[1.15rem]">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-somcit-blue px-6 py-4 font-bold text-white shadow-premium transition hover:-translate-y-1 hover:bg-white hover:text-somcit-navy"
            >
              {t.hero.primaryCta} <FiArrowRight />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.1] px-6 py-4 font-bold text-white shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-somcit-navy"
            >
              <FiPlayCircle /> {t.hero.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[570px]"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.12] p-4 shadow-premium backdrop-blur"
          >
            <div className="rounded-[24px] bg-somcit-navy p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold text-white/60">{t.hero.dashboardLabel}</p>
                  <p className="mt-1 font-display text-2xl font-extrabold">{t.hero.dashboardTitle}</p>
                </div>
                <span className="rounded-full bg-somcit-blue px-4 py-2 text-xs font-black">{t.hero.live}</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div key={t.hero.metrics[index]} className="rounded-2xl bg-white/[0.08] p-4">
                    <p className="text-2xl font-black">{metric.value}</p>
                    <p className="mt-1 text-xs font-semibold text-white/[0.55]">{t.hero.metrics[index]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 rounded-2xl bg-white p-4 text-somcit-ink md:grid-cols-[1fr_0.75fr]">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-black text-somcit-navy">{t.hero.automation}</p>
                    <p className="text-sm font-bold text-somcit-blue">+28%</p>
                  </div>
                  <div className="grid gap-3">
                    {[82, 64, 92, 56].map((width, index) => (
                      <div key={width} className="h-3 rounded-full bg-somcit-sky">
                        <div className="h-3 rounded-full bg-somcit-blue" style={{ width: `${width - index * 3}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-somcit-sky p-4">
                  <p className="text-sm font-bold text-slate-500">{t.hero.workflow}</p>
                  <p className="mt-2 font-display text-4xl font-extrabold text-somcit-navy">96%</p>
                  <div className="mt-5 grid grid-cols-4 items-end gap-2">
                    {[38, 58, 44, 76].map((height) => (
                      <span key={height} className="rounded-t-lg bg-somcit-blue" style={{ height: `${height}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
