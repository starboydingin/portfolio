export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-forest-hover">{eyebrow}</p>
      ) : null}
      <h2 className="font-playfair text-4xl font-semibold text-paper sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl leading-7 text-paper/58">{description}</p> : null}
    </div>
  );
}
