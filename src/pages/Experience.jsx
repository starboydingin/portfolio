import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { experiences } from '../data';

export default function Experience() {
  return (
    <Page>
      <PageHeader
        eyebrow="Timeline"
        title="Experience"
        description="A vertical timeline with left-and-right milestones across academic, learning, and project-based experience."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-forest md:left-1/2" />

          <div className="space-y-10">
          {experiences.map((item, index) => (
            <Reveal key={`${item.period}-${item.title}`} delay={index * 90}>
              <article className="relative grid gap-5 pl-12 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:pl-0">
                <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'}`}>
                  <div className="group relative overflow-hidden border border-paper/10 bg-charcoal p-7 transition duration-300 hover:-translate-y-1 hover:border-forest-hover hover:shadow-editorial">
                    <span className="absolute left-0 top-0 h-full w-1 bg-forest transition group-hover:bg-forest-hover" />
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-hover">{item.period}</p>
                    <h2 className="mt-5 font-playfair text-3xl font-semibold leading-tight text-paper">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-paper/48">{item.place}</p>
                    <p className="mt-5 leading-7 text-paper/62">{item.description}</p>
                  </div>
                </div>

                <span className="absolute left-[0.7rem] top-8 h-3 w-3 rounded-full bg-forest-hover ring-8 ring-ink md:static md:col-start-2 md:row-start-1 md:block" />

                <div
                  className={`hidden text-sm font-bold uppercase tracking-[0.22em] text-paper/26 md:block ${
                    index % 2 === 0 ? 'md:col-start-3 md:text-left' : 'md:col-start-1 md:row-start-1 md:text-right'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </article>
            </Reveal>
          ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
