import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import { faqs } from '../data/content';

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ice-300 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-ink hover:text-azure-700"
      >
        <span>{q}</span>
        <ChevronDown
          size={22}
          className={`shrink-0 text-azure-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section id="faq" className="section-pad bg-[linear-gradient(180deg,#F7FBFF,#EAF4FF)]">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="h-section">Frequently Asked Questions</h2>
        <p className="lead mt-4">Common questions about our car carrier and vehicle transport services across Pakistan.</p>
      </Reveal>

      <Reveal delay={80} className="mx-auto mt-12 max-w-3xl glass rounded-3xl p-6 sm:p-10">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </Reveal>
    </div>
  </section>
);

export default FaqSection;
