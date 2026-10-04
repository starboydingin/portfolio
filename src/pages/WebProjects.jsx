import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  CheckCircle2,
  ExternalLink,
  Github,
  Info,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { webProjects } from '../data';

export default function WebProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    setActiveImageIndex(0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Page>
      <PageHeader
        eyebrow="Portofolio / Proyek"
        title="Proyek Web & Mobile"
        description="Koleksi proyek pilihan mencakup aplikasi mobile, web terintegrasi, e-commerce, dan sistem pemantauan digital."
      />

      {/* Compact Project Grid */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {webProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 60}>
            <article className="group flex h-full flex-col justify-between border border-paper/10 bg-charcoal/90 transition-all duration-300 hover:-translate-y-1 hover:border-forest-hover hover:shadow-editorial">
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden border-b border-paper/10 bg-ink">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-black/30" />
                <span className="absolute left-3 top-3 border border-paper/20 bg-ink/85 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-forest-hover backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <h2 className="font-playfair text-xl font-semibold text-paper transition group-hover:text-forest-hover line-clamp-1">
                    {project.title}
                  </h2>

                  {/* Compact Tech Badges */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="border border-forest/40 bg-forest/15 px-2 py-0.5 text-[0.68rem] text-paper/75"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="border border-paper/10 bg-ink/40 px-1.5 py-0.5 text-[0.68rem] text-paper/45">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-paper/60 sm:text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Compact Action Buttons */}
                <div className="mt-5 flex items-center gap-2 border-t border-paper/10 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex flex-1 items-center justify-center gap-1.5 border border-forest bg-forest px-3 py-2 text-xs font-semibold text-paper transition duration-200 hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                  >
                    <Info size={14} />
                    Detail Proyek
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-paper/15 px-3 py-2 text-xs font-semibold text-paper/70 transition duration-200 hover:border-forest-hover hover:text-forest-hover"
                    aria-label={`Lihat ${project.title} di GitHub`}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Project Details Modal Popup using React Portal directly on document.body */}
      {selectedProject &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Full-screen backdrop */}
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-200"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />

            {/* Modal Dialog Card (Always centered in viewport, immune to scroll) */}
            <div
              className="relative z-10 flex flex-col w-full max-w-2xl lg:max-w-3xl max-h-[88vh] sm:max-h-[85vh] overflow-hidden border border-paper/20 bg-charcoal text-paper shadow-[0_25px_70px_rgba(0,0,0,0.85)] animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header (Fixed / Shrink-0) */}
              <div className="shrink-0 flex items-center justify-between border-b border-paper/10 px-4 py-3 sm:px-6 bg-charcoal">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-forest-hover">
                    {selectedProject.category}
                  </p>
                  <h2 id="modal-title" className="mt-0.5 font-playfair text-xl font-bold sm:text-2xl text-paper">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Tutup modal detail"
                  className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center border border-paper/15 text-paper/60 transition hover:border-forest-hover hover:bg-forest/20 hover:text-paper cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Body (Scrollbar Hidden, Fully Responsive) */}
              <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 py-4 sm:px-6 space-y-4 sm:space-y-5">
                {/* Project Screenshot / Visual Preview Gallery */}
                <div className="space-y-2">
                  <div className="relative aspect-video max-h-56 sm:max-h-72 w-full overflow-hidden border border-paper/10 bg-ink/95 shadow-inner flex items-center justify-center">
                    <img
                      src={
                        selectedProject.screenshots?.[activeImageIndex]?.url ||
                        selectedProject.image
                      }
                      alt={`Tangkapan layar ${selectedProject.title}`}
                      className="h-full w-full object-contain transition duration-300"
                    />
                    {selectedProject.screenshots?.[activeImageIndex]?.label && (
                      <div className="absolute bottom-2 left-2 border border-paper/15 bg-ink/90 px-2.5 py-0.5 text-[0.7rem] font-medium text-paper/90 backdrop-blur-sm sm:bottom-2.5 sm:left-2.5 sm:px-3 sm:py-1 sm:text-xs">
                        {selectedProject.screenshots[activeImageIndex].label}
                      </div>
                    )}
                  </div>

                  {/* Multiple Screenshots Gallery Strip */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                    <div>
                      <p className="mb-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-paper/50">
                        Tangkapan Layar ({selectedProject.screenshots.length} Foto):
                      </p>
                      <div
                        className={`grid gap-1.5 sm:gap-2 ${
                          selectedProject.screenshots.length >= 5
                            ? 'grid-cols-5'
                            : 'grid-cols-4'
                        }`}
                      >
                        {selectedProject.screenshots.map((shot, idx) => (
                          <button
                            key={shot.url}
                            type="button"
                            onClick={() => setActiveImageIndex(idx)}
                            className={`group relative aspect-video overflow-hidden border transition cursor-pointer bg-ink/60 flex items-center justify-center ${
                              activeImageIndex === idx
                                ? 'border-forest-hover ring-2 ring-forest-hover/50'
                                : 'border-paper/15 opacity-60 hover:border-paper/40 hover:opacity-100'
                            }`}
                            aria-label={`Lihat ${shot.label}`}
                          >
                            <img
                              src={shot.url}
                              alt={shot.label}
                              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Complete Tech Stack */}
                <div>
                  <div className="flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-wider text-forest-hover">
                    <Layers size={13} />
                    <span>Tech Stack &amp; Alat</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-forest/60 bg-forest/20 px-2.5 py-0.5 text-[0.72rem] font-medium text-paper/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Explanation / Overview */}
                <div>
                  <h3 className="font-playfair text-base sm:text-lg font-semibold text-paper">
                    Tentang Proyek
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-paper/75">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Features & Architecture Highlights */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-paper">
                      <Sparkles size={14} className="text-forest-hover" />
                      <span>Fitur &amp; Arsitektur Utama</span>
                    </div>
                    <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-paper/70">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-forest-hover"
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions (Fixed / Shrink-0, Always Visible) */}
              <div className="shrink-0 flex items-center justify-between gap-3 border-t border-paper/10 bg-ink/90 px-4 py-3 sm:px-6">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-forest bg-forest px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink cursor-pointer"
                >
                  <Github size={15} />
                  <span>Buka GitHub</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="border border-paper/15 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-paper/70 transition hover:border-paper/40 hover:text-paper cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </Page>
  );
}
