import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Page({ children, className = '' }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return <main className={`page-shell animate-fade-in ${className}`}>{children}</main>;
}
