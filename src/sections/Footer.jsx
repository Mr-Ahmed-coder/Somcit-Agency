import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';
import { navLinks } from '../data/siteData.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Container from '../components/Container.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-somcit-navy py-10 text-white">
      <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold">SOMACIT</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/[0.65]">
            {t.footer.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-white/70 transition hover:text-white">
              {t.nav[index]}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {[FiFacebook, FiLinkedin, FiGithub].map((Icon, index) => (
            <a key={index} href="#home" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-somcit-blue" aria-label={t.footer.socialLabel}>
              <Icon />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
