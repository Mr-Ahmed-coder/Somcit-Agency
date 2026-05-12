import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.1,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [count, isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-somcit-mist to-white py-28 sm:py-36">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-somcit-blue/10 blur-3xl" />
      <Container>
        <SectionHeader
          eyebrow="Our Impact"
          title="Trusted digital solutions for modern businesses."
          description="We build modern systems and digital solutions that help businesses operate smarter and grow faster."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="group rounded-[28px] border border-slate-100 bg-white p-7 shadow-soft transition-shadow duration-300 hover:border-somcit-blue/20 hover:shadow-card"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-somcit-sky text-somcit-blue transition group-hover:scale-105">
                  <item.icon size={24} />
                </span>
                <span className="h-2 w-2 rounded-full bg-somcit-blue/70" />
              </div>
              <p className="font-display text-4xl font-extrabold leading-none text-somcit-navy sm:text-5xl">
                {typeof item.value === 'number' ? <CountUp value={item.value} suffix={item.suffix} /> : item.value}
              </p>
              <h3 className="mt-5 font-display text-lg font-extrabold leading-7 text-somcit-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
