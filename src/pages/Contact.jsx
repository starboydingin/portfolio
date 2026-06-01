import { Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const socials = [
  { label: 'GitHub', href: 'https://github.com/starboydingin', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adwika-farsha-ardhan', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/farshaardhan/', icon: Instagram },
];

const contactEmail = 'adwikafa@gmail.com';

export default function Contact() {
  return (
    <Page>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        description="Interested in collaborating or have a question? Feel free to reach out."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-8">
          <div>
            <h2 className="font-playfair text-4xl font-semibold">Let's start a conversation.</h2>
            <p className="mt-5 max-w-xl leading-8 text-paper/62">
              For project inquiries, collaborations, or academic conversations, use the form or reach out through
              the links below.
            </p>
          </div>

          <div className="space-y-4 text-paper/70">
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 transition hover:text-forest-hover">
              <Mail size={19} />
              {contactEmail}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={19} />
              Indonesia
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center border border-paper/12 text-paper/62 transition hover:border-forest-hover hover:text-forest-hover"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            action={`https://formsubmit.co/${contactEmail}`}
            method="POST"
            className="border border-paper/10 bg-charcoal p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value="New message from portfolio website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/64">
                Nama
                <input className="input-field" name="name" type="text" required placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/64">
                Email
                <input className="input-field" name="email" type="email" required placeholder="your@email.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/64">
                Pesan
                <textarea className="input-field min-h-40 resize-y" name="message" required placeholder="Write your message" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full border border-forest bg-forest px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
            >
              Submit
            </button>
          </form>
        </Reveal>
      </section>
    </Page>
  );
}
