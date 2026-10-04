import { Code2, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const categories = [
  {
    title: 'Proyek Web & Mobile',
    path: '/portfolio/web',
    icon: Code2,
    description: 'Aplikasi web full-stack, aplikasi mobile, dan sistem terintegrasi yang dibangun dengan Laravel, Flutter, dan React.',
  },
  {
    title: 'Video Editing',
    path: '/portfolio/video',
    icon: Film,
    description: 'Koleksi Anime Music Video (AMV) kreatif yang disunting dengan sinkronisasi ritme dan alur produksi profesional.',
  },
];

export default function Portfolio() {
  return (
    <Page>
      <PageHeader
        eyebrow="Portofolio"
        title="Dua disiplin, satu dedikasi berkarya."
        description="Jelajahi proyek rekayasa perangkat lunak dan karya video editing dalam koleksi terkurasi."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:px-8 lg:grid-cols-2">
        {categories.map(({ title, path, icon: Icon, description }, index) => (
          <Reveal key={title} delay={index * 120}>
            <Link
              to={path}
              className="group block min-h-[28rem] border border-paper/10 bg-charcoal p-8 transition duration-300 hover:-translate-y-1 hover:border-forest-hover"
            >
              <Icon className="text-forest-hover" size={42} strokeWidth={1.6} />
              <h2 className="mt-24 font-playfair text-5xl font-semibold text-paper">{title}</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-paper/62">{description}</p>
              <span className="mt-10 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-forest-hover">
                Buka Koleksi
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </Page>
  );
}
