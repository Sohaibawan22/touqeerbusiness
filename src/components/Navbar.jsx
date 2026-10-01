import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '../config/site';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => mq.matches && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-azure-700 focus:px-4 focus:py-2 focus:font-semibold focus:text-white">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled || open ? 'border-white/70 bg-white/85 shadow-[0_10px_30px_-18px_rgba(15,91,176,.5)]' : 'border-transparent bg-white/55'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <a href="#home" className="flex min-h-[44px] min-w-0 items-center gap-3" aria-label={`${site.fullName}, back to top`} onClick={() => setOpen(false)}>
            <img src="/favicon.svg" alt="" width="40" height="40" className="h-10 w-10 shrink-0 rounded-[10px] shadow-md shadow-azure-700/30" />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate font-heading text-[1.4rem] font-bold text-ink">{site.name}</span>
              <span className="mt-1 truncate text-[0.8rem] font-medium text-slate-500">{site.tagline}</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? 'true' : undefined}
                    className={`relative py-2 text-[0.975rem] font-medium transition-colors ${active === id ? 'text-azure-700' : 'text-slate-600 hover:text-ink'}`}
                  >
                    {label}
                    {active === id && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-azure-500" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !min-h-[44px] !px-5 !py-2.5 lg:inline-flex">Get a quote</a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ice-300 bg-white/70 text-ink lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-white/70 bg-white/95 backdrop-blur-xl lg:hidden">
            <nav aria-label="Mobile" className="container-page py-3">
              <ul>
                {navLinks.map(({ label, id }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === id ? 'true' : undefined}
                      className={`flex min-h-[48px] items-center rounded-lg border-l-4 px-4 text-lg font-medium ${
                        active === id ? 'border-azure-500 bg-ice-100 text-azure-800' : 'border-transparent text-slate-700 active:bg-ice-100'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">Get a quote</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
