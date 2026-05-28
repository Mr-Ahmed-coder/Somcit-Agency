import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const phoneNumber = '256754844459';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsapp.label}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: [1, 1.04, 1] }}
      transition={{
        opacity: { duration: 0.45, delay: 0.6 },
        y: { duration: 0.45, delay: 0.6 },
        scale: { duration: 2.8, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.07, y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-4 right-4 z-[90] inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-somcit-navy text-white shadow-[0_18px_50px_rgba(15,14,71,0.24)] transition hover:bg-somcit-blue sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 rounded-2xl bg-somcit-blue/20 blur-xl" />
      <FaWhatsapp className="relative" size={28} />
    </motion.a>
  );
}
