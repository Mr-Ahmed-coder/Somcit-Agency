import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiPlay, FiPlayCircle, FiX } from 'react-icons/fi';
import { projects } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const videoLoaders = import.meta.glob('../videos/*.mp4', {
  query: '?url',
  import: 'default',
});

function resolveVideoLoader(fileName) {
  return videoLoaders[`../videos/${fileName}`];
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeVideoSrc, setActiveVideoSrc] = useState('');

  const projectShowcases = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        videoLoader: resolveVideoLoader(project.videoFile),
      })),
    [],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = activeProject ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  useEffect(() => {
    let cancelled = false;

    setActiveVideoSrc('');

    if (!activeProject?.videoLoader) {
      return () => {
        cancelled = true;
      };
    }

    activeProject.videoLoader().then((src) => {
      if (!cancelled) {
        setActiveVideoSrc(src);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [activeProject]);

  return (
    <section id="projects" className="scroll-mt-24 bg-gradient-to-b from-somcit-mist via-white to-somcit-mist py-28 sm:py-36">
      <Container>
        <SectionHeader
          eyebrow="Featured Projects"
          title="Cinematic demos of real business systems."
          description="Explore modern SOMACIT software showcases built around retail, education, suppliers, invoices, and daily operations."
        />
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {projectShowcases.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_18px_54px_rgba(15,14,71,0.08)] transition-shadow duration-300 hover:border-somcit-blue/20 hover:shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-somcit-navy">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-somcit-navy/85 via-somcit-navy/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                  Video demo
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-white/20 text-white shadow-premium backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-somcit-blue"
                  aria-label={`Watch ${project.title} demo`}
                >
                  <FiPlay className="ml-1" size={26} />
                </button>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-somcit-navy">
                    Demo preview
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-somcit-blue text-white shadow-card transition group-hover:scale-110">
                    <FiPlayCircle size={22} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold leading-tight text-somcit-navy">{project.title}</h3>
                <p className="mt-3 min-h-[84px] leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-somcit-sky px-3 py-1 text-xs font-bold text-somcit-navy">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-somcit-blue/15 bg-somcit-navy px-5 py-3 font-bold text-white transition hover:bg-somcit-blue hover:shadow-card"
                >
                  <FiPlayCircle /> Watch Demo
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-somcit-navy/75 px-4 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProject.title} video demo`}
              className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-somcit-navy shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5 border-b border-white/10 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-somcit-blue">Project demo</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">{activeProject.title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-white/[0.68]">{activeProject.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-somcit-blue"
                  aria-label="Close video modal"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="bg-black">
                {activeVideoSrc ? (
                  <video
                    key={activeVideoSrc}
                    className="aspect-video w-full bg-black"
                    src={activeVideoSrc}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <div className="grid aspect-video place-items-center px-6 text-center text-white">
                    Loading demo video...
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
