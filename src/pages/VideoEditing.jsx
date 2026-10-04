import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AlertCircle,
  ExternalLink,
  Film,
  Loader2,
  Play,
  RotateCcw,
  Sparkles,
  VolumeX,
  X,
} from 'lucide-react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { videoProjects } from '../data';

export default function VideoEditing() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Reset video state when active video changes
  useEffect(() => {
    if (activeVideo) {
      setIsVideoLoading(true);
      setVideoError(false);
    }
  }, [activeVideo]);

  // Lock body scroll when video preview modal is open
  useEffect(() => {
    if (!activeVideo) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  const handleRetryVideo = () => {
    setVideoError(false);
    setIsVideoLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <Page>
      <PageHeader
        eyebrow="Portofolio / Video Editing"
        title="Video Editing"
        description="Koleksi kurasi karya Anime Music Video (AMV) dengan ritme cepat, sinkronisasi beat presisi, color grading sinematik, dan tipografi dinamis yang dipublikasikan di TikTok."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-28 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {videoProjects.map((video, index) => (
          <Reveal key={video.title} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-paper/10 bg-charcoal shadow-lg transition duration-300 hover:-translate-y-1.5 hover:border-forest-hover/60 hover:shadow-editorial">
              {/* Video Thumbnail & Poster with Play Action */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video w-full cursor-pointer overflow-hidden bg-black"
                role="button"
                tabIndex={0}
                aria-label={`Putar pratinjau ${video.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveVideo(video);
                  }
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 transition duration-300 group-hover:opacity-70" />

                {/* Category badge */}
                <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-forest/40 bg-black/75 px-3 py-1 text-[11px] font-semibold tracking-wider text-forest-hover backdrop-blur-md">
                  <Film size={12} />
                  <span>{video.category}</span>
                </div>

                {/* Duration badge */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 z-10 rounded bg-black/80 px-2 py-0.5 font-mono text-xs font-medium text-paper/90 backdrop-blur-sm">
                    {video.duration}
                  </div>
                )}

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-forest-hover/70 bg-black/60 text-forest-hover shadow-xl backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:border-forest-hover group-hover:bg-forest-hover group-hover:text-ink">
                    <Play size={22} fill="currentColor" className="translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-hover">
                  <Sparkles size={12} />
                  <span>{video.category}</span>
                </div>

                <h2 className="mt-2.5 font-playfair text-2xl font-semibold leading-snug text-paper">
                  {video.title}
                </h2>

                <p className="mt-3.5 flex-1 text-sm leading-relaxed text-paper/65">
                  {video.description}
                </p>

                {/* Tags */}
                {video.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-paper/10 bg-black/30 px-2 py-0.5 text-[11px] font-medium text-paper/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-paper/10">
                  {/* Watch Video -> Directly opens TikTok in new tab */}
                  <a
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-forest bg-forest px-4 py-2.5 text-sm font-semibold text-paper transition duration-200 hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="shrink-0"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.91-1.09 4.82 4.82 0 0 1-1.43-2.43h-.03z" />
                    </svg>
                    <span>Tonton Video</span>
                    <ExternalLink size={14} className="opacity-80" />
                  </a>

                  {/* Preview Player Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="flex items-center justify-center gap-1.5 rounded-sm border border-paper/20 bg-charcoal/80 px-3.5 py-2.5 text-sm font-medium text-paper transition hover:border-forest hover:text-forest-hover"
                    title="Putar pratinjau di website"
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Pratinjau</span>
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Lightbox / Video Player Modal via Portal */}
      {activeVideo &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
            style={{ margin: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setActiveVideo(null)}
            />

            {/* Modal Box */}
            <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-md border border-paper/15 bg-charcoal shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-paper/10 bg-black/60 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/20 text-forest-hover">
                    <Film size={15} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-paper sm:text-base">
                      {activeVideo.title}
                    </h3>
                    <p className="text-xs text-forest-hover">{activeVideo.category}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="grid h-8 w-8 place-items-center rounded-sm text-paper/70 transition hover:bg-paper/10 hover:text-paper cursor-pointer"
                  aria-label="Tutup pratinjau video"
                >
                  <X size={18} />
                </button>
              </div>

              {/* HTML5 Video Player Container */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                {/* Fallback error display */}
                {videoError ? (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-charcoal/95 p-6 text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-forest-hover/40 bg-forest/20 text-forest-hover">
                      <AlertCircle size={24} />
                    </div>
                    <div className="max-w-md">
                      <h4 className="font-playfair text-lg font-semibold text-paper">
                        Pratinjau Video Mengalami Kendala
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-paper/70">
                        File video berukuran besar mungkin memerlukan pengaktifan fitur Git LFS pada pengaturan deployment Vercel, atau terjadi gangguan koneksi jaringan.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                      <a
                        href={activeVideo.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-forest bg-forest px-4 py-2 text-xs font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink"
                      >
                        <ExternalLink size={14} />
                        <span>Tonton Langsung di TikTok</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleRetryVideo}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-paper/20 px-3.5 py-2 text-xs font-medium text-paper/80 transition hover:border-paper/40 hover:text-paper"
                      >
                        <RotateCcw size={13} />
                        <span>Coba Lagi</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Loading spinner */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 bg-black/60 backdrop-blur-xs text-paper">
                        <Loader2 size={28} className="animate-spin text-forest-hover" />
                        <span className="text-xs font-medium text-paper/75 tracking-wider">
                          Memuat video...
                        </span>
                      </div>
                    )}

                    {/* Standard HTML5 Video Player */}
                    <video
                      key={activeVideo.videoUrl}
                      ref={videoRef}
                      controls
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      poster={activeVideo.thumbnail}
                      onLoadedData={() => setIsVideoLoading(false)}
                      onCanPlay={() => setIsVideoLoading(false)}
                      onWaiting={() => setIsVideoLoading(true)}
                      onPlaying={() => setIsVideoLoading(false)}
                      onError={() => {
                        setIsVideoLoading(false);
                        setVideoError(true);
                      }}
                      className="h-full w-full object-contain"
                    >
                      <source
                        src={activeVideo.videoUrl}
                        type="video/mp4"
                        onError={() => {
                          setIsVideoLoading(false);
                          setVideoError(true);
                        }}
                      />
                      Browser Anda tidak mendukung pemutaran video HTML5.
                    </video>
                  </>
                )}
              </div>

              {/* Modal Footer / Details */}
              <div className="flex flex-col gap-4 border-t border-paper/10 bg-charcoal/95 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs leading-relaxed text-paper/70">
                    {activeVideo.description}
                  </p>
                  {activeVideo.tags && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {activeVideo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-paper/10 bg-black/40 px-2 py-0.5 text-[10px] text-paper/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={activeVideo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-forest bg-forest px-4 py-2.5 text-xs font-semibold text-paper transition hover:border-forest-hover hover:bg-forest-hover hover:text-ink cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.91-1.09 4.82 4.82 0 0 1-1.43-2.43h-.03z" />
                    </svg>
                    <span>Tonton di TikTok</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="rounded-sm border border-paper/20 px-3.5 py-2 text-xs font-medium text-paper/80 transition hover:bg-paper/10 hover:text-paper cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </Page>
  );
}
