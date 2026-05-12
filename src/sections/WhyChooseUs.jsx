import { motion } from 'framer-motion';
import { reasons } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="absolute right-0 top-12 h-80 w-80 translate-x-1/3 rounded-full bg-somcit-blue/10 blur-3xl" />
      <div className="absolute bottom-12 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-somcit-sky blur-3xl" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Why Choose SOMACIT?"
          title="Built for trust, performance, and real business value."
          description="We combine modern technology, clean design, and business-focused development to build solutions that are reliable, scalable, and easy to use."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className="group rounded-[28px] border border-slate-100 bg-white p-7 shadow-[0_14px_42px_rgba(15,14,71,0.06)] transition-shadow duration-300 hover:border-somcit-blue/20 hover:shadow-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-somcit-sky text-somcit-blue transition duration-300 group-hover:scale-105 group-hover:bg-somcit-blue group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-7 font-display text-xl font-extrabold text-somcit-navy">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
