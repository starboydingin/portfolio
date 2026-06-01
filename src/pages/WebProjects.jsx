import {
  Activity,
  BarChart3,
  Boxes,
  ExternalLink,
  Github,
  Layers3,
  ScanSearch,
  ShoppingBag,
  WalletCards,
} from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { webProjects } from '../data';

const thumbnailVisuals = {
  commerce: {
    Icon: ShoppingBag,
    label: 'K-Pop Store',
    accent: 'from-pink-500/24 via-forest/18 to-ink',
    detail: ['Albums', 'Photocards', 'Checkout'],
  },
  framework: {
    Icon: Layers3,
    label: 'Full-Stack Flow',
    accent: 'from-red-500/20 via-forest/18 to-ink',
    detail: ['Routes', 'Auth', 'Inertia'],
  },
  health: {
    Icon: Activity,
    label: 'Health Monitor',
    accent: 'from-cyan-500/20 via-forest/18 to-ink',
    detail: ['IOP', 'Medication', 'Charts'],
  },
  finance: {
    Icon: WalletCards,
    label: 'Cash Flow',
    accent: 'from-emerald-500/20 via-forest/18 to-ink',
    detail: ['Income', 'Expense', 'Report'],
  },
  vision: {
    Icon: ScanSearch,
    label: 'Segmentation',
    accent: 'from-violet-500/20 via-forest/18 to-ink',
    detail: ['Input', 'Mask', 'Output'],
  },
};

function ProjectThumbnail({ project }) {
  const visual = thumbnailVisuals[project.visual] ?? thumbnailVisuals.framework;
  const Icon = visual.Icon;

  return (
    <div className={`aspect-video border-b border-paper/10 bg-gradient-to-br ${visual.accent} p-5`}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="grid h-14 w-14 place-items-center border border-forest-hover/60 bg-ink/40 text-forest-hover">
            <Icon size={27} strokeWidth={1.6} />
          </div>
          <Boxes className="text-paper/18" size={34} strokeWidth={1.4} />
        </div>

        <div>
          <p className="font-playfair text-2xl font-semibold text-paper">{visual.label}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {visual.detail.map((item) => (
              <span key={item} className="border border-paper/10 bg-ink/32 px-2 py-2 text-center text-[0.65rem] uppercase tracking-[0.16em] text-paper/54">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-end gap-2 text-forest-hover/70">
            <BarChart3 size={18} />
            <span className="h-px flex-1 bg-forest/45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebProjects() {
  return (
    <Page>
      <PageHeader
        eyebrow="Portfolio / Web"
        title="Web Projects"
        description="Selected mobile, web, IoT, e-commerce, finance, and image processing projects."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-2 xl:grid-cols-3">
        {webProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <article className="group border border-paper/10 bg-charcoal transition duration-300 hover:-translate-y-1 hover:border-forest-hover hover:shadow-editorial">
              <ProjectThumbnail project={project} />
              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-forest-hover">
                  {project.category}
                </p>
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
                    href={project.projectUrl}
                    className="inline-flex items-center gap-2 border border-forest bg-forest px-4 py-2 text-sm font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
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
