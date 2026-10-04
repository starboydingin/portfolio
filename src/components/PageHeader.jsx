export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 lg:pb-16">
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-forest-hover">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-4xl font-playfair text-5xl font-bold leading-[0.96] text-paper sm:text-7xl">
        {title}
      </h1>
      {description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/62">{description}</p> : null}
    </section>
  );
}
