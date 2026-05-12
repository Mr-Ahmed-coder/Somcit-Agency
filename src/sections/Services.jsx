import { motion } from 'framer-motion';
import { services } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-28 sm:py-36">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Digital solutions shaped around daily operations."
          description="From internal systems to customer-facing digital products, SOMACIT builds the tools that keep modern businesses organized and growing."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_14px_42px_rgba(15,14,71,0.06)] transition-shadow duration-300 hover:border-somcit-blue/20 hover:shadow-card"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-somcit-blue opacity-0 transition group-hover:opacity-100" />
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-somcit-sky text-somcit-blue transition group-hover:scale-105">
                  <Icon size={24} />
                </div>
                <h3 className="mt-7 font-display text-xl font-extrabold text-somcit-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
