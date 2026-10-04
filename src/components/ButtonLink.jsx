import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ButtonLink({ to, children, variant = 'outline', className = '' }) {
  const variants = {
    outline:
      'border border-forest-hover/70 text-paper hover:border-forest-hover hover:bg-forest-hover hover:text-ink',
    solid: 'border border-forest bg-forest text-paper hover:border-forest-hover hover:bg-forest-hover hover:text-ink',
    ghost: 'border border-transparent text-paper hover:text-forest-hover',
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  );
}
