# Portfolio Website — Full Prompt (React + Vite + Tailwind)

---

## OVERVIEW

Buatkan saya sebuah **portfolio website personal** menggunakan **React + Vite + Tailwind CSS**. Website ini harus memiliki routing multi-page menggunakan `react-router-dom`, sehingga setiap halaman memiliki URL-nya sendiri dan dapat diakses melalui navbar. Halaman beranda (Home) berfungsi sebagai ringkasan/resume dari semua halaman.

---

## TECH STACK

- **Framework**: React + Vite
- **Styling**: Tailwind CSS (tanpa plugin tambahan kecuali jika diperlukan)
- **Routing**: `react-router-dom` v6
- **Icons**: `react-icons` atau `lucide-react`
- **Font (Google Fonts)**: Playball, Playfair Display, dan boleh ditambahkan 1–2 font pelengkap (misalnya Inter atau DM Sans untuk body text pendukung)

---

## STRUKTUR ROUTING & HALAMAN

```
/              → Home (ringkasan semua section)
/about         → About Me
/skills        → Skills
/portfolio     → Portfolio (index, menampilkan dua kategori)
/portfolio/web → Web Projects (sub-halaman)
/portfolio/video → Video Editing (sub-halaman)
/experience    → Experience
/contact       → Contact
```

---

## DESAIN & VISUAL

### Palet Warna
- **Dominan**: Hitam (`#0a0a0a`), Putih (`#f5f5f0`), Abu-abu gelap (`#1a1a1a`, `#2a2a2a`)
- **Aksen Utama**: Hijau gelap (`#2d5016`, `#3a6b1a`, `#4a8520`)
- **Aksen Sekunder**: Hijau muda untuk hover (`#6aab30`)
- **Teks**: Putih gading di background gelap, hitam pekat di background terang

### Tipografi
- **Playball**: HANYA untuk teks dekoratif di Hero Section (nama / tagline utama)
- **Playfair Display**: Heading section, judul halaman, subtitle penting
- **[Font pelengkap pilihan bebas]**: Body text, navigasi, deskripsi (gunakan yang elegant dan readable, misalnya `DM Sans` atau `Cormorant Garamond`)

### Aesthetic Direction
- **Minimalis formal** — seperti majalah arsitektur atau portfolio desainer independen
- **BUKAN futuristik**, BUKAN neon, BUKAN glassmorphism
- Banyak whitespace/blackspace; layout bersih dan rapi
- Gaya editorial: tipografi kuat, grid yang presisi
- Animasi: subtle — fade-in saat scroll, hover underline, transisi page halus

### Layout
- Gunakan **Bento Grid** terutama di halaman Home (ringkasan section dalam grid cards)
- Layout asimetris yang elegan di beberapa section
- Navbar: sticky di atas, transparan dengan blur saat scroll, link aktif dengan underline hijau

---

## KOMPONEN GLOBAL

### Navbar
- Logo / nama di kiri (font Playfair Display)
- Menu navigasi di kanan: Home, About, Skills, Portfolio (dengan dropdown: Web Projects, Video Editing), Experience, Contact
- Link aktif: warna hijau gelap dengan underline
- Sticky, background blur saat di-scroll
- Hamburger menu untuk mobile (responsive)

### Footer
```
Built with React + Vite + Tailwind CSS
```
- Teks kecil, tengah, warna abu-abu muted
- Boleh tambahkan ikon sosial media (placeholder href="#")
- Background hitam, border-top tipis hijau gelap

---

## HALAMAN: HOME (`/`)

Halaman Home adalah **ringkasan (resume)** dari seluruh konten website. Terdiri dari section-section berikut yang disusun secara bento grid dan editorial:

### 1. Hero Section
- **Background**: Foto hitam-putih bertema "gerakan" (gunakan gambar dari Unsplash dengan query `?q=birds+motion+blur+monochrome` atau serupa — gunakan `<img>` dengan `object-fit: cover` dan overlay gelap tipis)
- **Dekorasi visual**: Brush stroke / garis dekoratif berwarna **hijau gelap** (SVG inline atau CSS pseudo-element), terinspirasi dari referensi desain yang diberikan. Posisi di sudut kanan atas dan kiri bawah.
- **Elemen teks**:
  - Tagline dalam font **Playball**: *"Welcome to my portfolio website"* (ukuran besar, warna putih gading / hijau muda)
  - Nama (placeholder): *"Hi, I'm [Your Name]"* — font Playfair Display, bold, warna putih
  - Subtitle: *"Medical Student & Software Developer"* — font body, muted
  - Tombol CTA: "View My Work" → link ke `/portfolio`, style outlined dengan border hijau, hover fill hijau
- **Layout**: Full-viewport-height (`100vh`), teks di kiri-tengah secara vertikal
- **Catatan**: Sisakan `<img>` dengan `src=""` dan `alt="Profile Photo"` di area kanan hero (untuk foto diri yang akan ditambahkan nanti), atau buat slot foto terpisah berbentuk persegi panjang/vertikal dengan dashed border sebagai placeholder

### 2. About (Preview)
- Card bento berukuran sedang
- Ringkasan singkat: 2–3 kalimat deskripsi diri
- Tombol "Read More" → `/about`

### 3. Skills (Preview)
- Grid kecil menampilkan 5–6 logo bahasa pemrograman sebagai preview
- Tombol "All Skills" → `/skills`

### 4. Portfolio (Preview)
- Dua card bento: satu untuk Web Projects, satu untuk Video Editing
- Setiap card menampilkan judul, deskripsi singkat, dan link ke halaman masing-masing

### 5. Experience (Preview)
- Timeline mini: 2 entry paling recent
- Tombol "Full Experience" → `/experience`

### 6. Contact (CTA)
- Section besar di bawah: "Let's Work Together"
- Tombol "Get In Touch" → `/contact`
- Email placeholder: `hello@yourname.com`

---

## HALAMAN: ABOUT (`/about`)

- **Layout**: Dua kolom — kiri: foto (placeholder dengan dashed border), kanan: teks
- **Konten**:
  - Heading: "About Me" (Playfair Display, besar)
  - Paragraf perkenalan diri (2–3 paragraf placeholder lorem ipsum tentang profil)
  - Sub-section: "Education" — list: *Pendidikan Kedokteran, Universitas [Nama]* (placeholder)
  - Sub-section: "Interests" — tag chips: Medicine, Programming, Design, UI/UX, Research
  - Sub-section: "Currently" — apa yang sedang dikerjakan (placeholder)

---

## HALAMAN: SKILLS (`/skills`)

Layout: Grid responsif dengan card per skill. Setiap card menampilkan **logo resmi** (gunakan Simple Icons CDN: `https://cdn.simpleicons.org/[nama]`) dan nama teknologi.

### Bahasa Pemrograman
| Nama | Simple Icons Slug |
|------|------------------|
| HTML5 | `html5` |
| CSS3 | `css3` |
| JavaScript | `javascript` |
| C++ | `cplusplus` |
| PHP | `php` |

### Framework & Library
| Nama | Simple Icons Slug |
|------|------------------|
| Laravel | `laravel` |
| Blade (Laravel) | `laravel` (label "Blade") |
| React | `react` |
| Tailwind CSS | `tailwindcss` |
| Bootstrap | `bootstrap` |

### Database
| Nama | Simple Icons Slug |
|------|------------------|
| MySQL | `mysql` |
| Supabase | `supabase` |

**Desain card skills**:
- Background card: `#1a1a1a` (gelap)
- Logo: warna asli brand (gunakan parameter warna dari Simple Icons CDN, misal: `https://cdn.simpleicons.org/react/61DAFB`)
- Nama: font Playfair Display, putih
- Hover: border hijau gelap, slight scale-up
- Grouping: tampilkan dalam 3 grup terpisah dengan sub-heading "Languages", "Frameworks", "Databases"

---

## HALAMAN: PORTFOLIO (`/portfolio`)

Halaman index Portfolio menampilkan dua kategori dalam layout bento/card besar:

### Card 1: Web Projects
- Icon: `</>`  
- Deskripsi: "Full-stack web development projects using Laravel, React, and modern web technologies"
- Klik → `/portfolio/web`

### Card 2: Video Editing
- Icon: film/play icon
- Deskripsi: "Creative video projects edited with professional tools"
- Klik → `/portfolio/video`

---

## HALAMAN: WEB PROJECTS (`/portfolio/web`)

Grid 2–3 kolom, setiap item adalah project card dengan:
- Thumbnail placeholder (grey box dengan aspect ratio 16:9)
- Judul project
- Tech stack tags (misal: React, Laravel, MySQL)
- Deskripsi singkat (1–2 kalimat)
- Tombol: "View Project" (link ke `#`) dan "GitHub" (link ke `#`)

**Contoh placeholder projects** (3 buah):
1. *E-Commerce Platform* — Laravel + MySQL
2. *Student Dashboard* — React + Supabase  
3. *Portfolio Website* — React + Vite + Tailwind

---

## HALAMAN: VIDEO EDITING (`/portfolio/video`)

Grid 2–3 kolom, setiap item adalah video card dengan:
- Thumbnail placeholder (black box dengan play icon di tengah)
- Judul video
- Kategori/genre (misal: Cinematic, Promo, Short Film)
- Deskripsi singkat
- Tombol "Watch Video" (link ke `#`)

**Contoh placeholder** (3 buah):
1. *University Event Recap* — Cinematic
2. *Product Promotion* — Commercial
3. *Vlog Series* — Documentary

---

## HALAMAN: EXPERIENCE (`/experience`)

Layout timeline vertikal di tengah halaman:

- **Garis vertikal**: warna hijau gelap
- **Node/dot**: lingkaran kecil hijau
- Setiap entry: 
  - Tahun / periode (kanan atau kiri bergantian)
  - Judul posisi (Playfair Display, bold)
  - Nama institusi/perusahaan
  - Deskripsi singkat (1–2 kalimat)

**Placeholder entries** (4 buah):
1. 2024–Sekarang — *Medical Student*, Universitas [Nama]
2. 2024 — *Web Developer Intern*, [Perusahaan Placeholder]
3. 2023 — *IT Division*, Gradien Unila (Student Organization)
4. 2023 — *Frontend Developer*, [Project Freelance Placeholder]

---

## HALAMAN: CONTACT (`/contact`)

- **Layout**: Dua kolom — kiri: teks & info, kanan: form
- **Info kiri**:
  - Heading: "Get In Touch" (Playfair Display)
  - Sub-teks: "Interested in collaborating or have a question? Feel free to reach out."
  - Email: `hello@yourname.com` (dengan icon)
  - Location: `Indonesia` (dengan icon)
  - Social links: GitHub, LinkedIn, Instagram (placeholder href="#")
- **Form kanan**:
  - Input: Nama, Email, Pesan (textarea)
  - Tombol Submit: background hijau gelap, teks putih
  - Validasi sederhana (required fields)

---

## ANIMASI & TRANSISI

- **Page transition**: Fade-in (`opacity 0 → 1`) saat berpindah halaman, durasi 300ms
- **Scroll reveal**: Section-section muncul dengan `opacity + translateY` saat masuk viewport (gunakan `IntersectionObserver` atau library ringan seperti `framer-motion` jika diizinkan)
- **Hover states**:
  - Navbar link: underline slide dari kiri ke kanan, warna hijau
  - Button: background fill smooth
  - Card skills: border hijau + scale(1.03)
  - Project card: shadow + slight lift
- **Hero**: Teks muncul dengan staggered fade-in (nama → tagline → CTA)

---

## RESPONSIVE DESIGN

- **Desktop**: Layout penuh, bento grid, dua kolom
- **Tablet** (< 1024px): Grid menyesuaikan menjadi 1–2 kolom
- **Mobile** (< 768px): Single column, hamburger menu, hero text lebih kecil

---

## CATATAN IMPLEMENTASI

1. Gunakan `react-router-dom` v6 dengan `<BrowserRouter>`, `<Routes>`, dan `<Route>`
2. Buat folder struktur:
   ```
   src/
   ├── components/
   │   ├── Navbar.jsx
   │   ├── Footer.jsx
   │   └── [komponen reusable lainnya]
   ├── pages/
   │   ├── Home.jsx
   │   ├── About.jsx
   │   ├── Skills.jsx
   │   ├── Portfolio.jsx
   │   ├── WebProjects.jsx
   │   ├── VideoEditing.jsx
   │   ├── Experience.jsx
   │   └── Contact.jsx
   ├── assets/
   └── App.jsx
   ```
3. Import Google Fonts di `index.html` atau via `@import` di CSS:
   ```
   Playball, Playfair+Display, DM+Sans (atau font body pilihanmu)
   ```
4. Definisikan warna custom di `tailwind.config.js`:
   ```js
   extend: {
     colors: {
       'forest': '#2d5016',
       'forest-mid': '#3a6b1a',
       'forest-light': '#4a8520',
       'forest-hover': '#6aab30',
     },
     fontFamily: {
       'playball': ['Playball', 'cursive'],
       'playfair': ['Playfair Display', 'serif'],
       'body': ['DM Sans', 'sans-serif'],
     }
   }
   ```
5. Foto diri di hero section **sengaja dikosongkan** — berikan `src=""` dengan placeholder dashed border agar bisa saya isi sendiri nanti
6. Semua teks nama, bio, dan konten adalah **placeholder** — gunakan [Your Name], lorem ipsum, dll.
7. Footer selalu tampil: *"Built with React + Vite + Tailwind CSS"*

---

*Prompt ini dirancang untuk menghasilkan website portofolio yang minimalis, formal, dengan aesthetic editorial hitam-putih-hijau gelap, bento grid layout, dan multi-page routing.*
