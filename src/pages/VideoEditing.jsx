import { Play } from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { videoProjects } from '../data';

export default function VideoEditing() {
  return (
    <Page>
      <PageHeader
        eyebrow="Portfolio / Video"
        title="Video Editing"
        description="Placeholder edits for cinematic recaps, commercial content, and documentary-style storytelling."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-3">
        {videoProjects.map((video, index) => (
          <Reveal key={video.title} delay={index * 100}>
            <article className="group border border-paper/10 bg-charcoal transition duration-300 hover:-translate-y-1 hover:border-forest-hover hover:shadow-editorial">
              <div className="aspect-video bg-black">
                <div className="flex h-full items-center justify-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-forest-hover text-forest-hover transition group-hover:bg-forest-hover group-hover:text-ink">
                    <Play size={24} fill="currentColor" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest-hover">{video.category}</p>
                <h2 className="mt-3 font-playfair text-3xl font-semibold text-paper">{video.title}</h2>
                <p className="mt-5 min-h-24 leading-7 text-paper/58">{video.description}</p>
                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 border border-forest bg-forest px-4 py-2 text-sm font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                >
                  <Play size={16} />
                  Watch Video
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </Page>
  );
}
