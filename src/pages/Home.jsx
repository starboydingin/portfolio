import { Code2, Film, GraduationCap, Mail } from 'lucide-react';
import ButtonLink from '../components/ButtonLink';
import Page from '../components/Page';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { experiences, skillGroups } from '../data';
import profilePhoto from '../images/adwikaserius.jpeg';
import heroSquare from '../images/hero section kotak.png';

const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 6);

function BentoCard({ children, className = '' }) {
  return (
    <Reveal
      className={`border border-paper/10 bg-charcoal/72 p-7 shadow-editorial transition duration-300 hover:-translate-y-1 hover:border-forest/80 ${className}`}
    >
      {children}
    </Reveal>
  );
}

export default function Home() {
  return (
    <Page className="pt-0">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroSquare}
          alt="Hero section background"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/70" />
        <div className="brush-stroke right-8 top-28" />
        <div className="brush-stroke bottom-24 left-4 rotate-6" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="animate-fade-in font-playball text-5xl text-forest-hover sm:text-7xl">
              Selamat datang di portofolio saya
            </p>
            <h1 className="mt-5 animate-fade-in font-playfair text-5xl font-bold leading-[0.95] text-paper [animation-delay:120ms] sm:text-7xl lg:text-8xl">
              Halo, Saya Adwika
            </h1>
            <p className="mt-6 max-w-xl animate-fade-in text-lg leading-8 text-paper/68 [animation-delay:220ms]">
              Software Developer
            </p>
            <ButtonLink to="/portfolio" className="mt-9 animate-fade-in [animation-delay:320ms]">
              Lihat Karya Saya
            </ButtonLink>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative h-[34rem] w-[23rem] border border-paper/18 bg-ink/42 p-4 shadow-editorial">
              <img src={profilePhoto} alt="Foto profil Adwika" className="h-full w-full object-cover" />
              <div className="absolute inset-4 bg-gradient-to-t from-ink/28 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionTitle
          eyebrow="Ringkasan Portofolio"
          title="Kumpulan karya terpilih, studi, dan eksplorasi digital."
          description="Gambaran ringkas dari keseluruhan portofolio, tersusun dalam tata letak editorial bento grid."
        />

        <div className="grid gap-5 lg:grid-cols-6">
          <BentoCard className="lg:col-span-3">
            <GraduationCap className="mb-6 text-forest-hover" size={30} />
            <h3 className="font-playfair text-3xl font-semibold">Tentang Saya</h3>
            <p className="mt-4 leading-7 text-paper/62">
              Saya adalah mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak, membangun
              antarmuka yang bersih serta sistem digital yang fungsional dan terstruktur. Karya saya memadukan
              logika, kode, dan estetika visual.
            </p>
            <ButtonLink to="/about" variant="ghost" className="mt-6 px-0">
              Selengkapnya
            </ButtonLink>
          </BentoCard>

          <BentoCard className="lg:col-span-3">
            <h3 className="font-playfair text-3xl font-semibold">Pratinjau Keahlian</h3>
            <div className="mt-7 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {previewSkills.map((skill) => (
                <div key={`${skill.name}-${skill.slug}`} className="grid place-items-center gap-3">
                  <img
                    src={skill.iconUrl ?? `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                    alt={skill.name}
                    className="h-9 w-9"
                  />
                  <span className="text-center text-xs text-paper/56">{skill.name}</span>
                </div>
              ))}
            </div>
            <ButtonLink to="/skills" variant="ghost" className="mt-6 px-0">
              Semua Keahlian
            </ButtonLink>
          </BentoCard>

          <BentoCard className="lg:col-span-2">
            <Code2 className="mb-6 text-forest-hover" size={30} />
            <h3 className="font-playfair text-3xl font-semibold">Proyek</h3>
            <p className="mt-4 leading-7 text-paper/62">
              Aplikasi web full-stack, aplikasi mobile, dan sistem terintegrasi yang dibangun dengan Laravel, Flutter, dan React.
            </p>
            <ButtonLink to="/portfolio/web" variant="ghost" className="mt-6 px-0">
              Jelajahi Proyek
            </ButtonLink>
          </BentoCard>

          <BentoCard className="lg:col-span-2">
            <Film className="mb-6 text-forest-hover" size={30} />
            <h3 className="font-playfair text-3xl font-semibold">Video Editing</h3>
            <p className="mt-4 leading-7 text-paper/62">
              Karya kreatif Anime Music Video (AMV) dengan ritme cepat, sinkronisasi musik presisi, dan alur pascaproduksi profesional.
            </p>
            <ButtonLink to="/portfolio/video" variant="ghost" className="mt-6 px-0">
              Lihat Video
            </ButtonLink>
          </BentoCard>

          <BentoCard className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-semibold">Pengalaman</h3>
            <div className="mt-6 space-y-5">
              {experiences.slice(0, 2).map((item) => (
                <div key={`${item.period}-${item.title}`} className="border-l border-forest pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-hover">{item.period}</p>
                  <p className="mt-1 font-playfair text-xl text-paper">{item.title}</p>
                  <p className="text-sm text-paper/48">{item.place}</p>
                </div>
              ))}
            </div>
            <ButtonLink to="/experience" variant="ghost" className="mt-6 px-0">
              Seluruh Pengalaman
            </ButtonLink>
          </BentoCard>
        </div>
      </section>

      <Reveal className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <section className="relative overflow-hidden border border-forest/40 bg-paper px-7 py-14 text-ink sm:px-12 lg:px-16">
          <div className="brush-stroke right-0 top-10 opacity-35" />
          <Mail className="mb-7 text-forest" size={34} />
          <h2 className="font-playfair text-5xl font-bold sm:text-6xl">Mari Berkolaborasi</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/68">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui tombol di bawah ini.
          </p>
          <ButtonLink to="/contact" variant="solid" className="mt-8">
            Hubungi Saya
          </ButtonLink>
        </section>
      </Reveal>
    </Page>
  );
}
