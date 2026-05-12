import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center', inverse = false }) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-somcit-blue">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-extrabold tracking-normal sm:text-4xl lg:text-5xl ${inverse ? 'text-white' : 'text-somcit-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${inverse ? 'text-white/[0.72]' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
