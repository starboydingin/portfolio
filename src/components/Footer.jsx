import { Github, Instagram, Linkedin } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/starboydingin', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adwika-farsha-ardhan', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/farshaardhan/', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest/50 bg-ink px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-paper/48 md:flex-row">
        <p>Built with React + Vite + Tailwind CSS</p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center border border-paper/10 text-paper/54 transition hover:border-forest-hover hover:text-forest-hover"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
