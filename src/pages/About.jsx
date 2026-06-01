import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import profilePhoto from '../images/adwika(1).png';

const interests = ['Programming', 'Design', 'UI/UX'];

export default function About() {
  return (
    <Page>
      <PageHeader
        eyebrow="Profile"
        title="About Me"
        description="A short introduction to my work across mobile, web, IoT, and data-driven systems."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="sticky top-28 h-[34rem] border border-paper/14 bg-charcoal/80 p-4 shadow-editorial">
            <img src={profilePhoto} alt="Adwika profile" className="h-full w-full object-cover" />
            <div className="absolute inset-4 bg-gradient-to-t from-ink/24 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div className="space-y-6 text-lg leading-8 text-paper/66">
            <p>
              I am Adwika Farsha Ardhan, an Informatics Engineering student focused on mobile and web
              development, with a strong interest in IoT systems and data-driven applications.
            </p>
            <p>
              I build applications using Flutter, Dart, Laravel, Node.js, Express.js, MySQL, PostgreSQL, JWT
              Authentication, MQTT, and ESP32. My work includes health-tech, e-commerce, financial management,
              smart monitoring, and image processing projects.
            </p>
            <p>
              Selected projects include GlaucoCare, SmartPot IoT, an MSME financial platform, KpopMerchandise,
              and a digital image segmentation project.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Education</h2>
            <p className="mt-4 border-l border-forest pl-5 text-paper/64">
              Informatics Engineering, Universitas Lampung (2023 - Present)
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Interests</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span key={interest} className="border border-forest/60 px-4 py-2 text-sm text-paper/70">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Currently</h2>
            <p className="mt-4 leading-8 text-paper/64">
              Building portfolio-ready mobile and web projects while improving backend development, UI/UX design,
              IoT integration, and practical software architecture.
            </p>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
