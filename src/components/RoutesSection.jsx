import { ArrowLeftRight, Check, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { routes } from '../data/content';
import { whatsappLink } from '../config/site';

const highlights = [
  'Both directions available (to & from Karachi)',
  'Door-to-door pickup & drop-off nationwide',
  'Fully insured multi-car carrier fleet',
];

const RoutesSection = () => (
  <section id="routes" className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#F0F7FF,#E6F2FF)]">
    <div className="orb -left-16 top-10 h-72 w-72 bg-azure-400/20" aria-hidden="true" />
    <div className="orb -right-16 bottom-10 h-72 w-72 bg-ice-300/40" aria-hidden="true" />

    <div className="container-page relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="h-section">Popular Car Transport Routes Across Pakistan</h2>
        <p className="lead mt-4">
          Reliable, scheduled two-way vehicle transportation connecting Karachi with every major city.
        </p>
      </Reveal>

      {/* Single All-in-One Route Card */}
      <Reveal delay={100} className="mx-auto mt-12 max-w-5xl">
        <div className="glass sheen lift relative overflow-hidden rounded-3xl p-6 sm:p-10 shadow-xl border border-white/80">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ice-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-azure-700/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-azure-800">
                <ArrowLeftRight size={14} className="text-azure-700" aria-hidden="true" />
                Two-Way Intercity Routes
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
                Nationwide Car Carrier Network
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Daily scheduled departures
            </div>
          </div>

          {/* Routes Grid inside single card */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <div
                key={r.slug}
                className="group flex items-center justify-between rounded-xl border border-ice-300/90 bg-white/75 px-4 py-3.5 shadow-sm transition-all duration-200 hover:border-azure-400 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin size={16} className="shrink-0 text-azure-600" aria-hidden="true" />
                  <span className="truncate text-base font-semibold text-ink sm:text-[1.05rem]">
                    {r.from}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-azure-50 text-xs font-bold text-azure-700 select-none">
                    ⇄
                  </span>
                  <span className="truncate text-base font-semibold text-ink sm:text-[1.05rem]">
                    {r.to}
                  </span>
                </div>
                {/* <span className="ml-2 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5 whitespace-nowrap">
                  Two-way
                </span> */}
              </div>
            ))}
          </div>

          {/* Card Features / Trust Badges */}
          <div className="mt-8 border-t border-ice-300 pt-6">
            <ul className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-600 text-white">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Bottom custom route inquiry */}
      <Reveal className="mt-10 text-center">
        <p className="text-slate-600">
          Need vehicle transport for another city or custom route?{' '}
          <a
            href={whatsappLink('Hello, I need a car carrier quote for vehicle transport.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-azure-700 underline underline-offset-4 hover:text-azure-900"
          >
            <WhatsAppIcon className="h-4 w-4" /> Message us on WhatsApp
          </a>
        </p>
      </Reveal>
    </div>
  </section>
);

export default RoutesSection;
