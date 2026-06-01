import { ExternalLink, Github } from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { webProjects } from '../data';

export default function WebProjects() {
  return (
    <Page>
      <PageHeader
        eyebrow="Portfolio / Web"
        title="Web Projects"
        description="Placeholder case studies for Laravel, React, database-backed interfaces, and portfolio systems."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-3">
        {webProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <article className="group border border-paper/10 bg-charcoal transition duration-300 hover:-translate-y-1 hover:border-forest-hover hover:shadow-editorial">
              <div className="aspect-video border-b border-paper/10 bg-gradient-to-br from-graphite to-ink">
                <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.24em] text-paper/34">
                  Thumbnail
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-3xl font-semibold text-paper">{project.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="border border-forest/55 px-3 py-1 text-xs text-paper/64">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 min-h-24 leading-7 text-paper/58">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-forest bg-forest px-4 py-2 text-sm font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-paper/12 px-4 py-2 text-sm font-semibold text-paper/70 transition hover:border-forest-hover hover:text-forest-hover"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </Page>
  );
}
