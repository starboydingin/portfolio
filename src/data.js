export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export const portfolioLinks = [
  { label: 'Projects', path: '/portfolio/web' },
  { label: 'Video Editing', path: '/portfolio/video' },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML5', slug: 'html5', color: 'E34F26' },
      {
        name: 'CSS3',
        slug: 'css3',
        color: '1572B6',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
      },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'C++', slug: 'cplusplus', color: '00599C' },
      { name: 'PHP', slug: 'php', color: '777BB4' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Laravel', slug: 'laravel', color: 'FF2D20' },
      { name: 'Blade', slug: 'laravel', color: 'FF2D20' },
      { name: 'React', slug: 'react', color: '61DAFB' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
      { name: 'Bootstrap', slug: 'bootstrap', color: '7952B3' },
    ],
  },
  {
    title: 'Database & Backend Services',
    skills: [
      { name: 'MySQL', slug: 'mysql', color: '4479A1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', slug: 'figma', color: 'F24E1E' },
      { name: 'CapCut', iconText: 'CC', badgeColor: '#f5f5f0' },
      { name: 'Antigravity', iconText: 'AG' },
      { name: 'VS Code', iconText: 'VS', badgeColor: '#007ACC' },
      { name: 'XAMPP', slug: 'xampp', color: 'FB7A24' },
      { name: 'Canva', iconText: 'Ca', badgeColor: '#00C4CC' },
      { name: 'Claude', slug: 'claude', color: 'D97757' },
      { name: 'GPT', iconText: 'GPT', badgeColor: '#f5f5f0' },
      { name: 'Gemini', slug: 'googlegemini', color: '8E75B2' },
      { name: 'Google Stitch', iconText: 'GS' },
      { name: 'Trae', iconText: 'TR' },
    ],
  },
];

export const webProjects = [
  {
    title: 'GELATIK - Mobile & Website',
    category: 'Web, Mobile & Realtime API Platform',
    visual: 'server',
    image: '/projects/gelatik-dashboard.png',
    screenshots: [
      { url: '/projects/gelatik-dashboard.png', label: 'Web: Dashboard Aktivitas Layanan' },
      { url: '/projects/gelatik-mobile-layanan.png', label: 'Mobile: Direktori Layanan Digital' },
      { url: '/projects/gelatik-mobile-konsultasi.png', label: 'Mobile: Form Konsultasi TIK' },
      { url: '/projects/gelatik-mobile-profil.png', label: 'Mobile: Profil ASN & Notifikasi WA' },
      { url: '/projects/gelatik-mobile-operator.png', label: 'Mobile: Beranda Operator & Bandwidth' },
      { url: '/projects/gelatik-mobile-splash.png', label: 'Mobile: Splash Screen Gelatik' },
      { url: '/projects/gelatik-chatbot.png', label: 'Web: Asisten AI Chatbot Gelatik' },
      { url: '/projects/gelatik-landing.png', label: 'Web: Portal Layanan TIK Lampung' },
      { url: '/projects/gelatik-login.png', label: 'Web: Halaman Masuk Layanan Terpadu' },
      { url: '/projects/gelatik-register.png', label: 'Web: Registrasi Akun Kedinasan' },
    ],
    stack: ['Laravel', 'Node.js', 'Flutter', 'Dart', 'Socket.IO', 'MySQL', 'Firebase FCM', 'WhatsApp API'],
    description:
      'Ekosistem layanan TIK Pemprov Lampung terintegrasi penuh: REST API Laravel, realtime Socket.IO, WhatsApp gateway, chatbot AI, web portal, dan aplikasi mobile Flutter.',
    fullDescription:
      'Gelatik (Gerbang Layanan TIK) adalah platform layanan TIK terpadu untuk aparatur dan OPD Pemerintah Provinsi Lampung yang hadir dalam versi Web Portal dan Aplikasi Mobile Flutter. Sistem memusatkan layanan peminjaman perangkat TIK, konsultasi helpdesk teknis berjenjang, monitoring bandwidth router OPD, usulan email resmi ASN, notifikasi WhatsApp otomatis, dan chatbot AI.',
    features: [
      'Ekosistem multi-platform: Web Portal terpadu dan Aplikasi Mobile Flutter (User & Operator Helpdesk).',
      'Dashboard ringkasan aktivitas layanan: peminjaman aktif, tiket konsultasi berjalan, usulan email ASN, dan status pengajuan real-time.',
      'Arsitektur REST API Laravel & layanan Node.js realtime Socket.IO untuk broadcast event dan integrasi WhatsApp Baileys.',
      'Asisten Gelatik: Chatbot AI terintegrasi untuk konsultasi kendala teknis TIK interaktif dan rekomendasi solusi otomatis.',
      'Sistem otentikasi kedinasan berjenjang berbasis NIP dan OPD, permohonan email resmi ASN berjenjang BKD, dan push notifikasi Firebase FCM.',
    ],
    projectUrl: 'https://github.com/starboydingin/backend-gelatik',
    githubUrl: 'https://github.com/starboydingin/backend-gelatik',
  },
  {
    title: 'FitTrack',
    category: 'Flutter Mobile Activity Tracker',
    visual: 'fitness',
    image: '/projects/fittrack.jpg',
    screenshots: [
      { url: '/projects/fittrack-showcase.png', label: 'Tampilan Aplikasi (Showcase)' },
      { url: '/projects/fittrack-dashboard.jpg', label: 'Dashboard Utama' },
      { url: '/projects/fittrack-aktivitas.jpg', label: 'Aktivitas Real-time & Sensor' },
      { url: '/projects/fittrack-riwayat.jpg', label: 'Riwayat & Statistik' },
      { url: '/projects/fittrack-profil.jpg', label: 'Profil Pengguna & BMI' },
    ],
    stack: ['Flutter', 'Dart', 'Riverpod', 'Sensors & Hardware', 'Dark Mode UI', 'Health Telemetry'],
    description:
      'Aplikasi mobile monitoring kebugaran dan aktivitas fisik dengan sensor langkah realtime, visualisasi jarak, status akselerometer, dan tema dark mode.',
    fullDescription:
      'FitTrack adalah aplikasi mobile berbasis Flutter dan Riverpod yang dirancang untuk memantau aktivitas fisik harian pengguna secara realtime. Aplikasi ini mengintegrasikan sensor gerak hardware untuk tracking langkah kaki, estimasi jarak tempuh, pemantauan sensor akselerometer Axis X/Y, grafik statistik mingguan, kalkulasi BMI, serta sinkronisasi data cloud.',
    features: [
      'Dashboard ringkasan harian: target langkah (10.000 langkah), estimasi jarak tempuh, status aktivitas (Idle/Aktif), dan grafik 7 hari terakhir.',
      'Pelacakan aktivitas fisik real-time berbasis sensor akselerometer (Axis X & Y) dan integrasi GPS.',
      'Halaman profil pengguna lengkap dengan data fisik (berat badan, tinggi badan) dan kalkulasi BMI otomatis.',
      'Riwayat aktivitas mingguan dan bulanan dengan rata-rata langkah dan total jarak tempuh.',
      'Sistem sinkronisasi manual/cloud, fitur restore data, dan manajemen state reaktif Riverpod.',
    ],
    projectUrl: 'https://github.com/starboydingin/FitTrack',
    githubUrl: 'https://github.com/starboydingin/FitTrack',
  },
  {
    title: 'Kpop Pocket',
    category: 'K-Pop E-Commerce Web App',
    visual: 'commerce',
    image: '/projects/kpop-hero.png',
    screenshots: [
      { url: '/projects/kpop-hero.png', label: 'Hero Banner & Special Drop' },
      { url: '/projects/kpop-merch-4.png', label: 'Featured Drops' },
      { url: '/projects/kpop-merch-2.png', label: 'New Arrivals' },
      { url: '/projects/kpop-merch-1.png', label: 'Trending Catalog' },
    ],
    stack: ['Laravel 13', 'PHP 8.4', 'Blade', 'Tailwind CSS', 'MySQL', 'Midtrans Snap', 'Chart.js'],
    description:
      'Toko merchandise K-Pop online dengan katalog produk dinamis, cart, checkout otomatis Midtrans Sandbox, riwayat pesanan, dan dashboard admin.',
    fullDescription:
      'Kpop Pocket adalah platform e-commerce merchandise K-Pop (album, photocard, merchandise koleksi) dengan alur belanja lengkap, payment gateway Midtrans Sandbox Snap, serta panel admin untuk manajemen inventaris dan analitik.',
    features: [
      'Katalog photocard & album dinamis dengan filter kategori, pencarian, dan status ketersediaan stok.',
      'Integrasi payment gateway Midtrans Sandbox Snap untuk pembayaran otomatis yang aman.',
      'Status otomatis SOLD OUT dengan efek visual monokrom pada produk yang kehabisan stok.',
      'Dashboard admin terintegrasi untuk input produk, upload gambar, manajemen banner hero, serta grafik penjualan Chart.js.',
      'Riwayat transaksi order user dengan fitur pembayaran ulang (retry pending order) dan pembatalan.',
    ],
    projectUrl: 'https://github.com/starboydingin/KpopMerchandise',
    githubUrl: 'https://github.com/starboydingin/KpopMerchandise',
  },
  {
    title: 'GlaucoCare',
    category: 'Flutter Health Monitoring App',
    visual: 'health',
    image: '/projects/glaucocare.png',
    screenshots: [
      { url: '/projects/glaucocare-showcase.png', label: 'Tampilan Aplikasi (Showcase)' },
      { url: '/projects/glaucocare-dashboard.png', label: 'Dashboard & Log Obat' },
      { url: '/projects/glaucocare-tekanan.png', label: 'Tren Tekanan & Riwayat' },
      { url: '/projects/glaucocare-assessment.png', label: 'Self-Assessment Mata' },
      { url: '/projects/glaucocare-edukasi.png', label: 'Edukasi Kesehatan Glaukoma' },
    ],
    stack: ['Flutter', 'Dart', 'Health Tracking', 'Circadian Charts', 'Dark Mode UI'],
    description:
      'Aplikasi mobile pemantau glaukoma dengan pelacakan tekanan intraokular (IOP), log pengingat obat, modul self-assessment, dan edukasi kesehatan.',
    fullDescription:
      'GlaucoCare adalah aplikasi mobile berbasis Flutter yang dirancang untuk membantu penderita glaukoma mencegah hilangnya penglihatan. Aplikasi menyediakan pemantauan tekanan intraokular (IOP) dengan batas normal 21 mmHg, pencatatan jadwal minum obat (Timolol, Latanoprost), evaluasi mandiri kondisi mata harian, serta pusat edukasi kesehatan yang komprehensif.',
    features: [
      'Pemantauan tekanan mata terkini (Mata Kanan OD & Mata Kiri OS) dengan indikator ambang batas aman 21 mmHg.',
      'Visualisasi grafik fluktuasi tekanan intraokular 7 hari terakhir dan riwayat rekaman berkala.',
      'Log kepatuhan minum obat harian (Timolol, Latanoprost) dengan jadwal waktu dan reminder interaktif.',
      'Kuis mandiri (Self-Assessment) untuk deteksi dini gejala perubahan kondisi mata harian.',
      'Pusat edukasi kesehatan glaukoma: faktor risiko, gejala awal, panduan kepatuhan, dan jadwal kontrol rutin.',
    ],
    projectUrl: 'https://github.com/starboydingin',
    githubUrl: 'https://github.com/starboydingin',
  },
];

export const videoProjects = [
  {
    title: 'AMV HANGE ZOE',
    category: 'Attack on Titan AMV',
    videoUrl: '/videos/fixx.mp4',
    thumbnail: '/videos/posters/fixx.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7688309485412093202?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:29',
    tags: ['CapCut', 'After Effects', 'Beat Sync', 'Shinzou'],
    description:
      'Tribute sinematik emosional mengenang pengorbanan Hange Zoe dan perpisahannya dengan Levi Ackerman, dipadukan sinkronisasi beat Shinzou wo Sasageyo dan tipografi dinamis.',
  },
  {
    title: 'AMV YUTA X BYE — ALTARE',
    category: 'Jujutsu Kaisen AMV',
    videoUrl: '/videos/amv-yuta-x-bye.mp4',
    thumbnail: '/videos/posters/amv-yuta-x-bye.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7667044561658678549?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:43',
    tags: ['Yuta Okkotsu', 'Color Grading', 'ALTARE', 'Flow Edit'],
    description:
      'Edit bernuansa dark & melancholic menyorot intensitas pertarungan Yuta Okkotsu dengan alunan lagu BYE oleh ALTARE, aksen gradasi merah menyala, dan transisi cepat.',
  },
  {
    title: 'AMV MAKI X MOON — BABY MONSTER',
    category: 'Jujutsu Kaisen AMV',
    videoUrl: '/videos/amv-maki-x-moon.mp4',
    thumbnail: '/videos/posters/amv-maki-x-moon.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7669762596433710357?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:25',
    tags: ['Maki Zenin', 'BABYMONSTER', 'Action Sync', 'Kinetic Cut'],
    description:
      'Koreografi aksi brutal kebangkitan Maki Zen\'in melawan klan Zen\'in yang disinkronkan secara presisi dengan ketukan ritme lagu Moon oleh BABYMONSTER.',
  },
  {
    title: 'AMV JUJUTSU KAISEN X LOSER — BIG BANG',
    category: 'Jujutsu Kaisen AMV',
    videoUrl: '/videos/amv-jjk-x-loser.mp4',
    thumbnail: '/videos/posters/amv-jjk-x-loser.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7672439625327119636?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:45',
    tags: ['Gojo & Geto', 'BIG BANG', 'Nostalgia', 'Aesthetic Cut'],
    description:
      'Nostalgia masa SMA Gojo Satoru dan Suguru Geto diiringi lagu klasik LOSER dari BIG BANG dengan transisi halus, tipografi elegan, dan atmosfer melankolis.',
  },
  {
    title: 'AMV JUJUTSU KAISEN X IF YOU — BIG BANG',
    category: 'Jujutsu Kaisen AMV',
    videoUrl: '/videos/amv-jjk-x-if-you.mp4',
    thumbnail: '/videos/posters/amv-jjk-x-if-you.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7676842892236786951?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:36',
    tags: ['Gojo Satoru', 'BIG BANG', 'Emotional', 'Atmospheric'],
    description:
      'Narasi mendalam tentang kesedihan, kehilangan, dan kenangan persahabatan Gojo & Geto dengan iringan lagu emosional IF YOU oleh BIG BANG.',
  },
  {
    title: 'AMV JJK X CRAYON — G-DRAGON',
    category: 'Jujutsu Kaisen AMV',
    videoUrl: '/videos/amv-jjk-x-crayon.mp4',
    thumbnail: '/videos/posters/amv-jjk-x-crayon.jpg',
    tiktokUrl:
      'https://www.tiktok.com/@rajapristel/video/7664522292134677780?is_from_webapp=1&sender_device=pc&web_id=7634436242428167698',
    duration: '0:20',
    tags: ['Gojo Satoru', 'G-DRAGON', 'Hype AMV', 'Fast Pacing'],
    description:
      'Edit AMV berenergi tinggi penuh hype menonjolkan momen ikonik "Honored One" Gojo Satoru dipadukan dengan beat swag khas Crayon dari G-DRAGON.',
  },
];

export const experiences = [
  {
    period: '2023',
    title: 'Beginner IT Learner',
    place: 'University',
    description: 'Started university and began exploring the IT field by learning programming fundamentals with C++ and Python.',
  },
  {
    period: '2024',
    title: 'Web Design & Frontend Learner',
    place: 'Personal Learning Projects',
    description: 'Started building simple websites using HTML and CSS while learning to create custom UI designs with Figma.',
  },
  {
    period: '2025',
    title: 'Full-Stack & Mobile Development Learner',
    place: 'Personal and Academic Projects',
    description: 'Started developing projects using Laravel and ReactJS, while also building several mobile applications with Flutter.',
  },
  {
    period: '2025-Present',
    title: 'Portfolio Project Developer',
    place: 'Personal Portfolio Projects',
    description: 'Actively developing web-based projects featured in the portfolio, focusing on clean interfaces, practical functionality, and modern development workflows.',
  },
];
