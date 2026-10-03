import Reveal from './Reveal';
import { howItWorks } from '../data/content';

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-pad bg-white">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="h-section">How Our Car Carrier Service Works</h2>
        <p className="lead mt-4">
          Simple, transparent and hassle-free — from your first message to final delivery.
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {howItWorks.map((step, i) => (
          <Reveal
            as="li"
            key={step.step}
            delay={(i % 3) * 90}
            className="glass sheen rounded-2xl p-7"
          >
            <span className="font-heading text-4xl font-bold text-azure-200 leading-none select-none">{step.step}</span>
            <h3 className="mt-3 text-[1.5rem] leading-snug text-ink">{step.title}</h3>
            <p className="mt-2 text-slate-600">{step.desc}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorksSection;
