import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import profilePhoto from '../images/adwikaserius.jpeg';

const interests = ['Pemrograman', 'Desain UI/UX', 'Mobile & Web', 'Video Editing'];

export default function About() {
  return (
    <Page>
      <PageHeader
        eyebrow="Profil"
        title="Tentang Saya"
        description="Pengenalan singkat mengenai dedikasi saya dalam pengembangan mobile, web modern, dan sistem terintegrasi."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="sticky top-28 h-[34rem] border border-paper/14 bg-charcoal/80 p-4 shadow-editorial">
            <img src={profilePhoto} alt="Foto profil Adwika" className="h-full w-full object-cover" />
            <div className="absolute inset-4 bg-gradient-to-t from-ink/24 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div className="space-y-6 text-lg leading-8 text-paper/66">
            <p>
              Saya adalah Adwika Farsha Ardhan, mahasiswa Teknik Informatika di Universitas Lampung yang berfokus
              pada pengembangan aplikasi mobile dan web, dengan minat kuat pada antarmuka pengguna yang bersih serta
              arsitektur sistem yang andal.
            </p>
            <p>
              Saya membangun solusi perangkat lunak menggunakan Flutter, Dart, Laravel, Node.js, Express.js, MySQL,
              PostgreSQL, dan Tailwind CSS, serta integrasi REST API, WebSocket realtime, dan gateway notifikasi.
            </p>
            <p>
              Karya unggulan yang telah saya bangun mencakup platform layanan kedinasan terpadu GELATIK, aplikasi
              pelacak aktivitas kebugaran FitTrack, toko online Kpop Pocket, dan aplikasi pemantau kesehatan mata GlaucoCare.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Pendidikan</h2>
            <p className="mt-4 border-l border-forest pl-5 text-paper/64">
              S1 Teknik Informatika, Universitas Lampung (2023 – Sekarang)
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Minat &amp; Fokus</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span key={interest} className="border border-forest/60 px-4 py-2 text-sm text-paper/70">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-semibold">Aktivitas Terkini</h2>
            <p className="mt-4 leading-8 text-paper/64">
              Membangun proyek aplikasi mobile dan web siap produksi sembari mendalami arsitektur backend,
              optimalisasi UI/UX interaktif, serta implementasi teknologi pengembangan modern.
            </p>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
